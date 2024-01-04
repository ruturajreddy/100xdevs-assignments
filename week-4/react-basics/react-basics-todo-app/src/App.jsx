import React from "react";

const App = () => {
  const addTodoDomWay = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const todoDiv = document.getElementById("todos");
    const todoElement = document.createElement("div");
    const titleElement = document.createElement("h3");
    const descriptionElement = document.createElement("p");

    titleElement.innerText = title;
    descriptionElement.innerText = description;

    todoElement.appendChild(titleElement);
    todoElement.appendChild(descriptionElement);
    todoDiv.appendChild(todoElement);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  };

  return (
    <>
      <div className="container">
        <h1>Todo App DOM WAY</h1>
        <div className="form-row">
          <input
            type="text"
            id="title"
            placeholder="title"
            className="form-input"
          />
          <input
            type="text"
            id="description"
            placeholder="description"
            className="form-input"
          />
        </div>
        <button className="btn btn-block" onClick={addTodoDomWay}>
          Add DOM WAY
        </button>
      </div>
      <div className="container">
        <div id="todos"></div>
      </div>
    </>
  );
};

export default App;

// Hard Todo using `useState`
// import { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [todo, setTodo] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title) return;
//     const newTodo = {
//       id: todo.length + 1,
//       title: title,
//       description: description,
//     };
//     setTodo([...todo, newTodo]);
//     setTitle("");
//     setDescription("");
//   };

//   const removeTodo = (id) => {
//     const updatedTodo = todo.filter((item) => item.id !== id);
//     setTodo(updatedTodo);
//   };

//   const editTodo = (id) => {
//     const todoToUpdate = todo.find((item) => item.id === id);

//     const newTitle = prompt("Enter new Title : ", todoToUpdate.title);

//     if (newTitle !== null && newTitle !== "") {
//       const updatedTodoList = todo.map((item) =>
//         item.id === id ? { ...item, title: newTitle } : item
//       );
//       setTodo(updatedTodoList);
//     }
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         <h1>Todo App</h1>
//         <div className="form-row">
//           <label htmlFor="title" className="form-label">
//             title
//           </label>
//           <input
//             type="text"
//             className="form-input"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <label htmlFor="description" className="form-label">
//             description
//           </label>
//           <input
//             type="text"
//             className="form-input"
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-block">create todo</button>
//       </form>
//       {todo.map((item) => {
//         return (
//           <div key={item.id}>
//             <h4>{item.title}</h4>
//             <div>
//               <button className="btn" onClick={() => editTodo(item.id)}>
//                 edit
//               </button>
//             </div>
//             <button className="btn" onClick={() => removeTodo(item.id)}>
//               remove
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
