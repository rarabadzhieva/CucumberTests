package nicebank;

public class Teller {

    private CashSlot cashSlot;

    public Teller(CashSlot cashSlot) {
        this.cashSlot = cashSlot;
    }

    public void withdrawFrom(Account account, int dollars) {
        if (account.getBalance().dollars() >= dollars) {
            cashSlot.dispense(dollars);
        } else {
            cashSlot.dispense(account.getBalance().dollars());
        }
    }
}
