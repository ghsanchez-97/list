import React, {Component} from 'react';

class ListComponent extends Component{

    render(){

        let act = {
            acts: ['Hit the GYM', 'Pay Bills', 'Meet George', 'Buy Eggs', 'Read a Book', 'Organize Office']
        }

        return(
            <div className='list_component'>
                <ul>
                    {
                       act.acts.map((acts, i) =>{
                        return(
                            <li key={i}>
                                {
                                    acts
                                }
                            </li>
                        )
                       })
                    }
                </ul>
            </div>
        );
    }
}

export default ListComponent;