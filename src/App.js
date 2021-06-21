// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App=() =>{
  const [tasks, setTasks] = useState([   //its in top level cause we wnaan use this in other components.
    {
        id:1,
        text: 'food shopping',
        day:'feb 5th 2:30',
        reminder: false
    },
    {
        id:2,
        text: 'yoga',
        day:'21 june 6:39',
        reminder: true
    },   
    {
        id:3,
        text: 'code',
        day:'1 sept 3:00',
        reminder: false
    }

])

//del a task
const deleteTask= (id) =>{
  setTasks(tasks.filter( (task) => task.id !== id))
}
  return (
    <div className="container">
     <Header/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete =
     {deleteTask}/> : 'No task to show'}  
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
