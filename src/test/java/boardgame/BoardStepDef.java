package boardgame;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.ArrayList;
import java.util.List;

public class BoardStepDef {

    private List<List<String>> board;

    @Given("^a board like this:$")
    public void aBoardLikeThis(DataTable table) throws Throwable {
        System.out.println(table.toString());
        this.board = new ArrayList<List<String>>();
        for (List<String> row : table.asLists()) {
            this.board.add(new ArrayList<String>(row));
        }
    }

    @When("^player x plays in row (\\d+), column (\\d+)$")
    public void playerXPlaysInRowColumn(int row, int col) throws Throwable {
        System.out.println(board.toString());
        board.get(row).set(col, "x");
    }

    @Then("^the board should look like this:$")
    public void theBoardShouldLookLikeThis(DataTable expectedTable) throws Throwable {
        expectedTable.diff(DataTable.create(board));
        System.out.println(expectedTable.toString());
    }

}
