import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-cpalockaf.firebaseio.com/'
})