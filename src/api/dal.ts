import axios from "axios";
import {IQuestion} from "../types/types";

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/etspring/pdd_russia/master/',
});


export const mainData = {
    getAllQuestions():Promise<IQuestion[]> {
        return instance.get('questions.json').then(res => res.data)
    }
}