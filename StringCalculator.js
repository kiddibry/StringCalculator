function Add(numbers){
	if(numbers == "") return 0;
	else if(!numbers.includes(",")){
		return parseInt(numbers);
	}
	else{
		var arr = numbers.split(",");
		return parseInt(arr[0]) + parseInt(arr[1]);
	}
	return 0;
}

module.exports = Add;