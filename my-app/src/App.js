import { useState } from 'react';
import './App.css';
import BtnActiveTask from './ComponentsBTN/BtnActiveTask/BtnActiveTask';
import BtnShow from './ComponentsBTN/BtnAllTask/BtnAllTask';
import BtnFinishedTask from './ComponentsBTN/BtnFinishedTask/BtnFinishedTask';
import Input from './ComponentsBTN/Input/Input';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';


function App() {
  const arrTask = [
    {
      nameOfTask: 'Оплатить комунальные счета',
      idOfTask: 1,
      flagOfImportance: true,
    },

    {
      nameOfTask: 'Сделать домашнее задание на курсы SkillUp',
      idOfTask: 2,
      flagOfImportance: true,
    },

    {
      nameOfTask: 'Посмотреть новый фильм Marvel',
      idOfTask: 3,
      flagOfImportance: false,
    },
  ];
  
  return (
    <div>
        <Input />
        <BtnShow/>
        <BtnActiveTask/>
        <BtnFinishedTask/>
      {
        arrTask.map((item) => (
          <TaskList key={item.idOfTask} item={item} />
        ))
      }
    </div>
  )
}
export default App;
