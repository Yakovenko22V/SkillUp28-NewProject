import React from "react";

function TaskItem(props) {

    const { itemT, title } = props

    return (
        <div>{title} '
            <span className={(itemT.length) ? 'span-task' : (itemT ? 'span-import green' : 'span-import red')}>
            {
            (itemT.length) ?
             itemT : (itemT ? 'Да' : 'Нет')
            }
             </span>'
        </div>
    )
    // return (
    //     <div>
    //         <div>Задание: '<span style={{ fontWeight: "bold" }}>{item.nameOfTask}</span>'.</div>
    //         <div>Важно ли задание: <span style={{ fontWeight: "bold", color: item.flagOfImportance ? 'red' : 'black' }}>{item.flagOfImportance ? 'Да' : 'Нет'}</span></div>
    //     </div>
    // )
}

export default TaskItem;