import React from "react";

function BtnAllTask({arrTaskFilter, activeBtn}){

    let newClassName = 'btn-style'
    if (activeBtn === 'all') {
        newClassName = 'btn-style active'
    }
    return(
        <button className={newClassName} onClick={() => arrTaskFilter('all')}>Все задачи</button>
    )
}

export default BtnAllTask;