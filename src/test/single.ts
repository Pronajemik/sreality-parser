import { parseEstate } from "../services/parser.ts";

const description = `Nabízíme k pronájmu byt 2+kk s balkonem o celkové ploše 59 m2 v ulici Saarinenova, Praha 9 - Hloubětín. Byt je v osobním vlastnictví, umístěn v 6. nadzemním podlaží novostavby z roku 2019, postavené developerskou společností YIT.\r \r Dispozice bytu: Hlavní část bytu tvoří prostorný obývací pokoj s kuchyňským koutem, který umožňuje vstup na balkon orientovaný na jihozápad. Byt dále zahrnuje samostatnou ložnici, předsíň, koupelnu s vanou a toaletou. K bytu náleží garážové stání a sklep umístěný v suterénu domu.\r \r Byt je kompletně vybaven. Součástí je moderní kuchyňská linka značky Hanák s indukční varnou deskou, mikrovlnnou a horkovzdušnou troubou, myčkou, kombinovanou lednicí a digestoří. Koupelna je vybavena pračkou. Obývací pokoj zahrnuje sedací soupravu a televizní sestavu, ložnice je vybavena manželskou postelí a šatní skříní. V předsíni se nachází vestavěná skříň. Podlahy jsou z kvalitní plovoucí podlahy v obytných místnostech a keramické dlažby ve zbývajících částech bytu.\r \r Bytový komplex nabízí také privátní odpočinkovou zónu s přístupem na čip, společnou kočárkárnu a kolárnu s tlakovým oplachem pro cyklisty.\r \r Projekt Hloubětín je součástí nové rezidenční čtvrti s kompletní občanskou vybaveností, moderní infrastrukturou, zelení a cyklostezkami. V blízkém okolí se nachází mateřská školka, interaktivní dětské hřiště, obchody, restaurace, kavárny a poliklinika. Lokalita poblíž Rokytky je ideální pro rodiny s dětmi i pro aktivní jedince. Výborné dopravní spojení MHD a snadný přístup autem – poblíž je stanice metra Kolbenova a zastávky tramvajových linek č. 16, 8, 25 a nočních linek č. 92 a 94, cesta do centra trvá přibližně 13 minut.\r \r Plochy: interiér 50 m2, balkon 5 m2, sklep 4 m2.\r \r Byt je vhodný pro mladé páry či jednotlivce hledající klidné a příjemné prostředí.\r \r Měsíční nájemné: 24 500 Kč + měsíční poplatky 3 100 Kč + přepis elektřiny na nájemníka.\r \r Byt je k dispozici od 15. ledna 2025.\r \r Pro více informací nebo sjednání prohlídky kontaktujte prosím realitního makléře. Krátký: Byt 2+kk 59 m² k pronájmu Saarinenova, Praha 9 - Hloubětín; 24 500 Kč za měsíc (vyúčtovatelné poplatky 3 100 Kč + elektřina se přepisuje na nájemníka.), balkón, parkovací místo, garáž, výtah, bezbariérový, skeletová stavba, osobní vlastnictví, novostavby. Základní cena: 24500. Cenový tip: vyúčtovatelné poplatky 3 100 Kč + elektřina se přepisuje na nájemníka.`;

const parsed = await parseEstate({
	id: 0,
	realUrl: "",
	name: "",
	description,
	metaDescription: "",
	priceHint: "",
	locality: "",
});

console.log(parsed);
