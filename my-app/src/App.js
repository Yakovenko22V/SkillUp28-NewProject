import React from 'react';
import './App.css';
import BtnActiveTask from './ComponentsBTN/BtnActiveTask/BtnActiveTask';
import BtnShow from './ComponentsBTN/BtnAllTask/BtnAllTask';
import BtnFinishedTask from './ComponentsBTN/BtnFinishedTask/BtnFinishedTask';
import Input from './ComponentsBTN/Input/Input';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrTask:[
        {
          nameOfTask: 'Оплатить комунальные счета',
          idOfTask: 1,
          flagOfImportance: true,
          isTaskActive: true,
        },
    
        {
          nameOfTask: 'Сделать домашнее задание на курсы SkillUp',
          idOfTask: 2,
          flagOfImportance: true,
          isTaskActive: true,
        },
    
        {
          nameOfTask: 'Посмотреть новый фильм Marvel',
          idOfTask: 3,
          flagOfImportance: false,
          isTaskActive: false,
        },
      ]
    }
  }
  render() {
  return (
    <div>
        <Input />
        <BtnShow/>
        <BtnActiveTask/>
        <BtnFinishedTask/>
      {
        this.state.arrTask.map((item) => (
          <TaskList key={item.idOfTask} item={item} />
        ))
      }
    </div>
  )
}}
export default App;
