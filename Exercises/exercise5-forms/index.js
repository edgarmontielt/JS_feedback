const form = document.getElementById('form')
const urlValidation = document.getElementById('url_validation')

form.onsubmit = (event) => {
    event.preventDefault()
    const { url: { value: url } } = event.target

    const urlRegEx = /https?:\/\/[\w]*\.[\w]*[\.|\/]?[\w]*[\.|\/]?[\w|\/-]*/

    console.log(urlRegEx.test(url));

    if (urlRegEx.test(url)) {
        urlValidation.innerText = 'Si bro ya pasa👍'
        setTimeout(() => {
            urlValidation.innerText = ''
        },2000)
    } else {
        urlValidation.innerText = 'No bro, no pasa😡'
        setTimeout(() => {
            urlValidation.innerText = ''
        },2000)
    }
} 