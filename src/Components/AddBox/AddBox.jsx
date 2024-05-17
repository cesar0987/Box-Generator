import'./AddBox.css';
function AddBox({width,
                height,
                color,
                handleColorChange,
                handleWidthChange,
                handleHeightChange,
                handleAdd,
                formRef}) {
    


    return (
        <div className="AddBox" ref={formRef}>
        <form onSubmit={handleAdd}>
        <div className='inputContainer'>
        <label htmlFor="color" id='color'>Color</label>
        <select name="color" id="color" onChange={handleColorChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
        </select>
        </div>
        <div className='inputContainer'>
        <label htmlFor="width">Width</label>
        <input type="number" placeholder="Width" name='width' value={width} onChange={handleWidthChange}/>
        </div>
        <div className='inputContainer'>
        <label htmlFor="height">Heigth</label>
        <input type="number" placeholder="Heigth" name='heigth' value={height} onChange={handleHeightChange}/>
        </div>
        <button>Add</button>
        </form>
        </div>
    );
    }

export default AddBox;