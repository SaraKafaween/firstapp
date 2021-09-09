import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import Data from './Data'

class Main extends Component {
    render() { 
        return (
            Data.map(item => {
            return(        
            
              <HornedBeasts title= {item.title} 
                            imageUrl={item.image_url} 
                            description={item.description}
                             />  
            
            )}))
        
    }
}

export default Main
