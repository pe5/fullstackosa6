import React from 'react'
import { connect } from 'react-redux'
import { createA } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createA(content)
        props.changeNotification(`you added anecdote: '${content}'`, 5)
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
        
    )
}


export default connect(
    null,
    { createA,
        changeNotification
    }
)(AnecdoteForm)