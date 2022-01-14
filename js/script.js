var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Friday, 14 January 2022 01:23 PM (central time)"};
$scope.week = {"nflWeek": "Wild Card Round"};
$scope.playoffLogo = {"src": "https://seeklogo.com/images/N/nfl-afc-wild-card-logo-83F96E9A31-seeklogo.com.png"}

$scope.qbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.rbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.wrStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.teStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.kStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
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
                    return !item.text.includes('68%');
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 21.2,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 10,
    "avg_fp2": 24.61,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.96,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 17.2,
    "week02": 17.66,
    "week03": 37.22,
    "week04": 21.02,
    "week05": 36.5,
    "week06": 29.72,
    "week07": "BYE",
    "week08": 29.46,
    "week09": 11.56,
    "week10": 21.94,
    "week11": 18.16,
    "week12": 28.7,
    "week13": 11.7,
    "week14": 36.22,
    "week15": 21.8,
    "week16": 30.96,
    "week17": 23.9,
    "week18": 23.86,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.2, 17.66, 37.22, 21.02, 36.5, 29.72, 'BYE', 29.46, 11.56, 21.94, 18.16, 28.7, 11.7, 36.22, 21.8, 30.96, 23.9, 23.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 16.4, 20.0, 19.4, 23.0, 24.1, 'BYE', 25.9, 25.6, 22.0, 24.4, 21.0, 18.7, 21.1, 18.9, 14.5, 22.9, 18.2, 21.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 11.4, 20.9, 24.1, 27.7, 22.1, 'BYE', 22.7, 28.0, 25.1, 17.8, 22.6, 12.9, 7.4, 14.5, 16.1, 17.9, 22.1, 15.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 30.3, 24.4, 33.3, 34.3, 28.8, 'BYE', 29.7, 35.2, 32.7, 29.4, 30.8, 25.0, 18.2, 21.9, 22.4, 28.3, 31.0, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 20.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 19.92,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 17.77,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dak Prescott completed 21-of-27 passes for 295 yards and five touchdowns in the Cowboys' Week 18 win over the Eagles.\n",
    "report": "",
    "analysis": "Prescott threw four of his five touchdowns in the first half. It\u2019s the second time in the last three weeks Prescott needed only a half to clear the mark, throwing for 330 yards and four TDs in Dallas\u2019 Week 16 blowout of Washington. Ankle surgery ended Prescott\u2019s 2020 season after five games and a shoulder injury put his Week 1 status in question, but his return couldn\u2019t have went better for the Cowboys, completing 69% of his passes for 4,449 yards and a 37:10 TD/INT ratio while clinching the NFC East and placing himself as the CPOY favorite. With the win, Dallas has a chance at a first-round bye if the Rams, Cardinals, and Bucs lose, but are more likely to end up as the NFC\u2019s No. 4 seed.\n",
    "timestamp": "2022-01-09 06:50 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 28.42,
    "week02": 8.48,
    "week03": 20.12,
    "week04": 27.02,
    "week05": 21.68,
    "week06": 27.8,
    "week07": "BYE",
    "week08": "DNP",
    "week09": 19.88,
    "week10": 26.34,
    "week11": 4.64,
    "week12": 25.3,
    "week13": 12.22,
    "week14": 11.94,
    "week15": 10.58,
    "week16": 31.3,
    "week17": 23.04,
    "week18": 31.8,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.42, 8.48, 20.12, 27.02, 21.68, 27.8, 'BYE', 'DNP', 19.88, 26.34, 4.64, 25.3, 12.22, 11.94, 10.58, 31.3, 23.04, 31.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 20.3, 17.2, 18.3, 24.0, 19.1, 'BYE', 'DNP', 22.0, 24.0, 21.4, 21.0, 21.0, 19.6, 17.1, 21.8, 19.7, 15.1, 20.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.9, 17.8, 12.4, 18.7, 11.7, 'BYE', 'DNP', 18.1, 20.9, 24.2, 16.8, 13.9, 16.0, 20.0, 18.8, 14.9, 12.6, 20.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.6, 28.7, 27.3, 23.6, 26.7, 22.6, 'BYE', 'DNP', 26.5, 28.0, 29.7, 29.1, 24.1, 22.8, 25.9, 25.3, 24.8, 18.8, 30.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 20.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 20.45,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.85,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Matthew Stafford is listed on the Wild Card Round injury report with a toe issue but is practicing in full.\u00a0\n",
    "report": "",
    "analysis": "It's a new issue for Stafford but evidently not one that is costing him any practice reps. Stafford has had a knack for picking up nicks and bruises the past few seasons, but he didn't miss any games in 2021. Stafford lit up the Cardinals in Week 14 but had an awful home start in Week 4 against the Birds. Much has changed since then, of course.\u00a0\n",
    "timestamp": "2022-01-13 11:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.34,
    "week02": 18.22,
    "week03": 29.52,
    "week04": 20.3,
    "week05": 17.5,
    "week06": 26.24,
    "week07": 27.16,
    "week08": 24.2,
    "week09": 15.06,
    "week10": 11.82,
    "week11": "BYE",
    "week12": 22.98,
    "week13": 24.0,
    "week14": 23.48,
    "week15": 16.46,
    "week16": 9.68,
    "week17": 16.26,
    "week18": 19.52,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24, 27.16, 24.2, 15.06, 11.82, 'BYE', 22.98, 24.0, 23.48, 16.46, 9.68, 16.26, 19.52]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2, 22.1, 23.9, 20.6, 'BYE', 16.9, 21.1, 17.8, 22.3, 20.0, 20.4, 19.5, 20.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8, 16.1, 16.8, 13.5, 'BYE', 20.4, 16.3, 14.0, 18.5, 19.3, 16.1, 13.1, 16.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1, 26.4, 25.4, 25.9, 'BYE', 28.4, 25.8, 22.0, 25.2, 28.8, 26.8, 23.0, 26.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 19.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 2,
    "avg_fp2": 21.78,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 17.66,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Patrick Mahomes completed 27-of-44 passes for 270 yards and two touchdowns in Kansas City's 28-24 win over Denver, adding 54 rushing yards on nine carries.\u00a0\n",
    "report": "",
    "analysis": "The Broncos barely blitzed Mahomes and asked him to keep taking the short gains, which he mostly did successfully despite throwing to the second-tier members of Kansas City's receiving corps. Mahomes was 3-of-14 for 34 yards when throwing more than 10 yards downfield in this one. He'll be a QB1 -- but probably not the\u00a0QB1 -- in fantasy playoff formats as the Chiefs await the news on if they'll be the No. 1 or No. 2 seed.\u00a0\n",
    "timestamp": "2022-01-09 12:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.28,
    "week02": 25.02,
    "week03": 24.9,
    "week04": 32.72,
    "week05": 20.98,
    "week06": 24.98,
    "week07": 8.74,
    "week08": 15.0,
    "week09": 10.44,
    "week10": 36.24,
    "week11": 8.5,
    "week12": "BYE",
    "week13": 13.56,
    "week14": 20.32,
    "week15": 30.6,
    "week16": 22.32,
    "week17": 20.86,
    "week18": 26.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.28, 25.02, 24.9, 32.72, 20.98, 24.98, 8.74, 15.0, 10.44, 36.24, 8.5, 'BYE', 13.56, 20.32, 30.6, 22.32, 20.86, 26.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2, 24.1, 22.6, 21.5, 19.6, 22.2, 'BYE', 18.6, 18.8, 19.3, 20.2, 20.4, 18.6, 19.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1, 22.3, 16.4, 17.1, 23.0, 21.0, 'BYE', 13.9, 15.4, 22.3, 14.8, 18.0, 18.1, 18.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5, 31.5, 30.4, 26.3, 29.6, 32.7, 'BYE', 28.4, 26.5, 32.3, 26.6, 27.5, 24.1, 27.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 19.4,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 8,
    "avg_fp2": 22.57,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.43,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kyler Murray completed 28-of-39 passes for 240 yards and one touchdown in the Cardinals' 38-30, Week 18 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "The Cardinals could have seized the NFC West title and a home playoff game after the Rams choked against the 49ers. Instead, they had to settle for the five seed and a Monday night contest against those same Rams after yet another flat offensive performance and defensive letdown. Murray heads into the postseason having averaged under 7.0 yards per attempt in all four games following DeAndre Hopkins' injury. His last outing above that mark was Arizona's Week 14 loss to, you guessed it, the Rams. The Cardinals have the feel of a team out of sync at the extra wrong moment, one dealing with injuries to both its top running backs.\u00a0\u00a0\n",
    "timestamp": "2022-01-10 03:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 34.56,
    "week02": 35.1,
    "week03": 19.54,
    "week04": 22.62,
    "week05": 13.66,
    "week06": 25.76,
    "week07": 22.44,
    "week08": 11.06,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "BYE",
    "week13": 30.82,
    "week14": 19.42,
    "week15": 13.58,
    "week16": 21.9,
    "week17": 22.92,
    "week18": 17.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.56, 35.1, 19.54, 22.62, 13.66, 25.76, 22.44, 11.06, 'DNP', 'DNP', 'DNP', 'BYE', 30.82, 19.42, 13.58, 21.9, 22.92, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 20.6, 27.2, 22.9, 25.3, 17.8, 24.7, 23.1, 'DNP', 'DNP', 'DNP', 'BYE', 17.4, 20.6, 21.5, 20.6, 19.3, 20.8, 19.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.7, 14.5, 25.9, 21.2, 21.9, 18.4, 17.5, 21.4, 'DNP', 'DNP', 'DNP', 'BYE', 14.7, 11.7, 16.0, 17.4, 14.3, 9.0, 12.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 31.0, 33.3, 29.1, 29.3, 27.2, 33.3, 29.4, 'DNP', 'DNP', 'DNP', 'BYE', 23.0, 25.3, 25.4, 31.5, 22.4, 19.1, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 19.2,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 20.52,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 16.92,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Joe Burrow (knee) was a full participant for Wednesday's practice.\n",
    "report": "",
    "analysis": "Burrow sat out Week 18 but the game was mostly meaningless for the AFC North champs. The extra week of rest plus a pair of full practices ensures that he will play in the Wild Card round.\u00a0\n",
    "timestamp": "2022-01-12 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.64,
    "week02": 13.28,
    "week03": 18.58,
    "week04": 22.32,
    "week05": 20.34,
    "week06": 23.84,
    "week07": 27.64,
    "week08": 21.26,
    "week09": 9.38,
    "week10": "BYE",
    "week11": 9.02,
    "week12": 17.4,
    "week13": 18.6,
    "week14": 22.22,
    "week15": 12.78,
    "week16": 38.1,
    "week17": 34.84,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34, 23.84, 27.64, 21.26, 9.38, 'BYE', 9.02, 17.4, 18.6, 22.22, 12.78, 38.1, 34.84, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3, 19.8, 20.5, 21.5, 'BYE', 19.9, 18.2, 14.9, 18.4, 16.1, 19.6, 19.3, 'DNP', 19.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7, 19.0, 11.5, 11.4, 'BYE', 10.0, 9.6, 11.0, 13.5, 8.8, 13.0, 12.1, 'DNP', 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3, 26.9, 22.7, 21.4, 'BYE', 18.9, 16.8, 23.8, 23.0, 18.0, 22.2, 22.4, 'DNP', 26.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 18.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 22.61,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.4,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 29-of-37 passes for 326 yards and three touchdowns in the Bucs' Week 18 win over the Panthers.\n",
    "report": "",
    "analysis": "Playing with no Chris Godwin (knee), Antonio Brown (ankle, crazy), and then losing Cyril Grayson to a hamstring early in the first half, Brady just kept chugging along. He hooked up with Rob Gronkowski seven times for 137 yards and found Mike Evans for 6-89-2. Those two are going to have to do the heavy lifting for Brady in the playoffs. Brady's third touchdown was a one-yarder to Le'Veon Bell. The Bucs will host a playoff game as NFC South champions next week.\n",
    "timestamp": "2022-01-10 12:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.16,
    "week02": 29.64,
    "week03": 28.68,
    "week04": 11.06,
    "week05": 37.74,
    "week06": 18.98,
    "week07": 24.44,
    "week08": 27.2,
    "week09": "BYE",
    "week10": 15.0,
    "week11": 20.28,
    "week12": 12.24,
    "week13": 29.62,
    "week14": 30.12,
    "week15": 5.76,
    "week16": 14.38,
    "week17": 27.4,
    "week18": 25.04,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.16, 29.64, 28.68, 11.06, 37.74, 18.98, 24.44, 27.2, 'BYE', 15.0, 20.28, 12.24, 29.62, 30.12, 5.76, 14.38, 27.4, 25.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 23.1, 19.5, 19.0, 21.0, 21.1, 22.3, 20.8, 'BYE', 24.8, 22.1, 21.3, 21.6, 18.7, 21.9, 17.1, 21.2, 18.5, 18.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.6, 12.1, 10.4, 13.4, 16.6, 17.8, 18.2, 'BYE', 19.2, 15.4, 18.9, 12.9, 9.8, 16.6, 8.7, 17.4, 11.2, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.8, 27.5, 19.8, 19.2, 20.7, 26.4, 24.8, 27.8, 'BYE', 27.7, 25.9, 29.5, 25.0, 18.7, 25.2, 18.6, 27.2, 21.9, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 16.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 22,
    "avg_fp2": 21.4,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 18.46,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Hurts (ankle) was a full participant in practice Wednesday.\n",
    "report": "",
    "analysis": "Hurts was held out of the Eagles' Week 18 game but Philly was playing for next to nothing. They guaranteed a playoff spot but couldn't move beyond a wild card bid. Hurts got to rest his ankle despite being a limited participant in practice throughout the week. His rushing ability makes him an intriguing DFS option versus the pass-funnel Bucs this week.\n",
    "timestamp": "2022-01-12 10:07 PM",
    "source": "Josh Tolentino on Twitter",
    "game_day_logo": "",
    "week01": 28.76,
    "week02": 21.8,
    "week03": 22.54,
    "week04": 28.18,
    "week05": 23.92,
    "week06": 26.0,
    "week07": 23.54,
    "week08": 11.22,
    "week09": 16.68,
    "week10": 19.42,
    "week11": 30.78,
    "week12": 9.86,
    "week13": "DNP",
    "week14": "BYE",
    "week15": 28.64,
    "week16": 16.66,
    "week17": 12.96,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.76, 21.8, 22.54, 28.18, 23.92, 26.0, 23.54, 11.22, 16.68, 19.42, 30.78, 9.86, 'DNP', 'BYE', 28.64, 16.66, 12.96, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 22.6, 25.0, 23.7, 20.4, 24.4, 21.0, 22.7, 19.9, 19.2, 22.4, 19.8, 'DNP', 'BYE', 20.9, 19.4, 20.8, 'DNP', 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 17.8, 27.3, 18.8, 22.1, 26.3, 23.8, 9.2, 13.2, 23.6, 17.6, 'DNP', 'BYE', 19.3, 20.4, 17.4, 'DNP', 22.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 30.2, 31.7, 31.2, 27.6, 25.0, 31.8, 30.6, 27.7, 19.0, 33.1, 25.1, 'DNP', 'BYE', 22.7, 26.0, 25.9, 'DNP', 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 16.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 16.05,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.56,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jimmy Garoppolo (thumb) was upgraded to \"full\" for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Garoppolo avoided setbacks in his Week 18 return, and will be out there against the Cowboys on Sunday. Starting in the highest-totaled game of the Wild Card Round, Jimmy G is not a bad DFS play vs. an up-and-down Dallas defense.\u00a0\n",
    "timestamp": "2022-01-14 12:43 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.76,
    "week02": 19.56,
    "week03": 15.68,
    "week04": 9.6,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 7.24,
    "week08": 27.28,
    "week09": 20.34,
    "week10": 15.38,
    "week11": 15.64,
    "week12": 12.2,
    "week13": 17.96,
    "week14": 20.14,
    "week15": 13.8,
    "week16": 15.18,
    "week17": "DNP",
    "week18": 14.74,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.76, 19.56, 15.68, 9.6, 'DNP', 'BYE', 7.24, 27.28, 20.34, 15.38, 15.64, 12.2, 17.96, 20.14, 13.8, 15.18, 'DNP', 14.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 15.8, 21.7, 19.4, 'DNP', 'BYE', 18.7, 14.5, 14.9, 17.6, 16.2, 19.2, 17.7, 16.2, 19.3, 16.7, 'DNP', 15.3, 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 4.6, 17.6, 13.4, 'DNP', 'BYE', 20.1, 10.3, 10.6, 9.3, 10.5, 13.5, 13.1, 14.0, 10.8, 14.1, 'DNP', 10.5, 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.0, 18.5, 24.5, 18.9, 'DNP', 'BYE', 23.6, 13.2, 14.9, 17.1, 18.2, 18.6, 17.7, 19.3, 19.3, 20.1, 'DNP', 16.8, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 16.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 16.6,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.01,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Derek Carr completed 20-of-36 passes for 186 yards and two touchdowns in the Raiders' 35-32, Week 18 win over the Chargers.\n",
    "report": "",
    "analysis": "The Raiders played in one of the most insane games in recent memory this week. Both them and the Chargers could make it to the playoffs with a win or a tie. The game made it to overtime with both teams kicking fields. In a next-score-wins scenario, the Raiders made their way down the field on the back of a few Josh Jacobs carries and kicked a field goal to eliminate the Chargers from playoff contention. The team could have kneeled out the clock and still made the playoffs but chose to dash their opponent's post-season hopes instead. Jacobs did most of the work in this game, gashing a weak defensive front for 132 yards. That shouldn't be the case in the Wild Card round as the Raiders will face the Bengals, who beat them by 19 in their previous meeting. Carr should see his attempts boosted next week but will remain a low-end option at his position given the quality of quarterback play he's competing with.\n",
    "timestamp": "2022-01-10 05:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 24.18,
    "week03": 22.24,
    "week04": 15.44,
    "week05": 8.24,
    "week06": 21.54,
    "week07": 20.02,
    "week08": "BYE",
    "week09": 14.34,
    "week10": 19.24,
    "week11": 11.6,
    "week12": 21.02,
    "week13": 12.36,
    "week14": 13.52,
    "week15": 13.14,
    "week16": 11.54,
    "week17": 12.2,
    "week18": 15.34,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 24.18, 22.24, 15.44, 8.24, 21.54, 20.02, 'BYE', 14.34, 19.24, 11.6, 21.02, 12.36, 13.52, 13.14, 11.54, 12.2, 15.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 21.2, 23.3, 21.6, 22.5, 16.5, 19.8, 'BYE', 19.9, 21.8, 20.6, 17.5, 21.7, 17.4, 16.9, 16.7, 17.0, 17.4, 16.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.4, 8.4, 16.2, 13.3, 12.7, 14.8, 13.1, 'BYE', 10.8, 10.3, 13.9, 12.7, 12.5, 11.0, 10.6, 9.6, 9.4, 11.5, 11.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 23.2, 23.6, 21.1, 20.3, 21.2, 20.6, 'BYE', 21.9, 20.8, 21.9, 20.6, 19.2, 20.4, 18.9, 18.4, 18.7, 19.2, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 14.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 16,
    "avg_fp2": 14.38,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 20.29,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Ben Roethlisberger completed 30-of-44 attempts for 240 yards, one touchdown, and one interception in the Steelers' Week 18 win against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Roethlisberger gutted his way to a win, possibly extending his Steelers career by at least one more game. Checking down time and again to Najee Harris, Diontae Johnson, and his tight ends, Roethlisberger did just enough to beat the shorthanded Ravens in an ugly game. He connected on two critical overtime passes to keep Pittsburgh moving downfield. The Ravens, meanwhile, dropped at least two would-be picks in the second half. Roethlisberger, who has been held to less than five yards per pass attempt in three straight contests, heads into the postseason hoping for a miraculous run with a Steelers team that just won't go away.\u00a0\n",
    "timestamp": "2022-01-09 09:34 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.02,
    "week02": 14.8,
    "week03": 15.22,
    "week04": 10.28,
    "week05": 16.02,
    "week06": 10.86,
    "week07": "BYE",
    "week08": 14.64,
    "week09": 16.2,
    "week10": "DNP",
    "week11": 22.92,
    "week12": 10.52,
    "week13": 19.34,
    "week14": 25.82,
    "week15": 11.92,
    "week16": 7.36,
    "week17": 7.82,
    "week18": 12.36,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.02, 14.8, 15.22, 10.28, 16.02, 10.86, 'BYE', 14.64, 16.2, 'DNP', 22.92, 10.52, 19.34, 25.82, 11.92, 7.36, 7.82, 12.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 16.3, 15.5, 14.2, 13.7, 16.0, 'BYE', 15.6, 16.6, 'DNP', 14.9, 13.3, 18.1, 18.7, 17.6, 15.4, 17.4, 15.1, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.1, 9.9, 12.7, 15.0, 7.4, 14.5, 'BYE', 10.6, 14.3, 'DNP', 11.2, 11.8, 12.3, 12.9, 12.2, 12.9, 11.4, 12.8, 11.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 23.6, 20.1, 25.3, 16.8, 22.5, 'BYE', 21.1, 22.3, 'DNP', 19.6, 20.7, 22.7, 23.3, 23.0, 23.7, 20.6, 23.3, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png",
    "name": "Mac Jones",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 13.5,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 14.13,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.53,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Mac Jones completed 20-of-30 passes for 261 yards, a touchdown, and an interception in the Patriots' 24-33, Week 18 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Jones was pick-sixed on his first throw of the game. Dolphins cornerback\u00a0Xavien Howard read Jones looking for a shallow completion on third down and jumped the pass, easily taking it to the house after the interception. After that dreadful play, Jones had a solid night. The loss cemented New England as the runner-up in the AFC East but the team still made the playoffs as a wild card team. The Pats are looking at the No. 5 or No. 6 seed in the AFC. Likely hidden behind a solid running game, Jones will rank in the lower half of the available quarterbacks for the Wild Card round.\n",
    "timestamp": "2022-01-10 01:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.24,
    "week02": 7.44,
    "week03": 14.6,
    "week04": 17.9,
    "week05": 12.54,
    "week06": 15.76,
    "week07": 22.18,
    "week08": 11.72,
    "week09": 6.96,
    "week10": 19.92,
    "week11": 11.38,
    "week12": 21.5,
    "week13": 0.36,
    "week14": "BYE",
    "week15": 19.16,
    "week16": 7.1,
    "week17": 22.28,
    "week18": 11.84,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.24, 7.44, 14.6, 17.9, 12.54, 15.76, 22.18, 11.72, 6.96, 19.92, 11.38, 21.5, 0.36, 'BYE', 19.16, 7.1, 22.28, 11.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 15.1, 11.0, 18.5, 15.8, 16.8, 14.3, 15.6, 13.9, 17.1, 18.9, 18.2, 11.7, 'BYE', 16.1, 10.4, 16.5, 13.9, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.8, 5.6, 8.8, 10.2, 8.5, 13.2, 12.7, 12.4, 16.2, 13.2, 9.1, 16.3, 'BYE', 6.1, 15.9, 6.4, 8.9, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 22.2, 16.5, 20.8, 22.3, 21.5, 17.0, 19.8, 19.3, 20.6, 20.1, 18.8, 19.7, 'BYE', 17.2, 22.5, 18.6, 21.7, 10.3]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 16.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 16,
    "avg_fp2": 10.81,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.47,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde\u00a0Edwards-Helaire (shoulder) won't play in the Wild Card game against the Steelers.\n",
    "report": "",
    "analysis": "CEH tested his shoulder out with a limited practice on Wednesday but was unable to return to the field to close the week and thus ruled out. At this point, there's no guarantee he would be able to turn around for the Divisional Round even if the Chiefs advance. Darrel Williams, who coach Andy Reid said is expected to play, averaged 13.8 carries and 5 targets in six full games without CEH earlier this year and will be used as a bell-cow once again on Sunday night.\n",
    "timestamp": "2022-01-14 07:22 PM",
    "source": "Adam Teicher on Twitter",
    "game_day_logo": "",
    "week01": 8.7,
    "week02": 2.6,
    "week03": 15.9,
    "week04": 18.4,
    "week05": 2.9,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 14.6,
    "week12": "BYE",
    "week13": 9.7,
    "week14": 17.7,
    "week15": 8.0,
    "week16": 9.6,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 2.6, 15.9, 18.4, 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6, 'BYE', 9.7, 17.7, 8.0, 9.6, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 13.4, 11.3, 11.8, 11.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.7, 'BYE', 13.7, 14.6, 14.2, 17.3, 'DNP', 'DNP', 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 6.3, 7.4, 8.3, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 8.1, 7.0, 11.2, 10.0, 'DNP', 'DNP', 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 15.4, 11.6, 17.5, 14.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.3, 'BYE', 11.9, 16.3, 16.1, 18.4, 'DNP', 'DNP', 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 16.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 22,
    "avg_fp2": 16.68,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.9,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals activated Joe Mixon from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "The team also activated C Trey Hopkins, LG Quinton Spain, S Vonn Bell, DE Trey Hendrickson, DT B.J. Hill, and DT Larry Ogunjobi from the COVID-19 list. Mixon will make his postseason debut this weekend against a Raiders team allowing 27.6 rushing attempts per game. He'll probably get all the touches he can handle against Vegas.\u00a0\n",
    "timestamp": "2022-01-10 06:00 PM",
    "source": "ProFootballTalk.com ",
    "game_day_logo": "",
    "week01": 23.0,
    "week02": 7.6,
    "week03": 9.9,
    "week04": 13.2,
    "week05": 10.0,
    "week06": 23.8,
    "week07": 11.9,
    "week08": 23.1,
    "week09": 25.5,
    "week10": "BYE",
    "week11": 24.3,
    "week12": 30.3,
    "week13": 9.4,
    "week14": 7.8,
    "week15": 6.5,
    "week16": 28.5,
    "week17": 12.1,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0, 23.8, 11.9, 23.1, 25.5, 'BYE', 24.3, 30.3, 9.4, 7.8, 6.5, 28.5, 12.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0, 12.1, 15.9, 12.4, 'BYE', 13.4, 15.4, 19.7, 14.9, 13.1, 13.8, 18.2, 'DNP', 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3, 8.5, 17.4, 13.8, 'BYE', 18.0, 9.7, 17.4, 8.8, 10.2, 9.0, 7.1, 'DNP', 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3, 18.6, 22.5, 15.8, 'BYE', 23.7, 15.9, 33.4, 15.9, 17.3, 14.9, 20.5, 'DNP', 27.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241457.png",
    "name": "Najee Harris",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 15.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 28,
    "avg_fp2": 16.01,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.3,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Elbow",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers coach Mike Tomlin expects\u00a0Najee Harris (elbow) to practice Friday.\u00a0\n",
    "report": "",
    "analysis": "Harris missed another practice on Thursday, his second of the week. It is possible the Steelers have intended to play Harris all along and are just keeping him off his feet as long as they can. It's also possible he is genuinely questionable and they have no idea how his body might respond on Friday. Harris did play through the issue in Week 18, though he had the benefit of adrenaline. It is ultimately difficult to envision the Steelers' bell-cow sitting.\u00a0\n",
    "timestamp": "2022-01-13 08:57 PM",
    "source": "Brooke Pryor on Twitter ",
    "game_day_logo": "",
    "week01": 5.4,
    "week02": 16.6,
    "week03": 21.2,
    "week04": 18.1,
    "week05": 21.2,
    "week06": 21.7,
    "week07": "BYE",
    "week08": 19.5,
    "week09": 15.3,
    "week10": 15.3,
    "week11": 14.4,
    "week12": 5.2,
    "week13": 13.2,
    "week14": 23.9,
    "week15": 3.6,
    "week16": 13.5,
    "week17": 28.1,
    "week18": 7.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 16.6, 21.2, 18.1, 21.2, 21.7, 'BYE', 19.5, 15.3, 15.3, 14.4, 5.2, 13.2, 23.9, 3.6, 13.5, 28.1, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 11.7, 12.5, 14.9, 12.7, 19.4, 'BYE', 13.7, 19.1, 21.7, 18.1, 16.8, 16.4, 16.3, 17.3, 17.3, 19.1, 15.6, 15.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 4.6, 4.7, 6.4, 4.3, 9.1, 'BYE', 19.3, 19.1, 11.2, 11.9, 12.0, 8.6, 14.7, 13.0, 10.1, 10.9, 9.4, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.4, 16.8, 17.9, 14.2, 26.5, 'BYE', 22.1, 21.8, 22.4, 23.1, 22.0, 20.0, 20.5, 23.2, 22.9, 23.0, 22.8, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 15.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 27,
    "avg_fp2": 15.79,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.24,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Hamstring",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers coach Bruce Arians said Leonard Fournette (hamstring) is \"the most questionable\" of game-time decisions for the Wild Card round against the Eagles.\n",
    "report": "",
    "analysis": "Fournette's participation at practice this week is unclear since he's still in the 21-day window to return from injured reserve, so the team isn\u2019t required to list his status. Truly a game-time decision, it's questionable whether he'll be at full strength for his former bell-cow role even if he's active. With Ronald Jones (ankle) already ruled out, Ke'Shawn Vaughn and Le'Veon Bell would step up to the plate if Fournette can't go.\n",
    "timestamp": "2022-01-14 06:58 PM",
    "source": "Greg Auman on Twitter",
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 9.6,
    "week03": 4.9,
    "week04": 15.3,
    "week05": 19.0,
    "week06": 27.7,
    "week07": 16.0,
    "week08": 5.8,
    "week09": "BYE",
    "week10": 13.2,
    "week11": 10.4,
    "week12": 40.6,
    "week13": 18.7,
    "week14": 21.2,
    "week15": 10.2,
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 9.6, 4.9, 15.3, 19.0, 27.7, 16.0, 5.8, 'BYE', 13.2, 10.4, 40.6, 18.7, 21.2, 10.2, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 9.3, 10.6, 9.3, 12.3, 12.5, 14.0, 13.2, 'BYE', 13.4, 14.6, 11.6, 15.0, 16.2, 14.3, 'DNP', 'DNP', 'DNP', 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 8.8, 7.7, 7.4, 8.3, 12.0, 9.3, 'BYE', 8.5, 10.1, 4.1, 6.4, 4.6, 7.7, 'DNP', 'DNP', 'DNP', 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.7, 15.8, 17.3, 13.0, 15.4, 20.8, 16.6, 'BYE', 19.5, 19.2, 14.3, 16.8, 24.0, 17.0, 'DNP', 'DNP', 'DNP', 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 14.5,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 8,
    "avg_fp2": 13.29,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.23,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots RB Damien Harris was listed as questionable for Saturday's game against Buffalo.\n",
    "report": "",
    "analysis": "He'll play barring anything unforseen, as the team has listed him with this ailment since it happened and Harris hasn't sat out a game with it since Week 15's Saturday night affair against the Colts. Harris will likely continue to cede some time to Rhamondre Stevenson and will be dependent on game script -- with a high upside if he has it -- in DFS.\u00a0\n",
    "timestamp": "2022-01-13 08:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.7,
    "week02": 12.9,
    "week03": 2.1,
    "week04": 3.8,
    "week05": 9.8,
    "week06": 17.3,
    "week07": 24.3,
    "week08": 14.0,
    "week09": 9.8,
    "week10": "DNP",
    "week11": 7.0,
    "week12": 11.7,
    "week13": 17.1,
    "week14": "BYE",
    "week15": "DNP",
    "week16": 28.3,
    "week17": 17.2,
    "week18": 15.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 12.9, 2.1, 3.8, 9.8, 17.3, 24.3, 14.0, 9.8, 'DNP', 7.0, 11.7, 17.1, 'BYE', 'DNP', 28.3, 17.2, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 13.8, 12.6, 9.5, 10.6, 9.6, 14.0, 14.2, 10.9, 'DNP', 13.1, 12.6, 12.9, 'BYE', 'DNP', 14.5, 14.9, 13.1, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.5, 5.6, 1.8, 4.7, 2.1, 1.9, 7.4, 2.5, 'DNP', 4.6, 2.2, 4.1, 'BYE', 'DNP', 4.0, 6.2, 6.4, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.0, 8.8, 11.0, 13.7, 8.6, 7.6, 12.3, 11.7, 'DNP', 12.3, 12.1, 14.8, 'BYE', 'DNP', 13.3, 12.0, 12.5, 27.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 13.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 29,
    "avg_fp2": 12.69,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Josh Jacobs (ribs) will play Saturday against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Jacobs was limited all week with an injury to his ribs, but he was not listed on the final injury report. Fresh off a 26 for 132 performance against the Chargers, Jacobs should be leaned on again in the first round of the playoffs. Denny Carter currently has Jacobs as the\u00a0ninth-best option at running back this weekend.\u00a0\n",
    "timestamp": "2022-01-14 03:51 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 8.2,
    "week05": 14.7,
    "week06": 14.7,
    "week07": 14.3,
    "week08": "BYE",
    "week09": 11.5,
    "week10": 6.1,
    "week11": 8.6,
    "week12": 18.2,
    "week13": 19.5,
    "week14": 7.5,
    "week15": 10.9,
    "week16": 10.9,
    "week17": 16.0,
    "week18": 21.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 'DNP', 'DNP', 8.2, 14.7, 14.7, 14.3, 'BYE', 11.5, 6.1, 8.6, 18.2, 19.5, 7.5, 10.9, 10.9, 16.0, 21.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 'DNP', 'DNP', 13.9, 12.5, 11.4, 15.6, 'BYE', 13.2, 14.6, 15.4, 11.8, 13.8, 13.7, 13.7, 13.5, 12.5, 14.7, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 'DNP', 'DNP', 13.8, 18.8, 19.5, 17.1, 'BYE', 16.5, 13.3, 12.7, 9.8, 9.3, 9.3, 11.5, 14.0, 9.0, 11.3, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 'DNP', 'DNP', 17.1, 23.7, 23.2, 19.6, 'BYE', 21.3, 15.6, 17.4, 14.9, 14.4, 17.3, 16.1, 21.1, 15.6, 17.1, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241555.png",
    "name": "Elijah Mitchell",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 13.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 14.7,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 16.16,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Elijah Mitchell (knee) returned to 49ers practice Thursday, getting in a \"limited\" session.\u00a0\n",
    "report": "",
    "analysis": "The 49ers are on the record as expecting Mitchell to suit up against the Cowboys on Sunday. They are just managing his reps after his injury-plagued second half of the season. A workhorse any time he is part of the 46-man roster, Mitchell can be counted on for at least 15-20 touches in Dallas.\u00a0\n",
    "timestamp": "2022-01-14 12:44 AM",
    "source": "Nick Wagoner on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "BYE",
    "week07": 16.7,
    "week08": 19.7,
    "week09": 10.4,
    "week10": 9.1,
    "week11": "DNP",
    "week12": 25.3,
    "week13": 15.9,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 20.0,
    "week18": 8.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.3, 'DNP', 'DNP', 7.2, 'BYE', 16.7, 19.7, 10.4, 9.1, 'DNP', 25.3, 15.9, 'DNP', 'DNP', 'DNP', 20.0, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 'DNP', 'DNP', 7.3, 'BYE', 14.7, 13.0, 14.5, 14.3, 'DNP', 15.4, 17.4, 'DNP', 'DNP', 'DNP', 17.9, 14.4, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.1, 'DNP', 'DNP', 1.4, 'BYE', 5.1, 4.9, 5.7, 8.3, 'DNP', 7.9, 9.6, 'DNP', 'DNP', 'DNP', 9.3, 9.1, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 22.1, 'DNP', 'DNP', 10.6, 'BYE', 15.9, 18.1, 17.9, 18.2, 'DNP', 17.7, 21.7, 'DNP', 'DNP', 'DNP', 18.2, 17.3, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 12.9,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 6,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.26,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "The Buffalo News' Harry Scull, Jr. said the Bills have increased their use of a sixth offensive lineman.\n",
    "report": "",
    "analysis": "The team's pass fell over the season's final month as the Bills were seemingly determined to generate a rushing attack to complement the team's productive passing offense. Against the Jets in Week 18, the Bills used a sixth offensive lineman on a season-high 15 plays.\u00a0\u201cThat\u2019s what you need,\u201d Bills head coach Sean McDermott said. \u201cThat\u2019s why it\u2019s important to be two-dimensional or the threat of two dimensions on offense, running and passing.\u201d Devin Singletary, taking 58 percent of the team's carries in the regular season's final month, has been the main beneficiary of a more balanced Buffalo offense. Josh Allen's rushing production has seen an uptick too; he's averaged 9.6 rushes per game since Week 14, up from 6.25 carries per game from Week 1-13. In Saturday night's Wild Card game, look for the Bills to establish the run against a New England defense that's more beatable on the ground than it is through the air.\u00a0\n",
    "timestamp": "2022-01-14 05:10 PM",
    "source": "BuffaloNews.com ",
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 16.1,
    "week03": 3.1,
    "week04": 9.1,
    "week05": 2.8,
    "week06": 6.8,
    "week07": "BYE",
    "week08": 3.4,
    "week09": 9.4,
    "week10": 11.4,
    "week11": 5.8,
    "week12": 5.3,
    "week13": 3.6,
    "week14": 11.9,
    "week15": 16.1,
    "week16": 16.3,
    "week17": 23.0,
    "week18": 24.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 16.1, 3.1, 9.1, 2.8, 6.8, 'BYE', 3.4, 9.4, 11.4, 5.8, 5.3, 3.6, 11.9, 16.1, 16.3, 23.0, 24.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.1, 14.3, 9.9, 9.8, 7.8, 'BYE', 9.0, 8.8, 8.9, 6.5, 9.6, 10.9, 10.5, 11.6, 11.3, 13.9, 16.2, 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 11.5, 7.4, 5.0, 9.7, 'BYE', 5.1, 7.5, 9.6, 5.8, 7.0, 9.3, 6.8, 9.4, 8.1, 6.5, 7.0, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.9, 16.6, 13.7, 9.0, 15.7, 'BYE', 9.8, 11.7, 14.3, 9.8, 11.3, 14.0, 12.8, 13.7, 14.5, 11.2, 15.2, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 12.1,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 9,
    "avg_fp2": 15.35,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "James Conner (ribs) was not seen during the start of the Cardinals' Friday practice.\u00a0\n",
    "report": "",
    "analysis": "Conner, after leaving Week 18's loss with a rib injury, will probably log his second straight DNP ahead of Arizona's Monday night playoff game against the Rams. Cardinals head coach Kliff Kingsbury said this week that Conner would likely be a game-time decision against LA. Chase Edmonds, dealing with ribs and toe injuries, said he'll suit up Monday night; without Conner, he should easily see north of 15 touches. With Conner out last month, Edmonds saw 23 touches -- including five receptions -- against Dallas.\u00a0\n",
    "timestamp": "2022-01-14 04:36 PM",
    "source": "Darren Urban on Twitter ",
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 2.6,
    "week03": 17.8,
    "week04": 19.6,
    "week05": 10.2,
    "week06": 7.6,
    "week07": 12.4,
    "week08": 14.2,
    "week09": 37.8,
    "week10": 13.9,
    "week11": 18.4,
    "week12": "BYE",
    "week13": 18.1,
    "week14": 29.0,
    "week15": 8.0,
    "week16": "DNP",
    "week17": "DNP",
    "week18": 24.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 2.6, 17.8, 19.6, 10.2, 7.6, 12.4, 14.2, 37.8, 13.9, 18.4, 'BYE', 18.1, 29.0, 8.0, 'DNP', 'DNP', 24.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 12.7, 5.9, 9.1, 8.9, 6.3, 13.9, 6.9, 8.2, 12.8, 15.5, 'BYE', 15.9, 12.8, 14.6, 'DNP', 'DNP', 14.3, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 2.0, 11.3, 10.2, 8.6, 10.6, 1.8, 4.0, 11.4, 20.7, 'BYE', 5.0, 8.3, 4.2, 'DNP', 'DNP', 10.2, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 19.9, 11.6, 18.0, 16.8, 17.2, 17.5, 9.2, 10.4, 22.5, 26.9, 'BYE', 18.8, 18.8, 20.8, 'DNP', 'DNP', 17.0, 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 11.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 10,
    "avg_fp2": 13.69,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Ezekiel Elliott rushed 18 times for 87 yards in the Cowboys' Week 18 win over the Eagles.\n",
    "report": "",
    "analysis": "With Tony Pollard inactive, the Cowboys let Elliott play into the third quarter, with the 87 yards putting him over 1,000 on the year.\u00a0This was Elliott\u2019s best game since Week 5 but it came on an Eagles\u2019 defense resting its starters.\u00a0Elliott broke down while playing through a knee injury in the second half of the season, and with Pollard returning,\u00a0remains in a gamescript dependent committee going into the playoffs. The Cowboys are the No. 4 seed\u00a0if the 49ers, Cardinals and Bucs win, and would match up with the Rams in the Wild Card round.\n",
    "timestamp": "2022-01-09 04:51 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.9,
    "week02": 16.7,
    "week03": 25.1,
    "week04": 20.3,
    "week05": 24.2,
    "week06": 15.4,
    "week07": "BYE",
    "week08": 9.3,
    "week09": 11.1,
    "week10": 19.26,
    "week11": 9.8,
    "week12": 13.9,
    "week13": 5.7,
    "week14": 8.5,
    "week15": 14.7,
    "week16": 16.7,
    "week17": 3.5,
    "week18": 9.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 16.7, 25.1, 20.3, 24.2, 15.4, 'BYE', 9.3, 11.1, 19.26, 9.8, 13.9, 5.7, 8.5, 14.7, 16.7, 3.5, 9.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 9.6, 10.6, 9.0, 16.1, 13.3, 'BYE', 15.7, 15.0, 15.6, 14.3, 16.6, 12.4, 14.0, 14.0, 14.8, 13.9, 14.1, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.8, 10.1, 19.9, 18.4, 23.7, 14.8, 'BYE', 19.3, 20.0, 17.4, 16.5, 15.9, 11.9, 20.0, 9.1, 13.5, 11.2, 6.8, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 25.3, 25.0, 23.0, 31.9, 19.7, 'BYE', 24.8, 26.1, 24.2, 20.4, 21.4, 16.6, 26.3, 14.6, 21.2, 17.4, 17.0, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 11.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 8.68,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.6,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Speaking Friday, Miles Sanders (hand) told reporters that he will play in the Wild Card round against the Buccaneers.\n",
    "report": "",
    "analysis": "Sanders had surgery on his hand after Week 16 and plans to wear some protection on his hand for the game. Although, he described the protection as nothing elaborate and says he's able to catch passes. It shouldn't be a surprise if Sanders has a more limited role than usual, particularly in the passing game. But the Eagles' best chance of upsetting the Buccaneers is by staying balanced and in possession of the football. Sanders shapes up as a boom/bust play in the Wild Card round.\n",
    "timestamp": "2022-01-14 06:28 PM",
    "source": "Mike Kaye on Twitter",
    "game_day_logo": "",
    "week01": 15.3,
    "week02": 6.4,
    "week03": 7.0,
    "week04": 6.2,
    "week05": 7.6,
    "week06": 7.6,
    "week07": 3.2,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 7.4,
    "week12": 6.9,
    "week13": 15.7,
    "week14": "BYE",
    "week15": 15.6,
    "week16": 5.3,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.3, 6.4, 7.0, 6.2, 7.6, 7.6, 3.2, 'DNP', 'DNP', 'DNP', 7.4, 6.9, 15.7, 'BYE', 15.6, 5.3, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 16.5, 11.1, 16.7, 7.8, 9.9, 13.4, 'DNP', 'DNP', 'DNP', 13.8, 13.5, 14.3, 'BYE', 12.6, 14.4, 'DNP', 'DNP', 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 6.2, 5.3, 9.1, 3.5, 3.3, 6.7, 'DNP', 'DNP', 'DNP', 15.4, 11.0, 6.7, 'BYE', 13.7, 9.8, 'DNP', 'DNP', 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 21.1, 10.8, 14.0, 11.1, 7.8, 10.2, 'DNP', 'DNP', 'DNP', 19.8, 15.4, 10.4, 'BYE', 17.9, 14.5, 'DNP', 'DNP', 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 9.4,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 24,
    "avg_fp2": 8.15,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.58,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Sony Michel had 21 rushes for 43 yards in the Rams' Week 18 loss to the 49ers, adding one catch for six yards.\u00a0\n",
    "report": "",
    "analysis": "Michel was nightmarishly inefficient as the Rams tried desperately to establish the run with a three-score first half lead. He continued as LA's leading rusher as Cam Akers -- making his return from a summertime Achilles injury -- had just five rushing attempts. Michel, who has gotten by on a heavy workload over the past month, couldn't get it done against the 49ers' middling run defense. Michel will probably maintain his lead-back role for LA in the first round of the playoffs against Arizona.\u00a0\n",
    "timestamp": "2022-01-10 12:51 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.2,
    "week02": 4.6,
    "week03": 9.4,
    "week04": -0.9,
    "week05": 11.0,
    "week06": 4.2,
    "week07": 0.4,
    "week08": 6.6,
    "week09": 9.6,
    "week10": 4.1,
    "week11": "BYE",
    "week12": 3.0,
    "week13": 20.4,
    "week14": 7.9,
    "week15": 12.5,
    "week16": 20.0,
    "week17": 17.4,
    "week18": 5.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2, 0.4, 6.6, 9.6, 4.1, 'BYE', 3.0, 20.4, 7.9, 12.5, 20.0, 17.4, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5, 5.8, 5.0, 6.7, 'BYE', 5.9, 9.2, 8.0, 6.4, 5.7, 8.9, 9.3, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8, 3.7, 4.2, 1.4, 'BYE', 5.3, 3.2, 6.0, 6.8, 4.3, 3.0, 0.0, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4, 12.8, 9.8, 13.9, 'BYE', 11.4, 9.0, 11.1, 11.6, 8.6, 11.7, 15.1, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 8.9,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 10,
    "avg_fp2": 9.54,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Tony Pollard (foot) was a full participant in practice on Wednesday.\n",
    "report": "",
    "analysis": "Pollard has been laboring through a plantar fascia injury for over a month. He was held out of Week 18 because of the issue but the Cowboys were only playing for better seeding so it made sense to rest him.\u00a0Cowboys Executive Vice President Stephen Jones has already said Pollard is expected to play and a full practice this early in the week all but confirms that.\n",
    "timestamp": "2022-01-13 06:09 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.3,
    "week02": 21.5,
    "week03": 7.0,
    "week04": 6.7,
    "week05": 12.3,
    "week06": 7.8,
    "week07": "BYE",
    "week08": 3.2,
    "week09": 4.8,
    "week10": 12.8,
    "week11": 8.0,
    "week12": 14.8,
    "week13": 14.4,
    "week14": "DNP",
    "week15": 10.2,
    "week16": 6.0,
    "week17": 7.3,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.3, 21.5, 7.0, 6.7, 12.3, 7.8, 'BYE', 3.2, 4.8, 12.8, 8.0, 14.8, 14.4, 'DNP', 10.2, 6.0, 7.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 5.9, 7.9, 6.1, 9.2, 7.6, 'BYE', 8.3, 7.8, 7.8, 8.0, 7.6, 7.5, 'DNP', 8.7, 8.2, 7.1, 'DNP', 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.0, 0.0, 0.5, 0.1, 'BYE', 5.2, 2.1, 7.7, 1.7, 6.6, 4.2, 'DNP', 6.3, 1.6, 3.4, 'DNP', 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.5, 11.4, 13.0, 6.1, 8.9, 6.6, 'BYE', 12.1, 10.4, 11.8, 5.6, 11.2, 8.5, 'DNP', 18.6, 12.4, 9.8, 'DNP', 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 8.8,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 9,
    "avg_fp2": 10.15,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "James Conner (ribs) was not seen during the start of the Cardinals' Friday practice.\u00a0\n",
    "report": "",
    "analysis": "Conner, after leaving Week 18's loss with a rib injury, will probably log his second straight DNP ahead of Arizona's Monday night playoff game against the Rams. Cardinals head coach Kliff Kingsbury said this week that Conner would likely be a game-time decision against LA. Chase Edmonds, dealing with ribs and toe injuries, said he'll suit up Monday night; without Conner, he should easily see north of 15 touches. With Conner out last month, Edmonds saw 23 touches -- including five receptions -- against Dallas.\u00a0\n",
    "timestamp": "2022-01-14 04:36 PM",
    "source": "Darren Urban on Twitter ",
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 10.0,
    "week03": 11.0,
    "week04": 15.9,
    "week05": 2.9,
    "week06": 6.5,
    "week07": 9.5,
    "week08": 14.4,
    "week09": 0.3,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "BYE",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 5.3,
    "week16": 22.7,
    "week17": 10.7,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 10.0, 11.0, 15.9, 2.9, 6.5, 9.5, 14.4, 0.3, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.3, 22.7, 10.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 8.9, 11.9, 9.3, 16.3, 15.8, 9.3, 14.1, 14.6, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 9.1, 13.7, 8.1, 'DNP', 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.4, 12.5, 7.9, 3.2, 15.5, 3.3, 7.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.8, 3.2, 7.5, 'DNP', 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 10.2, 13.6, 15.7, 13.9, 7.4, 17.6, 5.4, 13.4, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.2, 7.4, 14.0, 'DNP', 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 8.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 16,
    "avg_fp2": 10.39,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.47,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Darrel Williams (toe) is expected to play in the Wild Card round against the Steelers.\n",
    "report": "",
    "analysis": "",
    "timestamp": "2022-01-14 07:27 PM",
    "source": "Herbie Teope on Twitter",
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.8,
    "week03": 4.9,
    "week04": 12.8,
    "week05": 6.0,
    "week06": 22.4,
    "week07": 6.5,
    "week08": 14.0,
    "week09": 9.2,
    "week10": 24.9,
    "week11": 3.1,
    "week12": "BYE",
    "week13": 9.5,
    "week14": 11.4,
    "week15": 1.2,
    "week16": 10.0,
    "week17": 24.2,
    "week18": 6.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.8, 4.9, 12.8, 6.0, 22.4, 6.5, 14.0, 9.2, 24.9, 3.1, 'BYE', 9.5, 11.4, 1.2, 10.0, 24.2, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2, 11.8, 12.1, 12.5, 11.4, 11.6, 'BYE', 7.7, 8.1, 7.7, 7.9, 12.5, 10.7, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2, 10.3, 1.0, 9.1, 0.7, 17.2, 'BYE', 0.0, 7.4, 2.0, 0.3, 1.2, 4.1, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3, 17.2, 8.5, 13.2, 6.0, 23.4, 'BYE', 8.3, 13.6, 8.8, 7.7, 7.7, 19.1, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 6,
    "avg_fp2": 7.61,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.26,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "The Buffalo News' Harry Scull, Jr. said the Bills have increased their use of a sixth offensive lineman.\n",
    "report": "",
    "analysis": "The team's pass fell over the season's final month as the Bills were seemingly determined to generate a rushing attack to complement the team's productive passing offense. Against the Jets in Week 18, the Bills used a sixth offensive lineman on a season-high 15 plays.\u00a0\u201cThat\u2019s what you need,\u201d Bills head coach Sean McDermott said. \u201cThat\u2019s why it\u2019s important to be two-dimensional or the threat of two dimensions on offense, running and passing.\u201d Devin Singletary, taking 58 percent of the team's carries in the regular season's final month, has been the main beneficiary of a more balanced Buffalo offense. Josh Allen's rushing production has seen an uptick too; he's averaged 9.6 rushes per game since Week 14, up from 6.25 carries per game from Week 1-13. In Saturday night's Wild Card game, look for the Bills to establish the run against a New England defense that's more beatable on the ground than it is through the air.\u00a0\n",
    "timestamp": "2022-01-14 05:10 PM",
    "source": "BuffaloNews.com ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 14.4,
    "week03": 16.6,
    "week04": 12.1,
    "week05": 10.7,
    "week06": 4.9,
    "week07": "BYE",
    "week08": 8.8,
    "week09": 3.4,
    "week10": 8.7,
    "week11": 0.5,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 3.0,
    "week17": 3.9,
    "week18": 2.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 14.4, 16.6, 12.1, 10.7, 4.9, 'BYE', 8.8, 3.4, 8.7, 0.5, 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 3.9, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.3, 7.3, 17.2, 15.7, 15.7, 'BYE', 15.2, 13.6, 16.4, 15.1, 'DNP', 'DNP', 'DNP', 'DNP', 7.4, 7.5, 9.8, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 3.6, 8.7, 10.9, 8.4, 'BYE', 9.6, 7.5, 7.5, 2.8, 'DNP', 'DNP', 'DNP', 'DNP', 1.9, 5.0, 5.9, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 4.9, 9.7, 21.8, 12.0, 'BYE', 12.7, 11.8, 14.5, 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 9.6, 11.2, 13.1, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4569173.png",
    "name": "Rhamondre Stevenson",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.4,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 8,
    "avg_fp2": 9.43,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.23,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Rhamondre Stevenson rushed four times for 34 yards in the Patriots' Week 18 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Stevenson left with a head injury in the first quarter and was listed as questionable to return. He retook the field in the third quarter but was used sparingly upon his return. Given that he was able to make it back into the lineup, we fully expect Stevenson to be ready for the Wild Card round. He and Harris will form a two-back committee that's efficient enough for both to be viable DFS plays. Harris will rank ahead of Stevenson as the better bet to find the end zone.\n",
    "timestamp": "2022-01-10 03:55 AM",
    "source": null,
    "game_day_logo": "",
    "week01": -0.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.3,
    "week06": 13.7,
    "week07": "DNP",
    "week08": 3.5,
    "week09": 11.6,
    "week10": 25.4,
    "week11": 8.0,
    "week12": 4.6,
    "week13": 7.8,
    "week14": "BYE",
    "week15": 4.5,
    "week16": "DNP",
    "week17": 22.7,
    "week18": 4.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.4, 'DNP', 'DNP', 'DNP', 2.3, 13.7, 'DNP', 3.5, 11.6, 25.4, 8.0, 4.6, 7.8, 'BYE', 4.5, 'DNP', 22.7, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 'DNP', 'DNP', 'DNP', 1.5, 2.8, 'DNP', 4.0, 3.1, 11.3, 7.5, 6.8, 5.9, 'BYE', 10.9, 'DNP', 6.4, 5.9, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 0.0, 0.0, 3.5, 5.4, 4.4, 1.6, 'BYE', 1.5, 'DNP', 1.6, 3.4, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.4, 'DNP', 'DNP', 'DNP', 6.2, 4.6, 'DNP', 9.2, 7.2, 16.6, 21.3, 20.2, 11.3, 'BYE', 17.5, 'DNP', 15.8, 17.0, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 8.79,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.6,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles activated Jordan Howard from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Boston Scott was also brought off the COVID list. Miles Sanders is dealing with a hand injury but is expected to play in the opening round of the playoffs. If that turns out to be true, Howard will likely split the backfield with him, leaving little work for Scott or Kenneth Gainwell. The Eagles get the run-stuffing Bucs in their Wild Card game so both backs are at risk of getting shut down this week.\n",
    "timestamp": "2022-01-10 09:00 PM",
    "source": "Mike Kaye on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 17.7,
    "week09": 13.1,
    "week10": 8.3,
    "week11": 6.3,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "BYE",
    "week15": "DNP",
    "week16": 6.6,
    "week17": 2.6,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.7, 13.1, 8.3, 6.3, 'DNP', 'DNP', 'BYE', 'DNP', 6.6, 2.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.6, 6.2, 12.5, 6.3, 'DNP', 'DNP', 'BYE', 'DNP', 4.1, 5.7, 'DNP', 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 11.8, 7.4, 0.9, 'DNP', 'DNP', 'BYE', 'DNP', 5.2, 3.8, 'DNP', 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.4, 19.1, 12.9, 10.8, 'DNP', 'DNP', 'BYE', 'DNP', 13.2, 11.9, 'DNP', 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116389.png",
    "name": "Samaje Perine",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 5.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 22,
    "avg_fp2": 4.65,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.9,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Samaje Perine did not play an offensive snap in Week 18 against the Browns.\n",
    "report": "",
    "analysis": "Perine was active for the game but completely uninvolved on offense. Presumably, the Bengals were looking to preserve his health for the playoffs. However, Perine did oddly play on 15 special teams snaps. Even still, his lack of offensive work today is probably a positive sign for how the Bengals value him as a backup to Joe Mixon.\n",
    "timestamp": "2022-01-09 10:19 PM",
    "source": "Mike Clay on Twitter",
    "game_day_logo": "",
    "week01": 3.4,
    "week02": 0.0,
    "week03": 1.2,
    "week04": 2.7,
    "week05": 16.3,
    "week06": "DNP",
    "week07": 14.0,
    "week08": 2.6,
    "week09": 4.7,
    "week10": "BYE",
    "week11": 3.6,
    "week12": 2.0,
    "week13": 5.1,
    "week14": 5.3,
    "week15": 5.3,
    "week16": 1.6,
    "week17": 1.9,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 0.0, 1.2, 2.7, 16.3, 'DNP', 14.0, 2.6, 4.7, 'BYE', 3.6, 2.0, 5.1, 5.3, 5.3, 1.6, 1.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.4, 2.5, 5.3, 4.1, 'DNP', 4.9, 6.5, 4.3, 'BYE', 4.8, 5.1, 6.0, 6.0, 5.6, 5.3, 6.1, 7.4, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.0, 1.2, 10.1, 0.0, 'DNP', 3.8, 3.5, 3.2, 'BYE', 4.8, 2.5, 7.3, 3.8, 5.4, 2.8, 1.7, 3.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.8, 9.1, 18.8, 5.5, 'DNP', 10.4, 15.1, 11.6, 'BYE', 9.2, 10.4, 13.3, 8.5, 9.0, 5.7, 4.7, 5.2, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 5.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 24,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.58,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cam Akers had five rushes for three yards in the Rams' Week 18 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Sony Michel maintained his workhorse duties in the LA backfield while Akers made his season debut. His return from an August Achilles injury is nothing short of extraordinary, and one would expect the Rams to ease him back into the offense following his five-month recovery. Akers could see his workload ramped up later in the postseason if the Rams are able to overcome their late-season doldrums.\u00a0\n",
    "timestamp": "2022-01-10 02:48 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": 2.8,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.3, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.2, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.9, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3928925.png",
    "name": "JaMycal Hasty",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 5.6,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 3.45,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 16.16,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "JaMycal Hasty did not have a rushing attempt in the 49ers' Week 18 win against the Rams, adding two catches for 21 yards.\u00a0\n",
    "report": "",
    "analysis": "Hasty was the Niners' pass-catching back while Elijah Mitchell saw 21 rushes against LA. Hasty has little fantasy appeal unless the 49ers fall way behind and have to abandon their preferred run-heavy approach.\u00a0\n",
    "timestamp": "2022-01-10 03:13 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.3,
    "week02": 7.9,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 3.1,
    "week08": 4.3,
    "week09": 2.8,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 0.0,
    "week14": 2.5,
    "week15": 0.1,
    "week16": 4.4,
    "week17": 1.1,
    "week18": 3.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.3, 7.9, 'DNP', 'DNP', 'DNP', 'BYE', 3.1, 4.3, 2.8, 'DNP', 'DNP', 'DNP', 0.0, 2.5, 0.1, 4.4, 1.1, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 4.5, 'DNP', 'DNP', 'DNP', 'BYE', 3.7, 7.2, 4.5, 'DNP', 'DNP', 'DNP', 6.2, 5.0, 5.2, 4.7, 4.4, 3.1, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 2.5, 'DNP', 'DNP', 'DNP', 'BYE', 1.3, 1.8, 2.0, 'DNP', 'DNP', 'DNP', 1.1, 3.0, 3.0, 0.2, 1.0, 1.5, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 6.8, 'DNP', 'DNP', 'DNP', 'BYE', 7.3, 5.4, 6.0, 'DNP', 'DNP', 'DNP', 7.3, 5.8, 7.5, 6.0, 5.2, 5.9, 9.2]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 15.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 11.29,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Amari Cooper caught 5-of-7 targets for 79 yards in the Cowboys' Week 18 win against the Eagles.\n",
    "report": "",
    "analysis": "The Cowboys played Cooper and most of the starters into the fourth quarter of the blowout win. Cooper missed an easy touchdown on a sideline pass to the end-zone where he didn't complete the catch and ended up leading the team in targets with\u00a0Michael Gallup (knee, IR) out.\u00a0This was the third straight week he's had at least 70 yards or a TD after asking for more third-down and red-zone looks. Cooper had a disaster second half to the regular season, missing two weeks on the COVID list and playing limited snaps in his Week 13 return, but finished with touchdowns in three of the last five games. With Gallup\u00a0out of the picture, Cooper and CeeDee Lamb should pace Dallas in postseason targets.\u00a0\n",
    "timestamp": "2022-01-09 05:30 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 32.4,
    "week02": 3.9,
    "week03": 4.1,
    "week04": 14.4,
    "week05": 13.5,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 22.2,
    "week09": 4.7,
    "week10": 7.1,
    "week11": "DNP",
    "week12": "DNP",
    "week13": 5.1,
    "week14": 13.6,
    "week15": 1.8,
    "week16": 18.0,
    "week17": 9.3,
    "week18": 10.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [32.4, 3.9, 4.1, 14.4, 13.5, 8.0, 'BYE', 22.2, 4.7, 7.1, 'DNP', 'DNP', 5.1, 13.6, 1.8, 18.0, 9.3, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 17.3, 10.4, 12.0, 9.3, 10.2, 'BYE', 9.4, 7.9, 12.8, 'DNP', 'DNP', 7.1, 7.6, 11.7, 9.2, 12.1, 9.9, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 2.2, 0.2, 0.6, 1.9, 16.0, 'BYE', 10.0, 8.1, 6.3, 'DNP', 'DNP', 2.5, 4.9, 4.9, 2.8, 4.5, 2.4, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 20.2, 5.4, 11.4, 13.1, 24.7, 'BYE', 15.6, 19.8, 15.9, 'DNP', 'DNP', 15.0, 12.4, 15.3, 11.5, 13.7, 10.8, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 13.9,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 10,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.36,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stefon Diggs caught 9-of-14 targets for 81 yards and a touchdown in Buffalo's Week 18 win over the Jets.\n",
    "report": "",
    "analysis": "Diggs actually opened the game\u00a0with a 10-yard touchdown catch from Josh Allen on Buffalo's first drive. There were multiple opportunities for a few more chunk gains throughout the afternoon but gusts up to 30 mph had other ideas. Diggs' 14 targets still tied Gabriel Davis' total for the team lead, seeing 13 targets for the third time in his last five games. Diggs and the Bills will return as hosts in the Wild Card round.\n",
    "timestamp": "2022-01-10 04:27 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.4,
    "week02": 14.0,
    "week03": 9.2,
    "week04": 14.9,
    "week05": 7.9,
    "week06": 19.4,
    "week07": "BYE",
    "week08": 12.5,
    "week09": 11.5,
    "week10": 26.2,
    "week11": 16.3,
    "week12": 16.9,
    "week13": 7.1,
    "week14": 10.9,
    "week15": 11.5,
    "week16": 18.0,
    "week17": 7.7,
    "week18": 18.6,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 14.0, 9.2, 14.9, 7.9, 19.4, 'BYE', 12.5, 11.5, 26.2, 16.3, 16.9, 7.1, 10.9, 11.5, 18.0, 7.7, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.4, 15.2, 10.8, 12.2, 13.8, 'BYE', 14.0, 20.5, 14.6, 14.7, 11.3, 12.0, 16.6, 8.5, 8.8, 12.8, 9.9, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.4, 6.4, 10.2, 7.8, 15.0, 'BYE', 14.7, 13.7, 11.8, 9.5, 11.8, 12.0, 6.9, 9.4, 7.2, 9.4, 9.9, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 20.2, 14.7, 18.3, 17.6, 18.7, 'BYE', 21.2, 23.2, 21.4, 14.9, 18.6, 18.0, 15.3, 15.8, 15.7, 15.8, 14.7, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 13.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 18.23,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 29.87,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Deebo Samuel caught 4-of-6 targets for 94 yards and a touchdown in the 49ers' Week 18 win against the Rams, adding eight rushes for 45 yards and a touchdown.\n",
    "report": "",
    "analysis": "Samuel, for good measure, threw a 24-yard touchdown in another dominant effort. Visibly exhausted in the second half while the 49ers used him in every possible capacity, Deebo had a huge 43-yard grab in the Niners' fourth quarter comeback after falling behind 17-0 in the first half. He's been a nightmare for opposing defenses when catching the ball in the open field; that continued on Sunday against LA. Samuel will be the centerpiece of the 49ers offense next week in their playoff game against Dallas. Look for the Niners to use Deebo near the line of scrimmage against the hyper-aggressive Cowboys pass rush.\u00a0\n",
    "timestamp": "2022-01-10 01:20 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.4,
    "week02": 13.1,
    "week03": 7.7,
    "week04": 31.7,
    "week05": 14.6,
    "week06": "BYE",
    "week07": 17.5,
    "week08": 20.1,
    "week09": 8.8,
    "week10": 27.8,
    "week11": 15.9,
    "week12": 20.3,
    "week13": "DNP",
    "week14": 12.4,
    "week15": 16.9,
    "week16": 23.6,
    "week17": 15.7,
    "week18": 26.96,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.4, 13.1, 7.7, 31.7, 14.6, 'BYE', 17.5, 20.1, 8.8, 27.8, 15.9, 20.3, 'DNP', 12.4, 16.9, 23.6, 15.7, 26.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 14.5, 12.9, 9.5, 19.4, 'BYE', 19.7, 10.7, 14.4, 10.2, 18.4, 14.4, 'DNP', 15.0, 13.3, 17.1, 11.0, 11.0, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.3, 2.4, 9.5, 11.1, 'BYE', 7.4, 8.4, 9.6, 8.1, 15.2, 11.3, 'DNP', 6.9, 7.0, 5.8, 6.0, 13.2, 13.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.0, 8.7, 15.9, 17.1, 'BYE', 13.2, 18.0, 19.5, 15.9, 24.9, 20.7, 'DNP', 19.4, 15.5, 21.4, 19.0, 19.3, 26.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 13.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 16,
    "avg_fp2": 14.15,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Diontae Johnson (COVID-19) is active for Week 18 against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Steelers declared T Dan Moore Jr., QB Dwayne Haskins, ILB Tegray Scales, P Corliss Waitman, DT Carlos Davis, and RB Anthony McFarland inactive against the Ravens. Activated from the COVID-19 list on Friday, Johnson will suit up in what is likely his last game with Ben Roethlisberger at QB. Johnson went off for 105 yards and two touchdowns against Baltimore in Week 13.\u00a0\n",
    "timestamp": "2022-01-09 04:46 PM",
    "source": "Allen Saunders on Twitter ",
    "game_day_logo": "",
    "week01": 12.1,
    "week02": 15.0,
    "week03": "DNP",
    "week04": 19.7,
    "week05": 14.2,
    "week06": 14.1,
    "week07": "BYE",
    "week08": 12.8,
    "week09": 9.2,
    "week10": 9.8,
    "week11": 19.6,
    "week12": 14.0,
    "week13": 26.5,
    "week14": 12.8,
    "week15": 7.3,
    "week16": 12.1,
    "week17": 13.1,
    "week18": 8.6,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 15.0, 'DNP', 19.7, 14.2, 14.1, 'BYE', 12.8, 9.2, 9.8, 19.6, 14.0, 26.5, 12.8, 7.3, 12.1, 13.1, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 12.8, 'DNP', 13.6, 12.1, 14.7, 'BYE', 9.8, 15.9, 7.7, 10.5, 10.3, 9.0, 15.3, 19.1, 9.6, 12.0, 12.8, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 3.3, 'DNP', 5.3, 10.0, 7.6, 'BYE', 13.4, 7.0, 9.0, 4.3, 7.3, 10.0, 6.1, 9.9, 10.0, 8.1, 11.4, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 17.4, 'DNP', 9.9, 14.6, 13.5, 'BYE', 20.3, 14.1, 15.7, 12.3, 16.9, 17.0, 16.0, 19.2, 18.9, 16.4, 21.8, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059722.png",
    "name": "Zay Jones",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 13.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 4.83,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Zay Jones caught 5-of-8 targets 27 yards in the Raiders' Week 18 win over the Chargers.\n",
    "report": "",
    "analysis": "Jones has become a thing in the final months of the season, earning 54 targets over his previous seven games. He hasn't done a ton with the extra volume, topping 60 yards twice with zero touchdowns in the entire stretch. Jones will be a risky option in even the largest of DFS tournaments for the Wild Card round.\n",
    "timestamp": "2022-01-10 06:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.6,
    "week02": 0.0,
    "week03": 2.0,
    "week04": 1.0,
    "week05": 1.1,
    "week06": 0.0,
    "week07": 4.8,
    "week08": "BYE",
    "week09": 2.5,
    "week10": 2.7,
    "week11": 2.5,
    "week12": 8.8,
    "week13": 3.6,
    "week14": 3.0,
    "week15": 9.7,
    "week16": 8.0,
    "week17": 15.9,
    "week18": 5.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.6, 0.0, 2.0, 1.0, 1.1, 0.0, 4.8, 'BYE', 2.5, 2.7, 2.5, 8.8, 3.6, 3.0, 9.7, 8.0, 15.9, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 2.3, 1.5, 0.9, 1.9, 0.7, 0.5, 'BYE', 3.7, 3.0, 2.8, 3.3, 5.1, 2.5, 4.5, 4.0, 4.5, 7.1, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 4.2, 1.6, 1.9, 0.0, 1.8, 'BYE', 0.7, 2.2, 1.9, 2.9, 2.0, 1.2, 1.1, 3.8, 4.3, 0.0, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.0, 7.7, 5.3, 4.3, 3.6, 6.1, 'BYE', 5.1, 4.3, 3.6, 4.6, 3.7, 3.3, 3.7, 8.3, 8.2, 6.4, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 13.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 13.44,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 22.38,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans (hamstring) was upgraded to a full participant in Thursday's practice.\n",
    "report": "",
    "analysis": "Evans projects to be one of the best fantasy wideouts of the playoffs given the absences of Chris Godwin and Antonio Brown. Even against a tough Eagles defense, he'll be hard to avoid on Sunday slates. Evans might be the overall WR1 in full playoff leagues.\u00a0\n",
    "timestamp": "2022-01-13 11:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.9,
    "week02": 22.0,
    "week03": 14.6,
    "week04": 11.0,
    "week05": 26.3,
    "week06": 3.7,
    "week07": 28.6,
    "week08": 11.8,
    "week09": "BYE",
    "week10": 13.2,
    "week11": 17.3,
    "week12": 3.1,
    "week13": 13.4,
    "week14": 18.1,
    "week15": 1.9,
    "week16": "DNP",
    "week17": 12.7,
    "week18": 23.9,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 22.0, 14.6, 11.0, 26.3, 3.7, 28.6, 11.8, 'BYE', 13.2, 17.3, 3.1, 13.4, 18.1, 1.9, 'DNP', 12.7, 23.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 9.9, 10.2, 17.8, 10.8, 11.2, 13.1, 12.4, 'BYE', 14.8, 10.8, 13.7, 12.2, 10.2, 8.8, 'DNP', 9.3, 15.5, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.2, 5.9, 8.7, 9.2, 6.8, 6.2, 7.4, 'BYE', 10.6, 9.6, 8.9, 6.3, 7.5, 9.6, 'DNP', 12.1, 8.3, 13.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 21.9, 15.5, 19.3, 20.8, 14.1, 22.6, 26.9, 'BYE', 22.6, 17.6, 17.2, 16.9, 13.8, 20.4, 'DNP', 27.9, 21.4, 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 13.2,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$10000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp caught 7-of-7 targets for 118 yards and a touchdown in the Rams' Week 18 loss to the 49ers, adding one rush for 18 yards.\u00a0\n",
    "report": "",
    "analysis": "Despite seeing only a couple second half targets, Kupp did it again, completing his day with a fourth quarter touchdown on a gorgeous back-of-the-end-zone throw from his breakfast buddy, Matthew Stafford. He finishes the regular season with 1,947 yards and 16 scores. Kupp's unstoppable connection with Stafford could carry over into the playoffs against a Cardinals defense that gave up 12 catches for 123 yards and a touchdown to Kupp in Week 14. When the Rams have to have it, the ball has one destination: Kupp.\u00a0\n",
    "timestamp": "2022-01-10 02:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 32.3,
    "week03": 26.1,
    "week04": 8.9,
    "week05": 12.7,
    "week06": 29.5,
    "week07": 32.6,
    "week08": 21.0,
    "week09": 15.0,
    "week10": 17.7,
    "week11": "BYE",
    "week12": 15.1,
    "week13": 22.9,
    "week14": 24.8,
    "week15": 30.2,
    "week16": 16.3,
    "week17": 18.5,
    "week18": 23.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0, 17.7, 'BYE', 15.1, 22.9, 24.8, 30.2, 16.3, 18.5, 23.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4, 17.7, 21.1, 17.5, 'BYE', 18.7, 16.6, 16.7, 20.3, 14.9, 25.1, 18.8, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2, 23.2, 16.5, 18.7, 'BYE', 10.8, 10.9, 7.1, 22.8, 13.3, 14.3, 14.4, 14.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6, 27.3, 21.2, 24.8, 'BYE', 18.8, 18.5, 16.4, 28.8, 21.4, 20.0, 17.5, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 12.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 16.28,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.11,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Ja'Marr Chase caught 2-of-4 targets for 26 yards in the Bengals' Week 18 loss to the Browns.\n",
    "report": "",
    "analysis": "Chase caught a two-yard pass on the opening play of the game. Then on the first play of the Bengals' second drive, he caught a short pass and burst up the sideline for 24 yards, setting the Bengals franchise receiving record in the process. Having passed Chad Johnson in the record books, Chase's day was done with over nine minutes left in the 1st quarter. Chase will be entering the playoffs at full strength, after showing off a shockingly high ceiling in the regular season. He will be one of the highest upside plays in the wild card round.\n",
    "timestamp": "2022-01-09 10:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 12.4,
    "week03": 20.5,
    "week04": 10.7,
    "week05": 24.9,
    "week06": 11.7,
    "week07": 30.1,
    "week08": 11.6,
    "week09": 5.9,
    "week10": "BYE",
    "week11": 11.5,
    "week12": 5.4,
    "week13": 7.7,
    "week14": 22.8,
    "week15": 0.8,
    "week16": 16.0,
    "week17": 50.1,
    "week18": 3.6,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9, 11.7, 30.1, 11.6, 5.9, 'BYE', 11.5, 5.4, 7.7, 22.8, 0.8, 16.0, 50.1, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3, 6.0, 14.3, 15.8, 'BYE', 19.3, 16.8, 10.3, 9.8, 9.1, 12.3, 10.1, 12.2, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8, 11.1, 11.7, 12.4, 'BYE', 14.5, 8.9, 4.3, 4.6, 8.2, 4.7, 4.4, 3.4, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9, 22.7, 27.0, 26.8, 'BYE', 21.1, 16.0, 17.2, 18.4, 24.0, 22.0, 22.0, 29.5, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 10.5,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 8,
    "avg_fp2": 10.24,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Christian Kirk caught 2-of-3 targets for 43 yards in the Cardinals' Week 18 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "35 of Kirk's yards came on a third quarter grab where a besieged Kyler Murray escaped the pocket and made a perfect throw on the run. Other than that, it was crickets for Kirk in a passing attack that continues to look out of sorts in the four games since it lost DeAndre Hopkins. Now they have to deal with Jalen Ramsey's Rams in the Wild Card Round. As for the regular season, impending free agent Kirk closes the book with a new career-high 982 yards. Not a realistic candidate for the franchise tag, Kirk will be an intriguing free agent case if the sides don't agree to an extension in the next three months.\u00a0\n",
    "timestamp": "2022-01-10 03:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.5,
    "week02": 8.0,
    "week03": 13.9,
    "week04": 1.0,
    "week05": 7.5,
    "week06": 16.0,
    "week07": 13.0,
    "week08": 6.6,
    "week09": 13.42,
    "week10": 9.3,
    "week11": 3.5,
    "week12": "BYE",
    "week13": 0.9,
    "week14": 10.1,
    "week15": 19.9,
    "week16": 8.3,
    "week17": 10.9,
    "week18": 5.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 8.0, 13.9, 1.0, 7.5, 16.0, 13.0, 6.6, 13.42, 9.3, 3.5, 'BYE', 0.9, 10.1, 19.9, 8.3, 10.9, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 10.8, 13.0, 8.7, 6.7, 2.9, 3.5, 7.6, 10.5, 5.8, 8.2, 'BYE', 2.7, 4.7, 9.6, 11.2, 8.0, 13.8, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 6.6, 5.6, 8.0, 6.8, 7.5, 4.9, 7.2, 8.4, 5.4, 2.9, 'BYE', 6.0, 0.0, 2.5, 4.9, 2.4, 3.1, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 14.4, 10.8, 13.6, 12.3, 13.5, 9.7, 12.3, 13.2, 12.3, 10.2, 'BYE', 11.5, 7.7, 7.2, 11.1, 8.0, 10.5, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 10.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 2,
    "avg_fp2": 15.02,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 28.3,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Heel",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill (heel) is expected to play in the Wild Card round against the Steelers.\n",
    "report": "",
    "analysis": "",
    "timestamp": "2022-01-14 07:25 PM",
    "source": "Herbie Teope on Twitter",
    "game_day_logo": "",
    "week01": 31.6,
    "week02": 4.4,
    "week03": 7.2,
    "week04": 42.1,
    "week05": 11.3,
    "week06": 18.1,
    "week07": 9.7,
    "week08": 21.4,
    "week09": 5.3,
    "week10": 24.0,
    "week11": 15.5,
    "week12": "BYE",
    "week13": 3.2,
    "week14": 9.6,
    "week15": 26.8,
    "week16": 2.9,
    "week17": 7.2,
    "week18": 0.7,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.6, 4.4, 7.2, 42.1, 11.3, 18.1, 9.7, 21.4, 5.3, 24.0, 15.5, 'BYE', 3.2, 9.6, 26.8, 2.9, 7.2, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5, 23.4, 15.6, 16.1, 15.3, 19.3, 'BYE', 11.5, 18.3, 10.8, 13.8, 14.9, 15.3, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2, 14.5, 9.6, 10.6, 9.5, 16.9, 'BYE', 11.7, 6.4, 8.0, 6.1, 7.8, 7.8, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7, 24.4, 22.7, 18.6, 19.4, 21.2, 'BYE', 23.3, 21.8, 22.3, 14.9, 20.9, 17.2, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 9.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 29.87,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Brandon\u00a0Aiyuk caught 6-of-7 targets for 107 yards in the 49ers' Week 18 win against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Aiyuk finishes the season strong. The second-year wideout -- once firmly doghoused by Kyle Shanahan -- had ten receptions for 201 yards in the 49ers' past couple games. Aiyuk profiles as the Niners' top traditional receiver while Deebo Samuel is the do-it-all focal point of the offense. Against the Rams in Week 18, he benefited from negative second half game script and managed to get open for a few hefty gains as Jimmy Garoppolo hit his stride in the third quarter. Aiyuk will be a WR3 option next week against the Cowboys.\u00a0\n",
    "timestamp": "2022-01-10 02:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.1,
    "week03": 12.5,
    "week04": 2.0,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.4,
    "week08": 8.5,
    "week09": 15.7,
    "week10": 4.1,
    "week11": 18.0,
    "week12": 11.0,
    "week13": 7.0,
    "week14": 15.6,
    "week15": 4.1,
    "week16": 12.0,
    "week17": 11.4,
    "week18": 13.7,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.1, 12.5, 2.0, 4.2, 'BYE', 1.4, 8.5, 15.7, 4.1, 18.0, 11.0, 7.0, 15.6, 4.1, 12.0, 11.4, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 1.6, 3.5, 4.0, 9.2, 'BYE', 3.2, 2.5, 2.9, 5.2, 6.7, 7.5, 8.0, 5.8, 8.6, 8.7, 8.1, 6.4, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 6.9, 9.0, 12.6, 6.2, 'BYE', 1.8, 5.2, 8.2, 2.6, 1.4, 6.0, 6.5, 5.9, 7.6, 8.0, 4.7, 7.6, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.4, 18.9, 14.4, 10.0, 'BYE', 7.9, 18.2, 19.0, 11.1, 9.5, 14.4, 16.1, 16.1, 16.9, 18.3, 13.7, 18.6, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 9.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 8.62,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.26,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thigh",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jakobi Meyers is officially listed as questionable for Saturday's Wild Card game against the Bills.\n",
    "report": "",
    "analysis": "Meyers has played through the injury for the last two weeks, so it would seem likely that he's on the optimistic side of questionable. The Bills have a strong pass defense, and Meyers had six catches for 59 yards against them in Week 16. (He didn't catch any passes against them in Week 13, but the Patriots only threw four times in that game.)\u00a0\n",
    "timestamp": "2022-01-13 11:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 5.8,
    "week03": 13.9,
    "week04": 12.8,
    "week05": 7.6,
    "week06": 8.9,
    "week07": 6.9,
    "week08": 7.7,
    "week09": 1.3,
    "week10": 12.9,
    "week11": 5.9,
    "week12": 12.3,
    "week13": 0.0,
    "week14": "BYE",
    "week15": 8.3,
    "week16": 8.9,
    "week17": 17.3,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 5.8, 13.9, 12.8, 7.6, 8.9, 6.9, 7.7, 1.3, 12.9, 5.9, 12.3, 0.0, 'BYE', 8.3, 8.9, 17.3, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.0, 6.5, 11.0, 11.6, 15.1, 9.3, 6.2, 6.8, 5.8, 11.3, 14.6, 6.1, 'BYE', 8.3, 9.3, 12.3, 10.4, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.1, 4.2, 7.2, 10.9, 9.0, 6.1, 4.0, 4.2, 1.8, 3.2, 4.3, 2.8, 'BYE', 2.7, 3.0, 4.9, 8.1, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 13.4, 10.0, 10.4, 14.7, 14.1, 9.5, 6.4, 7.4, 6.0, 8.9, 9.1, 8.2, 'BYE', 9.6, 9.5, 8.3, 12.4, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 9.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Odell\u00a0Beckham caught 2-of-4 targets for 18 yards in the Rams' Week 18 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "OBJ was invisible in the team's most important game of the year until the final play of the game, when Matthew Stafford underthrew Beckham on a deep sideline shot and the Niners made a game-ending interception. OBJ, who appeared to run the wrong route on the first play of the Rams' only overtime drive, eclipsed 40 receiving yards twice in his seven regular season games with LA. The Rams will hope Beckham can emerge as a viable second option behind Cooper Kupp in the postseason.\u00a0\n",
    "timestamp": "2022-01-10 01:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.2,
    "week04": 4.1,
    "week05": 3.0,
    "week06": 10.4,
    "week07": 3.3,
    "week08": 1.1,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 16.6,
    "week13": 9.8,
    "week14": 16.7,
    "week15": 1.2,
    "week16": 11.7,
    "week17": 12.4,
    "week18": 2.8,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0, 10.4, 3.3, 1.1, 'DNP', 'DNP', 'BYE', 16.6, 9.8, 16.7, 1.2, 11.7, 12.4, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4, 7.9, 6.0, 'DNP', 'DNP', 'BYE', 5.1, 4.0, 4.8, 6.8, 5.5, 15.2, 9.2, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0, 9.0, 6.5, 'DNP', 'DNP', 'BYE', 9.2, 12.6, 10.9, 8.9, 10.9, 8.2, 12.2, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8, 15.1, 13.4, 'DNP', 'DNP', 'BYE', 16.3, 20.6, 17.5, 15.5, 18.6, 15.5, 17.1, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 9.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 12.04,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Hunter Renfrow caught 4-of-5 targets for 13 yards and two touchdowns in the Raiders' Week 18 win over the Chargers.\n",
    "report": "",
    "analysis": "Renfrow's usage continued to trend downward. Darren Waller saw nine targets while Zay Jones earned eight looks. Jones has out-targeted Renfrow in four consecutive games now. With Waller back in the lineup and Jones taking more targets away from Renfrow, he will need to keep running hot on touchdowns to produce usable fantasy numbers. He's a risky option in DFS contests and playoff leagues heading into the Raiders' Wild Card matchup with the Bengals.\n",
    "timestamp": "2022-01-10 06:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 8.2,
    "week03": 16.2,
    "week04": 13.5,
    "week05": 8.6,
    "week06": 5.1,
    "week07": 9.3,
    "week08": "BYE",
    "week09": 14.4,
    "week10": 14.1,
    "week11": 5.5,
    "week12": 17.6,
    "week13": 14.7,
    "week14": 22.2,
    "week15": 4.7,
    "week16": 11.5,
    "week17": 17.1,
    "week18": 14.9,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 8.2, 16.2, 13.5, 8.6, 5.1, 9.3, 'BYE', 14.4, 14.1, 5.5, 17.6, 14.7, 22.2, 4.7, 11.5, 17.1, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 5.6, 5.9, 4.6, 8.7, 5.2, 4.1, 'BYE', 8.6, 8.5, 6.0, 7.7, 13.0, 7.9, 11.3, 6.9, 12.2, 13.5, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.7, 1.1, 5.1, 9.0, 8.6, 5.0, 'BYE', 5.4, 3.1, 7.4, 5.4, 7.5, 7.5, 8.7, 3.4, 5.4, 3.1, 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.4, 10.8, 14.4, 13.2, 14.8, 12.1, 'BYE', 9.5, 8.8, 14.4, 9.9, 13.5, 13.9, 14.9, 9.4, 10.7, 8.6, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 8.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 16,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Chase Claypool caught 3-of-7 targets for 37 yards and a touchdown in the Steelers' Week 18 win against the Ravens, adding three rushes for 33 yards.\u00a0\n",
    "report": "",
    "analysis": "Claypool reeled in a short touchdown in the fourth quarter to complete a second half Steelers comeback in their push for a postseason berth. The Steelers got Claypool involved as a rusher, but he remained well behind Diontae Johnson in the pass-catching pecking order. With a quarterback unable to hit downfield passes with any semblance of consistency, Claypool will be something of a boom-bust fantasy option in postseason fantasy leagues.\u00a0\n",
    "timestamp": "2022-01-09 09:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.5,
    "week02": 8.2,
    "week03": 14.1,
    "week04": "DNP",
    "week05": 21.5,
    "week06": 2.7,
    "week07": "BYE",
    "week08": 8.1,
    "week09": 5.8,
    "week10": "DNP",
    "week11": 11.9,
    "week12": 9.7,
    "week13": 6.4,
    "week14": 13.5,
    "week15": 1.9,
    "week16": 6.1,
    "week17": 3.2,
    "week18": 15.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 8.2, 14.1, 'DNP', 21.5, 2.7, 'BYE', 8.1, 5.8, 'DNP', 11.9, 9.7, 6.4, 13.5, 1.9, 6.1, 3.2, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 6.7, 10.9, 'DNP', 9.0, 10.2, 'BYE', 3.6, 9.5, 'DNP', 3.8, 6.4, 6.6, 8.2, 12.5, 6.6, 6.5, 8.1, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.6, 8.0, 'DNP', 4.5, 7.6, 'BYE', 4.9, 5.8, 'DNP', 3.5, 9.9, 13.9, 5.3, 8.8, 5.3, 3.1, 5.8, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.8, 22.9, 11.2, 'DNP', 8.8, 11.1, 'BYE', 8.7, 10.6, 'DNP', 8.7, 16.2, 20.0, 11.2, 11.8, 14.9, 11.5, 16.1, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 8.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 12.52,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "CeeDee Lamb caught both of his targets for 45 yards in the Cowboys' Week 18 win over the Eagles.\n",
    "report": "",
    "analysis": "Lamb and Amari Cooper took a backseat to Cedrick Wilson, who led the team in receiving and scored two of Dak Prescott's five touchdowns. Lamb,\u00a0the Cowboys' lone 1,000-yard receiver,\u00a0ends the season with five straight games under\u00a070 yards. Dallas had been playing Lamb behind Michael Gallup (knee, IR) in its 12 personnel, but with\u00a0Gallup out,\u00a0Lamb has an every-down role and should see a larger target share in the postseason.\n",
    "timestamp": "2022-01-09 05:27 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.9,
    "week02": 13.4,
    "week03": 8.0,
    "week04": 2.3,
    "week05": 16.8,
    "week06": 31.6,
    "week07": "BYE",
    "week08": 14.2,
    "week09": 3.3,
    "week10": 25.6,
    "week11": 2.9,
    "week12": "DNP",
    "week13": 15.7,
    "week14": 11.1,
    "week15": 8.0,
    "week16": 8.4,
    "week17": 6.6,
    "week18": 5.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.9, 13.4, 8.0, 2.3, 16.8, 31.6, 'BYE', 14.2, 3.3, 25.6, 2.9, 'DNP', 15.7, 11.1, 8.0, 8.4, 6.6, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.4, 7.3, 7.1, 5.9, 12.3, 'BYE', 12.9, 11.5, 9.4, 13.4, 'DNP', 16.7, 10.5, 15.9, 14.1, 15.8, 5.7, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 7.7, 0.0, 3.6, 2.6, 8.2, 'BYE', 19.2, 13.5, 4.2, 4.5, 'DNP', 7.5, 7.1, 3.1, 3.4, 4.3, 5.7, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 21.8, 10.6, 12.6, 14.3, 14.0, 'BYE', 25.0, 17.8, 13.4, 17.9, 'DNP', 14.9, 20.0, 10.7, 11.9, 17.0, 11.4, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 7.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.11,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Speaking Thursday, Bengals coach Zac Taylor said\u00a0Tee Higgins (foot) will be active for Saturday's Wild Card game against the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Taylor said Higgins' \"limited\" Wednesday session was purely precautionary. \"Maybe he took one or two less reps than normal.\" It's a sigh of relief for Joe Burrow and Bengals fans. Higgins went absolutely nuts down the stretch, with his 645 yards receiving after Week 12 the third most in the league.\u00a0\n",
    "timestamp": "2022-01-13 06:41 PM",
    "source": "Paul Dehner on Twitter ",
    "game_day_logo": "",
    "week01": 13.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.7,
    "week06": 5.9,
    "week07": 9.7,
    "week08": 11.7,
    "week09": 10.8,
    "week10": "BYE",
    "week11": 2.5,
    "week12": 20.4,
    "week13": 24.3,
    "week14": 13.9,
    "week15": 3.3,
    "week16": 37.4,
    "week17": 7.7,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7, 5.9, 9.7, 11.7, 10.8, 'BYE', 2.5, 20.4, 24.3, 13.9, 3.3, 37.4, 7.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7, 5.5, 8.8, 7.5, 'BYE', 11.3, 13.8, 7.6, 6.3, 7.7, 8.4, 6.2, 'DNP', 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7, 5.0, 2.7, 8.2, 'BYE', 4.6, 3.7, 5.2, 13.6, 6.5, 10.8, 7.3, 'DNP', 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5, 10.5, 7.0, 17.4, 'BYE', 10.4, 8.4, 9.3, 21.5, 14.0, 14.1, 17.4, 'DNP', 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png",
    "name": "DeVonta Smith",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 7.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 22,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "DeVonta Smith caught 3-of-4 targets for 41 yards in the Eagles' Week 18 loss to Dallas.\n",
    "report": "",
    "analysis": "The Eagles rested Smith, one of the few starters that played, after the first half. Smith led the Eagles with 104 targets and\u00a0closes the regular season with five touchdowns, finishing 84 yards shy of a 1,000-yard season while playing in one of the most run-heavy offenses. Even with the loss, the Eagles have a chance at the No. 6 seed if the 49ers lose to the Rams and the Saints win over the Falcons.\n",
    "timestamp": "2022-01-09 06:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.1,
    "week02": 2.6,
    "week03": 4.3,
    "week04": 15.7,
    "week05": 11.2,
    "week06": 4.1,
    "week07": 8.6,
    "week08": 2.0,
    "week09": 20.1,
    "week10": 20.6,
    "week11": 8.1,
    "week12": 3.2,
    "week13": 2.5,
    "week14": "BYE",
    "week15": 5.5,
    "week16": 16.5,
    "week17": 6.9,
    "week18": 5.6,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.1, 2.6, 4.3, 15.7, 11.2, 4.1, 8.6, 2.0, 20.1, 20.6, 8.1, 3.2, 2.5, 'BYE', 5.5, 16.5, 6.9, 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 15.0, 12.4, 9.0, 11.2, 9.7, 16.2, 15.4, 7.3, 4.2, 11.1, 10.5, 9.7, 'BYE', 8.8, 4.7, 9.8, 8.0, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 5.8, 4.1, 2.4, 4.6, 6.0, 4.2, 4.5, 4.2, 6.1, 5.2, 2.5, 3.0, 'BYE', 2.8, 1.7, 1.2, 2.7, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 23.8, 19.5, 15.3, 19.2, 22.2, 13.9, 13.1, 14.2, 16.0, 17.7, 15.3, 14.2, 'BYE', 13.4, 12.2, 12.6, 15.0, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png",
    "name": "Van Jefferson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 7.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Van Jefferson caught 2-of-3 targets for 31 yards in the Rams' Week 18 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Nearly all of Jefferson's production came on a 24-yard reception over the middle of the field in the third quarter. He missed some time in the first half after a vicious helmet-to-helmet hit on a seven-yard grab. Jefferson has been (and will continue to be) a volatile fantasy producer with an air yards per target of 14.7 since Week 12 -- the highest among Rams pass catchers by a long shot. His target volume could take a hit if the Rams continue leaning toward a more run-heavy approach to hide Matthew Stafford's mistake-prone recent play.\u00a0\n",
    "timestamp": "2022-01-10 02:36 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.0,
    "week02": 1.9,
    "week03": 6.2,
    "week04": 18.0,
    "week05": 2.1,
    "week06": 3.4,
    "week07": 12.3,
    "week08": 10.3,
    "week09": 5.6,
    "week10": 6.9,
    "week11": "BYE",
    "week12": 16.8,
    "week13": 13.1,
    "week14": 13.8,
    "week15": 4.3,
    "week16": 1.1,
    "week17": 8.3,
    "week18": 4.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 1.9, 6.2, 18.0, 2.1, 3.4, 12.3, 10.3, 5.6, 6.9, 'BYE', 16.8, 13.1, 13.8, 4.3, 1.1, 8.3, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.4, 5.5, 5.6, 5.9, 6.6, 2.8, 5.2, 8.1, 6.1, 'BYE', 9.7, 7.1, 7.0, 10.4, 7.9, 9.0, 6.9, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 1.7, 1.7, 0.0, 0.4, 1.3, 6.1, 9.4, 'BYE', 2.6, 8.6, 14.2, 9.0, 6.8, 4.6, 8.3, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 11.8, 4.0, 5.4, 3.9, 7.6, 6.0, 8.2, 11.6, 13.1, 'BYE', 9.0, 18.0, 17.5, 14.6, 9.2, 7.3, 13.0, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2310331.png",
    "name": "Tyler Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 3.08,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 22.38,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tyler Johnson caught 5-of-7 targets for 22 yards in the Bucs' Week 18 win over the Panthers.\n",
    "report": "",
    "analysis": "Johnson's seven targets tied Mike Evans for second on the team, but Evans turned his looks into a big 6-89-2 line while Rob Gronkowski turned 10 targets into a 7-137 day. Evans and Gronk are going to have to carry the Bucs in the playoffs, with Johnson and Breshad Perriman playing ancillary roles.\n",
    "timestamp": "2022-01-10 01:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.0,
    "week03": 7.8,
    "week04": 0.0,
    "week05": 5.7,
    "week06": 0.0,
    "week07": 2.6,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 3.2,
    "week11": 1.3,
    "week12": 1.4,
    "week13": 1.0,
    "week14": 3.2,
    "week15": 6.1,
    "week16": 0.0,
    "week17": 7.0,
    "week18": 4.7,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 7.8, 0.0, 5.7, 0.0, 2.6, 9.0, 'BYE', 3.2, 1.3, 1.4, 1.0, 3.2, 6.1, 0.0, 7.0, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 0.2, 4.9, 3.1, 1.6, 1.9, 5.0, 5.6, 'BYE', 5.4, 2.9, 5.5, 4.9, 1.0, 3.9, 4.1, 1.9, 4.4, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.6, 2.8, 1.0, 1.0, 0.3, 0.3, 'BYE', 2.7, 0.3, 0.6, 1.0, 0.0, 0.8, 0.6, 2.5, 0.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.2, 5.1, 2.3, 5.8, 2.8, 2.1, 4.5, 3.8, 'BYE', 6.0, 4.1, 5.1, 5.8, 2.2, 4.6, 5.7, 5.6, 3.9, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13983.png",
    "name": "A.J. Green",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 7.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 8,
    "avg_fp2": 8.37,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "A.J. Green caught 4-of-9 targets for 23 yards in the Cardinals' Week 18 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Green limps into the postseason having caught just 12 balls for 194 yards in four games since DeAndre Hopkins landed on injured reserve with a knee injury. Not good enough, and one of the major reasons Kyler Murray has been forced to lock onto Zach Ertz. It's hard to get enthused about Green's Wild Card DFS prospects vs. the Rams.\u00a0\n",
    "timestamp": "2022-01-10 03:40 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.5,
    "week02": 11.9,
    "week03": 13.7,
    "week04": 15.2,
    "week05": 1.8,
    "week06": 16.4,
    "week07": 8.1,
    "week08": 7.5,
    "week09": "DNP",
    "week10": 0.9,
    "week11": 9.8,
    "week12": "BYE",
    "week13": 1.9,
    "week14": 13.7,
    "week15": 8.4,
    "week16": 3.8,
    "week17": 8.9,
    "week18": 4.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 11.9, 13.7, 15.2, 1.8, 16.4, 8.1, 7.5, 'DNP', 0.9, 9.8, 'BYE', 1.9, 13.7, 8.4, 3.8, 8.9, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 5.5, 5.1, 10.8, 7.1, 3.2, 4.4, 12.8, 'DNP', 6.7, 4.7, 'BYE', 5.7, 5.3, 19.7, 5.2, 4.3, 8.6, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.7, 4.1, 13.4, 8.6, 7.9, 5.5, 11.1, 'DNP', 9.2, 11.2, 'BYE', 6.0, 9.3, 2.7, 7.6, 10.5, 7.8, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 20.0, 15.3, 19.6, 15.3, 12.7, 13.1, 15.2, 'DNP', 15.0, 17.5, 'BYE', 13.0, 13.6, 9.3, 12.9, 16.1, 12.3, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241802.png",
    "name": "Jalen Reagor",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 6.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 22,
    "avg_fp2": 3.61,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Reagor caught 2-of-3 targets for 19 yards in Week 18 against Dallas.\n",
    "report": "",
    "analysis": "Reagor played deep into the second half despite the Eagles resting their starters. Even with the higher snap share and expanded role, Reagor was invisible, finishing behind Quez Watkins (7) and TE Tyree Jackson (5) in targets. Reagor took a step back despite improved quarterback play this season, getting held under 50 yards in 15-of-17 games\u00a0and posting a lower target share (12%) than his rookie year.\u00a0Reagor will take a 33/299/2 line into the Eagles' postseason.\n",
    "timestamp": "2022-01-09 06:45 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.9,
    "week02": 1.5,
    "week03": 7.8,
    "week04": 2.6,
    "week05": 3.9,
    "week06": 0.0,
    "week07": 9.5,
    "week08": 2.6,
    "week09": -0.1,
    "week10": 0.9,
    "week11": 0.4,
    "week12": 4.1,
    "week13": 1.2,
    "week14": "BYE",
    "week15": 7.2,
    "week16": 2.5,
    "week17": -0.3,
    "week18": 3.9,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.9, 1.5, 7.8, 2.6, 3.9, 0.0, 9.5, 2.6, -0.1, 0.9, 0.4, 4.1, 1.2, 'BYE', 7.2, 2.5, -0.3, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.8, 7.2, 6.5, 4.6, 4.3, 10.1, 7.5, 4.2, 2.3, 6.4, 3.4, 5.0, 'BYE', 3.7, 2.4, 3.5, 3.4, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 2.7, 3.7, 3.4, 3.7, 4.5, 4.8, 4.4, 6.0, 1.8, 1.9, 1.5, 'BYE', 8.9, 2.1, 0.9, 1.3, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 12.2, 8.6, 9.8, 9.3, 8.8, 10.1, 7.4, 5.8, 7.0, 8.7, 5.1, 8.2, 'BYE', 11.4, 9.1, 6.1, 8.5, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 5.25,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 22.38,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Breshad Perriman (hip) was limited in practice Wednesday.\n",
    "report": "",
    "analysis": "Injuries and a mid-game retirement have left the Bucs short-handed at receiver this year. Perriman signed with the team in November and has since moved into a starting role. He closed out the regular season with a 5/44 line on six targets. The limited status is likely nothing more than load management for one of the few remaining receivers with any experience in Tampa Bay.\n",
    "timestamp": "2022-01-12 10:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 1.0,
    "week14": 12.3,
    "week15": "DNP",
    "week16": "DNP",
    "week17": 5.1,
    "week18": 6.9,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.0, 12.3, 'DNP', 'DNP', 5.1, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 3.0, 2.6, 'DNP', 'DNP', 5.5, 2.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 9.0, 0.0, 'DNP', 'DNP', 18.6, 2.0, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 15.2, 5.0, 'DNP', 'DNP', 24.8, 9.1, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 6.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.11,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tyler Boyd was not targeted in Week 18 against the Browns.\u00a0\n",
    "report": "",
    "analysis": "Boyd was active against the Browns but was rested in anticipation of the playoffs. C.J. Uzomah and Samaje Perine were handled the same way. Of the Bengals' starting skill players, only Ja'Marr Chase saw any real game action. And Chase was pulled as soon as he set the Bengals' new single-season receiving record. Boyd will operate as the Bengals' WR3 in the playoffs.\n",
    "timestamp": "2022-01-10 05:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.7,
    "week02": 10.8,
    "week03": 11.6,
    "week04": 16.3,
    "week05": 4.4,
    "week06": 1.2,
    "week07": 5.9,
    "week08": 17.24,
    "week09": 1.6,
    "week10": "BYE",
    "week11": 9.3,
    "week12": 2.3,
    "week13": 11.0,
    "week14": 8.3,
    "week15": 18.1,
    "week16": 16.0,
    "week17": 11.6,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 10.8, 11.6, 16.3, 4.4, 1.2, 5.9, 17.24, 1.6, 'BYE', 9.3, 2.3, 11.0, 8.3, 18.1, 16.0, 11.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.2, 11.2, 7.1, 6.0, 5.2, 4.0, 6.7, 4.8, 'BYE', 7.5, 7.6, 4.5, 5.1, 5.5, 6.8, 4.4, 'DNP', 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.8, 13.8, 7.7, 13.0, 11.7, 6.3, 10.2, 10.8, 'BYE', 3.7, 6.6, 6.5, 7.9, 4.6, 5.3, 5.6, 'DNP', 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.5, 16.3, 12.2, 22.2, 16.9, 8.4, 15.1, 13.4, 'BYE', 7.9, 12.4, 13.1, 13.5, 10.7, 10.7, 12.7, 'DNP', 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036416.png",
    "name": "Byron Pringle",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 2,
    "avg_fp2": 6.11,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 28.3,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Byron Pringle caught 5-of-8 targets for 56 yards in Kansas City's Week 18 win over Denver.\n",
    "report": "",
    "analysis": "Pringle didn't appear to be on the same page with Mahomes on a few of the incompletions, and that hurt the Chiefs on a few of their offensive series. This was the most-targeted Pringle game all season, and he delivered underwhelming production. He'll be another lower-tier wideout that's hard to trust without a good matchup in playoff fantasy.\u00a0\n",
    "timestamp": "2022-01-09 01:21 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.1,
    "week02": 13.3,
    "week03": 2.2,
    "week04": 3.3,
    "week05": 6.1,
    "week06": 7.0,
    "week07": 9.8,
    "week08": 1.7,
    "week09": 0.0,
    "week10": 12.6,
    "week11": 4.2,
    "week12": "BYE",
    "week13": 1.9,
    "week14": 3.3,
    "week15": 3.7,
    "week16": 22.5,
    "week17": 5.0,
    "week18": 8.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 13.3, 2.2, 3.3, 6.1, 7.0, 9.8, 1.7, 0.0, 12.6, 4.2, 'BYE', 1.9, 3.3, 3.7, 22.5, 5.0, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.0, 2.0, 1.2, 0.7, 2.4, 4.0, 4.0, 2.9, 2.8, 2.3, 6.7, 'BYE', 4.0, 6.2, 5.0, 6.2, 4.8, 9.7, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.3, 0.0, 0.0, 0.0, 'BYE', 0.4, 0.0, 0.0, 0.0, 1.9, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 7.3, 7.5, 6.1, 8.4, 8.4, 15.1, 6.9, 8.1, 8.0, 8.4, 'BYE', 5.5, 8.2, 8.3, 8.2, 12.5, 10.4, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886598.png",
    "name": "Jauan Jennings",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.5,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 3.05,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 29.87,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jauan Jennings caught 6-of-7 targets for 94 yards and two touchdowns in the 49ers' Week 18 win against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Jennings, a Kyle Shanahan favorite for his blocking prowess, benefited from three quarters of negative game script that forced the 49ers out of their preferred run-heavy offense. Jennings tied for the team lead in targets and has an impressive 34-yard gain in the fourth quarter that set up a late touchdown for San Francisco. His extremely physical play is a perfect fit for the Niners offense. Jennings remains fourth or fifth in the team's pass catching pecking order though.\u00a0\n",
    "timestamp": "2022-01-10 03:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 8.7,
    "week03": 0.0,
    "week04": 1.9,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 0.0,
    "week10": 0.8,
    "week11": 0.9,
    "week12": 9.4,
    "week13": 1.3,
    "week14": 6.1,
    "week15": 10.3,
    "week16": 2.9,
    "week17": 3.5,
    "week18": 24.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.7, 0.0, 1.9, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.8, 0.9, 9.4, 1.3, 6.1, 10.3, 2.9, 3.5, 24.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.2, 1.0, 1.4, 'DNP', 'BYE', 'DNP', -1.6, 0.1, 2.3, 2.6, 5.1, 2.7, 1.6, 5.2, 5.4, 5.4, 4.1, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.6, 1.1, 5.3, 4.2, 'DNP', 'BYE', 'DNP', 3.9, 1.3, 1.1, 1.2, 1.0, 3.4, 4.2, 4.8, 5.7, 7.5, 5.9, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 5.5,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 10,
    "avg_fp2": 7.91,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.36,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Emmanuel Sanders (knee) does not have an injury designation for the Wild Card Round against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Sanders practiced in full after sitting out Weeks 17-18. Injured down the stretch and ineffective for the entire second half of the season, Sanders can't be counted on to stuff the stat sheet vs. the Patriots' elite pass defense.\u00a0\n",
    "timestamp": "2022-01-13 07:19 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.2,
    "week02": 5.8,
    "week03": 23.9,
    "week04": 10.6,
    "week05": 18.9,
    "week06": 11.6,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 8.5,
    "week10": 6.1,
    "week11": 4.1,
    "week12": 4.3,
    "week13": 3.7,
    "week14": 3.0,
    "week15": "DNP",
    "week16": 3.0,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 5.8, 23.9, 10.6, 18.9, 11.6, 'BYE', 0.0, 8.5, 6.1, 4.1, 4.3, 3.7, 3.0, 'DNP', 3.0, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.8, 11.2, 4.8, 7.5, 7.3, 'BYE', 8.6, 10.9, 9.7, 8.6, 7.5, 7.3, 9.2, 'DNP', 4.9, 'DNP', 'DNP', 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 3.6, 3.4, 7.9, 15.8, 15.7, 'BYE', 9.8, 9.1, 9.2, 14.8, 7.1, 5.1, 7.7, 'DNP', 2.5, 'DNP', 'DNP', 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 17.7, 8.7, 13.9, 22.3, 23.1, 'BYE', 14.6, 16.6, 14.1, 22.1, 14.9, 13.6, 14.5, 'DNP', 9.2, 'DNP', 'DNP', 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 5.5,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 5.86,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.26,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Nelson Agholor caught 1-of-3 targets for 23 yards in the Patriots' Week 18 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Agholor hasn't topped 40 yards since Week 8. With Jakobi Meyers and Hunter Henry soaking up most of the targets in New England, Agholor is an afterthought. He can be forgotten about as a fantasy option for the playoffs.\n",
    "timestamp": "2022-01-10 04:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 3.6,
    "week03": 2.7,
    "week04": 7.4,
    "week05": 4.7,
    "week06": 3.3,
    "week07": 12.1,
    "week08": 7.5,
    "week09": 0.0,
    "week10": 3.1,
    "week11": 12.5,
    "week12": 3.5,
    "week13": 0.6,
    "week14": "BYE",
    "week15": 5.4,
    "week16": "DNP",
    "week17": "DNP",
    "week18": 2.8,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 3.6, 2.7, 7.4, 4.7, 3.3, 12.1, 7.5, 0.0, 3.1, 12.5, 3.5, 0.6, 'BYE', 5.4, 'DNP', 'DNP', 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.5, 4.8, 7.6, 5.8, 9.9, 8.7, 5.4, 4.2, 5.5, 7.6, 6.7, 5.1, 'BYE', 6.9, 'DNP', 'DNP', 5.4, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.2, 1.1, 0.0, 7.5, 1.1, 1.4, 5.3, 2.8, 2.6, 3.0, 2.7, 1.4, 'BYE', 1.3, 'DNP', 'DNP', 2.9, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 12.3, 5.2, 4.4, 12.3, 6.5, 4.2, 8.5, 6.4, 5.6, 6.5, 6.9, 4.9, 'BYE', 5.1, 'DNP', 'DNP', 8.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4043161.png",
    "name": "Antoine Wesley",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 5.1,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 8,
    "avg_fp2": 3.26,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Antoine Wesley caught 2-of-4 targets for 17 yards in the Cardinals' Week 18 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Wesley closes the book on the regular season having caught 11 balls for 95 yards and three touchdowns in four games since DeAndre Hopkins landed on injured reserve. The 6-foot-4 jump ball dunker has been a decent reserve role player, but the possibility for more almost certainly does not exist heading into the postseason.\u00a0\n",
    "timestamp": "2022-01-10 04:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 1.2,
    "week09": 7.7,
    "week10": 0.0,
    "week11": 6.4,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 0.0,
    "week15": 3.4,
    "week16": 9.9,
    "week17": 17.0,
    "week18": 2.7,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 1.2, 7.7, 0.0, 6.4, 'BYE', 0.0, 0.0, 3.4, 9.9, 17.0, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.7, 0.9, -1.2, -0.9, 1.6, 2.9, 0.2, 0.0, 'BYE', -1.4, 0.2, 2.3, 2.8, 2.0, 4.9, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 1.6, 2.7, 0.8, 1.6, 1.5, 0.8, 4.8, 4.7, 'BYE', 8.3, 3.4, 5.8, 5.7, 6.2, 9.8, 8.7]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 16.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 11.5,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 14.05,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski caught 7-of-10 targets for 137 yards in the Bucs' Week 18 win over the Panthers.\n",
    "report": "",
    "analysis": "With the catches and yards, Gronkowski earned another $1 million via incentives. His catches, yards, and targets all led the team, and it was clear Tom Brady was making a concerted effort to get his buddy the ball. With Chris Godwin, Antonio Brown, and possibly now Cyril Grayson (hamstring) sidelined/cut, Gronkowski is going to have to do some heavy lifting for the Bucs in the playoffs.\n",
    "timestamp": "2022-01-10 12:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 17.9,
    "week03": 7.5,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.0,
    "week09": "BYE",
    "week10": "DNP",
    "week11": 10.1,
    "week12": 15.8,
    "week13": 19.8,
    "week14": 8.7,
    "week15": 3.9,
    "week16": 2.8,
    "week17": 15.0,
    "week18": 17.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 17.9, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 10.1, 15.8, 19.8, 8.7, 3.9, 2.8, 15.0, 17.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.7, 14.9, 'DNP', 'DNP', 'DNP', 'DNP', 8.5, 'BYE', 'DNP', 6.6, 11.0, 5.4, 8.7, 5.4, 8.2, 9.7, 6.9, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 0.0, 5.5, 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 'DNP', 7.1, 8.4, 8.8, 6.3, 5.8, 8.6, 7.2, 6.2, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.9, 19.4, 15.6, 'DNP', 'DNP', 'DNP', 'DNP', 14.7, 'BYE', 'DNP', 16.2, 20.8, 19.5, 14.3, 16.3, 19.7, 19.6, 20.7, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 14.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 9.64,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 6.51,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dalton Schultz caught all three of his targets for 21 yards and two touchdowns in the Cowboys' Week 18 win over the Eagles.\n",
    "report": "",
    "analysis": "Schultz scored both his touchdowns on throws inside the 10-yard line. \u00a0It caps a career year across the board for the fourth-year tight end, with Schultz posting a 78/808/8 line on 104 targets. The Cowboys need wins from the 49ers, Seahawks, and Panthers in Week 18 to clinch the No. 2 seed.\n",
    "timestamp": "2022-01-09 07:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 2.8,
    "week03": 23.0,
    "week04": 14.8,
    "week05": 10.9,
    "week06": 10.4,
    "week07": "BYE",
    "week08": 2.1,
    "week09": 7.4,
    "week10": 1.9,
    "week11": 8.3,
    "week12": 14.1,
    "week13": 6.8,
    "week14": 0.9,
    "week15": 16.7,
    "week16": 18.2,
    "week17": 8.4,
    "week18": 15.6,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 2.8, 23.0, 14.8, 10.9, 10.4, 'BYE', 2.1, 7.4, 1.9, 8.3, 14.1, 6.8, 0.9, 16.7, 18.2, 8.4, 15.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 7.5, 4.1, 6.2, 8.4, 9.0, 'BYE', 6.3, 6.7, 6.1, 8.0, 13.7, 18.8, 10.6, 7.2, 14.3, 4.5, 6.9, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.7, 7.5, 3.9, 1.9, 4.8, 'BYE', 7.7, 5.6, 7.4, 2.4, 5.1, 2.6, 4.3, 4.1, 5.1, 4.4, 4.5, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 5.7, 8.4, 6.5, 11.9, 8.7, 'BYE', 9.1, 8.2, 11.0, 9.5, 7.9, 10.3, 11.5, 7.7, 9.5, 10.5, 11.6, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 11.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 12.23,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.26,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "George Kittle caught 5-of-7 targets for 10 yards in the 49ers' Week 18 win against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Kittle was a non-factor in the passing game for the third consecutive week while tying for the team lead in targets. Since his Week 14-15 explosion, Kittle has managed just eight receptions over three games. The run-heavy Niners valuing Kittle as a blocker means his production will be up and down as the offense is centered around dual-threat dynamo Deebo Samuel. Kittle DFS price point will make him tough to use next week against the Cowboys.\u00a0\n",
    "timestamp": "2022-01-10 02:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 3.7,
    "week03": 13.6,
    "week04": 6.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 17.1,
    "week10": 13.5,
    "week11": 11.4,
    "week12": 1.8,
    "week13": 35.1,
    "week14": 27.6,
    "week15": 12.3,
    "week16": 3.1,
    "week17": 4.0,
    "week18": 3.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 3.7, 13.6, 6.0, 'DNP', 'BYE', 'DNP', 'DNP', 17.1, 13.5, 11.4, 1.8, 35.1, 27.6, 12.3, 3.1, 4.0, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.4, 8.1, 8.2, 12.3, 'DNP', 'BYE', 'DNP', 'DNP', 4.6, 11.0, 4.0, 6.8, 5.6, 10.1, 4.9, 9.9, 11.0, 5.7, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 3.3, 7.7, 10.4, 'DNP', 'BYE', 'DNP', 'DNP', 4.1, 16.4, 15.1, 5.7, 12.2, 7.2, 6.3, 2.9, 16.9, 6.1, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.7, 19.2, 17.5, 14.8, 'DNP', 'BYE', 'DNP', 'DNP', 11.6, 24.8, 20.9, 10.5, 26.3, 16.9, 14.1, 12.8, 24.0, 18.9, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 11.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 2,
    "avg_fp2": 13.69,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.16,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Travis Kelce caught 4-of-5 targets for 34 yards and a touchdown in Kansas City's Week 18 win over Denver.\u00a0\n",
    "report": "",
    "analysis": "The touchdown was an easy floater on the goal line where Kelce was left uncovered. Kelce also brought in a huge third-and-8 at the very end of the game that sealed things, but struggled off the field with what ESPN's sideline reporter called a \"hip twinge.\" Andy Reid said that Kelce was \"alright\" in his post-game presser. Kelce will be an easy TE1 for fantasy playoff leagues.\u00a0\n",
    "timestamp": "2022-01-09 01:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.6,
    "week02": 20.4,
    "week03": 13.9,
    "week04": 4.3,
    "week05": 14.7,
    "week06": 13.9,
    "week07": 10.0,
    "week08": 2.7,
    "week09": 15.3,
    "week10": 15.9,
    "week11": 16.3,
    "week12": "BYE",
    "week13": 4.2,
    "week14": 4.2,
    "week15": 36.1,
    "week16": "DNP",
    "week17": 10.9,
    "week18": 11.4,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 20.4, 13.9, 4.3, 14.7, 13.9, 10.0, 2.7, 15.3, 15.9, 16.3, 'BYE', 4.2, 4.2, 36.1, 'DNP', 10.9, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3, 10.4, 12.0, 10.3, 14.7, 15.7, 'BYE', 6.3, 13.7, 11.5, 'DNP', 10.4, 7.2, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4, 8.4, 10.5, 4.7, 11.2, 10.7, 'BYE', 4.5, 10.1, 10.2, 'DNP', 8.4, 3.6, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3, 14.5, 18.6, 15.6, 18.8, 18.5, 'BYE', 13.3, 21.4, 20.0, 'DNP', 16.4, 11.4, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 7.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 8,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.83,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Zach Ertz caught 7-of-10 targets for 84 yards in the Cardinals' Week 18 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "The seven-catch effort, Ertz's third straight, brings him to 56 receptions in 11 games as a Cardinal. He closed out the regular season as arguably Arizona's most important pass catcher following DeAndre Hopkins' injury. He was at least the most consistent. For the Wild Card Round, Ertz will be facing a Rams defense he got for a modest 5/42 in Week 14.\u00a0\n",
    "timestamp": "2022-01-10 01:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 1.1,
    "week03": 13.3,
    "week04": 9.0,
    "week05": 1.2,
    "week06": 10.9,
    "week07": 14.5,
    "week08": 6.2,
    "week09": 4.2,
    "week10": 6.6,
    "week11": 24.8,
    "week12": "BYE",
    "week13": 1.5,
    "week14": 6.7,
    "week15": 10.4,
    "week16": 9.4,
    "week17": 7.6,
    "week18": 11.9,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 1.1, 13.3, 9.0, 1.2, 10.9, 14.5, 6.2, 4.2, 6.6, 24.8, 'BYE', 1.5, 6.7, 10.4, 9.4, 7.6, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 5.4, 4.4, 3.0, 2.3, 7.5, 11.6, 5.8, 3.3, 9.2, 11.4, 'BYE', 6.7, 8.5, 11.1, 8.5, 4.7, 8.0, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.6, 4.1, 4.1, 5.8, 5.3, 8.3, 1.9, 6.5, 2.9, 6.1, 'BYE', 1.6, 4.9, 4.0, 8.6, 3.6, 7.3, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 17.3, 10.7, 7.8, 11.2, 12.2, 11.9, 12.0, 11.1, 10.9, 11.3, 'BYE', 11.1, 13.0, 9.5, 16.9, 12.0, 14.5, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 7.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 6.49,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.6,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 1.4,
    "week03": 0.0,
    "week04": 24.0,
    "week05": 2.6,
    "week06": 9.0,
    "week07": 22.6,
    "week08": 5.3,
    "week09": 4.4,
    "week10": "BYE",
    "week11": 1.9,
    "week12": 2.4,
    "week13": 3.5,
    "week14": 7.6,
    "week15": 3.3,
    "week16": 6.1,
    "week17": 5.2,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6, 9.0, 22.6, 5.3, 4.4, 'BYE', 1.9, 2.4, 3.5, 7.6, 3.3, 6.1, 5.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5, 5.9, 7.6, 13.5, 'BYE', 11.3, 5.0, 6.8, 2.3, 3.8, 6.7, 5.7, 'DNP', 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3, 2.6, 10.8, 1.0, 'BYE', 1.1, 1.8, 4.1, 3.7, 4.4, 1.5, 3.8, 'DNP', 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4, 8.0, 18.9, 7.7, 'BYE', 8.1, 4.4, 8.1, 6.9, 7.3, 7.7, 6.9, 'DNP', 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 6.3,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 10,
    "avg_fp2": 9.49,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 5.22,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox caught 3-of-5 targets for 49 yards in Buffalo's Week 18 win over the Jets.\n",
    "report": "",
    "analysis": "Knox was lucky to catch any of his targets on a blustery afternoon that included gusts up to 30 mph. Sunday was also the fourth consecutive game that he failed to eclipse 50 receiving yards. With Gabriel Davis emerging in a rotation with Cole Beasley and Isaiah McKenzie, Knox's outlook for the postseason has dipped considerably compared to his elite opportunity prior to injury.\n",
    "timestamp": "2022-01-10 04:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.1,
    "week02": 8.7,
    "week03": 12.9,
    "week04": 18.2,
    "week05": 19.2,
    "week06": 6.0,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 2.2,
    "week11": 11.0,
    "week12": 16.7,
    "week13": 2.4,
    "week14": 15.5,
    "week15": 5.8,
    "week16": 8.1,
    "week17": 0.0,
    "week18": 6.8,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 8.7, 12.9, 18.2, 19.2, 6.0, 'BYE', 'DNP', 'DNP', 2.2, 11.0, 16.7, 2.4, 15.5, 5.8, 8.1, 0.0, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 4.5, 7.2, 5.3, 10.6, 12.9, 'BYE', 'DNP', 'DNP', 9.1, 7.1, 3.1, 3.3, 10.4, 7.5, 4.1, 7.0, 9.1, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.8, 4.2, 0.1, 11.7, 8.7, 'BYE', 'DNP', 'DNP', 5.4, 8.1, 4.9, 9.6, 0.0, 4.7, 5.8, 1.8, 6.6, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 7.7, 5.5, 4.7, 18.1, 17.1, 'BYE', 'DNP', 'DNP', 9.8, 15.2, 8.9, 15.1, 5.6, 13.1, 12.7, 7.7, 14.3, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 6.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 8.01,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.49,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Hunter Henry caught 5-of-6 targets for 86 yards in the Patriots' Week 18 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Henry's 86 receiving yards led the Patriots and were also good for a season-high for Henry. In fact, it was the most receiving yards Henry has had in a single game since Week 7 of the 2019 season. Henry has emerged as the clear No. 2 pass-catcher for Mac Jones. He has 25 targets over his previous four games, trailing only Jakoi Meyers on New England in that span. He will be an interesting fantasy option in the Patriots' Wild Card game next week.\n",
    "timestamp": "2022-01-10 04:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.6,
    "week02": 5.2,
    "week03": 6.1,
    "week04": 11.2,
    "week05": 16.5,
    "week06": 9.5,
    "week07": 9.3,
    "week08": 3.8,
    "week09": 8.9,
    "week10": 17.7,
    "week11": 3.5,
    "week12": 2.6,
    "week13": 0.0,
    "week14": "BYE",
    "week15": 22.7,
    "week16": 1.4,
    "week17": 5.2,
    "week18": 11.1,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 5.2, 6.1, 11.2, 16.5, 9.5, 9.3, 3.8, 8.9, 17.7, 3.5, 2.6, 0.0, 'BYE', 22.7, 1.4, 5.2, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 1.7, 3.3, 7.2, 7.0, 9.0, 10.2, 10.2, 7.2, 8.5, 7.2, 4.8, 4.5, 'BYE', 4.0, 3.1, 5.9, 6.0, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 3.8, 4.4, 7.8, 9.0, 19.1, 3.1, 6.6, 6.6, 5.7, 8.0, 4.0, 10.0, 'BYE', 8.6, 1.6, 4.3, 5.3, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.7, 8.4, 11.3, 11.1, 21.7, 6.0, 11.7, 10.1, 7.6, 11.5, 8.9, 18.4, 'BYE', 12.9, 13.1, 12.0, 11.2, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 6.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 22,
    "avg_fp2": 9.13,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 10.41,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles activated Dallas Goedert from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "The Eagles also activated\u00a0LB Genard Avery, DT Fletcher Cox, S Marcus Epps, G Nate Herbig, RB Jordan Howard, CB Avonte Maddox, S Rodney McLeod, RB Boston Scott, LB Alex Singleton, and TE Jack Stoll. All of these players missed Philly's Week 18 game versus Dallas but, luckily for the Eagles, it was a mostly pointless game. Philadelphia had already locked up an appearance in the Wild Card round. Goedert will return as one of the focal points on the Eagles' passing attack. Goedert was targeted a team-high 29 times in his final five games of the regular season. He will be a solid DFS and playoff fantasy option in the opening round this weekend.\n",
    "timestamp": "2022-01-10 08:56 PM",
    "source": "Mike Kaye on Twitter",
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 3.4,
    "week03": 7.6,
    "week04": 14.1,
    "week05": 3.8,
    "week06": "DNP",
    "week07": 10.5,
    "week08": 10.2,
    "week09": 5.8,
    "week10": 3.8,
    "week11": 8.7,
    "week12": 0.5,
    "week13": 25.5,
    "week14": "BYE",
    "week15": 17.0,
    "week16": 3.8,
    "week17": 10.1,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 3.4, 7.6, 14.1, 3.8, 'DNP', 10.5, 10.2, 5.8, 3.8, 8.7, 0.5, 25.5, 'BYE', 17.0, 3.8, 10.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 11.8, 12.4, 9.5, 6.7, 'DNP', 7.7, 10.8, 9.6, 6.4, 6.8, 6.5, 7.3, 'BYE', 6.2, 5.4, 8.5, 'DNP', 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 2.1, 4.0, 5.1, 6.0, 'DNP', 13.0, 2.2, 6.6, 4.4, 4.6, 2.2, 3.1, 'BYE', 0.9, 1.5, 0.8, 'DNP', 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.4, 9.7, 8.5, 12.4, 'DNP', 16.0, 4.7, 11.4, 8.4, 9.9, 6.9, 7.3, 'BYE', 11.9, 9.9, 17.0, 'DNP', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 4.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.56,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Darren Waller (knee) will play Saturday against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Waller was limited all week, but he was not given a game designation on the final injury report.\u00a0Waller struggled against the Chargers, his first game since Week 12, catching just 2-of-9 targets for 22 yards. That usage is promising, however, and\u00a0Waller went for 116 yards on seven catches against the Bengals in Week 11. He is one of the top options at tight end this weekend.\u00a0\n",
    "timestamp": "2022-01-14 04:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.5,
    "week02": 9.0,
    "week03": 7.9,
    "week04": 13.0,
    "week05": 6.5,
    "week06": 8.4,
    "week07": "DNP",
    "week08": "BYE",
    "week09": 12.7,
    "week10": 4.4,
    "week11": 15.1,
    "week12": 4.3,
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": 3.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 9.0, 7.9, 13.0, 6.5, 8.4, 'DNP', 'BYE', 12.7, 4.4, 15.1, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 15.8, 17.8, 8.8, 7.8, 5.4, 'DNP', 'BYE', 7.8, 11.7, 6.6, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.8, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 2.6, 8.3, 9.3, 4.2, 3.1, 'DNP', 'BYE', 6.7, 7.8, 8.7, 7.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.5, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.6, 17.0, 17.0, 12.0, 11.6, 'DNP', 'BYE', 15.1, 13.0, 15.2, 14.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361411.png",
    "name": "Pat Freiermuth",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 4.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 16,
    "avg_fp2": 7.56,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.35,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Pat\u00a0Freiermuth caught 6-of-9 targets for 53 yards in the Steelers' Week 18 win against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Freiermuth and fellow Steelers tight end Zach Gentry combined for 15 targets against a Baltimore defense allowing a top-three target share to tight ends. Most of\u00a0Freiermuth's targets and receptions came in the fourth quarter and overtime, when the Steelers shifted to a pass-heavy attack against a beat up Baltimore coverage unit. Running a decent number of routes as the Steelers' primary pass-catching tight end,\u00a0Freiermuth should be a fine floor option in postseason DFS contests.\u00a0\n",
    "timestamp": "2022-01-09 09:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.9,
    "week02": 5.6,
    "week03": 9.7,
    "week04": 1.6,
    "week05": 1.7,
    "week06": 9.3,
    "week07": "BYE",
    "week08": 12.4,
    "week09": 18.8,
    "week10": 3.6,
    "week11": 9.1,
    "week12": 12.0,
    "week13": 6.1,
    "week14": 10.2,
    "week15": 5.7,
    "week16": "DNP",
    "week17": 4.7,
    "week18": 8.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 5.6, 9.7, 1.6, 1.7, 9.3, 'BYE', 12.4, 18.8, 3.6, 9.1, 12.0, 6.1, 10.2, 5.7, 'DNP', 4.7, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.3, 2.1, 2.8, 3.9, 2.6, 3.3, 'BYE', 2.7, 4.9, 4.7, 12.7, 9.5, 6.2, 7.6, 3.7, 'DNP', 7.2, 7.5, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.9, 0.0, 0.4, 'BYE', 2.0, 9.2, 1.9, 1.9, 3.4, 2.2, 2.4, 5.5, 'DNP', 3.6, 3.3, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 5.6, 6.6, 8.2, 4.5, 9.9, 'BYE', 9.7, 12.1, 15.8, 9.9, 13.9, 13.5, 12.7, 16.3, 'DNP', 13.3, 12.8, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 3.83,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 14.05,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Cameron Brate caught 2-of-3 targets for five yards and a touchdown in Week 17's win against the Jets.\n",
    "report": "",
    "analysis": "Brate was open on a fourth-and-goal go, but he wasn't given any extra targets despite Antonio Brown defecting mid-game. He's yet to post more than 35 yards in a game this season, so he'll likely remain a lower rung member of the touchdown-or-bust TE tier against the Panthers in Week 18.\u00a0\n",
    "timestamp": "2022-01-03 12:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.3,
    "week03": 5.5,
    "week04": 3.9,
    "week05": 1.7,
    "week06": 4.1,
    "week07": 0.0,
    "week08": 2.5,
    "week09": "BYE",
    "week10": 7.1,
    "week11": 3.7,
    "week12": 3.8,
    "week13": 6.8,
    "week14": 2.1,
    "week15": 3.2,
    "week16": 8.1,
    "week17": 7.5,
    "week18": 2.2,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.3, 5.5, 3.9, 1.7, 4.1, 0.0, 2.5, 'BYE', 7.1, 3.7, 3.8, 6.8, 2.1, 3.2, 8.1, 7.5, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 2.4, 2.9, 0.2, 5.6, 2.1, 1.4, 2.5, 'BYE', 6.6, 2.3, 2.5, 2.7, 4.5, 1.9, 3.0, 3.1, 1.8, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.4, 4.5, 8.3, 5.0, 3.4, 2.6, 6.0, 'BYE', 8.8, 0.4, 6.2, 3.4, 5.3, 1.0, 3.7, 4.4, 1.6, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 11.4, 7.8, 11.5, 8.6, 6.4, 6.2, 11.7, 'BYE', 12.2, 4.2, 9.1, 6.6, 9.1, 6.1, 7.9, 8.0, 6.1, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127310.png",
    "name": "Drew Sample",
    "depthchart": "Backup: TE-2",
    "team": "Cincinnati Bengals",
    "projected": 3.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 7,
    "avg_fp2": 0.77,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.6,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals offensive coordinator Brian Callahan said 50 receptions for TE\u00a0C.J. Uzomah is realistic this season.\u00a0\n",
    "report": "",
    "analysis": "For context, Jimmy Graham's\u00a050 catches in 2020 were the 14th most among all tight ends. Callahan, meanwhile, has a strange fascination with five Bengals pass catchers recording 50 grabs this season. The Athletic's Jay Morrison said Joe Burrow \"established an immediate connection\" with Uzomah in 2020, as the tight end saw five targets in Week 1 and six looks in Week 2 before going down with a season-ending Achilles injury in the first half. Drew Sample started the rest of the season for Cincinnati and ran the 12th most tight end routes on his way to a miserable 4.9 PPR points per game. Uzomah, 28, has been fully cleared and is expected to be a full go for training camp. He should be a popular late-round target in the Bengals' pass-heavy offense.\u00a0\n",
    "timestamp": "2021-07-11 05:04 PM",
    "source": "The Athletic ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 1.9,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 0.0,
    "week09": 5.1,
    "week10": "BYE",
    "week11": 0.8,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 1.9,
    "week15": 0.7,
    "week16": 1.9,
    "week17": 0.0,
    "week18": 1.3,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 1.9, 0.0, 0.0, 0.0, 5.1, 'BYE', 0.8, 0.0, 0.0, 1.9, 0.7, 1.9, 0.0, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 2.5, 3.4, 0.9, 4.9, 0.8, 2.1, 3.5, 4.1, 'BYE', 4.5, 2.8, 2.0, 1.2, 1.2, 2.8, 3.3, 1.5, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.4, 3.2, 0.0, 4.7, 3.1, 3.4, 1.0, 0.1, 'BYE', 3.9, 0.2, 3.1, 0.0, 1.5, 0.7, 0.1, 0.6, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.7, 6.2, 5.8, 2.2, 7.7, 4.4, 7.6, 4.5, 2.2, 'BYE', 6.7, 3.0, 5.9, 1.7, 2.4, 1.8, 2.6, 1.3, 2.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 3.8,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 3.53,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.49,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jonnu Smith rushed one time for five yards in the Patriots' Week 18 loss to the Dolphins.\n",
    "report": "",
    "analysis": "With more rush attempts than receptions over his previous five games, Smith might as well be a fullback at this point. He has been off the fantasy radar for weeks and remains there heading into the playoffs.\u00a0\n",
    "timestamp": "2022-01-10 04:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": 4.8,
    "week03": 0.9,
    "week04": 8.9,
    "week05": 4.2,
    "week06": 1.4,
    "week07": 6.7,
    "week08": 2.3,
    "week09": 1.3,
    "week10": "DNP",
    "week11": 2.2,
    "week12": 7.3,
    "week13": 1.6,
    "week14": "BYE",
    "week15": 1.0,
    "week16": 0.0,
    "week17": 3.0,
    "week18": 0.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.8, 0.9, 8.9, 4.2, 1.4, 6.7, 2.3, 1.3, 'DNP', 2.2, 7.3, 1.6, 'BYE', 1.0, 0.0, 3.0, 0.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 5.4, 4.7, 5.1, 5.1, 4.0, 4.8, 4.1, 3.2, 'DNP', 4.0, 1.6, 3.2, 'BYE', 4.1, 1.8, 2.3, 3.7, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.8, 7.2, 3.6, 8.4, 0.1, 2.5, 0.9, 'DNP', 0.4, 0.2, 4.1, 'BYE', 4.4, 0.5, 0.0, 2.5, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 8.6, 5.2, 13.6, 6.8, 13.5, 4.3, 6.4, 5.4, 'DNP', 4.7, 6.0, 7.2, 'BYE', 10.2, 5.8, 4.8, 6.5, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 3.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.11,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Tyler\u00a0Higbee caught 6-of-8 targets for 55 yards and two touchdowns in the Rams' Week 18 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "For the second straight week, Higbee led the Rams in targets. He scored twice against a Niners defense that had given up a league low 17 percent target share to enemy tight ends this season. Higbee, after a miserable mid-season stretch, has taken on a more prominent role in the LA passing offense in the regular season's final weeks. Running some of the highest route totals among NFL tight ends, Higbee makes for an interesting fantasy option next week against Arizona.\u00a0\n",
    "timestamp": "2022-01-10 02:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 1.3,
    "week03": 12.5,
    "week04": 5.6,
    "week05": 8.4,
    "week06": 6.1,
    "week07": 7.1,
    "week08": 4.0,
    "week09": 7.6,
    "week10": 9.5,
    "week11": "BYE",
    "week12": 0.8,
    "week13": 7.3,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 6.6,
    "week17": 9.9,
    "week18": 20.5,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4, 6.1, 7.1, 4.0, 7.6, 9.5, 'BYE', 0.8, 7.3, 'DNP', 'DNP', 6.6, 9.9, 20.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0, 8.1, 17.4, 7.3, 4.1, 'BYE', 5.5, 4.2, 'DNP', 'DNP', 5.1, 7.7, 5.4, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5, 1.4, 4.0, 1.2, 2.5, 'BYE', 3.5, 5.0, 'DNP', 'DNP', 6.4, 5.0, 1.8, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8, 11.3, 7.5, 9.7, 10.8, 'BYE', 9.2, 8.8, 'DNP', 'DNP', 8.7, 9.4, 5.6, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035020.png",
    "name": "Charlie Woerner",
    "depthchart": "Backup: TE-2",
    "team": "San Francisco 49ers",
    "projected": 3.5,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 0.48,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.26,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "The Athletic's Matt Barrows reports the 49ers \"seem to be relying on\" TE Charlie Woerner\u00a0\"to make a big leap this offseason.\"\n",
    "report": "",
    "analysis": "Woerner, a sixth-round pick last year out of Georgia \u2014 the only Niners tight end besides Kittle who was drafted \u2014 enters OTAs amid a jumble of tight ends behind the dominant Kittle. Woerner caught a grand total of 34 passes during his time at Georgia, and was used primarily as a blocking tight end. Ross Dwelley has usually functioned as the Niners' pass-catching tight end when Kittle is sidelined with one of his many injuries. Woerner's background suggests he wouldn't take on that role if Kittle once again misses time in 2021.\u00a0\n",
    "timestamp": "2021-05-26 02:23 PM",
    "source": "The Athletic ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.9,
    "week06": "BYE",
    "week07": 4.0,
    "week08": 1.2,
    "week09": 0.0,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 1.6,
    "week13": 0.0,
    "week14": 0.0,
    "week15": 0.0,
    "week16": 0.0,
    "week17": 0.0,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.9, 'BYE', 4.0, 1.2, 0.0, 0.0, 0.0, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 0.9, -0.2, 2.1, 1.6, 'BYE', 2.7, 1.7, 1.4, 1.9, 0.4, 1.7, 2.4, 3.3, 0.8, 1.5, 3.6, 1.2, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.8, 0.2, 1.8, 'BYE', 2.0, 0.4, 0.9, 0.2, 0.0, 0.7, 0.0, 0.0, 0.0, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.9, 4.6, 0.8, 0.2, 1.8, 'BYE', 2.0, 0.4, 0.9, 1.0, 0.8, 0.8, 1.3, 0.2, 0.6, 0.7, 0.1, 0.8, 0.7]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11122.png",
    "name": "Matt Prater",
    "depthchart": "Starter: K-1",
    "team": "Arizona Cardinals",
    "projected": 9.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 12,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.38,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals signed K Matt Prater, formerly of the Lions, to a two-year contract.\n",
    "report": "",
    "analysis": "This will be Prater's 37-year-old season. He's a career 83.2% kicker on field goals but is coming off a down 2020 with Detroit, making just 21-of-28 (75%) kicks. Prater has always kicked in favorable environments, going from Mile High to domed Ford Field and now the dome in Arizona. In the Cardinals' offense, Prater should remain very fantasy-relevant.\n",
    "timestamp": "2021-03-17 11:12 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.0,
    "week02": 12.0,
    "week03": 7.0,
    "week04": 15.0,
    "week05": 5.0,
    "week06": 15.0,
    "week07": 7.0,
    "week08": 3.0,
    "week09": 7.0,
    "week10": 5.0,
    "week11": 7.0,
    "week12": "BYE",
    "week13": 9.0,
    "week14": 16.0,
    "week15": 6.0,
    "week16": 4.0,
    "week17": 15.0,
    "week18": 13.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.0, 7.0, 15.0, 5.0, 15.0, 7.0, 3.0, 7.0, 5.0, 7.0, 'BYE', 9.0, 16.0, 6.0, 4.0, 15.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.1, 10.8, 7.5, 9.1, 6.6, 10.5, 7.7, 7.8, 8.4, 9.8, 'BYE', 9.5, 8.5, 9.7, 7.6, 8.2, 8.6, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 10.4, 6.8, 7.1, 6.9, 8.2, 5.8, 7.2, 5.3, 6.7, 'BYE', 6.9, 7.3, 8.5, 5.0, 6.1, 5.3, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 12.8, 13.3, 10.8, 11.7, 10.7, 15.4, 11.3, 11.8, 10.4, 11.7, 'BYE', 11.8, 12.5, 13.3, 10.0, 11.6, 11.7, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 9.1,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 8,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 9.06,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "The Athletic's Paul Dehner, Jr. reports rookie K Evan\u00a0McPherson has been accurate throughout training camp.\u00a0\n",
    "report": "",
    "analysis": "McPherson, the 149th pick in the 2021 draft, drilled a 50-yarder against Washington in Friday's preseason game -- a kick that would have been good from at least 60 yards. McPherson is the favorite in the team's kicker competition with veteran Austin Seibert, who has also impressed coaches and beat writers this month. The Bengals offense is among the league's most kicker friendly. Last season, Randy Bullock was fantasy's third highest scoring kicker when Joe Burrow went down with a season-ending knee injury. Fantasy managers should consider McPherson if the game's top kickers are off the draft board.\u00a0\n",
    "timestamp": "2021-08-23 01:36 PM",
    "source": "The Athletic ",
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 6.0,
    "week05": 2.0,
    "week06": 11.0,
    "week07": 13.0,
    "week08": 7.0,
    "week09": 4.0,
    "week10": "BYE",
    "week11": 21.0,
    "week12": 13.0,
    "week13": 5.0,
    "week14": 12.0,
    "week15": 13.0,
    "week16": 11.0,
    "week17": 11.0,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0, 11.0, 13.0, 7.0, 4.0, 'BYE', 21.0, 13.0, 5.0, 12.0, 13.0, 11.0, 11.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8, 5.9, 11.4, 8.0, 'BYE', 8.1, 8.6, 10.3, 7.1, 8.2, 7.8, 8.1, 'DNP', 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7, 3.2, 4.2, 6.2, 'BYE', 5.8, 4.8, 3.5, 3.7, 5.9, 6.0, 5.8, 'DNP', 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4, 9.8, 11.7, 11.5, 'BYE', 8.7, 15.3, 11.5, 9.9, 13.0, 13.5, 13.2, 'DNP', 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 9.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 6,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 7.0,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams K\u00a0Matt Gay (shoulder) is active for Week 14 against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Gay isn't a great fantasy option for a contest with a 43.5 over/under. Inactive for the Rams are\u00a0K Austin MacGinnis, RB Ray Calais, RB Xavier Jones, OLB Terrell Lewis, C Brian Allen and\u00a0WR Trishton Jackson.\u00a0\n",
    "timestamp": "2020-12-11 12:04 AM",
    "source": "Eric Williams on Twitter ",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 9.0,
    "week03": 11.0,
    "week04": 9.0,
    "week05": 9.0,
    "week06": 8.0,
    "week07": 9.0,
    "week08": 8.0,
    "week09": 12.0,
    "week10": 4.0,
    "week11": "BYE",
    "week12": 8.0,
    "week13": 15.0,
    "week14": 14.0,
    "week15": 10.0,
    "week16": 12.0,
    "week17": 2.0,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0, 9.0, 8.0, 12.0, 4.0, 'BYE', 8.0, 15.0, 14.0, 10.0, 12.0, 2.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5, 9.8, 9.2, 8.0, 'BYE', 5.3, 9.4, 8.2, 9.3, 10.3, 7.4, 8.5, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3, 7.9, 9.1, 6.4, 'BYE', 5.6, 7.4, 6.0, 7.9, 7.1, 7.2, 6.9, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5, 10.0, 11.7, 8.9, 'BYE', 8.5, 11.2, 9.6, 12.2, 10.7, 11.8, 11.3, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9354.png",
    "name": "Robbie Gould",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 8.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 16,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 7.94,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers activated K Robbie Gould (groin) off injured reserve.\n",
    "report": "",
    "analysis": "Gould hasn't played since Week 3. He didn't carry an injury designation headed into Week 4 but suffered a groin injury in pregame warmups and was unable to play. Joey Slye has filled in for San Francisco in the meantime, but he was released on Wednesday in anticipation of Gould's activation.\n",
    "timestamp": "2021-11-06 08:30 PM",
    "source": "Niners Nation on Twitter",
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 6.0,
    "week03": 4.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 5.0,
    "week10": 9.0,
    "week11": 14.0,
    "week12": 11.0,
    "week13": 7.0,
    "week14": 8.0,
    "week15": 7.0,
    "week16": 6.0,
    "week17": 11.0,
    "week18": 10.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 4.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.0, 9.0, 14.0, 11.0, 7.0, 8.0, 7.0, 6.0, 11.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 11.0, 8.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.2, 7.0, 8.5, 9.0, 9.1, 8.0, 8.5, 8.8, 9.1, 8.1, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.0, 6.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.6, 5.8, 7.2, 6.6, 7.9, 6.6, 8.5, 7.2, 6.7, 6.3, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 9.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.1, 10.6, 11.9, 11.2, 12.3, 10.9, 13.3, 12.0, 11.9, 11.9, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3055899.png",
    "name": "Harrison Butker",
    "depthchart": "Starter: K-1",
    "team": "Kansas City Chiefs",
    "projected": 8.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 9.06,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs activated Harrison Butker from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "The Chiefs also activated\u00a0CB Rashad Fenton, S Armani Watts, and P Tommy Townsend. Kansas City no longer has anyone on the COVID list. In a high-scoring affair with the Bengals, Butker is a plug-and-play fantasy option.\n",
    "timestamp": "2021-12-29 07:35 PM",
    "source": "Pete Sweeney on Twitter",
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": 10.0,
    "week06": 9.0,
    "week07": 4.0,
    "week08": 8.0,
    "week09": 9.0,
    "week10": 12.0,
    "week11": 9.0,
    "week12": "BYE",
    "week13": 13.0,
    "week14": 14.0,
    "week15": 8.0,
    "week16": "DNP",
    "week17": 7.0,
    "week18": 10.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0, 10.0, 9.0, 4.0, 8.0, 9.0, 12.0, 9.0, 'BYE', 13.0, 14.0, 8.0, 'DNP', 7.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7, 7.9, 8.0, 6.1, 7.9, 7.2, 'BYE', 5.7, 8.5, 8.7, 'DNP', 8.2, 7.4, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2, 6.0, 6.9, 6.8, 8.1, 5.0, 'BYE', 7.7, 8.0, 8.1, 'DNP', 8.9, 8.1, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9, 8.4, 11.3, 8.8, 10.1, 8.9, 'BYE', 12.2, 12.6, 11.5, 'DNP', 12.6, 13.0, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14993.png",
    "name": "Greg Zuerlein",
    "depthchart": "Starter: K-1",
    "team": "Dallas Cowboys",
    "projected": 8.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 8,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.5,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys owner Jerry Jones said Greg\u00a0Zuerlein's recent struggles have \"absolutely\" altered the team's game plan.\u00a0\n",
    "report": "",
    "analysis": "\u201cHe\u2019s a sound kicker, experienced kicker, our guys are all sensitive about how to approach the game,\" Jones said. \u201cIf a better alternative was out there, we\u2019d be using it. Everything is at stake.\u201d Oof. Zuerlein made 82.9 percent of his field goals in the regular season, which is actually higher than his career conversion rate (he's made 16 of his past 18 attempts). He's also whiffed on six extra points this season, including one last week against the Eagles. Perhaps the team will be more aggressive on fourth downs in field goals range this postseason if they don't trust Zuerlein to come through in the clutch. Jerry's comments surely won't do much for the veteran's confidence.\u00a0\n",
    "timestamp": "2022-01-11 03:18 PM",
    "source": "Jon Machota on Twitter ",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 10.0,
    "week03": 5.0,
    "week04": 6.0,
    "week05": 14.0,
    "week06": 13.0,
    "week07": "BYE",
    "week08": 8.0,
    "week09": 0.0,
    "week10": "DNP",
    "week11": 10.0,
    "week12": 8.0,
    "week13": 11.0,
    "week14": 13.0,
    "week15": 10.0,
    "week16": 8.0,
    "week17": 2.0,
    "week18": 10.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 10.0, 5.0, 6.0, 14.0, 13.0, 'BYE', 8.0, 0.0, 'DNP', 10.0, 8.0, 11.0, 13.0, 10.0, 8.0, 2.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 10.0, 9.4, 6.1, 9.0, 8.3, 'BYE', 9.5, 8.7, 'DNP', 6.4, 9.5, 9.0, 6.7, 9.0, 9.4, 9.0, 8.4, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 5.2, 7.9, 4.9, 7.0, 4.8, 'BYE', 11.4, 9.2, 'DNP', 6.9, 7.6, 5.8, 7.1, 8.6, 8.7, 5.2, 3.0, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.4, 14.3, 11.5, 11.2, 9.3, 8.8, 'BYE', 16.3, 13.7, 'DNP', 10.8, 12.0, 10.5, 11.3, 12.3, 13.2, 10.3, 11.9, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051909.png",
    "name": "Daniel Carlson",
    "depthchart": "Starter: K-1",
    "team": "Las Vegas Raiders",
    "projected": 8.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 1,
    "avg_fp2": 9.56,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.19,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders signed K Daniel Carlson to a four-year, $18.4 million extension through 2025.\n",
    "report": "",
    "analysis": "Carlson is playing 2021 on the restricted free agent tender. After flaming out with the Vikings, Carlson has found a long-term home with Vegas. He\u2019s 27-of-30 (90%) on field goals this season and has missed just two of his 25 extra points. At $4.6 million per year, Carlson is the league\u2019s third-highest paid kicker.\n",
    "timestamp": "2021-12-09 02:25 AM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 17.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 3.0,
    "week06": 12.0,
    "week07": 9.0,
    "week08": "BYE",
    "week09": 10.0,
    "week10": 2.0,
    "week11": 8.0,
    "week12": 21.0,
    "week13": 11.0,
    "week14": 3.0,
    "week15": 12.0,
    "week16": 6.0,
    "week17": 13.0,
    "week18": 21.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 17.0, 13.0, 2.0, 3.0, 12.0, 9.0, 'BYE', 10.0, 2.0, 8.0, 21.0, 11.0, 3.0, 12.0, 6.0, 13.0, 21.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.2, 10.6, 11.7, 11.1, 7.4, 8.4, 'BYE', 8.7, 8.7, 8.9, 8.1, 9.2, 7.9, 7.5, 8.5, 7.4, 9.4, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 11.7, 9.4, 10.2, 6.0, 9.7, 'BYE', 6.8, 8.5, 2.9, 6.2, 6.5, 6.7, 9.8, 6.7, 7.4, 5.7, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 10.8, 13.2, 12.6, 12.6, 8.5, 12.0, 'BYE', 9.4, 14.1, 8.7, 11.5, 10.8, 9.1, 12.3, 10.2, 10.4, 10.6, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    "name": "Nick Folk",
    "depthchart": "Starter: K-1",
    "team": "New England Patriots",
    "projected": 8.2,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 1,
    "avg_fp2": 10.25,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 6.33,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Nick Folk (knee) was limited in Friday's practice.\u00a0\n",
    "report": "",
    "analysis": "Folk was also limited Thursday, but there does not appear to be any reason for concern. The Patriots waived\u00a0Quinn Nordin earlier in the week, and they would not have made that move if there was any chance Folk would sit. The veteran kicker will continue to be a top fantasy option against the Bills on Monday night.\u00a0\n",
    "timestamp": "2021-12-03 09:16 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 15.0,
    "week03": 8.0,
    "week04": 5.0,
    "week05": 17.0,
    "week06": 3.0,
    "week07": 14.0,
    "week08": 15.0,
    "week09": 6.0,
    "week10": 9.0,
    "week11": 16.0,
    "week12": 21.0,
    "week13": 7.0,
    "week14": "BYE",
    "week15": 5.0,
    "week16": 3.0,
    "week17": 9.0,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 15.0, 8.0, 5.0, 17.0, 3.0, 14.0, 15.0, 6.0, 9.0, 16.0, 21.0, 7.0, 'BYE', 5.0, 3.0, 9.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 9.8, 9.8, 11.1, 9.3, 9.0, 12.5, 10.1, 9.5, 9.1, 9.2, 9.4, 7.1, 'BYE', 8.5, 10.1, 10.7, 8.8, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.2, 6.4, 5.9, 7.7, 6.3, 4.0, 5.8, 8.1, 5.2, 4.1, 6.8, 5.5, 'BYE', 5.3, 6.5, 4.2, 6.0, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 12.1, 10.4, 8.8, 13.9, 9.1, 9.8, 9.7, 12.3, 8.3, 9.3, 12.3, 12.3, 'BYE', 11.6, 10.7, 11.2, 10.9, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917232.png",
    "name": "Tyler Bass",
    "depthchart": "Starter: K-1",
    "team": "Buffalo Bills",
    "projected": 7.4,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 13,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 5.75,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills tried out\u00a0three kickers.\n",
    "report": "",
    "analysis": "Strange. The Bills are still looking at kickers two weeks after waiving veteran Stephen Hauschka and seemingly giving the starting nod to rookie Tyler Bass. Buffalo tried out kickers Matthew McCrane (Kansas State), Tristan Vizcaino (Washington), and Ramiz Ahmed (Nevada). Bass, who made a meager 20 of 28 field goal tries last year at Georgia Southern, would make a decent fantasy option in Week 1. Buffalo is a 6.5-point home favorite against the Jets.\u00a0\n",
    "timestamp": "2020-09-06 09:05 PM",
    "source": "Albert Breer on Twitter ",
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 5.0,
    "week03": 14.0,
    "week04": 16.0,
    "week05": 8.0,
    "week06": 13.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 7.0,
    "week10": 9.0,
    "week11": 1.0,
    "week12": 7.0,
    "week13": 4.0,
    "week14": 9.0,
    "week15": 7.0,
    "week16": 9.0,
    "week17": 3.0,
    "week18": 10.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 5.0, 14.0, 16.0, 8.0, 13.0, 'BYE', 10.0, 7.0, 9.0, 1.0, 7.0, 4.0, 9.0, 7.0, 9.0, 3.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.8, 12.5, 8.1, 8.9, 8.7, 'BYE', 10.9, 10.2, 11.8, 9.3, 9.3, 6.9, 6.8, 7.7, 8.5, 8.8, 11.5, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 8.1, 9.0, 7.1, 3.5, 9.2, 'BYE', 9.4, 12.4, 7.2, 6.6, 11.8, 3.5, 7.0, 7.7, 4.4, 8.6, 7.1, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.0, 11.0, 12.1, 13.6, 13.6, 'BYE', 15.1, 17.6, 11.9, 11.7, 13.3, 5.0, 8.9, 11.5, 8.1, 12.0, 12.4, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17372.png",
    "name": "Chris Boswell",
    "depthchart": "Starter: K-1",
    "team": "Pittsburgh Steelers",
    "projected": 7.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 3,
    "avg_fp2": 9.44,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.19,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers K\u00a0Chris Boswell (concussion) practiced in full Friday.\u00a0\n",
    "report": "",
    "analysis": "Boswell\u00a0was not able to finish Pittsburgh's Week 8 win over the Browns due to a concussion, but he got in a limited session on Thursday before a full practice on Friday. It looks likely he is ready to return on Monday night against the Bears.\u00a0Boswell has averaged just under two field goal attempts per game so far this season.\u00a0\n",
    "timestamp": "2021-11-05 10:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 7.0,
    "week03": 4.0,
    "week04": 7.0,
    "week05": 11.0,
    "week06": 13.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 16.0,
    "week10": 12.0,
    "week11": 14.0,
    "week12": 5.0,
    "week13": 9.0,
    "week14": 2.0,
    "week15": 15.0,
    "week16": 4.0,
    "week17": 17.0,
    "week18": 11.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 7.0, 4.0, 7.0, 11.0, 13.0, 'BYE', 3.0, 16.0, 12.0, 14.0, 5.0, 9.0, 2.0, 15.0, 4.0, 17.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.2, 8.1, 7.4, 5.2, 9.2, 'BYE', 6.3, 9.3, 9.5, 9.9, 8.1, 7.9, 8.9, 7.7, 6.5, 8.5, 7.3, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 8.5, 5.5, 7.5, 6.7, 'BYE', 7.6, 9.2, 9.0, 7.4, 10.7, 4.6, 12.3, 8.9, 5.6, 10.2, 4.1, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 13.1, 11.3, 8.4, 10.9, 11.2, 'BYE', 11.2, 12.3, 12.4, 9.9, 15.0, 8.0, 19.9, 12.7, 9.5, 17.3, 8.8, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050478.png",
    "name": "Jake Elliott",
    "depthchart": "Starter: K-1",
    "team": "Philadelphia Eagles",
    "projected": 6.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 8,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 7.31,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles signed K Jake Elliott to a five-year, $21 million contract extension.\n",
    "report": "",
    "analysis": "The deal includes $10.5 million guaranteed and makes him a top-five paid kicker. Elliott is currently 14 for 14 on field goals and 21 for 23 on extra points this season. The third-year pro has made at least 83.9% of his kicks every season.\n",
    "timestamp": "2019-11-28 04:12 AM",
    "source": "Eagles on Twitter",
    "game_day_logo": "",
    "week01": 7.0,
    "week02": 4.0,
    "week03": 3.0,
    "week04": 12.0,
    "week05": 9.0,
    "week06": 2.0,
    "week07": 2.0,
    "week08": 16.0,
    "week09": 6.0,
    "week10": 14.0,
    "week11": 19.0,
    "week12": 1.0,
    "week13": 17.0,
    "week14": "BYE",
    "week15": 9.0,
    "week16": 10.0,
    "week17": 10.0,
    "week18": 9.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 4.0, 3.0, 12.0, 9.0, 2.0, 2.0, 16.0, 6.0, 14.0, 19.0, 1.0, 17.0, 'BYE', 9.0, 10.0, 10.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 9.5, 7.5, 5.7, 6.2, 8.4, 8.0, 9.4, 9.4, 6.0, 9.0, 8.0, 9.5, 'BYE', 8.0, 10.3, 8.4, 9.9, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 3.9, 4.8, 7.6, 6.6, 4.5, 5.9, 6.0, 1.8, 3.0, 4.2, 7.1, 3.4, 'BYE', 8.3, 7.1, 5.4, 4.9, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 10.6, 6.2, 10.2, 8.8, 6.8, 9.5, 9.4, 6.5, 5.9, 8.6, 13.2, 7.5, 'BYE', 12.3, 9.9, 9.3, 7.2, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.19,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers\u00a0activated K\u00a0Ryan Succop from\u00a0the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Succop, who is vaccinated, apparently attended an indoor dinner with some Titans players during joint practice.\u00a0It was his\u00a0second stay on the COVID-19 list since last December. He was initially put on the lsit on August 24.\n",
    "timestamp": "2021-09-02 03:51 PM",
    "source": "Tampa Bay Buccaneers on Twitter",
    "game_day_logo": "",
    "week01": 7.0,
    "week02": 6.0,
    "week03": 6.0,
    "week04": 15.0,
    "week05": 10.0,
    "week06": 4.0,
    "week07": 8.0,
    "week08": 3.0,
    "week09": "BYE",
    "week10": 7.0,
    "week11": 13.0,
    "week12": 8.0,
    "week13": 6.0,
    "week14": 9.0,
    "week15": 0.0,
    "week16": 16.0,
    "week17": 8.0,
    "week18": 12.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 6.0, 6.0, 15.0, 10.0, 4.0, 8.0, 3.0, 'BYE', 7.0, 13.0, 8.0, 6.0, 9.0, 0.0, 16.0, 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 8.6, 6.5, 6.7, 10.1, 8.8, 8.1, 8.2, 'BYE', 7.8, 9.0, 6.5, 8.4, 6.1, 9.4, 7.7, 9.2, 9.2, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 3.9, 3.8, 7.9, 5.4, 6.5, 6.2, 7.5, 'BYE', 6.5, 4.0, 4.8, 7.8, 5.3, 7.5, 9.3, 9.2, 6.0, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.1, 7.5, 11.0, 8.7, 9.8, 9.9, 12.3, 'BYE', 10.5, 9.9, 8.3, 11.2, 9.6, 9.5, 14.3, 15.2, 9.0, 8.9]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.1,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 20.62,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs coach Andy Reid said S Tyrann Mathieu (quad) \"feels great.\"\n",
    "report": "",
    "analysis": "Murray was on and off the field throughout the second half of the Chiefs' Week 16 game. He was ruled out during the fourth quarter but Kansas City was also bludgeoning the Steelers so there was no need for him to return. Reid's comments point to him playing in Week 17 with no issues.\u00a0\n",
    "timestamp": "",
    "source": "Nate Taylor on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.29,
    "week01": 5.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": -1.0,
    "week06": 8.0,
    "week07": 3.0,
    "week08": 6.0,
    "week09": 11.0,
    "week10": 7.0,
    "week11": 15.0,
    "week12": "BYE",
    "week13": 11.0,
    "week14": 18.0,
    "week15": 3.0,
    "week16": 12.0,
    "week17": 3.0,
    "week18": 3.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 1.0, 0.0, 2.0, -1.0, 8.0, 3.0, 6.0, 11.0, 7.0, 15.0, 'BYE', 11.0, 18.0, 3.0, 12.0, 3.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2, 2.1, 2.3, 3.7, 2.8, 4.6, 'BYE', 8.0, 7.3, 2.9, 7.6, 4.1, 4.8, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6, 0.6, 0.7, 0.4, 0.0, 0.8, 'BYE', 0.8, 2.1, 0.5, 2.2, 0.3, 2.1, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2, 7.9, 8.9, 7.0, 7.2, 7.7, 'BYE', 11.5, 11.2, 8.2, 9.3, 7.7, 9.5, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 4.3,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 23.5,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.19,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers activated CB\u00a0Joe Haden from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "C Kendrick Green also was activated, although he has been dealing with a calf injury and remains questionable for the season finale. Placed on the COVID list on Wednesday,\u00a0Haden is benefitting from the new COVID protocol that allows for a quick return. He should be ready to go for a must-win game against the Ravens.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": NaN,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": 5.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 7.0,
    "week10": 5.0,
    "week11": 0.0,
    "week12": 3.0,
    "week13": 10.0,
    "week14": 0.0,
    "week15": 16.0,
    "week16": -2.0,
    "week17": NaN,
    "week18": 13.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 2.0, 5.0, 5.0, 8.0, 'BYE', 10.0, 7.0, 5.0, 0.0, 3.0, 10.0, 0.0, 16.0, -2.0, nan, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.5, 6.5, 2.9, 6.1, 4.0, 'BYE', 2.4, 6.8, 7.6, 4.8, 5.2, 4.6, 1.1, 5.2, 6.5, 6.8, 5.1, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.8, 6.0, 1.1, 1.6, 1.9, 'BYE', 3.1, 5.1, 4.7, 1.5, 2.5, 2.6, 1.7, 4.7, 6.2, 2.6, 1.4, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.9, 10.3, 9.2, 7.4, 7.1, 'BYE', 8.2, 10.9, 10.1, 7.8, 8.8, 8.0, 8.1, 9.7, 13.3, 9.9, 8.0, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 4.2,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 11,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.88,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams signed S Eric Weddle to play in the playoffs.\n",
    "report": "",
    "analysis": "Weddle retired after the 2019 season after one season with the Rams. He had an incredibly successful career with the Chargers from 2007-15 and the Ravens from 2016-18 and remained capable in 2019, his age-35 season. Waddle, now 37, will serve to replace Jordan Fuller, who was lost for the playoffs with an ankle injury in Week 18. Fuller was\u00a0Pro Football Focus' No. 20 graded safety this season\u00a0and the Rams' defensive play-caller. Weddle will likely be a noticeable step down at this stage in his career but offers the Rams veteran stability at a critical position.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.12,
    "week01": 8.0,
    "week02": 8.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 7.0,
    "week06": 16.0,
    "week07": 7.0,
    "week08": 7.0,
    "week09": 5.0,
    "week10": 1.0,
    "week11": "BYE",
    "week12": 2.0,
    "week13": 10.0,
    "week14": 8.0,
    "week15": 9.0,
    "week16": 11.0,
    "week17": 13.0,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0, 7.0, 7.0, 5.0, 1.0, 'BYE', 2.0, 10.0, 8.0, 9.0, 11.0, 13.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6, 6.6, 4.7, 6.9, 'BYE', 4.7, 7.1, 4.0, 3.7, 5.2, 5.7, 5.2, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8, 4.4, 2.7, 1.9, 'BYE', 0.0, 5.6, 0.0, 3.0, 0.0, 2.2, 5.0, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0, 13.6, 12.9, 10.0, 'BYE', 10.0, 12.6, 6.0, 9.2, 9.6, 10.9, 12.8, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 4.2,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 16.0,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.88,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Patriots DT Christian Barmore suffered a minor knee injury in Week 18 against the Dolphins.\n",
    "report": "",
    "analysis": "Rapoport noted that the initial exams didn't show any major issues but Barmore will still undergo an MRI for further testing. Barmore has 1.5 sacks and three TFLs this year. The first-round rookie has played a rotational role, primarily working as a run-stuffer.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 8.29,
    "week01": 5.0,
    "week02": 19.0,
    "week03": 3.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 12.0,
    "week08": 7.0,
    "week09": 14.0,
    "week10": 11.0,
    "week11": 22.0,
    "week12": 14.0,
    "week13": 8.0,
    "week14": "BYE",
    "week15": 3.0,
    "week16": -1.0,
    "week17": 12.0,
    "week18": 2.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.0, 3.0, 2.0, 5.0, 3.0, 12.0, 7.0, 14.0, 11.0, 22.0, 14.0, 8.0, 'BYE', 3.0, -1.0, 12.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.1, 6.8, 4.0, 6.3, 2.8, 8.5, 3.8, 6.7, 5.1, 7.4, 6.2, 2.6, 'BYE', 5.0, 6.0, 10.4, 7.8, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.1, 6.2, 8.2, 2.9, 0.0, 4.6, 10.5, 1.9, 1.3, 3.2, 3.1, 6.5, 'BYE', 0.4, 3.0, 6.8, 8.8, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 14.5, 17.5, 14.0, 14.6, 6.4, 12.0, 23.4, 9.1, 8.2, 13.2, 10.9, 13.9, 'BYE', 10.2, 9.8, 16.9, 15.2, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.2,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 12,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 20.19,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.69,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.94,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmTextLite": "#A31D2F",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers designated LB\u00a0Lavonte David (foot) for return from injured reserve.\n",
    "report": "",
    "analysis": "David will provide the Buccaneers with a boost at the linebacker position, particularly in coverage. David missed most of the 2021 season with ankle and foot injuries, but his return comes at the right time as the Buccaneers gear up to defend their Super Bowl title.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.59,
    "week01": 2.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 8.0,
    "week06": 4.0,
    "week07": 21.0,
    "week08": 0.0,
    "week09": "BYE",
    "week10": 6.0,
    "week11": 12.0,
    "week12": 12.0,
    "week13": 11.0,
    "week14": 5.0,
    "week15": 6.0,
    "week16": 16.0,
    "week17": 3.0,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.0, 0.0, 9.0, 8.0, 4.0, 21.0, 0.0, 'BYE', 6.0, 12.0, 12.0, 11.0, 5.0, 6.0, 16.0, 3.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.9, 4.1, 3.3, 9.2, 4.8, 5.2, 3.7, 'BYE', 5.3, 7.1, 4.9, 7.4, 4.5, 7.5, 8.2, 6.8, 7.4, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.3, 2.5, 3.6, 3.4, 2.7, 2.2, 'BYE', 3.7, 3.8, 1.9, 4.2, 0.0, 2.2, 2.4, 3.8, 4.1, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 11.6, 5.8, 5.5, 8.8, 8.2, 9.0, 7.2, 'BYE', 11.5, 10.5, 9.2, 11.6, 6.8, 8.4, 8.1, 10.2, 12.9, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 4.0,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 19.94,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.06,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys activated LB Micah Parsons from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "The Cowboys also activated LT Tyron Smith,\u00a0LB Keanu Neal, RB Tony Pollard and LB Francis Bernard from the list. Safety Jayron Kearse is the only player on Dallas's COVID list that wasn't spotted with practice but he is also dealing with a hamstring issue. Parsons was one of the most dominant pass-rushers the NFL has ever seen. He totaled 13 sacks and three forced fumbles in 16 games. His return bodes well for the Cowboys' odds of beating the 49ers in the Wild Card round.\n",
    "timestamp": "",
    "source": "Michael Gehlken on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.76,
    "week01": 7.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 5.0,
    "week06": 6.0,
    "week07": "BYE",
    "week08": 2.0,
    "week09": 3.0,
    "week10": 15.0,
    "week11": 8.0,
    "week12": 5.0,
    "week13": 11.0,
    "week14": 16.0,
    "week15": 16.0,
    "week16": 10.0,
    "week17": 1.0,
    "week18": 5.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 7.0, 7.0, 8.0, 5.0, 6.0, 'BYE', 2.0, 3.0, 15.0, 8.0, 5.0, 11.0, 16.0, 16.0, 10.0, 1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 4.1, 3.7, 4.3, 4.3, 5.9, 'BYE', 6.4, 4.9, 3.4, 6.2, 4.6, 4.8, 7.6, 7.4, 5.9, 4.3, 4.4, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 0.4, 3.1, 2.3, 3.2, 5.9, 'BYE', 1.8, 4.3, 3.8, 3.4, 2.0, 2.0, 0.0, 5.2, 3.3, 1.4, 0.7, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.2, 7.6, 7.2, 7.2, 12.0, 'BYE', 7.8, 10.2, 9.9, 11.5, 8.0, 7.6, 6.3, 10.7, 8.6, 7.0, 5.9, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 3.9,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 19.44,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Speaking Thursday, Kliff Kingsbury said that J.J. Watt (shoulder/IR) returned to practice on Thursday and was \"very limited.\"\n",
    "report": "",
    "analysis": "He also noted that the Cardinals won't decide if Watt would play 'for a while.\" Watt is no stranger to playing in the playoffs in pain -- he played through a torn pectoral with the Texans in 2020 ahead of schedule. But he was somewhat limited in that return and should be considered unlikely to provide a full complement of snaps if active.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.71,
    "week01": 16.0,
    "week02": 1.0,
    "week03": 15.0,
    "week04": 5.0,
    "week05": 8.0,
    "week06": 12.0,
    "week07": 11.0,
    "week08": 1.0,
    "week09": 12.0,
    "week10": 3.0,
    "week11": 8.0,
    "week12": "BYE",
    "week13": 11.0,
    "week14": 2.0,
    "week15": 3.0,
    "week16": 2.0,
    "week17": 3.0,
    "week18": 1.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 1.0, 15.0, 5.0, 8.0, 12.0, 11.0, 1.0, 12.0, 3.0, 8.0, 'BYE', 11.0, 2.0, 3.0, 2.0, 3.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 6.4, 9.9, 4.8, 8.7, 5.2, 9.8, 6.4, 6.5, 7.8, 6.2, 'BYE', 6.3, 5.8, 6.2, 4.6, 3.5, 5.4, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.0, 7.0, 2.8, 6.0, 5.1, 5.6, 5.3, 2.9, 4.8, 3.4, 'BYE', 6.6, 4.6, 4.4, 1.6, 3.3, 1.1, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 13.8, 11.9, 12.1, 14.5, 12.0, 14.0, 13.7, 10.2, 12.5, 10.9, 'BYE', 13.2, 12.9, 11.6, 8.3, 9.5, 8.4, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 3.8,
    "opponent": "New England Patriots",
    "opp_rank_pts": 8,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 16.88,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.88,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills activated DT Star Lotulelei from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Spencer Brown, a catalyst on Buffalo's o-line this year, was also activated from the COVID list. With two star players presumably back for the team's divisional showdown against New England, Buffalo is getting healthy (sans All-Pro CB Tre'Davious White's absence) at the right time. The Bills square off against New England in two of their next four games.\n",
    "timestamp": "",
    "source": "Chris Brown on Twitter",
    "game_day_logo": "",
    "avg_fp2": 8.29,
    "week01": 3.0,
    "week02": 22.0,
    "week03": 7.0,
    "week04": 23.0,
    "week05": 11.0,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 8.0,
    "week10": 12.0,
    "week11": -4.0,
    "week12": 11.0,
    "week13": 3.0,
    "week14": 1.0,
    "week15": 7.0,
    "week16": 5.0,
    "week17": 8.0,
    "week18": 13.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 22.0, 7.0, 23.0, 11.0, 1.0, 'BYE', 10.0, 8.0, 12.0, -4.0, 11.0, 3.0, 1.0, 7.0, 5.0, 8.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.7, 6.3, 5.9, 4.2, 8.5, 'BYE', 9.6, 7.6, 9.9, 7.6, 6.5, 3.3, 5.6, 4.9, 4.8, 8.6, 9.0, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 3.1, 5.0, 5.5, 'BYE', 5.8, 3.4, 6.0, 2.2, 1.4, 4.1, 2.7, 5.7, 3.9, 5.7, 5.4, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.2, 11.9, 10.4, 14.0, 12.8, 'BYE', 12.7, 11.1, 13.4, 9.7, 10.2, 11.8, 9.8, 13.4, 12.9, 14.3, 12.8, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 3.6,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.19,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals activated DE\u00a0Trey Hendrickson from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Along with their top pass rusher, the Bengals will get back Joe Mixon, S Vonn Bell, DT Larry Ogunjobi, OG Quinton Spain, DT B.J. Hill, and C Trey Hopkins back ahead of the Wild Card Round. Cincinnati is currently a 6.5-point favorite over the Raiders according to PointsBet.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.18,
    "week01": 5.0,
    "week02": 9.0,
    "week03": 12.0,
    "week04": 1.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": 6.0,
    "week08": 7.0,
    "week09": 1.0,
    "week10": "BYE",
    "week11": 10.0,
    "week12": 13.0,
    "week13": 9.0,
    "week14": 5.0,
    "week15": 9.0,
    "week16": 3.0,
    "week17": -1.0,
    "week18": 5.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0, 7.0, 6.0, 7.0, 1.0, 'BYE', 10.0, 13.0, 9.0, 5.0, 9.0, 3.0, -1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4, 4.4, 7.3, 4.3, 'BYE', 3.9, 6.0, 4.4, 5.4, 6.7, 5.9, 4.9, 4.8, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8, 1.4, 9.1, 4.8, 'BYE', 2.1, 2.3, 2.4, 2.0, 3.0, 3.7, 1.6, 0.0, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7, 7.9, 16.8, 10.8, 'BYE', 7.6, 10.1, 9.9, 9.6, 10.0, 11.1, 8.3, 7.4, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 2.8,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.81,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles activated DE Derek Barnett from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Barnett was added to the COVID list earlier this week but the new rules allowed him to return with no time\u00a0missed. He has two sacks and seven TFLs this year. Expect the Eagles to keep Taylor Heinicke and the struggling Washington offense in check this week.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.82,
    "week01": 10.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": -1.0,
    "week05": 10.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 15.0,
    "week09": 0.0,
    "week10": 9.0,
    "week11": 5.0,
    "week12": 5.0,
    "week13": 5.0,
    "week14": "BYE",
    "week15": 3.0,
    "week16": 10.0,
    "week17": 6.0,
    "week18": -3.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 1.0, 5.0, -1.0, 10.0, 1.0, 1.0, 15.0, 0.0, 9.0, 5.0, 5.0, 5.0, 'BYE', 3.0, 10.0, 6.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.5, 4.6, 3.8, 2.5, 2.7, 0.5, 3.9, 3.2, 4.7, 5.1, 5.3, 6.0, 'BYE', 6.9, 7.1, 6.6, 4.2, 2.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.1, 3.1, 4.1, 2.9, 1.6, 0.0, 1.4, 2.9, 1.4, 2.1, 3.2, 3.7, 'BYE', 3.2, 4.2, 4.6, 2.3, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.0, 7.7, 10.2, 8.9, 7.0, 6.9, 9.2, 8.4, 9.0, 9.4, 11.2, 10.8, 'BYE', 10.1, 11.5, 12.2, 8.7, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 2.4,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 1,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.81,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers placed CB Ambry Thomas on the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "The 49ers are in a difficult spot with corners K'Waun Williams and Dontae Johnson placed on the list earlier this week.\u00a0Thomas was forced into a starting role in Week 14 and has held onto the gig ever since. If none of the corners can get cleared in time for Week 18, expect Matt Stafford to tee off on the 49ers.\n",
    "timestamp": "",
    "source": "Matt Barrows on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.29,
    "week01": 4.0,
    "week02": 8.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 4.0,
    "week08": 6.0,
    "week09": 1.0,
    "week10": 10.0,
    "week11": 11.0,
    "week12": 6.0,
    "week13": 9.0,
    "week14": 9.0,
    "week15": 9.0,
    "week16": 5.0,
    "week17": 9.0,
    "week18": 9.0,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 8.0, 0.0, 2.0, 5.0, 'BYE', 4.0, 6.0, 1.0, 10.0, 11.0, 6.0, 9.0, 9.0, 9.0, 5.0, 9.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.2, 4.6, 2.2, 0.8, 'BYE', 2.9, 4.7, 1.8, 2.0, 7.5, 3.2, 3.3, 4.4, 7.0, 5.4, 7.5, 4.7, 2.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 3.1, 0.0, 0.0, 'BYE', 1.1, 4.5, 0.4, 0.0, 1.5, 1.6, 1.7, 1.8, 3.0, 2.0, 4.1, 3.8, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 11.1, 7.1, 3.7, 4.0, 'BYE', 7.7, 10.3, 5.7, 5.6, 8.2, 7.4, 7.3, 7.5, 8.6, 8.8, 9.0, 9.9, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 1.1,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 23.69,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.81,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "ESPN's Jeremy Fowler reports that Raiders DL Darius Philon tore his patellar tendon in Week 18's win over the Chargers and is out for the playoffs.\u00a0\n",
    "report": "",
    "analysis": "Philon will be a free agent after the season. He finished with two sacks and two passes defensed as a rotational lineman. The injury won't be great for his market, but he played well enough in 2021 to be in some team's plans.\n",
    "timestamp": "",
    "source": "Jeremy Fowler on Twitter",
    "game_day_logo": "",
    "avg_fp2": NaN,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 3.0,
    "week06": 13.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": 6.0,
    "week10": -2.0,
    "week11": 4.0,
    "week12": 1.0,
    "week13": 4.0,
    "week14": -1.0,
    "week15": 1.0,
    "week16": 6.0,
    "week17": 2.0,
    "week18": NaN,
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 4.0, 1.0, 3.0, 13.0, 6.0, 'BYE', 6.0, -2.0, 4.0, 1.0, 4.0, -1.0, 1.0, 6.0, 2.0, nan]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 3.9, 8.0, 5.9, 5.2, 4.1, 2.2, 'BYE', 3.3, 4.5, 3.1, 4.8, 5.0, 6.5, 6.0, 3.2, 2.2, 3.2, 1.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 5.1, 2.8, 1.4, 2.5, 0.4, 'BYE', 1.9, 3.2, 3.1, 3.6, 0.7, 1.0, 0.0, 0.9, 0.7, 0.0, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.1, 11.4, 6.6, 7.6, 7.2, 6.4, 'BYE', 8.1, 10.0, 8.2, 6.9, 7.4, 7.5, 6.7, 6.9, 6.8, 5.9, 7.5]
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