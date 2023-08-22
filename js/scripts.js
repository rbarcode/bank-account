
// Business Logic

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
    // this prototype passes test #4
BankAccount.prototype.subtractWithdrawl = function(withdrawl) {
  this.currentBalance = this.currentBalance - parseInt(withdrawl);
  return this.currentBalance;
};
 

// UI Logic

window.addEventListener("load", submit);

function submit() {
  const form = document.getElementById("registration");
  form.addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedName = document.getElementById("name").value;
  const initialDeposit = document.getElementById("initial-deposit").value;
  let acct = new BankAccount(inputtedName, initialDeposit);
  console.log(acct);
}