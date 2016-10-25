var React = require('react');
var DataStore = require('../stores/DataStore.js');
var helloUtil = require('../helloUtil.js');
var BarChart = require("react-chartjs").Bar;
var DoughnutChart = require("react-chartjs").Doughnut
var names = require('../constants/CandidateNames.js');
var facebookLikes = {
  DT: 11576634,
  HC: 7246609,
  GJ: 1724163,
  JS: 633089,
  EM: 114631,
  VS: 49444,
  DC: 13314
};
var twitterFollowers = {
  DT: 12620553,
  HC: 9891782,
  GJ: 376838,
  JS: 253192,
  EM: 77941,
  VS: 14017,
  DC: 4127
};
var colors = ["red", "blue", "yellow", "green","purple", "black", "orange"];

var GraphArea = React.createClass({

  getInitialState: function(){
    return({showing: "facebook"});
  },
  componentDidMount: function(){

  },
  componentWillUnmount: function(){

  },
  getNames:function(){
    var nameArr = [];

  },
  randomColor: function(){
    var color = "#";
    var options = "123456789ABCDEF".split('');
    for (var i = 0; i < 6; i++) {
      color += options[Math.floor(Math.random() * 15)]
    }
    return color;
  },
  _onChange: function(){

  },
  twitter: function(){
    //helloUtil.twitter("login");
    this.setState({showing: "twitter"});
  },
  switchData: function(){
    if(this.state.showing === 'facebook'){
      this.setState({showing: "twitter"});
    }else{
      this.setState({showing: "facebook"});
    }
  },
  render: function(){
    var ids = Object.keys(facebookLikes);
    var labels = [];
    var dataSet = [];
    var total = 0;
    for (var i = 0; i < ids.length; i++) {
      if(this.state.showing === "facebook"){
        dataSet.push(facebookLikes[ids[i]]);
        total += facebookLikes[ids[i]];
      }else if(this.state.showing === "twitter"){
        dataSet.push(twitterFollowers[ids[i]]);
        total += twitterFollowers[ids[i]];
      }
      labels.push(names[ids[i]]);
    }
    var percentages = []
    for (var j = 0; j < dataSet.length; j++) {
      percentages.push(((dataSet[j]/total) * 100).toFixed(2));
    }

    var barData = {
            labels: labels,
            datasets: [
                {
                    label: "Facebook Likes",
                    fillColor: colors,
                    strokeColor: "rgba(200,200,220,1)",
                    pointColor: "rgba(220,200,220,1)",
                    pointStrokeColor: "#000",
                    pointHighlightFill: "#eee",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: percentages
                }
            ]
          };
    var doughData = [
          {
              value: percentages[0],
              color:colors[0],
              highlight: "#FF5A5E",
              label: labels[0]
          },
          {
              value: percentages[1],
              color: colors[1],
              highlight: "#5AD3D1",
              label: labels[1]
          },
          {
              value: percentages[2],
              color: colors[2],
              highlight: "#FFC870",
              label: labels[2]
          },
          {
              value: percentages[3],
              color: colors[3],
              highlight: "#A8B3C5",
              label: labels[3]
          },
          {
              value: percentages[4],
              color: colors[4],
              highlight: "#616774",
              label: labels[4]
          },
          {
              value: percentages[5],
              color: colors[5],
              highlight: "#616774",
              label: labels[5]
          },
          {
              value: percentages[6],
              color: colors[6],
              highlight: "#616774",
              label: labels[6]
          },

          ]
    var chartOptions = {
        fontColor: "rgb(200,200,200)",
        title: {
          display: true,
          text: "Facebook Likes",
          fontColor: "rgb(200,200,200)"
        }

    };

    var mainLabel, buttonText;
    if(this.state.showing === 'facebook'){
      mainLabel = "Facebook Likes";
      buttonText = "Show Twitter Data";
    }else if(this.state.showing === 'twitter'){
      mainLabel = "Twitter Followers";
      buttonText = "Show Facebook Likes"
    }
    return (
      <div className="container">
        <div className="inner">
          <div className="chart">
            <BarChart data={barData} options={chartOptions} height="250" width="500" style={{backgroundColor: "rgb(150,170,180)", borderRadius: "10px", boxShadow: "inset 0 0 200px rgba(0,0,0, 0.5)"}}/>
          </div>
          <div className="chartLabel">
            {mainLabel}
          </div>
          <div className="chart">
            <DoughnutChart data={doughData} height="250" width="500" />
          </div>

          <button className="btn btn-primary" onClick={this.switchData} >{buttonText}</button>


        </div>
      </div>
    );
  }
})

// style={{backgroundColor: "rgb(200,200,200)", borderRadius: "10px", boxShadow: "inset 0 0 100px rgba(0,0,0, 0.5)"}}
module.exports = GraphArea;
