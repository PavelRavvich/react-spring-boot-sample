let Task = React.createClass({

    getInitialState: function () {
        return {
            edit: false
        }
    },

    //Edit function set param switch to edit mode.
    edit: function () {
        this.setState({
            edit: true
        })
    },

    //Exit from edit mode.
    remove: function () {
        this.props.deleteTask(this.props.index)
    },


    save: function () {
        let value = this.refs.header.value;
        let index = this.props.index;
        this.props.updateTask(value, index);
        this.setState({edit: false})
    },

    //Render default view of task.
    renderDefault: function () {
        return (
            <div>
                <h3>{this.props.children}</h3>
                <button onClick={this.edit}>edit</button>
                <button onClick={this.remove}>remove</button>
            </div>
        );
    },

    //Render edit mode of task.
    renderEdit: function () {
        return (
            <div>
                <textarea ref="header" defaultValue={this.props.children}/>
                <button onClick={this.save}>Сохранить</button>
            </div>
        );
    },

    //Main render.
    render: function () {
        if (this.state.edit) {
            return this.renderEdit()
        } else {
            return this.renderDefault()
        }
    }
});

let Tasks = React.createClass({

    getInitialState: function () {
        return {
            tasks: []
        }
    },

    addTask: function (text) {
        let arr = this.state.tasks;
        arr.push(text);
        this.setState({tasks: arr})
    },

    deleteTask: function (index) {
        let arr = this.state.tasks;
        //Удаляем по индексу и второй параметр сколько элементов удалить.
        arr.splice(index, 1);
        this.setState({tasks: arr});
    },

    updateTask: function (text, index) {
        let arr = this.state.tasks;
        arr[index] = text;
        this.setState(arr);
    },

    eachTask: function (task, index) {
        return (
            <Task key={index} index={index} updateTask={this.updateTask} deleteTask={this.deleteTask}>

                {task}
            </Task>
        )
    },

    render: function () {
        return (
            <div>
                <button onClick={this.addTask.bind(null, 'Нажмите редактировать что-бы ввести задание')}>
                    Добавить задание
                </button>

                <div className="block">
                    {this.state.tasks.map(this.eachTask)}
                </div>
            </div>
        );
    }
});

const target_place = document.getElementById("target_block_01");

ReactDOM.render(
    <Tasks/>,
    target_place
);
