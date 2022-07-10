import axios from "axios";

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/etspring/pdd_russia/master/',
});


export const mainData = {
    getAllQuestions() {
        return instance.get('questions.json').then(res => res.data)
    }
}