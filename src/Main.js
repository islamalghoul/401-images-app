import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Data from './Data.json'
import Cardes from './Cardes';
import './Main.css'
export default function Main() {
    const[data,setData]=useState(Data);
    const[totalLikes,setLikes]=useState(0);
    
    let handelClick=(id)=>{
        let ele=data.find(ele=>{
            return ele._id===id
        })
        ele.likes+=1
   

        setLikes(totalLikes+1)
    }
  return (
    <>
    <Row xs={1} md={3} className="g-4">
      {data.map((ele) => (
        < Cardes  image_url={ele.image_url} _id={ele._id} title={ele.title}  likes={ele.likes}  handelclick={handelClick}  />
       
        
      ))}

    </Row>
    <h3 className='totalLikes'> Total Likes:{totalLikes} </h3>
    </>
    
  )
}
