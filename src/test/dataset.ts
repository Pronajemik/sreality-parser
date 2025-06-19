export type Result = {
	rent_base: (number | null)[] | number | null;
	rent_2_person: (number | null)[] | number | null;
	fees_base: (number | null)[] | number | null;
	fees_2_person: (number | null)[] | number | null;
	deposit: (number | null)[] | number | null;
	agent_RK: (number | null)[] | number | null;
};

export type DatasetEntry = {
	description: string;
	expectedResult: Result;
};

export const DATASET: DatasetEntry[] = [
	{
		description: `Byt č.9
Nabízíme k pronájmu nový, nezařízený byt 1+1 ve 3.patře (4.NP) na ulici Cihlářská, v centru Brna.
Výměra bytu je 34m2.
Možnost dlouhodobého nájmu včetně trvalého bydliště, počátek nájmu ihned (březen/duben) nebo později dohodou podle potřeby nájemce.
Dům je po kompletní rekonstrukci, s výtahem, byt je zcela nový.
Vytápění v bytě i ohřev vody je centrální z kotelny v domě, nájemce se nemusí o nic starat.
V bytě se nachází předsíň, koupelna s WC, kuchyň a pokoj.
Z předsíně je vstup do koupelny a do kuchyně.
V koupelně je se sprchový kout a WC, umyvadlo se zrcadlem a připojení na pračku.
V kuchyni je kuchyňská linka včetně varné desky a digestoře, ostatní spotřebiče si dodá nájemce.
Je zde místo na ledničku.
Pokoj má orientaci do klidné ulice, bude nezařízený, vstup do pokoje je z kuchyně.
Kromě nájemného ve výši 14.900,-Kč se budou hradit energie a služby ve výši 3000,-Kč pro první osobu. Další osoba + 500,-Kč.
Platba za energie zahrnuje veškerou spotřebu elektřiny, vody, topení a domovní služby.
Je paušální, není regulována a v případě větší spotřeby se nedoplácí.
Nezahrnuje pouze internet, ten si platí nájemce podle vlastní úvahy.
Celková měsíční platba včetně energií bez internetu je 17.900,-Kč pro 1 osobu nebo 18.400,-Kč pro dvě osoby. Standardní platební podmínky.
V případě zájmu o prohlídku nebo informace, volejte prosím na tel. číslo, uvedené v inzerátu. Volat můžete i o víkendu.`,
		expectedResult: {
			rent_base: 14900,
			rent_2_person: [18400, 500],
			fees_base: 3000,
			fees_2_person: [3500, 500],
			deposit: null,
			agent_RK: null,
		},
	},
	{
		description: `Představuji k dlouhodobému pronájmu nezařízený byt o velikosti 1+kk v centru Liberce na ulici Dr. Milady Horákové.

Inzerát bude ještě doplněn o profi fotografie a půdorys bytu.

Byt o výměře cca 25 m ² je situován ve 3.NP zatepleného cihlového domu.Zastávka MHD bus je vzdálena cca 100 m od domu.Supermarket Kaufland je naproti přes ulici.

Byt disponuje kuchyňskou linkou s dřezem a sklokeramickou varnou deskou.
Koupelna se sprch. koutem a toaletou a místem pro připojení pračky. Výhodou je vlastní kombi plynový kotel na vytápění a ohřev vody.
Byt je nábytkem nezařízený a je bez sklepa.

Velmi dobrá občanská vybavenost a dobrá dopravní dostupnost do centra.

Měsíční nájemné 6.550 Kč + společné služby (voda, úklid, společná elektřina) 860 Kč, vratná kauce (finanční jistota) 16 000 Kč a jednorázově provize pro RK ve výši 10 000 Kč.Plyn a elektřina se převádí na nájemce.

Byt je volný od 1.dubna 2025.Vhodné pro max.1 osobu – nekuřáka, bez domácích zvířat.
Kontaktujte mě, prosím, emailem.Na email Vám odpovím.`,
		expectedResult: {
			rent_base: 6550,
			rent_2_person: null,
			fees_base: 860,
			fees_2_person: null,
			deposit: 16000,
			agent_RK: 10000,
		},
	},
	{
		description: `Pronajmeme útulný mezonetový mini byt 1+kk (15m2) na ul. Geologická Praha 5 Barrandov.   Byt je vhodný pro max. 2. osoby a a je kompletně zařízený.  Celková plocha bytu je 15m2 + spací patro má 6m2. K dispozici od 4/2025. Nájem: 12.100Kč + 2900Kč zálohy za energie a internet. Kauce 2x měsíční nájem, lze rozdělit na dvě poloviny + poplatek RK.

Pro rychlou komunikaci nás kontaktujte telefonicky, nebo prostřednictvím WhatsApp. Video prohlídku a fotografie zašleme do emailu, nebo přes WhatsApp.

Prohlídka možná po domluvě.  Vřele doporučujeme.`,
		expectedResult: {
			rent_base: 12100,
			rent_2_person: null,
			fees_base: 2900,
			fees_2_person: null,
			deposit: [24200, 2],
			agent_RK: [1, 12100, null],
		},
	},
	{
		description: ` Pronájem kompletně vybaveného bytu 2+kk/ Balkon - 54 m2, který se nachází ve 2. nadzemním podlaží novostavby od Developera Central Group (2021) v ulici Do Zahrádek I, Praha 5 - Zličín. Byt je vybaven kuchyňskou linkou vč. vestavěných spotřebičů Electrolux ( indukční varná deska, el. a mikrovlná trouba, lednice s mrazákem, myčka, digestoř), vestavěné skříně v předsíni a ložnici, na podlahách je zámkový vinyl, v koupelně dlažba, velký sprchový kout, pračka a toaleta. Byt je vybaven, dle foto dokumentace + nová TV. V bytě je vzduchotechnika s rekuperací vč. dochlazování. Byt a balkon má JZ orientaci do privátního vnitrobloku. Jedná se o uzavřený areál, kde se nachází zeleň. K bytu je možné si pronajmout Garážové stání a Sklep (situovaný přímo u garážového stání) + 2.500,-Kč/měsíčně. Veškerá občanská vybavenost je v docházkové vzdálenosti 5 min. - OC Metropole Zličín, škola, školka, poliklinika a další. Výborná dopravní dostupnost - 5 min. chůzí Metro B, zast. Zličín, 3 min. autem Pražský okruh. Nájemné 22.500,-Kč, služby 4.500,-Kč, kauce 30.000,-Kč, provize 22.500,-Kč + dph, garážové stání a sklep 2.500,-Kč, elektřina se převádí na nájemníky. K nastěhování od 1.4.2025. Pro více informací volejte manažera nabídky.`,
		expectedResult: {
			rent_base: 22500,
			rent_2_person: null,
			fees_base: 4500,
			fees_2_person: null,
			deposit: 30000,
			agent_RK: 22500,
		},
	},
	{
		description: ` Dovolujeme si Vám nabídnout k dlouhodobému pronájmu zcela nový moderní byt 1+kk ve vysokém standardu, nedaleko zastávky metra Kobylisy. Byt 1+kk o ploše 34 m² s předzahrádkou 78 m2, se nachází v 1.PP právě dokončené Rezidence Pakoměřická.

Byt je tvořen vstupní chodbou vybavenou vestavěnou skříní, obývacím pokojem s kuchyňským koutem,  prostornou koupelnou se sprchou a WC. Obývací pokoj je vybaven kvalitní kuchyňskou linkou s vestavěnými spotřebiči (horkovzdušná trouba, digestoř, lednice s mrazákem, myčka, mikrovlnná trouba). Jeho členění umožňuje rozdělit spací a obytnou část na oddělené prostory. Podlaha - Vinylové velkoformátové vlysy a dlažba. K vybavení dále patří designové osvětlení, předokenní žaluzie. Komunikaci s návštěvami zajišťuje videotelefon. Výhodou je vlastní plynová kotelna v suterénu domu s nízkými náklady na vytápění a ohřev vody. K bytu je možné si dále pronajmout sklep i parkovací stání.

Tato komorní rezidence se nachází pár kroků od stanice metra Kobylisy a zastávek tramvají. Veškerou občanskou vybavenost (obchody, kavárny, restaurace, fitness, atd.) i parky a volnočasovou zábavu, ZOO a aquapark, je možné nalézt v nejbližším okolí. Skvělá dostupnost do centra města, stejně tak i mimo Prahu. Byt je ideální pro jednotlivce nebo pár hledající bydlení v moderní novostavbě na klidném místě s perfektním spojením do centra. K dispozici parkovací místo.

Nájemné  17.900, zálohy na služby 3.500,- (vytápění, ohřev, studená voda, elektřina, pojištění)
Vratná kauce 30.000,-

Pro více informací či zájmu o prohlídku nás neváhejte kontaktovat. Doporučujeme.`,
		expectedResult: {
			rent_base: 17900,
			rent_2_person: null,
			fees_base: 3500,
			fees_2_person: null,
			deposit: 30000,
			agent_RK: null,
		},
	},
];
