import React, {Component} from 'react';
import {actionlogin} from '../actions/loginactions';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import Navbarmain from './Navbarmain'

//import history from "./history";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/');
    }


    render() {

        if (this.props.loggedin===true){
            this.navigate();
        }

        return (
            <div style={{backgroundColor:"black" ,height: "100% !important"}}>
            <Navbarmain />
            <Row>
            <Col> </Col>
            <Col>
            <Card style={{backgroundColor:"black", border: "solid",
            borderColor: "white"}}>
            <div>
                <div>
                
                </div>
                <div >
                </div>

                <div >
                    <form>
                        <div >
                        <h1 style={{color:"white"}}>FANDANGO </h1>
                            <h1>Login</h1>
                        </div>
                        <div >
                            <Input
                                
                                type="text"
                                label="Username"
                                placeholder="Enter Address"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>
<br />
                        <div className="form-group">
                            <Input
                                
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.log(this.state)}>
                                Login
                            </button>



                        </div>
                    </form>
                </div>
            </div>
            </Card>
            </Col>
            </Row>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.user.login_status,
          };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
