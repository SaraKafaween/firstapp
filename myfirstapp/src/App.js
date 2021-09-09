import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

class  App extends Component{
  render(){
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>
      
    </>
    
    )
  }
}

export default App