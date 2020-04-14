package emag;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class BasePage {

    private static final String EMAIL = "qwerty2403_2020@abv.bg";
    private static final String FIRST_LAST_NAME = " Qwerty Asdfgh";
    private static final String PASSWORD = "p@r0l@123";
    private static final String BOOKS_ULR = "https://www.emag.bg/romani/c?ref=hp_menu_quick-nav_683_3&type=category";

    WebDriver driver;
    WebDriverWait wait;

    @Inject
    public BasePage(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, 100);
        PageFactory.initElements(driver ,this);
    }

    @FindBy(css = "a.btn.btn-primary.btn-emag.btn-sm")
    private WebElement loginAccount;

    @FindBy(id = "email")
    private WebElement emailTextField;

    @FindBy(id = "password")
    private WebElement loginPasswordTextField;

    @FindBy(css = "button.gui-btn.auth-btn-primary.auth-submit")
    private WebElement submitButton;

    @FindBy(id = "my_account")
    private WebElement accountMenu;

    @FindBy(xpath = "//*/div[@class=\"ph-dropdown-inner\"]/p/strong")
    private WebElement welcomeMsg;

    @FindBy(id = "searchboxTrigger")
    private WebElement searchTextField;

    @FindBy(xpath = "//*[@id=\"page-skin\"]//*[@class=\"small text-muted\"]")
    private List<WebElement> searchResults;

    @FindBy(xpath = "//*/li[@data-id=683]")
    private WebElement booksOfficePresentsCategory;

    @FindBy(xpath = "//*[@data-position=\"1\"]//button[@data-category-id=\"1000\"]")
    private WebElement harryPotterCollectionAddButton;

    @FindBy(xpath = "//*[@class=\"modal-content\"]")
    private WebElement modalDialog;

    @FindBy(css = "button.close.gtm_6046yfqs")
    private WebElement modalDialogCloseButton;

    @FindBy(css = "span.jewel.jewel-danger")
    private WebElement basketIcon;

    public void clickLoginAccount() {
        loginAccount.click();
    }

    public void enterEmailAddressAndSubmit() {
        wait.until(ExpectedConditions.visibilityOf(emailTextField));
        emailTextField.sendKeys(EMAIL);
        submitButton.click();
    }

    public void enterPasswordAndSubmit() {
        wait.until(ExpectedConditions.visibilityOf(loginPasswordTextField));
        loginPasswordTextField.sendKeys(PASSWORD);
        submitButton.click();
    }

    public void signInVerification() {
        wait.until(ExpectedConditions.visibilityOf(accountMenu));
        Actions actions = new Actions(driver);
        actions.moveToElement(accountMenu).build().perform();
        wait.until(ExpectedConditions.visibilityOf(welcomeMsg));
        Assert.assertEquals("Incorrect welcome message -", FIRST_LAST_NAME, welcomeMsg.getText().split(",")[1]);
    }

    public void searchFor(String item) {
        searchTextField.sendKeys(item);
        searchTextField.sendKeys(Keys.ENTER);
    }

    public void verifySearchResults(String results) {
        wait.until(ExpectedConditions.visibilityOf(accountMenu));
        Assert.assertEquals("Incorrect search results -", results, searchResults.get(0).getText());
    }

    public void navigateToBookCategory() {
        Actions actions = new Actions(driver);
        actions.moveToElement(booksOfficePresentsCategory).build().perform();
        driver.get(BOOKS_ULR);
    }

    public void addHarryPotterCollection() {
        wait.until(ExpectedConditions.visibilityOf(harryPotterCollectionAddButton));
        harryPotterCollectionAddButton.click();
    }

    public void checkModalDialogAndClose() {
        wait.until(ExpectedConditions.visibilityOf(modalDialog));
        modalDialog.isDisplayed();
        modalDialogCloseButton.click();
    }

    public void verifyBasketContent(int count) {
        Assert.assertEquals("Incorrect number of items -", String.valueOf(count), basketIcon.getText());
    }
}
