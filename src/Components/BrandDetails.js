import React, { Component } from 'react';
import {connect} from "react-redux";
import {getBrands,getBrandsSuccess,getBrandsFailure} from "../ActionCreators/BrandsAC";
import {getChocolates} from "../ActionCreators/ChocolatesAC";
import Footer from "../Components/Foooter";
import {Link} from "react-router-dom";
class BrandDetails extends Component{

    componentWillMount(){
    this.props.dispatch(getBrands());
    this.props.dispatch(getChocolates());
}
    
render(){
  var particularBrandChocs = this.props.chocolatesList.filter(c=>{
        return c.brandId === parseInt(this.props.match.params.id)
  })
     return (
    <>
    {this.props.brandsList[0] !==undefined && (
    <div className="container minContentHeight">
        <div className="brandsDetailMainDiv">
        <div className="text-center" style={{fontFamily:"sofia",color:"darkred",fontSize:"40px",fontWeight:"bold"}}>
                {this.props.brandsList[this.props.match.params.id-1].name}
            </div>
            <div className="text-center" style={{padding:"10px"}}> 
              <img src={this.props.brandsList[this.props.match.params.id-1].logo}></img>
            </div>
            <div>
              <span>Desc: </span>
              {this.props.brandsList[this.props.match.params.id-1].desc}
            </div>
         </div>
    </div> 
    )}

<div className="container">
  {/* <div className="text-center">
      <span>List of </span><b>{this.props.brandsList[this.props.match.params.id-1].name}</b>
  </div> */}
    {particularBrandChocs.map((b,index) => (
        <Link to={{ pathname: `/chocolates/${b.id}`, query: { index } }} key={index}>
    <div className="brandsList " style={{border:"2px solid darkred"}}>
        <div className="ibrandsImg"><img  src={b.image}></img></div>
        <div className="brandsName">
    {b.name}
        </div>
    </div>
    </Link>
    
    )
    )}
  </div>
  
    <Footer />
    </>
    
)
}
}

function mapStateToProps(state) {
  
    return {
      brandsList: state.brandsReducer.brandsList,
      isLoading: state.brandsReducer.isLoading,
      chocolatesList:state.chocolatesReducer.chocolatesList
    };
  }

export default connect(mapStateToProps)(BrandDetails);