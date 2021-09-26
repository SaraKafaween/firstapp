import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favImg: 0,
    };
  }

  handleCard = () => {
    this.props.displayModal({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url,
    });
  };

  giveHeart = () => {
    this.setState({
      favImg: this.state.favImg + 1,
    });
  };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} onClick={this.handleCard}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.giveHeart}
            alt=""
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text> {`💝` + this.state.favImg}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;
