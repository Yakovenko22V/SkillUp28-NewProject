import React from "react";

function TaskItem(props) {
    const { item } = props

    return (
        <div>
            <div>Задание: '<span style={{ fontWeight: "bold" }}>{item.nameOfTask}</span>'.</div>
            <div>Важно ли задание: <span style={{ fontWeight: "bold", color: item.flagOfImportance ? 'red' : 'black' }}>{item.flagOfImportance ? 'Да' : 'Нет'}</span></div>
        </div>
    )
}

export default TaskItem;