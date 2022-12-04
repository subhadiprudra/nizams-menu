import React from 'react';
import './index.css';
import icon from "./images/icon.jpg";
import {   BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import jsonData from './items.json';
const data = JSON.parse(JSON.stringify(jsonData));


const arr = ["DAAWAT-E-KHAAS SHURUAAT","MUTTON - KI - MEHEK","LAJAWAB - JALPARI","SUBJIYO - KI - MILAN","MURGH - KI - CHAHAT","DUM - E - BASMATI","ROTI - KA - KHAZANA","NIZAM' S SPECIAL KABAB ROLL'S","ACCOMPANIMENTS","NIZAM'S - KI - MITHAS","RAMJAN SPECIAL"];
  
  class ItemTypes extends React.Component{
    render(){
        const t = this.props.type;
        const rows = [];
        for (let i = 0; i < arr.length; i++) {
            rows.push(<ItemType v={arr[i]} index={i} type= {t}/>);
        }
        return  <div><div>{rows}</div><br></br><br></br><br></br></div>
    }
  }
  
  class ItemType extends React.Component{

   render(){

        const x = this.props.v;
        const i = this.props.index;
        const items = data[i][String(x)];
        const type = this.props.type;

        console.log(items);

        const rows = [];
        for (let i = 0; i < items.length; i++) {
            if(type=="ac"){
                rows.push(<div className='item'><div className='item_name'>{items[i]['name']}</div><div className='cost'> {"₹"+items[i]['ac_cost']}</div></div>);
            }else{
                rows.push(<div className='item'><div className='item_name'>{items[i]['name']}</div><div className='cost'> {"₹"+items[i]['nonac_cost']}</div></div>);
            }
        }
        
        return <div className='item_type'>
            <div className='cat_name'>{x}</div>
            <div className='item_box'>{rows}</div>
           
          </div>
   }


  }

  class ACMENU extends React.Component{
    render(){
     return (
        <div>
          <div style={{display : 'flex'}}>
            <img className= 'icon' src={icon}/>
            <div  className='title'>MENU CARD (AC)</div>
          </div>
          <ItemTypes type='ac'/>
        </div>
      );
    }
  }

  class NONACMENU extends React.Component{
    render(){
     return (
        <div>
          <div style={{display : 'flex'}}>
            <img className= 'icon' src={icon}/>
            <div  className='title'>MENU CARD (NON AC)</div>
          </div>
          <ItemTypes types='nonac'/>
          
        </div>
      );
    }
  }
  
  export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/ac' element={<ACMENU/>} />
                <Route path='/nonac' element={<NONACMENU/>} />
            </Routes>
            
        </Router>
    );
  }