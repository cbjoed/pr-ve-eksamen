/*
Opgave 15:
I en JavaScript-applikation har du et array med tal, der repræsenterer temperaturer målt hver time i en dag. 
Skriv en funktion i JavaScript, der beregner og returnerer den gennemsnitlige temperatur for dagen.
*/

function calculateAverageTemperature(temperatures) {
    const sum = temperatures.reduce((total, temperature) => total + temperature, 0);
    const average = sum / temperatures.length;
    return average;
  }
  
  const temperatures = [12.3, 12.8, 11.2, ...];
  const averageTemperature = calculateAverageTemperature(temperatures);
  console.log("Gennemsnitstemperaturen er: " + averageTemperature);
  

  /*
  Opgave 16:
Du har et array med objekter, der repræsenterer studerende. Hvert objekt har attributterne navn, alder og karakter. 
Skriv en funktion i JavaScript, der tager dette array som input og returnerer en ny liste med navnene på de studerende, der har opnået karakteren "A".
*/

function getStudentsWithGradeA(students) {
    const studentsWithGradeA = students.filter(student => student.karakter === "A");
    const names = studentsWithGradeA.map(student => student.navn);
    return names;
  }
  
  const students = [
    { navn: "Peter", alder: 20, karakter: "B" },
    { navn: "Hans", alder: 22, karakter: "A" },
    { navn: "Jens", alder: 21, karakter: "A" },
    { navn: "Lotte", alder: 23, karakter: "C" },
  ];
  const studentsWithGradeA = getStudentsWithGradeA(students);
  console.log("Studerende med karakteren A: " + studentsWithGradeA);

  /*
  Opgave 18:
Du har et array med tal, der repræsenterer priserne på forskellige produkter. 
Skriv en funktion i JavaScript, der tager dette array som input og 
returnerer den højeste og laveste pris som et objekt med attributterne "highestPrice" og "lowestPrice".
*/

function getMinMaxPrices(prices) {
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { lowestPrice: minPrice, highestPrice: maxPrice };
  }
  
  const prices = [9.99, 15.99, 12.49, 19.99, 10.99];
  const minMaxPrices = getMinMaxPrices(prices);
  console.log("Laveste pris: " + minMaxPrices.lowestPrice);
  console.log("Højeste pris: " + minMaxPrices.highestPrice);
  