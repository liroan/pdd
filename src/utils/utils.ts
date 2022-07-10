

export const getCorrectAnswer = (question: any) => {
    return Number(question["correct_answer"].split(": ")[1]) - 1;
}