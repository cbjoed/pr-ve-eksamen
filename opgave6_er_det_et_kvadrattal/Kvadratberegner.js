/*
Opgave 6

I denne opgave skal du skrive en funktion som kan afgøre om et tal er et ægte kvadrattal.
 Et tal K kaldes et ægte kvadrat tal, hvis der findes et helt positivt tal x, så at x*x = K. Fx. er 1, 4, 9, 16, 25, 36, 49 nogle af de første kvadrat tal. 
Skriv en funktion i Javascript som returnerer om et givet tal (parameter) er et kvadrat tal. 
Funktionen skal dermed returnere en boolean. Fx. skal funktionen med 121 som input returnere sand, mens den på 50 skal returnere falsk.

*/

function erÆgteKvadrattal(tal) {
    // Tjekker om kvadratroden af tallet er et helt tal
    let kvadratrod = Math.sqrt(tal);
    return Number.isInteger(kvadratrod);
  }

/*
Lad mig forklare, hvordan denne funktion fungerer:

Funktionen erÆgteKvadrattal tager en parameter tal, som er det tal, der skal evalueres for at være et ægte kvadrattal.
Vi bruger Math.sqrt(tal) til at beregne kvadratroden af tallet tal.
Herefter bruger vi Number.isInteger(kvadratrod) til at tjekke, om kvadratroden er et helt tal. Hvis det er tilfældet, returnerer vi true, hvilket indikerer, at tallet er et ægte kvadrattal. Ellers returnerer vi false, hvilket indikerer, at tallet ikke er et ægte kvadrattal.
Du kan teste denne funktion ved at bruge følgende kode:
*/
console.log(erÆgteKvadrattal(1));   // Output: true (1 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(4));   // Output: true (4 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(9));   // Output: true (9 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(16));  // Output: true (16 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(25));  // Output: true (25 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(36));  // Output: true (36 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(49));  // Output: true (49 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(121)); // Output: true (121 er et ægte kvadrattal)
console.log(erÆgteKvadrattal(50));  // Output: false (50 er ikke et ægte kvadrattal)
