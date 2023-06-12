let dataset = [{name: "Computer", weight: 1.4, price: 4300}, 
               {name: "screen", weight: 4.2, price: 2000}, 
               {name: "coffee machine", weight: 8.2, price: 5300}, 
               {name: "chair", weight: 17.2, price: 3150},
               {name: "light", weight: 1.8, price: 350}];



           
            

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

              // Example usage
let maxWeight = 20;
let filteredItems = getItemsByMaxTotalWeight(dataset, maxWeight);
console.log(filteredItems);