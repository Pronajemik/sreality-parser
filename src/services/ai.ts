const GRAMMAR = `root ::= "{" fields "}"

boolean ::= ("true" | "false" | "null")
number ::= ([0-9]+ | "null")

fields ::= rent-1 "," fees-1 "," rent-2 "," fees-2 "," agent-RK-paid "," agent-RK "," deposit-paid "," deposit "," electricity-paid "," electricity-price

rent-1 ::= "\\"rent_base\\":" number
rent-2 ::= "\\"rent_2_person\\":" number
fees-1 ::= "\\"fees_base\\":" number
fees-2 ::= "\\"fees_2_person\\":" number
deposit-paid ::= "\\"is_deposit_paid\\":" boolean
deposit ::= "\\"deposit_price\\":" number
electricity-paid ::= "\\"electricity_on_tenant\\":" boolean
electricity-price ::= "\\"electricity_price\\":" number
agent-RK-paid ::= "\\"is_provision_RK_paid\\":" boolean
agent-RK ::= "\\"provision_RK_price\\":" number`;

export async function generate(prompt: string, json = true) {
	const URL = Deno.env.get('LLM_API_URL')
	if (!URL) throw new Error("LLM_API_URL is not set");
	const request = await fetch(URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			prompt,
			grammar: json ? GRAMMAR : undefined,
		}),
	});
	const response = await request.json();
	const raw = response.choices[0].text.trim().replaceAll("\n", "\\n");
	return json ? JSON.parse(raw) : raw;
}
