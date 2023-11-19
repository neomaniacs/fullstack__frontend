import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  const today = new Date();

  const authContext = useAuth()

  const username = authContext.username

  const navigate = useNavigate()

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  //const todos = [
  // { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
  // {
  //   id: 2,
  //   description: "Learn Full stack dev",
  //   done: false,
  //   targetDate: targetDate,
  // },
  // { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  //];

  useEffect(() => refreshTodos(), [])

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then((response) => {
        console.log(response)
        setTodos(response.data)
      })
      .catch((error => console.log(error)));
  }

  function deleteTodo(id) {
    console.log("click id: ", id)
    deleteTodoApi(username, id)
    .then(
      () => {
        setMessage(`Delete Todo with ID : ${id} successful`)
        refreshTodos()
      }
    )
    .catch(error => console.log(error) )
  }

  function updateTodo(id) {
    console.log("click id: ", id)
    navigate(`/todo/${id}`)
  }

  function addNewTodo() {
    navigate('/todo/-1')
  }

  return (
    <div className="container">
      <h1>Things you want to do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>is done?</th>
              <th>Target date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                {/* <td>{todo.targetDate.toDateString()}</td> */}
                <td>{todo.targetDate.toString()}</td>
                <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn btn-success m-3" onClick={addNewTodo}>Add new todo</div>
    </div>
  );
}

export default ListTodosComponent;
