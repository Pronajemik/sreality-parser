import { request } from "../requests.ts";
import { FILTER_TYPE_ID, type FilterType } from "./filters.ts";
import type {
	EstateDetailsResponse,
	EstateDistanceResponse,
} from "./response.ts";

const DISTANCE_PATH = "/cs/v2/rus/locality/";
const PRICE_HINT_NAME = "Poznámka k ceně";

export type EstateDetails = {
	id: number;
	realUrl: string;
	name: string;
	description: string;
	metaDescription: string;
	priceHint: string;
	basePrice?: number;
	locality: string;
};

export async function fetchEstateRoute(args: {
	estateId: number;
	gpsParams: string;
}) {
	const { estateId, gpsParams } = args;
	const url = `${DISTANCE_PATH}/${estateId}?transport=by_pubt${gpsParams}`;
	const response = await request<EstateDistanceResponse>({
		url,
		appendToApi: true,
	});
	if (!response.ok) {
		console.log({ error: response.error }, "Estate distance request failed");
		Deno.exit(1);
	}

	const duration =
		response.data._embedded.advert_path.paths[0].path_duration / 60;
	const distance =
		response.data._embedded.advert_path.paths[0].path_distance / 1000;

	return {
		time: Number(duration.toFixed(3)),
		distance: Number(distance.toFixed(3)),
	};
}

export async function fetchEstateDetails(args: {
	url: string;
}): Promise<EstateDetails | null> {
	const { url } = args;
	const response = await request<EstateDetailsResponse>({
		url,
		appendToApi: true,
	});
	if (!response.ok) {
		console.log({ error: response.error }, "Estate details fetch failed");
		Deno.exit(1);
	}

	const estateId = response.data?.recommendations_data?.hash_id;
	if (!estateId) {
		return null;
	}

	const locality = response.data.seo.locality;
	const category = Object.keys(FILTER_TYPE_ID).find(
		(name) =>
			FILTER_TYPE_ID[name as FilterType] === response.data.seo.category_sub_cb,
	);
	const realUrl = `https://www.sreality.cz/detail/pronajem/byt/${category}/${locality}/${estateId}`;

	return {
		id: estateId,
		realUrl,
		name: response.data.name.value,
		description: response.data.text.value,
		metaDescription: response.data.meta_description,
		priceHint:
			response.data.items
				.find((item) => item.name === PRICE_HINT_NAME)
				?.value.toString() ?? "",
		basePrice: response.data.price_czk.value_raw,
		locality: response.data.locality.value,
	};
}
