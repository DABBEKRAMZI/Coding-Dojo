public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance=checkingBalance ;
        this.savingsBalance=savingsBalance;
        this.accounts++;
        this.totalMoney =(checkingBalance+savingsBalance);
    }
    // GETTERS
    // for checking, savings, accounts, and totalMoney
     public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

     public double getTotalMoney() {
        return this.totalMoney;
    }
    public int getAccount(){
        return this.accounts;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void deposit(double amount, String accountType) {
        if (accountType.equalsIgnoreCase("checking")) {
            checkingBalance += amount;
        } else if (accountType.equalsIgnoreCase("savings")) {
            savingsBalance += amount;
        }
        // Update totalMoney
        totalMoney += amount; 
    }


    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
     public void withdraw(double amount, String accountType) {
        if (accountType.equalsIgnoreCase("checking")) {
            if (amount <= checkingBalance) {
                checkingBalance -= amount;
                totalMoney -= amount; 
            } else {
                System.out.println("Insufficient funds in checking account.");
            }
        } else if (accountType.equalsIgnoreCase("savings")) {
            if (amount <= savingsBalance) {
                savingsBalance -= amount;
                totalMoney -= amount;
            } else {
                System.out.println("Insufficient funds in savings account.");
            }
        }
    }
    // getBalance
    // - display total balance for checking and savings of a particular bank account

      public void getBalance() {
        System.out.println("Checking Balance: " + checkingBalance);
        System.out.println("Savings Balance: " + savingsBalance);
    }

}
