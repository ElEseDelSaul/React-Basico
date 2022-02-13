import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends React.Component {

    render() {
        return (
            this.props.tasks.map(e => <Task
                key={e.id}
                task={e}
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            />)
        )
    }

}

Tasks.propTypes = { //ARREGLO
    tasks: PropTypes.array.isRequired
}

export default Tasks;