import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';


export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userReview: '',
        }

        this.submitReview = this.submitReview.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }

    resetReview() {
        this.setState({
          userReview: ''
        });
      }
    
      submitReview(event) {
          event.preventDefault();
          console.log('in submitReview')
        this.props.onFormSubmit(this.state);
        this.resetReview();
      }
    

      handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        console.log(name + " " + value);
        this.setState({
          [name]: value
        });
      }
        render() {
            return (
                <Form className="reviewForm">
                <Form.Group className="mb-3" >
                  <Form.Label></Form.Label>
                  <Form.Control as="textarea" id="userReview" name="userReview" onChange={this.handleChange} placeholder='Add a Review Here' rows={3} value={this.userReview}/>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={this.submitReview}>Submit Review</Button>
                </div>
                <input type='hidden' name='movieId' id='movieId' value={this.id}/>
                <input type='hidden' id='showMovieId' placeholder={this.id}/>
              </Form>
            )
        }
    }
