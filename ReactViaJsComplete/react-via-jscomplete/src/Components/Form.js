import React from 'react'
//import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
      this.state = { message: '',userName:'' };

    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        //$('#message').append('Event:' + event.type + ' ,' + this.userNameInput.value);
        //this.setState({message:'Event:' + event.type + ' ,' + this.userNameInput.value});
        this.setState({message:'Event:' + event.type + ' ,' + this.state.userName});
        //console.log('Event:' + event.type + ' ,' + this.userNameInput.value);
        console.log('Event:' + event.type + ' ,' + this.state.userName);
        axios.get('https://api.github.com/users/'+ this.state.userName)
            .then(response =>
            {
                this.props.onSubmitEvent(response.data);
            });
        this.setState({ userName: '' });
    };

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username" required
                    /* ref={(input)=>this.userNameInput =input}*/
                    value={this.state.userName}
                    onChange={(event) => this.setState({userName:event.target.value})}/>
                <button type="submit">Add a card</button>

                <div>{this.state.message}</div>
                </form>
            
            );
    }
}
export default Form;