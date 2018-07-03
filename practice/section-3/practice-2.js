'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let result = [];
	let astr = "";
	let bstr = objectB.value.toString(); 
	for (let i = 0; i < collectionA.length; i++) { 
		astr += collectionA[i].key; 
		if(bstr.indexOf(collectionA[i].key.toString())>-1){ 
			if(collectionA[i].count>=3){
				collectionA[i].count-=parseInt(collectionA[i].count/3);
				console.log(collectionA[i].key+":"+collectionA[i].count);
			}
		}
		result.push({
			key:collectionA[i].key,
			count:collectionA[i].count
		}); 
	}
	return result; 
}
