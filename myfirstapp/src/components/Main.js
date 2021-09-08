import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'

class Main extends Component {
    render() {
        return (
            <>
              <HornedBeasts title="Unicorn" 
                            imageUrl="https://th.bing.com/th/id/R.7b1ddd0465a4818a4dc948c7ad84bef7?rik=7f%2fJnbILowLdxg&riu=http%3a%2f%2fwww.bianoti.com%2fwp-content%2fuploads%2f20150501_55440953ae93a.jpg&ehk=9cMJPPiOgCLiBsq2edI6S4NYCJkfQK%2fZbkEaqXklUJw%3d&risl=&pid=ImgRaw&r=0" 
                            description="The one horned species was called unicorn and the two-horned species was called bicornis" />  
              <HornedBeasts title="Rhinos" 
                            imageUrl="https://th.bing.com/th/id/R.f424399020dbdd3dfd7e278044adc10d?rik=G30IZ8v5HOXWKQ&pid=ImgRaw&r=0" 
                            description="The Sumatran rhino is the most threatened of all rhino species, with fewer than 80 surviving in fragmented sub-populations across Indonesia on the islands of Sumatra and Borneo."/>  
               
            </>
        )
    }
}

export default Main
