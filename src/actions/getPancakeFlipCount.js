function flipPancakes(pancakes, debug = false){
    const flipperSize = parseInt(pancakes.charAt(pancakes.length-1));
    pancakes = pancakes.substring(0,pancakes.length-1);

	let pLength = pancakes.length;
	let flipCount = 0;

	let pArr = [...pancakes];

	function isAllFlipped(){
		return pArr.indexOf("-") == -1;
	}

	function debugRow(){
		if(debug == false) return;
		console.log(pArr.join(" "));
	}

	if(isAllFlipped()){
		return flipCount == 0 ? 'Already happy side up' : flipCount;
	}

	for(let i = 0;i< (pLength - flipperSize + 1) ;i++){

		let panCakeFace = pArr[i];
		if(panCakeFace == "+"){
			continue;
		}

		for(let j = 0; j< flipperSize;j++){

			let pFace = pArr[i+j];

			pArr[i+j] = pFace == "+" ? "-" : "+";
		}

		flipCount++;
		debugRow();
		

	}

	if(isAllFlipped() == false){
		return 'IMPOSSIBLE';
	}

	return flipCount;

}

function getAllCases(str) {
    let testCase = [str.charAt(0)];
    let startIndex = 1;
    for(let i=1;i<str.length;i++) {
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9') { 
            testCase.push(str.substring(startIndex,i+1));
            startIndex = i + 1;
        }
    }
    return testCase
}

export function findTotalNoOfFlipinEachCase(str) {
    //console.log('INPUT STRING::::',str)
    const inputData = getAllCases(str);
	const totalNoOfCase = inputData[0];
	const result = [];
    for(let i=0; i<totalNoOfCase; i++) {
		//console.log(`CASE #${i+1} = ${flipPancakes(inputData[i+1],false)}`);
		result.push(`CASE #${i+1} = ${flipPancakes(inputData[i+1],false)}`);
    }  
    return result;
}

// let case1 = flipPancakes("---+-++-3",false);
// console.log(case1);
// let case2 = flipPancakes("+++++4",false);
// console.log(case2);
// let case3 = flipPancakes("-+-+-4",false);
// console.log(case3);
// console.log('===========');
//console.log(findTotalNoOfFlipinEachCase('3---+-++-3+++++4-+-+-4'));

