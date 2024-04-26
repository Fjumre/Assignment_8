//Exercise 0

const namesArr = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Jens"]

function namesFunc() {
    // Filter names where the length of the name is less than or equal to 3
    const shortNames = namesArr.filter(names => names.length <= 3);
    
    // Log each name in the filtered array
    shortNames.forEach(names => console.log(names));
    
}

namesFunc();
namesArr.forEach((names) => 
console.log(names)
);

console.log("");

const newArr= namesArr.map((names) =>{
    return names.toUpperCase();
});
console.log(newArr);

const liArr= namesArr.map((name) => {
    return "<li>"+name+ " Doe"+"</li>";
})

console.log( "<ul>"+ liArr.join("")+"</ul>")

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  const newerCars= cars.filter(car=> car.year >1999);
  newerCars.forEach(car => console.log(car));


  const makerCars= cars.filter(car=> car.make ="Volvo");
  makerCars.forEach(car => console.log(car));

  
  const cheapCars= cars.filter(car=> car.price <5000);
  cheapCars.forEach(car => console.log(car));


  function insertStatement(carsArray) {
    // Map each car object to an SQL INSERT statement
    const sqlStatements = carsArray.map(car => {
        // Notice the correct formatting of SQL values including commas and proper quotations
        return `INSERT INTO cars (id, year, make, model, price) VALUES (${1}, ${1997}, '${"Ford"}', '${"E350"}', ${3000});`;
    });

    // Join all statements with a newline for better readability
    return sqlStatements.join("\n");
}

const sqlInsertCommand = insertStatement(cars);
console.log(sqlInsertCommand);