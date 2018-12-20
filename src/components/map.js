import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Notification from './notification';
import LocationChat from'./locationChat';

class ChatMap extends React.Component{
    constructor(){
        super();

        this.state={
            locations: [],
            currentLocation : 0,
            chatsArray : []
        }
    }

    // chatsArray is an array of arrays , example below 
    // [
    //     {
    //         user : "john",
    //         message : "hello",
    //         date: "20/12/2019"
    //     },
    //     {
    //         user : "alan",
    //         message : "hi",
    //         date: "20/12/2019"
    //     }
    // ]

    handleMapClick(point) {

        let locations = [...this.state.locations,point.latlng];
        let chats = [...this.state.chatsArray,[]];
        this.setState({
            locations : locations,
            chatsArray : chats
        });
    }

    handleLocationClick(index){

        this.setState({
            currentLocation : index
        });
    }

    handleMessageSubmit(chatMessage){

        let chats = [...this.state.chatsArray[this.state.currentLocation],chatMessage];
        let array = this.state.chatsArray;
        array[this.state.currentLocation] = chats;
        this.setState({
            chatsArray : array
        });
        
    }

    render(){
        return(
            <div>
                <Map center={[46.7712,23.6236]} zoom={5} style={{width:"100vw",height:"100vh"}} onClick={(point) => this.handleMapClick(point)}>     
                    <TileLayer
                        url='http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'
                    />
                    {
                        this.state.locations.length > 0 ?
                        this.state.locations.map((location,index) => 
                            <Marker key={index} position={location} onClick={() => this.handleLocationClick(index)} />
                            )
                        :
                        null
                    }
                </Map>
                
                {
                    this.state.locations.length == 0 ?
                    <Notification message={"Click on the map to start a chat"} />
                    :
                    <LocationChat name={this.state.currentLocation} chats={this.state.chatsArray[this.state.currentLocation]} callback={this.handleMessageSubmit.bind(this)}/>
                }

            </div>
        )
    }
}

export default ChatMap;