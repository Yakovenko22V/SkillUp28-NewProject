import './App.css';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';

function App() {
  const arrTask= [
    {
      nameOfTask: 'Оплатить комунальные счета',
      idOfTask:'1',
      flagOfImportance:'Да',
    },

    {
      nameOfTask: 'Сделать домашнее задание на курсы SkillUp',
      idOfTask:'2',
      flagOfImportance:'Да',
    },

    {
      nameOfTask: 'Посмотреть новый фильм Marvel',
      idOfTask:'3',
      flagOfImportance:'Нет',
    },
  ];
  return (
    <div>
      <TaskList items={arrTask}/>
    </div>
  )
}
export default App;
