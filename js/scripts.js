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

BankAccount.prototype.GetBalance = function() {
  return this.balance
}

BankAccount.prototype.GetUserName = function() {
  return this.firstName + " " + this.lastName
}

// UI logic

$(document).ready(function() {
  $("#register").submit(function(event) {
    event.preventDefault()
    const firstName = $("#firstName").val()
    const lastName = $("#lastName").val()
    const firstDeposit = $("#firstDeposit").val()

    const myBankAccount = new BankAccount(firstName, lastName, firstDeposit)
    console.log(myBankAccount)
    // hide the register form
    $("#register").hide()
    // put the values into the account page divs
      // put the name in the welcome div
      $(".welcome").append(myBankAccount.firstName + " " + myBankAccount.lastName + "'s Account")
      // put the account balance in the balance div
      $(".account-info").append("$" + myBankAccount.balance)
    // show the account page divs
    $(".account").show()
  })

  $("#deposit-button").click(function() {
    console.log("deposit button clicked")
  })

  $("#withdraw-button").click(function() {
    console.log("withdraw button clicked")
  })
})



