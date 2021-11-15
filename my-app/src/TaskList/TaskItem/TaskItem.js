import React from "react";

function TaskItem(props) {

    const { itemT, title, itemN} = props

    return (
        <div>{title} '
            <span className={(itemT.length) ? 'span-task' : (itemT ? 'span-import green' : 'span-import black')} id={(itemN===false) ? 'non-active-style' : ''}>
            {
            (itemT.length) ?
             itemT : (itemT ? 'Да' : 'Нет')
            }
             </span>'
        </div>
    )
}

export default TaskItem;