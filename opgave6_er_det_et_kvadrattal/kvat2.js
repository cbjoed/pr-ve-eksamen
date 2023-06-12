function erAegteKvadrattal(tal) {
    // Finder kvadratroden af ​​tallet
    var rod = Math.sqrt(tal);
  
    // Tjekker om roden er et helt tal
    if (Number.isInteger(rod)) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(erAegteKvadrattal(121)); // Output: true
console.log(erAegteKvadrattal(50)); // Output: false

