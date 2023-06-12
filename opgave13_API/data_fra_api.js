/*
Opgave 13

Antag der findes et API på adressen http://xyz.dk/temperaturLinks to an external site. som giver temperaturer for de sidste 24 timer i et array, som for eksempel:

[12.3, 12.8,  ...11.2]
a) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. og udskriver disse til konsollen.

b) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. og udskriver den største temperatur til konsollen. 

b) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. 
og udskriver gennemsnitstemperaturen for de sidste 24 timer til konsollen.
/*


/*
a) For at hente og udskrive dataene fra http://xyz.dk/temperatur kan du bruge JavaScript's fetch API. Her er en kodestump, der illustrerer dette:
*/

fetch("http://xyz.dk/temperatur")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

/*
Koden bruger fetch til at sende en GET-anmodning til den angivne URL. Derefter behandler .then blokke resultatet af anmodningen. 
Først konverteres svaret til JSON-format ved hjælp af .json() metoden. Derefter udskrives dataene til konsollen ved hjælp af console.log(data). 
Hvis der opstår en fejl, fanges den i .catch blokken og udskrives til konsollen ved hjælp af console.error(error).

*/


/*
b) For at udskrive den største temperatur fra dataene kan du bruge JavaScripts Math.max metode. Her er en kodestump, der viser dette:
*/

fetch("http://xyz.dk/temperatur")
  .then(response => response.json())
  .then(data => {
    const maxTemperature = Math.max(...data);
    console.log("Største temperatur:", maxTemperature);
  })
  .catch(error => console.error(error));

  /*
  Koden bruger Math.max metoden med spredningssyntaksen ...data for at finde den maksimale værdi i data-arrayet. 
  Derefter udskrives den største temperatur til konsollen ved hjælp af console.log.
  */

  /*
  c) For at udskrive gennemsnitstemperaturen for de sidste 24 timer kan du bruge JavaScripts Array.reduce metode. Her er en kodestump, der viser dette:
  */

  fetch("http://xyz.dk/temperatur")
  .then(response => response.json())
  .then(data => {
    const sum = data.reduce((total, temperature) => total + temperature, 0);
    const averageTemperature = sum / data.length;
    console.log("Gennemsnitstemperatur:", averageTemperature);
  })
  .catch(error => console.error(error));

  /*
  Koden bruger Array.reduce metoden til at summere alle temperaturerne i data-arrayet. 
  Den indledende værdi er 0, og for hver temperatur tilføjes den til den samlede sum. 
  Derefter beregnes gennemsnittet ved at dividere summen med længden af data-arrayet. 
  Til sidst udskrives gennemsnitstemperaturen til konsollen ved hjælp af console.log.

Vær opmærksom på, at du skal erstatte "http://xyz.dk/temperatur" med den faktiske URL for API'en.

*/