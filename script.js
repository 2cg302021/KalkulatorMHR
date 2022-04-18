var wiekInput = document.querySelector(".wiek-input");
var wagaInput = document.querySelector(".waga-input");
var plecInput = document.getElementById("plec");
var trybInput = document.getElementById("mode");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var wiek, waga, tetno, plec, tryb, wynik;

calculateButton.addEventListener("click", ()=>{

    wiek = wiekInput.value;
    waga = wagaInput.value;
	plec = plecInput.value;
	
	if(plec == 1){
		wynik = Math.round(210 - 0.5 * wiek - 0.022 * waga + 4)
	}
	else if(plec == 2){
		wynik = Math.round(210 - 0.5 * wiek - 0.022 * waga)
	}
	
	result.innerText = wynik;
	
	a.innerText = "Tętno"
	a1.innerText = Math.round(0.5*wynik) + " do " + Math.round(0.6*wynik);
	a2.innerText = Math.round(0.6*wynik) + " do " + Math.round(0.7*wynik);
	a3.innerText = Math.round(0.7*wynik) + " do " + Math.round(0.8*wynik);
	a4.innerText = Math.round(0.8*wynik) + " do " + Math.round(0.9*wynik);
	a5.innerText = "ponad " + Math.round(0.9*wynik);
	
	b.innerText = "Strefa"
	b1.innerText = "1.Zdrowia"
	b2.innerText = "2.Spalania tłuszczu"
	b3.innerText = "3.Aerobowa"
	b4.innerText = "4.Anaerobowa"
	b5.innerText = "5.Czerwona"
	
	c.innerText = "Opis"
	c1.innerText = "50-60% maksymalnego tętna. Idealne dla początkujących lub w okresach regeneracji dla osób przetrenowanych. Wzmocnienie układu krążenia, poprawienie wydolności, kondycji i zdrowia. Aby ćwiczyć na tej intensywności, wybierz ruch podczas którego możesz łatwo kontrolować tętno, na przykład chodzenie lub jazda na rowerze."
	c2.innerText = "60-70% maksymalnego tętna. Idealne dla osób odchudzających się. Wzmocnienie układu krążenia i poprawa kondycji oraz wydolności serca."
	c3.innerText = "70-80% maksymalnego tętna. Poprawa wydolności oddechowej i krążenia co w konsekwencji poprawia kondycję i wyniki sportowe. Idealne do zwiększenia wytrzymałości i wydolności."
	c4.innerText = "80-90% maksymalnego tętna. Zakres przełomowy, silnie oddziałujący na organizm. W tej strefie trening aerobowy (tlenowy) przechodzi w trening anaerobowy (beztlenowy). Zawodowi sportowcy trenują przez krótki czas w tym zakresie, aby uzyskać maksymalny wzrost wydajności i wytrzymałości. Jest szczególnie ważny dla osób doświadczonych w danej dziedzinie sportu."
	c5.innerText = "Ponad 90% maksymalnego tętna. Zbliża się do maksymalnego tętna. Treningi beztlenowe. Może być szkodliwy dla serca u osób trenujących rekreacyjnie!"
});