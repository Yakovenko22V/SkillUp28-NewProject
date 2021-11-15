import React from "react";

function BtnImportance(props){
    const{isTaskImportant, id} = props
    return(
        <button className='btn-style' onClick={() => isTaskImportant(id)}>Пометить задачу как важнаю</button>
    )
}

export default BtnImportance;