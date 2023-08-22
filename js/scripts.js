
function BankAccount(name, initialDeposit, currentBalance) {
  this.name = name;
  this.initialDeposit = parseInt(initialDeposit);
  this.currentBalance = parseInt(currentBalance);
  // this line passes test #2
  this.currentBalance = this.initialDeposit;


}
  // this prototype passes test #3
BankAccount.prototype.addDeposit = function(deposit) {
  this.currentBalance = this.currentBalance + parseInt(deposit);
  return this.currentBalance;
};

BankAccount.prototype.subtractWithdrawl = function(withdrawl) {
  this.currentBalance = this.currentBalance - parseInt(withdrawl);
  return this.currentBalance;
};
 