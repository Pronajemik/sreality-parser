export const API_ENDPOINT = "https://www.sreality.cz/api";

export async function request<T>(args: {
	url: URL | string;
	appendToApi?: boolean;
}): Promise<
	{ ok: true; data: T; cookie: string | null } | { ok: false; error: unknown }
> {
	const { url, appendToApi } = args;
	try {
		const uri = `${appendToApi ? API_ENDPOINT : ""}${url}`;
		const response = await fetch(uri, {
			headers: Bun.env.SREALITY_AUTH
				? { Cookie: `ds=${Bun.env.SREALITY_AUTH}` }
				: {},
		});
		const result = await response.json();
		const setCookie = response.headers.get("Set-Cookie");
		return {
			ok: true,
			data: result as T,
			cookie: setCookie,
		};
	} catch (error) {
		return {
			ok: false,
			error,
		};
	}
}
