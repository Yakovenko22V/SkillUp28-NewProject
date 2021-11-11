import React from "react";
import BtnDelete from "../ComponentsBTN/BtnDelete/BtnDelete";
import BtnImportance from "../ComponentsBTN/BtnImpotance/BtnImportance";
import './TaskList.scss';
import TaskItem from "./TaskItem/TaskItem";


function TaskList(props) {

    const {item} = props

    return (
        <div>
            <ul className='listOfTask'>
                <TaskItem item={item}/>
                <BtnDelete/>
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
