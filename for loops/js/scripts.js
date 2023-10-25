// Business logic
function countUpBy(countTo, countBy) {
	let output = [];
	for (let index = 0; index <= countTo; index += countBy) {
		output.push(index);
	}
	return output;
}
// UI Logic
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