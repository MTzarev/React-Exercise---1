import ToDoListItems from "./ToDoListItems";
function TodoList (){

    return(
        <ul>
            <ToDoListItems text="Clean your room" />
            <ToDoListItems text="Go Shoppint" />
            <ToDoListItems text="Learn Components and Props" />
        </ul>
    )
}
export default TodoList;