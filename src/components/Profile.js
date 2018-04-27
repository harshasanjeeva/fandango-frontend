import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card,  CardBody, CardTitle} from 'reactstrap';
import NavHeaderLogin from './Navbarmain';
import history from './History'
import { Link } from 'react-router-dom';
import {editProfile} from "../actions/loginactions";




class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "name": this.props.name,
          "email":this.props.email,
          "phone":this.props.phone,

          "userid":this.props.userid,
        
          "cardholdername":"",
          "creditcard":"",
          "cvv":"",
          "expdate":""
        };
    
        // this.toggle = this.toggle.bind(this);
      }



callworks(){

   history.push('/');
}

callEditProfile(){

  history.push('/');
}
  render() {
      console.log("userrssss",this.props.username)
    return (  <div> 
      {this.props.isLoggedIn ?
        <div>
      <NavHeaderLogin />
<br />
        <Card style={{ 
            
            width: 600,
            margin: 'auto',
            height: 750,
}}>
<img src={require('./image3.png')} alt="Card image cap" style={{ 
            
  width: 120,
  margin: 'auto',
  marginTop:'10px',
 height: 140,
  borderRadius: 50}}/>

<br/>

<FormGroup row>

<Col>
<Input type="file" name="file" id="exampleFile" onChange={(event) => {
  const payload = new FormData();

payload.append('mypic', event.target.files[0]);  
console.log("filllle==>",payload)

 this.props.upload(payload);
              }} style={{paddingLeft: "10px"}}/>
              </Col>

<FormText color="muted" style={{paddingLeft: "20px", paddingRight: "10px"}}>
  This is some placeholder block-level help text for the above input.
  It's a bit lighter and easily wraps to a new line.
</FormText>
</FormGroup>

            <hr />
            <CardBody>
            <CardTitle>User Profile Page</CardTitle>

            <Form>
                <FormGroup row>
                
                  <Label for="name">Name</Label>
                  <Col>
                  <Input type="name" name="name" id="name" value={this.state.name} placeholder="Name" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             name: event.target.value
                                    });
                                }} />
                  </Col>
                </FormGroup>


                <FormGroup row>
                
                  <Label for="email">Email</Label>
                  <Col>
                  <Input type="email" name="semail" id="semail" value={this.state.email} placeholder="Email" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             email: event.target.value
                                    });
                                }} />
                       </Col>         
                </FormGroup>



                <FormGroup row>
            
                <Label for="phone">Phone</Label>
                <Col>
                <Input type="number" name="number" id="number" value={this.state.phone} placeholder="Phone" onChange={(event) => {
                  console.log(this.state);                
                  this.setState({
                           phone: event.target.value
                                  });
                              }} />
                              </Col>
              </FormGroup>

              <div>
                     
                     
                     
              <p id="label-left">Cardholder Name</p>
            
              <Input
                      
                      type="text"
                     
                      
                      onChange={(event) => {
                          this.setState({
                              cardholdername: event.target.value
                          });
                      }}
                  />
      
                
              </div>
          
            
          
              <Row>
                  <Col>
                      <p id="label-left" >Card Number</p>
                      <Input
                          name="email"
                          type="text"
                          
                          value={this.state.creditcard}
                          onChange={(event) => {
                              this.setState({
                                  creditcard: event.target.value
                              });
                          }}
                      />
                  </Col>
                  <Col>
                  <p for="exampleEmail" id="label-left">CVV</p>
                  <Input
                     
                      type="number"
                      placeholder="Enter CVV"
                      value={this.state.cvv}
                      onChange={(event) => {
                          this.setState({
                              cvv: event.target.value
                          });
                      }}
                  />
                </Col>
                </Row>
     
           
              <p for="exampleEmail" id="label-left">Expiry date</p>
                  <input
                      className="form-control"
                      type="text"
                      placeholder="MM/YY"
                      value={this.state.expdate}
                      onChange={(event) => {
                          this.setState({
                              expdate: event.target.value
                          });
                      }}
                  />
             






            </Form>
      

                <Button color="primary" onClick={() => {
                    console.log("state on click",this.state)
                   this.props.profile(this.state);
                   // this.callworks();
                  }} >Save</Button>{' '}
                  <Button color="secondary" onClick={() => {
                    
                    
                    this.callworks();
                    
                  }}>Cancel</Button>
            
            </CardBody>
        </Card>
</div>
        : history.push('/')}
        </div>
    )
  }
}
const mapStateToProps = (user) => {
    
      return{
        name: "",
        email: "",
        userid: 1111,
        isLoggedIn: true,
        phone: "",
        about: "",
        skills: ""

      }

  }

  const mapDispatchToProps = (dispatch) => {
    console.log("dispatch",dispatch)
    return {
   //   upload : (data) => dispatch(fileUpload(data)),
      profile : (data) => dispatch(editProfile(data))
    }
  }


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));