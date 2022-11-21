/* Create a API requests for the page
    and hook it to the form
*/
async function loadLitterTrackData () {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
    const data = await fetch(url);
    const json = await data.json();
    return json;
    // try {
    // } catch (err) {
    //     console.log('Data request failed', err);
    // };
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
async function mainEvent() {
    console.log('fired main event')
    const data = await loadLitterTrackData();
    console.log('Data load Successfuly', data);

    const form = document.querySelector('.main_form');
    form.addEventListener('submit', async (SubmitEvent) => {
        SubmitEvent.preventDefault();
        console.log('form submission');
    })

    const formData = new FormData(SubmitEvent.target);
    const formProps = Object.fromEntries(formData);

    const results = await fetch('?${new URLSearchParams(formProps)}');
}

document.onload(() => mainEvent());