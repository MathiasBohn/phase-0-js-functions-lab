


function calculateTax(amount) {

let calculatedTax = amount * (10/100)

return calculatedTax

}

const amount = 100;
const result = calculateTax(amount);

console.log(result)


function convertToUpperCase(text) {

    let convertedText = text.toUpperCase()

   return convertedText
}

 const text = 'hello world';
const result2 = convertToUpperCase(text);

console.log(result2)


function findMaximum(num1, num2) {

let MaxNum = Math.max(num1, num2)

return MaxNum

}


const num1 = 10;
    const num2 = 5;
    const result3 = findMaximum(num1, num2);

    console.log(result3)


function isPalindrome(word){

 let reversed = word.split('').reverse().join('');
  return word === reversed;

}

    const word = 'radar';
        const result4 = isPalindrome(word);

        console.log(result4)


function calculateDiscountedPrice(originalPrice, discountPercentage) {

let calculatedPrice = originalPrice * (discountPercentage/100)

let finalPrice = originalPrice - calculatedPrice

return finalPrice

}



        const originalPrice = 100;
            const discountPercentage = 20;
            const result5 = calculateDiscountedPrice(originalPrice, discountPercentage);

            console.log(result5)

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };