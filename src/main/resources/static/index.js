const user = {
    id : 5,
    age: 33,
    firstName: 'Tom',
    lastName: 'Johns',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
ReactDOM.render(
    <div id={user.id}>
    <p>Id: {user.id}</p>
    <p>Полное имя: {user.getFullName()}</p>
    <p>Возраст: {user.age}</p>
    <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
    </div>,
    document.getElementById("container")
);
