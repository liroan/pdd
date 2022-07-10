import {IQuestion} from "../types/types";


export const getCorrectAnswer = (question: IQuestion): number => {
    return Number(question["correct_answer"].split(": ")[1]) - 1;
}

export const getRandomArbitrary = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const getCorrectEnding = (count: number): string => {
    const stringCount = String(count);
    const countLastNumber = Number(stringCount[stringCount.length - 1]);
    if (countLastNumber === 1 && count !== 11) return "";
    if (countLastNumber > 1 && countLastNumber < 5) return "а";
    return "ов"
}