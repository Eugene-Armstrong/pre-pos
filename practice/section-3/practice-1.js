'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let result = [];
	let astr = "";
	let bstr = objectB.value.toString(); 
	for (let i = 0; i < collectionA.length; i++) { 
		astr += collectionA[i].key; 
		if(bstr.indexOf(collectionA[i].key.toString())>-1){ 
			collectionA[i].count-=1;
		}
		result.push({
			key:collectionA[i].key,
			count:collectionA[i].count
		}); 
	}
	return result; 
}
