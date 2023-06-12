/*  Opgave 1
kriv en funktion i Javascript, som kan tælle hvor mange tal fra et array, som er i et givet interval.

funktionen har tre parametre:

a - arrayet som indeholder tallene
minimum - nedre grænse i intervallet
maximum - øvre grænse i intervallet
Funktionen skal hedde countInInterval og returnere hvor mange af tallene i a som ligger mellem minimum og maximum (begge inklusiv).  
*/

function countInInterval(a, minimum, maximum) {
    var count = 0;
  
    for (var i = 0; i < a.length; i++) {
      if (a[i] >= minimum && a[i] <= maximum) {
        count++;
      }
    }
  
    return count;
  }
  
  /*
  Lad mig forklare, hvordan denne funktion fungerer:

Funktionen countInInterval tager tre parametre: a (arrayet med tal), minimum (nedre grænse) og maximum (øvre grænse).

Variablen count initialiseres til 0. Dette er tællervariablen, der vil holde styr på antallet af tal, der ligger inden for intervallet.

Vi bruger en for-løkke til at iterere gennem hvert element i arrayet a.

Inden for løkken tjekker vi betingelsen a[i] >= minimum && a[i] <= maximum. 
Dette betyder, at vi kun vil tælle tal, der er større eller lig med minimum og mindre eller lig med maximum.

Hvis betingelsen er sand, inkrementerer vi count ved at øge værdien med 1.

Når løkken er færdig, returnerer vi værdien af count, som er antallet af tal i intervallet.

Du kan bruge denne funktion som følgende:
*/

  var numbers = [1, 5, 10, 15, 20, 25];
  var min = 10;
  var max = 20;
  
  var result = countInInterval(numbers, min, max);
  console.log(result);  // Output: 3 (fordi der er tre tal i arrayet [10, 15, 20], som ligger mellem 10 og 20)
  

