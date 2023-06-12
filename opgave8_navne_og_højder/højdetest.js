let dataset = [{name: "peter", height: 165}, 
               {name: "hans", height: 172}, 
               {name: "jens", height: 183}, 
               {name: "thomas", height: 172},
               {name: "anders", height: 174}];

               function filterDatasetByHeight(dataset, minHeight, maxHeight) {
                let filteredDataset = dataset.filter((person) => {
                  return person.height >= minHeight && person.height <= maxHeight;
                });
              
                return filteredDataset;
              }
              
              let filteredData = filterDatasetByHeight(dataset, 170, 180);
console.log(filteredData);
