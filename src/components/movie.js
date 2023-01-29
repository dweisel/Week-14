import React, { useState } from "react";
import Stars from "./stars.js";
import ReviewList from './review-list';
import { Card } from 'react-bootstrap';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
            rating: props.rating,
        };
    }
    render() {
        return(

            <Card style={{ width: '28rem' }}>
            <Card.Header>{this.state.title}</Card.Header>

            {/* Cannot get this to change to use the image of Up */}
            <Card.Img variant="top" src={this.state.image} />
            <Card.Body>
              <div className="cardBody">
                {this.state.synopsis}
                <br />
                {this.state.rating}
              </div> 
                <br />
              <div>
                    <h4> Reviews: </h4>    
              </div> 
                <br />
              <div>
                  <ReviewList/>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Stars />
            </Card.Footer>
          </Card>
        )
        }
    }
