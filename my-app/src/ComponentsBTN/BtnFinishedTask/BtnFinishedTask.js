import React from "react";

function BtnFinishedTask({arrTaskFilter, activeBtn}) {
    
    let newClassName = 'btn-style'
    if (activeBtn === 'closed'){
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('closed')}>Завершенные задачи</button>
    )
};

export default BtnFinishedTask