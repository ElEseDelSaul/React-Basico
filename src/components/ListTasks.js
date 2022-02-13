import React from 'react';
//Data
import tasks from '../samples/Tasks.json';
//Components
import TaskForm from './TaskForm';
import Tasks from './Tasks';

export default class ListTask extends React.Component {

    state = {
        tasks: tasks
    }

    addTask = (titulo, descripcion) => { //Compartir funcion con el componente TaskForm
        //console.log(titulo, descripcion);
        const newTask = {
            titulo: titulo,
            descripcion: descripcion,
            id: this.state.tasks.length
        }
        //console.log(newTask)
        this.setState({
            tasks: [...this.state.tasks, newTask] //Agregar nueva tarea al estado
        })
    }

    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id);
        //console.log(newTasks);
        this.setState({ tasks: newTasks });
    }

    checkDone = id => {
        const newTasks = this.state.tasks.map(task => {
            if (task.id == id) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({ tasks: newTasks });
    }

    render() {
        return (<div style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h2>CRUD Tasks</h2>
                <TaskForm addTask={this.addTask} />
                <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                />
            </div>
        )
    }
}