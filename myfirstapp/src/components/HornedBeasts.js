import React from 'react';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favImg: 0,
    };
  }
  giveHeart = () => {
    this.setState({
      favImg: this.state.favImg + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img
          onClick={this.giveHeart}
          src={this.props.image_url}
          alt=""
          title={this.props.title}
        />
        <br />
        <p>💟 {this.state.favImg}</p>
      </div>
    );
  }
}

export default HornedBeasts;