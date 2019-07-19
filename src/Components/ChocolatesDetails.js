import React, { Component } from 'react'
import {connect} from "react-redux";
import Footer from "../Components/Foooter";
class ChocolatesDetails extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <>
        {/* <div className="chocoDetailsDiv text-center">
        {this.props.chocolatesList[0] !==undefined && (<>
        <div className="card" style={{width:"250px"}}>
        <div className="card-header">{this.props.chocolatesList[this.props.match.params.id-1].name}</div>
    <img className="card-img-top" src={this.props.chocolatesList[this.props.match.params.id-1].image} alt="Card image" style={{width:"100%"}} />
    <div className="card-body">
     
      <p className="card-text brandsNameChocolates">{this.props.chocolatesList[this.props.match.params.id-1].desc}</p>
      
    </div>
    
  </div>
  </>)}
        </div> */}
        {this.props.chocolatesList[0] !==undefined && (<>
            <div className="container minContentHeight">
        <div className="brandsDetailMainDiv">
            {/* <div className="brandsDetHeader text-center">
{this.props.brandsList[this.props.match.params.id-1].name}
            </div> */}
            <div className="text-center" style={{padding:"10px"}}> 
        
              <img src={this.props.chocolatesList[this.props.location.query.index].image} style={{height:"200px",width:"200px"}}></img>
            </div>
            <div className="text-center" style={{fontFamily:"sofia",color:"darkred",fontSize:"40px",fontWeight:"bold"}}>
                {this.props.chocolatesList[this.props.location.query.index].name}
            </div>
            <div className="text-center" style={{}}><span>Description : </span>{this.props.chocolatesList[this.props.location.query.index].desc}</div>
    </div>
      </div>
        </>)}
        <Footer/>
        </>
    )
}
}

function mapStateToProps(state){
    return{
        chocolatesList:state.chocolatesReducer.chocolatesList
    }
}

export default connect(mapStateToProps)(ChocolatesDetails);

