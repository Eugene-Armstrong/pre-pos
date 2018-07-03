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
		arr.push({
			key: collection[i],
			count: num
		})
		i+=num-1;
	}
	return arr;
}
