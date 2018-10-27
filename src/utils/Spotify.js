import { client_id, callback_url, auth_url } from 'config'

let spotify_token = localStorage.getItem('spotify_token')

if (!window.location.hash && spotify_token === null) {
    const api_url = `${auth_url}?client_id=${client_id}&response_type=token&redirect_uri=${callback_url}`
    window.location.replace(api_url)
}

if (window.location.hash) {
    const response = JSON.parse(`{"${window.location.hash.slice(1).replace(/&/g, '", "').replace(/=/g, '" : "')}"}`)
    const expires = new Date(Date.now() + (parseInt(response.expires_in) * 1000))

    spotify_token = response.access_token

    localStorage.setItem('spotify_token', spotify_token, {
        expires 
    })

    window.history.replaceState({}, document.title, '/')
}

export default spotify_token

