import React, { Component } from 'react'

class HornedBeasts extends Component {
   constructor(props){
    super(props);   
    
    this.state={
        LikesNum:0
    }
   
}
   LikesCounter=()=> {
       this.setState={
       LikesNum: this.state.LikesNum+1
   }}
   render() {
        return (
            <>
              <h2>Title: {this.props.title}</h2>
              <img onClick={this.LikesCounter} src= {this.props.imageUrl} alt={this.props.title} ></img>
              <p>{this.props.description}</p> 
              <p>Likes : {this.state.LikesNum}</p>
              <img src="https://th.bing.com/th/id/R.da1a1de0bc1bf700ebcd24cb1557293a?rik=0AlkHfB16ZN47A&pid=ImgRaw&r=0" alt="smallhear"></img>
            </>
        )
    }
}

export default HornedBeasts
