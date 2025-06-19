import type { EstateDetails } from "../sreality/details.ts";
import { generate } from "../utils/ai.ts";
import { getFullEstateDescription } from "../utils/format.ts";

const getPrompt = (step: number, description: string) =>
	`# Instructions
- Based on apartment description, respond with JSON object containing each field
- Each field could either be a number if it is known, or a \`null\` if it is not mentioned explicitly.
- Ensure that you correctly parse all fields
- Strictly follow given format

# Format
${
	step === 1
		? `Write about each field. For each field write 1-2 sentences explaining what is said in the description about it and how can you infer its value. Write what value do you think you should use for each listed field.
- If description does not mention the field at all, it is \`null\``
		: `- You must respond with a JSON object:
\`\`\`{"rent_base": number | null, "rent_2_person": number | null, "fees_base": number | null, "fees_2_person": number | null, "deposit": number | null, "provision_RK": number | null, "is_electricity_paid": boolean | null}\`\`\``
}

# Fields
- "rent_base": base rent price for one person (or general price). Keywords "najemne", "najem", "cena", "náklady".
- "rent_2_person": rent price for two/second person. mentioned after base rent price. Keywords "najemne", "najem", "cena" & "pro dvou", "nasledujici osoba", "pro dvě osoby", "pro dva osoby".
- "fees_base": fees for one person (or general price). Keywords "sluzby", "poplatky".
- "fees_2_person": fees for two/second person. mentioned after base fees price. Keywords "sluzby", "poplatky" & "pro dvou", "nasledujici osoba", "pro dvě osoby", "pro dva osoby".
- "is_deposit_paid": whether one-time returnable deposit is paid by tenant additionally or not. Keywords "zaloha", "kauce", "deposit".
- "deposit_price": actual deposit price if it's paid. Keywords "zaloha", "kauce", "deposit".
- "is_provision_RK_paid": whether one-time real estate agent payment is paid by tenant additionally or not. Keywords "RK", "provize".
- "provision_RK_price": actual price of real estate agent payment if it's paid. Keywords "RK", "provize".
- "is_electricity_paid": whether electricity is paid by tenant additionally or not. Keywords "elektřina", "energie".
- "electricity_price": actual electricity price (if electricity isnot paid then there is no price. If there is a price, electricity is paid). Keywords "elektřina", "energie".


# Apartment description
\`\`\`${description}\`\`\``;

export async function parseEstate(details: EstateDetails) {
	const fullDescription = getFullEstateDescription(details);
	const preprocessed = await generate(getPrompt(1, fullDescription), false);
	const response = await generate(getPrompt(2, preprocessed), true);
	return {
		fullDescription,
		url: details.realUrl,
		...response,
	};
}
