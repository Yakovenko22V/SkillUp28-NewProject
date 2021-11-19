import React from "react";
import BtnDelete from "../ComponentsBTN/BtnDelete/BtnDelete";
import BtnImportance from "../ComponentsBTN/BtnImpotance/BtnImportance";
import './TaskList.scss';
import TaskItem from "./TaskItem/TaskItem";
import BtnActive from "../ComponentsBTN/BtnActive/BtnActive";


function TaskList(props) {

    const {item, 
        deleteTask,
        isTaskImportant,
        isTasksActive
        } = props
        
    return (
        <div>
            <ul className='listOfTask'>
                <div className={(item.isTaskActive === false) ? 'non-active-style' : ''}>
                <TaskItem itemT={item.nameOfTask} title='Задача:'/>
                <TaskItem itemT={item.flagOfImportance} itemN={item.isTaskActive} title='Важна ли задача:'/>
                </div>
                <BtnDelete deleteTask={deleteTask} id={item.idOfTask}/>
                <BtnImportance isTaskImportant={isTaskImportant} id={item.idOfTask}/>
                <BtnActive isTasksActive={isTasksActive} item={item} id={item.idOfTask}/>
                <hr className='hrLine' />
            </ul>
        </div>
    )
};

export default TaskList;
