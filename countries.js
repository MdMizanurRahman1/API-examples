const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries => {

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country');
        countriesDiv.innerHTML = `
            <h3>Name:${country.name.common}</h3>
            <p>Captital:${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Display</button>
    `;
        countriesContainer.appendChild(countriesDiv);
    })


}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data[0]))
}

loadCountries();