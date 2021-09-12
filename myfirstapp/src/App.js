import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/Data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  
  
  
  
  
  
  
  render() {
    return (
      <>
        <Header />
        <Main handleOpen={this.handleOpen} />

        <BsModal handleClose={this.handleClose}
          showModal={this.state.showModal}
          name={this.state.name}
          title={this.state.title}
        />
        <Footer />

      </>

    )
  }
}

export default App