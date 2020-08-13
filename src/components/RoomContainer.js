import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomContainer);

/*
import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {RoomConsumer} from '../Context'
import Loading from './Loading'

export default function RoomContainer() {
    return (
        <RoomConsumer>
            { 
            value => {
            const { loading, sortedRooms, rooms } = value;
                if (loading){
                    return <Loading />;
                }
            //console.log(value);
            return(
                <div>
                hello form roomscontainer,...                
                <RoomFilter rooms = {rooms} />
                <RoomList rooms = {sortedRooms} />
                </div>
                );
            }}
        </RoomConsumer>
    )
}
*/
