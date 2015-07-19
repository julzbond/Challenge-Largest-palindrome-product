var chai = require('chai');
var expect = chai.expect;

var findPalindromeProduct = require("../largest_palindrome_product.js");

describe("The Largest Palindrome Product", function () {

  it("of two 2 digit numbers should be 9009, 91×99", function () {
    var result = findPalindromeProduct(2,2);
    expect(result.palindromeNumber).to.equal(9009);
    // make sure solution contains the two factors
    expect([91, 99]).to.have.members(result.factor_0);
    expect([91, 99]).to.have.members(result.factor_1);
  });

  it("of two 3 digit numbers should be 906609", function () {
    var product = challenge_4.largestPalindromeProduct(2,3);
    expect(product.palindromeNumber).toEqual(906609);
  });

});