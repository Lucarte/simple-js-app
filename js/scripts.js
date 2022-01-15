let countryList = [ 
    {name: 'Colombia', capital: 'Bogotá', population: 50882884, borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'], flag: 'https://flagcdn.com/co.svg' },
    {name: 'United States of America', capital: 'Washington, D.C.', population: 329484123, borders: ['CAN', 'MEX'], flag: 'https://flagcdn.com/us.svg' },
    {name: 'Germany', capital: 'Berlin', population: 83240525, borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'], flag: 'https://flagcdn.com/us.svg' }
];


// This would be the regualr for Loop
/* for (let i = 0; i < countryList.length; i++){
    
    if (countryList[i].population > 99999999){
        
        document.write('<p>' + countryList[i].name + ' ' + '(population: ' + countryList[i].population + ') ' + ' - WOW! A very populated country! ');
    } else {
        document.write('<p>' + countryList[i].name + ' ' + '(population: ' + countryList[i].population + ') ');
    }
} */

// This would be the external forEach function 
/* countryList.forEach(nombreDeLaFuncion);

function nombreDeLaFuncion(item) {
    console.log(item);
}
 */

// This would be the internal forEach function
/* countryList.forEach(function(item){
    console.log(item);
}) */

// This would be the forEach arrow function
/* countryList.forEach( country => document.write('<p>' + country.name + ' ' + '(population: ' + country.population + ') ')); */

countryList.forEach( country => {
    return document.write( `<p> ${country.name} Population: (${country.population}) </p>`)
});
