/**
 * 
 */

var frequency = function() {
		
	var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
	arr.sort();
	var max=0, result, freq = 0;
	for (var i=0; i < arr.length; i++){
	    if(arr[i] === arr[i + 1]){
	        freq++;
	    }
	    else {
	        freq=0;
	    }
	    if(freq > max){
	        result = arr[i];
	        max = freq;
	    }
	}
	return result;
};

console.log(frequency());