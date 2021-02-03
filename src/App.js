import React, {Component} from 'react'
import './App.css';
//import ListComponent from './component/ListComponent';
import { tasts } from './tast.json';
import Form from './component/Form';

class App extends Component{

  constructor(){
    super();
    this.state = {
      tasts
    };
    this.handleAddTasts = this.handleAddTasts.bind(this);
  }

  handleAddTasts(tast) {
    this.setState({
      tasts: [...this.state.tasts, tast]
    })
  }

  removeTast(index){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        tasts:this.state.tasts.filter((e, i) => {
          return i !== index
        })
     })
    }
  }

  render(){

    const tasts = this.state.tasts.map((tasts, i) =>{
      return(
        <div className='list_component' key={i}>
          <ul>
            <li className='checked' >
              {tasts.title} <hr/>
              <div className='rmTast'>
              <button className='btn-rm' onClick={this.removeTast.bind(this, i)}>
              Delete
            </button>
          </div>
            </li>
          </ul>
        </div>
      )
    })

    return (
      <div >
        <section>
          <Form onAddTast={this.handleAddTasts}/>
        </section>
        <section className='list-component'>
          { tasts }
        </section>

      </div>
    )
  }
  
}

export default App;
