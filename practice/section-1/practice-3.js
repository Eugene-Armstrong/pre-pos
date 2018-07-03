'use strict';

function collectSameElements(collectionA, objectB) {
	let sameArr = []; //存放相同元素的集合
	let astr = collectionA.toString(); //存放A集合中的元素为string
	let bstr = objectB.value.toString(); //存放B对象中value属性中的元素为string
	for (let i = 0; i < collectionA.length; i++) {
		if(bstr.indexOf(collectionA[i].toString())>-1){ //比对字符串
			sameArr.push(collectionA[i]); //将相同元素追加到该集合中
		}
	}
  return sameArr;
}
