let countTo = document.getElementById("countToInput").value;
let countBy = document.getElementById("countByInput").value;

function countUpBy(countTo, countBy) {
	let stringArray = [];
	for (let index = 0; index <= countTo; index += countBy) {
		stringArray.push(countUpBy[index]);
		p.append(stringArray);
        console.log(index);
	}
}



// for (let index = 0; index <= 100; index += 5){
//     console.log(index);
// }