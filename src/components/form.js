import React from 'react';
import PropTypes from 'prop-types';

const styles={
    body:{
        display: "flex",
        flexDirection : "column",
        marginTop: "10px"
    }
};

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            message:""
        }
    }

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value
        });
    }

    validateOK(){
        if(this.state.user.length === 0 || this.state.message.length === 0)
            return false;
        return true;
    }

    onSubmit(){

        if(!this.validateOK())
            return;

        let time = new Date();

        var chatMessage= {
            user: this.state.user,
            message : this.state.message,
            date: time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear()
        };

        this.props.callback(chatMessage);
        this.setState({
            user: "",
            message: ""
        });

    }

    render(){
        return(
          <div style={styles.body}>
                <input type="text" value={this.state.user} placeholder="write user name" onChange={this.handleChange("user")} />
                <div style={{display: "flex",justifyContent:"space-between",marginTop:"10px"}}>
                    <textarea value={this.state.message} placeholder="write message" onChange={this.handleChange("message")}></textarea>
                    <button type="button" onClick={() => this.onSubmit()}>Submit</button>
                </div>
          </div>
        )
    }
}

Form.PropTypes= {
    callback : PropTypes.func.isRequired
}

export default Form;