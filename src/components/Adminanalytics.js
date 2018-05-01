import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { withRouter } from 'react-router-dom';
import Homemain from './Homemain'
import Navbarheader from './admin/Navbarmain';
import {Link} from 'react-router-dom';
import Footer from './Footer'
import {Row,Col} from 'reactstrap'
import {actiongetmovies, actionmovies} from "../actions/loginactions";
import {connect} from "react-redux";
Charts(FusionCharts);



class Adminanalytics extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }



  render() {
    const myDataSource = {
        chart: {
        caption: 'Harry\'s SuperMart',
        subCaption: 'Top 5 stores in last month by revenue',
        numberPrefix: '$',
        theme: 'carbon',
        },
        data: [
        {
            label: 'Bakersfield Central',
            value: '880000',
        },
        {
            label: 'Garden Groove harbour',
            value: '730000',
        },
        {
            label: 'Los Angeles Topanga',
            value: '590000',
        },
        {
            label: 'Compton-Rancho Dom',
            value: '520000',
        },
        {
            label: 'Daly City Serramonte',
            value: '330000',
        },
        ],
    };
 
var LineChart = require("react-chartjs").Line;   
var BarChart = require("react-chartjs").Bar;
var DoughnutChart = require("react-chartjs").Doughnut;

var incomingdatalabel = ["Movies Page", "Movies details", "Number of Tickets", "Payments", "Tickets", "Profile", "Reviews"];
var incommingclicksnum = [65, 59, 80, 81, 56, 55,4]

var user1 = [this.props.Movies_clicks[0], this.props.Movies_details_clicks[0],this.props.Nooftickets_clicks[0],this.props.Payments_clicks[0], this.props.Payments_clicks[0], this.props.Tickets_clicks[0], this.props.Tickets_clicks[0], this.props.Profile_users[0],this.props.Profile_clicks[0],this.props.Reviews_users[0],this.props.Reviews_clicks[0]]
      var user2 = [this.props.Movies_clicks[1], this.props.Movies_details_clicks[1],this.props.Nooftickets_clicks[1],this.props.Payments_clicks[1], this.props.Payments_clicks[1], this.props.Tickets_clicks[0], this.props.Tickets_clicks[1], this.props.Profile_users[1],this.props.Profile_clicks[1],this.props.Reviews_users[1],this.props.Reviews_clicks[1]]
      var user3 = [this.props.Movies_clicks[2], this.props.Movies_details_clicks[2],this.props.Nooftickets_clicks[2],this.props.Payments_clicks[2], this.props.Payments_clicks[2], this.props.Tickets_clicks[2], this.props.Tickets_clicks[2], this.props.Profile_users[2],this.props.Profile_clicks[2],this.props.Reviews_users[2],this.props.Reviews_clicks[2]]
     var user4 = [this.props.Movies_clicks[3], this.props.Movies_details_clicks[3],this.props.Nooftickets_clicks[3],this.props.Payments_clicks[3], this.props.Payments_clicks[3], this.props.Tickets_clicks[3], this.props.Tickets_clicks[3], this.props.Profile_users[3],this.props.Profile_clicks[3],this.props.Reviews_users[3],this.props.Reviews_clicks[3]]

var movieRatinglabel = ["Avengers", "Kings", "Avengers", "I Feel Pretty", "Disobedience", "Starwars", "Avatar"]
var movieRatingdata= [6.5, 5.9, 8.0, 8.1, 5.6, 5.5,9]


var data = [
	{
		value: this.props.clicks_list[0],
		color:"#F7464A",
		highlight: "#FF5A5E",
		//label: this.props.clicks_list[0]
        label:this.props.movies_list[0]
    },
	{
		value: this.props.clicks_list[1],
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: this.props.movies_list[1],
	},
	{
		value: this.props.clicks_list[2],
		color: "#FDB45C",
		highlight: "#FFC870",
		label: this.props.movies_list[2]
	},

    {
        value: this.props.clicks_list[3],
        color: "#808000",
        highlight: "#808000",
        label: this.props.movies_list[3]
    },

    {
        value: this.props.clicks_list[4],
        color: "#008080",
        highlight: "#008080",
        label: this.props.movies_list[4]
    },

    {
        value: this.props.clicks_list[5],
        color: "#00FF00",
        highlight: "#00FF00",
        label: this.props.movies_list[5]
    }
]

    var chartDatas= {
        labels: incomingdatalabel,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "#20c997",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: incommingclicksnum
            }
        ]
    };

   var movieRating ={
    labels: movieRatinglabel,
    datasets: [
        {
            label: "My First dataset",
			fillColor: "#0077BE",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
            data: movieRatingdata
        }
    ]
};
   
var PolarAreaChart = require("react-chartjs").PolarArea;

var Polar = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
	}

];
    


    var chartData= {
        labels: incomingdatalabel,
        datasets: [
            {
                label: "User1",
                fillColor: "rgb(244, 65, 103,0.2)",
                strokeColor: "rgb(244, 65, 103,1)",
                pointColor: "rgb(244, 65, 103,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: user1
            },
            {
                label: "User2",
                fillColor: "rgb(65, 244, 152,0.2)",
                strokeColor: "rgb(65, 244, 152,1)",
                pointColor: "rgb(65, 244, 152,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user2
            },
            {
                label: "User3",
                fillColor: "rgb(244, 158, 66,0.2)",
                strokeColor: "rgb(244, 158, 66,1)",
                pointColor: "rgb(244, 158, 66,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user3
            },
            {
                label: "User4",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user4
            }
        ]
    };
    return (
      <div style={{backgroundColor:"black"}}>
  
      <div >



       <Navbarheader />
       <Row>
<Col>
      
       <h5 style={{color:"silver"}}>Hall Revenue</h5>
       <PolarAreaChart data={Polar}  width="300" height="200"/>

       </Col>

       <Col>
       <h5 style={{color:"silver"}}>Ratings for Movies</h5>
       <BarChart data={movieRating} width="300" height="250" style={{float:"left"}}/>
       </Col>



       <Col>
      
       <h5 style={{color:"silver"}}>Movie Clicks Graph</h5>
       <DoughnutChart data={data}  width="300" height="200"/>
       </Col>



       </Row>
       <br />


       <Row>
       <Col>
       <h4 style={{color:"silver"}}>Total clicks per Component</h4>
       <BarChart data={chartDatas} width="700" height="250" style={{float:"left"}}/>
        <strong><h4 style={{color:"Red"}}>Reviews is the less seen area</h4></strong>
      
       </Col>

       <Col>
       <h4 style={{color:"silver",float:"left"}}>Trace diagram for tracking users:</h4>
       <LineChart data={chartData} width="700" height="250"/>
       </Col>


       </Row >
       <br />


      <Footer />


      </div>


  
      </div>
    );


  }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionmovies(data)),
        getmovies : (data) => dispatch(actiongetmovies(data)),

    };
}


function mapStateToProps(state) {
    console.log(state);

    console.log("Movies_users in adminanalytics:",state.user.graph3.Movies_users);
    console.log("Movies_clicks in admindash:",state.user.graph3.Movies_clicks);
    console.log("Movies_details_users in admindash:",state.user.graph3.Movies_details_users);
    console.log("Movies_details_clicks in admindash:",state.user.graph3.Movies_details_clicks);
    console.log("Nooftickets_users in adminanalytics:",state.user.graph3.Nooftickets_users);
    console.log("Nooftickets_clicks in admindash:",state.user.graph3.Nooftickets_clicks);
    console.log("Payments_users in admindash:",state.user.graph3.Payments_users);
    console.log("Payments_clicks in admindash:",state.user.graph3.Payments_clicks);
    console.log("Tickets_users in admindash:",state.user.graph3.Tickets_users);
    console.log("Tickets_clicks in adminanalytics:",state.user.graph3.Tickets_clicks);
    console.log("Profile_users in admindash:",state.user.graph3.Profile_users);
    console.log("Profile_clicks in admindash:",state.user.graph3.Profile_clicks);
    console.log("Reviews_users in admindash:",state.user.graph3.Reviews_users);
    console.log("Reviews_clicks in admindash:",state.user.graph3.Reviews_clicks);
    console.log("movies_list in admindash:",state.user.graph4.movies_list);
    console.log("clicks_list in admindash:",state.user.graph4.clicks_list);

    return {
        Movies_users:state.user.graph3.Movies_users,
        Movies_clicks:state.user.graph3.Movies_clicks,
        Movies_details_users:state.user.graph3.Movies_details_users,
        Movies_details_clicks:state.user.graph3.Movies_details_clicks,
        Nooftickets_users:state.user.graph3.Nooftickets_users,
        Nooftickets_clicks:state.user.graph3.Nooftickets_clicks,
        Payments_users:state.user.graph3.Payments_users,
        Payments_clicks:state.user.graph3.Payments_clicks,
        Tickets_users:state.user.graph3.Tickets_users,
        Tickets_clicks:state.user.graph3.Tickets_clicks,
        Profile_users:state.user.graph3.Profile_users,
        Profile_clicks:state.user.graph3.Profile_clicks,
        Reviews_users:state.user.graph3.Reviews_users,
        Reviews_clicks:state.user.graph3.Reviews_clicks,
        movies_list:state.user.graph4.movies_list,
        clicks_list:state.user.graph4.clicks_list,



    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Adminanalytics);


