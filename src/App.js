// import Count from './count';
// import Prop from './props';
// import Reg from './registration'
// import Grid from './boot'
import Chaild from "./child"
function App(){
  return(
    <div>
      {/* <Count/> */}
      {/* <Prop name="jyothi" age="21" place="sklm"/>
      <br/><Prop name="hema" age="21" place="vizag"/> */}
      {/* <Reg/> */}
      {/* <h1>Background color changer</h1>
      <input type='color' onChange={
        (e)=>{
          document.body.style.background=e.target.value;
        }

      }/> */}
      {/* <Grid/> */}
      {/* {console.log(m)} */}
      <Chaild name={"jyothi"} course={"devops"} age="21"/><br/>
      <Chaild name={"devi"} course={"diet"} age="24"/>
    </div>
  )
}

export default App