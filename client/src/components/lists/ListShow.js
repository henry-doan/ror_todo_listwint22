import { useState } from 'react';
import ListForm from './ListForm';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

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
          <Button onClick={() => setEdit(false)}>
            Cancel
          </Button>
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
          <Button onClick={() => setEdit(true)} variant="warning">
            Edit
          </Button>
          <Button onClick={() => deleteList(id)} variant="danger">
            Delete
          </Button>
          <Link to={`/${id}/todos`}>
            <Button variant="success">Todos</Button>
          </Link>
        </>
      }
    </>
  )
}

export default ListShow;