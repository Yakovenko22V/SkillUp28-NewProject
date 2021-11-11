import React from "react";
import './TaskList.scss';

function TaskList(props) {
    return (
        <div>
            {props.items.map((item, id) =>
                <ul key={id} className='listOfTask'>
                    <li>Задание: '<span style={{fontWeight: "bold"}}>{item.nameOfTask}</span>'.</li>
                    <li>Важно ли задание: <span style={{fontWeight: "bold", color: 'red'}}>{item.flagOfImportance}</span></li>
                    <hr style={{
                        color: '#000000',
                        height: .5,
                    }} />
                </ul>)}
        </div>
    )
};

export default TaskList;
