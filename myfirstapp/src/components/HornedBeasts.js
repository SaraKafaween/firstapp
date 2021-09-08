import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <>
              <h2>Title: {this.props.title}</h2>
              <img src= {this.props.imageUrl} alt={this.props.title} ></img>
              <p>{this.props.description}</p> 
            </>
        )
    }
}

export default HornedBeasts
