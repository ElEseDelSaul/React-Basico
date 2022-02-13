import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

//Formas de utilizar estilos CSS
//atraves de un archivo .css externo
//con la propiedad style = { { background: 'green'  } } 

class Task extends React.Component {

    render() {
        //Destructuring JS
        const { task } = this.props;

        //Estilos CSS
        const inputTask = { //OBJETO CSS
        };

        const btnDelete = { //OBEJTO CSS
            fontSize: '30px',
            color: 'white',
            backgroundColor: 'red',
            border: 'none',
            borderRadius: '50%',
            margin: '5px',
        }

        function done() {   //FUNCION CSS (se evalua estado de 'done')
            return {
                background: '#ab8080',
                textAlign: 'center',
                cursor: 'pointer',
                margin: '5px',
                width: '25%',
                fontFamily: 'Times',
                color: task.done ? '#430' : 'black',
                textDecoration: task.done ? 'line-through' : 'none',
                alingItems: 'center',
                justifyContent: 'center'
            }
        }

        return (        //Objeto    //Funcion
            <div style={done()} >
                {task.id} -
                {task.titulo} -
                {task.descripcion} -
                {task.done}
                <input
                    type="checkbox"
                    onChange={this.props.checkDone.bind(this, task.id)}
                />
                <button
                    style={btnDelete}
                    onClick={this.props.deleteTask.bind(this, task.id)}
                >X</button>
            </div>
        )
    }

}

Task.propTypes = {  //Definiendo tipo de propiedades de nuestro componente Task = OBJETO
    task: PropTypes.object.isRequired
}


export default Task;