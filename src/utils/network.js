
import { HTTP, HTTPS } from "../constants/api"

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String}- url с HTTPS
 */


export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}


/**
 * Отправляет запрос Fetch
 * @param {String} url - для запроса
 * @returns {Promise} - promise c результатом запроса
 */
export const fGetApiResours = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json(); 
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}



export const makeConcurrentRequest = async(url) => {
    const mmm = await Promise.all(url.map(result => {
        return fetch(result).then(result => result.json())
    }))

    return mmm
}

