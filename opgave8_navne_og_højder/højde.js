/*
Opgave 8

I et Javascript program har vi et datasæt med objekter, som beskriver en række personer og deres højde. Datasættet kunne se således ud:
*/
let dataset = [{name: "peter", height: 165}, 
               {name: "hans", height: 172}, 
               {name: "jens", height: 183}, 
               {name: "thomas", height: 172},
               {name: "anders", height: 174}];

/*
a) Skriv en stump kode som udskriver (vha. console.info) navnene på de personer i dataset, hvis højde er større end 170. Kodestumpen skal laves vha. en løkke, således at hvis dataset ændres, vil den stadig virke (dvs. udskrive navnene på de personer, hvis højde er større end 170.
Du kan teste funktionen ved at kalde den med forskellige parametre:
*/
function printNamesAboveHeight(dataset, heightThreshold) {
  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].height > heightThreshold) {
      console.info(dataset[i].name);
    }
  }
}

// Testeksempel
printNamesAboveHeight(dataset, 170);



/* b) Skriv en funktion i Javascript med tre parametre. Den første parameter vil være et datasæt med samme struktur som ovenstående dataset. Dvs. det er et array af objekter, hvor hvert objekt har et name og height som attributter. De to andre parametre angiver et interval. Funktionen skal have følgende signatur:
*/

function filterDatasetByHeight(dataset, minHeight, maxHeight) {
                let filteredDataset = dataset.filter((person) => {
                  return person.height >= minHeight && person.height <= maxHeight;
                });
              
                return filteredDataset;
              }
              
              let filteredData = filterDatasetByHeight(dataset, 170, 180);
console.log(filteredData);




