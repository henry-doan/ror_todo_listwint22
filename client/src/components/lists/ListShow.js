import { useState } from 'react';
import ListForm from './ListForm';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const ListShow = ({ id, title, desc, updateList, deleteList, created_at }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { 
        editing ?
        <>
          <ListForm
            id={id}
            title={title}
            desc={desc}
            updateList={updateList}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h1>{title}</h1>
          <h4>
            Created: 
            <Moment format='MM-D-YYYY'>
              {created_at}
            </Moment>
          </h4>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteList(id)}>
            Delete
          </button>
          <Link to={`/${id}/todos`}>
            <button>Todos</button>
          </Link>
        </>
      }
    </>
  )
}

export default ListShow;