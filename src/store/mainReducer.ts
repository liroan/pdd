import {mainData} from "../api/dal";
import {ICheckedQuestions, IPddTopics, IQuestion} from "../types/types";
import { nanoid } from 'nanoid';

const SET_TICKETS = "SET_TICKETS";
const ADD_CHECKED_QUESTION = "ADD_CHECKED_QUESTION";
const SET_APP_INITIALIZED = "SET_APP_INITIALIZED";
const SET_TOPICS = "SET_TOPICS";
const ADD_ERROR_QUESTIONS = "ADD_ERROR_QUESTIONS";
const ADD_CHOSEN_QUESTION = "ADD_CHOSEN_QUESTION";
const SET_ALL_QUESTIONS = "SET_ALL_QUESTIONS";

interface InitialStateInterface {
    pddTickets: Array<IQuestion[]> | null,
    pddTopics: IPddTopics[] | any,
    allQuestions: IQuestion[],
    errorQuestions: any,
    chosenQuestions: any,
    checkedQuestions: any,
    appInitialized: boolean,
}

interface ActionInterface<T> {
    type: string;
    payload?: T;
}

const initialState: InitialStateInterface = {
    pddTickets: null,
    pddTopics: null,
    checkedQuestions: {},
    chosenQuestions: {},
    allQuestions: [],
    appInitialized: false,
    errorQuestions: {},
}


const mainReducer = (state = initialState, action: ActionInterface<any>) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                pddTickets: action.payload,
            }
        case SET_ALL_QUESTIONS:
            return {
                ...state,
                allQuestions: action.payload,
            }
        case SET_TOPICS:
            return {
                ...state,
                pddTopics: action.payload,
            }
        case ADD_CHECKED_QUESTION:
            return {
                ...state,
                checkedQuestions: {
                    ...state.checkedQuestions,
                    [action.payload.question]: action.payload.answer,
                }
            }
        case SET_APP_INITIALIZED:
            return {
                ...state,
                appInitialized: true,
            }
        case ADD_ERROR_QUESTIONS:
            const newErrorQuestions = { ...state.errorQuestions };
            action.payload.forEach((question: IQuestion) => {
                newErrorQuestions[question.id] = question;
            })
            console.log(newErrorQuestions, Object.entries(newErrorQuestions))
            return {
                ...state,
                errorQuestions: newErrorQuestions
            }
        case ADD_CHOSEN_QUESTION:
            const question = action.payload;
            return {
                ...state,
                chosenQuestions: { ...state.chosenQuestions, [question.id]: question}
            }
        default:
            return state;
    }
}

const setAllQuestions = (questions: IQuestion[]):ActionInterface<IQuestion[]> => ({ type: SET_ALL_QUESTIONS,  payload: questions });
const setTickets = (tickets: Array<IQuestion[]>):ActionInterface<Array<IQuestion[]>> => ({ type: SET_TICKETS,  payload: tickets });
const setTopics = (topics: any):ActionInterface<Array<IQuestion[]>> => ({ type: SET_TOPICS,  payload: topics });
export const addCheckedQuestion = (payload: ICheckedQuestions):ActionInterface<ICheckedQuestions> => ({ type: ADD_CHECKED_QUESTION,  payload: payload });
const setAppInitialized = ():ActionInterface<any> => ({ type: SET_APP_INITIALIZED });
export const addErrorQuestions = (questions: IQuestion[]):ActionInterface<IQuestion[]> => ({ type: ADD_ERROR_QUESTIONS,  payload: questions });
export const addChosenQuestions = (question: IQuestion):ActionInterface<IQuestion> => ({ type: ADD_CHOSEN_QUESTION,  payload: question });
const convertToArrayTickets = (questions: IQuestion[]): Array<IQuestion[]> => {
    const countQuestionsInTickets: number = 20;
    const tickets:Array<IQuestion[]> = new Array(questions.length / countQuestionsInTickets);
    questions.forEach((question, index: number) => {
        const i = Math.floor(index / 20);
        if (!tickets[i]) tickets[i] = [];
        tickets[i].push(question);
    })
    return tickets;
}



const addIdInQuestion = (questions: IQuestion[]): IQuestion[] => {
    return questions.map(question => ({...question, id: nanoid()}))
}


const convertToArrayPDDTopics = (questions: IQuestion[]): IPddTopics[] => {
    const topics: any = {}
    questions.forEach(question => {
        if (!topics[question.topic]) topics[question.topic] = [];
        topics[question.topic].push(question);
    })
    return Object.entries(topics);
}

export const getAllQuestions = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    mainData.getAllQuestions().then((questions:IQuestion[]) => {
        const questionsWithId = addIdInQuestion(questions);
        const tickets = convertToArrayTickets(questionsWithId);
        const topics = convertToArrayPDDTopics(questionsWithId);
        dispatch(setAllQuestions(questionsWithId))
        dispatch(setTickets(tickets))
        dispatch(setTopics(topics))
        dispatch(setAppInitialized())
    })
}

export default mainReducer;