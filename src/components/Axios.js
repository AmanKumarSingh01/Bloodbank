import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://bloodbank-f7eb0.firebaseio.com/'
})

export default instance;