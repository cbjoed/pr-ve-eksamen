/*
Opgave 11

I et Javascript program har vi et datasæt med objekter, som beskriver en række genstande med deres navn, vægt og pris. Datasættet kunne se således ud:
*/

let dataset = [{name: "Computer", weight: 1.4, price: 4300}, 
               {name: "screen", weight: 4,2, price: 2000}, 
               {name: "coffee machine", weight: 8.2, price: 5300}, 
               {name: "chair", weight: 17.2, price: 3150},
               {name: "light", weight: 1.8, price: 350}];

/*a) Skriv en stump kode som udskriver (vha. console.info) navnene på de genstande i dataset, hvis vægt er større end 8. 
Kodestumpen skal laves vha. en løkke, således at hvis dataset ændres, vil den stadig virke.

b) Skriv en funktion i Javascript med to parametre. Den første parameter vil være et datasæt med samme struktur som ovenstående dataset.  
Den anden parameter angiver en maksimal total vægt. Funktionen skal have følgende signatur:
*/

function getItemsByMaxTotalWeight(data, maxTotalWeight) {...}
//Funktionen skal returnere et array med nogle af de første objekter fra data, hvis hvis samlede vægt højst er maxTotalWeight.
//Fx. vil
       getItemsByMaxTotalWeight(dataset, 6.0)
//give
 [{name: "Computer", weight: 1.4, price: 4300}, {name: "screen", weight: 4,2, price: 2000}]
//Da deres samlede vægt er under 6 og hvis man tager den næste med kommer man over de 6 kg.



/*
a) Her er en stump kode, der udskriver navnene på de genstande i datasættet, hvis vægten er større end 8:
*/

for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].weight > 8) {
      console.info(dataset[i].name);
    }
  }


  /*
  Denne kode gennemgår hvert objekt i datasættet og kontrollerer, om vægten er større end 8. Hvis det er tilfældet, 
  udskrives navnet på genstanden ved hjælp af console.info().
  */

/*
b) Her er en funktion, der returnerer et array med objekter fra datasættet, hvis den samlede vægt ikke overstiger maxTotalWeight:
*/

function getItemsByMaxTotalWeight(data, maxTotalWeight) {
    let totalWeight = 0;
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      if (totalWeight + data[i].weight <= maxTotalWeight) {
        result.push(data[i]);
        totalWeight += data[i].weight;
      } else {
        break;
      }
    }
  
    return result;
  }
  
  /*
  Denne funktion tager to parametre: data er datasættet, og maxTotalWeight er den maksimale samlede vægt, der tillades. 
  Funktionen opretter et tomt array result til at gemme de objekter, der opfylder betingelsen.

Herefter itererer den gennem hvert objekt i datasættet og kontrollerer, om den samlede vægt inklusive det aktuelle objekt er mindre eller lig med maxTotalWeight. 
Hvis betingelsen er opfyldt, tilføjes objektet til result og den samlede vægt opdateres. Hvis betingelsen ikke længere er opfyldt, afbrydes løkken med break.

Til sidst returneres result, som vil indeholde objekterne, hvis samlede vægt ikke overstiger maxTotalWeight.

Husk at bruge den korrekte syntaks og tilpasse variablenavne, hvis det er nødvendigt, baseret på din implementering.

*/