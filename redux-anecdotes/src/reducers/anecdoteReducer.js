import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const aToVote = state.find(a => a.id === id)
      const changedA = {
        ...aToVote,
        votes: aToVote.votes + 1
      }
      return state.map(an => an.id !== id ? an : changedA)
    default:
      return state
  }
  
  
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createA = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const voteId = (content) => {
  return async dispatch => {
    const newVotes = await anecdoteService.updateVotes(content)
    dispatch({
      type: 'VOTE',
      data: { id: newVotes.id }
    })
  }
  // return {
  //   type: 'VOTE',
  //   data: { id }
  // }
}

export default reducer