import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fortniteapi.io/v2/'
})

export default instance;