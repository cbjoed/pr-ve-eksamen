/*
Opgave 5

I denne opgave skal du skrive en funktion, som ud fra en given tekst (som er parameter) udskriver til konsollen følgende:

Hvis teksten indeholder “banankage”, udskrives “Det er lækkert”.
Hvis teksten er mere end 50 tegn, udskrives “Det var en lang tekst”.
Hvis teksten er mindre end 10 tegn, udskrives "Det var en kort tekst".
Og hvis ingen af kriterierne er opfyldt, udskrives “ok”.
*/

function udskrivTekstBaseretPåKriterier(tekst) {
    if (tekst.includes("banankage")) {
      console.log("Det er lækkert");
    } else if (tekst.length > 50) {
      console.log("Det var en lang tekst");
    } else if (tekst.length < 10) {
      console.log("Det var en kort tekst");
    } else {
      console.log("ok");
    }
  }

  /*
  Lad mig forklare, hvordan denne funktion fungerer:

Funktionen udskrivTekstBaseretPåKriterier tager en parameter tekst, som er den tekst, der skal evalueres og udskrives en besked baseret på.

Først tjekker vi, om tekst indeholder ordet "banankage" ved hjælp af includes-metoden. Hvis det er tilfældet, udskriver vi beskeden "Det er lækkert".

Derefter tjekker vi, om længden af tekst er større end 50 tegn. Hvis det er tilfældet, udskriver vi beskeden "Det var en lang tekst".

Hvis ingen af de tidligere betingelser er opfyldt, tjekker vi, om længden af tekst er mindre end 10 tegn.
 Hvis det er tilfældet, udskriver vi beskeden "Det var en kort tekst".

Hvis ingen af kriterierne er opfyldt, udskriver vi beskeden "ok".

Du kan teste denne funktion ved at bruge følgende kode:
*/

udskrivTekstBaseretPåKriterier("Jeg elsker banankage!");  // Output: "Det er lækkert"

udskrivTekstBaseretPåKriterier("Dette er en meget lang tekst, der er mere end 50 tegn.");  // Output: "Det var en lang tekst"

udskrivTekstBaseretPåKriterier("Kort");  // Output: "Det var en kort tekst"

udskrivTekstBaseretPåKriterier("Dette er en almindelig tekst.");  // Output: "ok"

