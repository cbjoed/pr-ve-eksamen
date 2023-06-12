/*
Opgave 2

Skriv en funktion i Javascript som kan returnere aldersklassen ud fra alderen. 

Funktionen har en parameter - alder. Hvis alder er under 3, skal funktionen returnere "Vuggestue". Hvis alder er fra 3 til under 6, skal funktionen returnere "Børnehave". Hvis alder er fra 6 til under 16, skal den returnere "Skole". Endelig, hvis alder er fra 16, skal der returneres "Voksen".

Hvordan vil du teste om funktionen er korrekt?
*/

function getAldersklasse(alder) {
    if (alder < 3) {
      return "Vuggestue";
    } else if (alder >= 3 && alder < 6) {
      return "Børnehave";
    } else if (alder >= 6 && alder < 16) {
      return "Skole";
    } else {
      return "Voksen";
    }
  }
  
  // Test af funktionen med forskellige aldre
  console.log(getAldersklasse(1));  // Output: "Vuggestue"
  console.log(getAldersklasse(4));  // Output: "Børnehave"
  console.log(getAldersklasse(10)); // Output: "Skole"
  console.log(getAldersklasse(20)); // Output: "Voksen"
  

  /*
  Forklaring af koden:

Funktionen getAldersklasse tager en parameter alder.

Vi bruger if-else if-else-betingelser til at afgøre, hvilken aldersklasse der skal returneres baseret på den givne alder.

Først tjekker vi, om alder er mindre end 3. Hvis det er tilfældet, returnerer vi "Vuggestue".

Derefter tjekker vi, om alder er større eller lig med 3 og samtidig mindre end 6. Hvis det er tilfældet, returnerer vi "Børnehave".

Derefter tjekker vi, om alder er større eller lig med 6 og samtidig mindre end 16. Hvis det er tilfældet, returnerer vi "Skole".

Hvis ingen af de tidligere betingelser er opfyldt, antager vi, at alder er 16 eller derover, og vi returnerer "Voksen".

I testdelen af koden bruger vi console.log til at udskrive resultaterne af funktionen med forskellige aldre.

Ved at køre koden og inspicere outputtet kan du bekræfte, om funktionen returnerer de forventede aldersklasser baseret på den givne alder.
*/
