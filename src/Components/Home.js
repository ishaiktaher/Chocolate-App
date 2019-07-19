import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Footer from "../Components/Foooter";

 function Home(props){
//     if(!props.isLoggedIn){
// props.history.goBack();
//     }else{
        return (<>
            <div className="container minContentHeight">
                <div className="homeMainDiv">
                    Chocolate collection is a crowd sourced portal which gives you details about world renowned
                    brands and Chocolates.
                </div>
                {!props.isLoggedIn && <>
                    <div className="text-center homeSignUpDiv">Please <u><Link to="/signup">Sign UP</Link></u> , to contribute. Happy Chocolating :-)</div>
            
                </>}
                </div>
            <Footer />
            </>
        )
    }
    
//}

function mapStateToProps(state){
    //console.log("From brands details maps "+state.brandsReducer.brandsList)
    return{
        isLoggedIn:state.loginReducer.isLoggedIn,
    }
}

export default connect(mapStateToProps)(Home);