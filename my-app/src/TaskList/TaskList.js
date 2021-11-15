import React from "react";
import BtnDelete from "../ComponentsBTN/BtnDelete/BtnDelete";
import BtnImportance from "../ComponentsBTN/BtnImpotance/BtnImportance";
import './TaskList.scss';
import TaskItem from "./TaskItem/TaskItem";


function TaskList(props) {

    const {item, deleteTask} = props
    return (
        <div>
            <ul className='listOfTask'>
                <TaskItem itemT={item.nameOfTask} title='Задача:'/>
                <TaskItem itemT={item.flagOfImportance} title='Важно ли задание:'/>
                <BtnDelete deleteTask={deleteTask} id={item.idOfTask}/>
                <BtnImportance/>
                <hr style={{
                    color: '#000000',
                    height: .5,
                }} />
            </ul>
        </div>
    )
};

export default TaskList;
