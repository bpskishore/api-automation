import axios from 'axios';
import { URLS } from '../conf/endpoints'; 
import { BASE_URL } from './../conf/config';

export let getFacts = async () => await get(URLS.facts);

function get(url: string) {
    let options: object = {
        method: 'get',
        url: BASE_URL + url
    };
    return axios(options);
}
