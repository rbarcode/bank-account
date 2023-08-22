
###TESTS

Describe: BankAccount(name, initialDeposit, currentBalance)
Test #1: It will contain properties for name, initialDeposit, currentBalance.
Code: bankAccount;
Expected Outcome: BankAccount {name: undefined, initialDeposit: undefined, currentBalance: undefined}

Test #2: The currentBalance will equal the initialDeposit when the object is first made.
Code: let bankAccount = new BankAccount("Customer", 10, 500)
Expected Outcome: bankAccount {name: "Customer", initialDeposit: "10", currentBalance: "10"}

Describe: BankAccount.prototype.addDeposit(depositAmount)
Test #3: It will add a given amount to the currentBalance.
Code: 
let bankAccount = new BankAccount("Customer", 10, 10)
bankAccount.addDeposit(5);
Expected Outcome: currentBalance = 15