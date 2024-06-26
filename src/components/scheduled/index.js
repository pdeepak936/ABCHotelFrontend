import React, { useState } from 'react';
import axios from "axios";
import { gridStyle } from '../../helper';
import  MainCard from "../card/card";
import CustomLoader from "../loader/index";

const Scheduled = () => {
    const [data, setData]=useState([]);
    console.log('schedule', data);
    //alert('hello')

    React.useEffect(()=>{
        (async()=>{
            try {
                const data = await axios.get("https://abchotelbackend.onrender.com/filterScheduled");
                //let jsonData=await data;
                setData(data.data);
              } catch (error) {
                console.error("Error updating status:", error);
              }
        })()
    },[])
    
  return (
    <div className="row center">
      <div style={{position:"absolute", left:"50%", top:"50%"}}>{!!(!data?.length) && <CustomLoader/>}</div>
      {!!data?.length &&  data.map((task) => {
        return  <MainCard
        taskId={task._id}
        userName={task.userName}
        serviceRequest = {task.serviceRequest}
        selectedDateTime={task.selectedDateTime}
        cardId={task.cardId}
        delay={task.delay}
        task={task.task}
        rating={task.rating}
        status={task.status}
        itemRequest={task.itemRequest}
        />
      }
      
      )}
    </div>
  )
}

export default Scheduled