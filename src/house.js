import React from 'react';
import NewRoomForm from './new-room-form';


export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
        ? this.props.data.rooms.map((room, index)=> 
        <div id="room" key={index}>
          <h5 id="roomName"><strong> Name: </strong>{room.name}</h5>
          
          <h5 id="roomArea"><strong> Area: </strong>{room.area}</h5> 
          <button className="btn btn-danger" onClick={e => this.props.deleteRoom(e, this.props.data, room)}>Delete</button>
            
        </div>)
        : null;
        return (

        <div className="card" id="house">
            <div className="card card-body" id="houseBody">
                <h2 id="houseName" className="card-title">{this.props.data.name}</h2>
                <NewRoomForm addNewRoom={this.props.addNewRoom} data={this.props.data} />
                <br></br>
                <div>
                    {rooms}
                </div>
            </div>
        </div>    
        );
    }
}