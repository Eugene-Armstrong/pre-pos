'use strict';

function countSameElements(collection){
    let result = [];
    for (let ele of collection) {
        let obj = {
            name: ele[0],
            summary: 1
        }
        if (ele.length > 1) {
            obj = {
                name: ele[0],
                summary: parseInt(ele.replace(/[^0-9]/ig,""))
            }
        }
        result.push(obj);
    }
    // console.info(result);
    let finalResult = getResult(result);
    return finalResult;
}

function getResult (arr) {
	let obj = {}
	let result = []
	arr.forEach(({name, summary}) => {
		let cur = obj[name]
		if (cur) {
			let index = cur.index;
			result[index].summary += summary;
	    } else {
			let index = result.length;
			obj[name] = {
				name,
				index
			}
			result.push({name, summary});
		}
	})
	console.info(result);
	return result;
}
