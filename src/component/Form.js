import { React, Component } from "react";
// import logo from '../logo.svg';
import polpo from './polpo.png';

class Form extends Component{

    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleInpunt = this.handleInpunt.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInpunt(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTast(this.state);
        console.log('sending the data...');
    }

    render(){
        return(
            <div className='App'>
                <header className="App-header">
            <img src={polpo} className='App-logo' alt='logo' />
            <div className='head'>
              <h1>My To Do List</h1>
              <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleInpunt} type="text" name='title' placeholder='Title...'/> {'  '}
              <button type='submit'> Add</button>
              </form>
            </div>
            </header>
            </div>
        )
    }
}

export default Form;