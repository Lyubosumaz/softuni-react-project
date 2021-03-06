const TIMER_SET_STATE = 'react-softuni-project/forest-runner/timer/set-state';
const TIMER_SAVE_TIME = 'react-softuni-project/forest-runner/timer/save-time';

const initialState = {
    isTimerOn: false,
    time: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TIMER_SET_STATE:
            return {
                ...state,
                isTimerOn: action.payload,
            };
        case TIMER_SAVE_TIME:
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
}

export function toggleTimer() {
    const action = { type: TIMER_SET_STATE };

    return {
        start: () => ({ ...action, payload: true }),
        stop: () => ({ ...action, payload: false }),
    };
}

export function saveTime(data) {
    return {
        type: TIMER_SAVE_TIME,
        payload: data,
    };
}
