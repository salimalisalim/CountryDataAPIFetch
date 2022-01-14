function fetchData(){
    let countryTxt= country_name.value;
    fetch(`https://restcountries.com/v2/name/${countryTxt}?fullText=true`).
    then(res=>res.json()).
    then(data=>populateValues(data));
}

function populateValues(country){
    let CountryName = country[0].name
    let Flag = country[0].flag
    let Population = country[0].population
    let CurrencyName = country[0].currencies[0].name
    let CurrencySymbol = country[0].currencies[0].symbol
    let Capital = country[0].capital
    let Languages = country[0].languages[0].name

    let html_data=`
    <div class="card" style="width: 18rem;">
  <img src="${Flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${CountryName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Population: ${Population}</li>
    <li class="list-group-item">Currency Name: ${CurrencyName}</li>
    <li class="list-group-item">Currency Symbol: ${CurrencySymbol}</li>
    <li class="list-group-item">Capital: ${Capital}</li>
  </ul>
 
</div>
 
`;
    
    document.querySelector("#result").innerHTML=html_data;
}

// function fetchDataAll(){
//     fetch("https://restcountries.com/v2/all").
//     then(res=>res.json).
//     // then(data=>console.log(data));
//     console.log("Changed");
// }