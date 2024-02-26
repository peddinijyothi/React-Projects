import './props.css'
function Prop(p){
    return(
        <div>
            <div style={{display:"flex"}}>
                <h3>name:{p.name}</h3>
                <h3>age:{p.age}</h3>
                <h3>place:{p.place}</h3>
            </div>
        </div>
    )
}

export default Prop;