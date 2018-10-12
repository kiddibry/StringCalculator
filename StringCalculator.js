function Add(numbers){

	if(numbers == "") return 0;
	else if(!numbers.includes("//") && !numbers.includes(",")){
		try{
				if(parseInt(numbers) < 0) throw "Negatives not allowed: " + parseInt(numbers);
				else if(parseInt(numbers) <= 1000) return parseInt(numbers);
			}
			catch(err){
				console.log(err);
			}
			return 0;
	}
	else if(isNaN(numbers[0]) && isNaN(numbers[1])){ //tékka á staki 1 og 0 svo mínus tölur komast ekki í gegn

		var delimiter = numbers.substr(2, numbers.indexOf("\n")-1);
		var subnumbers = numbers.substring(numbers.indexOf("\n"));
		var arr = subnumbers.split(delimiter);
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			try{
				if(arr[i] < 0) throw "Negatives not allowed: " + arr[i];

				if(parseInt(arr[i]) <= 1000)
				{
					sum = sum + parseInt(arr[i]);
				}
			}
			catch(err){
				console.log(err);
			}		
		}
		return sum;
	}
	else{
		var arr = numbers.split(/[\n,]+/);
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			try{
				if(arr[i] < 0) throw "Negatives not allowed: " + arr[i];

				if(parseInt(arr[i]) <= 1000)
				{
					sum = sum + parseInt(arr[i]);
				}
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