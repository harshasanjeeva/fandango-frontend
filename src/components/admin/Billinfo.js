
import { Table, Button } from 'reactstrap';
import Navbarmain from './Navbarmain';

import {actionhome} from "../../actions/loginactions";
import {
    NavItem,
    NavLink,
} from 'reactstrap';
import React, {Component} from 'react';
import {actionbook} from '../../actions/loginactions';


import {connect} from 'react-redux';


import { withRouter } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "video-react/dist/video-react.css";


class Billinfo extends Component {


    render() {
        return (
            <div style={{backgroundColor:"black"}} >

                <Navbarmain/>
                <strong><h4 style={{color:"silver"}}>Billing Details</h4></strong>
                <Table>
                    <thead>
                    <tr>
                        <th style={{color:"silver"}}>User Name</th>
                        <th style={{color:"silver"}}>Movie Name</th>
                        <th style={{color:"silver"}}>Timings</th>
                        <th style={{color:"silver"}}>Theatre name</th>
                        <th style={{color:"silver"}}>Total tickets</th>
                        <th style={{color:"silver"}}>Total amount</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.bills.map(row => {
                        return(
                            <tr>
                                <td key={row.name} style={{color:"silver"}}>{row.name}</td>
                                <td key={row.movieName} style={{color:"silver"}}>{row.movieName}</td>
                                <td key={row.timings} style={{color:"silver"}}>{row.timings}</td>
                                <td key={row.theatrename} style={{color:"silver"}}>{row.theatrename}</td>
                                <td key={row.total_tickets} style={{color:"silver"}}>{row.total_tickets}</td>
                                <td key={row.total_amount} style={{color:"silver"}}>{row.total_amount}</td>
                            </tr>
                        )
                    })
                    };
                    </tbody>
                </Table>
                <NavItem>
                    <NavLink href="/myproject"><Button color="warning">Return to Home</Button></NavLink>
                </NavItem>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        //allproj: (data) => dispatch(actionhome(data)),
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log("in billinfo component:",stores.user.bill.bill_info);
    return {
        bills :stores.user.bill.bill_info
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Billinfo);