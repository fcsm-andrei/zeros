module.exports = function getZerosCount(number) {
	let i = 1,
    result = 0;
    while (number >= i){
    	i *= 5;
        result += Math.floor(number/i);
    }
        
    return result;  
}
//const zerosCount = getZerosCount(100); // Factorial of 10 is 3628800
    //console.log(zerosCount); // 2. Because there is 2 *tail* zeros in number 3628800