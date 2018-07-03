'use strict';

function countSameElements(collection) {
	let arr = [];
	for (let i = 0; i < collection.length; i++) {
		let num = 0;
	    for (let j = i; j < collection.length; j++) {
			if (collection[i] === collection[j]) {
				num++;
			}
		}
		console.log(i);
		let tmpStr = collection[i].toString();
		if(tmpStr.length>1){
			collection[i] = tmpStr.substr(0,1);
			tmpStr = tmpStr.replace(/[^0-9]/ig,"");
			// console.log(collection[i]+":"+tmpStr);
			num = parseInt(tmpStr);
		}
		arr.push({
			key: collection[i],
			count: num
		})
		i+=num-1;
	}
	return arr;
}
