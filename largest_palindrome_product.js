/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */

/* A palindromic number reads the same both ways. The largest palindrome
*  made from the product of two 2-digit numbers is 9009 = 91 × 99.
*  Find the largest palindrome made from the product of two 3-digit numbers.
*/

module.exports = function (multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  // do your work here

  // Calculate products from largest numbers
  // Power of product (10 to the power of x)

  var numArr = [];
  for (var i = 0; i <= digits; i++){
    numArr.push(9);
  };
  var numArrJoin = numArr.join("");


  // Find largest product that is a palindrome

  var product;
  var palindromes = [];

  // Reverse method for arrays

  function palindrome(product) {
    var proStr = product.toString();
    var proLen =  proStr.length;
    for (var i = 0; i < Math.floor(proLen/2); i++) {
      if (proStr[i] === proStr[proLen - 1 - i]) {
        return true;
      };
    };
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};