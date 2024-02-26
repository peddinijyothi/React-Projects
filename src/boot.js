import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./boot.css";
import Govindha from "./govindha.jpg";
import Ram from "./ram.jpg";
import Siva from "./siva.jpg";
import Taj from "./taj.jpg";
function Grid(){
    return(
            <div>
                <form>
                  <h1>I am Trying Grid for display with images content</h1>
                  <div className="row">
                     <div className="col-sm-3" id="gov">
                        <img src={Govindha} alt="govindha" height="150" width="200" alaign-items="center" />
                        <p>The city is home to the important Hindu shrine of Tirumala Venkateshwara Temple and other historic temples. <br/>It is located at a distance of 150 km from Chennai, 250 km from Bangalore, 406 km from Amaravati.</p>
                     </div>
                     <div className="col-sm-3" id="ram" >
                        <img src={Ram} alt="Ram" height="150" width="200"/>
                        <p>Jain Shrines in Ayodhya
                            It is not just the birthplace of Lord Ram but is also a place of high importance for the Jains,<br/> with five Jain Tirthankars believed to be born here. Every year, followers reach this town in large numbers to pay obeisance 
                            to these great saints and take part in the special occasions.</p>  
                     </div>
                     <div className="col-sm-3" id="siv">
                     <img src={Siva} alt="Siva"height="150" width="200" />  
                     <p>The town is famous for the Mallikarjuna Jyotirlinga Temple and is one of the holy pilgrimage sites for the Shaivism and Shaktism sects of Hinduism. <br/>The town is classified as both a Jyotirlinga and a Shakti Pitha.
                         As of 2001 India census, Srisailam had a population of 23,257.</p>
                     </div>
                     <div className="col-sm-3" id="taj">
                     <img src={Taj} alt="govindha" height="150" width="200"/>  
                     <p>It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with 
                        construction starting in 1632 AD and completed in 1648 AD, <br/>with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD
                     </p>
                     </div>
                     <div className="row">
                        <div style={{margin:"10px",padding:"10px",height:'500px',width:'450px' ,border:"solid 1px"}}>
                            <div className="card" style={{width:'300px',height:'150px'}}>
                                <img className="card-img-top" src={Ram} alt="Card" height="150" width="300"/>
                                <div className="card-body">
                                    <h5 className="card-title">Ayodhya</h5>
                                    <p className="card-text">Jain Shrines in Ayodhya
                            It is not just the birthplace of Lord Ram but is also a place of high importance for the Jains, with five Jain Tirthankars believed to be born here. Every year, followers reach this town in large numbers to pay obeisance 
                            to these great saints and take part in the special occasions.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                 </div>
                         </div>
                            </div>
                            <div style={{margin:"10px",padding:"10px",height:'500px',width:'450px' ,border:"solid 1px",items:"center"}}>
                                <div className="card" style={{width:'300px',height:'150px'}}>
                                <img className="card-img-top" src={Govindha} alt="Card" height="150" width="300"/>
                                <div className="card-body">
                                    <h5 className="card-title">Tirupathi</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                        </div>
                    </div>
                  </div>
                </form>
            </div>
    );
}

export default Grid;