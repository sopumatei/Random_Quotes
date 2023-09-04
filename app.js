import getQuoteData from './getQuote.mjs'

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')

async function displayQuoteData() {
    const data = await getQuoteData()
    if(typeof data === 'string' || data instanceof String) {
        console.log(data);
        quoteText.textContent = 'ERROR'
        quoteText.style.color = 'tomato'
        setTimeout(() => {
            quoteText.textContent = 'Please, refresh the page.'
            quoteText.style.color = 'rgb(79, 79, 79)'
        }, 800)
    }
    else {
        quoteText.textContent = `"${data[0].quote}"`
        quoteAuthor.textContent = `-${data[0].author}`
    }
    quoteContainer.style.display = 'grid'
    quoteContainer.className = 'intro-animation'
}

displayQuoteData()
