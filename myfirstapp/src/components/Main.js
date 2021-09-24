import React from 'react';

import data from './assets/data.json';

import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
  render() {
    console.log(data);
    return (
      <main>
        {data.map((element) => {
          return (
            <HornedBeasts
              title={element.title}
              description={element.description}
              image_url={element.image_url}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;