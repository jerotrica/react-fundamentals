// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = React.useRef();
  const [error, setError] = React.useState();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(usernameInputRef.current.value)
  }

  function handleChange(event) {
    const { value } = event.target
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lowercase');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" ref={usernameInputRef} onChange={handleChange} />
      </div>
      <div style={{ color: 'red' }}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`Youuu  entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App