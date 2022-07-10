

export const getCorrectAnswer = (question: any) => {
    return Number(question["correct_answer"].split(": ")[1]) - 1;
}

export const getCorrectEnding = (count: number) => {
    const stringCount = String(count);
    const countLastNumber = Number(stringCount[stringCount.length - 1]);
    if (countLastNumber === 1 && count !== 11) return "";
    if (countLastNumber > 1 && countLastNumber < 5) return "а";
    return "ов"
}