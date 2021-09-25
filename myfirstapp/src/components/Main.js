
import React from 'react';

import HornedBeasts from './HornedBeasts';
import { Col } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    console.log(data);
    return (
      <main>
        {this.props.Data.map((element) => {
          return (
            <Col>
              <HornedBeasts
                title={element.title}
                description={element.description}
                image_url={element.image_url}
                dataHandling={this.props.showModel}
                displayModal={this.props.displayModal}
              />
            </Col>
          );
        })}
      </main>
    );
  }
}

export default Main;