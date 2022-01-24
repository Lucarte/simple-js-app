// Now write the code within IIFE
let artRepository = (function () {
    let modalContainer = document.querySelector('#modal-container');
    let exhibitionList = [];
    let apiUrl = 'https://api.artic.edu/api/v1/exhibitions?limit=50';

    function add (exhibition) {
        if (
            typeof exhibition === 'object' &&
            'title' in exhibition && 
            'Description' in exhibition &&
            'startDate' in exhibition &&
            'endDate' in exhibition &&
            'departmentDisplay' in exhibition
        ) {
            exhibitionList.push (exhibition);  
        } else {
        console.log ('this does not belong to exhibition');    
        }
    }
    
    function getAll () {
        return exhibitionList;
    }

    function addListItem (exhibition) {
        let exhibitionList = document.querySelector ('.exhibition-list');
        let listExhibition = document.createElement ('li');
        let button = document.createElement ('button');
        button.innerText = exhibition.title;
        button.classList.add ('button-class');
        listExhibition.appendChild (button);
        exhibitionList.appendChild (listExhibition);
        button.addEventListener ('click', function (event) {
            showDetails(exhibition);
        });
    }

    function loadList () {
        /* showLoadingMessage (function () {
            document.write ('#loading').removeClass ('hide');
        }); */
        return fetch (apiUrl).then (function (response) {
            return response.json ();
        }).then (function (json) {
            json.data.forEach (function (item) {
                let exhibition = {
                    title: item.title,
                    detailsUrl: item.api_link,
                    description: item.description,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    departmentDisplay: item.departmentDisplay
                };
                add (exhibition);
                console.log (exhibition);
            });
        }).catch (function (e) {
            /* hideLoadingMessage (function () {
                console.log ('#loading').addClass ('hide');
            }); */
            console.error(e);
        })
    }

    function loadDetails (exhibition) {
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

    function showDetails (exhibition) {
        loadDetails(exhibition).then (function() {
            showModal(exhibition);
        });
    }

    function showModal(exhibition) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');
        
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = exhibition.title;

        let descriptionElement = document.createElement('p');
        descriptionElement.classList.add('exhibition-description');
        descriptionElement.innerText = exhibition.description;

        let startDateElement = document.createElement('p');
        startDateElement.classList.add('exhibition-startDate');
        startDateElement.innerText = exhibition.startDate;

        let endDateElement = document.createElement('p');
        endDateElement.classList.add('exhibition-endDate');
        endtDateElement.innerText = exhibition.endDate;

        let departmentDisplayElement = document.createElement('p');
        departmentDisplayElement.classList.add('exhibition-departmentDisplay');
        departmentDisplayElement.innerText = exhibition.departmentDisplay;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(descriptionElement);
        modal.appendChild(startDateElement);
        modal.appendChild(endDateElement);
        modal.appendChild(departmentDisplayElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');    
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    // For the Esc exit    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });    

    modalContainer.addEventListener ('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    /* document.querySelector('#show-modal').addEventListener('click', () => {
        showModal( 'Modal title', 'This is the modal content!');
    }); */


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        /* showLoadingMessage: showLoadingMessage,
        hideLoadingMessage: hideLoadingMessage */
    };
})(); 

artRepository.loadList().then (function() {
    // With this... the data should be loaded!
    artRepository.getAll().forEach (function(exhibition) {
        artRepository.addListItem(exhibition);
    });
});