import axios from 'axios';
export const baseUrl='https://bayut.p.rapidapi.com'

  export const fetchApi= async (url)=>{
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '307c88a7a3msh5d73a02579ad0a4p1a99dajsnedb46c175516',
              'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
             }

    });
    return data;
  }