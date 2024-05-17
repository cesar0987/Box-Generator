
import "./GenerateBox.css";

function GenerateBox({width,
    height,
    color}){
    return (
        <div className="GenerateBox"style={{
            backgroundColor: `${color}`,
            width: `${width}px`,
            height: `${height}px`}}>
          
</div>
    );
    }

export default GenerateBox;