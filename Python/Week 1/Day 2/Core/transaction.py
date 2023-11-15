from bank_account import user_with_bank_account , bank_account

if __name__ == "__main__":
    user = user_with_bank_account.User("Alex", "a@m.com")
    user.display_user_balance()
    user.make_deposit(200)
    user.display_user_balance()