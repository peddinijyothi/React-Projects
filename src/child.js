import "./project.css";
function Child(props){
    var x=props.name;
    var y=props.course;
    var a=props.age;
    const f=JSON.stringify(props);
    return(
        <>
            <div class="box">
              <h2>Welcome to {x}</h2>
              <h4>Course: {y}</h4>
              <h3>age: {a}</h3>
              <pre>{f}</pre>
            </div>
        </>
    )
}
export default Child;