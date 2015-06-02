function BankAccount(owner, initialAmount) {
  this.owner = owner;
  this.initialAmount = initialAmount;
  this.currentAmount = initialAmount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.currentAmount -= amount;
  return this.currentAmount;
}

BankAccount.prototype.deposit = function(amount) {
  this.currentAmount += amount;
  return this.currentAmount;
}
