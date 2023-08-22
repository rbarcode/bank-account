
function BankAccount(name, initialDeposit, currentBalance) {
  this.name = name;
  this.initialDeposit = parseInt(initialDeposit);
  this.currentBalance = parseInt(currentBalance);
  // this line passes test #2
  this.currentBalance = this.initialDeposit;


}
  // this prototype passes test #3
BankAccount.prototype.addDeposit = function(depositAmount) {
  this.currentBalance = this.currentBalance + parseInt(depositAmount);
  return this.currentBalance;
};