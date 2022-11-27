/* Create a API requests for the page
    and hook it to the form
*/
async function loadLitterTrackData () {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

function filterTypeOfLitter(array, inputValue) {
    indexArray = [];
    for(let i=0 ; i< array.length; i++) {
        typeArray = array[i]['type_litter'].split(',');
        
        if (typeArray.includes(inputValue)) {
            indexArray.push(i);
        }
    }
    return indexArray;
}

function initMap() {
    console.log('initMap');
    const map = L.map('map').setView([38.9897, -76.9378], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }

function markerPlace(list, array, map) {
    
    for(let i=0; i <list.length; i++) {
        if(array.includes(list[i])) {
            const{coordinates} = list[i]['geocoded_column'];
            L.marker([coordinates[1], coordinates[0]]).addTo(map);
        }
    }
}



async function mainEvent() {
    
    const pageMap = initMap();

    const form = document.querySelector('.main_form');
    form.addEventListener('submit', async (SubmitEvent) => {
        SubmitEvent.preventDefault();
        console.log('form submission');
    });

    console.log('fired main event')
    const result = await loadLitterTrackData();
    console.log('Data load Successfuly', result);

    console.log(Array.isArray(result))

    console.log(result[8]['type_litter'].split(",").includes('car_parts'));

    let filteredList = [];

    form.addEventListener('input', (event) => {
        console.log(event.target.value);
        const filteredList = filterTypeOfLitter(result, event.target.value);
        console.log(filteredList);
        markerPlace(filteredList, pageMap);
    });

    markerPlace(filteredList, pageMap);
   
}

document.addEventListener('DOMContentLoaded', async () => mainEvent())