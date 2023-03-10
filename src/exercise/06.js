// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.userInput.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userInput'>Username</label>
        <input id="userInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
