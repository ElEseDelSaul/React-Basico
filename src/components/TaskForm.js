import React from 'react';

export default class TaskForm extends React.Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        //console.log('Submiting')
        e.preventDefault(); //Cancelar comportamiento de formulario
        //console.log(this.state);
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = e => {
        //console.log(e)
        console.log(e.target.name, e.target.value);
        this.setState({ //Modificar estado del componente
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Write a Task"
                    name="title"
                    onChange={this.onChange} />
                <br />
                <textarea
                    placeholder="Write a description"
                    name="description"
                    onChange={this.onChange}></textarea>
                <input type="submit" />
            </form>
        )
    }

}
