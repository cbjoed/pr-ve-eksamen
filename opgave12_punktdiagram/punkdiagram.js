/*
Opgave 12

I forbindelse med en visualisering, skal der laves punktdiagram for et datasæt ser således ud:
*/

let dataset = [ [1,1.3], [5,2.5], .... [7, 3.4], [6,9.1] ];

/*
Datasættet består at et array af arrays, hvor de inderste arrays. har en størrelse på 2, som vi kalder for x og y henholdsvis. 
Det vides at x-værdierne er hele tal, som ligger mellem 1 og 90, mens y-værdierne er decimal tal som ligger mellem 0 og 12. 
Diagrammet skal vises i et svg-element med en størrelse på 800 x 500, hvor 800 er bredden, mens 500 er højden.

1. Erklær to lineære skaleringer som skal bruges til skalering af x værdier og y-værdier henholdsvis.

2. Herunder er en kodestump, som genererer punkterne. Værdierne for attributterne cx og cy er dog ikke udfyldt . 
Sørg for at udfylde disse korrekt, hvor der gøres brug af de to skaleringer fra pkt. 1. 
*/

d3.select("body") 
  .append("svg") 
  .attr("width", 800).attr("height", 500) 
  .selectAll("circle") 
  .data(dataset).enter() 
  .append("circle") 
  .attr("cx", function(d, i) { ... } ) 
  .attr("cy", function(d) { ... }) 
  .attr("r", 5) 
  .attr("fill", "blue"); 
 

  /*
  For at udfylde værdierne for attributterne cx og cy i kodestumpen og bruge de lineære skaleringer, kan du følge disse trin:
  */

  // Erklær to lineære skaleringer
const xScale = d3.scaleLinear()
.domain([1, 90]) // Input domæne (x-værdier)
.range([0, 800]); // Output domæne (skalering til svg bredde)

const yScale = d3.scaleLinear()
.domain([0, 12]) // Input domæne (y-værdier)
.range([500, 0]); // Output domæne (skalering til svg højde)

// Generer punkterne i svg-elementet
d3.select("body")
.append("svg")
.attr("width", 800)
.attr("height", 500)
.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", function(d) {
  return xScale(d[0]); // Brug xScale til at skalere x-værdien
})
.attr("cy", function(d) {
  return yScale(d[1]); // Brug yScale til at skalere y-værdien
})
.attr("r", 5)
.attr("fill", "blue");


/*
Først erklæres to lineære skaleringer, xScale og yScale, ved hjælp af d3.scaleLinear(). Domænet for hver skalering sættes baseret på de angivne værdier i opgaven.

Derefter bruges xScale og yScale i attr("cx", ...) og attr("cy", ...) til at skalere x- og y-værdierne fra hvert datapunkt i dataset.

attr("r", 5) sætter radius for hver cirkel til 5, og attr("fill", "blue") angiver, at cirklerne skal være blå.

Vær opmærksom på, at du skal have inkluderet D3-biblioteket på din side for at kunne bruge D3-funktionerne.
/*