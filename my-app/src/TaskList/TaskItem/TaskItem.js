import React from "react";

function TaskItem(props) {

    const { itemT, title } = props

    return (
        <div>{title} '
            <span className={(itemT.length) ? 'span-task' : (itemT ? 'span-import green' : 'span-import black')}>
            {
            (itemT.length) ?
             itemT : (itemT ? 'Да' : 'Нет')
            }
             </span>'
        </div>
    )
}

export default TaskItem;