import config from "./config.mjs"

const apiURL = 'https://api.api-ninjas.com/v1/quotes'

const request = new Request(apiURL, {
    'method': 'GET',
    'headers': {
        'X-Api-Key': config.API_KEY
    }
})

async function getData() {
    try {
        const result = await fetch(request)
        const data = await result.json()

        if(result.status === 200) {
            return(data);
        }
        else {
            return(`Server Error: ${data.error}`)
        }
    }
    catch (error) {
        return(`Fetch Error: ${error}`)
    }
}

/* const showData = async () => {
    const data = await getData()
    console.log(data)
}

showData() */

export default getData