import React from "react";

function BtnActive(props) {
    const{isTasksActive, id, item} = props
    
    const changeText = (item.isTaskActive === true) ?  "Деактивировать" : "Активировать"

    return (
        <button className='btn-style' onClick={() => isTasksActive(id)}>{changeText}</button>
    )
};

export default BtnActive;