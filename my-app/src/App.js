import React from 'react';
import './App.css';
import './styles-bar.scss';
import './loadingStyle/loadingStyle.scss';
import BtnAllActiveTask from './ComponentsBTN/BtnAllActiveTask/BtnAllActiveTask';
import BtnAllTask from './ComponentsBTN/BtnAllTask/BtnAllTask';
import BtnFinishedTask from './ComponentsBTN/BtnFinishedTask/BtnFinishedTask';
import Input from './ComponentsBTN/Input/Input';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';
import Form from './ComponentsBTN/Form/Form';
import { loadData } from './ComponentsBTN/Utils/loadData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedList: '',
      filteredArr: '',
      arrTask: null
    }
  }

  deleteTask = id => {
    this.setState(prevState => ({
      arrTask: prevState.arrTask.filter((el) => el.idOfTask !== id)
    })
    )
  };

  isTaskImportant = id => {
    this.setState(prevState => ({
      arrTask: prevState.arrTask.map((el) => el.idOfTask === id
        ? { ...el, flagOfImportance: !el.flagOfImportance }
        : el
      )
    }))
  };

  isTasksActive = id => {
    this.setState(prevState => ({
      arrTask: prevState.arrTask.map((el) => el.idOfTask === id
        ? { ...el, isTaskActive: !el.isTaskActive }
        : el)
    }))
  };

  arrTaskFilter = data => {
    this.setState(prevState => ({
      ...prevState,
      displayedList: data
    }))
  };

  filteredByInput = data => {
    this.setState(prevState => ({
      ...prevState,
      filteredArr: data
    }))
  };

  setAdditionalTask = (data) => {
    const arrWithNewTask = this.state.arrTask.concat();
    arrWithNewTask.push(
      {
        nameOfTask: data,
        idOfTask: Date.now(),
        flagOfImportance: false,
        isTaskActive: true
      });
    this.setState({ arrTask: arrWithNewTask })
  };

  componentDidMount() {
    loadData().then((data) => {
      this.setState({
        arrTask:data
      })
    });
  }

  filterArrTask() {
    const newArray = this.state.arrTask.filter(item => {
      if (this.state.displayedList === 'all') {
        return item
      } else if (this.state.displayedList === 'closed') {
        return !item.isTaskActive
      } else if (this.state.displayedList === 'allActive') {
        return item.isTaskActive
      } else {
        return item
      }
    })
    return newArray
  };

  filterNewArray() {
    const newArrayTwo = this.filterArrTask().filter(item => {
      if (this.state.filteredArr === '') {
        return item
      } else {
        return item.nameOfTask.toLowerCase().includes(this.state.filteredArr.toLowerCase())
      }
    });
   return newArrayTwo 
  };

  render() {

    if(!this.state.arrTask) return <div className='loding-block'><div className="lds-circle"><div></div></div><div>Loading</div></div>

    return (
      <div className='parent-block'>
        <div className='todo-list'><h1>TODO-List</h1></div>
        <div className='wrapper'>
          <div className='header-bar'>
            <div className='search-block'>
              <Input filteredByInput={this.filteredByInput} />
              <div className='buttons-sort'>
                <BtnAllTask arrTaskFilter={this.arrTaskFilter} activeBtn={this.state.displayedList} />
                <BtnAllActiveTask arrTaskFilter={this.arrTaskFilter} activeBtn={this.state.displayedList} />
                <BtnFinishedTask arrTaskFilter={this.arrTaskFilter} activeBtn={this.state.displayedList} />
              </div>
            </div>
            <div className='add-task-block'>
              <Form setAdditionalTask={this.setAdditionalTask} />
            </div>
          </div>
          <div className='task-container'>
            {
              this.filterNewArray().map((item) => (
                <TaskList key={item.idOfTask}
                  item={item}
                  deleteTask={this.deleteTask}
                  isTaskImportant={this.isTaskImportant}
                  isTasksActive={this.isTasksActive} />
              ))
            }
          </div>
        </div>
        <div className='fonpicture'></div>
      </div>
    )
  }
}
export default App;
