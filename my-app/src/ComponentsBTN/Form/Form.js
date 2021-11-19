import React from "react"

class Form extends React.Component {
    constructor(props,) {
        super(props);
        this.state = {
            inputTextForAdd: '',
            disabled: ''
        }
    }

    getAdditionalText = (data) => {
        this.setState(prevState => ({
            ...prevState,
            inputTextForAdd: data
        }))
    };

    disableBtnProps = () => (this.state.inputTextForAdd === '') ? true : false;
    setClassName = () => (this.disableBtnProps() === true) ? 'ds' : 'btn-style'
    render() {
        console.log('1', this.state.disabled);
        console.log('2', this.setClassName());
        return (
            <div className='tools-to-add'>
                <input placeholder='Создать задачу' onChange={(e) => this.getAdditionalText(e.target.value)}></input>
                <button className={this.setClassName()} disabled={this.disableBtnProps()} onClick={() => this.props.setAdditionalTask(this.state.inputTextForAdd)}>Добавить задачу</button>
            </div>
        )
    }
}
export default Form;