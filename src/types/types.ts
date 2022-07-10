
interface IQuestionsAnswers {
    answer_text: string,
    is_correct: boolean,
}

export interface IQuestion {
    title: string;
    ticket_number: string,
    image: string,
    question: string,
    answers: IQuestionsAnswers[],
    correct_answer: string,
    answer_tip: string,
    topic: string,
}

export interface ICheckedQuestions {
    question: number,
    answer: number,
}
