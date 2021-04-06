const { test, expect } = require("@jest/globals")
import { BankAccount } from "../js/BankAccount.js"

test("description goes here", function() {
  // console.log(BankAccount)
  expect(true).toEqual(true)
})

test("test that GetBalance works", function() {
  const myBankAccount = new BankAccount("test first", "test last", 50)
  expect(myBankAccount.GetBalance()).toEqual(50)
})

test("test that GetUserName works", function() {
  const myBankAccount = new BankAccount("first", "last", 50)
  expect(myBankAccount.GetUserName()).toEqual("first last")
}) 



// BankAccount.prototype.Deposit = function(amount) {
//   this.balance = this.balance + amount
// }

// BankAccount.prototype.Withdraw = function(amount) {
//   this.balance = this.balance - amount
// }

// BankAccount.prototype.GetBalance = function() {
//   return this.balance
// }

// BankAccount.prototype.GetUserName = function() {
//   return this.firstName + " " + this.lastName
// }

// test("constructor will create a new place object", function() {
//   let place1 = new Place()
//   expect(place1).toBe(new Place())
// })

// Test: Place constructor will create a new place object.
// Code: let place1 = new Place()
// Expected Output = ("Milan", "Italy", ["The Duomo", "San Siro", "La Scala"], "Winter", "Has the most skyscrapers in Italy!");


