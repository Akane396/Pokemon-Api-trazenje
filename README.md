# 🔍 PokeFinder

**PokeFinder** je jednostavna, ali efikasna web aplikacija za pretragu informacija o Pokémonima. Projekat koristi [PokeAPI](https://pokeapi.co/) za dinamičko preuzimanje podataka u realnom vremenu, omogućavajući korisnicima da brzo pronađu svog omiljenog Pokémona.

---

## 🚀 O projektu
Cilj ovog projekta bio je kreiranje laganog interfejsa koji omogućava pretragu Pokémona po imenu. Aplikacija prikazuje ime, primarni tip i sliku Pokémona, uz ugrađenu logiku za upravljanje greškama (ukoliko Pokémon nije pronađen).

### Glavne funkcionalnosti:
* **Pretraga:** Brzo pronalaženje Pokémona putem unosa imena.
* **Dinamički prikaz:** Automatsko osvežavanje sadržaja (slika, tip, ime) bez potrebe za ponovnim učitavanjem stranice.
* **Upravljanje greškama:** Obaveštenje za korisnika ako pretraga ne da rezultat.
* **Reset opcija:** Jednostavno čišćenje interfejsa za novu pretragu.

---

## 🛠 Tehnologije
Projekat je razvijen koristeći osnovne web tehnologije:

* **HTML5:** Strukturiranje sadržaja i formi.
* **CSS3:** Dizajn i responzivni raspored elemenata.
* **JavaScript (ES6+):** Logika aplikacije, asinhrono preuzimanje podataka (Fetch API) i manipulacija DOM-om.

---

## 📂 Struktura projekta

* `html.html` - Glavni fajl aplikacije (struktura stranice).
* `java.js` - JavaScript logika za komunikaciju sa API-jem.
* `stil.css` - Stilovi i izgled korisničkog interfejsa.

---

## 💻 Kako pokrenuti?

1. Preuzmite sve fajlove u isti folder.
2. Otvorite `html.html` u bilo kojem modernom web pretraživaču.
3. Ukucajte ime Pokémona (npr. *pikachu*, *charizard*, *ditto*) i kliknite **Pretraži**.

---

## 📝 Beleška
Projekat je otvorenog tipa i idealan je za vežbu rada sa JSON podacima i asinhronim funkcijama u JavaScriptu.

**Autor:** Akane42
