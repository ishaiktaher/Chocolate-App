import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link,Redirect} from "react-router-dom";
import { getChocolates } from '../ActionCreators/ChocolatesAC';
import Footer from "../Components/Foooter";
import "../index.css";
class ChocolatesList extends Component{
    componentWillMount(){
        this.props.dispatch(getChocolates());
    }
    render(){
        if(!this.props.isLoggedIn){
            alert("Kindly login to use the application");
            return(
                <Redirect to="/login" />
            )
        }else if(this.props.searchKey.length >0){
                const chocolatesFilter = this.props.chocolatesList.filter(chocolate => {
                return chocolate.name.toLowerCase().includes(this.props.searchKey);
                 });
             if(!chocolatesFilter.length){
                 return(
                           <>
                             <div className="container minContentHeight">
                             <div 
                                            style={{
 marginLeft: "36%", 
 marginTop: "15%", 
 fontSize: "-webkit-xxx-large",
 fontFamily:"sofia",
 marginBottom: "-11%"}}>
 No result found
 </div>
                            </div>
                          <Footer />
                            </>
                        )
            }  
            return(
                <>
        <div className="container minContentHeight"> 
        
        {
        chocolatesFilter.map((b,index) => (
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
        }else{
            return(
                <>
        <div className="container minContentHeight"> 
        {/* <p>{this.props.brandsList[0]}</p>  */}
        
        {
        this.props.chocolatesList.map((b,index) => (
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
    }
    
    function mapStateToProps(state){
        return{
            chocolatesList:state.chocolatesReducer.chocolatesList,
            isLoggedIn:state.loginReducer.isLoggedIn,
            searchKey:state.loginReducer.searchKey

        }
    }

export default connect(mapStateToProps)(ChocolatesList);