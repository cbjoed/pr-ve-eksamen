/*
Opgave 4

Skriv en funktion i Javascript som kan beregne afgiften af et beløb efter følgende regler:

Hvis beløbet er mindre end 50000, er afgiften 0. Hvis beløbet er fra 50000 og til 100000 betales 30% af det som overstiger 50000. Endelig hvis beløbet er fra 100000, betales 15000 plus 40% af det som overstiger 100000.

Funktionen tager en parameter som er beløbet og skal returnere afgiften.
*/

function beregnAfgift(beløb) {
    if (beløb < 50000) {
      return 0;
    } else if (beløb >= 50000 && beløb < 100000) {
      return (beløb - 50000) * 0.3;
    } else {
      return 15000 + (beløb - 100000) * 0.4;
    }
  }

  /*
  Lad mig forklare, hvordan denne funktion fungerer:

Funktionen beregnAfgift tager en parameter beløb, som er det beløb, der skal beregnes afgift for.

Først tjekker vi, om beløb er mindre end 50000. Hvis det er tilfældet, returnerer vi 0, da der ikke skal betales nogen afgift.

Derefter tjekker vi, om beløb er større eller lig med 50000 og samtidig mindre end 100000.
 Hvis det er tilfældet, beregner vi afgiften ved at trække 50000 fra beløb og multiplicere resultatet med 0.3 (30%).

Hvis ingen af de tidligere betingelser er opfyldt, antager vi, at beløb er 100000 eller derover.
 Vi beregner afgiften ved at tilføje 15000 (fast afgift) til produktet af forskellen mellem beløb og 100000 og 0.4 (40%).

Til sidst returnerer funktionen afgiften, som er beregnet i henhold til de givne regler.

Du kan teste denne funktion ved at bruge følgende kode:
*/

var beløb1 = 40000;
var afgift1 = beregnAfgift(beløb1);
console.log(afgift1);  // Output: 0 (da beløbet er mindre end 50000, er afgiften 0)

var beløb2 = 75000;
var afgift2 = beregnAfgift(beløb2);
console.log(afgift2);  // Output: 7500 (da beløbet er mellem 50000 og 100000, er afgiften 30% af det, der overstiger 50000)

var beløb3 = 120000;
var afgift3 = beregnAfgift(beløb3);
console.log(afgift3);  // Output: 23000 (da beløbet er 100000 eller derover, er afgiften 15000 plus 40% af det, der overstiger 100000)

