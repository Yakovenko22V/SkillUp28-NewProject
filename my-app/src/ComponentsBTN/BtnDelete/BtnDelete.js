import React from "react";

function BtnDelete(props) {
    const{deleteTask, id} = props
    return (
        <button className='btn-style' onClick={() => deleteTask(id)}>Удалить задачу</button>
    )
};

export default BtnDelete;