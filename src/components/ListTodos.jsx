import React from 'react'

class ListTodos extends React.Component {
    render() {
        return (
            <div>
                <div className="todo-list-info">
                    <div className="todo-list-header">
                        <h2>Your Todos</h2>
                    </div>
                    <div className="todo-list-body">
                        {
                            this.props.todos.map(todo => {
                                return <span className="lt"><li>
                                    {todo.text}
                                    <div className="btn-list">
                                        <button className="btn edit-btn m-2">Edit</button>
                                        <button className="btn delete-btn m-2">Delete</button>
                                    </div>
                                </li></span>

                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodos