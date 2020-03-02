
const initialState = null

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEW_NOTIFICATION':
            console.log('data:', action.data)
            return action.data
        case 'RESET':
            return null
        default: 
            return state
    }
}

export const changeNotification = (content, sec) => {
    return async dispatch => {
        dispatch({
            type: 'NEW_NOTIFICATION',
            data: content
        })
        setTimeout(() => {
            dispatch(reset())
          }, sec * 1000)
    }
}

export const reset = () => {
    return {type: 'RESET'}
}

export default reducer