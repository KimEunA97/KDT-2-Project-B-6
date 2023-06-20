import React, { useState } from 'react'

interface Item{
  category:string,
  id:string,
  shortName:string,
  fullName:string,
  iconLink:string,
  color:string,
  value:{
    price:number,
    currency:string,
  }|null,
  conflictItems:string[]|null,
  ability:{
    ammunitionType:string|null
    rpm:number|null,
    ergo:number|null,
    vertical:number|null,
    horizontal:number|null,
    accuracy:number|null,
    magazineCapacity:number|null,
    reloadSpeed:number|null,
    checkDuration:number|null,
    damage:number|null,
    penetrationPower:number|null,
    class:number[]|null,
    fragmentationChance:number|null
  },
  modSlot:{
    slotName:string,
    capatibleItems:string[],
    item:Item
  }[]|null
}

interface Data{
    itemCategory:string,
    color:string,
    name:string,
    iconLink:string|undefined,
}


const SelectBox:React.FC<Data>=(props)=>{
  const[category,setCategory]=useState(props.itemCategory);
  const[boxStyle,setBoxStyle]=useState({});

  if(category==='mainWeapon')
  {
    setBoxStyle({
      display:'flex',
      width:'200px',
      height:'100px',
      border:'1px solid white',
      borderRadius:'10px'
    })
  }


  return(
    <div style={boxStyle}>
      <div style={{
        width:'33%',
        height:'100%',
        borderLeft:'1px solid white'
      }}>
        <img src={props.iconLink} alt="" style={{width:'100%',height:'100%'}}/>
      </div>

      <div>{props.name}</div>

      <div></div>
    </div>
  );
}

export default SelectBox