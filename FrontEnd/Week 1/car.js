document.addEventListener("DOMContentLoaded", function() {
    var cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];

    const table = document.getElementById('carsTable');
    const button = document.getElementById("priceButton");
    const input = document.getElementById("maxPrice");

    function renderRows(data) {
        const rowsHtml = data.map(car => {
            return `<tr>
                <td>${car.id}</td>
                <td>${car.year}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.price}</td>
            </tr>`;
        }).join('');
        table.innerHTML = `<tr>
          <th>Id</th>
          <th>Year</th>
          <th>Maker</th>
          <th>Model</th>
          <th>Price</th>
        </tr>` + rowsHtml; // Reinsert the header and add new rows
    }

  
    renderRows(cars);

  
    button.addEventListener("click", function() {
        const maxPrice = parseFloat(input.value); 
        const filteredCars = cars.filter(car => car.price <= maxPrice); 
        renderRows(filteredCars); 
    });
});
