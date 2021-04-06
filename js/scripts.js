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
  console.log("deposit button clicked")
  const depositAmount = Number($("#deposit-input").val())



  // parseInt("1") => 1
  // parseInt("123abc") => 123
  // Number("123abc") => undefined
  console.log(depositAmount)
  if (depositAmount === undefined || depositAmount === 0) {
    return alert("Bad input!")
  }
  // if we get past here, we have a good value/input/number
  myBankAccount.Deposit(depositAmount)
  console.log(myBankAccount)

  // update the value of the account balance that is displayed
  $(".current-balance").text("$" + myBankAccount.balance)
}

function withdrawHelper() {
  console.log("withdraw button clicked")
  const withdrawAmount = Number($("#withdraw-input").val())

  // parseInt("1") => 1
  // parseInt("123abc") => 123
  // Number("123abc") => undefined
  console.log(withdrawAmount)
  if (withdrawAmount === undefined || withdrawAmount === 0) {
    return alert("Bad input!")
  }
  // if we get past here, we have a good value/input/number
  myBankAccount.Withdraw(withdrawAmount)
  console.log(myBankAccount)

  // update the value of the account balance that is displayed
  $(".current-balance").text("$" + myBankAccount.balance)
}

let myBankAccount

// jQuery doc ready and event listeners
$(document).ready(function() {
  $("#register").submit(submitHelper)
  $("#deposit-button").click(depositHelper)
  $("#withdraw-button").click(withdrawHelper)
})



