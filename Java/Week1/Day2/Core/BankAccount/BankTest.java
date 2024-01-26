public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount(1000, 500);
        BankAccount account2 = new BankAccount(2000, 1000);
        BankAccount account3 = new BankAccount(1500, 200);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        System.out.println("Deposit Test:");
        account1.deposit(200, "checking");
        account2.deposit(300, "savings");
        account3.deposit(100, "checking");

        System.out.println("Account 1 Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Account 2 Savings Balance: " + account2.getSavingsBalance());
        System.out.println("Account 3 Checking Balance: " + account3.getCheckingBalance());

        System.out.println("************************");
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        System.out.println("Withdrawal Test:");
        account1.withdraw(50, "checking");
        account2.withdraw(200, "savings");
        account3.withdraw(300, "checking");

        System.out.println("Account 1 Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Account 2 Savings Balance: " + account2.getSavingsBalance());
        System.out.println("Account 3 Checking Balance: " + account3.getCheckingBalance());

        System.out.println("************************");


        // Static Test (print the number of bank accounts and the totalMoney)

        //  System.out.println("Static Test:");
        // System.out.println("Number of Bank Accounts: " + BankAccount.getAccounts());
        // System.out.println("Total Money: " + BankAccount.getTotalMoney());

    }
}
