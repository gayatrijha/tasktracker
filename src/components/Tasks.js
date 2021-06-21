import Task from './Task'

const Tasks = ( {tasks , onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={tasks.id} task={task}
                onDelete={onDelete}/>  //parent of list i.e <h3> shud hv key prop( something unique)
            ))}  
        </>
    )
}

export default Tasks
