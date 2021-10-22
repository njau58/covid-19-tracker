import axios from "axios";


const url1 = "https://covid19.mathdro.id/api";


export const fetchGlobalData = async (country) => {
  let url = "https://api.covid19api.com/summary";
  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: data.Global.TotalConfirmed,
      recovered: data.Global.NewConfirmed,
      deaths: data.Global.TotalDeaths,
      lastUpdated: data.Global.Date,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};




export const fetchDailyData = async () => {



  try {
    const { data } = await axios.get(`${url1}/daily`);


    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url1}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };

  export const fetchCountryDailyData = async (country)=>{

    if(country===""){return fetchGlobalData()}

  let   url =  `${url1}/countries/${country}`


    try {
      const { data } = await axios.get(url);

    
      const modifiedData = {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdated: data.lastUpdate,
      };

    
  
return modifiedData

  
    } catch (error) {
      return error;
    }
  
  }

