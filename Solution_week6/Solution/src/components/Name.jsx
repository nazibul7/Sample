import React, { useCallback, useState } from 'react'

const Name = React.memo(() => {
  const [name, setName] = useState("nazibul")
  const nameChange = useCallback((e) => {
    console.log("Render inside callback");
    setName(e.target.value)
  }, [setName])
  console.log("Render outside callback");
  return (
    <div>
      <label htmlFor="name">Enter your name : </label>
      <input type="text" id='name' placeholder='Enter name'
        onChange={nameChange}
      />
      <div>Name is {name}</div>
    </div>
  )
})

export default Name