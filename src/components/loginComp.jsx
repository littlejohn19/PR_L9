import React, { Component } from 'react';

class loginComp extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
      errors: {}

    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}})
        if (errors) return;
        console.log("here submit")
    
    }

    handleChange = (event) => {
        const account = {...this.state.account}
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    } 

    validate = () =>{
        const errors = {};
        const {account} =this.state;
        if(account.username.trim() ===''){
            errors.username = 'Username required!';
        }
        if(account.password.trim() ===''){
            errors.password = 'Password required!';
        }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    render() {
        return (
            <div>
                <h1> Login: </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor= "username">Email</label>
                        
                        <input
                        value = {this.state.account.username}
                        onChange = {this.handleChange}
                        name = "username"
                        type = "text"
                        className = "form-control"
                        id = "username"
                        aria-describedby="emailHelp"
                        placeholder = "username"
                        />

                        {this.state.errors.username && 
                        <div className= "alert alert-danger">
                            {this.state.errors.username}
                        </div>}
                        
                    </div>

                    <div className="form-group">
                        <label htmlFor= "password">Password</label>
                        
                        <input
                        value = {this.state.account.password}
                        onChange = {this.handleChange}
                        name = "password"
                        type = "password"
                        className = "form-control"
                        id = "password"
                        aria-describedby="emailHelp"
                        placeholder = "password"
                        />
                     {this.state.errors.password && 
                        <div className= "alert alert-danger">
                            {this.state.errors.password}
                        </div>}

                    </div>
                    <button type = "submit" className="btn btn-primary">Login</button>
                    </form>                
            </div>
        );
    }
}

export default loginComp;
