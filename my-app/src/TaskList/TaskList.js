import React from "react";
import BtnDelete from "../ComponentsBTN/BtnDelete/BtnDelete";
import BtnImportance from "../ComponentsBTN/BtnImpotance/BtnImportance";
import './TaskList.scss';


function TaskList(props) {
    return (
        <div>
            {props.items.map((item) =>
                <ul key={item.idOfTask} className='listOfTask'>
                    <li>Задание: '<span style={{fontWeight: "bold"}}>{item.nameOfTask}</span>'.</li>
                    <li>Важно ли задание: <span style={{fontWeight: "bold", color: 'red'}}>{item.flagOfImportance}</span></li>
                    <button onClick={<BtnDelete/>}>Удалить задачу</button>
                    <button onClick={<BtnImportance/>}>Пометить задачу как важнаю</button>
                    <hr style={{
                        color: '#000000',
                        height: .5,
                    }} />
                </ul>)}
        </div>
    )
};

export default TaskList;
