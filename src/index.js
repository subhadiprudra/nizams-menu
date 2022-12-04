import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import background from "./images/backg.jpg";
import icon from "./images/icon.jpg";
import StackView from 'react-stack-view';
 

import jsonData from './items.json';
const data = JSON.parse(JSON.stringify(jsonData));
class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          v: props.v,
        };
    }

    render() {
      return (
        <button className="square" onClick={()=>this.props.onClick()}>
          {this.state.v}
        </button>
      );
    }
  }

  const arr = ["DAAWAT-E-KHAAS SHURUAAT","Kathi Kabab Roll'S","Tandoori Kebab'S","Veg Gravy"]
  
  class ItemTypes extends React.Component{
    render(){
        const rows = [];
        for (let i = 0; i < arr.length; i++) {
            rows.push(<ItemType v={arr[i]} index={i}/>);
        }
        return  <div><div>{rows}</div></div>
    }
  }
  
  class ItemType extends React.Component{

   render(){

        const x = this.props.v;
        const i = this.props.index;
        const items = data[i][String(x)];

        console.log(items);

        const rows = [];
        for (let i = 0; i < items.length; i++) {
            rows.push(<div className='item'><div className='item_name'>{items[i]['name']}</div><div className='cost'> {"₹"+items[i]['cost']}</div></div>);
        }
        
        return <div className='item_type'>
            <div className='cat_name'>{x}</div>
            <div className='item_box'>{rows}</div>
           
          </div>
   }


  }
  

  class ItemTyp extends React.Component{
    render(){
      this.ref.stack.push(<ItemTypes/>);


      return <StackView ref="stack">
      
      </StackView>
    }
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<div >
    <div style={{ 
    backgroundImage: `url(${background})`,
        height:'100vh',
        width:'200vh',
        backgroundSize: 'cover',
        position:'fixed',
        backgroundRepeat: 'no-repeat',
        padding: '5%',
        zIndex:'-99'
  }}></div>
    <div style={{display : 'flex'}}>
   
    <img className= 'icon' src={icon}/>
    <div  className='title'>MENU CARD</div>
    </div>
    <ItemTypes/>
    </div>);
  