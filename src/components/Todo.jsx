 
import { useState } from "react";

function Todo() {
    const [value, setValue] = useState("");

    const [todos, setTodos] = useState([
       
    ]);

    const addTodo = () => {
        const newTodo = [...todos, { value: value, disabled: true }];
        setTodos(newTodo);
    };
    const deleteAll = () => {
        setTodos([])
    }
    const deleteTodo = (i) => {
        const oldTodo = [...todos]
        oldTodo.splice(i,1)
        setTodos(oldTodo)
    }

    return (
        <div className="shehzad">

            <input
                type="text"
                placeholder="Enter your todo name"
                onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={addTodo}>
                Add Todo
            </button>

            <button onClick={deleteAll}>
                Delete All
            </button>

            <ul>
                {todos.map((v, i) => {
                    return (
                        <li key={i}>
                            <input type="text" value={v.value} disabled= {v.disabled} onChange={(e) => setValue => ( e.target.value) } />
                            {
                                v.disabled ? (
                                    <button onClick={() => updateTodo (i) }>Edit</button>
                                ) : (
                                        <button >

                                    </button>
                                )
                            }

                            <button onClick={deleteTodo}> Delete</button>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Todo;
