/*
Opgave 10

Herunder er en stump kode som via d3 genererer et søjlediagram for et dataset, som er et array med tal. Disse tal ligger mellem 0 og 100.

a) Hvad skal ændres, hvis søjlerne skal være lidt bredere og der stadig skal være lidt mellemrum mellem dem?

b) Hvad skal ændres, hvis farve på en søjle skal afhænge af data elementet? Reglen for denne afhængighed er, at hvis data elementet er mindre en 80 skal søjlen være blå, mens den skal være rød, hvis data elementet er større end eller lig 80.

c) Hvad skal ændres, hvis søjlerne skal være vandrette i stedet for lodrette?
*/

d3.select("body")
  .append("svg")
  .attr("width", 800)
  .attr("height", 500)
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i) { return i * 10; } )
  .attr("y", function(d) { return 500-(d*4); })
  .attr("width", 8)
  .attr("height", function(d) {return 4*d; })
  .attr("fill", "blue");


/*

a) Hvis søjlerne skal være lidt bredere og der skal være mellemrum mellem dem, kan du ændre værdien af width og x attributterne.
 For at øge bredden af søjlerne og tilføje mellemrum mellem dem, kan du øge værdien af width og justere x-værdien,
  der bestemmer den vandrette position for hver søjle.
*/

.attr("width", 12) // Ændrer bredden af søjlerne til 12
.attr("x", function(d, i) { return i * 20; }) // Tilføjer et større mellemrum mellem søjlerne ved at multiplicere med en større værdi (f.eks. 20)


/*
b) Hvis farven på søjlen skal afhænge af dataelementet, kan du tilføje en betinget logik til fill-attributten.
 Du kan bruge en ternær operator til at bestemme farven baseret på dataelementets værdi.
 */

 .attr("fill", function(d) { return d < 80 ? "blue" : "red"; })
//Denne kode vil gøre søjlerne blå, hvis dataelementet er mindre end 80, og rød, hvis dataelementet er større end eller lig med 80.


/*
c) Hvis søjlerne skal være vandrette i stedet for lodrette, skal du ændre x, y, width og height attributterne tilsvarende.
 Du kan også ændre attr("fill", ...) til at anvende farve efter dit ønske.
*/

.attr("x", 0)
.attr("y", function(d, i) { return i * 20; })
.attr("width", function(d) { return d * 4; })
.attr("height", 16)
.attr("fill", "blue");


/*
Denne kode placerer søjlerne vandret, justerer deres vandrette position (x), den lodrette position (y), bredden (width) og højden (height) for hver søjle. attr("fill", ...) kan også tilpasses efter dine ønsker.

Husk at justere værdierne i henhold til dit specifikke behov og præferencer.
*/