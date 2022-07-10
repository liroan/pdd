import {mainData} from "../api/dal";

const SET_TICKETS = "SET_TICKETS";
const ADD_CHECKED_QUESTION = "ADD_CHECKED_QUESTION";
const SET_APP_INITIALIZED = "SET_APP_INITIALIZED";
const initialState = {
    pddTickets: null,
    checkedQuestions: {},
    appInitialized: false,
}


const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TICKETS:
            console.log('kkkkfdsfdsfds')
            return {
                ...state,
                pddTickets: action.payload,
            }
        case ADD_CHECKED_QUESTION:
            console.log('kkkk')
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

const setTickets = (tickets: any) => ({ type: SET_TICKETS,  payload: tickets })
export const addCheckedQuestion = (payload: any) => ({ type: ADD_CHECKED_QUESTION,  payload: payload })
const setAppInitialized = () => ({ type: SET_APP_INITIALIZED })
const convertToArrayTickets = (questions: any[]) => {
    const countQuestionsInTickets = 20;
    const tickets = new Array(questions.length / countQuestionsInTickets);
    questions.forEach((question: any, index: number) => {
        const i = Math.floor(index / 20);
        if (!tickets[i]) tickets[i] = [];
        tickets[i].push(question);
    })
    return tickets;
}

export const getAllQuestions = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    mainData.getAllQuestions().then(res => {
        const tickets = convertToArrayTickets(res);
        dispatch(setTickets(tickets))
        dispatch(setAppInitialized())
    })
}

export default mainReducer;