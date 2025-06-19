async function validateDataset() {
	// let right = 0;
	// let wrong = 0;
	// for (const entry of DATASET) {
	// 	const response = await parseEstate(entry.description);
	// 	for (const field of Object.keys(entry.expectedResult)) {
	// 		const correct =
	// 			entry.expectedResult[field as keyof typeof entry.expectedResult];
	// 		console.log(field, response[field], correct);
	// 		const isRight = Array.isArray(correct)
	// 			? correct.includes(response[field])
	// 			: correct === response[field];
	// 		right += Number(isRight);
	// 		wrong += Number(!isRight);
	// 	}
	// }
	// return {
	// 	total: DATASET.length,
	// 	right,
	// 	wrong,
	// };
}

const validation = await validateDataset();
console.info(validation);
