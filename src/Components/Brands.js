import React, { Component ,componentWillMount,useEffect} from 'react';
import {connect} from 'react-redux';
import {getBrands} from "../ActionCreators/BrandsAC";
import {Link,Redirect} from "react-router-dom";
import Footer from "../Components/Foooter";
// function Brands(props){
//     useEffect(() => {
//         return () => {
//             props.dispatch(getBrands());
//         };
//     }, []);

//     return(
//         <h1>Brands Page</h1>
//     )
// }


class Brands extends Component{
    
    componentWillMount() {
        this.props.dispatch(getBrands());
    }
   
   render(){
       
    if(!this.props.isLoggedIn){
alert("Kindly login to use the application");

return (
    <Redirect to="/login"/>
);
    }
       return(
<>
{/* <div className="container">  */}
{/* <p>{this.props.brandsList[0]}</p>  */}
<div className="container minContentHeight">
{this.props.brandsList.map(b => (
    <Link to={`/Brands/${b.id}`} key={b.id}>
{/* <div className="card">
    <div className="card-body">
    <img  src={b.logo} className="card-img-top"></img>
    </div>
    <div className="card-footer">
{b.name}
    </div>

</div> */}




<div className="brandsList" style={{border:"2px solid darkred"}}>
    <div className="ibrandsImg"><img  src={b.logo}></img></div>
    <div className="brandsName">{b.name}</div>
</div>

</Link>
)
)}

</div>
<Footer />
{/* </div> */}
{/* /* {this.props.brandsList.map(b => (
//     <div className="card" style={{width:400,display:"inline-block"}}>
// <img className="card-img-top" src={b.logo} alt="Card image" style={{width:100}} />
//     <div className="card-body" style={{backgroundColor:"yellow",color:"dark-brown",height:70}}>
//       <h4 className="card-title"  >{b.name}</h4>
//     </div>
//     </div>
// )
// )} */}

</>
    
  
    )
   }
}

function mapStateToProps(state) {
    console.log("mapStateToProps ", state.brandsReducer.brandsList);
    return {
      brandsList: state.brandsReducer.brandsList,
      isLoading: state.brandsReducer.isLoading,
      isLoggedIn:state.loginReducer.isLoggedIn
    };
  }
  
//   const connectedComponent = connect(mapStateToProps);
  
//   export default connectedComponent(Brands);
export default connect(mapStateToProps)(Brands)