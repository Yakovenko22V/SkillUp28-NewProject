import './App.css';
import Input from './ComponentsBTN/Input/Input';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';

function App() {
  const arrTask= [
    {
      nameOfTask: 'Оплатить комунальные счета',
      idOfTask:'1',
      flagOfImportance: true,
    },

    {
      nameOfTask: 'Сделать домашнее задание на курсы SkillUp',
      idOfTask:'2',
      flagOfImportance:true,
    },

    {
      nameOfTask: 'Посмотреть новый фильм Marvel',
      idOfTask:'3',
      flagOfImportance:false,
    },
  ];
  return (
    <div>
      <Input />
      {
        arrTask.map((item) => (
         <TaskList key={item.idOfTask} item={item}/>
        ))
      }
    </div>
  )
}
export default App;
