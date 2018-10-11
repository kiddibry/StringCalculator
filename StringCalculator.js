function Add(numbers){
	if(numbers == "") return 0;
	else if(!numbers.includes(",")){
		return parseInt(numbers);
	}
	else{
		var arr = numbers.split(/[\n,]+/);
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			try{
				if(arr[i] < 0) throw "Negatives not allowed: " + arr[i];
				sum = sum + parseInt(arr[i]);
			}
			catch(err){
				console.log(err);
			}			
		}
		return sum;
	}
	return 0;
}

module.exports = Add;