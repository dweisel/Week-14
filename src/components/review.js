import { Card } from 'react-bootstrap';
import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.userReview = props.userReview;
        this.key = props.key;
    }

    render() {
        return (
            <Card>
                <Card.Body>{this.userReview}</Card.Body>
            </Card>
        );
    }
}