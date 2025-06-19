// Type
export const FILTER_TYPE = "category_sub_cb";
export const FILTER_TYPE_ID = {
	flat: 47,
	"1+kk": 2,
	"1+1": 3,
	"2+kk": 4,
	"2+1": 5,
	"3+kk": 6,
	"3+1": 7,
	"4+kk": 8,
	"4+1": 9,
	"5+kk": 10,
	"5+1": 11,
	"6": 12,
	other: 16,
};
export type FilterType = keyof typeof FILTER_TYPE_ID;

// Region
export const FILTER_REGION = "locality_region_id";

export type FilterRegion =
	| "karlovarsky"
	| "ustecky"
	| "liberecky"
	| "plzensky"
	| "stredocesky"
	| "praha"
	| "kralovehradecky"
	| "jihocesky"
	| "vysocina"
	| "pardubicky"
	| "jihomoravsky"
	| "olomoucky"
	| "moravskoslezsky"
	| "zlinsky";

export const FILTER_REGION_ID: Record<FilterRegion, number> = {
	karlovarsky: 3,
	ustecky: 4,
	liberecky: 5,
	plzensky: 2,
	stredocesky: 11,
	praha: 10,
	kralovehradecky: 6,
	jihocesky: 1,
	vysocina: 13,
	pardubicky: 7,
	jihomoravsky: 14,
	olomoucky: 8,
	moravskoslezsky: 12,
	zlinsky: 9,
};

// Condition
export const FILTER_CONDITION = "building_condition";

export const FILTER_CONDITION_ID = {
	decent: 1,
	good: 2,
	bad: 3,
	construction: 4,
	developer: 5,
	new: 6,
	demolition: 7,
	beforeReconstruction: 8,
	afterReconstruction: 9,
	underReconstruction: 10,
};
export type FilterCondition = keyof typeof FILTER_CONDITION_ID;

// Districts
// TODO: Other region districts
export const FILTER_DISTRICT = "locality_district_id";

export const FILTER_DISTRICT_ID = {
	prague1: 5001,
	prague2: 5002,
	prague3: 5003,
	prague4: 5004,
	prague5: 5005,
	prague6: 5006,
	prague7: 5007,
	prague8: 5008,
	prague9: 5009,
	prague10: 5010,
};
export type FilterDistrict = keyof typeof FILTER_DISTRICT_ID;

// Building type
export const FILTER_BUILDING_TYPE = "building_type_search";

export const FILTER_BUILDING_TYPE_ID = {
	panel: 1,
	concrete: 2,
	other: 3,
};
export type FilterBuildingType = keyof typeof FILTER_BUILDING_TYPE_ID;

// Energy efficiency
export const FILTER_ENERGY_EFFICIENCY = "energy_efficiency_rating_search";

export const FILTER_ENERGY_EFFICIENCY_ID = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
};
export type FilterEnergyEfficiency = keyof typeof FILTER_ENERGY_EFFICIENCY_ID;

// Furnished
export const FILTER_FURNISHED = "furnished";

export const FILTER_FURNISHED_ID = {
	yes: 1,
	no: 2,
	partially: 3,
};
export type FilterFurnished = keyof typeof FILTER_FURNISHED_ID;

// Date
export const FILTER_DATE = "ready_date";

export type DateString = `${number}-${number}-${number}`;

export type FilterDate =
	| `${DateString}|`
	| `${DateString}|${DateString}`
	| `|${DateString}`
	| "now";

// Extras
export const FILTER_EXTRA_1 = "something_more1";
export const FILTER_EXTRA_1_ID = {
	balcony: 3090,
	terrace: 3110,
	loggia: 3100,
	shop: 3120,
	garden: 20222,
};
export type FilterExtra1 = keyof typeof FILTER_EXTRA_1_ID;

export const FILTER_EXTRA_2 = "something_more2";
export const FILTER_EXTRA_2_ID = {
	parking: 3140,
	garage: 3150,
};
export type FilterExtra2 = keyof typeof FILTER_EXTRA_2_ID;

export const FILTER_EXTRA_3 = "something_more3";
export const FILTER_EXTRA_3_ID = {
	elevator: 3310,
	accessible: 1820,
};
export type FilterExtra3 = keyof typeof FILTER_EXTRA_3_ID;

// Floor
export const FILTER_FLOOR = "floor_number";
export type FilterFloor = `${number}|${number}`;

// Area
export const FILTER_USABLE_AREA = "usable_area";
export type FilterUsableArea = `${number}|${number}`;

// Age
export const FILTER_AGE = "estate_age";
export const FILTER_AGE_ID = {
	day: 2,
	week: 8,
	month: 31,
};
export type FilterAge = keyof typeof FILTER_AGE_ID;

// Price
export const FILTER_PRICE = "czk_price_summary_order2";

export type FilterPrice = `${number}` | `${number}|${number}`;

export type FilterOptions = {
	types?: FilterType[];
	regions?: FilterRegion[];
	conditions?: FilterCondition[];
	districts?: FilterDistrict[];
	buildingTypes?: FilterBuildingType[];
	energyEfficiencies?: FilterEnergyEfficiency[];
	furnished?: FilterFurnished[];
	extras1?: FilterExtra1[];
	extras2?: FilterExtra2[];
	extras3?: FilterExtra3[];
	dates?:
		| {
				from?: Date;
				to?: Date;
		  }
		| { now: true };

	prices?: {
		from?: number;
		to?: number;
	};
	page?: number;
};
