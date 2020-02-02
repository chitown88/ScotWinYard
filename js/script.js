var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 01 February 2020 01:58 PM (central time)"};
$scope.week = {"nflWeek": "Super Bowl"};

$scope.qbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.rbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.wrStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.teStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.dstStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};

$scope.options = {
          title: {
              display: true,
              text: 'Fantasy Points'
          },
		  legend: {
			display: true,
            labels: {
                    filter: function(item, chart) {
                    // Logic to remove a particular legend item goes here
                    return !item.text.includes('95%');
        }
      }			
		  },
		  scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                padding: 20
            }
        }]
    }

          
      };

$scope.positionQB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 22.3,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 5,
    "avg_fp2": 20.86,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 16.24,
    "fanduelSalary": "$16000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Accounts for four TDs vs. Titans",
    "report": "Mahomes completed 23 of 35 pass attempts for 294 yards and three touchdowns Sunday against the Titans. He also carried eight times for 53 yards and a touchdown in the 35-24 win.",
    "analysis": "Although the Tennessee defense had been rolling, it was no match for Mahomes, who averaged a healthy 8.4 yards per attempt while completing 66 percent of his passes. He connected with Tyreek Hill for two touchdowns and added a spectacular 27-yard rushing score before capping his day off with a 60-yard strike to Sammy Watkins in the fourth quarter. Mahomes has been outstanding in two playoff games this postseason, accounting for nine total touchdowns, zero turnovers and 106 rushing yards, in addition to plenty of passing yards. Both his potential Super Bowl opponents boast strong defenses, but he seems more than capable of producing regardless of who lines up across from him.",
    "timestamp": "2020-01-19 04:55 PM",
    "week01": 27.32,
    "week02": 31.62,
    "week03": 27.86,
    "week04": 18.0,
    "week05": 18.54,
    "week06": 19.82,
    "week07": 7.24,
    "week08": "DNP",
    "week09": "DNP",
    "week10": 29.84,
    "week11": 16.18,
    "week12": "BYE",
    "week13": 19.5,
    "week14": 14.92,
    "week15": 23.7,
    "week16": 25.44,
    "week17": 12.06,
    "week18": "DNP",
    "week19": 38.14,
    "week20": 35.06,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5, 14.92, 23.7, 25.44, 12.06, 'DNP', 38.14, 35.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5, 'BYE', 21.0, 19.2, 21.3, 20.3, 21.5, 'DNP', 19.9, 22.7, 22.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.7, 16.9, 17.6, 22.8, 18.8, 15.0, 14.1, 'DNP', 'DNP', 4.3, 19.8, 'BYE', 18.9, 6.5, 7.1, 15.3, 8.5, 'DNP', 16.5, 19.8, 10.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [36.1, 23.4, 24.2, 34.0, 36.1, 31.4, 26.6, 'DNP', 'DNP', 29.9, 31.1, 'BYE', 32.6, 26.9, 34.2, 31.9, 33.4, 'DNP', 30.9, 29.2, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 17.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 16.52,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.27,
    "fanduelSalary": "$14000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Barely used in victory",
    "report": "Garoppolo completed six of eight pass attempts for 77 yards and no touchdowns or interceptions in Sunday's 37-20 NFC Championship Game win over the Packers.",
    "analysis": "Garoppolo was essentially a hand-off machine for Raheem Mostert (29 carries for 220 yards and four touchdowns) in a contest that the 49ers led big from start to finish. The 28-year-old came through on a couple of crucial third-down conversions when asked to, but coach Kyle Shanahan clearly had a run-first gameplan instilled from the get go. San Francisco may not have the luxury of running the ball as frequently as it has in its first two playoff victories in two weeks, as its upcoming opponent, the Kansas City Chiefs, was able to put up big passing numbers on a stout Tennessee defense in the AFC Championship Game. Garoppolo has responded well when asked to engage in a shootout with an opposing gunslinger this season, so there is a chance we see Jimmy G unleashed in the Super Bowl if the game script calls for it.",
    "timestamp": "2020-01-19 09:19 PM",
    "week01": 13.44,
    "week02": 23.68,
    "week03": 11.38,
    "week04": "BYE",
    "week05": 14.94,
    "week06": 13.12,
    "week07": 7.04,
    "week08": 14.0,
    "week09": 28.88,
    "week10": 13.02,
    "week11": 31.66,
    "week12": 18.22,
    "week13": 9.1,
    "week14": 29.06,
    "week15": 12.6,
    "week16": 12.42,
    "week17": 11.8,
    "week18": "DNP",
    "week19": 8.24,
    "week20": 2.98,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1, 29.06, 12.6, 12.42, 11.8, 'DNP', 8.24, 2.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7, 16.1, 9.7, 21.0, 19.2, 15.0, 14.3, 'DNP', 17.8, 14.5, 17.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.8, 3.1, 0.9, 'BYE', 9.3, 12.0, 10.6, 5.9, 5.0, 8.2, 9.1, 9.3, 8.5, 9.1, 7.6, 11.0, 9.3, 'DNP', 10.6, 9.3, 8.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 23.1, 27.4, 'BYE', 14.2, 19.0, 20.3, 22.5, 26.9, 23.3, 17.4, 19.0, 19.7, 17.3, 27.2, 27.3, 17.5, 'DNP', 19.5, 17.8, 21.8]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 8.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Pos": 2,
    "avg_fp2": 9.89,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.57,
    "fanduelSalary": "$13500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Goes off for four scores",
    "report": "Mostert rushed 29 times for 220 yards and four touchdowns while also catching two passes for six yards in Sunday's 37-20 win over Green Bay in the NFC Championship Game.",
    "analysis": "The 49ers' offensive line opened up gaping holes in the Packers' defensive front, and Mostert hit nearly every one of them for big chunks of yardage en route to a historic stat line. The 27-year-old's 220 rushing yards set a new playoff record for San Francisco and ranks second amongst all playoff rushers in the Super-Bowl era. Tevin Coleman took the reigns as the \"hot hand\" against the Vikings last weekend, but he went down to injury in the second quarter and gave Mostert an even larger share of touches in the second half. San Francisco has two weeks to heal up before taking on the Chiefs in the Super Bowl, but the latter feels like a lock to at least begin the contest as the team's primary back even if Coleman is ready to suit up.",
    "timestamp": "2020-01-19 08:08 PM",
    "week01": 4.5,
    "week02": 22.6,
    "week03": 5.9,
    "week04": "BYE",
    "week05": 3.4,
    "week06": 1.3,
    "week07": 0.0,
    "week08": "DNP",
    "week09": -0.2,
    "week10": 4.0,
    "week11": 3.7,
    "week12": 13.2,
    "week13": 22.4,
    "week14": 23.9,
    "week15": 10.4,
    "week16": 11.3,
    "week17": 19.8,
    "week18": "DNP",
    "week19": 5.8,
    "week20": 47.6,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 'DNP', -0.2, 4.0, 3.7, 13.2, 22.4, 23.9, 10.4, 11.3, 19.8, 'DNP', 5.8, 47.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 'DNP', 5.1, 3.3, 8.7, 5.7, 1.5, 3.3, 9.3, 12.2, 13.5, 'DNP', 10.6, 5.5, 8.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 4.4, 'BYE', 0.0, 0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 2.0, 4.5, 4.2, 0.0, 8.4, 1.0, 'DNP', 11.4, 5.0, 7.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 8.9, 27.6, 'BYE', 25.7, 17.9, 20.2, 'DNP', 21.0, 9.9, 10.2, 8.4, 14.3, 17.2, 15.8, 16.6, 11.6, 'DNP', 21.4, 24.1, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 8.7,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 23,
    "avg_fp2": 11.4,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.89,
    "fanduelSalary": "$14000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Scores with 89 scrimmage yards",
    "report": "Williams carried 17 times for  45 yards and a touchdown in Sunday's AFC Championship Game against the Titans. He also caught five passes for an additional 44 yards in the 35-24 win.",
    "analysis": "Williams struggled on the ground as he finished averaging just 2.6 yards per carry. He salvaged his day from a fantasy perspective with a three-yard touchdown run in the third quarter and rounded out his performance with an excellent showing as a receiver. Williams has totaled 157 scrimmage yards in two postseason performances, but he's scored four touchdowns and should be a focal point of the offense in the Super Bowl against either the 49ers or the Packers.",
    "timestamp": "2020-01-19 05:17 PM",
    "week01": 15.5,
    "week02": 7.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.3,
    "week06": 6.3,
    "week07": 1.6,
    "week08": 1.0,
    "week09": 19.8,
    "week10": 11.4,
    "week11": 11.3,
    "week12": "BYE",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 16.7,
    "week17": 29.4,
    "week18": "DNP",
    "week19": 25.8,
    "week20": 17.4,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP', 'DNP', 'DNP', 16.7, 29.4, 'DNP', 25.8, 17.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9, 'BYE', 'DNP', 'DNP', 'DNP', 12.6, 13.6, 'DNP', 14.6, 18.3, 8.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 16.0, 'DNP', 'DNP', 10.9, 6.7, 5.0, 0.9, 0.0, 1.2, 0.7, 'BYE', 'DNP', 'DNP', 'DNP', 4.7, 3.1, 'DNP', 0.6, 1.5, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 22.2, 'DNP', 'DNP', 21.5, 28.9, 19.7, 12.1, 13.6, 8.4, 19.7, 'BYE', 'DNP', 'DNP', 'DNP', 10.0, 13.7, 'DNP', 33.5, 30.3, 28.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 6.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Pos": 2,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.57,
    "fanduelSalary": "$10000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Ready for Super Bowl LIV",
    "report": "Coleman (shoulder) was a full participant in Friday's practice, Nick Wagoner of ESPN.com reports.",
    "analysis": "Coleman kicked off the week with back-to-back limited practice sessions, and having now successfully practiced without restrictions serves to shed any lingering doubts about his availability for Super Bowl LIV. Though Raheem Mostert is the favorite to lead San Francisco's backfield Sunday, Coleman will likely play a key role as the 49ers' No. 2 option. He carried the ball six times for 21 yards during the NFC Championship Game against Green Bay prior to suffering a dislocated shoulder in the second quarter.",
    "timestamp": "2020-01-31 11:50 AM",
    "week01": 6.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 15.7,
    "week06": 13.1,
    "week07": 7.1,
    "week08": 36.8,
    "week09": 4.6,
    "week10": 9.2,
    "week11": 7.7,
    "week12": 11.9,
    "week13": 2.0,
    "week14": 0.6,
    "week15": 4.0,
    "week16": 3.3,
    "week17": 2.3,
    "week18": "DNP",
    "week19": 22.5,
    "week20": 2.1,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0, 0.6, 4.0, 3.3, 2.3, 'DNP', 22.5, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3, 16.5, 14.2, 9.5, 4.5, 8.8, 6.3, 'DNP', 8.7, 13.2, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 'DNP', 'DNP', 'BYE', 4.3, 4.4, 4.0, 5.5, 6.1, 3.2, 4.0, 4.7, 9.0, 1.8, 10.4, 6.9, 1.4, 'DNP', 3.0, 0.0, 3.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 'DNP', 'DNP', 'BYE', 14.3, 10.0, 12.6, 17.0, 35.6, 19.0, 15.5, 10.2, 14.8, 9.6, 19.9, 13.7, 12.5, 'DNP', 10.2, 13.2, 9.6]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 17.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 5,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
    "fanduelSalary": "$12000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Scores twice in win over Titans",
    "report": "Hill caught five of seven targets for 67 yards and two touchdowns while adding a seven-yard carry in Sunday's 35-24 win over the Titans.",
    "analysis": "Hill didn't make many explosive plays and finished averaging a middling 13.5 yards per catch. He made up for his lack of yardage by doing damage in the red zone, including touchdown grabs of eight and 20 yards in the first half. Hill fared much better in this one than he did in his previous outing, and he'll look to make a similar impact in the Super Bowl against either the 49ers or the Packers.",
    "timestamp": "2020-01-19 05:04 PM",
    "week01": 3.1,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 22.5,
    "week07": 14.9,
    "week08": 11.1,
    "week09": 23.5,
    "week10": 27.5,
    "week11": 0.0,
    "week12": "BYE",
    "week13": 7.6,
    "week14": 10.0,
    "week15": 21.3,
    "week16": 9.7,
    "week17": 8.1,
    "week18": "DNP",
    "week19": 4.0,
    "week20": 21.9,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6, 10.0, 21.3, 9.7, 8.1, 'DNP', 4.0, 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7, 'BYE', 12.2, 15.1, 16.1, 14.8, 12.0, 'DNP', 13.2, 14.9, 17.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [15.3, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 1.0, 6.6, 12.3, 13.2, 7.8, 'BYE', 7.1, 6.1, 5.0, 10.9, 5.5, 'DNP', 10.3, 8.1, 8.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 'DNP', 'DNP', 'DNP', 'DNP', 15.2, 28.1, 29.4, 16.8, 25.6, 29.1, 'BYE', 20.1, 28.3, 24.6, 26.4, 20.1, 'DNP', 25.3, 15.7, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 13.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 10.73,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Totals 89 yards in win",
    "report": "Samuel caught two passes (three targets) for 46 yards and rushed twice for 43 yards in Sunday's NFC Championship Game victory over Green Bay.",
    "analysis": "Samuel's two-catch performance led all San Francisco receivers in a game where the team threw the ball just eight times. The dynamic rookie was able to bolster his final stat line with a couple of big end around rushes as he has done at times this season. The 49ers may be forced to actually pass the ball with regularity if the Chiefs' aerial attack is able to put up some early points in the Super Bowl, which could make Samuel a nice value play after modest receiving outputs in the team's first two playoff wins.",
    "timestamp": "2020-01-19 09:05 PM",
    "week01": 3.2,
    "week02": 17.9,
    "week03": 5.9,
    "week04": "BYE",
    "week05": 0.8,
    "week06": 3.4,
    "week07": "DNP",
    "week08": 12.3,
    "week09": 6.0,
    "week10": 15.2,
    "week11": 17.4,
    "week12": 12.0,
    "week13": 13.1,
    "week14": 13.4,
    "week15": 4.48,
    "week16": 13.9,
    "week17": 22.0,
    "week18": "DNP",
    "week19": 6.3,
    "week20": 9.9,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1, 13.4, 4.48, 13.9, 22.0, 'DNP', 6.3, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1, 4.7, 9.0, 11.4, 7.7, 8.5, 6.7, 'DNP', 13.1, 11.7, 13.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 5.4, 8.5, 'BYE', 9.7, 9.3, 'DNP', 5.6, 3.8, 1.8, 3.3, 0.0, 0.0, 3.0, 2.3, 5.7, 3.8, 'DNP', 9.2, 11.3, 9.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.2, 6.1, 9.2, 'BYE', 11.2, 10.4, 'DNP', 6.7, 18.9, 15.4, 13.1, 19.6, 22.0, 20.8, 20.4, 17.6, 18.4, 'DNP', 19.8, 21.7, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 9.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 5,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Keeping options open",
    "report": "Watkins suggested Thursday that he's considering different options with regard to the 2020 NFL season, Adam Schefter of ESPN reports.",
    "analysis": "The wideout is under contract with the Chiefs through next season and his options include playing through the deal, renegotiating it, or in Watkins' words, \"if we win (Sunday's Super Bowl), I might chill out. I might sit out a year. You just never know.\" With that in mind, the 2014 first-rounder remains poised to play in big role in his team's offense this weekend, on the heels of catching seven of his 10 targets for 114 yards and a TD in Kansas City's win over the Titans in the AFC Championship Game, back on Jan. 19.",
    "timestamp": "2020-01-30 02:59 PM",
    "week01": 42.3,
    "week02": 7.9,
    "week03": 8.9,
    "week04": 4.9,
    "week05": 0.0,
    "week06": "DNP",
    "week07": "DNP",
    "week08": 7.0,
    "week09": 9.8,
    "week10": 7.6,
    "week11": 3.6,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 7.0,
    "week15": 8.4,
    "week16": 3.8,
    "week17": 1.3,
    "week18": "DNP",
    "week19": 10.0,
    "week20": 20.9,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE', 0.0, 7.0, 8.4, 3.8, 1.3, 'DNP', 10.0, 20.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.5, 6.4, 'BYE', 7.9, 6.3, 5.9, 4.6, 7.7, 'DNP', 6.9, 7.8, 9.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 0.0, 2.4, 1.0, 4.0, 'DNP', 'DNP', 1.0, 0.0, 2.8, 0.0, 'BYE', 0.8, 3.8, 2.9, 4.2, 0.0, 'DNP', 1.8, 2.3, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 38.0, 20.4, 16.9, 22.8, 'DNP', 'DNP', 3.5, 18.9, 6.8, 16.2, 'BYE', 12.5, 19.5, 11.7, 9.6, 24.4, 'DNP', 9.3, 8.0, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 7.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Finishes with zero catches",
    "report": "Sanders finished with one target and no receptions in Sunday's 37-20 win over Green Bay in the NFC Championship Game.",
    "analysis": "Sanders played 75 percent of offensive snaps, but Jimmy Garoppolo attempted just eight passes in a game where the 49ers entered halftime leading by 27 points. It did mark a third straight game in which Sanders had fewer yards than Deebo Samuel, who caught two of three targets for 46 yards and added another 43 yards on two carries. The rookie has mostly outperformed the veteran over the past three months, but there hasn't been much of a difference in terms of target volume. Both wide receivers should see more opportunities in a Super Bowl matchup with Kansas City on Feb. 2.",
    "timestamp": "2020-01-20 06:55 AM",
    "week01": 17.1,
    "week02": 23.3,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 1.4,
    "week06": 0.5,
    "week07": 8.5,
    "week08": 10.5,
    "week09": 20.7,
    "week10": 3.4,
    "week11": 4.8,
    "week12": 2.0,
    "week13": 6.1,
    "week14": 30.6,
    "week15": 1.9,
    "week16": 7.6,
    "week17": 4.0,
    "week18": "DNP",
    "week19": 4.3,
    "week20": 0.0,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1, 30.6, 1.9, 7.6, 4.0, 'DNP', 4.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9, 14.9, 8.1, 9.1, 6.4, 8.6, 10.8, 'DNP', 12.5, 10.9, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 9.2, 9.0, 'BYE', 9.1, 5.3, 8.8, 7.6, 7.3, 11.6, 5.1, 3.9, 3.6, 6.5, 2.4, 4.5, 2.7, 'DNP', 3.1, 5.2, 6.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 19.0, 19.8, 'BYE', 14.7, 23.3, 15.3, 19.6, 21.5, 26.4, 16.4, 24.5, 15.8, 11.2, 17.8, 16.6, 12.2, 'DNP', 16.7, 13.2, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 5.18,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Catches one pass",
    "report": "Bourne caught his lone target for a six-yard gain in Sunday's 37-20 win over Green Bay in the NFC Championship Game.",
    "analysis": "Bourne played a key role the previous week but was limited to a 25 percent snap share in Sunday's blowout victory. He's locked in as the 49ers' No. 3 wide receiver ahead of a Super Bowl matchup with the Chiefs.",
    "timestamp": "2020-01-20 06:58 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 8.4,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 3.7,
    "week13": 5.7,
    "week14": 15.3,
    "week15": 1.6,
    "week16": 3.9,
    "week17": 0.0,
    "week18": "DNP",
    "week19": 11.5,
    "week20": 1.1,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 3.7, 5.7, 15.3, 1.6, 3.9, 0.0, 'DNP', 11.5, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 4.5, 5.2, 4.6, 5.9, 5.9, 'DNP', 7.3, 5.7, 5.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 0.0, 0.8, 1.9, 0.0, 2.3, 'DNP', 3.5, 3.6, 0.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.9, 'DNP', 'DNP', 'DNP', 'DNP', 9.5, 10.1, 8.6, 11.1, 7.3, 6.3, 'DNP', 11.7, 9.7, 6.6]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 14.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 5,
    "avg_fp2": 12.92,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.58,
    "fanduelSalary": "$12500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "No listing on Friday's report",
    "report": "Kelce (knee) doesn't have an injury designation for the Super Bowl on Feb. 2 against the 49ers.",
    "analysis": "During the first week of prep for the big game, the Chiefs continued to cap Kelce's reps, holding him to an LP/DNP/LP practice regimen. Still, his lack of designation Friday indicates the team isn't worried about his availability. While San Francisco's defense has held tight ends to an NFL-best 5.9 yards per target this season (including playoffs), the unit has allowed the 14th-most receptions (80) and ninth-most TDs (nine) to the position. Considering Kelce's stature, he seems like a good bet to prosper in the Super Bowl.",
    "timestamp": "2020-01-24 02:43 PM",
    "week01": 10.3,
    "week02": 20.2,
    "week03": 12.4,
    "week04": 12.92,
    "week05": 9.0,
    "week06": 7.8,
    "week07": 7.4,
    "week08": 14.3,
    "week09": 9.7,
    "week10": 17.0,
    "week11": 18.7,
    "week12": "BYE",
    "week13": 11.5,
    "week14": 14.5,
    "week15": 19.7,
    "week16": 17.4,
    "week17": 3.9,
    "week18": "DNP",
    "week19": 36.4,
    "week20": 4.5,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5, 14.5, 19.7, 17.4, 3.9, 'DNP', 36.4, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8, 'BYE', 12.4, 10.2, 12.2, 12.6, 14.0, 'DNP', 13.5, 15.6, 14.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 5.5, 1.9, 6.0, 4.6, 7.6, 2.1, 8.4, 6.7, 7.2, 7.4, 'BYE', 8.6, 9.0, 7.4, 9.4, 7.0, 'DNP', 10.4, 7.0, 4.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 23.0, 14.9, 19.2, 21.2, 14.5, 14.5, 13.2, 11.5, 14.4, 14.9, 'BYE', 14.4, 16.1, 17.3, 17.2, 15.2, 'DNP', 12.9, 13.0, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 13.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 12.86,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.01,
    "fanduelSalary": "$11500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Gutted through torn labrum",
    "report": "Kittle relayed during a recent podcast that he's played the past two seasons with a torn labrum in his right shoulder, Jeremy Bergman of NFL.com reports.",
    "analysis": "Kittle opened preseason 2018 by separating his shoulder, which sidelined him for the rest of that exhibition season. However, he's avoided being listed on the injury report with 'shoulder' next to his name in the meantime and doesn't intend to have surgery to address it. Instead, Kittle tended to a myriad of other health concerns in the 2019 campaign, namely a lingering ankle issue that sidelined him Weeks 10 and 11. Despite the compromised health, he's totaled 173 catches (on 243 targets) for 2,430 yards and 10 TDs in his last 30 regular-season games, but only a 4-35-0 line on six targets in two playoff contests to date. He'll look to reverse the recent trend in the Super Bowl against a Chiefs defense that gave up the second-most receptions (98) to tight ends in 2019.",
    "timestamp": "2020-01-27 05:21 PM",
    "week01": 9.4,
    "week02": 6.9,
    "week03": 8.7,
    "week04": "BYE",
    "week05": 17.8,
    "week06": 14.3,
    "week07": 5.3,
    "week08": 11.6,
    "week09": 16.9,
    "week10": "DNP",
    "week11": "DNP",
    "week12": 21.9,
    "week13": 2.4,
    "week14": 15.7,
    "week15": 19.9,
    "week16": 16.4,
    "week17": 12.8,
    "week18": "DNP",
    "week19": 3.1,
    "week20": 2.4,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4, 15.7, 19.9, 16.4, 12.8, 'DNP', 3.1, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 'DNP', 'DNP', 13.1, 11.0, 13.2, 16.7, 8.9, 15.1, 'DNP', 14.6, 16.4, 13.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 13.6, 'BYE', 4.8, 11.8, 8.2, 7.7, 7.0, 'DNP', 'DNP', 7.5, 8.5, 0.0, 7.8, 3.5, 5.3, 'DNP', 5.5, 9.8, 5.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.6, 15.3, 23.7, 'BYE', 19.1, 20.9, 21.8, 21.8, 20.4, 'DNP', 'DNP', 25.6, 20.5, 15.6, 25.2, 17.3, 24.5, 'DNP', 15.8, 19.2, 20.0]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.2,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.0,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.81,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.56,
    "week01": 5.0,
    "week02": 11.0,
    "week03": 2.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": 5.0,
    "week07": 18.0,
    "week08": 5.0,
    "week09": 1.0,
    "week10": 2.0,
    "week11": 11.0,
    "week12": "BYE",
    "week13": 14.0,
    "week14": 10.0,
    "week15": 11.0,
    "week16": 10.0,
    "week17": 13.0,
    "week18": "DNP",
    "week19": 6.0,
    "week20": 3.0,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0, 10.0, 11.0, 10.0, 13.0, 'DNP', 6.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8, 'BYE', 7.5, 5.1, 7.1, 7.4, 7.7, 'DNP', 6.1, 6.4, 6.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 0.0, 1.3, 2.6, 1.6, 0.0, 4.8, 3.8, 2.7, 2.4, 3.6, 'BYE', 4.2, 3.2, 0.2, 6.2, 4.9, 'DNP', 5.6, 2.6, 3.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.6, 17.1, 12.7, 8.7, 7.8, 12.3, 7.3, 10.8, 15.7, 12.1, 'BYE', 10.4, 7.8, 16.5, 10.0, 9.4, 'DNP', 8.7, 7.9, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 5.8,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.81,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.44,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 8.56,
    "week01": 15.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 19.0,
    "week06": 10.0,
    "week07": 15.0,
    "week08": 17.0,
    "week09": 3.0,
    "week10": 13.0,
    "week11": 8.0,
    "week12": 11.0,
    "week13": 4.0,
    "week14": -2.0,
    "week15": 3.0,
    "week16": 1.0,
    "week17": 1.0,
    "week18": "DNP",
    "week19": 12.0,
    "week20": 10.0,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0, -2.0, 3.0, 1.0, 1.0, 'DNP', 12.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1, 5.6, 6.5, 6.0, 7.5, 9.2, 6.9, 'DNP', 6.9, 5.8, 5.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 6.0, 6.1, 'BYE', 4.9, 2.2, 2.0, 3.9, 3.1, 7.4, 0.2, 4.0, 3.1, 4.0, 2.1, 3.9, 5.4, 'DNP', 2.6, 4.0, 4.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 9.8, 9.5, 'BYE', 8.4, 6.9, 8.4, 13.5, 12.5, 15.3, 14.7, 10.1, 9.6, 10.9, 12.4, 10.7, 10.7, 'DNP', 11.2, 9.8, 11.2]
                    }
                    
                    ]
               }
            }];


/**************** END OF PASTE ******************/
 

  //end of controller 
});




//other js


$(document).ready(function() {
  //open player modals
  $('.card').on('click', function() {
    $(this).next('.overlay')
      .addClass('showModal');
  });
});


$(document).ready(function() {
  $('.close').on('click', function() {
    $('.overlay').removeClass('showModal');
  });
});


$(document).ready(function() {
$('.week-list').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: 'linear'
});
});