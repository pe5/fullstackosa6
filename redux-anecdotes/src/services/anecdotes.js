import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const updateVotes = async (id) => {
    const anecdotes = await axios.get(baseUrl)
    const anecdote = anecdotes.data.find(a => a.id === id)
    const newA = {
        content: anecdote.content,
        votes: anecdote.votes + 1,
        id: anecdote.id
    }
    const response = await axios.put(`${baseUrl}/${newA.id}`, newA)
    return response.data
}

const createNew = async (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    const object = { content, id: getId(), votes: 0 }  
    const response = await axios.post(baseUrl, object)
    return response.data
  }

export default { getAll, createNew, updateVotes }