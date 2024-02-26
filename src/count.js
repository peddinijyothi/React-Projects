import './count.css';
import { useState } from "react";
function Count(){
    var [counter,updatecounter]=useState(0)
    // function add(){
    //    updatecounter(counter++)
    // }
    // function minus(){
    //    updatecounter(counter--)
    // }
    return(
        <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",padding:"20px"}}>
            <div id="c">
                <h1>Counter</h1>
                <div id='a'>
                    <br/><p>count:{counter}</p><br/>
                    <button id="add" onClick={()=>{
                        updatecounter(++counter)
                        }}>add</button>&emsp;
                    <button id="minus" onClick={()=>{
                        if(counter!==0){
                            updatecounter(--counter)
                        }
                        }}>minus</button>
                </div>
            </div>
        </div>
    )
}
export default Count;