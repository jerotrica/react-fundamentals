// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = React.useRef();
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(usernameInputRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`Youuu  entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App