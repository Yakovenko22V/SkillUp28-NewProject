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
                <TaskItem itemT={item.flagOfImportance} itemN={item.isTaskActive} title='Важно ли задание:'/>
                </div>
                <BtnDelete deleteTask={deleteTask} id={item.idOfTask}/>
                <BtnImportance isTaskImportant={isTaskImportant} id={item.idOfTask}/>
                <BtnActive isTasksActive={isTasksActive} id={item.idOfTask}/>
                <hr style={{
                    color: '#000000',
                    height: .5,
                }} />
            </ul>
        </div>
    )
};

export default TaskList;
