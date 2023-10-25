// function handleFormSubmission(event) {
// 	event.preventDefault();

// 	let countTo = parseInt(document.getElementById("countToInput").value);
// 	let countBy = parseInt(document.getElementById("countByInput").value);
// }

// function countUpBy(countTo, countBy) {
// 	let results = [];
// 	for (let index = 0; index <= countTo; index += countBy) {
// 		results.push(countUpBy[index]);
// 		p.append(results);
// 		console.log(index);
// 	}
// }

// console.log(countUpBy);


// window.addEventListener("load", function () {
// 	document.querySelector("form#countBy").addEventListener("submit", handleFormSubmission);
// });

// Business logic
function countUpBy(countTo, countBy) {
	let output = [];
	for (let index = 0; index <= countTo; index += countBy) {
		output.push(index);
	}
	return output;
}

window.addEventListener("load", function () {
	const form = document.querySelector("form#countBy");
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		let countTo = parseInt(document.getElementById("countToInput").value);
		let countBy = parseInt(document.getElementById("countByInput").value);
		const outputP = document.getElementById("results");
		outputP.append(countUpBy(countTo, countBy));

	});

});

// document.querySelector("div#bolded-passage").innerText = null;