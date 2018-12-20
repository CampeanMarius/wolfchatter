import React from 'react';

const style={
    position: "fixed",
    width: "200px",
    height: "20px",
    backgroundColor: "white",
    top: "20px",
    zIndex: "1000",
    right: "10px",
    border: "2px solid black",
    padding:"10px"
};

const Notification = ({message}) => (
    <div style={style}>
        {message}
    </div>
);

export default Notification;