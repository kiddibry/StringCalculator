function Add(numbers){
	if(numbers == "") return 0;
	else if(!numbers.includes(",")){
		return parseInt(numbers);
	}
	else{
		var arr = numbers.split(/[\n,]+/);
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum = sum + parseInt(arr[i]);
		}
		return sum;
	}
	return 0;
}

module.exports = Add;