function BankAccount(firstName, lastName, firstDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = firstDeposit;
}

BankAccount.prototype.Deposit = function(amount) {
  this.balance = this.balance + amount 
}

BankAccount.prototype.Withdraw = function(amount) {
  this.balance = this.balance - amount 
}



