
export interface IQuestionsAnswers {
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
    id: string,
}

export interface ICheckedQuestions {
    question: string,
    answer: number,
}

export interface IPddTopics {
    [index: number]: IPddTopic;
}

export type IPddTopic = string | Array<IQuestion>;
