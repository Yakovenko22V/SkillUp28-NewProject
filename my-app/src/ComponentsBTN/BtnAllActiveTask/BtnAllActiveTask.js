import React from "react";

function BtnAllActiveTask({arrTaskFilter,activeBtn}) {
    
    let newClassName = 'btn-style'
    if (activeBtn === 'allActive') {
        newClassName = 'btn-style active'
    }

    return(
        <button className={newClassName} onClick={() => arrTaskFilter('allActive')}>Активные задачи</button>
    )
};

export default BtnAllActiveTask;