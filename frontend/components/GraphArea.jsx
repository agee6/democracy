var React = require('react');
var DataStore = require('../stores/DataStore.js');
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
var colors = ["red", "blue", "yellow", "purple", "green", "black", "orange"];



var GraphArea = React.createClass({

  getInitialState: function(){
    return({});
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
  render: function(){
    var ids = Object.keys(facebookLikes);
    var labels = [];
    var dataSet = [];
    var total = 0;
    for (var i = 0; i < ids.length; i++) {
      dataSet.push(facebookLikes[ids[i]]);
      total += facebookLikes[ids[i]];
      labels.push(names[ids[i]]);
    }

    var dataChart = {
            labels: labels,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: colors,
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: dataSet
                }
            ]
          };
    var doughData = [
          {
              value: Math.floor((dataSet[0]/total) * 100),
              color:colors[0],
              highlight: "#FF5A5E",
              label: labels[0]
          },
          {
              value: Math.floor((dataSet[1]/total) * 100),
              color: colors[1],
              highlight: "#5AD3D1",
              label: labels[1]
          },
          {
              value: Math.floor(dataSet[2]/total * 100),
              color: colors[2],
              highlight: "#FFC870",
              label: labels[2]
          },
          {
              value: Math.floor(dataSet[3]/total * 100),
              color: colors[3],
              highlight: "#A8B3C5",
              label: labels[3]
          },
          {
              value: Math.floor(dataSet[4]/total * 100),
              color: colors[4],
              highlight: "#616774",
              label: labels[4]
          },
          {
              value: Math.floor(dataSet[5]/total * 100),
              color: colors[5],
              highlight: "#616774",
              label: labels[5]
          },
          {
              value: Math.floor(dataSet[6]/total * 100),
              color: colors[6],
              highlight: "#616774",
              label: labels[6]
          },

          ]
    var chartOptions = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                type: "linear",
                ticks: {
                  max: dataSet[0]

                }
            }]
        }
    }
    var chartData = {

              labels: labels,
              datasets: [
                  {
                      data: dataSet,
                      backgroundColor: colors,
                      hoverBackgroundColor: colors,
                      label: "Facebook Likes"
                  }]
                };



    return (
      <div className="container">
        <div className="inner">
          <div className="chart">
            <BarChart data={dataChart} options={chartOptions} height="250" width="500"  />
          </div>
          <div className="chartLabel">
            FaceeBook Likes
          </div>
          <div className="chart">
            <DoughnutChart data={doughData} height="250" width="500" />
          </div>


        </div>
      </div>
    );
  }
})
module.exports = GraphArea;
