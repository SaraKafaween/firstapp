import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            LikesNum: 0
        }

    }
    LikesCounter = () => {
        this.setState = {
            LikesNum: this.state.LikesNum + 1
        }
    }
    render() {
        return (
            <><Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.LikesCounter} src={this.props.imageUrl} alt={this.props.title} variant="top" />
                <Card.Body>
                    <Card.Title>Title: {this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <p>Likes: {this.state.LikesNum}</p>
                    {/* <img src="https://th.bing.com/th/id/R.da1a1de0bc1bf700ebcd24cb1557293a?rik=0AlkHfB16ZN47A&pid=ImgRaw&r=0" alt="smallhear"></img> */}

                </Card.Body>
            </Card>
            </Col></>
        )
    }
}

export default HornedBeasts
