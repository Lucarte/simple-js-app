// Now write the code within IIFE
let artRepository = (function () {
    let exhibitionsList = [];
    let apiUrl = 'https://api.artic.edu/api/v1/exhibitions?limit=50';

    function add (exhibitions) {
        if (
            typeof exhibitions === 'object' &&
           
            'title' in exhibitions 
        ) {
            exhibitionsList.push (exhibitions);  
        } else {
        console.log ('this is not a exhibitions');    
        }
    }
    
    function getAll () {
        return exhibitionsList;
    }

    function addListItem (exhibitions) {
        let exhibitionsList = document.querySelector ('.exhibitions-list');
        let listexhibitions = document.createElement ('li');
        let button = document.createElement ('button');
        button.innerText = exhibitions.title;
        button.classList.add ('button-class');
        listexhibitions.appendChild (button);
        exhibitionsList.appendChild (listexhibitions);
        button.addEventListener ('click', function (event) {
            showDetails(exhibitions);

        })
    }

    function loadList () {
        /* showLoadingMessage (function () {
            document.write ('#loading').removeClass ('hide');
        }); */
        return fetch (apiUrl).then (function (response) {
            return response.json ();
        }).then (function (json) {
            json.data.forEach (function (item) {
                let exhibitions = {
                    title: item.title,
                    detailsUrl: item.api_link
                };
                add (exhibitions);
                console.log (exhibitions);
            });
        }).catch (function (e) {
            /* hideLoadingMessage (function () {
                console.log ('#loading').addClass ('hide');
            }); */
            console.error(e);
        })
    }

    function loadDetails (item) {
        /* showLoadingMessage (function () {
            document.write ('#loading').removeClass ('hide');
        }); */
        let url = item.detailsUrl;
        return fetch (url).then (function (response) {
            return response.json ();
        }).then (function (details) {
            item.description = details.data.description;
            item.startDate = details.data.aic_start_at;
            item.endDate = details.data.aic_end_at;
            item.departmentDisplay = details.data.department_display;
        }).catch (function (e) {
            /* hideLoadingMessage (function () {
                console.log ('#loading').addClass ('hide');
            }); */
            console.error (e);
        });
    }

    function showDetails (item) {
        artRepository.loadDetails (item).then (function () {
            console.log (item);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        /* showLoadingMessage: showLoadingMessage,
        hideLoadingMessage: hideLoadingMessage */
    };
})(); 

artRepository.loadList ().then (function () {
    // With this... the data should be loaded!
    artRepository.getAll ().forEach (function (exhibitions) {
        artRepository.addListItem (exhibitions);
    });
});

/* console.log(artRepository.getAll()) */

// This would be the regualr for Loop
/* for (let i = 0; i < repository.length; i++){
    
    if (repository[i].population > 99999999){
        
        document.write('<p>' + repository[i].title + ' ' + '(population: ' + repository[i].population + ') ' + ' - WOW! A very populated exhibitions! ');
    } else {
        document.write('<p>' + repository[i].title + ' ' + '(population: ' + repository[i].population + ') ');
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
/* repository.forEach( exhibitions => document.write('<p>' + exhibitions.title + ' ' + '(population: ' + exhibitions.population + ') ')); */

// Using template literals:
/* repository.forEach( exhibitions => document.write(`<p> ${exhibitions.title} (population: ${exhibitions.population}`) )); */