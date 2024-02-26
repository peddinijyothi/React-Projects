import "./registartion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Reg(){
    return(
        <div class="box">
            <form>
                <h1>Register</h1><br/>
                <input type="text" class="form-control" placeholder="user name"></input><br/>
                <input type="text" class="form-control" placeholder="email"></input><br/>
                <input type="text" class="form-control" placeholder="password"></input><br/>
                <label for="dropdown">select option</label>
                <div className="form-group">
                    <div className="custom-select-wraper">
                        <select id="dropdown" name="dropdown" className="form-control">
                            <option value="cse">cse</option>
                            <option value="ece">ece</option>
                            <option value="civil">civil</option>
                        </select>
                    </div>
                </div>
                <label>Gender</label><br/>
                <input type="radio" name="gender" value="male" />Male &emsp;
                <input type="radio" name="gender" value="Female" />Female <br/>
                <input type="checkbox" />Accepted terms and conditions<br/>
                <button type="button" className="btn btn-warning p-3">submit</button>
            </form>
        </div>
    )
}
export default Reg;
