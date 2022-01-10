let countryList = [ 
    {name: 'Colombia', capital: 'Bogotá', population: 50882884, borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'], flag: 'https://flagcdn.com/co.svg' },
    {name: 'United States of America', capital: 'Washington, D.C.', population: 329484123, borders: ['CAN', 'MEX'], flag: 'https://flagcdn.com/us.svg' },
    {name: 'Germany', capital: 'Berlin', population: 83240525, borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'], flag: 'https://flagcdn.com/us.svg' }
];

for (let i = 0; i < countryList.length; i++){
    if (countryList[i].population > 99999999){
        document.write(countryList[i].name + ' ' + 'is a very populated country!!');
    } else {
        document.write(countryList[i].name + ' ' + 'is a regular size country');
    }
}
