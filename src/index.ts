import { parseEstate } from "./parser/parser.ts";
import { type EstateDetails, fetchEstateDetails } from "./sreality/details.ts";
import { searchEstates } from "./sreality/search.ts";

for (let page = 1; page <= 50; ++page) {
	try {
		const estates = await searchEstates({
			types: ["2+kk", "2+1", "3+kk", "1+1"],
			regions: ["praha"],
			conditions: ["afterReconstruction", "decent", "good", "new"],
			energyEfficiencies: ["A", "B", "C"],
			extras1: ["balcony", "terrace"],
			prices: {
				from: 10_000,
				to: 41_000,
			},
			page,
		});

		const storage: EstateDetails[] = [];

		for (const estate of estates) {
			try {
				const details = await fetchEstateDetails(estate);
				if (!details) {
					console.error("Failed to fetch estate details");
					continue;
				}
				const parsed = await parseEstate(details);
				storage.push(parsed);
			} catch (error) {
				console.error(error);
			}
		}

		await Deno.writeFile(
			`./data/${page}.json`,
			new TextEncoder().encode(JSON.stringify(storage)),
		);
	} catch (error) {
		console.error(error);
	}
}
