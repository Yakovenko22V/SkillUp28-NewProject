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

    disableBtnProps = () => (this.state.inputTextForAdd === undefined||
    this.state.inputTextForAdd === '' ||
    this.state.inputTextForAdd.replace(/\s/g,"") === "" ) ? true : false;
    setClassName = () => (this.disableBtnProps() === true) ? 'ds' : 'btn-style'
    render() {
        return (
            <div className='tools-to-add'>
                <input placeholder='Создать задачу' onChange={(e) => this.getAdditionalText(e.target.value)}></input>
                <button className={this.setClassName()} disabled={this.disableBtnProps()} onClick={() => this.props.setAdditionalTask(this.state.inputTextForAdd)}>Добавить задачу</button>
            </div>
        )
    }
}
export default Form;