import {mainData} from "../api/dal";
import {ICheckedQuestions, IQuestion} from "../types/types";

const SET_TICKETS = "SET_TICKETS";
const ADD_CHECKED_QUESTION = "ADD_CHECKED_QUESTION";
const SET_APP_INITIALIZED = "SET_APP_INITIALIZED";

interface InitialStateInterface {
    pddTickets: Array<IQuestion[]> | null,
    checkedQuestions: any,
    appInitialized: boolean,
}

interface ActionInterface<T> {
    type: string;
    payload?: T;
}

const initialState: InitialStateInterface = {
    pddTickets: null,
    checkedQuestions: {},
    appInitialized: false,
}


const mainReducer = (state = initialState, action: ActionInterface<any>) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                pddTickets: action.payload,
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
        default:
            return state;
    }
}

const setTickets = (tickets: Array<IQuestion[]>):ActionInterface<Array<IQuestion[]>> => ({ type: SET_TICKETS,  payload: tickets });
export const addCheckedQuestion = (payload: ICheckedQuestions):ActionInterface<ICheckedQuestions> => ({ type: ADD_CHECKED_QUESTION,  payload: payload });
const setAppInitialized = ():ActionInterface<any> => ({ type: SET_APP_INITIALIZED });

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

export const getAllQuestions = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    mainData.getAllQuestions().then((res:IQuestion[]) => {
        const tickets = convertToArrayTickets(res);
        dispatch(setTickets(tickets))
        dispatch(setAppInitialized())
    })
}

export default mainReducer;