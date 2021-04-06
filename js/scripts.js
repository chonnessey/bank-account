function BankAccount(firstName, lastName, firstDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = Number(firstDeposit);
}

BankAccount.prototype.Deposit = function(amount) {
  this.balance = this.balance + amount
}

BankAccount.prototype.Withdraw = function(amount) {
  this.balance = this.balance - amount
}

BankAccount.prototype.GetBalance = function() {
  return this.balance
}

BankAccount.prototype.GetUserName = function() {
  return this.firstName + " " + this.lastName
}

// UI logic
// UI Helpers
function submitHelper(event) {
  event.preventDefault()
  const firstName = $("#firstName").val()
  const lastName = $("#lastName").val()
  const firstDeposit = $("#firstDeposit").val()

  myBankAccount = new BankAccount(firstName, lastName, firstDeposit)
  console.log(myBankAccount)
  // hide the register form
  $("#register").hide()
  // put the values into the account page divs
    // put the name in the welcome div
  $(".welcome").append(myBankAccount.firstName + " " + myBankAccount.lastName + "'s Account")
    // put the account balance in the balance div
  $(".current-balance").text("$" + myBankAccount.balance)
  // show the account page divs
  $(".account").show()
}

function depositHelper() {
  const depositAmount = Number($("#deposit-input").val())
  if (depositAmount === undefined || depositAmount === 0) {
    return alert("Bad input!")
  }
  myBankAccount.Deposit(depositAmount)
  $(".current-balance").text("$" + myBankAccount.balance)
}

function withdrawHelper() {
  const withdrawAmount = Number($("#withdraw-input").val())
  console.log(withdrawAmount)
  if (withdrawAmount === undefined || withdrawAmount === 0) {
    return alert("Bad input!")
  }
  myBankAccount.Withdraw(withdrawAmount)
  $(".current-balance").text("$" + myBankAccount.balance)
}

let myBankAccount

// jQuery doc ready and event listeners
$(document).ready(function() {
  $("#register").submit(submitHelper)
  $("#deposit-button").click(depositHelper)
  $("#withdraw-button").click(withdrawHelper)
})



