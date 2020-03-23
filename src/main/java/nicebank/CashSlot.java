package nicebank;

public class CashSlot {

    private int contents;

    public int getContent() {
        return contents;
    }

    public void dispense(int dollars) {
        contents = dollars;
    }
}
