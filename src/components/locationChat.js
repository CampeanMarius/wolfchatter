import React from 'react';
import ChatMessages from'./chatMessages';
import Form from './form';
import PropTypes from 'prop-types';

const styles={
    body:{
        position: "fixed",
        width: "30vw",
        height: "55vh",
        backgroundColor: "white",
        top: "20px",
        zIndex: "1000",
        right: "10px",
        border: "2px solid black",
        padding:"10px"
    },
    title:{
        marginBottom: "20px",
        textAlign: "center",
        fontSize : "20px"
    }
    
};

class LocationChat extends React.Component{


    render(){
        return(
            <div style={styles.body}>
                <p style={styles.title}>Chatroom {this.props.name}</p>
                <ChatMessages chats={this.props.chats} />
                <Form callback= {this.props.callback}/>
            </div> 
        )
    }
}

LocationChat.PropTypes={
    name : PropTypes.number.isRequired,
    chats : PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired
}

export default LocationChat;