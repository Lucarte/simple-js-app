// Now write the code within IIFE
let countryRepository = (function () {
    let repository = [
        {name: 'Colombia', capital: 'Bogotá', population: 50882884, borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'], flag: 'https://flagcdn.com/co.svg' },
        {name: 'United States of America', capital: 'Washington, D.C.', population: 329484123, borders: ['CAN', 'MEX'], flag: 'https://flagcdn.com/us.svg' },
        {name: 'Germany', capital: 'Berlin', population: 83240525, borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'], flag: 'https://flagcdn.com/us.svg' }
    ];

    function add (country) {
        if (
            typeof country === 'object' &&
            'capital' in country &&
            'borders' in country &&
            'population' in country
        ) {
            repository.push (country);  
        } else {
        console.log ('this is not a country');    
        }
    }
    function getAll () {
        return repository;
    }
    
    function addListItem (country) {
        let countryList = document.querySelector ('.country-list');
        let listCountry = document.createElement ('li');
        let button = document.createElement ('button');
        button.innerText = country.name;
        button.classList.add ('button-class');
        listCountry.appendChild (button);
        countryList.appendChild (listCountry);
        button.addEventListener ('click', function () {
            console.log(country);
        })
    }

    function showDetails (country) {
        console.log (country);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails

    };
})(); 

console.log(countryRepository.getAll())

// This would be the regualr for Loop
/* for (let i = 0; i < repository.length; i++){
    
    if (repository[i].population > 99999999){
        
        document.write('<p>' + repository[i].name + ' ' + '(population: ' + repository[i].population + ') ' + ' - WOW! A very populated country! ');
    } else {
        document.write('<p>' + repository[i].name + ' ' + '(population: ' + repository[i].population + ') ');
    }
} */

// This would be the external forEach function 
/* repository.forEach(nombreDeLaFuncion);

function nombreDeLaFuncion(item) {
    console.log(item);
}
 */

// This would be the internal forEach function
/* repository.forEach(function(item){
    console.log(item);
}) */

// This would be the forEach arrow function
/* repository.forEach( country => document.write('<p>' + country.name + ' ' + '(population: ' + country.population + ') ')); */

// Using template literals:
/* repository.forEach( country => document.write(`<p> ${country.name} (population: ${country.population}`) )); */


countryRepository.getAll().forEach(function(country) {
    countryRepository.addListItem(country);
});


