import React from 'react';

const styles={
    body:{
        height: "30vh",
        overflowY: "auto"
    },
    message: {
        display: "flex"
    },
    messageBody:{
        marginLeft : "10px",
        borderBottom: "1px solid black"
    }
    
};
//chat = {user : "John", message: "hello"}
const ChatMessages = ({chats}) => (
    <div style={styles.body}>
        {
            chats && chats.length > 0 ?
            chats.map(chat => 
                <div style={styles.message}>
                    <p><b>{chat.user} : </b></p>
                    <div style={styles.messageBody}>
                        <p>{chat.message}</p>
                        <p>{chat.date}</p>
                    </div>
                </div>
                )
            :
            null
        }
    </div>
);

export default ChatMessages;