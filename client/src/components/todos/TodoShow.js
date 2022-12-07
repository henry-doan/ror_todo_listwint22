import { useState } from 'react';
import TodoForm from './TodoForm';

const TodoShow = ({ id, title, rating, complete, price, updateTodo, deleteTodo }) => {
  const [editing, setEdit] = useState(false)

  const showStars = () => {
    let starStr = ""

    for (let i = 0; i <= rating; i++) {
      starStr = starStr + '🌟'
    }

    return starStr
  }

  return (
    <>
      {
        editing ?
        <>
          <TodoForm
            id={id}
            title={title}
            rating={rating}
            complete={complete}
            price={price}
            updateTodo={updateTodo}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </> 
        :
        <>
          <h2>{title}</h2>
          <p>Rating: {showStars()}</p>
          {/* <p>Rating: {rating} / 5</p> */}
          <p>Completed: {complete ? '✅' : '❌'}</p>
          { price ? 
            <p>
              Price: ${price}
            </p>
            : ''
          }
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
          <button>Notes</button>
        </>
      }
    </>
  )
}

export default TodoShow;