'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let c = [];
	for (let i = 0; i < collectionA.length; i++) {
		let num = 0;
	    for (let j = i; j < collectionA.length; j++) {
			if (collectionA[i] === collectionA[j]) {
				num++;
			}
		}
		c.push({
			key: collectionA[i],
			count: num
		})
		i+=num-1;
	}
	let cstr = ""; //存放C集合中元素的key属性为string
	let bstr = objectB.value.toString(); //存放B对象中value属性中的元素为string
	for (let i = 0; i < c.length; i++) { 
		cstr += c[i].key; //遍历追加C集合中元素的key属性
		if(bstr.indexOf(c[i].key.toString())>-1){ //比对字符串
			if(c[i].count>=3){
				c[i].count-=parseInt(c[i].count/3);
			}
		}
	}
	return c;
}
