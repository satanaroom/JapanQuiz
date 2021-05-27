import axios from "axios";

export default axios.create({
    baseURL: 'https://japan-quiz-dfd6a-default-rtdb.asia-southeast1.firebasedatabase.app/'
})