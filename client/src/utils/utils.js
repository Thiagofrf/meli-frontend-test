import axios from 'axios'

export async function getSearchQuery(searchParams) {
    try {
        const response = await axios.get(`https://localhost:8080/api/search=${searchParams}`);

        if(response){
            console.log(response)
        }
        
    } catch(e) {
        console.log('Error [getSearchParams]', e)
    }
}