class BankAccount:
    # don't forget to add some default values for these parameters!
    all_account=[]
    def __init__(self, int_rate, balance): 
        self.int_rate=int_rate 
        self.balance=balance
        BankAccount.all_account.append(self)
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
         self.balance+=amount
         return self

    def withdraw(self, amount):
        # your code here
        if amount<=self.balance :
            self.balance-=amount
        else : 
            print("insufficient funds: Charging a $5 fee")  
            return False
        return self 

    def display_account_info(self):
        # your code here
        print(f"Balance : ${self.balance}")
        return self
    def yield_interest(self):
        # your code here
        self.balance=self.balance+ self.balance*self.int_rate
        return self
    @classmethod
    def display_all_account(cls):
        for i in BankAccount.all_account : i.display_account_info()
        return None
if __name__ == '__main__':
    account1 =BankAccount(0.3,5000)
    account2 =BankAccount(0.2,4000)
    account1.deposit(1000).deposit(100).deposit(600).withdraw(3000).yield_interest().display_account_info()
    account2.deposit(500).deposit(2000).withdraw(200).withdraw(500).withdraw(1000).withdraw(2000).yield_interest().display_account_info()
    BankAccount.display_all_account()

