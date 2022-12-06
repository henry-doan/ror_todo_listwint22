import { useState } from 'react';

const ListForm = ({ addList }) => {
  const [list, setList] = useState({ title: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addList(list)
    setList({ title: '', desc: '' })
  }

  return (
    <>
      <h1>Create List</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          name='title'
          value={list.title}
          onChange={(e) => setList({ ...list, title: e.target.value })}
          required
        />
        <label>Description</label>
        <textarea 
          name='desc'
          value={list.desc}
          onChange={(e) => setList({ ...list, desc: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm;