import AddBox from '../AddBox/AddBox'
import GenerateBox from '../GenerateBox/GenerateBox'
import {useState,useRef} from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState('red');
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [newBox, setNewBox] = useState([{color,width,height}]);
    const formRef = useRef(null);
    const handleColorChange = (event) => {
      setColor(event.target.value);
  }

  const handleAdd = (event) => {
      event.preventDefault();
      setNewBox([
        ...newBox,
        {color:color ,width:width ,height:height}
      ])
      setColor('red');
      setWidth(0);
      setHeight(0);
  }

  const handleWidthChange = (event) => {
      setWidth(event.target.value);
  }
  
  const handleHeightChange = (event) => {
      setHeight(event.target.value);
  }

  const showAddForm = (click) =>{
    document.querySelector('.AddBox').style.display= 'flex'
  }
  const hideForm =(click) =>{
    document.querySelector('.AddBox').style.display='none'
  }

  return (
    <div className="App">
      <div className='navContainer'>
      <span>Color</span>
      <span onMouseEnter={showAddForm}>Add</span>
      </div>
      
      <AddBox formRef={formRef} width={width} height={height} color={color} handleColorChange={handleColorChange} 
      handleWidthChange={handleWidthChange} handleHeightChange={handleHeightChange} handleAdd={handleAdd}/>
     <div className='containerBox' onMouseOverCapture={hideForm}>
      {newBox.map(({color,width,height},index)=><GenerateBox key={index} width={width} height={height} color={color}/>)}
      </div>
    </div>
  );
}

export default App;
