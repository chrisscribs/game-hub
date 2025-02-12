import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd1c360da7b03414e8de5ca81abc07bc8'
    }
})