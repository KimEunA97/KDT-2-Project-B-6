import React, { useEffect, useState } from 'react'
import Gun from './Gun'
import { Guns } from '../global/global'



interface props{
  pageState:string
  setPageState:(page:string)=>void
}


interface GunData {
  id: string;
  name: string;
  imageLink: string;
}

const ContentOfGuns:React.FC<props>=(props)=>{
  const[guns,setGuns]=useState<GunData[]>([]);

  useEffect(()=>{
    fetch('/all_gun_list',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setGuns(data);
    })
    .catch(error=>{
      console.error(error);
    })
  },[]);
  
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    flexWrap:'wrap',
    width:'95%',
    height:'95%'
  }
  return(
    <div style={container}>
      {guns.length>0 &&
        guns.map((item,index)=>(
          <Gun gunImg={item.imageLink} gunName={item.name} key={index} id={item.id} setPageState={props.setPageState}></Gun>
        ))
      }
    </div>
  );
}

export default ContentOfGuns;