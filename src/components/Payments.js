import React, { Component } from 'react';
import {connect} from "react-redux";

import history from "./History";
import {Input, Card, Row,Col, CardBody,CardHeader} from 'reactstrap';
import {Button} from 'reactstrap';
import Navbarmain from './Navbarmain'
import { Alert } from 'reactstrap';


class Payments extends Component {
    constructor(props) {
        super(props);

    this.state = {
        user_id:this.props.user_id,
        name: '',
        creditcard: '',
        cvv:'',
        expdate:'',
        amounts:0,
        freelancer:0
    };
}

    navigate() {
        history.push('/');
    }

    render() {
       if (this.props.status === 200) {
            this.navigate();
        }
        return (<div>
            <Navbarmain/>
    

                    <Card style={{ 
            
                        width: 400,
                        margin: 'auto',
                        height: 530,
                        
                                        }}>
                        <Alert color="success">
                            {this.props.message}
                        </Alert>
                  

                        <CardHeader style={{ 
                        backgroundColor: "#2c456c",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#F7F7F7"}}
                        
                        >Credit or Debit Card</CardHeader>
                        <CardBody>
                   
                        <div>
                     
                     
                     
                        <p id="label-left">Cardholder Name</p>
                      
                        <Input
                                
                                type="text"
                               
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
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
                       
                        <div>
                        <p for="exampleEmail" id="label-left">Amount</p>
                            <Input
                                
                                type="number"
                                placeholder="Amount"
                                value={this.state.amounts}
                                onChange={(event) => {
                                    this.setState({
                                        amounts: event.target.value
                                    });
                                }}
                            />
                        </div>



                        <div>
                        <p for="exampleEmail" id="label-left">FreeLancer Id</p>
                            <Input
                                
                                type="number"
                                placeholder="1234"
                               
                                onChange={(event) => {
                                    this.setState({
                                        freelancer: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <br/>
                        <div>
                        <Button color="success" onClick={() => {
                            history.push('/')
                        }}>Make Payment</Button>
                        </div>
                        </CardBody>
                    </Card>
                </div>
    
        )
    }
}

const mapStateToProps =(user)=> {
    
    return {
        user_id: 111,
        status : "False",
        message : "success"
    };
}
export default connect(mapStateToProps)(Payments);