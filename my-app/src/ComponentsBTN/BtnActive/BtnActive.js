import React from "react";

function BtnActive(props) {
    const{isTasksActive, id} = props
    return (
        <button className='btn-style' onClick={() => isTasksActive(id)}>Активировать/Деактивировать</button>
    )
};

export default BtnActive;