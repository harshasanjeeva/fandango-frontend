import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {actionmovies, actiongetmovies, addHall,addUserToHall} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "../History";


class viewUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email:'',
            password:'',
            confPassword:'',
            toggle:true,
            hallUserEmail:''

        };
        this.updateUser=this.updateUser.bind(this);
    }

    updateUser=()=>{

        this.setState({
            toggle:!this.state.toggle,
            hallUserEmail:''
        });
        this.props.addUserToHall(this.state);

    }

    renderList()
    {

        var filteredUsers = this.props.hallUsers.filter(
            (user) => {
                return user.hallUserEmail.toLowerCase().indexOf(this.state.hallUserEmail.toLowerCase()) !== -1;
            }
        );
        return filteredUsers.map((hallUser) => {
            return (

                <ListGroupItem action
                               key={hallUser.hallId}  style={{backgroundColor:"black",width:"50",border:"solid white",borderWidth:"0.5 px"}}>



                    {this.state.toggle ? (<div style={{color:"silver"}}>Hall User Email : {hallUser.hallUserEmail}<br/>
                            Hall User Id: {hallUser.hallUserId}</div>) :
                        (<FormGroup style={{marginLeft:"20px"}}>
                        <Input
                            type="text"
                            id="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                });
                            }}
                        />
                        <br/>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({
                                    password: event.target.value
                                });
                            }}
                        /><br/>
                        <Button onClick={(event)=>{
                            this.updateUser();
                        }}>
                            Update
                        </Button>
                    </FormGroup>)
                    }
                    <Button onClick={(event)=>{this.setState({
                        toggle:!this.state.toggle,
                        hallUserEmail:hallUser.hallUserEmail
                    });


                    }}>
                        Edit User
                    </Button>


                </ListGroupItem>

            );
        });
    }



    render() {
        const {location}=this.props;
        return (
            <div style={{backgroundColor:"black",height:"1100px"}}>
            <Navbarmain/>
            <Container>
               
                <h3 style={{color:"orange"}}> All Users </h3>

                <ListGroup style={{backgroundColor:"black",border:"solid"}}>

                {this.renderList()}

                </ListGroup>


            </Container>

            </div> );

    }}
function mapStateToProps(state) {
    return {
        hallUsers:state.user.viewAllUsers.viewAllUsers.value
        //hallUsers:state.movieHalls
    };
}


const mapDispatchToProps =(dispatch)=> {
    return {
        addUserToHall : (data) => dispatch(addUserToHall(data))
    };
}


export default connect(mapStateToProps,mapDispatchToProps) (viewUsers);
