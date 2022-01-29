var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 29 January 2022 04:21 PM (central time)"};
$scope.week = {"nflWeek": "Conference Championships"};
$scope.playoffLogo = {"src": "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/NFL_playoffs_logo_new.svg/1200px-NFL_playoffs_logo_new.svg.png"}

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 20.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 2,
    "avg_fp2": 21.78,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.01,
    "fanduelSalary": "$5",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 38.06,
    "week20": 40.02,
    "week21": "",
    "week22": ""
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
                         data: [33.28, 25.02, 24.9, 32.72, 20.98, 24.98, 8.74, 15.0, 10.44, 36.24, 8.5, 'BYE', 13.56, 20.32, 30.6, 22.32, 20.86, 26.2, 38.06, 40.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2, 24.1, 22.6, 21.5, 19.6, 22.2, 'BYE', 18.6, 18.8, 19.3, 20.2, 20.4, 18.6, 19.5, 17.0, 20.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1, 22.3, 16.4, 17.1, 23.0, 21.0, 'BYE', 13.9, 15.4, 22.3, 14.8, 18.0, 18.1, 18.1, 15.6, 17.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5, 31.5, 30.4, 26.3, 29.6, 32.7, 'BYE', 28.4, 26.5, 32.3, 26.6, 27.5, 24.1, 27.5, 23.9, 27.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 20.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 20.45,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 17.77,
    "fanduelSalary": "$5",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 24.28,
    "week20": 29.24,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24, 27.16, 24.2, 15.06, 11.82, 'BYE', 22.98, 24.0, 23.48, 16.46, 9.68, 16.26, 19.52, 24.28, 29.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2, 22.1, 23.9, 20.6, 'BYE', 16.9, 21.1, 17.8, 22.3, 20.0, 20.4, 19.5, 20.0, 17.6, 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8, 16.1, 16.8, 13.5, 'BYE', 20.4, 16.3, 14.0, 18.5, 19.3, 16.1, 13.1, 16.8, 14.0, 15.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1, 26.4, 25.4, 25.9, 'BYE', 28.4, 25.8, 22.0, 25.2, 28.8, 26.8, 23.0, 26.0, 24.0, 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 19.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 20.52,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 20.29,
    "fanduelSalary": "$5",
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
    "week19": 17.56,
    "week20": 13.42,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34, 23.84, 27.64, 21.26, 9.38, 'BYE', 9.02, 17.4, 18.6, 22.22, 12.78, 38.1, 34.84, 'DNP', 17.56, 13.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3, 19.8, 20.5, 21.5, 'BYE', 19.9, 18.2, 14.9, 18.4, 16.1, 19.6, 19.3, 'DNP', 19.2, 18.2, 19.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7, 19.0, 11.5, 11.4, 'BYE', 10.0, 9.6, 11.0, 13.5, 8.8, 13.0, 12.1, 'DNP', 11.5, 15.1, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3, 26.9, 22.7, 21.4, 'BYE', 18.9, 16.8, 23.8, 23.0, 18.0, 22.2, 22.4, 'DNP', 26.0, 29.6, 31.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 15.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 12,
    "avg_fp2": 16.05,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.43,
    "fanduelSalary": "$3",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 5.98,
    "week20": 4.24,
    "week21": "",
    "week22": ""
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
                         data: [14.76, 19.56, 15.68, 9.6, 'DNP', 'BYE', 7.24, 27.28, 20.34, 15.38, 15.64, 12.2, 17.96, 20.14, 13.8, 15.18, 'DNP', 14.74, 5.98, 4.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 15.8, 21.7, 19.4, 'DNP', 'BYE', 18.7, 14.5, 14.9, 17.6, 16.2, 19.2, 17.7, 16.2, 19.3, 16.7, 'DNP', 15.3, 16.3, 16.2, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 4.6, 17.6, 13.4, 'DNP', 'BYE', 20.1, 10.3, 10.6, 9.3, 10.5, 13.5, 13.1, 14.0, 10.8, 14.1, 'DNP', 10.5, 9.5, 9.4, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.0, 18.5, 24.5, 18.9, 'DNP', 'BYE', 23.6, 13.2, 14.9, 17.1, 18.2, 18.6, 17.7, 19.3, 19.3, 20.1, 'DNP', 16.8, 15.5, 16.6, 17.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 14.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 16,
    "avg_fp2": 10.81,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": "DNP",
    "week20": 7.4,
    "week21": "",
    "week22": ""
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
                         data: [8.7, 2.6, 15.9, 18.4, 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6, 'BYE', 9.7, 17.7, 8.0, 9.6, 'DNP', 'DNP', 'DNP', 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 13.4, 11.3, 11.8, 11.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.7, 'BYE', 13.7, 14.6, 14.2, 17.3, 'DNP', 'DNP', 'DNP', 14.4, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 6.3, 7.4, 8.3, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 8.1, 7.0, 11.2, 10.0, 'DNP', 'DNP', 'DNP', 6.7, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 15.4, 11.6, 17.5, 14.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.3, 'BYE', 11.9, 16.3, 16.1, 18.4, 'DNP', 'DNP', 'DNP', 14.5, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241555.png",
    "name": "Elijah Mitchell",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 13.8,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 7,
    "avg_fp2": 14.7,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 15.0,
    "week20": 8.6,
    "week21": "",
    "week22": ""
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
                         data: ['DNP', 6.3, 'DNP', 'DNP', 7.2, 'BYE', 16.7, 19.7, 10.4, 9.1, 'DNP', 25.3, 15.9, 'DNP', 'DNP', 'DNP', 20.0, 8.5, 15.0, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 'DNP', 'DNP', 7.3, 'BYE', 14.7, 13.0, 14.5, 14.3, 'DNP', 15.4, 17.4, 'DNP', 'DNP', 'DNP', 17.9, 14.4, 13.3, 14.2, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.1, 'DNP', 'DNP', 1.4, 'BYE', 5.1, 4.9, 5.7, 8.3, 'DNP', 7.9, 9.6, 'DNP', 'DNP', 'DNP', 9.3, 9.1, 6.7, 7.0, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 22.1, 'DNP', 'DNP', 10.6, 'BYE', 15.9, 18.1, 17.9, 18.2, 'DNP', 17.7, 21.7, 'DNP', 'DNP', 'DNP', 18.2, 17.3, 19.4, 19.8, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 12.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 22,
    "avg_fp2": 16.68,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.3,
    "fanduelSalary": "$4",
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
    "week19": 9.6,
    "week20": 19.5,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0, 23.8, 11.9, 23.1, 25.5, 'BYE', 24.3, 30.3, 9.4, 7.8, 6.5, 28.5, 12.1, 'DNP', 9.6, 19.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0, 12.1, 15.9, 12.4, 'BYE', 13.4, 15.4, 19.7, 14.9, 13.1, 13.8, 18.2, 'DNP', 16.5, 11.6, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3, 8.5, 17.4, 13.8, 'BYE', 18.0, 9.7, 17.4, 8.8, 10.2, 9.0, 7.1, 'DNP', 11.5, 10.0, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3, 18.6, 22.5, 15.8, 'BYE', 23.7, 15.9, 33.4, 15.9, 17.3, 14.9, 20.5, 'DNP', 27.3, 20.3, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 9.4,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neg": 24,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$3",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 10.0,
    "week20": 4.3,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.0, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.3, 5.7, 7.9, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.2, 4.6, 3.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.9, 12.4, 13.4, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 8.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neg": 24,
    "avg_fp2": 8.15,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 5.8,
    "week20": 1.0,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2, 0.4, 6.6, 9.6, 4.1, 'BYE', 3.0, 20.4, 7.9, 12.5, 20.0, 17.4, 5.4, 5.8, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5, 5.8, 5.0, 6.7, 'BYE', 5.9, 9.2, 8.0, 6.4, 5.7, 8.9, 9.3, 9.4, 6.4, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8, 3.7, 4.2, 1.4, 'BYE', 5.3, 3.2, 6.0, 6.8, 4.3, 3.0, 0.0, 3.5, 2.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4, 12.8, 9.8, 13.9, 'BYE', 11.4, 9.0, 11.1, 11.6, 8.6, 11.7, 15.1, 8.8, 10.0, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116389.png",
    "name": "Samaje Perine",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 5.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 22,
    "avg_fp2": 4.65,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.3,
    "fanduelSalary": "$1",
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
    "week19": 0.2,
    "week20": 0.9,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 0.0, 1.2, 2.7, 16.3, 'DNP', 14.0, 2.6, 4.7, 'BYE', 3.6, 2.0, 5.1, 5.3, 5.3, 1.6, 1.9, 0.0, 0.2, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.4, 2.5, 5.3, 4.1, 'DNP', 4.9, 6.5, 4.3, 'BYE', 4.8, 5.1, 6.0, 6.0, 5.6, 5.3, 6.1, 7.4, 5.9, 4.8, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.0, 1.2, 10.1, 0.0, 'DNP', 3.8, 3.5, 3.2, 'BYE', 4.8, 2.5, 7.3, 3.8, 5.4, 2.8, 1.7, 3.5, 0.0, 1.6, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.8, 9.1, 18.8, 5.5, 'DNP', 10.4, 15.1, 11.6, 'BYE', 9.2, 10.4, 13.3, 8.5, 9.0, 5.7, 4.7, 5.2, 4.4, 5.8, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 5.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 16,
    "avg_fp2": 10.39,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 0.4,
    "week20": "DNP",
    "week21": "",
    "week22": ""
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
                         data: [0.4, 5.8, 4.9, 12.8, 6.0, 22.4, 6.5, 14.0, 9.2, 24.9, 3.1, 'BYE', 9.5, 11.4, 1.2, 10.0, 24.2, 6.2, 0.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2, 11.8, 12.1, 12.5, 11.4, 11.6, 'BYE', 7.7, 8.1, 7.7, 7.9, 12.5, 10.7, 8.4, 'DNP', 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2, 10.3, 1.0, 9.1, 0.7, 17.2, 'BYE', 0.0, 7.4, 2.0, 0.3, 1.2, 4.1, 2.8, 'DNP', 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3, 17.2, 8.5, 13.2, 6.0, 23.4, 'BYE', 8.3, 13.6, 8.8, 7.7, 7.7, 19.1, 5.8, 'DNP', 6.7]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 21.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$5",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 14.6,
    "week20": 26.8,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0, 17.7, 'BYE', 15.1, 22.9, 24.8, 30.2, 16.3, 18.5, 23.1, 14.6, 26.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4, 17.7, 21.1, 17.5, 'BYE', 18.7, 16.6, 16.7, 20.3, 14.9, 25.1, 18.8, 13.2, 12.2, 21.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2, 23.2, 16.5, 18.7, 'BYE', 10.8, 10.9, 7.1, 22.8, 13.3, 14.3, 14.4, 14.6, 14.1, 16.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6, 27.3, 21.2, 24.8, 'BYE', 18.8, 18.5, 16.4, 28.8, 21.4, 20.0, 17.5, 19.9, 19.3, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 16.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 2,
    "avg_fp2": 15.02,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$4",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 14.2,
    "week20": 26.3,
    "week21": "",
    "week22": ""
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
                         data: [31.6, 4.4, 7.2, 42.1, 11.3, 18.1, 9.7, 21.4, 5.3, 24.0, 15.5, 'BYE', 3.2, 9.6, 26.8, 2.9, 7.2, 0.7, 14.2, 26.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5, 23.4, 15.6, 16.1, 15.3, 19.3, 'BYE', 11.5, 18.3, 10.8, 13.8, 14.9, 15.3, 10.3, 15.4, 16.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2, 14.5, 9.6, 10.6, 9.5, 16.9, 'BYE', 11.7, 6.4, 8.0, 6.1, 7.8, 7.8, 0.3, 7.8, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7, 24.4, 22.7, 18.6, 19.4, 21.2, 'BYE', 23.3, 21.8, 22.3, 14.9, 20.9, 17.2, 14.8, 15.2, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 14.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 16.28,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
    "fanduelSalary": "$4",
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
    "week19": 18.4,
    "week20": 13.6,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9, 11.7, 30.1, 11.6, 5.9, 'BYE', 11.5, 5.4, 7.7, 22.8, 0.8, 16.0, 50.1, 3.6, 18.4, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3, 6.0, 14.3, 15.8, 'BYE', 19.3, 16.8, 10.3, 9.8, 9.1, 12.3, 10.1, 12.2, 12.3, 14.5, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8, 11.1, 11.7, 12.4, 'BYE', 14.5, 8.9, 4.3, 4.6, 8.2, 4.7, 4.4, 3.4, 4.3, 4.2, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9, 22.7, 27.0, 26.8, 'BYE', 21.1, 16.0, 17.2, 18.4, 24.0, 22.0, 22.0, 29.5, 21.6, 21.8, 21.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 12.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 12,
    "avg_fp2": 18.23,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$4",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 18.5,
    "week20": 9.8,
    "week21": "",
    "week22": ""
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
                         data: [27.4, 13.1, 7.7, 31.7, 14.6, 'BYE', 17.5, 20.1, 8.8, 27.8, 15.9, 20.3, 'DNP', 12.4, 16.9, 23.6, 15.7, 26.96, 18.5, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 14.5, 12.9, 9.5, 19.4, 'BYE', 19.7, 10.7, 14.4, 10.2, 18.4, 14.4, 'DNP', 15.0, 13.3, 17.1, 11.0, 11.0, 13.8, 17.8, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.3, 2.4, 9.5, 11.1, 'BYE', 7.4, 8.4, 9.6, 8.1, 15.2, 11.3, 'DNP', 6.9, 7.0, 5.8, 6.0, 13.2, 13.8, 11.2, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.0, 8.7, 15.9, 17.1, 'BYE', 13.2, 18.0, 19.5, 15.9, 24.9, 20.7, 'DNP', 19.4, 15.5, 21.4, 19.0, 19.3, 26.9, 25.8, 28.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 9.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
    "fanduelSalary": "$3",
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
    "week19": 1.5,
    "week20": 13.1,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7, 5.9, 9.7, 11.7, 10.8, 'BYE', 2.5, 20.4, 24.3, 13.9, 3.3, 37.4, 7.7, 'DNP', 1.5, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7, 5.5, 8.8, 7.5, 'BYE', 11.3, 13.8, 7.6, 6.3, 7.7, 8.4, 6.2, 'DNP', 7.9, 13.9, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7, 5.0, 2.7, 8.2, 'BYE', 4.6, 3.7, 5.2, 13.6, 6.5, 10.8, 7.3, 'DNP', 10.3, 12.5, 11.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5, 10.5, 7.0, 17.4, 'BYE', 10.4, 8.4, 9.3, 21.5, 14.0, 14.1, 17.4, 'DNP', 18.9, 22.3, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 7.5,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 12,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 9.1,
    "week20": 0.0,
    "week21": "",
    "week22": ""
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
                         data: [0.0, 1.1, 12.5, 2.0, 4.2, 'BYE', 1.4, 8.5, 15.7, 4.1, 18.0, 11.0, 7.0, 15.6, 4.1, 12.0, 11.4, 13.7, 9.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 1.6, 3.5, 4.0, 9.2, 'BYE', 3.2, 2.5, 2.9, 5.2, 6.7, 7.5, 8.0, 5.8, 8.6, 8.7, 8.1, 6.4, 9.7, 11.4, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 6.9, 9.0, 12.6, 6.2, 'BYE', 1.8, 5.2, 8.2, 2.6, 1.4, 6.0, 6.5, 5.9, 7.6, 8.0, 4.7, 7.6, 8.1, 7.3, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.4, 18.9, 14.4, 10.0, 'BYE', 7.9, 18.2, 19.0, 11.1, 9.5, 14.4, 16.1, 16.1, 16.9, 18.3, 13.7, 18.6, 17.6, 16.8, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 7.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
    "fanduelSalary": "$2",
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
    "week19": 10.9,
    "week20": 2.7,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 10.8, 11.6, 16.3, 4.4, 1.2, 5.9, 17.24, 1.6, 'BYE', 9.3, 2.3, 11.0, 8.3, 18.1, 16.0, 11.6, 'DNP', 10.9, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.2, 11.2, 7.1, 6.0, 5.2, 4.0, 6.7, 4.8, 'BYE', 7.5, 7.6, 4.5, 5.1, 5.5, 6.8, 4.4, 'DNP', 6.3, 8.8, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.8, 13.8, 7.7, 13.0, 11.7, 6.3, 10.2, 10.8, 'BYE', 3.7, 6.6, 6.5, 7.9, 4.6, 5.3, 5.6, 'DNP', 6.5, 12.3, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.5, 16.3, 12.2, 22.2, 16.9, 8.4, 15.1, 13.4, 'BYE', 7.9, 12.4, 13.1, 13.5, 10.7, 10.7, 12.7, 'DNP', 14.1, 19.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png",
    "name": "Van Jefferson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 6.9,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 4.6,
    "week20": 5.4,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 1.9, 6.2, 18.0, 2.1, 3.4, 12.3, 10.3, 5.6, 6.9, 'BYE', 16.8, 13.1, 13.8, 4.3, 1.1, 8.3, 4.1, 4.6, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.4, 5.5, 5.6, 5.9, 6.6, 2.8, 5.2, 8.1, 6.1, 'BYE', 9.7, 7.1, 7.0, 10.4, 7.9, 9.0, 6.9, 7.5, 5.6, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 1.7, 1.7, 0.0, 0.4, 1.3, 6.1, 9.4, 'BYE', 2.6, 8.6, 14.2, 9.0, 6.8, 4.6, 8.3, 10.6, 8.9, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 11.8, 4.0, 5.4, 3.9, 7.6, 6.0, 8.2, 11.6, 13.1, 'BYE', 9.0, 18.0, 17.5, 14.6, 9.2, 7.3, 13.0, 16.0, 14.1, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 6.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$3",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 15.0,
    "week20": 9.9,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0, 10.4, 3.3, 1.1, 'DNP', 'DNP', 'BYE', 16.6, 9.8, 16.7, 1.2, 11.7, 12.4, 2.8, 15.0, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4, 7.9, 6.0, 'DNP', 'DNP', 'BYE', 5.1, 4.0, 4.8, 6.8, 5.5, 15.2, 9.2, 9.5, 8.3, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0, 9.0, 6.5, 'DNP', 'DNP', 'BYE', 9.2, 12.6, 10.9, 8.9, 10.9, 8.2, 12.2, 9.3, 5.6, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8, 15.1, 13.4, 'DNP', 'DNP', 'BYE', 16.3, 20.6, 17.5, 15.5, 18.6, 15.5, 17.1, 17.4, 15.9, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036416.png",
    "name": "Byron Pringle",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 2,
    "avg_fp2": 6.11,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 18.2,
    "week20": 11.4,
    "week21": "",
    "week22": ""
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
                         data: [1.1, 13.3, 2.2, 3.3, 6.1, 7.0, 9.8, 1.7, 0.0, 12.6, 4.2, 'BYE', 1.9, 3.3, 3.7, 22.5, 5.0, 8.1, 18.2, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.0, 2.0, 1.2, 0.7, 2.4, 4.0, 4.0, 2.9, 2.8, 2.3, 6.7, 'BYE', 4.0, 6.2, 5.0, 6.2, 4.8, 9.7, 6.1, 3.4, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.3, 0.0, 0.0, 0.0, 'BYE', 0.4, 0.0, 0.0, 0.0, 1.9, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 7.3, 7.5, 6.1, 8.4, 8.4, 15.1, 6.9, 8.1, 8.0, 8.4, 'BYE', 5.5, 8.2, 8.3, 8.2, 12.5, 10.4, 10.4, 9.8, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886598.png",
    "name": "Jauan Jennings",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 12,
    "avg_fp2": 3.05,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 4.4,
    "week20": 1.1,
    "week21": "",
    "week22": ""
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
                         data: [0.0, 8.7, 0.0, 1.9, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.8, 0.9, 9.4, 1.3, 6.1, 10.3, 2.9, 3.5, 24.4, 4.4, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.2, 1.0, 1.4, 'DNP', 'BYE', 'DNP', -1.6, 0.1, 2.3, 2.6, 5.1, 2.7, 1.6, 5.2, 5.4, 5.4, 4.1, 5.5, 5.8, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.6, 1.1, 5.3, 4.2, 'DNP', 'BYE', 'DNP', 3.9, 1.3, 1.1, 1.2, 1.0, 3.4, 4.2, 4.8, 5.7, 7.5, 5.9, 11.2, 11.5, 14.5]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 10.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 6.51,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 6.1,
    "week20": 7.1,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4, 6.1, 7.1, 4.0, 7.6, 9.5, 'BYE', 0.8, 7.3, 'DNP', 'DNP', 6.6, 9.9, 20.5, 6.1, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0, 8.1, 17.4, 7.3, 4.1, 'BYE', 5.5, 4.2, 'DNP', 'DNP', 5.1, 7.7, 5.4, 3.7, 5.7, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5, 1.4, 4.0, 1.2, 2.5, 'BYE', 3.5, 5.0, 'DNP', 'DNP', 6.4, 5.0, 1.8, 9.0, 10.3, 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8, 11.3, 7.5, 9.7, 10.8, 'BYE', 9.2, 8.8, 'DNP', 'DNP', 8.7, 9.4, 5.6, 14.0, 14.5, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 9.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 2,
    "avg_fp2": 13.69,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.56,
    "fanduelSalary": "$4",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 23.38,
    "week20": 19.6,
    "week21": "",
    "week22": ""
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
                         data: [22.6, 20.4, 13.9, 4.3, 14.7, 13.9, 10.0, 2.7, 15.3, 15.9, 16.3, 'BYE', 4.2, 4.2, 36.1, 'DNP', 10.9, 11.4, 23.38, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3, 10.4, 12.0, 10.3, 14.7, 15.7, 'BYE', 6.3, 13.7, 11.5, 'DNP', 10.4, 7.2, 11.4, 10.1, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4, 8.4, 10.5, 4.7, 11.2, 10.7, 'BYE', 4.5, 10.1, 10.2, 'DNP', 8.4, 3.6, 4.2, 5.1, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3, 14.5, 18.6, 15.6, 18.8, 18.5, 'BYE', 13.3, 21.4, 20.0, 'DNP', 16.4, 11.4, 12.7, 13.6, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 8.0,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 12,
    "avg_fp2": 12.23,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.83,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 2.3,
    "week20": 8.3,
    "week21": "",
    "week22": ""
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
                         data: [9.8, 3.7, 13.6, 6.0, 'DNP', 'BYE', 'DNP', 'DNP', 17.1, 13.5, 11.4, 1.8, 35.1, 27.6, 12.3, 3.1, 4.0, 3.5, 2.3, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.4, 8.1, 8.2, 12.3, 'DNP', 'BYE', 'DNP', 'DNP', 4.6, 11.0, 4.0, 6.8, 5.6, 10.1, 4.9, 9.9, 11.0, 5.7, 11.7, 11.3, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 3.3, 7.7, 10.4, 'DNP', 'BYE', 'DNP', 'DNP', 4.1, 16.4, 15.1, 5.7, 12.2, 7.2, 6.3, 2.9, 16.9, 6.1, 5.6, 5.2, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.7, 19.2, 17.5, 14.8, 'DNP', 'BYE', 'DNP', 'DNP', 11.6, 24.8, 20.9, 10.5, 26.3, 16.9, 14.1, 12.8, 24.0, 18.9, 14.0, 14.2, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 4.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 6.49,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.35,
    "fanduelSalary": "$2",
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
    "week19": 15.4,
    "week20": 10.6,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6, 9.0, 22.6, 5.3, 4.4, 'BYE', 1.9, 2.4, 3.5, 7.6, 3.3, 6.1, 5.2, 'DNP', 15.4, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5, 5.9, 7.6, 13.5, 'BYE', 11.3, 5.0, 6.8, 2.3, 3.8, 6.7, 5.7, 'DNP', 7.0, 4.3, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3, 2.6, 10.8, 1.0, 'BYE', 1.1, 1.8, 4.1, 3.7, 4.4, 1.5, 3.8, 'DNP', 2.4, 0.6, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4, 8.0, 18.9, 7.7, 'BYE', 8.1, 4.4, 8.1, 6.9, 7.3, 7.7, 6.9, 'DNP', 9.0, 6.4, 7.0]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9354.png",
    "name": "Robbie Gould",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 8.8,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.38,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 16.0,
    "week20": 8.0,
    "week21": "",
    "week22": ""
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
                         data: [14.0, 6.0, 4.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.0, 9.0, 14.0, 11.0, 7.0, 8.0, 7.0, 6.0, 11.0, 10.0, 16.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 11.0, 8.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.2, 7.0, 8.5, 9.0, 9.1, 8.0, 8.5, 8.8, 9.1, 8.1, 8.8, 5.7, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.0, 6.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.6, 5.8, 7.2, 6.6, 7.9, 6.6, 8.5, 7.2, 6.7, 6.3, 7.8, 3.8, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 9.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.1, 10.6, 11.9, 11.2, 12.3, 10.9, 13.3, 12.0, 11.9, 11.9, 12.3, 8.5, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 8.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 6,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.5,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 11.0,
    "week20": 13.0,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0, 9.0, 8.0, 12.0, 4.0, 'BYE', 8.0, 15.0, 14.0, 10.0, 12.0, 2.0, 7.0, 11.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5, 9.8, 9.2, 8.0, 'BYE', 5.3, 9.4, 8.2, 9.3, 10.3, 7.4, 8.5, 9.1, 7.9, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3, 7.9, 9.1, 6.4, 'BYE', 5.6, 7.4, 6.0, 7.9, 7.1, 7.2, 6.9, 6.3, 7.3, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5, 10.0, 11.7, 8.9, 'BYE', 8.5, 11.2, 9.6, 12.2, 10.7, 11.8, 11.3, 10.4, 11.7, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3055899.png",
    "name": "Harrison Butker",
    "depthchart": "Starter: K-1",
    "team": "Kansas City Chiefs",
    "projected": 7.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.19,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 6.0,
    "week20": 13.0,
    "week21": "",
    "week22": ""
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
                         data: [10.0, 5.0, 6.0, 6.0, 10.0, 9.0, 4.0, 8.0, 9.0, 12.0, 9.0, 'BYE', 13.0, 14.0, 8.0, 'DNP', 7.0, 10.0, 6.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7, 7.9, 8.0, 6.1, 7.9, 7.2, 'BYE', 5.7, 8.5, 8.7, 'DNP', 8.2, 7.4, 8.7, 8.5, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2, 6.0, 6.9, 6.8, 8.1, 5.0, 'BYE', 7.7, 8.0, 8.1, 'DNP', 8.9, 8.1, 9.9, 6.0, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9, 8.4, 11.3, 8.8, 10.1, 8.9, 'BYE', 12.2, 12.6, 11.5, 'DNP', 12.6, 13.0, 14.7, 10.5, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 7.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 8,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.19,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week19": 15.0,
    "week20": 18.0,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0, 11.0, 13.0, 7.0, 4.0, 'BYE', 21.0, 13.0, 5.0, 12.0, 13.0, 11.0, 11.0, 'DNP', 15.0, 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8, 5.9, 11.4, 8.0, 'BYE', 8.1, 8.6, 10.3, 7.1, 8.2, 7.8, 8.1, 'DNP', 9.1, 7.8, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7, 3.2, 4.2, 6.2, 'BYE', 5.8, 4.8, 3.5, 3.7, 5.9, 6.0, 5.8, 'DNP', 4.7, 7.2, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4, 9.8, 11.7, 11.5, 'BYE', 8.7, 15.3, 11.5, 9.9, 13.0, 13.5, 13.2, 'DNP', 14.6, 12.3, 14.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.9,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 20.62,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$3700",
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
    "source": "",
    "game_day_logo": "",
    "avg_fp2": 5.79,
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
    "week19": 5.0,
    "week20": -2.0,
    "week21": "",
    "week22": ""
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
                         data: [5.0, 1.0, 0.0, 2.0, -1.0, 8.0, 3.0, 6.0, 11.0, 7.0, 15.0, 'BYE', 11.0, 18.0, 3.0, 12.0, 3.0, 3.0, 5.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2, 2.1, 2.3, 3.7, 2.8, 4.6, 'BYE', 8.0, 7.3, 2.9, 7.6, 4.1, 4.8, 6.1, 5.8, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6, 0.6, 0.7, 0.4, 0.0, 0.8, 'BYE', 0.8, 2.1, 0.5, 2.2, 0.3, 2.1, 2.6, 2.4, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2, 7.9, 8.9, 7.0, 7.2, 7.7, 'BYE', 11.5, 11.2, 8.2, 9.3, 7.7, 9.5, 9.7, 9.9, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 6.5,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.19,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "avg_fp2": 6.37,
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
    "week19": 8.0,
    "week20": 8.0,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0, 7.0, 6.0, 7.0, 1.0, 'BYE', 10.0, 13.0, 9.0, 5.0, 9.0, 3.0, -1.0, 5.0, 8.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4, 4.4, 7.3, 4.3, 'BYE', 3.9, 6.0, 4.4, 5.4, 6.7, 5.9, 4.9, 4.8, 3.6, 5.2, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8, 1.4, 9.1, 4.8, 'BYE', 2.1, 2.3, 2.4, 2.0, 3.0, 3.7, 1.6, 0.0, 1.9, 1.2, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7, 7.9, 16.8, 10.8, 'BYE', 7.6, 10.1, 9.9, 9.6, 10.0, 11.1, 8.3, 7.4, 8.1, 7.1, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 5.5,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "avg_fp2": 7.26,
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
    "week19": 10.0,
    "week20": 7.0,
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0, 7.0, 7.0, 5.0, 1.0, 'BYE', 2.0, 10.0, 8.0, 9.0, 11.0, 13.0, 7.0, 10.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6, 6.6, 4.7, 6.9, 'BYE', 4.7, 7.1, 4.0, 3.7, 5.2, 5.7, 5.2, 4.2, 3.8, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8, 4.4, 2.7, 1.9, 'BYE', 0.0, 5.6, 0.0, 3.0, 0.0, 2.2, 5.0, 1.0, 1.6, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0, 13.6, 12.9, 10.0, 'BYE', 10.0, 12.6, 6.0, 9.2, 9.6, 10.9, 12.8, 9.9, 8.6, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 5.0,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.81,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$4200",
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
    "source": "",
    "game_day_logo": "",
    "avg_fp2": 6.74,
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
    "week19": 8.0,
    "week20": 13.0,
    "week21": "",
    "week22": ""
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
                         data: [4.0, 8.0, 0.0, 2.0, 5.0, 'BYE', 4.0, 6.0, 1.0, 10.0, 11.0, 6.0, 9.0, 9.0, 9.0, 5.0, 9.0, 9.0, 8.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.2, 4.6, 2.2, 0.8, 'BYE', 2.9, 4.7, 1.8, 2.0, 7.5, 3.2, 3.3, 4.4, 7.0, 5.4, 7.5, 4.7, 2.4, 2.9, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 3.1, 0.0, 0.0, 'BYE', 1.1, 4.5, 0.4, 0.0, 1.5, 1.6, 1.7, 1.8, 3.0, 2.0, 4.1, 3.8, 0.3, 0.9, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 11.1, 7.1, 3.7, 4.0, 'BYE', 7.7, 10.3, 5.7, 5.6, 8.2, 7.4, 7.3, 7.5, 8.6, 8.8, 9.0, 9.9, 8.9, 7.4, 8.6]
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