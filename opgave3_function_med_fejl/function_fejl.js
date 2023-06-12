/*
Opgave 3

Herunder er en funktion (sum) i Javascript som skal beregne summen af tallene i et array, som er parameter. Den virker dog ikke. Hvad er der galt?

function sum(a) {
   let resultat = 0;
   for (let i=1; i < a.length; i++)
        resultat += a[i];
   return resultat;
}
*/

/*

I den givne funktion "sum" er der en lille fejl i for-løkken, der forårsager, at det første element i arrayet bliver sprunget over under summeringen. For at rette fejlen skal du ændre startværdien af variablen i til 0 i stedet for 1. Her er den korrigerede version af funktionen:
*/

function sum(a) {
    let resultat = 0;
    for (let i = 0; i < a.length; i++) {
         resultat += a[i];
    }
    return resultat;
 }

 /*
 I denne opdaterede funktion starter vi i fra 0, så det første element i arrayet inkluderes i summeringen. For-løkken kører, indtil i når længden af arrayet a. Ved hvert iterationstrin tilføjes værdien af a[i] til resultat ved hjælp af +=-operatoren. Til sidst returnerer funktionen den samlede sum af tallene.

Nu skulle funktionen "sum" fungere korrekt og beregne summen af tallene i et array.

Hvis du vil teste den korrigerede funktion, kan du bruge følgende kode:
*/

var numbers = [1, 2, 3, 4, 5];
var result = sum(numbers);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

/*
Nu vil funktionen korrekt beregne summen af tallene i arrayet [1, 2, 3, 4, 5] og udskrive resultatet som 15.
*/

