var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Thursday, 24 December 2020 01:12 PM (central time)"};
$scope.week = {"nflWeek": "16"};

$scope.qbStartSit = {"one": "Patrick Mahomes", "two": "Aaron Rodgers", "three": "Jared Goff", "four": "Tom Brady", "five": "Baker Mayfield", "six": "Philip Rivers", "seven": "Russell Wilson", "eight": "Teddy Bridgewater", "nine": "Jalen Hurts", "ten": "Josh Allen"};
$scope.rbStartSit = {"one": "David Montgomery", "two": "Miles Sanders", "three": "Giovani Bernard", "four": "Leonard Fournette", "five": "Myles Gaskin", "six": "D'Andre Swift", "seven": "Le'Veon Bell", "eight": "Chris Carson", "nine": "Jonathan Taylor", "ten": "Kenyan Drake"};
$scope.wrStartSit = {"one": "Tyreek Hill", "two": "Davante Adams", "three": "Robert Woods", "four": "Mike Evans", "five": "Allen Robinson", "six": "Robby Anderson", "seven": "D.K. Metcalf", "eight": "T.Y. Hilton", "nine": "Tim Patrick", "ten": "Julio Jones"};
$scope.teStartSit = {"one": "Travis Kelce", "two": "Austin Hooper", "three": "T.J. Hockenson", "four": "Robert Tonyan", "five": "Tyler Higbee", "six": "Jack Doyle", "seven": "Dan Arnold", "eight": "Dawson Knox", "nine": "Greg Olsen", "ten": "Jonnu Smith"};
$scope.dstStartSit = {"one": "Cleveland Browns", "two": "Baltimore Ravens", "three": "Chicago Bears", "four": "Houston Texans", "five": "Los Angeles Chargers", "six": "Green Bay Packers", "seven": "Tennessee Titans", "eight": "Atlanta Falcons", "nine": "Los Angeles Rams", "ten": "Detroit Lions"};

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
    "projected": 26.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 1,
    "avg_fp2": 25.68,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 23.77,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Patrick Mahomes completed 26-of-47 passes for 254 yards and three touchdowns in the Chiefs' 32-29 Week 15 win against the Saints, adding seven rushes for 37 yards.\u00a0\n",
    "report": "",
    "analysis": "Mahomes didn't play particularly well and still ended up with three scores. He faced immense pressure throughout, taking four sacks and constant hits from the Saints front seven. New Orleans took away everything deep for Mahomes and the KC pass catchers, forcing Mahomes to check down time and again. Mahomes' 36 touchdown passes sits four behind league leader Aaron Rodgers. He has tremendous upside against a porous Falcons secondary in Week 16.\u00a0\n",
    "timestamp": "2020-12-21 01:41 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.44,
    "week02": 27.48,
    "week03": 40.0,
    "week04": 20.24,
    "week05": 30.7,
    "week06": 20.6,
    "week07": 12.0,
    "week08": 36.64,
    "week09": 30.88,
    "week10": "BYE",
    "week11": 22.52,
    "week12": 31.28,
    "week13": 19.32,
    "week14": 21.62,
    "week15": 25.86,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.44, 27.48, 40.0, 20.24, 30.7, 20.6, 12.0, 36.64, 30.88, 'BYE', 22.52, 31.28, 19.32, 21.62, 25.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [26.8, 20.8, 17.8, 31.6, 30.6, 22.4, 19.3, 25.4, 23.8, 'BYE', 21.6, 28.4, 31.3, 23.5, 25.1, 26.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 17.6, 17.0, 15.9, 16.1, 17.6, 17.4, 19.2, 17.0, 'BYE', 16.0, 18.2, 16.3, 16.5, 18.0, 16.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.3, 32.6, 32.2, 30.8, 32.3, 34.1, 32.6, 33.1, 32.3, 'BYE', 31.3, 32.4, 30.7, 29.9, 33.0, 32.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 24.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 3,
    "avg_fp2": 23.05,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.92,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Deshaun Watson completed 33-of-41 passes for 373 yards and two touchdowns in the Texans' 27-20, Week 15 loss to the Colts, adding six rushes for 25 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Watson shredded the Colts for the second time in three weeks, but as was the case in Week 13, the Texans' upset bid was ended by a red zone turnover in the dying moments of the game. Today, it was a Keke Coutee fumble into the end zone. Considering the lack of weapons at his disposal, Watson has played as well as possible in three games since Will Fuller's steroid suspension began, though it has resulted in only three passing scores. He has added at least 6/25 as a rusher each time out, along with one ground score. Watson continues to operate near an MVP level, though it will be lost in the noise of the Texans' go-nowhere season. Get this man a competent coach and general manager. Despite his shaky surrounding circumstances, Watson will remain a top-10 option for Week 16 against the Bengals.\u00a0\n",
    "timestamp": "2020-12-20 09:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.82,
    "week02": 15.7,
    "week03": 18.06,
    "week04": 20.9,
    "week05": 26.86,
    "week06": 32.0,
    "week07": 24.16,
    "week08": "BYE",
    "week09": 24.24,
    "week10": 14.12,
    "week11": 31.36,
    "week12": 33.12,
    "week13": 20.44,
    "week14": 16.56,
    "week15": 23.42,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.82, 15.7, 18.06, 20.9, 26.86, 32.0, 24.16, 'BYE', 24.24, 14.12, 31.36, 33.12, 20.44, 16.56, 23.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.8, 14.6, 24.3, 25.6, 31.0, 19.4, 24.8, 'BYE', 27.6, 21.0, 22.3, 28.1, 23.6, 23.7, 23.0, 24.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.2, 10.0, 17.4, 13.7, 11.1, 15.0, 15.2, 'BYE', 13.2, 12.9, 12.7, 15.1, 13.6, 14.2, 13.7, 14.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.0, 28.5, 33.5, 30.7, 31.8, 32.1, 30.9, 'BYE', 30.2, 32.0, 31.3, 32.9, 29.6, 32.2, 30.6, 31.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 24.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 20.6,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.96,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 31-of-45 passes for 390 yards and two touchdowns in the Bucs' 31-27, Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "It was a tale of two halves for Brady and the Bucs, who went into the break down 17-0. Brady was definitely off in the first 30 minutes, missing open throws and taking some sacks behind a leaky line that was missing LT Donovan Smith. But in true Falcons fashion, the Atlanta defense caved after the half, and Brady found Chris Godwin for a four-yard score and Antonio Brown over the top for a 46-yarder. Mike Evans was also tackled at the one- and six-yard lines ahead of Leonard Fournette rushing scores, so Brady's day could have been even bigger. Brady's 390 yards marked a new season high, and he now gets a juicy Week 16 draw with the Lions, who Ryan Tannehill just blasted for five touchdowns in Week 15.\n",
    "timestamp": "2020-12-20 09:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.46,
    "week02": 9.68,
    "week03": 23.88,
    "week04": 33.46,
    "week05": 14.12,
    "week06": 14.64,
    "week07": 36.86,
    "week08": 19.06,
    "week09": 5.36,
    "week10": 31.84,
    "week11": 14.24,
    "week12": 23.7,
    "week13": "BYE",
    "week14": 15.64,
    "week15": 23.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46, 14.12, 14.64, 36.86, 19.06, 5.36, 31.84, 14.24, 23.7, 'BYE', 15.64, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 17.2, 19.7, 19.5, 21.4, 20.7, 15.5, 19.2, 20.1, 'BYE', 19.7, 24.7, 24.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4, 11.6, 14.5, 13.9, 11.5, 11.2, 10.4, 10.2, 'BYE', 10.4, 12.8, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8, 27.6, 28.8, 27.6, 26.2, 26.3, 25.6, 25.3, 'BYE', 26.9, 26.7, 25.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 24.1,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 31,
    "avg_fp2": 22.79,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.84,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 17-of-22 for 243 yards,\u00a0two touchdowns, and an interception in the Ravens' 40-14 Week 15 win over the Jaguars, adding ten rushes for 35 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "The Ravens did anything they wanted against a depleted Jacksonville defense. Jackson's statistical day could have been even better if he hadn't been removed from the game a few minutes into the fourth quarter with the Ravens leading 40-7. He also had a rushing score taken off the board at the end of the first quarter. Jackson was aggressive from the start, attacking the Jags downfield with shots to Mark Andrews and Marquise Brown. Jackson's strong season-closing run should continue next week against the Giants.\u00a0\n",
    "timestamp": "2020-12-20 09:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.5,
    "week02": 17.56,
    "week03": 14.18,
    "week04": 26.02,
    "week05": 14.5,
    "week06": 28.24,
    "week07": "BYE",
    "week08": 16.82,
    "week09": 18.6,
    "week10": 22.46,
    "week11": 17.54,
    "week12": "DNP",
    "week13": 27.7,
    "week14": 34.92,
    "week15": 30.22,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.5, 17.56, 14.18, 26.02, 14.5, 28.24, 'BYE', 16.82, 18.6, 22.46, 17.54, 'DNP', 27.7, 34.92, 30.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [28.5, 28.8, 27.5, 29.5, 23.5, 22.1, 'BYE', 17.7, 19.9, 23.1, 27.5, 'DNP', 26.8, 19.5, 19.0, 24.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [18.1, 16.9, 23.4, 20.7, 15.4, 14.3, 'BYE', 18.0, 12.9, 13.9, 16.0, 'DNP', 15.9, 23.0, 19.3, 17.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.5, 27.6, 39.2, 34.6, 26.8, 29.6, 'BYE', 34.7, 27.5, 28.9, 30.8, 'DNP', 35.0, 30.3, 38.9, 35.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 23.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 23,
    "avg_fp2": 16.56,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 22.46,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Baker Mayfield is fantasy football's third highest scoring quarterback over the past four weeks.\u00a0\n",
    "report": "",
    "analysis": "Mayfield is torching opposing secondaries, completing 70.2 percent of his passes over the stretch. He's second\u00a0in touchdown passes (10), and third in passing yards (1,232) over the past four games, most recently throwing for 297 yards and two scores against the Giants. He's emerged as a plug-and-play QB1 in a Browns offense that seemed intent on being a run-heavy unit in which Mayfield would be nothing more than a conservative game manager. Cleveland's dominant offensive line has kept Mayfield cleaner than almost any signal caller in the league: he's faced pressure on a meager 26.7 percent of his drop backs this season, the fifth lowest rate in the NFL. Mayfield and Jalen Hurts are superb Week 16 streaming options. The Browns play the Jets.\u00a0\n",
    "timestamp": "2020-12-22 05:53 PM",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "",
    "week01": 10.86,
    "week02": 16.26,
    "week03": 14.34,
    "week04": 15.2,
    "week05": 17.58,
    "week06": 7.26,
    "week07": 30.78,
    "week08": 7.78,
    "week09": "BYE",
    "week10": 5.38,
    "week11": 7.06,
    "week12": 18.42,
    "week13": 28.96,
    "week14": 31.02,
    "week15": 20.98,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.86, 16.26, 14.34, 15.2, 17.58, 7.26, 30.78, 7.78, 'BYE', 5.38, 7.06, 18.42, 28.96, 31.02, 20.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 13.9, 14.6, 18.4, 25.9, 'BYE', 17.0, 14.6, 15.1, 25.1, 13.3, 15.7, 23.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1, 11.8, 11.7, 12.8, 'BYE', 11.8, 9.6, 11.7, 9.6, 10.2, 12.3, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4, 21.0, 19.1, 23.3, 'BYE', 21.7, 23.4, 24.2, 22.0, 23.1, 25.0, 25.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 23.4,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 26.47,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.47,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kyler Murray completed 27-of-36 passes for 406 yards, three touchdowns, and one interception, tacking on eight carries for 29 yards and a rushing score in Arizona's 33-26 Week 15 win over the Eagles.\n",
    "report": "",
    "analysis": "The Eagles were short a handful of corners against Murray but he still made his job look easy, arguably having the most success of\u00a0his career when throwing outside the pocket and finishing with a career-high 406 yards passing. Arizona turned the ball over twice inside the 10-yard line, fumbling on the opening possession and later tossing an interception on a miscommunication with DeAndre Hopkins (9/169/1) in the end zone, but Murray always managed to respond in averaging 11.3 yards per attempt to help the Cardinals stack\u00a0526 total yards of\u00a0offense, already the third time the franchise has eclipsed 500 yards during the Kliff Kingsbury era. Murray also joined\u00a0Cam Newton (2015) as the only players in league\u00a0history with\u00a0at least 25 passing touchdowns\u00a0and\u00a010 rushing scores\u00a0in a single season. The Cardinals stayed relevant as the No. 7 seed in the NFC with this win and\u00a0will attempt to tighten its grasp on a Wild Card berth in Week 16 against the 49ers.\n",
    "timestamp": "2020-12-21 12:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.3,
    "week02": 33.14,
    "week03": 24.7,
    "week04": 23.12,
    "week05": 27.3,
    "week06": 28.92,
    "week07": 38.1,
    "week08": "BYE",
    "week09": 37.92,
    "week10": 30.9,
    "week11": 20.26,
    "week12": 8.9,
    "week13": 17.42,
    "week14": 18.46,
    "week15": 34.14,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.3, 33.14, 24.7, 23.12, 27.3, 28.92, 38.1, 'BYE', 37.92, 30.9, 20.26, 8.9, 17.42, 18.46, 34.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 22.3, 22.3, 20.8, 19.7, 16.0, 22.9, 'BYE', 22.0, 21.7, 22.5, 16.4, 17.0, 12.5, 27.7, 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.9, 13.9, 11.4, 17.0, 15.5, 14.0, 12.9, 'BYE', 5.7, 14.1, 24.2, 17.6, 9.4, 16.4, 11.2, 12.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 26.1, 24.0, 30.4, 28.8, 27.4, 25.1, 'BYE', 25.1, 31.6, 35.0, 33.8, 23.0, 31.2, 28.1, 29.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 21.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 23.97,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 21.48,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Rodgers completed 20-of-29\u00a0passes for 143\u00a0yards and a\u00a0touchdown\u00a0in the Packers' 24-16\u00a0win over the Panthers in Week 15.\n",
    "report": "",
    "analysis": "The yardage total is the lowest of Rodgers' season, eclipsing his mid-October 160-yard effort against the Bucs. The Packers opened with three straight touchdown drives, including a six-yard rushing score by Rodgers, but the Panthers' defense surprisingly locked up the Packers' offense after that, forcing a punt in six of the team's next seven drives. A major factor? The Panthers' pass rush, as Rodgers was sacked five times in this game, a rarity which prevented Rodgers from working his typical magic and find narrow passing lanes to rifle rockets into. Still, two touchdowns on a \"down\" fantasy day is difficult to complain about. Rodgers is an easy QB1 against the Titans in Week 16.\n",
    "timestamp": "2020-12-20 04:38 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 30.76,
    "week02": 18.7,
    "week03": 24.52,
    "week04": 29.58,
    "week05": "BYE",
    "week06": 5.8,
    "week07": 27.32,
    "week08": 22.54,
    "week09": 28.9,
    "week10": 26.4,
    "week11": 22.74,
    "week12": 25.64,
    "week13": 23.5,
    "week14": 30.9,
    "week15": 18.32,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [30.76, 18.7, 24.52, 29.58, 'BYE', 5.8, 27.32, 22.54, 28.9, 26.4, 22.74, 25.64, 23.5, 30.9, 18.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 24.8, 26.3, 27.1, 'BYE', 16.5, 21.8, 26.4, 21.1, 23.0, 18.3, 18.9, 24.5, 22.9, 29.6, 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 13.8, 9.5, 14.4, 'BYE', 12.6, 15.7, 14.1, 12.2, 15.2, 13.7, 11.5, 14.1, 13.9, 14.3, 18.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.7, 30.7, 32.1, 29.9, 'BYE', 27.5, 28.6, 30.2, 28.0, 29.5, 26.4, 29.0, 30.8, 30.3, 30.9, 28.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 21.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 11,
    "avg_fp2": 11.58,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.18,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Andy Dalton completed 19-of-33 passes for 209 yards and two touchdowns in the Cowboys Week 15 win over the 49ers.\n",
    "report": "",
    "analysis": "Dalton averaged just 6.3 yards per attempt and missed a handful of easy throws that would have helped the Cowboys move the ball much more effectively. It was Dalton's sixth game under seven yards per attempt despite having one of the best trios of receivers in the league at his disposal. For fantasy purposes, Dalton is a low-end QB2 only worth starting in Superflex leagues against the Eagles next week.\n",
    "timestamp": "2020-12-20 10:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.44,
    "week06": 13.04,
    "week07": 3.6,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 19.82,
    "week12": 13.3,
    "week13": 19.6,
    "week14": 15.3,
    "week15": 17.16,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 2.44, 13.04, 3.6, 'DNP', 'DNP', 'BYE', 19.82, 13.3, 19.6, 15.3, 17.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.1, 'DNP', 'DNP', 5.1, 15.6, 10.7, 'DNP', 'DNP', 'BYE', 13.7, 16.3, 9.3, 15.1, 16.6, 21.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 7.8, 'DNP', 'DNP', 7.8, 7.3, 7.8, 'DNP', 'DNP', 'BYE', 9.0, 8.2, 9.0, 8.4, 7.5, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 23.1, 'DNP', 'DNP', 21.1, 18.2, 19.6, 'DNP', 'DNP', 'BYE', 22.2, 21.9, 22.6, 24.1, 22.7, 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 20.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 25.21,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.63,
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
    "headlineNews": "Josh Allen completed 28-of-40 passes for 359 yards and two touchdowns and rushed three times for 33 yards and two touchdowns in Buffalo's Week 15 win over the Broncos.\u00a0\n",
    "report": "",
    "analysis": "Allen had his way with an injured Broncos secondary, leading Buffalo to an easy win. Both of Allen's passing touchdowns were in the red-zone, and he went untouched on a 25-yard scramble where\u00a0he ran through the middle of Denver's defense. Allen also added a goal-line rushing TD. He\u00a0went over 4,000 yards on the season and continues to put himself in the MVP conversation. With the win, Buffalo clinched the AFC East for the first time since 1995.\u00a0Allen and the\u00a0Bills will look to improve their playoff seed in a Week 16 matchup with New England.\n",
    "timestamp": "2020-12-20 01:04 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 28.18,
    "week02": 34.48,
    "week03": 32.24,
    "week04": 25.42,
    "week05": 18.32,
    "week06": 16.08,
    "week07": 16.38,
    "week08": 13.46,
    "week09": 36.0,
    "week10": 28.86,
    "week11": "BYE",
    "week12": 16.48,
    "week13": 30.1,
    "week14": 19.32,
    "week15": 37.66,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.18, 34.48, 32.24, 25.42, 18.32, 16.08, 16.38, 13.46, 36.0, 28.86, 'BYE', 16.48, 30.1, 19.32, 37.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 23.8, 19.8, 18.7, 17.2, 20.8, 21.6, 'BYE', 24.5, 21.1, 26.2, 24.0, 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7, 9.3, 8.5, 11.2, 13.1, 8.8, 'BYE', 10.3, 10.8, 9.6, 12.9, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1, 25.0, 24.9, 28.2, 29.9, 28.6, 'BYE', 29.0, 30.2, 29.0, 28.7, 30.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576980.png",
    "name": "Marcus Mariota",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 19.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 14,
    "avg_fp2": 26.84,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.13,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Derek Carr (groin) practiced fully Wednesday.\u00a0\n",
    "report": "",
    "analysis": "That's an upgrade from his limited Tuesday practice. It would now be an upset if Carr did not suit up Saturday against the Dolphins. Those who picked up Marcus Mariota as a streamer for championship week will have to find an alternative if Carr fights through what looked to be a serious groin injury that knocked him out of Week 15's game against the Chargers. Carr would have a rough matchup against a stingy Miami defense.\u00a0\n",
    "timestamp": "2020-12-23 10:14 PM",
    "source": "Tashan Reed on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 26.84,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 26.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3, 19.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.9, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.1, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 19.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 17.98,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.44,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Ben Roethlisberger has the third lowest adjusted completion rate on deep passes this season.\u00a0\n",
    "report": "",
    "analysis": "Accounting for drops, Roethlisberger has completed 32.8 percent of his passes over 20 yards this year, per Pro Football Focus. That's the third lowest rate among quarterbacks who have played at least half their teams offensive snaps in 2020. Roethlisberger, especially in recent weeks, has been wildly inaccurate at times, raising questions about his comeback from offseason elbow surgery. He completed just 52.5 percent of his passes during Monday night's shocking loss to the Bengals. Roethlisberger -- who has seen the least pressure among all QBs this season -- has been less than serviceable for fantasy purposes of late, scoring less than 14 fantasy points in three of his past four outings. The aged veteran won't be more than a mid-range QB2 in Week 16 against the Colts.\u00a0\n",
    "timestamp": "2020-12-22 02:16 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.06,
    "week02": 19.24,
    "week03": 19.18,
    "week04": "BYE",
    "week05": 21.36,
    "week06": 10.98,
    "week07": 15.62,
    "week08": 15.28,
    "week09": 25.04,
    "week10": 29.32,
    "week11": 17.68,
    "week12": 13.54,
    "week13": 19.2,
    "week14": 15.48,
    "week15": 7.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.06, 19.24, 19.18, 'BYE', 21.36, 10.98, 15.62, 15.28, 25.04, 29.32, 17.68, 13.54, 19.2, 15.48, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 23.0, 24.3, 'BYE', 19.3, 15.4, 17.9, 14.3, 11.1, 23.3, 22.9, 15.8, 17.3, 21.5, 14.7, 19.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 12.1, 10.4, 'BYE', 9.6, 10.5, 9.9, 12.2, 10.2, 9.9, 9.9, 10.4, 9.2, 9.5, 10.4, 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 25.8, 23.7, 'BYE', 24.5, 24.7, 28.3, 26.4, 24.0, 24.8, 24.8, 24.1, 25.4, 24.7, 24.5, 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 19.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 15.74,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 23.02,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Mitchell Trubisky completed 15-of-21 passes for 202 yards, one touchdown, and one interception in the Bears' Week 15 win over the Vikings.\n",
    "report": "",
    "analysis": "It's not because he's good, but Trubisky is 5-2 as a starter this season. He's been better than Nick Foles at least. On Sunday, Trubisky spent most of the time handing the ball off to David Montgomery who had a career-high 146 yards and two touchdowns on 32 carries. When the ball was in Trubisky's hands, he was mostly good but did have a brutal pick in the red zone on a forced 50/50 ball. Trubisky will be a QB2 streamer against the injured Jaguars for those willing to ride the chaos.\n",
    "timestamp": "2020-12-20 09:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.28,
    "week02": 15.2,
    "week03": 12.62,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.3,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 20.78,
    "week13": 13.28,
    "week14": 24.98,
    "week15": 14.48,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.28, 15.2, 12.62, 'DNP', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'BYE', 20.78, 13.28, 24.98, 14.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 19.2, 25.5, 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 'DNP', 'DNP', 'BYE', 11.9, 22.8, 20.7, 14.3, 19.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.8, 7.1, 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 'DNP', 'DNP', 'BYE', 6.5, 10.9, 5.9, 7.9, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.1, 21.6, 23.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.8, 'DNP', 'DNP', 'BYE', 24.0, 25.9, 25.2, 22.9, 26.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 19.0,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 18.35,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.71,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars coach Doug Marrone wouldn't name a starting quarterback for Week 16 against Chicago.\u00a0\n",
    "report": "",
    "analysis": "Gardner Minshew and Mike Glennon are splitting reps in practice.\u00a0Whoever has the best week between the two will start.\u00a0Minshew is coming off a blowout loss to the Ravens where he took five sacks and lost a fumble, while Glennon was benched in Week 14 after averaging 3.7 YPA. Regardless who starts, Jacksonville skill players should be avoided outside of James Robinson.\u00a0With the Jets winning in Week 15, the Jaguars have a 74% chance at the No. 1 overall pick.\u00a0\n",
    "timestamp": "2020-12-23 02:44 PM",
    "source": "jaguars.com",
    "game_day_logo": "",
    "week01": 20.82,
    "week02": 25.46,
    "week03": 10.2,
    "week04": 21.94,
    "week05": 19.84,
    "week06": 18.62,
    "week07": 19.02,
    "week08": "BYE",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 13.32,
    "week15": 15.94,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.82, 25.46, 10.2, 21.94, 19.84, 18.62, 19.02, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.32, 15.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.0, 16.5, 26.4, 20.0, 18.7, 17.6, 17.4, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.6, 15.9, 19.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.6, 10.7, 12.6, 10.8, 13.3, 12.3, 10.4, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.4, 17.1, 11.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 21.9, 22.7, 23.4, 23.1, 24.4, 23.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.8, 24.2, 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13994.png",
    "name": "Cam Newton",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 18.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 30,
    "avg_fp2": 17.1,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 19.89,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Cam Newton has five passing touchdowns in 13 games this season.\u00a0\n",
    "report": "",
    "analysis": "Newton has thrown three touchdowns over his past six outings. It's bleak for the Patriots passing game -- and the offense in general -- as Joe Flacco has more touchdown tosses than Newton this season in just five games. What started out on a hopeful note for Newton and the Patriots has dissolved into a disaster;\u00a0the team will miss the playoffs for the first time since 2008 after Week 15's loss to Miami. The veteran isn't playable outside of superflex formats in Week 16 against the Bills.\u00a0\n",
    "timestamp": "2020-12-21 04:54 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 25.7,
    "week02": 35.58,
    "week03": 12.18,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 19.98,
    "week07": 2.82,
    "week08": 18.36,
    "week09": 24.56,
    "week10": 16.82,
    "week11": 19.2,
    "week12": 5.96,
    "week13": 23.56,
    "week14": 5.36,
    "week15": 12.16,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.7, 35.58, 12.18, 'DNP', 'BYE', 19.98, 2.82, 18.36, 24.56, 16.82, 19.2, 5.96, 23.56, 5.36, 12.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 26.2, 23.9, 'DNP', 'BYE', 26.9, 19.6, 14.6, 23.0, 19.8, 18.7, 25.3, 17.6, 17.9, 24.4, 18.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.3, 18.8, 14.2, 'DNP', 'BYE', 12.9, 12.7, 11.6, 13.2, 13.0, 12.8, 12.6, 14.5, 10.5, 12.6, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.0, 33.6, 30.2, 'DNP', 'BYE', 29.1, 29.1, 28.7, 29.9, 30.2, 28.4, 27.8, 29.5, 27.5, 29.0, 29.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 18.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 21,
    "avg_fp2": 18.53,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.32,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Drew Brees completed 15-of-34 passes for 234 yards,\u00a0three touchdowns, and an interception in the Saints' 32-29 Week 15 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "It was a decidedly rusty performance from the hyper-accurate Brees, who somehow played a month after breaking 11 ribs. Coming into Week 15, Brees had completed 73.5 percent of his attempts. The trio of touchdowns gave Brees a solid fantasy outing. His slow start, however, put the Saints two touchdowns behind the high-powered Chiefs -- a lead that proved impossible to surmount. Brees only targeted Alvin Kamara six times, a curious departure from his penchant for checking down before his rib injury. Brees should be considered a high-end QB2 next week against Minnesota.\u00a0\n",
    "timestamp": "2020-12-21 02:07 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 14.4,
    "week02": 15.48,
    "week03": 23.52,
    "week04": 16.54,
    "week05": 22.1,
    "week06": "BYE",
    "week07": 23.68,
    "week08": 19.6,
    "week09": 22.68,
    "week10": 6.94,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 20.36,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 15.48, 23.52, 16.54, 22.1, 'BYE', 23.68, 19.6, 22.68, 6.94, 'DNP', 'DNP', 'DNP', 'DNP', 20.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.8, 22.8, 18.5, 21.3, 19.1, 'BYE', 19.7, 13.3, 22.3, 21.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.9, 18.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 14.7, 9.6, 11.3, 10.4, 'BYE', 11.8, 10.8, 11.7, 10.4, 'DNP', 'DNP', 'DNP', 'DNP', 11.1, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 30.5, 27.9, 28.4, 25.9, 'BYE', 26.6, 26.9, 26.9, 27.8, 'DNP', 'DNP', 'DNP', 'DNP', 27.1, 27.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 18.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 4,
    "avg_fp2": 17.92,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.47,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Matt Ryan completed 34-of-49 passes for 356 yards and three touchdowns in the Falcons' 31-27, Week 15 loss to the Bucs.\n",
    "report": "",
    "analysis": "It was easily one of Ryan's best games of the season, and he was able to pull it off with Julio Jones (hamstring) out of the lineup. The Falcons took a 17-0 lead into halftime after Ryan hit Russell Gage and Calvin Ridley for five- and 12-yard touchdowns before the break. But the Bucs dominated the second 30 minutes. Ryan's third touchdown was a seven-yard hookup with Hayden Hurst. He had Calvin Ridley for an open second score, but CB Antoine Winfield Jr. made a great play on the ball in the end zone to break it up at the last second. Ryan's 356 yards were his third-most of the season, and it was his first 300-yard game since Week 7. It's impossible to trust Ryan outside of two-QB fantasy leagues, but he should be throwing a ton again next week in a road date at Kansas City. The Falcons have no running game whatsoever.\n",
    "timestamp": "2020-12-21 06:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.9,
    "week02": 28.52,
    "week03": 12.42,
    "week04": 12.4,
    "week05": 7.94,
    "week06": 31.64,
    "week07": 17.52,
    "week08": 18.94,
    "week09": 23.36,
    "week10": "BYE",
    "week11": 7.28,
    "week12": 14.9,
    "week13": 12.92,
    "week14": 10.26,
    "week15": 27.84,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.9, 28.52, 12.42, 12.4, 7.94, 31.64, 17.52, 18.94, 23.36, 'BYE', 7.28, 14.9, 12.92, 10.26, 27.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.4, 15.8, 20.9, 19.9, 18.1, 19.2, 20.2, 19.7, 20.7, 'BYE', 19.7, 15.7, 19.3, 22.1, 17.1, 18.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 13.1, 11.0, 14.8, 11.8, 12.6, 12.5, 11.4, 11.1, 'BYE', 11.1, 11.1, 10.9, 10.7, 10.8, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.9, 25.8, 24.1, 27.2, 24.9, 24.7, 25.8, 25.1, 24.2, 'BYE', 24.7, 24.3, 24.4, 23.8, 23.7, 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    "name": "Tua Tagovailoa",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 18.6,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 24,
    "avg_fp2": 14.17,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 20.46,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Tua Tagovailoa completed 20-of-26 passes for 145 yards and an interception in the Dolphins' 22-12, Week 15 win over the Patriots, adding three carries for nine additional yards and two touchdowns.\u00a0\n",
    "report": "",
    "analysis": "With the Dolphins' skill corps severely short-handed and Salvon Ahmed returning, Tagovailoa was a strict game manager, completing zero passes longer than 15 yards. His interception was a poor red zone decision in the first quarter where he forced the ball to Lynn Bowden in the end zone as he was getting hit. Tagovailoa compensated by avoiding further cough ups and contributing three- and one-yard rushing scores, displaying a nice little shoulder fake on the three-yarder. He's up to three rushing touchdowns over his past two games. With DeVante Parker and Mike Gesicki hopefully returning for Week 16 against the Raiders,\u00a0Tagovailoa should have a little more QB2 juice for a plus matchup.\u00a0\u00a0\n",
    "timestamp": "2020-12-20 10:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.36,
    "week07": "BYE",
    "week08": 5.72,
    "week09": 21.42,
    "week10": 14.66,
    "week11": 7.32,
    "week12": "DNP",
    "week13": 16.14,
    "week14": 28.04,
    "week15": 19.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.36, 'BYE', 5.72, 21.42, 14.66, 7.32, 'DNP', 16.14, 28.04, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.3, 'BYE', 12.6, 14.0, 11.0, 12.0, 'DNP', 8.9, 15.2, 20.6, 18.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 6.0, 5.8, 6.8, 5.8, 'DNP', 6.3, 3.4, 4.8, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.4, 'BYE', 19.7, 19.8, 20.9, 23.1, 'DNP', 19.8, 19.9, 24.9, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 18.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.81,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles head coach Doug Pederson said Jalen Hurts will start in Week 16 against the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Pederson wouldn't commit to Hurts as the team's Week 16 starter right after Hurts\u00a0threw for 338 yard and three touchdowns -- adding 63 yards and a score on the ground -- against the Cardinals. Pederson decided to go with the blossoming rookie over the broken veteran this week against the Cowboys. Far more than a rushing quarterback, Hurts' dual-threat potential makes him a potential fantasy league winner in Week 16 against the porous Dallas defense.\u00a0\n",
    "timestamp": "2020-12-21 05:39 PM",
    "source": "Martin Frank on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.8,
    "week04": 1.8,
    "week05": 0.72,
    "week06": 3.1,
    "week07": 0.2,
    "week08": 0.36,
    "week09": "BYE",
    "week10": -0.1,
    "week11": 0.6,
    "week12": 0.24,
    "week13": 10.26,
    "week14": 19.28,
    "week15": 37.82,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.8, 1.8, 0.72, 3.1, 0.2, 0.36, 'BYE', -0.1, 0.6, 0.24, 10.26, 19.28, 37.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.7, 1.2, 0.4, -1.2, 0.9, 4.2, 0.6, 'BYE', 2.1, -0.7, -0.5, -0.6, 8.9, 11.9, 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 'BYE', 0.0, 0.0, 0.8, 0.1, 0.0, 13.6, 16.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 10.9, 8.4, 8.3, 9.3, 9.2, 8.7, 0.8, 'BYE', 1.7, 2.1, 1.5, 1.1, 6.5, 16.8, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 18.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 17.59,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 19.85,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions interim coach Darrell Bevell does not expect\u00a0Matthew Stafford (ribs) to be shut down.\u00a0\n",
    "report": "",
    "analysis": "\"To be honest with you, I don't think he'll let that happen,\" Bevell said Tuesday. Stafford took a seat in the fourth quarter of Sunday's blowout loss to the Titans, but he apparently did not suffer an aggravation of his injury. The Lions are on a short week, playing the Bucs on Saturday. Stafford will follow the same routine he did last week, rationing practice reps before making a final decision. It certainly sounds like he will be out there for the tough matchup.\u00a0\n",
    "timestamp": "2020-12-22 07:01 PM",
    "source": "Dave Birkett on Twitter ",
    "game_day_logo": "",
    "week01": 17.18,
    "week02": 17.16,
    "week03": 18.5,
    "week04": 23.34,
    "week05": "BYE",
    "week06": 13.32,
    "week07": 18.4,
    "week08": 23.44,
    "week09": 10.44,
    "week10": 23.04,
    "week11": 7.62,
    "week12": 17.1,
    "week13": 27.08,
    "week14": 14.36,
    "week15": 15.28,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.18, 17.16, 18.5, 23.34, 'BYE', 13.32, 18.4, 23.44, 10.44, 23.04, 7.62, 17.1, 27.08, 14.36, 15.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 17.2, 14.7, 19.3, 'BYE', 17.4, 21.1, 19.7, 17.6, 17.7, 18.5, 21.1, 16.0, 18.0, 15.3, 18.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 11.1, 10.7, 11.3, 'BYE', 11.1, 10.7, 11.8, 11.8, 10.4, 10.7, 12.0, 11.2, 10.0, 11.4, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 24.6, 26.0, 24.8, 'BYE', 25.3, 24.3, 25.7, 25.6, 24.5, 24.1, 26.0, 25.2, 23.6, 24.7, 25.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 18.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 23.91,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.13,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Russell Wilson is the 12th highest scoring quarterback in fantasy football since Week 10.\u00a0\n",
    "report": "",
    "analysis": "Seattle has reverted to its ultra-conservative ways of the pre-Let Russ Cook era, effectively crushing Wilson's weekly ceiling. Wilson has remained a borderline QB1 in fantasy thanks to rushing production (210 rushing yards from Week 10-15) and nine touchdown tosses in those six games. Wilson's blistering start to the season -- he had 1,502 yards and 19 touchdowns in his first five games -- proved unsustainable. In Week 16 against the Rams, fantasy managers might do well to explore their options at QB.\u00a0\n",
    "timestamp": "2020-12-21 04:02 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 31.78,
    "week02": 34.42,
    "week03": 36.8,
    "week04": 21.9,
    "week05": 25.48,
    "week06": "BYE",
    "week07": 32.92,
    "week08": 28.74,
    "week09": 24.1,
    "week10": 11.92,
    "week11": 20.08,
    "week12": 14.4,
    "week13": 16.02,
    "week14": 23.14,
    "week15": 13.04,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.78, 34.42, 36.8, 21.9, 25.48, 'BYE', 32.92, 28.74, 24.1, 11.92, 20.08, 14.4, 16.02, 23.14, 13.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 20.0, 29.1, 24.5, 21.6, 'BYE', 19.8, 21.5, 20.4, 17.2, 26.9, 24.3, 24.9, 23.5, 23.1, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 12.4, 11.3, 11.7, 'BYE', 11.3, 11.3, 12.7, 13.4, 11.5, 11.4, 12.3, 12.1, 11.3, 12.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.9, 26.8, 26.1, 26.2, 26.9, 'BYE', 27.5, 29.7, 28.2, 28.8, 27.6, 29.0, 28.0, 28.2, 29.2, 27.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 17.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 18,
    "avg_fp2": 18.66,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 18.41,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Kirk Cousins completed 24-of-35 passes for 271 yards, two touchdowns, and one interception in the Vikings' Week 15 loss to the Bears.\n",
    "report": "",
    "analysis": "This one ended up being a shootout, 33-27. Cousins passed more times than expected after the Bears went into halftime with a 20-10 lead, but it ended up being a forgettable QB2 finish, something he's done more times than not this season. Cousins needs negative game script to find a fantasy ceiling. He'll likely get it next week in New Orleans. Cousins needs two more passing touchdowns to set a new career high.\n",
    "timestamp": "2020-12-20 09:36 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 22.76,
    "week02": 1.52,
    "week03": 21.44,
    "week04": 14.9,
    "week05": 15.16,
    "week06": 26.72,
    "week07": "BYE",
    "week08": 10.4,
    "week09": 20.8,
    "week10": 18.58,
    "week11": 22.96,
    "week12": 26.18,
    "week13": 22.4,
    "week14": 17.1,
    "week15": 20.34,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.76, 1.52, 21.44, 14.9, 15.16, 26.72, 'BYE', 10.4, 20.8, 18.58, 22.96, 26.18, 22.4, 17.1, 20.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 19.7, 17.5, 18.2, 20.2, 24.2, 'BYE', 20.9, 20.4, 9.6, 19.3, 18.5, 20.7, 19.5, 17.3, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 8.8, 6.9, 9.7, 8.7, 8.3, 'BYE', 11.1, 11.9, 8.2, 8.7, 10.5, 10.6, 9.7, 10.6, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.3, 24.5, 22.6, 25.5, 23.5, 24.1, 'BYE', 27.5, 25.9, 23.7, 23.3, 24.8, 26.2, 24.6, 25.9, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 16.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 22.55,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 20.45,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Justin Herbert completed 22-of-32 passes for 314 yards, two touchdowns and zero interceptions in the Chargers' 30-27, Week 15 overtime win over the Raiders, adding four carries for 14 yards and an additional score.\u00a0\n",
    "report": "",
    "analysis": "You had to watch this one to believe it. Herbert walked off the Raiders with a quarterback sneak with 1:32 remaining in overtime one play after losing a fumble. The Chargers recovered it in the end zone, but due to the \"Holy Roller\" rule (Google it), it was not a score. Herbert's late heroics came after an incomprehensible fourth quarter where he attempted \u2014 this is not a joke \u2014 one pass as Michael Badgley missed his eighth and ninth field goal attempts of the year. Before that, Herbert relentlessly worked connections with Hunter Henry and Jalen Guyton as Keenan Allen could barely move thanks to his hamstring injury. It was a needed showing out basically without his best receiver on the heels of his recent slump. Cruising toward ending 2020 with the rookie touchdown record \u2014 he has already tied Baker Mayfield at 27 \u2014 Herbert catches the Broncos in Week 16.\u00a0\n",
    "timestamp": "2020-12-18 04:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 23.24,
    "week03": 15.7,
    "week04": 24.0,
    "week05": 27.36,
    "week06": "BYE",
    "week07": 38.48,
    "week08": 23.22,
    "week09": 23.44,
    "week10": 21.48,
    "week11": 27.74,
    "week12": 17.44,
    "week13": 6.36,
    "week14": 16.72,
    "week15": 27.96,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 23.24, 15.7, 24.0, 27.36, 'BYE', 38.48, 23.22, 23.44, 21.48, 27.74, 17.44, 6.36, 16.72, 27.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.9, 16.9, 10.9, 22.3, 'BYE', 21.4, 19.7, 22.1, 24.3, 25.0, 19.5, 15.8, 31.6, 29.3, 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 11.4, 8.4, 13.4, 'BYE', 16.1, 12.6, 22.0, 21.8, 19.7, 18.0, 18.7, 18.5, 16.2, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.0, 25.3, 24.3, 27.0, 'BYE', 24.9, 26.4, 34.2, 34.1, 25.4, 32.5, 26.8, 24.5, 27.0, 29.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 16.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 21.71,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.04,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill completed 21-of-27 passes for 273 yards and three touchdowns in the Titans' 46-25, Week 15 win over the Lions, rushing three times for 21 yards and two touchdowns on the ground.\n",
    "report": "",
    "analysis": "Derrick Henry got the scoring started for Tennessee with an opening-drive three-yard touchdown run, but it was all Tannehill after that, throwing a 75-yard touchdown to Corey Davis on the next possession thanks to some shoddy tackling from S Duron Harmon. Tannehill then kept it with a 17-yard touchdown run in the second frame before accounting for three touchdowns in the final quarter. Tannehill rushed for a three-yard score, hit A.J. Brown for a two-yarder, and then tossed a three-yarder to backup RB Darrynton Evans. Tannehill is just adding to his new career high with 31 touchdown passes now and will likely get some MVP votes. The Titans wrap up the season with road games at Green Bay and Houston. Tannehill is an every-week QB1 ahead of the Week 16 date with the Packers.\n",
    "timestamp": "2020-12-21 07:00 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 19.36,
    "week02": 26.76,
    "week03": 13.24,
    "week04": "BYE",
    "week05": 30.0,
    "week06": 29.56,
    "week07": 17.3,
    "week08": 18.32,
    "week09": 14.62,
    "week10": 10.78,
    "week11": 22.86,
    "week12": 19.14,
    "week13": 28.56,
    "week14": 16.48,
    "week15": 37.02,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.36, 26.76, 13.24, 'BYE', 30.0, 29.56, 17.3, 18.32, 14.62, 10.78, 22.86, 19.14, 28.56, 16.48, 37.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 17.5, 14.7, 'BYE', 17.0, 18.7, 16.5, 22.5, 14.8, 14.7, 19.8, 12.1, 20.3, 19.8, 22.0, 16.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 9.1, 9.1, 'BYE', 10.0, 10.1, 8.8, 9.0, 9.9, 9.5, 9.5, 11.7, 11.1, 12.7, 10.2, 14.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.3, 22.4, 'BYE', 23.8, 23.4, 23.5, 23.4, 23.7, 23.1, 22.9, 22.8, 26.3, 24.9, 24.1, 28.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 15.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 16.27,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.47,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Philip Rivers completed 22-of-28 passes for 228 yards and two touchdowns in the Colts' 27-20, Week 15 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "Rivers hit his fantasy floor and nothing more. After three weeks of reviving T.Y. Hilton, Rivers, for whatever reason, was looking Zach Pascal's way early and often, finding his No. 3 wideout for 5/79/2. Frustrating for fantasy managers, but it's what the Texans were giving Rivers. Averaging nearly eight yards per attempt while mostly avoiding turnovers, Rivers is doing what he needs to do to guide the Colts to the postseason. He will not be an upside option for the fantasy finals against the Steelers in Week 16.\u00a0\n",
    "timestamp": "2020-12-20 10:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.82,
    "week02": 11.86,
    "week03": 12.68,
    "week04": 11.2,
    "week05": 7.62,
    "week06": 25.74,
    "week07": "BYE",
    "week08": 22.28,
    "week09": 8.08,
    "week10": 16.32,
    "week11": 22.42,
    "week12": 18.8,
    "week13": 19.2,
    "week14": 17.76,
    "week15": 17.02,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.82, 11.86, 12.68, 11.2, 7.62, 25.74, 'BYE', 22.28, 8.08, 16.32, 22.42, 18.8, 19.2, 17.76, 17.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 26.8, 17.5, 13.6, 20.3, 15.9, 'BYE', 16.3, 12.6, 19.5, 21.6, 19.6, 19.7, 20.7, 21.2, 15.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 11.4, 10.1, 9.6, 10.9, 10.0, 'BYE', 11.1, 10.3, 10.3, 8.9, 10.0, 9.9, 10.7, 10.3, 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.4, 23.1, 22.2, 24.5, 23.6, 'BYE', 23.0, 22.4, 23.6, 22.9, 23.0, 23.5, 23.5, 24.0, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979520.png",
    "name": "C.J. Beathard",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 15.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 4.82,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 19.75,
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
    "headlineNews": "C.J. Beathard will be the 49ers' Week 16 starter at quarterback.\u00a0\n",
    "report": "",
    "analysis": "Nick Mullens needs elbow surgery, Jimmy Garoppolo (ankle) will practice but not play, and Josh Johnson is on the COVID-19 list. It means the 49ers have to hunt for a No. 2 on someone else's practice squad. Beathard's 11th career start will come against a Cardinals defense permitting the 12th fewest passing yards. George Kittle (foot) could be returning, but Beathard's supporting cast will be severely limited by injury. He will struggle for QB2 relevance.\u00a0\n",
    "timestamp": "2020-12-22 07:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 5.52,
    "week05": 5.76,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.0,
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 8.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 5.52, 5.76, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 6.2, 6.8, 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 'DNP', 'DNP', 'DNP', 2.4, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 11.7, 8.0, 'DNP', 'DNP', 'DNP', 'DNP', 9.0, 'BYE', 'DNP', 'DNP', 'DNP', 6.1, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 21.4, 20.9, 'DNP', 'DNP', 'DNP', 'DNP', 20.5, 'BYE', 'DNP', 'DNP', 'DNP', 18.8, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 13.4,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 16,
    "avg_fp2": 18.23,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.25,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Teddy Bridgewater completed 21-of-35 passes for 258 yards, adding 26 rushing yards and a touchdown, in the Panthers' 24-16 Week 15\u00a0loss to the Packers.\n",
    "report": "",
    "analysis": "Bridgewater has produced significant mental lapses in two straight games that directed led to his team's loss. In Week 14, Bridgewater needlessly hurried his offense to run a play on 3rd-down before the two-minute warning, basically wasting an important opportunity. Tonight, Bridgewater fumbled on the goal line while attempting to reach the ball over the plane. He also fumbled again later on inside the five-yard line, but the play ultimately did not count. Bridgewater simply is not skilled enough to mask earlier mistakes, and is now 0-for-8 on the season in game-winning drive scenarios. His play likely points to the team looking in a different direction when considering their future at the position.\n",
    "timestamp": "2020-12-20 05:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.4,
    "week02": 10.68,
    "week03": 14.6,
    "week04": 27.24,
    "week05": 20.82,
    "week06": 11.44,
    "week07": 19.16,
    "week08": 13.04,
    "week09": 28.3,
    "week10": 20.04,
    "week11": "DNP",
    "week12": 14.88,
    "week13": "BYE",
    "week14": 20.42,
    "week15": 16.92,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.4, 10.68, 14.6, 27.24, 20.82, 11.44, 19.16, 13.04, 28.3, 20.04, 'DNP', 14.88, 'BYE', 20.42, 16.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 15.9, 18.5, 19.1, 11.4, 16.6, 19.9, 20.9, 14.0, 16.0, 'DNP', 13.8, 'BYE', 18.9, 18.8, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 2.9, 5.1, 4.0, 3.8, 4.8, 7.3, 7.1, 9.1, 8.3, 'DNP', 5.9, 'BYE', 4.5, 7.7, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 17.4, 17.1, 17.4, 19.4, 22.4, 22.6, 20.2, 23.6, 23.7, 'DNP', 22.7, 'BYE', 20.7, 21.6, 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 13.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 13,
    "avg_fp2": 17.31,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.8,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Jared Goff completed 23-of-34 passes for 209 yards, two touchdowns and one interception in the Rams' 23-20, Week 15 loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "Stupefying. Goff looked like he was playing the 2000 Ravens or 1985 Bears in the first half, overseeing one three-and-out after another while turfing passes and nearly committing catastrophic giveaways. He did \"convert\" one, throwing an interception to a dropping Bryce Hall against a zone defense. Goff almost committed the exact same mistake in the second half, but the throw was a little too high for the corner. Goff was better after the break, but it was too little, too late for a dazed Rams squad, one that relinquished control of the NFC West to the 10-4 Seahawks. The 'Hawks now\u00a0\"control\u00a0their destiny\" for the division title. The 9-5 Rams would have at least clinched a postseason appearance with a victory. This makes Week 16 vs. Seattle a de facto division championship game after the Rams beat Russell Wilson's squad in Week 10. With the Seahawks' defense continuing to play better, Goff will not be all that appetizing of a streamer for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.5,
    "week02": 23.98,
    "week03": 28.24,
    "week04": 11.7,
    "week05": 25.36,
    "week06": 15.92,
    "week07": 16.86,
    "week08": 12.2,
    "week09": "BYE",
    "week10": 10.48,
    "week11": 25.04,
    "week12": 5.02,
    "week13": 24.14,
    "week14": 15.58,
    "week15": 16.26,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 23.98, 28.24, 11.7, 25.36, 15.92, 16.86, 12.2, 'BYE', 10.48, 25.04, 5.02, 24.14, 15.58, 16.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.2, 15.9, 16.5, 21.4, 16.7, 19.4, 11.9, 22.5, 'BYE', 18.6, 15.7, 14.4, 15.2, 11.7, 20.5, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 12.7, 8.1, 15.3, 9.3, 12.3, 8.9, 9.0, 'BYE', 12.9, 8.6, 9.0, 9.8, 5.8, 8.9, 14.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 26.2, 24.5, 26.9, 23.3, 25.2, 17.9, 25.8, 'BYE', 26.3, 22.7, 25.0, 24.6, 22.5, 24.0, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 12.8,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 11.51,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.78,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Sam Darnold completed 22-of-31 passes for 207 yards and a touchdown in the Jets' 23-20, Week 15 win over the Rams.\u00a0\n",
    "report": "",
    "analysis": "Just like that, the Jets are now 1-13 and no longer in the driver's seat for the No. 1 overall pick, aka Clemson QB Trevor Lawrence. The also 1-13 Jaguars hold the tiebreaker with the easier strength of schedule. Jets fans will be aghast that Gang Green did not see the tank through, but truth be told, they did not play that well or aggressively. The Rams simply slept walked through a catastrophic loss. The Jets put the ball in Frank Gore's gut over and over again, and his 23/59/1 line was somehow enough. Darnold's score was an 18-yard strike to Ty Johnson on the Jets' opening drive where the Rams never accounted for the running back. There was a miscommunication between the linebackers and secondary. Beyond that, Darnold found each of Jamison Crowder, Chris Herndon and Breshad Perriman for 20-yard gains, but nothing longer than 24. It was mostly the same old Jets, minus no turnovers. It was not the same old Rams. The Jets close the season vs. CLE and @NE, with the Jags going vs. CHI, @IND. That is a distinct Jags advantage when it comes to landing, yes, generational talent Lawrence.\u00a0\n",
    "timestamp": "2020-12-21 06:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 11.86,
    "week03": 9.72,
    "week04": 23.6,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 2.8,
    "week08": 7.42,
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 6.78,
    "week13": 21.04,
    "week14": 5.58,
    "week15": 14.08,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 11.86, 9.72, 23.6, 'DNP', 'DNP', 2.8, 7.42, 'DNP', 'BYE', 'DNP', 6.78, 21.04, 5.58, 14.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 20.2, 13.8, 21.7, 'DNP', 'DNP', 16.3, 15.8, 'DNP', 'BYE', 'DNP', 17.3, 14.4, 8.2, 10.0, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 11.1, 8.9, 9.6, 'DNP', 'DNP', 6.7, 6.0, 'DNP', 'BYE', 'DNP', 4.7, 8.7, 7.1, 8.6, 9.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.7, 20.4, 22.1, 22.0, 'DNP', 'DNP', 21.0, 20.5, 'DNP', 'BYE', 'DNP', 18.3, 19.6, 20.0, 23.4, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 11.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 28,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 20.83,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Drew Lock completed 20-of-32 passes for 132 yards and a touchdown in Week 15 against Buffalo\n",
    "report": "",
    "analysis": "He also took three sacks, including a sack-fumble that was returned for a touchdown.\u00a0Lock rushed for 37 yards on five carries, but this was another step in the wrong direction after throwing four touchdowns last week. Lock\u00a0didn\u2019t complete a pass to a receiver until the last drive of the first half and finished with just five completions to his wideouts. His only touchdown was a throw in the back of the end-zone to Noah Fant, who Lock targeted a team-high 11 times. Lock has struggled with consistency and has at least one turnover in 11 of his 12 starts. He'll\u00a0try to rebound in a more favorable\u00a0Week 16 matchup with the Chargers.\n",
    "timestamp": "2020-12-20 01:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.14,
    "week02": -1.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 5.46,
    "week07": 14.96,
    "week08": 20.82,
    "week09": 30.22,
    "week10": 10.74,
    "week11": 12.1,
    "week12": "DNP",
    "week13": 12.94,
    "week14": 25.6,
    "week15": 10.98,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.14, -1.2, 'DNP', 'DNP', 'BYE', 5.46, 14.96, 20.82, 30.22, 10.74, 12.1, 'DNP', 12.94, 25.6, 10.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 11.2, 'DNP', 'DNP', 'BYE', 10.9, 8.4, 14.6, 16.6, 14.2, 14.7, 'DNP', 16.7, 20.2, 15.2, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 10.8, 'DNP', 'DNP', 'BYE', 1.4, 3.6, 6.7, 10.8, 14.2, 5.5, 'DNP', 10.1, 4.7, 8.1, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 21.2, 'DNP', 'DNP', 'BYE', 19.9, 14.6, 20.0, 21.6, 27.9, 15.4, 'DNP', 25.5, 17.6, 23.4, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 8.7,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 13.31,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.05,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants coach Joe Judge believes\u00a0Daniel Jones (hamstring) is on the \"right track\" to start against the Ravens on Sunday.\u00a0\n",
    "report": "",
    "analysis": "Crucially, Jones avoided setbacks following Wednesday's practice.\u00a0\"He\u2019ll jump right into his normal role and go forward with it,\" Judge said of Thursday\u2019s plan. \"We came out of (Wednesday\u2019s)\u00a0practice feeling like we were on the right track.\" Jones was a sitting duck as he attempted to play injured in Week 14, leading to Colt McCoy's Week 15 start. Probably still nowhere close to 100 percent healthy, it's hard to believe Jones will have the requisite running juice to return QB2 value in an extremely tough matchup.\u00a0\n",
    "timestamp": "2020-12-24 07:01 PM",
    "source": "Newsday ",
    "game_day_logo": "",
    "week01": 19.36,
    "week02": 8.74,
    "week03": 9.06,
    "week04": 11.1,
    "week05": 8.18,
    "week06": 14.88,
    "week07": 21.68,
    "week08": 18.24,
    "week09": 12.88,
    "week10": 22.16,
    "week11": "BYE",
    "week12": 10.42,
    "week13": "DNP",
    "week14": 3.08,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.36, 8.74, 9.06, 11.1, 8.18, 14.88, 21.68, 18.24, 12.88, 22.16, 'BYE', 10.42, 'DNP', 3.08, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.4, 20.0, 16.4, 16.3, 21.5, 17.4, 15.8, 14.1, 16.0, 14.7, 'BYE', 22.2, 'DNP', 17.6, 'DNP', 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 5.0, 4.9, 7.5, 8.7, 7.8, 7.0, 6.9, 5.2, 6.6, 'BYE', 11.6, 'DNP', 6.9, 'DNP', 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.5, 25.3, 15.3, 27.9, 25.6, 26.4, 25.1, 24.0, 25.4, 22.6, 'BYE', 26.8, 'DNP', 25.5, 'DNP', 27.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042876.png",
    "name": "Ryan Finley",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 5.3,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 26,
    "avg_fp2": 4.23,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.6,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals QB Brandon Allen (knee) will return for Week 16 against the Texans, but coach Zac Taylor declined to name his starter on Thursday.\u00a0\n",
    "report": "",
    "analysis": "Taylor said Allen will be ready \"if we need him,\" and that there was no need to reveal his starter on Thursday. The Texans are surely on pins and needles as they wait to find out whether they will be facing Allen or Ryan Finley. Neither player has shown even a modicum of passing juice in Joe Burrow's absence. For whatever reason, Finley ran vaguely wild against the Steelers in Week 15. Neither are on the streaming or super FLEX radar.\u00a0\n",
    "timestamp": "2020-12-24 07:15 PM",
    "source": "Ben Baby on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "DNP",
    "week11": 2.1,
    "week12": "DNP",
    "week13": 0.6,
    "week14": 0.2,
    "week15": 18.26,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.1, 'DNP', 0.6, 0.2, 18.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 1.1, 'DNP', -1.2, 4.6, 6.1, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 'DNP', 0.0, 0.0, 1.3, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 10.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 6.8, 'DNP', 8.3, 6.5, 10.4, 4.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 3.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 25,
    "avg_fp2": 12.17,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.36,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "The Football Team fined Dwayne Haskins $40,000 for violating COVID-19 protocols.\u00a0\n",
    "report": "",
    "analysis": "It turned out to be a pricey trip to the club for Haskins, who loses about half a game check for violating COVID protocols. Haskins, who took first team snaps at Wednesday's practice, was also stripped of his captain title for his transgression. He could be under center once again this week against Carolina if Alex Smith (calf) is inactive. Smith would need to practice on Friday -- at the minimum -- to have a chance to play.\u00a0\n",
    "timestamp": "2020-12-24 05:35 AM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 12.82,
    "week02": 11.72,
    "week03": 12.16,
    "week04": 18.86,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 0.84,
    "week15": 16.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.82, 11.72, 12.16, 18.86, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.84, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 15.3, 17.0, 10.4, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.5, 13.7, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.5, 1.9, 5.7, 6.6, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 6.1, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 14.3, 11.8, 15.6, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.2, 16.4, 19.4]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 25.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 20.11,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.26,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Alvin Kamara rushed 11 times for 54 yards in the Saints' Week 15 loss to the Chiefs, adding three catches for 40 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Kamara didn't dominate targets like he has with Drew Brees under center for New Orleans, but his six targets was a team high. Kamara also had a team-high 11 rushing attempts. He muscled his way into the end zone on a second half reception to cap off the Saints' best drive of the day. He'll be a high-end RB1 in Week 16 against the Vikings.\u00a0\n",
    "timestamp": "2020-12-21 05:43 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 21.2,
    "week02": 33.9,
    "week03": 38.2,
    "week04": 19.4,
    "week05": 15.9,
    "week06": "BYE",
    "week07": 18.8,
    "week08": 20.8,
    "week09": 13.4,
    "week10": 31.3,
    "week11": 10.5,
    "week12": 5.7,
    "week13": 16.7,
    "week14": 18.9,
    "week15": 16.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.2, 33.9, 38.2, 19.4, 15.9, 'BYE', 18.8, 20.8, 13.4, 31.3, 10.5, 5.7, 16.7, 18.9, 16.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 19.4, 22.1, 18.6, 21.2, 'BYE', 21.9, 15.5, 19.1, 21.5, 17.6, 17.2, 17.0, 24.2, 18.3, 25.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 6.6, 6.4, 10.0, 11.4, 'BYE', 10.5, 11.2, 8.6, 9.2, 9.6, 9.7, 9.7, 8.8, 11.1, 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 24.0, 25.1, 27.6, 27.9, 'BYE', 28.5, 29.9, 24.6, 24.7, 26.4, 24.8, 25.1, 24.4, 27.5, 26.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 20.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 18,
    "avg_fp2": 13.74,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.71,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Austin Ekeler rushed 13 times for 60 yards in the Chargers' Week 15 overtime win over the Raiders, adding four receptions for 19 additional yards.\u00a0\n",
    "report": "",
    "analysis": "FOX's Jay Glazer reported before the game that Ekeler might be on \"somewhat of a pitch count.\" That wasn't necessarily borne out in the touch totals, but playing through a quad issue, Ekeler did not look anywhere close to 100 percent healthy on the short week. Kalen Ballage was the Bolts' main man near the goal line, getting their only running back score. If there's good news, it's that Ekeler has 10 days to heal up for Week 16 against the Broncos\u00a0if you can survive this underwhelming spot in the fantasy semifinals. Denver is middle of the road in terms of running back production surrendered.\u00a0\u00a0\u00a0\n",
    "timestamp": "2020-12-18 05:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 16.8,
    "week03": 25.8,
    "week04": 1.9,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 18.4,
    "week13": 8.8,
    "week14": 19.1,
    "week15": 9.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 16.8, 25.8, 1.9, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.4, 8.8, 19.1, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 7.9, 17.6, 11.1, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.6, 13.4, 14.7, 17.2, 20.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 2.9, 2.1, 3.5, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 1.7, 7.2, 3.1, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 22.0, 17.7, 22.3, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.2, 19.3, 19.5, 20.6, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 19.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 24,
    "avg_fp2": 15.0,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.38,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Cordarrelle Patterson (knee) did not practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "Patterson isn't a fantasy option outside the deepest leagues, but his absence could further boost David Montgomery's already massive workload this week against Jacksonville. With or without Patterson in the lineup, Montgomery is a no-brainer RB1 against a Jaguars defense being tormented by opposing backs over the past month.\u00a0\n",
    "timestamp": "2020-12-23 08:21 PM",
    "source": "Adam Caplan on Twitter ",
    "game_day_logo": "",
    "week01": 7.9,
    "week02": 20.2,
    "week03": 6.4,
    "week04": 9.2,
    "week05": 15.4,
    "week06": 11.7,
    "week07": 9.4,
    "week08": 11.5,
    "week09": 3.7,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 22.8,
    "week13": 25.1,
    "week14": 23.0,
    "week15": 28.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 20.2, 6.4, 9.2, 15.4, 11.7, 9.4, 11.5, 3.7, 'DNP', 'BYE', 22.8, 25.1, 23.0, 28.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.2, 15.5, 16.0, 5.9, 13.2, 17.5, 11.3, 13.4, 'DNP', 'BYE', 11.7, 18.2, 21.9, 13.8, 19.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 1.5, 3.7, 3.8, 2.7, 3.1, 8.5, 4.5, 4.5, 'DNP', 'BYE', 5.4, 4.2, 4.7, 3.1, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 13.5, 16.2, 14.2, 15.5, 13.9, 20.0, 17.0, 10.7, 'DNP', 'BYE', 17.7, 15.2, 18.5, 15.4, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4052042.png",
    "name": "James Robinson",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 18.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 16.14,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.86,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars coach Doug Marrone said he plans to rest\u00a0James Robinson (ankle) in practice this week.\n",
    "report": "",
    "analysis": "The Jaguars will be cautious with Robinson after he left Week 15 with an ankle injury.\u00a0Robinson told Marrone he wants to play and feels he'll be healthy enough to be out there Sunday.\u00a0Robinson is\u00a0unlikely to practice before Thursday and\u00a0seems destined for a questionable tag. Even at less than 100 percent, he'll be a\u00a0plugged-in RB1 if he plays.\n",
    "timestamp": "2020-12-23 03:50 PM",
    "source": "jaguars.com",
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 19.5,
    "week03": 27.9,
    "week04": 12.7,
    "week05": 7.5,
    "week06": 13.3,
    "week07": 29.7,
    "week08": "BYE",
    "week09": 15.9,
    "week10": 12.2,
    "week11": 10.4,
    "week12": 24.4,
    "week13": 19.8,
    "week14": 10.3,
    "week15": 12.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 19.5, 27.9, 12.7, 7.5, 13.3, 29.7, 'BYE', 15.9, 12.2, 10.4, 24.4, 19.8, 10.3, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 9.2, 15.4, 12.1, 19.6, 9.9, 11.6, 'BYE', 20.3, 12.4, 18.7, 13.6, 13.2, 16.6, 15.8, 18.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 7.9, 10.0, 15.8, 10.6, 13.3, 7.1, 'BYE', 16.0, 9.4, 7.2, 10.8, 9.6, 12.1, 10.7, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.6, 19.6, 20.8, 25.7, 19.5, 22.9, 'BYE', 29.2, 26.9, 22.8, 21.8, 24.1, 26.4, 23.2, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 16.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 2,
    "avg_fp2": 19.91,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.39,
    "fanduelSalary": "$10400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Derrick Henry rushed 24 times for 147 yards and one touchdown in the Titans' Week 15 win over the Lions.\n",
    "report": "",
    "analysis": "He caught both of his pass-game targets for five yards. Henry looked to be well on his way to another huge afternoon after capping an easy opening drive with a three-yard touchdown, but Henry never found the end zone again, as he watched Ryan Tannehill rush for 17- and three-yard scores before backup RB Darrynton Evans caught a three-yarder in the fourth quarter. Henry's ceiling is so high that 24-147-1 almost feels like a letdown. But he gets another juicy draw in Week 16 at the Packers. Henry needs 321 yards over the final two weeks for a 2,000-yard rushing campaign.\n",
    "timestamp": "2020-12-20 10:04 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 14.6,
    "week02": 8.4,
    "week03": 26.0,
    "week04": "BYE",
    "week05": 18.8,
    "week06": 39.4,
    "week07": 14.2,
    "week08": 17.2,
    "week09": 6.8,
    "week10": 11.4,
    "week11": 19.7,
    "week12": 37.5,
    "week13": 5.4,
    "week14": 35.2,
    "week15": 24.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 8.4, 26.0, 'BYE', 18.8, 39.4, 14.2, 17.2, 6.8, 11.4, 19.7, 37.5, 5.4, 35.2, 24.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 22.9, 15.0, 'BYE', 16.3, 14.9, 20.2, 14.3, 15.3, 17.1, 21.1, 14.9, 17.5, 16.9, 17.9, 16.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.9, 1.6, 'BYE', 5.1, 5.3, 3.8, 3.9, 8.8, 5.7, 8.6, 3.2, 6.1, 5.3, 7.9, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 24.1, 21.1, 'BYE', 21.4, 22.3, 21.7, 23.5, 25.6, 23.3, 23.6, 23.9, 25.6, 20.1, 25.0, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 15.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 25,
    "avg_fp2": 13.93,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 22.31,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (toe) practiced again on Thursday.\u00a0\n",
    "report": "",
    "analysis": "Gibson was taking part in individual drills. He will get slapped with another \"limited\" tag. Gibson does not seem terribly likely to return against the Panthers, but this does give him a chance. It also makes it more likely that he will be ready to go for the finale in Week 17. If Gibson gets cleared for the fantasy finals, he will check in as a risk/reward low-end RB2.\u00a0\n",
    "timestamp": "2020-12-24 06:32 PM",
    "source": "John Keim on Twitter ",
    "game_day_logo": "",
    "week01": 5.4,
    "week02": 11.7,
    "week03": 11.5,
    "week04": 20.8,
    "week05": 7.6,
    "week06": 7.5,
    "week07": 18.8,
    "week08": "BYE",
    "week09": 11.0,
    "week10": 20.5,
    "week11": 16.9,
    "week12": 34.1,
    "week13": 1.4,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 11.7, 11.5, 20.8, 7.6, 7.5, 18.8, 'BYE', 11.0, 20.5, 16.9, 34.1, 1.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 6.1, 8.1, 7.6, 12.2, 11.6, 11.9, 'BYE', 10.7, 19.3, 11.4, 11.1, 13.4, 'DNP', 'DNP', 15.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.7, 6.7, 3.0, 6.6, 8.5, 9.2, 'BYE', 8.1, 8.9, 8.3, 7.2, 3.5, 'DNP', 'DNP', 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 10.0, 14.8, 19.2, 20.3, 17.5, 11.3, 'BYE', 19.1, 17.2, 16.5, 18.6, 15.0, 'DNP', 'DNP', 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 14.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 8,
    "avg_fp2": 17.26,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.39,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Jamaal Williams (quad) remained sidelined for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Williams is looking extremely unlikely to suit up against the Titans after departing last Saturday night's win over the Panthers early. Aaron Jones went off for one of his biggest games of the season in Williams' absence. Unimpressive rookie AJ Dillon will get some change-of-pace scraps behind Jones if Williams indeed sits.\u00a0\n",
    "timestamp": "2020-12-24 06:41 PM",
    "source": "Olivia Reiner on Twitter  ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 15.6,
    "week02": 43.6,
    "week03": 15.6,
    "week04": 19.6,
    "week05": "BYE",
    "week06": 11.6,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 10.4,
    "week10": 12.0,
    "week11": 15.1,
    "week12": 9.5,
    "week13": 22.3,
    "week14": 8.5,
    "week15": 23.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 43.6, 15.6, 19.6, 'BYE', 11.6, 'DNP', 'DNP', 10.4, 12.0, 15.1, 9.5, 22.3, 8.5, 23.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 18.4, 17.3, 16.7, 'BYE', 13.6, 'DNP', 'DNP', 14.3, 17.3, 15.3, 12.5, 13.5, 20.2, 14.0, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 3.4, 3.8, 8.9, 'BYE', 3.1, 'DNP', 'DNP', 4.6, 18.0, 1.2, 4.6, 4.4, 4.9, 6.2, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.8, 23.7, 24.1, 21.9, 'BYE', 27.7, 'DNP', 'DNP', 25.7, 32.5, 27.6, 25.4, 25.2, 26.3, 27.7, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 14.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 8.93,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 20.84,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "David Johnson rushed eight times for 27 yards in the Texans' Week 15 loss to the Colts, adding 11 receptions for 106 additional yards.\u00a0\n",
    "report": "",
    "analysis": "100-yard rushing days have become a pipe dream for 29-year-old Johnson, but with Duke Johnson sidelined, David randomly revived to lead the Texans in receiving. He notched 26- and 31-yard grabs for two of the Texans' biggest plays of the day. Huge for this week, but not a bankable formula going forward. Johnson entered Week 15 having caught more than two passes twice. The Bengals, of course, are a plus matchup, one that will keep Johnson in the low-end RB2 mix for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-20 10:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 6.0,
    "week03": 11.6,
    "week04": 10.2,
    "week05": 11.3,
    "week06": 13.4,
    "week07": 14.4,
    "week08": "BYE",
    "week09": 1.6,
    "week10": 0.0,
    "week11": "DNP",
    "week12": "DNP",
    "week13": 10.4,
    "week14": "DNP",
    "week15": 18.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 6.0, 11.6, 10.2, 11.3, 13.4, 14.4, 'BYE', 1.6, 0.0, 'DNP', 'DNP', 10.4, 'DNP', 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 5.3, 11.8, 18.8, 22.2, 14.4, 19.0, 'BYE', 14.9, 6.7, 'DNP', 'DNP', 9.9, 'DNP', 10.0, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 12.4, 6.5, 7.3, 6.5, 7.8, 5.7, 'BYE', 7.1, 5.5, 'DNP', 'DNP', 6.1, 'DNP', 3.8, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 29.3, 22.2, 25.0, 21.7, 27.5, 22.2, 'BYE', 23.7, 24.3, 'DNP', 'DNP', 21.6, 'DNP', 19.3, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 14.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 19,
    "avg_fp2": 12.94,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.31,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Ezekiel Elliott (calf) said he's on track to play in Week 16 against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "ESPN's Todd Archer said Elliott, who missed Week 15 with the lingering calf issue, \"went through some team drills Wednesday after spending the early portion of practice doing resistance training off to the side.\" Elliott told reporters he felt \"better today than I have in the last three weeks on a Wednesday.\" It looks likely Elliott will return to the starting role despite Tony Pollard being the superior back for much of this season. Elliott would be a touchdown-dependent RB2 against the Eagles.\u00a0\n",
    "timestamp": "2020-12-23 07:37 PM",
    "source": "ESPN",
    "game_day_logo": "",
    "week01": 26.2,
    "week02": 19.2,
    "week03": 14.8,
    "week04": 16.5,
    "week05": 23.0,
    "week06": 8.0,
    "week07": 5.6,
    "week08": 7.8,
    "week09": 7.9,
    "week10": "BYE",
    "week11": 18.4,
    "week12": 2.4,
    "week13": 11.5,
    "week14": 6.9,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [26.2, 19.2, 14.8, 16.5, 23.0, 8.0, 5.6, 7.8, 7.9, 'BYE', 18.4, 2.4, 11.5, 6.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 24.8, 19.0, 23.2, 19.1, 20.9, 16.3, 17.6, 14.8, 'BYE', 14.3, 14.4, 15.1, 17.5, 'DNP', 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.4, 12.9, 11.6, 11.4, 11.0, 13.0, 10.6, 9.6, 'BYE', 11.1, 10.1, 7.9, 9.5, 'DNP', 12.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.4, 25.1, 28.2, 25.0, 25.3, 25.4, 25.5, 26.7, 26.7, 'BYE', 25.1, 25.8, 21.6, 23.5, 'DNP', 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 14.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 12,
    "avg_fp2": 14.38,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.11,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Josh Jacobs rushed 26 times for 76 yards and a touchdown in the Raiders' Week 15 overtime loss to the Chargers, adding three receptions for 38 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Jacobs entered the proceedings with an ankle issue and exited it with a knee aggravation. In between, he was running into one brick wall after another on early downs as Marcus Mariota piled up one big play after another with his legs. Jacobs got stood up on\u00a0five\u00a0different carries inside the Chargers' five-yard line, though he thankfully turned a sixth into a one-yard score in the third quarter when he went over the top of the pile. Otherwise, it was an inefficient, unwatchable mess of a performance. The awful stat line is all the more remarkable because Jacobs actually uncorked a 20-yard run, just his second of the season. Jacobs thankfully has nine days to heal up for Week 16 against the Dolphins, but he will be a low-ceiling RB2 whose entire fantasy case rests on volume.\u00a0\n",
    "timestamp": "2020-12-18 06:01 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.9,
    "week02": 12.0,
    "week03": 7.8,
    "week04": 8.8,
    "week05": 21.5,
    "week06": "BYE",
    "week07": 4.6,
    "week08": 12.8,
    "week09": 13.3,
    "week10": 27.6,
    "week11": 12.9,
    "week12": 3.9,
    "week13": "DNP",
    "week14": 8.9,
    "week15": 18.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.9, 12.0, 7.8, 8.8, 21.5, 'BYE', 4.6, 12.8, 13.3, 27.6, 12.9, 3.9, 'DNP', 8.9, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 14.3, 17.7, 15.0, 16.2, 'BYE', 11.3, 16.7, 15.3, 9.2, 14.6, 8.3, 'DNP', 11.4, 11.8, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.7, 8.4, 5.4, 6.1, 'BYE', 6.7, 8.8, 7.4, 9.4, 8.6, 7.8, 'DNP', 7.1, 12.5, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 25.0, 25.7, 22.4, 23.4, 'BYE', 24.4, 21.0, 24.9, 22.2, 22.2, 21.9, 'DNP', 24.4, 25.2, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 13.6,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 5,
    "avg_fp2": 23.1,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.88,
    "fanduelSalary": "$9700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Dalvin Cook rushed 24 times for 132 yards and one touchdown in the Vikings' Week 15 loss to the Bears.\n",
    "report": "",
    "analysis": "Cook also added five receptions for 27 receiving yards. It's another monster game for Cook, who only lost two touches to Alexander Mattison in his return. In addition to a rare workload, Cook has played like one of the league's best pure rushers this season despite popping up with various injuries. He's eclipsed 100 rushing yards in eight of the last 11 games. Cook's Week 15 matchup against the Saints is not ideal, but Cook remains plugged into top-three rankings.\n",
    "timestamp": "2020-12-20 09:20 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 21.3,
    "week02": 16.1,
    "week03": 24.9,
    "week04": 27.6,
    "week05": 17.4,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 47.6,
    "week09": 38.2,
    "week10": 13.2,
    "week11": 22.5,
    "week12": 8.2,
    "week13": 20.9,
    "week14": 18.0,
    "week15": 24.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 16.1, 24.9, 27.6, 17.4, 'DNP', 'BYE', 47.6, 38.2, 13.2, 22.5, 8.2, 20.9, 18.0, 24.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 12.3, 15.3, 14.0, 15.6, 'DNP', 'BYE', 11.2, 20.2, 10.5, 15.5, 20.2, 23.3, 11.7, 15.9, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.8, 5.0, 10.1, 7.0, 11.0, 'DNP', 'BYE', 7.3, 14.4, 12.2, 19.2, 10.4, 9.5, 6.2, 9.0, 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.8, 23.2, 26.8, 22.0, 22.6, 'DNP', 'BYE', 21.8, 31.9, 25.6, 32.6, 27.9, 26.0, 22.1, 23.3, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 13.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 11,
    "avg_fp2": 15.06,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.32,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Chris Carson rushed 15 times for 63 yards in Seattle's Week 15 win over Washington.\n",
    "report": "",
    "analysis": "He also played a season-high in snaps (70%). The box score wasn't kind to Carson (who admittedly didn't stand out on tape), but he still handled 15-of-19 carries and 17-of-23 touches among Seattle's backfield even with Rashaad Penny back in the mix for the latter's first game of the year. The Seahawks' offensive game plan was abundantly clear as the team rushed 26 times to Russell Wilson's 27 pass attempts. Carlos Hyde opened the second half with a 50-yard touchdown run, but Carson is still clearly the running back to roster for the Fantasy Championship among this group. Carson also had at least three targets for the third consecutive game. Consider him a volume-based RB2 in a tough matchup against the Rams in Week 16.\n",
    "timestamp": "2020-12-20 10:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.6,
    "week02": 18.3,
    "week03": 9.1,
    "week04": "DNP",
    "week05": 16.9,
    "week06": "BYE",
    "week07": 4.6,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 12.9,
    "week13": 18.5,
    "week14": 17.3,
    "week15": 7.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.6, 18.3, 9.1, 'DNP', 16.9, 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 18.5, 17.3, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 12.5, 16.4, 'DNP', 16.7, 'BYE', 12.0, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 15.0, 10.2, 14.0, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.2, 5.1, 7.1, 'DNP', 10.4, 'BYE', 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 5.6, 6.0, 7.3, 8.3, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 17.4, 20.3, 'DNP', 22.5, 'BYE', 20.8, 'DNP', 'DNP', 'DNP', 'DNP', 17.3, 16.3, 20.8, 19.2, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 12.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 4,
    "avg_fp2": 12.39,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.21,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kenyan Drake rushed 10 times for 26 yards in Arizona's Week 15 win over the Eagles.\n",
    "report": "",
    "analysis": "He also corralled both of his targets for 14 yards. Chase Edmonds came into Sunday as a game-time call, reportedly being limited even if he were to play, but ultimately out-touched Drake 14-12 including a target (and touchdown reception) inside the 10-yard line. It's truly a wonder if Drake would have had more carries if game script painted\u00a0a favorable lead for the Cardinals. Edmonds was also featured over Drake in clutch fourth-quarter drives. Assuming Nick Mullens remains under center for San Francisco, Week 16 suggests more of a receptive matchup for\u00a0Drake's skillset.\n",
    "timestamp": "2020-12-21 03:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.5,
    "week02": 10.5,
    "week03": 8.4,
    "week04": 3.5,
    "week05": 12.7,
    "week06": 28.4,
    "week07": 4.6,
    "week08": "BYE",
    "week09": "DNP",
    "week10": 9.4,
    "week11": 14.0,
    "week12": 22.8,
    "week13": 12.8,
    "week14": 15.5,
    "week15": 5.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.5, 10.5, 8.4, 3.5, 12.7, 28.4, 4.6, 'BYE', 'DNP', 9.4, 14.0, 22.8, 12.8, 15.5, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 10.1, 16.8, 13.1, 14.5, 9.6, 14.0, 'BYE', 'DNP', 14.4, 16.3, 13.2, 13.2, 15.2, 10.8, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 5.1, 12.4, 14.0, 2.0, 0.9, 6.8, 'BYE', 'DNP', 0.0, 1.3, 3.4, 1.8, 1.3, 1.1, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 20.4, 24.5, 26.9, 17.1, 16.0, 21.0, 'BYE', 'DNP', 22.6, 16.4, 14.5, 19.9, 18.2, 15.3, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 12.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 12.73,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 22.84,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Miles Sanders rushed 17 times for 64 yards, adding a 26-yard catch in Philadelphia's Week 15 loss to Arizona.\n",
    "report": "",
    "analysis": "Outside of his lone 26-yard catch in the first half, Sanders was met up the middle by Arizona's front-seven on nearly every carry and was merely handed five touches across the final two quarters. That shouldn't overshadow the fact that he handled every single backfield carry for the first time all year, out-touching Boston Scott 18-1 on Sunday and 36-5 in Philadelphia's last two games with Jalen Hurts under center. Sanders has also logged 81% of Philadelphia's offensive snaps in both of his last two games. Fantasy players should look beyond the results in this one and fire Sanders up as a low-end RB1 destined to help take home Championships in a smash spot against Dallas in Week 16.\n",
    "timestamp": "2020-12-21 05:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 18.6,
    "week03": 12.7,
    "week04": 8.6,
    "week05": 22.9,
    "week06": 11.7,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 12.5,
    "week11": 7.6,
    "week12": 5.2,
    "week13": 3.1,
    "week14": 27.6,
    "week15": 9.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 18.6, 12.7, 8.6, 22.9, 11.7, 'DNP', 'DNP', 'BYE', 12.5, 7.6, 5.2, 3.1, 27.6, 9.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 22.6, 22.9, 15.7, 13.1, 9.2, 'DNP', 'DNP', 'BYE', 15.0, 14.1, 14.2, 15.9, 9.0, 13.3, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.8, 4.6, 6.6, 4.8, 8.3, 'DNP', 'DNP', 'BYE', 6.4, 5.7, 6.4, 6.4, 5.8, 4.7, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.3, 21.4, 21.7, 19.6, 20.5, 'DNP', 'DNP', 'BYE', 22.3, 20.1, 18.7, 18.5, 20.5, 16.3, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 12.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 21,
    "avg_fp2": 8.32,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.34,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Devin Singletary rushed eight times for 68 yards and a touchdown in Week 15 against the Broncos.\n",
    "report": "",
    "analysis": "The stat line is misleading, as\u00a0Singletary had seven carries for 17 yards before Buffalo's final drive of the night. He scored a 51-yard touchdown against a checked-out Broncos defense with under two minutes in the game. Singletary\u00a0didn't have much of a role in the pass game, catching all three of his targets for 16 yards. With Zack Moss earning a larger share of the carries, Singletary is a\u00a0low-floor RB3 for a Week 16 matchup\u00a0with the Patriots.\n",
    "timestamp": "2020-12-20 02:13 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 7.8,
    "week02": 8.6,
    "week03": 14.1,
    "week04": 16.1,
    "week05": 3.8,
    "week06": 5.0,
    "week07": 5.7,
    "week08": 9.7,
    "week09": 4.9,
    "week10": 1.5,
    "week11": "BYE",
    "week12": 9.7,
    "week13": 9.8,
    "week14": 3.9,
    "week15": 15.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.8, 8.6, 14.1, 16.1, 3.8, 5.0, 5.7, 9.7, 4.9, 1.5, 'BYE', 9.7, 9.8, 3.9, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 14.2, 19.5, 12.0, 11.0, 8.5, 7.6, 'BYE', 12.3, 8.1, 10.7, 10.4, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1, 7.9, 5.1, 3.7, 5.4, 5.5, 'BYE', 4.2, 5.4, 6.9, 4.3, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1, 16.9, 14.9, 14.4, 15.4, 14.9, 'BYE', 15.8, 16.6, 14.6, 13.2, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 11.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 9.06,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.55,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "J.K. Dobbins rushed 14 times for 64 yards and a touchdown in the Ravens' Week 15 win against the Jaguars, adding a catch for 17 yards.\u00a0\n",
    "report": "",
    "analysis": "With Mark Ingram a healthy scratch, Dobbins was once again the primary ball carrier. He walked in for a first half touchdown on one of the many Baltimore scoring drives against a lackluster Jacksonville defense. Gus Edwards had nine\u00a0rushes against the Jags. Dobbins looks unlikely to see a 20-plus carry workload in the season's waning weeks, making him more of a floor play than a high ceiling option. Dobbins will be a safe RB2 option in Week 16 against the Giants.\u00a0\n",
    "timestamp": "2020-12-20 09:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.2,
    "week02": 6.6,
    "week03": 6.4,
    "week04": 2.2,
    "week05": 7.0,
    "week06": 3.9,
    "week07": "BYE",
    "week08": 12.6,
    "week09": 4.5,
    "week10": 1.9,
    "week11": 17.5,
    "week12": "DNP",
    "week13": 13.1,
    "week14": 13.3,
    "week15": 14.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.2, 6.6, 6.4, 2.2, 7.0, 3.9, 'BYE', 12.6, 4.5, 1.9, 17.5, 'DNP', 13.1, 13.3, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 11.2, 7.1, 7.9, 6.1, 2.4, 'BYE', 4.3, 7.1, 7.5, 6.5, 'DNP', 11.2, 10.4, 14.1, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 7.2, 4.5, 0.0, 2.8, 0.0, 'BYE', 2.7, 3.5, 2.1, 10.9, 'DNP', 2.9, 2.3, 6.3, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 21.7, 9.8, 15.0, 9.7, 11.1, 'BYE', 12.0, 7.4, 9.0, 14.7, 'DNP', 8.8, 10.3, 14.7, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 11.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 13,
    "avg_fp2": 11.96,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.54,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Phillip Lindsay (hip) remained sidelined on Thursday.\u00a0\n",
    "report": "",
    "analysis": "\"It's going to go down to the wire,\" coach Vic Fangio said. Playing banged up for weeks, Lindsay has been putting up awful stat lines. It might be time for the Broncos to start thinking about 2021 and shutting Lindsay down. Lindsay's absence would give Melvin Gordon\u00a0much higher RB2 upside than usual.\u00a0\n",
    "timestamp": "2020-12-24 07:14 PM",
    "source": "Troy Renck on Twitter ",
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 15.4,
    "week03": 5.8,
    "week04": 24.8,
    "week05": "BYE",
    "week06": "DNP",
    "week07": 11.0,
    "week08": 7.7,
    "week09": 3.2,
    "week10": 4.6,
    "week11": 18.4,
    "week12": 3.1,
    "week13": 14.7,
    "week14": 10.6,
    "week15": 22.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 15.4, 5.8, 24.8, 'BYE', 'DNP', 11.0, 7.7, 3.2, 4.6, 18.4, 3.1, 14.7, 10.6, 22.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 7.6, 14.7, 8.8, 'BYE', 'DNP', 15.2, 14.8, 9.7, 14.9, 7.7, 12.2, 10.1, 9.8, 10.5, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 8.2, 7.1, 8.0, 'BYE', 'DNP', 6.9, 6.9, 5.5, 8.8, 6.2, 6.3, 7.0, 6.1, 5.2, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 20.6, 22.8, 22.8, 'BYE', 'DNP', 21.8, 22.7, 26.0, 24.5, 19.4, 23.5, 21.4, 21.9, 21.2, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 31,
    "avg_fp2": 11.21,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.86,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers head coach Mike Tomlin said James Conner (quad) could be available for Week 16 against the Colts.\u00a0\n",
    "report": "",
    "analysis": "Tomlin said he was \"impressed\" by Benny Snell, who excelled with Conner sidelined Monday night against the Bengals. Snell turned 18 carries into 84 yards and a touchdown against the Bengals' middling rush defense. \"You gotta admit Benny was an awesome element in a game that didn\u2019t have many,\" Tomlin said Tuesday. There isn't a whole lot of fantasy upside to be had in the Pittsburgh backfield since the team is among the pass heaviest in the NFL this season. A full complement of snaps for Conner in Week 16 would make him a back-end RB2 play. Fantasy managers should hang on to Snell for now.\u00a0\n",
    "timestamp": "2020-12-22 05:26 PM",
    "source": "Brian Batko on Twitter ",
    "game_day_logo": "",
    "week01": 2.7,
    "week02": 19.1,
    "week03": 22.9,
    "week04": "BYE",
    "week05": 13.8,
    "week06": 16.7,
    "week07": 12.6,
    "week08": 13.5,
    "week09": 3.0,
    "week10": 5.8,
    "week11": 11.4,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 1.8,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 19.1, 22.9, 'BYE', 13.8, 16.7, 12.6, 13.5, 3.0, 5.8, 11.4, 'DNP', 'DNP', 1.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 10.1, 17.3, 'BYE', 17.7, 13.3, 13.9, 12.0, 15.0, 15.8, 10.1, 'DNP', 'DNP', 11.5, 'DNP', 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.1, 6.5, 'BYE', 0.0, 5.4, 4.5, 1.5, 7.3, 4.1, 2.6, 'DNP', 'DNP', 1.3, 'DNP', 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 17.2, 24.3, 'BYE', 23.4, 24.6, 26.5, 22.2, 23.3, 22.3, 17.9, 'DNP', 'DNP', 17.0, 'DNP', 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.3,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 29,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 29.29,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Leonard Fournette rushed 14 times for 49 yards and two touchdowns in the Bucs' Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "Fournette made the start with Ronald Jones (finger, COVID) out, and his 14 carries easily paced the backfield, as Ke'Shawn Vaughn handled the other two reps. Fournette wasn't very good in this one, but he did convert a pair of one-yard touchdowns after Mike Evans was stopped inside the five a couple times. Fournette also caught 3-of-5 targets for 16 yards in the passing game. It's unclear how long Jones will be out, but Fournette did enough in this one to feel comfortable with him as a legit back-end RB1 against the Lions in Week 16 if Jones sits again.\n",
    "timestamp": "2020-12-21 06:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.4,
    "week02": 25.6,
    "week03": 3.2,
    "week04": "DNP",
    "week05": 0.0,
    "week06": "DNP",
    "week07": 12.7,
    "week08": 8.6,
    "week09": 7.1,
    "week10": 4.0,
    "week11": 9.1,
    "week12": 3.5,
    "week13": "BYE",
    "week14": "DNP",
    "week15": 20.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 25.6, 3.2, 'DNP', 0.0, 'DNP', 12.7, 8.6, 7.1, 4.0, 9.1, 3.5, 'BYE', 'DNP', 20.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 6.9, 11.8, 'DNP', 6.7, 'DNP', 6.2, 6.9, 9.2, 12.4, 7.9, 9.9, 'BYE', 'DNP', 12.6, 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 7.8, 7.1, 'DNP', 6.3, 'DNP', 5.7, 6.5, 6.0, 6.6, 6.3, 5.0, 'BYE', 'DNP', 5.3, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 19.9, 23.2, 'DNP', 19.4, 'DNP', 20.5, 19.7, 19.8, 20.5, 22.4, 21.0, 'BYE', 'DNP', 19.5, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 11.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 23,
    "avg_fp2": 6.17,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.96,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Frank Gore rushed 23 times for 59 yards and a touchdown in the Jets' Week 15 win over the Rams, adding a six-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Ty Johnson capped the Jets' opening drive with an 18-yard touchdown reception. He got seven total touches. Coach Adam Gase committed to Gore come hell or high water, and the result was, somehow, the Jets' first victory of 2020. 37-year-old Gore \u2014 who people might end up forgetting was a phenomenal player in his prime \u2014 continued to display absolutely zero juice, but Gase could not curb his addiction. It gives Gase plausible deniability that he wasn't trying to give up on Gang Green's Trevor Lawrence tank. The Rams were just even worse today. Gore will be a low-floor, nonexistent-ceiling RB4 for Week 16 against the Browns' tough run defense.\u00a0\n",
    "timestamp": "2020-12-21 01:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.4,
    "week02": 6.3,
    "week03": 6.7,
    "week04": 4.1,
    "week05": 3.0,
    "week06": 9.0,
    "week07": 6.0,
    "week08": 3.0,
    "week09": 6.9,
    "week10": "BYE",
    "week11": 14.1,
    "week12": 10.1,
    "week13": 0.2,
    "week14": 1.6,
    "week15": 13.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 6.3, 6.7, 4.1, 3.0, 9.0, 6.0, 3.0, 6.9, 'BYE', 14.1, 10.1, 0.2, 1.6, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 4.9, 6.3, 9.5, 7.0, 5.9, 4.3, 4.4, 'BYE', 7.1, 8.5, 10.7, 10.6, 7.7, 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.2, 4.4, 3.0, 2.2, 5.4, 3.0, 3.4, 2.7, 'BYE', 4.2, 2.6, 3.3, 4.1, 3.6, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 17.7, 17.4, 16.1, 14.7, 17.9, 15.6, 16.7, 16.0, 'BYE', 17.8, 15.4, 16.6, 16.0, 15.2, 16.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 10.9,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 13.65,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.07,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jonathan Taylor rushed 16 times for 83 yards and a touchdown in the Colts' Week 15 win over the Texans, adding four receptions for 12 additional receptions.\u00a0\n",
    "report": "",
    "analysis": "Fantasy managers will always take 95 yards and a score, but it was disappointing in the context of Taylor popping off for 31 yards and his touchdown on the Colts' opening drive. For whatever reason, he received \"just\" 15 touches the rest of the way even though Jordan Wilkins didn't handle the ball. Nyheim Hines mixed in for 7/54. Despite the \"what might have been?\" feeling, Taylor is now averaging 127 yards from scrimmage with four total touchdowns over his past four appearances. He is playing a gear faster, and looking dangerous at the point of attack. He will remain a locked-in RB1 for Week 16 against the Steelers.\u00a0\u00a0\n",
    "timestamp": "2020-12-20 10:30 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.9,
    "week02": 18.0,
    "week03": 12.7,
    "week04": 8.4,
    "week05": 14.4,
    "week06": 13.5,
    "week07": "BYE",
    "week08": 4.1,
    "week09": 8.4,
    "week10": 4.7,
    "week11": 13.4,
    "week12": "DNP",
    "week13": 21.0,
    "week14": 29.5,
    "week15": 17.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 18.0, 12.7, 8.4, 14.4, 13.5, 'BYE', 4.1, 8.4, 4.7, 13.4, 'DNP', 21.0, 29.5, 17.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 14.1, 12.7, 15.9, 12.4, 12.9, 'BYE', 18.8, 6.6, 12.3, 10.7, 'DNP', 14.0, 8.8, 20.4, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.5, 14.4, 11.5, 6.8, 9.6, 'BYE', 12.0, 5.5, 6.0, 7.0, 'DNP', 9.1, 5.3, 8.4, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 21.4, 19.4, 17.2, 18.0, 20.2, 'BYE', 14.8, 16.4, 13.3, 15.7, 'DNP', 14.8, 17.5, 18.7, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 10.9,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 14,
    "avg_fp2": 6.22,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 18.24,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "NFL Network's Ian Rapoport said Clyde Edwards-Helaire (hip/leg) will likely miss the regular season's final two weeks.\u00a0\n",
    "report": "",
    "analysis": "The rookie is getting an MRI Monday after X-rays Sunday night were negative. Edwards-Helaire was bent awkwardly on a fourth quarter tackle against the Saints and was helped to the locker room without putting weight on his injured leg. Le'Veon Bell, who led the team in rushing attempts in Week 15 against the Saints, will be the primary ball carrier for KC in Week 16 against the Falcons. Darrel Williams will probably see an increased role with CEH sidelined. He saw three carries against the Saints.\u00a0\n",
    "timestamp": "2020-12-21 01:39 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 5.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "DNP",
    "week07": 3.9,
    "week08": 5.3,
    "week09": 0.8,
    "week10": "BYE",
    "week11": 10.1,
    "week12": 4.2,
    "week13": 6.5,
    "week14": 4.5,
    "week15": 14.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 'DNP', 'DNP', 'DNP', 7.2, 'DNP', 3.9, 5.3, 0.8, 'BYE', 10.1, 4.2, 6.5, 4.5, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 18.3, 'DNP', 9.3, 7.6, 4.6, 'BYE', 5.9, 6.8, 8.9, 5.6, 5.4, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3, 'DNP', 9.1, 8.9, 6.9, 'BYE', 7.6, 0.7, 7.5, 7.4, 3.1, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1, 'DNP', 26.3, 27.1, 26.2, 'BYE', 24.8, 19.8, 24.9, 24.2, 12.6, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 10.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 16.78,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.44,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nick Chubb rushed 15 times for 50 yards and one touchdown in the Browns' Week 15 win over the Giants.\n",
    "report": "",
    "analysis": "Cleveland was missing their star right guard in Wyatt Teller and his backup exited on the second play. There were fewer rushing lanes because of it, especially against the big fellas the Giants deploy on the interior defensive line. Still, Chubb was a fine fantasy play after finding the end zone in the second half. When in good game scripts, Chubb has a monster ceiling. Things are setting up for a big week next Sunday with the Jets on schedule.\n",
    "timestamp": "2020-12-21 04:25 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 25.8,
    "week03": 23.5,
    "week04": 4.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 18.6,
    "week11": 11.4,
    "week12": 25.1,
    "week13": 17.1,
    "week14": 23.3,
    "week15": 13.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 25.8, 23.5, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.6, 11.4, 25.1, 17.1, 23.3, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.3, 10.9, 10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.8, 11.4, 16.6, 11.2, 12.1, 14.5, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 3.5, 2.6, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.1, 3.5, 4.8, 6.2, 4.8, 5.0, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.8, 18.1, 23.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 22.7, 18.9, 21.0, 24.5, 23.8, 21.6, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 9.7,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 20.83,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Coach Sean McVay said Cam Akers will miss at least Week 16 against the Seahawks with a high-ankle sprain.\n",
    "report": "",
    "analysis": "McVay stressed \"at least\" Week 16, so it's probably a good bet Akers is done for the regular season. Akers had to hobble off in the first half of the stunning Week 15 loss to the Jets but somehow was able to return. The adrenaline has worn off now, however, and Akers won't be available for the fantasy finals. The Rams will likely install Darrell Henderson as their 1A back against Seattle with Malcolm Brown very involved as the 1B. Henderson needs to be added where he was dropped.\n",
    "timestamp": "2020-12-22 01:36 AM",
    "source": "Lindsey Thiry on Twitter",
    "game_day_logo": "",
    "week01": 0.6,
    "week02": 19.1,
    "week03": 18.5,
    "week04": 4.3,
    "week05": 20.3,
    "week06": 9.2,
    "week07": 8.7,
    "week08": 6.3,
    "week09": "BYE",
    "week10": 9.8,
    "week11": 1.9,
    "week12": 1.9,
    "week13": 14.4,
    "week14": 0.5,
    "week15": 0.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 19.1, 18.5, 4.3, 20.3, 9.2, 8.7, 6.3, 'BYE', 9.8, 1.9, 1.9, 14.4, 0.5, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 2.3, 6.9, 14.7, 7.3, 9.5, 9.4, 12.1, 'BYE', 11.4, 6.6, 11.2, 7.6, 6.1, 4.8, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0, 0.0, 'BYE', 0.1, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.8, 5.3, 4.4, 9.8, 9.2, 14.2, 12.4, 12.2, 'BYE', 13.5, 13.1, 16.1, 12.3, 11.4, 9.7, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 9.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 27,
    "avg_fp2": 8.38,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 27.81,
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
    "headlineNews": "Bengals head coach Zac Taylor ruled out Joe Mixon (foot) for Week 16 against the Texans.\u00a0\n",
    "report": "",
    "analysis": "Continuing his ongoing bit, Taylor suggested Mixon might be ready for Week 17. Sure. Fantasy players should assume Mixon won't play again until 2021. The Mixon saga feels like last year's weekly prediction that A.J. Green was just days away from returning to the Bengals' lineup. He never did. Giovani Bernard has a favorable Week 16 matchup against a Houston defense giving up 29.9 rushing attempts per game. Bernard will be a low-end RB2.\u00a0\n",
    "timestamp": "2020-12-23 06:05 PM",
    "source": "Ben Baby on Twitter ",
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 1.9,
    "week05": 0.9,
    "week06": 10.3,
    "week07": 18.1,
    "week08": 21.3,
    "week09": "BYE",
    "week10": 6.7,
    "week11": 7.5,
    "week12": 5.9,
    "week13": 3.9,
    "week14": 1.8,
    "week15": 22.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 5.0, 7.0, 1.9, 0.9, 10.3, 18.1, 21.3, 'BYE', 6.7, 7.5, 5.9, 3.9, 1.8, 22.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.0, 4.7, 6.3, 5.5, 5.2, 14.0, 10.4, 'BYE', 9.9, 9.3, 12.1, 10.5, 15.4, 9.2, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 8.2, 1.0, 0.9, 0.6, 0.0, 7.5, 2.6, 'BYE', 1.8, 3.2, 4.2, 0.7, 4.2, 2.2, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 17.8, 14.0, 11.3, 16.7, 12.1, 18.9, 15.3, 'BYE', 12.6, 14.6, 15.4, 11.1, 13.5, 14.6, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128774.png",
    "name": "Kalen Ballage",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 9.0,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 18,
    "avg_fp2": 7.94,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.71,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Kalen Ballage rushed eight times for 11 yards and a touchdown in the Chargers' Week 15 win over the Raiders.\u00a0\n",
    "report": "",
    "analysis": "The Chargers like Ballage enough that they made Justin Jackson a healthy scratch this evening and waived Troymaine Pope. His score was a one-yarder. Even with Austin Ekeler (quad) at less than 100 percent health right now, there will be zero reason for fantasy managers to turn to Ballage against the Broncos in Week 16.\u00a0\n",
    "timestamp": "2020-12-18 05:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 7.7,
    "week04": 2.1,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 12.7,
    "week11": 10.6,
    "week12": "DNP",
    "week13": 5.4,
    "week14": 2.5,
    "week15": 7.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 7.7, 2.1, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 12.7, 10.6, 'DNP', 5.4, 2.5, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.0, 1.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 5.2, 13.9, 'DNP', 4.2, 3.8, 8.1, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 2.6, 0.0, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 7.6, 7.4, 'DNP', 0.5, 8.8, 3.0, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 8.2, 8.9, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 12.0, 15.1, 'DNP', 7.8, 13.8, 10.4, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123969.png",
    "name": "Ito Smith",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 8.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 28,
    "avg_fp2": 3.42,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.58,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons interim coach Raheem Morris said Ito Smith is \"the lead runner\u00a0right now.\"\n",
    "report": "",
    "analysis": "Morris also said Todd Gurley's role has \"changed\" of late. Not that he needed to tell us that; Gurley, who the Falcons signed to a one-year, $5.5 million contract after he was cut from the Rams, has fallen forward for 60 yards on 23 carries in his last four games. Smith has run for 37/167/1 and 4.5 yards per carry in that stretch but has still offered minimal value for fantasy since both Brian Hill and Gurley have stayed involved in lesser roles. If this is Morris' way of changing the guard and seeing what Smith has to offer as a featured back in Atlanta's last two games, Ito suddenly stands out as an interesting FLEX and DFS option in an uptempo matchup against the Chiefs in Week 16. He'll likely make an appearance\u00a0in John Daigle's Waiver Wire column on Tuesday.\n",
    "timestamp": "2020-12-21 08:24 PM",
    "source": "Kelsey Conway on Twitter",
    "game_day_logo": "",
    "week01": 2.1,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.2,
    "week05": 0.6,
    "week06": 3.0,
    "week07": 0.0,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 15.5,
    "week13": 3.9,
    "week14": 5.0,
    "week15": 4.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 2.0, 0.0, 4.2, 0.6, 3.0, 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 15.5, 3.9, 5.0, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 3.7, 9.6, 6.3, 4.1, 2.1, 1.4, 'DNP', 'DNP', 'BYE', 'DNP', 7.4, 0.9, 1.8, 3.4, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.8, 2.9, 1.0, 1.6, 2.0, 0.7, 'DNP', 'DNP', 'BYE', 'DNP', 0.2, 1.4, 1.0, 0.3, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.0, 10.4, 8.7, 9.0, 8.7, 9.0, 'DNP', 'DNP', 'BYE', 'DNP', 9.0, 12.0, 8.3, 9.4, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 8.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 8.11,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.26,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Latavius Murray rushed four times for three yards in the Saints' Week 15 loss to the Chiefs, adding two receptions for 26 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "On a Kamara-esque play, Murray took a screen pass 24 yards for a score in the third quarter. He did nothing besides that in the Saints' loss as Kamara dominated backfield touches. The loss of Michael Thomas could open up some touches for Murray, but he'll be nothing more than a touchdown-dependent RB3 option in Week 16 against the Vikings (unless you consider the almighty revenge narrative).\u00a0\n",
    "timestamp": "2020-12-21 02:34 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 4.8,
    "week02": 4.3,
    "week03": 7.0,
    "week04": 20.8,
    "week05": 6.7,
    "week06": "BYE",
    "week07": 6.1,
    "week08": 4.6,
    "week09": 5.2,
    "week10": 5.7,
    "week11": 9.5,
    "week12": 25.1,
    "week13": 2.7,
    "week14": 1.2,
    "week15": 9.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.3, 7.0, 20.8, 6.7, 'BYE', 6.1, 4.6, 5.2, 5.7, 9.5, 25.1, 2.7, 1.2, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7, 'BYE', 7.4, 6.5, 6.0, 8.1, 4.6, 7.3, 5.6, 8.3, 7.2, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8, 'BYE', 1.0, 0.0, 1.8, 0.5, 8.2, 1.5, 8.4, 1.6, 1.4, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3, 'BYE', 13.5, 17.3, 16.0, 13.0, 19.0, 15.1, 21.2, 16.9, 16.2, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 8.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 25,
    "avg_fp2": 9.05,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 22.31,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (toe) was limited at Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "At long last, Gibson is back at practice. He's missed two games with the toe injury, ceding backfield duties to J.D. McKissic and Peyton Barber. Gibson practicing on a Wednesday -- even in a limited capacity -- is excellent news for the rookie's Week 16 availability against Carolina. A full complement of snaps and touches for Gibson would make him a RB1 candidate for fantasy championship week.\u00a0\n",
    "timestamp": "2020-12-24 05:45 AM",
    "source": "Adam Caplan on Twitter ",
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.3,
    "week03": 6.7,
    "week04": 6.1,
    "week05": 7.9,
    "week06": 11.4,
    "week07": 6.1,
    "week08": "BYE",
    "week09": 12.7,
    "week10": 14.4,
    "week11": 8.4,
    "week12": 3.7,
    "week13": 12.8,
    "week14": 9.6,
    "week15": 21.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.3, 6.7, 6.1, 7.9, 11.4, 6.1, 'BYE', 12.7, 14.4, 8.4, 3.7, 12.8, 9.6, 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 4.3, 3.8, 2.8, 5.2, 4.9, 6.7, 'BYE', 6.0, 12.0, 8.4, 7.6, 5.8, 5.4, 8.1, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.4, 3.4, 0.0, 0.0, 2.3, 'BYE', 2.0, 3.0, 3.4, 3.9, 2.6, 5.9, 3.4, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 8.1, 8.2, 7.2, 12.0, 11.5, 12.3, 'BYE', 9.9, 9.3, 10.0, 13.1, 12.5, 13.0, 12.2, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 8.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 8.84,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.19,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Damien Harris (ankle) has been downgraded to out for Week 15 against Miami.\u00a0\n",
    "report": "",
    "analysis": "Harris went down late in Week 14 against the Rams. He was a late addition to the injury report this week, getting in limited practices on Thursday and Friday. The Patriots are hoping\u00a0Harris only ends up missing one game. With Harris out, Sony Michel will serve as New England's lead back.\u00a0\n",
    "timestamp": "2020-12-19 06:00 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 12.1,
    "week11": 11.9,
    "week12": 4.7,
    "week13": 10.0,
    "week14": 5.5,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 12.1, 11.9, 4.7, 10.0, 5.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.8, 13.1, 9.2, 9.3, 10.9, 'DNP', 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 11.2, 9.2, 9.1, 3.6, 'DNP', 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 16.6, 14.5, 13.8, 17.4, 'DNP', 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 8.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 28,
    "avg_fp2": 10.78,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.58,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons interim coach Raheem Morris said Ito Smith is \"the lead runner\u00a0right now.\"\n",
    "report": "",
    "analysis": "Morris also said Todd Gurley's role has \"changed\" of late. Not that he needed to tell us that; Gurley, who the Falcons signed to a one-year, $5.5 million contract after he was cut from the Rams, has fallen forward for 60 yards on 23 carries in his last four games. Smith has run for 37/167/1 and 4.5 yards per carry in that stretch but has still offered minimal value for fantasy since both Brian Hill and Gurley have stayed involved in lesser roles. If this is Morris' way of changing the guard and seeing what Smith has to offer as a featured back in Atlanta's last two games, Ito suddenly stands out as an interesting FLEX and DFS option in an uptempo matchup against the Chiefs in Week 16. He'll likely make an appearance\u00a0in John Daigle's Waiver Wire column on Tuesday.\n",
    "timestamp": "2020-12-21 08:24 PM",
    "source": "Kelsey Conway on Twitter",
    "game_day_logo": "",
    "week01": 12.7,
    "week02": 6.1,
    "week03": 14.7,
    "week04": 18.8,
    "week05": 23.0,
    "week06": 8.2,
    "week07": 21.2,
    "week08": 10.6,
    "week09": 12.5,
    "week10": "BYE",
    "week11": 3.4,
    "week12": "DNP",
    "week13": 2.5,
    "week14": 4.1,
    "week15": 2.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.7, 6.1, 14.7, 18.8, 23.0, 8.2, 21.2, 10.6, 12.5, 'BYE', 3.4, 'DNP', 2.5, 4.1, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.3, 18.7, 17.7, 13.8, 13.2, 12.0, 20.1, 12.9, 'BYE', 9.7, 'DNP', 8.9, 11.4, 10.9, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 8.3, 6.3, 5.7, 9.6, 7.4, 7.0, 9.0, 7.2, 'BYE', 7.3, 'DNP', 5.0, 9.2, 6.1, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 23.7, 24.3, 23.4, 25.5, 27.4, 25.5, 22.7, 24.6, 'BYE', 24.2, 'DNP', 26.8, 27.0, 23.2, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 8.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 30,
    "avg_fp2": 13.21,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.31,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "D'Andre Swift rushed 15 times for 67 yards and two touchdowns in the Lions' Week 15 loss to the Titans.\n",
    "report": "",
    "analysis": "He added four catches for 15 yards on five targets, which were the second-most on the team behind Marvin Jones' 12. Swift got the start in this one, and his 19 touches easily paced the Lions' backfield ahead of Adrian Peterson's six and Kerryon Johnson's goose egg. Swift lost an early fumble at the goal line as he attempted to jump over the pile into the end zone from the one-yard line, but the Lions stuck with him, and he made up for the turnover with two- and six-yard touchdown runs. Swift now has 30 touches over the last two weeks since returning from his concussion. Swift gets a tough Week 16 date with the Bucs but will be an upside RB2 for that one.\n",
    "timestamp": "2020-12-21 06:57 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 9.7,
    "week03": 2.4,
    "week04": 13.2,
    "week05": "BYE",
    "week06": 25.8,
    "week07": 12.8,
    "week08": 3.8,
    "week09": 11.2,
    "week10": 23.4,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 13.0,
    "week15": 20.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 9.7, 2.4, 13.2, 'BYE', 25.8, 12.8, 3.8, 11.2, 23.4, 'DNP', 'DNP', 'DNP', 13.0, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 6.0, 9.3, 6.9, 'BYE', 7.0, 10.4, 10.6, 10.7, 10.4, 'DNP', 'DNP', 'DNP', 19.2, 13.5, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.9, 2.8, 2.2, 'BYE', 5.2, 4.9, 7.3, 5.6, 2.2, 'DNP', 'DNP', 'DNP', 4.1, 8.6, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 10.8, 13.3, 10.2, 'BYE', 11.4, 23.0, 24.5, 12.1, 19.4, 'DNP', 'DNP', 'DNP', 18.5, 18.6, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 7.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 10.26,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.07,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Nyheim Hines rushed five times for 43 yards in the Colts' Week 15 win over the Texans, adding two receptions for 11 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Out-touched 20-7 by Jonathan Taylor, Hines saw his snaps drop from 24 in Week 14 to 16 (via Pro Football Focus). After employing a three-man backfield most of the season, the Colts are now settling into a more tradition bell-cow/change-of-pace setup, with Taylor dominating work and Hines checking in to provide a different look. Hines is being put into position to make big plays, but his workload is rendering him a low-floor FLEX even in PPR leagues. The Steelers are a tough Week 16 matchup for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:25 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.3,
    "week02": 0.9,
    "week03": 8.1,
    "week04": 4.7,
    "week05": 4.0,
    "week06": 5.2,
    "week07": "BYE",
    "week08": 19.7,
    "week09": 4.8,
    "week10": 26.0,
    "week11": 6.8,
    "week12": 13.5,
    "week13": 10.7,
    "week14": 9.5,
    "week15": 6.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 0.9, 8.1, 4.7, 4.0, 5.2, 'BYE', 19.7, 4.8, 26.0, 6.8, 13.5, 10.7, 9.5, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 12.4, 6.1, 9.5, 8.6, 7.3, 'BYE', 11.0, 4.1, 8.2, 7.4, 11.4, 9.3, 9.0, 11.5, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.0, 4.1, 3.6, 2.7, 1.8, 'BYE', 3.0, 2.5, 2.3, 1.6, 2.9, 2.6, 2.7, 3.0, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 9.5, 10.4, 11.5, 10.9, 10.9, 'BYE', 13.3, 9.2, 12.6, 13.4, 14.1, 13.4, 13.6, 11.9, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 7.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 12.07,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.76,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins activated Myles Gaskin off the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Gaskin practiced Wednesday before being removed from the COVID list. He'll play this week against the Raiders. Salvon Ahmed, who took 23 carries for 122 yards and a touchdown in Week 15 against the Patriots, would likely play behind Gaskin, losing most of his fantasy value. Gaskin was seeing a reliable workload before a knee injury and being placed on the COVID list. He should be a locked-in RB2 against a mediocre Vegas rush defense.\u00a0\n",
    "timestamp": "2020-12-23 09:58 PM",
    "source": "Aaron Wilson on Twitter ",
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 11.2,
    "week03": 12.0,
    "week04": 7.7,
    "week05": 17.6,
    "week06": 14.6,
    "week07": "BYE",
    "week08": 11.8,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 13.1,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 11.2, 12.0, 7.7, 17.6, 14.6, 'BYE', 11.8, 'DNP', 'DNP', 'DNP', 'DNP', 13.1, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 12.2, 8.7, 9.2, 3.9, 14.4, 'BYE', 12.6, 'DNP', 'DNP', 'DNP', 'DNP', 15.4, 'DNP', 'DNP', 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.2, 6.9, 4.4, 3.5, 5.3, 'BYE', 8.2, 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'DNP', 'DNP', 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.8, 7.6, 13.7, 13.1, 9.9, 12.4, 'BYE', 14.2, 'DNP', 'DNP', 'DNP', 'DNP', 15.7, 'DNP', 'DNP', 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3025433.png",
    "name": "Mike Davis",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 7.7,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 12.01,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.86,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers head coach Matt Rhule said Christian McCaffrey (thigh) is doubtful to play this week against Washington.\u00a0\n",
    "report": "",
    "analysis": "Rhule said CMC would have to practice before the team can consider playing him, and he hasn't been able to get on the practice field with various injuries -- most recently a thigh issue. Fantasy managers should assume Mike Davis will handle another starter's workload this week against Washington. McCaffrey is a long shot to return for Week 17.\u00a0\n",
    "timestamp": "2020-12-23 07:45 PM",
    "source": "Steve Reed on Twitter ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 11.5,
    "week03": 19.1,
    "week04": 19.6,
    "week05": 25.4,
    "week06": 10.5,
    "week07": 6.1,
    "week08": 8.2,
    "week09": 6.2,
    "week10": 6.4,
    "week11": 14.9,
    "week12": 9.4,
    "week13": "BYE",
    "week14": 23.8,
    "week15": 7.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 11.5, 19.1, 19.6, 25.4, 10.5, 6.1, 8.2, 6.2, 6.4, 14.9, 9.4, 'BYE', 23.8, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 0.0, 5.9, 9.8, 10.7, 13.9, 12.9, 17.3, 6.3, 13.3, 15.8, 13.7, 'BYE', 9.7, 14.0, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 0.0, 0.4, 0.6, 5.1, 2.0, 1.2, 1.7, 0.7, 8.7, 1.2, 'BYE', 0.7, 0.8, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 8.8, 10.9, 10.6, 13.7, 16.6, 15.8, 11.1, 11.6, 13.3, 21.0, 13.3, 'BYE', 12.9, 13.6, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 7.4,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 4,
    "avg_fp2": 9.73,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.21,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Chase Edmonds (ankle, knee) remained out of practice on Wednesday.\n",
    "report": "",
    "analysis": "Edmonds outplayed Kenyan Drake in Week 15, so it is a shame he has opened this week by missing two straight practices. He still might play, as Edmonds was considered \"limited\" heading into his last game, but we likely won't know more until Saturday morning.\n",
    "timestamp": "2020-12-24 12:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 2.8,
    "week03": 4.4,
    "week04": 12.5,
    "week05": 17.7,
    "week06": 3.4,
    "week07": 18.0,
    "week08": "BYE",
    "week09": 10.3,
    "week10": 9.2,
    "week11": 12.9,
    "week12": 6.3,
    "week13": 5.3,
    "week14": 7.3,
    "week15": 14.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 2.8, 4.4, 12.5, 17.7, 3.4, 18.0, 'BYE', 10.3, 9.2, 12.9, 6.3, 5.3, 7.3, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 2.8, 7.9, 6.0, 9.4, 5.9, 5.9, 'BYE', 9.9, 9.8, 9.6, 6.8, 5.8, 7.0, 5.5, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.9, 1.5, 0.1, 'BYE', 0.0, 0.0, 0.0, 0.3, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.2, 15.9, 16.5, 10.2, 7.2, 12.1, 11.5, 'BYE', 13.2, 14.6, 15.9, 12.9, 10.9, 16.4, 13.3, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045127.png",
    "name": "Wayne Gallman",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 7.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 16,
    "avg_fp2": 8.72,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.07,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Wayne Gallman rushed nine times for 29 yards in the Giants' Week 15 loss to the Browns.\n",
    "report": "",
    "analysis": "Unfortunately, Gallman was committeed by the Giants coaching staff. Alfred Morris subbed in frequently and ended with more yards (39) than Gallman on two fewer carries. Even Dion Lewis mixed in on obvious passing downs. It's no longer a role to bet on for the November noise maker. Gallman could begin losing touches to Devonta Freeman, who can be activated from injured reserve at any point. The Giants will look to steal a win in Baltimore next week. Gallman shouldn't be counted on.\n",
    "timestamp": "2020-12-21 04:45 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 4.5,
    "week05": 3.4,
    "week06": 0.0,
    "week07": 13.9,
    "week08": 12.7,
    "week09": 14.2,
    "week10": 18.5,
    "week11": "BYE",
    "week12": 16.6,
    "week13": 13.5,
    "week14": 8.8,
    "week15": 2.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 4.5, 3.4, 0.0, 13.9, 12.7, 14.2, 18.5, 'BYE', 16.6, 13.5, 8.8, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.5, 5.5, 4.1, 4.3, 6.4, 6.6, 7.7, 'BYE', 8.9, 9.7, 15.6, 16.9, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 1.8, 0.0, 0.6, 0.0, 0.0, 0.4, 'BYE', 3.8, 9.7, 4.0, 0.8, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.7, 12.5, 12.1, 8.4, 10.3, 14.0, 10.4, 'BYE', 11.2, 18.4, 13.6, 10.9, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 7.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 6.58,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 20.84,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Neck",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Duke Johnson remained out with his neck injury during Wednesday's practice.\n",
    "report": "",
    "analysis": "It is the same injury that kept Duke out for Week 15 and allowed David Johnson to dominate touches, including over 10 targets against the Colts. Without Duke on the field, David will likely be viewed as a RB2 against the Bengals.\n",
    "timestamp": "2020-12-24 02:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 6.0,
    "week05": 2.4,
    "week06": 1.6,
    "week07": 6.7,
    "week08": "BYE",
    "week09": 15.3,
    "week10": 5.4,
    "week11": 5.0,
    "week12": 15.5,
    "week13": 6.2,
    "week14": 6.9,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 'DNP', 'DNP', 6.0, 2.4, 1.6, 6.7, 'BYE', 15.3, 5.4, 5.0, 15.5, 6.2, 6.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 'DNP', 'DNP', 7.4, 10.8, 8.2, 8.3, 'BYE', 6.9, 11.6, 8.6, 9.5, 6.8, 8.6, 'DNP', 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 'DNP', 'DNP', 5.2, 3.6, 3.7, 4.7, 'BYE', 3.5, 2.5, 3.5, 2.2, 2.8, 3.3, 'DNP', 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 'DNP', 'DNP', 15.9, 12.5, 14.2, 15.4, 'BYE', 12.6, 12.9, 12.0, 14.1, 13.7, 13.0, 'DNP', 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16782.png",
    "name": "Jerick McKinnon",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 7.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 17,
    "avg_fp2": 7.42,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.26,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jerick McKinnon played zero offensive snaps and seven special teams snaps in Week 14 against Washington\n",
    "report": "",
    "analysis": "It's a remarkable fall from grace for McKinnon, who hasn't recorded a touch since Week 12. 49ers head coach Kyle Shanahan implied after the game that McKinnon was worn down from his heavy early-season workload. \"[McKinnon] carried the load for us while those guys were all out, which took a toll on him, but he dresses every week because we'll use him if need be,\" Shanahan said, adding that he would use Raheem Moster and Jeff Wilson as a \"one-two\" punch going forward. McKinnon can be dropped except for in the deepest fantasy formats.\u00a0\n",
    "timestamp": "2020-12-14 04:41 PM",
    "source": "NBC Sports ",
    "game_day_logo": "",
    "week01": 11.9,
    "week02": 13.7,
    "week03": 15.2,
    "week04": 19.2,
    "week05": 1.5,
    "week06": 3.8,
    "week07": -0.1,
    "week08": 11.9,
    "week09": 14.3,
    "week10": 5.1,
    "week11": "BYE",
    "week12": 4.2,
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 13.7, 15.2, 19.2, 1.5, 3.8, -0.1, 11.9, 14.3, 5.1, 'BYE', 4.2, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 3.3, 10.3, 6.2, 10.5, 7.3, 8.7, 7.4, 9.5, 7.1, 'BYE', 5.5, 'DNP', 'DNP', 'DNP', 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 4.1, 2.4, 0.0, 1.5, 2.4, 1.9, 1.7, 1.7, 1.8, 'BYE', 1.6, 'DNP', 'DNP', 'DNP', 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 17.0, 14.8, 15.2, 15.9, 14.6, 15.7, 14.7, 15.5, 14.7, 'BYE', 14.2, 'DNP', 'DNP', 'DNP', 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 6.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 19,
    "avg_fp2": 7.09,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.31,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Ezekiel Elliott (calf) said he's on track to play in Week 16 against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "ESPN's Todd Archer said Elliott, who missed Week 15 with the lingering calf issue, \"went through some team drills Wednesday after spending the early portion of practice doing resistance training off to the side.\" Elliott told reporters he felt \"better today than I have in the last three weeks on a Wednesday.\" It looks likely Elliott will return to the starting role despite Tony Pollard being the superior back for much of this season. Elliott would be a touchdown-dependent RB2 against the Eagles.\u00a0\n",
    "timestamp": "2020-12-23 07:37 PM",
    "source": "ESPN",
    "game_day_logo": "",
    "week01": 4.2,
    "week02": 1.4,
    "week03": -0.1,
    "week04": 9.7,
    "week05": 4.2,
    "week06": 5.0,
    "week07": 2.7,
    "week08": 7.4,
    "week09": 6.3,
    "week10": "BYE",
    "week11": 12.0,
    "week12": 3.2,
    "week13": 3.3,
    "week14": 11.8,
    "week15": 28.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.2, 1.4, -0.1, 9.7, 4.2, 5.0, 2.7, 7.4, 6.3, 'BYE', 12.0, 3.2, 3.3, 11.8, 28.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 7.2, 4.0, 4.3, 5.6, 6.0, 5.2, 3.7, 6.3, 'BYE', 4.9, 3.7, 3.7, 5.7, 6.9, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 'BYE', 0.0, 0.8, 0.0, 0.0, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 9.0, 10.2, 11.4, 14.9, 12.8, 13.5, 14.6, 10.8, 'BYE', 12.3, 10.5, 12.6, 10.2, 11.6, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 6.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 11,
    "avg_fp2": 8.2,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.32,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Carlos Hyde rushed twice for 55 yards and a touchdown in Seattle's Week 15 win over Washington.\n",
    "report": "",
    "analysis": "As expected.\u00a0Hyde was merely treated as a backup against Washington, handling\u00a02-of-19 running back carries and hauling in 2-of-3 targets for eight empty yards. A majority of his production occurred when he\u00a0exploded for a 50-yard touchdown to open the second half \u2014 the only time the Seahawks reached paint on six second-half possessions. With Chris Carson notching 17 touches and a season-high in snaps (70%) on Sunday, Hyde can continue to be stashed as nothing\u00a0more than a backup in case Carson is injured in Week 16.\n",
    "timestamp": "2020-12-20 11:12 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.3,
    "week02": 4.7,
    "week03": 2.8,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 15.1,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 16.5,
    "week12": 3.9,
    "week13": 2.6,
    "week14": 6.6,
    "week15": 13.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.3, 4.7, 2.8, 'DNP', 'DNP', 'BYE', 15.1, 'DNP', 'DNP', 'DNP', 16.5, 3.9, 2.6, 6.6, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.8, 6.2, 'DNP', 'DNP', 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 10.6, 6.5, 6.3, 4.5, 6.2, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 3.8, 'DNP', 'DNP', 'BYE', 1.9, 'DNP', 'DNP', 'DNP', 3.5, 5.1, 2.5, 1.9, 1.8, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 11.7, 17.4, 'DNP', 'DNP', 'BYE', 15.7, 'DNP', 'DNP', 'DNP', 17.2, 16.5, 15.6, 15.3, 14.0, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 6.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.44,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Kareem Hunt rushed seven times for 21 yards and caught his three targets for seven yards in the Browns' Week 15 win over the Giants.\n",
    "report": "",
    "analysis": "Game script didn't tilt Hunt's way, and the Giants didn't do enough offensively to force the Browns to pick up their offensive pace. Thus, Hunt only handled 10 touches while Nick Chubb saw 17. Hunt's box scores have been sporadic since Chubb returned from injury, but the running backs in Hunt's tier do not possess his weekly upside. Hunt can be fired up as a ceiling play against the Jets in Week 16. His touchdown odds are reasonable.\n",
    "timestamp": "2020-12-21 04:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 23.1,
    "week03": 13.4,
    "week04": 19.1,
    "week05": 16.8,
    "week06": 6.7,
    "week07": 17.7,
    "week08": 8.3,
    "week09": "BYE",
    "week10": 14.7,
    "week11": 8.6,
    "week12": 6.2,
    "week13": 7.2,
    "week14": 26.0,
    "week15": 4.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 23.1, 13.4, 19.1, 16.8, 6.7, 17.7, 8.3, 'BYE', 14.7, 8.6, 6.2, 7.2, 26.0, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 14.7, 16.5, 16.6, 16.0, 'BYE', 12.2, 8.5, 12.9, 7.8, 6.7, 8.0, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3, 6.4, 6.5, 6.7, 'BYE', 7.2, 10.4, 5.6, 7.3, 7.0, 7.3, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7, 24.1, 24.5, 23.7, 'BYE', 24.6, 23.3, 23.8, 24.0, 23.1, 24.0, 22.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 6.32,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.19,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "James White caught 4-of-4 targets for 52 yards in the Patriots' Week 15 loss to the Dolphins, adding two rushes for three yards.\u00a0\n",
    "report": "",
    "analysis": "Even with Damien Harris sidelined, White's usage did not increase for fantasy purposes. White lacks his Tom Brady mindmeld with Cam Newton. With Newton continuing to play poorly as a passer, White will offer bottom-barrel PPR FLEX viability for Week 16 vs. the Bills.\u00a0\n",
    "timestamp": "2020-12-21 01:00 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 6.7,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 9.4,
    "week05": "BYE",
    "week06": 11.3,
    "week07": 0.8,
    "week08": 4.5,
    "week09": 4.4,
    "week10": 1.8,
    "week11": 11.3,
    "week12": 14.2,
    "week13": 1.6,
    "week14": 2.3,
    "week15": 7.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 'DNP', 'DNP', 9.4, 'BYE', 11.3, 0.8, 4.5, 4.4, 1.8, 11.3, 14.2, 1.6, 2.3, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 'DNP', 'DNP', 3.3, 'BYE', 3.8, 4.8, 6.6, 3.1, 4.7, 5.6, 6.9, 6.8, 5.2, 4.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 'DNP', 'DNP', 3.8, 'BYE', 3.7, 4.8, 3.7, 2.7, 3.0, 2.7, 1.3, 4.2, 3.0, 2.9, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 'DNP', 'DNP', 15.6, 'BYE', 18.6, 17.2, 16.3, 17.0, 17.2, 16.1, 17.8, 17.3, 15.5, 13.7, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051439.png",
    "name": "Boston Scott",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.0,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 5.18,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 22.84,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Boston Scott didn't record a carry in Philadelphia's Week 15 loss to Arizona.\n",
    "report": "",
    "analysis": "The tides have officially shifted in favor of Miles Sanders, seeing Scott total one touch in Week 15 and only five touches to Sanders' 36 over the last two games. Scott can be moved to the back of rosters and only played if Sanders comes up limp down the home stretch.\n",
    "timestamp": "2020-12-21 03:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.4,
    "week02": 5.8,
    "week03": 0.5,
    "week04": 0.1,
    "week05": 0.3,
    "week06": 1.9,
    "week07": 16.7,
    "week08": 8.9,
    "week09": "BYE",
    "week10": 13.9,
    "week11": 6.5,
    "week12": 7.2,
    "week13": 0.9,
    "week14": 2.2,
    "week15": 1.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 5.8, 0.5, 0.1, 0.3, 1.9, 16.7, 8.9, 'BYE', 13.9, 6.5, 7.2, 0.9, 2.2, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 7.9, 8.5, 5.7, 4.0, 2.9, 10.3, 13.1, 'BYE', 5.4, 7.8, 10.5, 5.8, 3.8, 7.2, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [29.7, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 16.7, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [33.2, 19.4, 12.8, 16.9, 6.1, 7.0, 4.0, 28.1, 'BYE', 11.4, 7.8, 11.0, 17.6, 15.9, 7.4, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243315.png",
    "name": "Salvon Ahmed",
    "depthchart": "Backup: RB-2",
    "team": "Miami Dolphins",
    "projected": 5.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.76,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins activated Myles Gaskin off the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Gaskin practiced Wednesday before being removed from the COVID list. He'll play this week against the Raiders. Salvon Ahmed, who took 23 carries for 122 yards and a touchdown in Week 15 against the Patriots, would likely play behind Gaskin, losing most of his fantasy value. Gaskin was seeing a reliable workload before a knee injury and being placed on the COVID list. He should be a locked-in RB2 against a mediocre Vegas rush defense.\u00a0\n",
    "timestamp": "2020-12-23 09:58 PM",
    "source": "Aaron Wilson on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": 3.8,
    "week10": "DNP",
    "week11": 9.9,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 21.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 3.8, 'DNP', 9.9, 'DNP', 'DNP', 'DNP', 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 4.5, 'DNP', 12.1, 'DNP', 'DNP', 'DNP', 11.6, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 'DNP', 6.8, 'DNP', 'DNP', 'DNP', 8.9, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 10.7, 'DNP', 16.2, 'DNP', 'DNP', 'DNP', 13.6, 22.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 5.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 8,
    "avg_fp2": 8.38,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.39,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Jamaal Williams (quad) remained sidelined for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Williams is looking extremely unlikely to suit up against the Titans after departing last Saturday night's win over the Panthers early. Aaron Jones went off for one of his biggest games of the season in Williams' absence. Unimpressive rookie AJ Dillon will get some change-of-pace scraps behind Jones if Williams indeed sits.\u00a0\n",
    "timestamp": "2020-12-24 06:41 PM",
    "source": "Olivia Reiner on Twitter  ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 6.2,
    "week02": 8.3,
    "week03": 2.2,
    "week04": 14.5,
    "week05": "BYE",
    "week06": 3.4,
    "week07": 19.4,
    "week08": 15.2,
    "week09": "DNP",
    "week10": 7.0,
    "week11": 8.1,
    "week12": 13.3,
    "week13": 4.6,
    "week14": 3.8,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.2, 8.3, 2.2, 14.5, 'BYE', 3.4, 19.4, 15.2, 'DNP', 7.0, 8.1, 13.3, 4.6, 3.8, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 8.0, 5.9, 4.8, 'BYE', 6.5, 9.8, 10.4, 'DNP', 9.0, 9.2, 7.2, 7.8, 8.2, 5.6, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.1, 0.1, 4.5, 'BYE', 0.0, 1.5, 0.0, 'DNP', 2.1, 0.9, 0.4, 2.5, 5.3, 0.9, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 13.1, 12.4, 12.3, 'BYE', 14.6, 15.2, 15.4, 'DNP', 16.0, 14.0, 15.5, 11.9, 16.2, 15.1, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 5.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 13,
    "avg_fp2": 5.68,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.54,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Phillip Lindsay (hip) remained sidelined on Thursday.\u00a0\n",
    "report": "",
    "analysis": "\"It's going to go down to the wire,\" coach Vic Fangio said. Playing banged up for weeks, Lindsay has been putting up awful stat lines. It might be time for the Broncos to start thinking about 2021 and shutting Lindsay down. Lindsay's absence would give Melvin Gordon\u00a0much higher RB2 upside than usual.\u00a0\n",
    "timestamp": "2020-12-24 07:14 PM",
    "source": "Troy Renck on Twitter ",
    "game_day_logo": "",
    "week01": 4.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 10.1,
    "week07": 7.9,
    "week08": 15.1,
    "week09": 2.3,
    "week10": 0.2,
    "week11": 8.2,
    "week12": 2.0,
    "week13": 2.6,
    "week14": 4.1,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 'DNP', 'DNP', 'DNP', 'BYE', 10.1, 7.9, 15.1, 2.3, 0.2, 8.2, 2.0, 2.6, 4.1, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 'DNP', 'DNP', 'DNP', 'BYE', 9.0, 9.4, 8.3, 7.8, 9.6, 5.7, 6.6, 7.0, 5.5, 7.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.9, 'DNP', 'DNP', 'DNP', 'BYE', 2.9, 4.9, 9.3, 6.0, 4.7, 4.1, 4.5, 4.2, 2.7, 2.4, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 'DNP', 'DNP', 'DNP', 'BYE', 19.0, 17.9, 21.5, 19.4, 20.0, 17.9, 16.2, 19.0, 19.4, 13.9, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036431.png",
    "name": "Darrynton Evans",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 5.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 2,
    "avg_fp2": 4.93,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.39,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Darrynton Evans rushed eight times for 30 yards in the Titans' Week 15 win against the Titans, adding two receptions for 27 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "There was a lot of garbage time production to be had, and Evans took advantage. The rookie caught a late touchdown on a bobbled reception to cap off the Tennessee blowout win. On a day where D'Onta Foreman was a healthy scratch, it's clear Evans is the direct backup to Derrick Henry.\u00a0\n",
    "timestamp": "2020-12-21 01:32 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.9,
    "week04": "BYE",
    "week05": 1.2,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 12.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.9, 'BYE', 1.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.3, 'BYE', 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.1, 'BYE', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.1, 'BYE', 9.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2570986.png",
    "name": "Malcolm Brown",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 5.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 6.51,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 20.83,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Coach Sean McVay said Cam Akers will miss at least Week 16 against the Seahawks with a high-ankle sprain.\n",
    "report": "",
    "analysis": "McVay stressed \"at least\" Week 16, so it's probably a good bet Akers is done for the regular season. Akers had to hobble off in the first half of the stunning Week 15 loss to the Jets but somehow was able to return. The adrenaline has worn off now, however, and Akers won't be available for the fantasy finals. The Rams will likely install Darrell Henderson as their 1A back against Seattle with Malcolm Brown very involved as the 1B. Henderson needs to be added where he was dropped.\n",
    "timestamp": "2020-12-22 01:36 AM",
    "source": "Lindsey Thiry on Twitter",
    "game_day_logo": "",
    "week01": 24.5,
    "week02": 4.7,
    "week03": 1.9,
    "week04": 8.1,
    "week05": 2.9,
    "week06": 3.7,
    "week07": 11.7,
    "week08": 6.7,
    "week09": "BYE",
    "week10": 18.1,
    "week11": 3.3,
    "week12": 0.9,
    "week13": 3.2,
    "week14": 0.0,
    "week15": 1.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.5, 4.7, 1.9, 8.1, 2.9, 3.7, 11.7, 6.7, 'BYE', 18.1, 3.3, 0.9, 3.2, 0.0, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.0, 10.4, 6.1, 12.1, 2.9, 6.0, 5.3, 'BYE', 5.2, 3.5, 4.5, 6.4, 3.1, 2.2, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 12.1, 15.7, 0.0, 0.0, 0.0, 0.5, 0.8, 'BYE', 0.5, 1.2, 0.0, 0.0, 1.3, 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 19.5, 22.5, 9.3, 6.9, 11.5, 7.9, 7.0, 'BYE', 6.1, 8.4, 8.7, 8.8, 9.4, 6.5, 7.5]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 19.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 11,
    "avg_fp2": 12.11,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 30.49,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Amari Cooper caught 2-of-3 targets for 10 yards in the Cowboys' Week 15 win over the 49ers.\n",
    "report": "",
    "analysis": "Cooper also \"added\" two carries for -7 yards. The Dallas offense couldn't get much going and Cooper felt the full effects of their slow day. Including the negative yardage from his rush attempts, it was his worst day of the year by total yards. If the Cowboys can get in a rhythm versus the Eagles next week, Cooper should return to WR2 numbers in the final week of the fantasy season.\n",
    "timestamp": "2020-12-20 10:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.1,
    "week02": 13.0,
    "week03": 13.1,
    "week04": 27.4,
    "week05": 3.1,
    "week06": 17.4,
    "week07": 12.0,
    "week08": 1.0,
    "week09": 10.0,
    "week10": "BYE",
    "week11": 11.1,
    "week12": 20.2,
    "week13": 13.8,
    "week14": 13.1,
    "week15": 1.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.1, 13.0, 13.1, 27.4, 3.1, 17.4, 12.0, 1.0, 10.0, 'BYE', 11.1, 20.2, 13.8, 13.1, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 17.1, 17.0, 12.5, 15.8, 12.5, 9.6, 13.6, 13.6, 'BYE', 15.7, 12.8, 8.8, 11.6, 13.4, 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 2.3, 2.4, 2.8, 2.5, 4.3, 1.7, 3.2, 2.0, 'BYE', 3.1, 3.4, 2.5, 2.7, 1.9, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 19.5, 21.4, 20.9, 21.8, 25.4, 22.4, 22.0, 20.0, 'BYE', 19.0, 21.3, 20.6, 19.8, 20.6, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Chargers",
    "projected": 18.9,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 13.94,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Keenan Allen (hamstring) did not practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "That makes two missed practices in a row for Allen, who was limited in Week 15 against the Raiders. He'll have ten days between games before Sunday's matchup with Denver, but he remains iffy. Allen will need to practice Thursday and Friday to have a decent shot to play this week. Even then, the team could limit his snaps, creating another headache for fantasy managers. Tyron Johnson and Hunter Henry would benefit from Allen being out or limited.\u00a0\n",
    "timestamp": "2020-12-24 05:44 AM",
    "source": "Daniel Popper on Twitter",
    "game_day_logo": "",
    "week01": 5.7,
    "week02": 13.1,
    "week03": 23.7,
    "week04": 10.2,
    "week05": 9.9,
    "week06": "BYE",
    "week07": 17.5,
    "week08": 17.2,
    "week09": 20.8,
    "week10": 11.4,
    "week11": 26.5,
    "week12": 14.0,
    "week13": 7.3,
    "week14": 15.7,
    "week15": 2.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 13.1, 23.7, 10.2, 9.9, 'BYE', 17.5, 17.2, 20.8, 11.4, 26.5, 14.0, 7.3, 15.7, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 13.1, 11.6, 10.6, 16.0, 'BYE', 18.4, 16.6, 4.8, 10.8, 9.0, 9.2, 11.2, 10.0, 9.3, 18.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 8.5, 8.5, 5.4, 5.3, 'BYE', 5.7, 4.4, 6.7, 6.9, 5.7, 6.3, 6.3, 5.0, 6.1, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 24.9, 23.4, 20.8, 21.2, 'BYE', 21.1, 20.3, 21.3, 23.4, 20.4, 21.4, 21.7, 20.2, 21.0, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 18.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 1,
    "avg_fp2": 19.78,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.21,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill (hamstring) did not practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "It could be precautionary after Hill was seen getting hamstring treatment on and off during last week's win against the Saints. Hill wasn't limited against New Orleans, gaining 53 yards and scoring a touchdown on ten targets. \u201cI think he\u2019s going to be OK,\u201d said Chiefs head coach Andy Reid. A healthy Hill is in position to roast the soft Atlanta secondary. If Hill is inactive, Sammy Watkins and Mecole Hardman could see a big bump in snaps and targets.\u00a0\n",
    "timestamp": "2020-12-23 07:58 PM",
    "source": "Sam McDowell on Twitter ",
    "game_day_logo": "",
    "week01": 13.1,
    "week02": 19.3,
    "week03": 18.7,
    "week04": 14.4,
    "week05": 16.8,
    "week06": 4.0,
    "week07": 14.5,
    "week08": 23.8,
    "week09": 28.6,
    "week10": "BYE",
    "week11": 21.5,
    "week12": 51.4,
    "week13": 11.8,
    "week14": 24.6,
    "week15": 14.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.1, 19.3, 18.7, 14.4, 16.8, 4.0, 14.5, 23.8, 28.6, 'BYE', 21.5, 51.4, 11.8, 24.6, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 12.7, 13.6, 20.1, 13.0, 13.3, 10.4, 13.8, 12.2, 'BYE', 14.4, 20.8, 16.6, 16.5, 17.0, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.0, 5.3, 8.4, 4.3, 5.1, 6.6, 6.7, 4.5, 'BYE', 4.4, 6.0, 5.9, 6.6, 6.1, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 20.8, 24.3, 24.8, 23.3, 21.3, 23.5, 23.3, 21.3, 'BYE', 21.5, 23.9, 24.2, 24.1, 26.2, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 17.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 20.8,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.08,
    "fanduelSalary": "$9200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Davante Adams caught 7-of-10 targets for 42\u00a0yards in the Packers' Week 15\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "This is a stunningly low yardage total on\u00a010 targets for a player of Adams' caliber, but two drops and the Packers leading 21-3 at halftime certainly played a factor. For comparison, Adams produced 115 yards on 10 targets in Week 14. The Panthers' leaky secondary did a fantastic job against the Packers' passing game and quickly made tackles to prevent yards after catch opportunities. Plus, Aaron Rodgers completed just two passes that traveled more than 10 yards in the air on Saturday night. The timing is not great, but continue to trust Adams as a WR1 for the final two weeks of the season.\n",
    "timestamp": "2020-12-20 04:51 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 34.6,
    "week02": 5.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.1,
    "week07": 38.1,
    "week08": 26.8,
    "week09": 28.3,
    "week10": 14.6,
    "week11": 20.1,
    "week12": 15.1,
    "week13": 29.1,
    "week14": 21.0,
    "week15": 7.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.6, 5.1, 'DNP', 'DNP', 'BYE', 9.1, 38.1, 26.8, 28.3, 14.6, 20.1, 15.1, 29.1, 21.0, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 22.6, 'DNP', 'DNP', 'BYE', 13.4, 18.8, 16.8, 15.2, 20.9, 15.8, 15.2, 16.3, 25.5, 21.0, 17.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 10.5, 'DNP', 'DNP', 'BYE', 6.7, 6.1, 18.4, 6.8, 10.9, 12.1, 6.9, 10.9, 15.5, 7.2, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 24.9, 'DNP', 'DNP', 'BYE', 20.0, 20.5, 31.4, 17.9, 25.8, 25.0, 21.5, 22.9, 27.9, 23.5, 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 14.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 14.99,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.46,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "A.J. Brown caught 5-of-6 targets for 44 yards and one touchdown in the Titans' Week 15 win over the Lions.\n",
    "report": "",
    "analysis": "He and Corey Davis tied for the team lead with six targets, but Davis (4-110-1) had the bigger day with a 75-yard touchdown. Brown caught a late score with a two-yarder in the fourth quarter to save his fantasy day. Brown now has 10 touchdowns on the year and has scored in all but three games this season. He'll be an upside WR1 for Week 16 at the Packers.\n",
    "timestamp": "2020-12-20 10:25 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 6.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 17.7,
    "week06": 20.1,
    "week07": 24.3,
    "week08": 10.4,
    "week09": 18.1,
    "week10": 2.6,
    "week11": 14.2,
    "week12": 23.8,
    "week13": 8.7,
    "week14": 20.7,
    "week15": 12.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 'DNP', 'BYE', 17.7, 20.1, 24.3, 10.4, 18.1, 2.6, 14.2, 23.8, 8.7, 20.7, 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 'DNP', 'DNP', 'BYE', 13.1, 15.0, 17.7, 18.5, 12.4, 13.7, 14.8, 13.5, 13.4, 19.9, 14.7, 14.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'BYE', 2.1, 2.2, 6.7, 4.9, 4.0, 2.6, 2.7, 1.9, 7.5, 4.8, 4.5, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 'DNP', 'DNP', 'BYE', 15.2, 21.0, 22.1, 22.0, 22.3, 21.9, 21.8, 20.3, 23.3, 20.9, 21.4, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 14.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 18,
    "avg_fp2": 14.35,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.99,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Justin Jefferson caught 8-of-11 passes for 104 yards in the Vikings' Week 15 loss to the Bears.\n",
    "report": "",
    "analysis": "Jefferson has leaped Adam Thielen as the go-to receiver. He was peppered with a team-high 31% target share and did a lot of damage with it. His body control at the catch point and creativeness after the catch have him climbing up the receiving yardage leaderboard. If not for Justin Herbert, Jefferson would be this year's Offensive Rookie of the Year. He's been that good. Expect Jefferson to keep up his upside WR2 play next week against the Saints.\n",
    "timestamp": "2020-12-20 09:10 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 3.6,
    "week02": 5.9,
    "week03": 27.0,
    "week04": 12.3,
    "week05": 3.8,
    "week06": 35.1,
    "week07": "BYE",
    "week08": 4.1,
    "week09": 7.9,
    "week10": 17.5,
    "week11": 16.1,
    "week12": 22.5,
    "week13": 22.8,
    "week14": 7.9,
    "week15": 14.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 5.9, 27.0, 12.3, 3.8, 35.1, 'BYE', 4.1, 7.9, 17.5, 16.1, 22.5, 22.8, 7.9, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 3.4, 7.7, 4.5, 8.0, 8.8, 'BYE', 9.3, 13.9, 4.8, 14.7, 15.8, 8.2, 12.3, 12.5, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 0.2, 3.1, 5.1, 3.5, 'BYE', 6.4, 1.8, 1.9, 2.8, 1.5, 1.9, 1.8, 5.7, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 13.5, 11.3, 13.4, 11.2, 13.3, 'BYE', 34.6, 26.4, 19.3, 27.3, 25.5, 22.9, 23.5, 26.1, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 14.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 13.72,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Brandon Aiyuk caught 9-of-13 targets for 73 yards and a touchdown in the 49ers' Week 15 loss to the Cowboys.\n",
    "report": "",
    "analysis": "Without George Kittle or Deebo Samuel in this game, Aiyuk earned a 30 percent target share in Week 15. He was clearly the top pass-catching option for the 49ers and should continue to hold onto that role to close out the season. Even if Kittle returns, Aiyuk will command enough targets to be a fringe WR1. The 49ers are all but eliminated from playoff contention so it's possible that Kittle doesn't even take the field in the final two weeks.\n",
    "timestamp": "2020-12-21 06:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 3.1,
    "week03": 18.6,
    "week04": 12.6,
    "week05": 5.9,
    "week06": 8.2,
    "week07": 14.5,
    "week08": 19.1,
    "week09": "DNP",
    "week10": 16.2,
    "week11": "BYE",
    "week12": "DNP",
    "week13": 18.0,
    "week14": 16.9,
    "week15": 17.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.1, 18.6, 12.6, 5.9, 8.2, 14.5, 19.1, 'DNP', 16.2, 'BYE', 'DNP', 18.0, 16.9, 17.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.2, 3.6, 8.6, 8.2, 11.1, 11.4, 12.8, 'DNP', 15.2, 'BYE', 'DNP', 15.2, 13.6, 12.4, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 0.0, 2.0, 3.6, 9.1, 1.2, 3.3, 'DNP', 7.2, 'BYE', 'DNP', 7.4, 10.1, 12.1, 11.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.4, 12.9, 15.6, 19.5, 11.8, 18.7, 17.1, 'DNP', 19.9, 'BYE', 'DNP', 17.6, 18.2, 19.3, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 13.9,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 13.71,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.37,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Allen Robinson caught 4-of-5 targets for 83 yards in the Bears' Week 15 win over the Vikings.\n",
    "report": "",
    "analysis": "It was a mostly quiet game for the Bears passing game. Mitchell Trubisky only attempted 21 passes while David Montgomery had a career-high 32 carries. That balance hurt Robinson's ceiling chances, but the weekly WR1 remained Trubisky's go-to option. Robinson will be one of the best fantasy receivers next week against Jacksonville. The Jaguars were missing their top four corners in Week 15.\n",
    "timestamp": "2020-12-20 09:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 4.8,
    "week03": 23.3,
    "week04": 19.6,
    "week05": 14.0,
    "week06": 7.8,
    "week07": 9.0,
    "week08": 17.7,
    "week09": 11.6,
    "week10": 7.3,
    "week11": "BYE",
    "week12": 23.4,
    "week13": 10.5,
    "week14": 22.8,
    "week15": 10.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 4.8, 23.3, 19.6, 14.0, 7.8, 9.0, 17.7, 11.6, 7.3, 'BYE', 23.4, 10.5, 22.8, 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 14.7, 11.3, 15.5, 12.8, 11.0, 10.7, 11.3, 15.4, 14.3, 'BYE', 10.3, 13.3, 14.4, 14.9, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.3, 5.9, 3.5, 5.1, 2.3, 5.0, 3.9, 4.7, 'BYE', 4.2, 6.0, 4.8, 5.7, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 19.0, 15.3, 20.3, 20.5, 18.5, 17.4, 18.7, 19.3, 19.1, 'BYE', 19.1, 20.8, 17.7, 21.0, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 13.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 10.89,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.98,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Kenny\u00a0Golladay (hip) didn't practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "Golladay hasn't practiced since before Thanksgiving after suffering the hip injury eight weeks ago. It looks like the team won't place him on injured reserve this week. Fantasy players certainly shouldn't expect Golladay to return on Saturday against the Bucs. Marvin Jones will continue to operate as the Lions' WR1.\u00a0\n",
    "timestamp": "2020-12-23 11:00 PM",
    "source": "Tim Twentyman on Twitter",
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 10.3,
    "week03": 6.6,
    "week04": 1.4,
    "week05": "BYE",
    "week06": 1.8,
    "week07": 10.5,
    "week08": 17.4,
    "week09": 11.8,
    "week10": 19.6,
    "week11": 7.1,
    "week12": 7.8,
    "week13": 21.6,
    "week14": 6.8,
    "week15": 22.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 10.3, 6.6, 1.4, 'BYE', 1.8, 10.5, 17.4, 11.8, 19.6, 7.1, 7.8, 21.6, 6.8, 22.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 9.9, 11.5, 8.9, 'BYE', 7.1, 14.2, 6.2, 20.9, 9.5, 13.9, 12.1, 9.8, 13.4, 10.5, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 4.0, 3.3, 2.5, 'BYE', 1.0, 1.9, 3.3, 2.4, 3.1, 2.8, 3.1, 3.5, 3.8, 2.3, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.8, 16.7, 18.0, 16.3, 'BYE', 15.2, 17.4, 15.9, 17.1, 17.6, 16.0, 17.9, 16.7, 17.8, 16.5, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 13.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 11,
    "avg_fp2": 10.84,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 30.49,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "CeeDee Lamb caught 5-of-7 targets for 85 yards in the Cowboys' Week 15 win over the 49ers.\n",
    "report": "",
    "analysis": "Lamb returned a late onside attempt by the 49ers for a touchdown to cap off his solid Week 15 performance. The Dallas offense struggled to get much going outside of Tony Pollard's big day but Lamb managed to make do with Andy Dalton's mediocre day. Dallas is throwing often enough that Lamb has been a viable WR3 option even after losing Dak Prescott. He gets the Eagles next week and should continue to produce at that level.\n",
    "timestamp": "2020-12-20 10:12 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 14.5,
    "week03": 9.1,
    "week04": 22.7,
    "week05": 16.4,
    "week06": 9.9,
    "week07": 0.1,
    "week08": 6.6,
    "week09": 13.1,
    "week10": "BYE",
    "week11": 14.6,
    "week12": 4.6,
    "week13": 7.6,
    "week14": 7.1,
    "week15": 17.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.5, 9.1, 22.7, 16.4, 9.9, 0.1, 6.6, 13.1, 'BYE', 14.6, 4.6, 7.6, 7.1, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 8.1, 11.1, 8.3, 9.3, 8.2, 5.5, 11.8, 7.0, 'BYE', 11.8, 9.5, 7.0, 7.8, 8.9, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.0, 0.0, 2.7, 0.0, 3.1, 9.6, 7.9, 3.7, 'BYE', 11.2, 4.3, 8.9, 6.3, 5.7, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 9.8, 14.5, 10.5, 15.9, 14.3, 20.2, 18.4, 13.7, 'BYE', 19.8, 17.9, 20.2, 12.0, 13.7, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 13.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 4,
    "avg_fp2": 13.4,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Julio Jones (hamstring) didn't practice Wednesday.\n",
    "report": "",
    "analysis": "Jones was limited to side work with the training staff. Interim coach\u00a0Raheem Morris said Jones\u00a0is \"a little bit closer\" than where he was last week. Jones has said he doesn't plan to be shut down for the final two games.\u00a0The Falcons will\u00a0use the entire week before making a decision on\u00a0Jones's status.\n",
    "timestamp": "2020-12-23 04:17 PM",
    "source": "atlantafalcons.com",
    "game_day_logo": "",
    "week01": 20.2,
    "week02": 3.4,
    "week03": "DNP",
    "week04": 5.2,
    "week05": "DNP",
    "week06": 29.7,
    "week07": 13.7,
    "week08": 17.2,
    "week09": 13.9,
    "week10": "BYE",
    "week11": 4.9,
    "week12": "DNP",
    "week13": 12.4,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 3.4, 'DNP', 5.2, 'DNP', 29.7, 13.7, 17.2, 13.9, 'BYE', 4.9, 'DNP', 12.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 15.7, 'DNP', 16.2, 'DNP', 9.3, 17.2, 17.7, 13.2, 'BYE', 16.1, 'DNP', 13.2, 'DNP', 'DNP', 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 8.3, 'DNP', 5.8, 'DNP', 6.7, 6.6, 6.8, 7.3, 'BYE', 7.6, 'DNP', 5.7, 'DNP', 'DNP', 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 25.9, 'DNP', 25.6, 'DNP', 24.4, 24.5, 24.8, 24.4, 'BYE', 22.5, 'DNP', 24.2, 'DNP', 'DNP', 22.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 13.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 15.43,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.74,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "DeAndre Hopkins caught 9-of-11 targets for 169 yards and one score in Arizona's Week 15 win over the Seahawks.\n",
    "report": "",
    "analysis": "Hopkins actually opened the game with a fumble from inside the 10-yard line, but made up for it later by hauling in the go-ahead 20-yard touchdown from Kyler Murray with 7:24 remaining in the fourth quarter. You would've thought Hopkins'\u00a0gloves were laced with superglue based on the catches he was hauling in, constantly being asked to come down with 50-50 balls in tight and, at times, double coverage only to win nearly every battle. The next closest on the team in targets was TE Dan Arnold with five. With 35 targets over his last three games, Hopkins is inevitably closing out the year the exact way he started it: as a matchup-proof top-five option.\n",
    "timestamp": "2020-12-21 01:22 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.1,
    "week02": 16.8,
    "week03": 18.7,
    "week04": 7.6,
    "week05": 22.1,
    "week06": 8.3,
    "week07": 19.3,
    "week08": "BYE",
    "week09": 4.5,
    "week10": 22.2,
    "week11": 7.6,
    "week12": 8.0,
    "week13": 15.2,
    "week14": 18.1,
    "week15": 25.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 16.8, 18.7, 7.6, 22.1, 8.3, 19.3, 'BYE', 4.5, 22.2, 7.6, 8.0, 15.2, 18.1, 25.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 17.1, 17.5, 16.6, 15.9, 14.3, 16.4, 'BYE', 14.4, 13.7, 10.7, 14.4, 11.5, 10.9, 15.6, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.9, 5.1, 7.7, 6.5, 6.6, 3.9, 'BYE', 6.4, 6.0, 7.3, 7.0, 6.3, 7.3, 11.4, 8.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.4, 21.6, 22.4, 21.3, 20.6, 21.9, 23.1, 'BYE', 21.6, 20.0, 21.5, 21.1, 20.2, 21.4, 24.2, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 12.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 3,
    "avg_fp2": 10.29,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 29.14,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Brandin Cooks caught 6-of-7 targets for 59 yards in the Texans' Week 15 loss to the Colts.\u00a0\n",
    "report": "",
    "analysis": "In the post-Will Fuller era, Cooks has bookended his Week 14 absence with a neck issue with nearly identical efforts vs. the Colts' zone defense. It could be too little, too late for fantasy managers who had to trust Cooks as a WR2 this week, but he has a better Week 16 matchup in the Bengals, even though he could see a decent dose of the feisty William Jackson III. Cooks will remain a top-24 option despite his recent low-ceiling efforts.\u00a0\n",
    "timestamp": "2020-12-20 10:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.0,
    "week02": 12.0,
    "week03": 3.8,
    "week04": 0.0,
    "week05": 26.1,
    "week06": 17.3,
    "week07": 9.5,
    "week08": "BYE",
    "week09": 15.8,
    "week10": 6.9,
    "week11": 10.5,
    "week12": 11.0,
    "week13": 9.0,
    "week14": "DNP",
    "week15": 8.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 12.0, 3.8, 0.0, 26.1, 17.3, 9.5, 'BYE', 15.8, 6.9, 10.5, 11.0, 9.0, 'DNP', 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 4.8, 5.9, 11.0, 9.5, 9.5, 12.0, 'BYE', 9.3, 7.0, 9.3, 7.5, 9.5, 'DNP', 9.5, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 5.1, 4.3, 5.0, 5.7, 2.7, 5.2, 'BYE', 3.0, 3.8, 4.6, 4.3, 4.2, 'DNP', 4.3, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 19.6, 17.9, 19.0, 19.1, 18.7, 18.8, 'BYE', 16.3, 18.3, 20.2, 17.4, 18.4, 'DNP', 18.2, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241802.png",
    "name": "Jalen Reagor",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 12.5,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 7.24,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 34.93,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Reagor (ankle) is practicing Wednesday.\n",
    "report": "",
    "analysis": "Reagor had a season-high five catches before going down with an ankle injury in Sunday's loss. Practicing this early in the week puts him on track for a favorable matchup with the Cowboys' secondary in Week 16.\u00a0\n",
    "timestamp": "2020-12-23 03:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 6.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 11.7,
    "week09": "BYE",
    "week10": 6.7,
    "week11": 7.2,
    "week12": 2.6,
    "week13": 11.0,
    "week14": 7.5,
    "week15": 6.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 6.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 'BYE', 6.7, 7.2, 2.6, 11.0, 7.5, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 2.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.5, 'BYE', 5.3, 6.5, 7.7, 6.7, 12.6, 10.1, 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.9, 3.8, 7.3, 6.0, 4.5, 5.7, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 7.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.2, 'BYE', 12.8, 11.5, 9.7, 7.0, 9.9, 9.2, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 12.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 15.52,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.87,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "DK Metcalf caught 5-of-6 targets for 43 yards in Seattle's Week 15 win over Washington.\n",
    "report": "",
    "analysis": "Metcalf also exited for a brief period in the first half with a hamstring injury. He still finished with a team-high 43 receiving yards, recording three of his five receptions on a single drive in the third quarter. His box score would have been better had Russell Wilson not sailed him on an end zone target in the first half, too. Although this performance wasn't one that fantasy players had in mind, Metcalf will still rank as a top-10 option in Week 16 against the Rams.\n",
    "timestamp": "2020-12-21 06:43 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 17.2,
    "week03": 17.0,
    "week04": 12.6,
    "week05": 24.3,
    "week06": "BYE",
    "week07": 3.3,
    "week08": 34.1,
    "week09": 20.3,
    "week10": 3.8,
    "week11": 12.1,
    "week12": 22.7,
    "week13": 10.5,
    "week14": 15.1,
    "week15": 6.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 17.2, 17.0, 12.6, 24.3, 'BYE', 3.3, 34.1, 20.3, 3.8, 12.1, 22.7, 10.5, 15.1, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 13.8, 12.5, 8.9, 12.2, 'BYE', 16.0, 11.5, 12.1, 12.9, 15.6, 15.9, 16.6, 18.1, 10.4, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 4.9, 1.7, 4.7, 'BYE', 8.2, 5.0, 7.9, 5.2, 5.1, 5.3, 4.8, 3.8, 5.1, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.8, 15.8, 17.5, 16.8, 'BYE', 19.2, 17.8, 18.7, 23.5, 18.1, 22.2, 20.8, 17.0, 20.8, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 11.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 15.5,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 25.37,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills coach Sean McDermott said Stefon Diggs (foot) will take part in Wednesday's practice.\n",
    "report": "",
    "analysis": "It's a good sign for Diggs, who left late in Saturday's win. The\u00a0Bills play on Monday night, so we won't know Diggs' official participation until Buffalo releases their injury report on Thursday. The early signs are\u00a0Diggs avoided a serious injury.\n",
    "timestamp": "2020-12-23 03:29 PM",
    "source": "WGR 550 Buffalo",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 12.6,
    "week02": 25.3,
    "week03": 12.9,
    "week04": 14.5,
    "week05": 15.6,
    "week06": 13.6,
    "week07": 7.8,
    "week08": 12.2,
    "week09": 16.3,
    "week10": 20.3,
    "week11": "BYE",
    "week12": 7.4,
    "week13": 14.2,
    "week14": 24.1,
    "week15": 20.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 25.3, 12.9, 14.5, 15.6, 13.6, 7.8, 12.2, 16.3, 20.3, 'BYE', 7.4, 14.2, 24.1, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 14.5, 11.4, 12.2, 11.2, 18.1, 14.1, 'BYE', 14.9, 9.7, 13.9, 12.9, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 3.9, 3.6, 5.6, 5.6, 4.6, 4.6, 'BYE', 4.6, 5.0, 5.0, 7.7, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 19.6, 20.2, 19.2, 17.9, 18.6, 19.0, 'BYE', 19.9, 18.9, 19.2, 20.8, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.9,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 12.31,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.36,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans caught 6-of-7 targets for 110 yards in the Bucs' Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "The seven targets tied Antonio Brown and Rob Gronkowski for the team lead. Evans posted a goose egg in the first quarter, and the Bucs were shut out in the first half. But Evans was the main source of yards for the offense in this one and was tackled at the one-yard line on a long catch to set up a Leonard Fournette touchdown. Evans was again later tackled inside the 10 to set up a second Fournette rushing score. It was Evans' first 100-yard game since Week 4. Evans has 11 scores on the year but hasn't found the end zone in back-to-back games ahead of a Week 16 date with the Lions where Evans will be an upside WR1/2.\n",
    "timestamp": "2020-12-20 10:19 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 19.9,
    "week03": 13.2,
    "week04": 21.7,
    "week05": 12.6,
    "week06": 1.5,
    "week07": 4.7,
    "week08": 14.0,
    "week09": 8.4,
    "week10": 16.7,
    "week11": 13.4,
    "week12": 18.5,
    "week13": "BYE",
    "week14": 7.1,
    "week15": 14.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7, 12.6, 1.5, 4.7, 14.0, 8.4, 16.7, 13.4, 18.5, 'BYE', 7.1, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.4, 13.0, 13.6, 15.2, 17.5, 8.7, 9.3, 14.6, 'BYE', 15.4, 9.8, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 6.6, 5.6, 4.2, 5.9, 5.3, 4.5, 5.5, 5.1, 'BYE', 5.9, 5.6, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 22.3, 22.3, 21.9, 21.9, 22.1, 21.5, 22.2, 21.1, 'BYE', 21.7, 21.3, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 11.47,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.35,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Diontae Johnson caught 8-of-13 targets for 58 yards and one touchdown in the Steelers' Week 15 loss to the Bengals.\n",
    "report": "",
    "analysis": "It was Johnson's ninth double-digit targets game of the season, and the 13 looks easily paced the team on 38 Ben Roethlisberger throws. He also caught Big Ben's lone touchdown, a 23-yarder in the third quarter, beating the corner in the back right corner of the end zone to get the Steelers on the board after a 17-0 hole. Johnson briefly left with what looked like a foot injury but quickly returned. Johnson will be a WR2 based on volume for Week 16 against the Colts.\n",
    "timestamp": "2020-12-22 04:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 19.2,
    "week03": 0.9,
    "week04": "BYE",
    "week05": 0.3,
    "week06": "DNP",
    "week07": 24.5,
    "week08": 1.1,
    "week09": 11.1,
    "week10": 20.6,
    "week11": 17.1,
    "week12": 8.6,
    "week13": 17.1,
    "week14": 6.0,
    "week15": 15.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.2, 0.9, 'BYE', 0.3, 'DNP', 24.5, 1.1, 11.1, 20.6, 17.1, 8.6, 17.1, 6.0, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 10.5, 12.0, 'BYE', 10.8, 'DNP', 10.3, 10.8, 14.2, 9.0, 23.1, 11.6, 15.1, 14.0, 9.5, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.6, 6.7, 'BYE', 1.3, 'DNP', 0.6, 0.3, 1.0, 1.4, 1.8, 1.5, 2.4, 1.2, 2.2, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 12.4, 19.5, 'BYE', 13.3, 'DNP', 11.8, 15.5, 16.1, 16.0, 18.0, 16.8, 17.3, 13.9, 16.6, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 11.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 31,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.41,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Marquise Brown caught 6-of-7 targets for 98 yards in the Ravens' Week 15 win against the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Brown, who played despite missing practice all week on the reserve/COVID-19 list,\u00a0had a 44-yard grab down the sideline as the Ravens ran away with the game. Leading the team in targets, it appears Brown has re-established himself as Baltimore's nominal No. 1 wideout, though that might not offer much in a slow-paced, run-heavy offense. Brown should be regarded as a high-end WR3 next week against the Giants.\u00a0\n",
    "timestamp": "2020-12-20 10:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 6.7,
    "week03": 2.3,
    "week04": 10.6,
    "week05": 16.8,
    "week06": 7.7,
    "week07": "BYE",
    "week08": 6.8,
    "week09": 5.3,
    "week10": 2.4,
    "week11": 0.0,
    "week12": 16.5,
    "week13": 12.4,
    "week14": 12.0,
    "week15": 12.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 6.7, 2.3, 10.6, 16.8, 7.7, 'BYE', 6.8, 5.3, 2.4, 0.0, 16.5, 12.4, 12.0, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 15.7, 11.8, 7.1, 7.0, 11.1, 'BYE', 8.7, 10.7, 10.8, 12.9, 6.8, 7.0, 15.5, 8.6, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.6, 10.0, 1.8, 4.0, 8.9, 'BYE', 0.2, 4.0, 1.1, 2.8, 1.0, 4.1, 3.4, 7.2, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 18.3, 20.8, 18.2, 14.7, 20.2, 'BYE', 15.2, 17.9, 15.5, 16.9, 12.9, 18.1, 14.5, 16.9, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 11.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 8.96,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.91,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "T.Y. Hilton caught 4-of-6 targets for 71 yards in the Colts' Week 15 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "Hilton reached 70 yards for the fourth consecutive game, though it did not look like he was going to get there until he got free over the middle of the field for a 41-yard gain with 2:29 remaining. It was the longest play of the day for Indy. For whatever reason, Hilton drew to a targets standstill with Zach Pascal, something that is extremely unlikely to repeat in Week 16 against the Steelers. Springing leaks of late, Pittsburgh's tough defense is not enough to drop Hilton out of the WR3 ranks for the fantasy finals. He will likely be in the WR24-30 range.\u00a0\n",
    "timestamp": "2020-12-20 10:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": 4.3,
    "week03": 6.7,
    "week04": 4.4,
    "week05": 9.9,
    "week06": 1.6,
    "week07": "BYE",
    "week08": 1.9,
    "week09": "DNP",
    "week10": 6.0,
    "week11": 5.1,
    "week12": 16.1,
    "week13": 21.0,
    "week14": 23.1,
    "week15": 9.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.3, 6.7, 4.4, 9.9, 1.6, 'BYE', 1.9, 'DNP', 6.0, 5.1, 16.1, 21.0, 23.1, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 23.8, 9.5, 11.1, 16.1, 12.9, 'BYE', 10.6, 'DNP', 15.8, 13.2, 8.4, 9.2, 12.7, 18.3, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 5.1, 5.1, 5.1, 4.0, 2.9, 'BYE', 2.9, 'DNP', 2.3, 3.0, 3.6, 0.9, 4.8, 3.9, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 22.3, 19.2, 21.7, 19.7, 19.1, 'BYE', 20.4, 'DNP', 20.1, 20.4, 19.9, 23.2, 22.4, 21.0, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 10.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 11,
    "avg_fp2": 7.84,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 30.49,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Michael Gallup suffered a hip pointer in the Cowboys' Week 15 win against the 49ers.\n",
    "report": "",
    "analysis": "Gallup accrued five targets and a touchdown from Andy Dalton before exiting in the second half of Sunday's win. Noah Brown was Gallup's direct replacement off the bench but could only corral one of his six targets for 13 yards. Gallup's participation in practice throughout the week should be telling for his availability for Dallas' Week 16 divisional showdown against Philly.\n",
    "timestamp": "2020-12-21 07:48 PM",
    "source": "Michael Gehlken on Twitter",
    "game_day_logo": "",
    "week01": 6.5,
    "week02": 6.8,
    "week03": 22.8,
    "week04": 3.9,
    "week05": 9.3,
    "week06": 3.3,
    "week07": 0.0,
    "week08": 9.6,
    "week09": 5.1,
    "week10": "BYE",
    "week11": 3.9,
    "week12": 7.1,
    "week13": 18.1,
    "week14": 3.3,
    "week15": 10.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 6.8, 22.8, 3.9, 9.3, 3.3, 0.0, 9.6, 5.1, 'BYE', 3.9, 7.1, 18.1, 3.3, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 8.7, 10.1, 6.3, 6.6, 6.1, 3.5, 6.5, 6.4, 'BYE', 7.7, 6.4, 4.9, 7.9, 5.5, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 4.5, 1.6, 2.6, 5.6, 3.4, 5.4, 0.8, 2.3, 'BYE', 2.3, 1.3, 3.3, 1.3, 2.0, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.8, 12.9, 15.9, 11.8, 19.1, 16.5, 16.5, 15.1, 12.5, 'BYE', 16.5, 15.1, 12.8, 14.6, 16.2, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 10.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 13,
    "avg_fp2": 13.39,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.83,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Robert Woods caught 6-of-8 targets for 56 yards and a touchdown in the Rams' Week 15 loss to the Jets, adding a 40-yard rush.\u00a0\n",
    "report": "",
    "analysis": "Woods was one of the few Rams who came to play, digging out a low throw on Jets CB Bless Austin to tally a 15-yard score in the third quarter before adding a 40-yard carry on the next series. Woods has caught at least five passes in seven consecutive games, including 5/33 in Week 10\u00a0against Week 16 opponent Seattle. Woods will maintain high-end RB2 appeal for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.9,
    "week02": 10.3,
    "week03": 18.9,
    "week04": 6.7,
    "week05": 15.1,
    "week06": 12.0,
    "week07": 4.0,
    "week08": 24.9,
    "week09": "BYE",
    "week10": 6.1,
    "week11": 24.6,
    "week12": 12.3,
    "week13": 13.5,
    "week14": 5.6,
    "week15": 18.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 10.3, 18.9, 6.7, 15.1, 12.0, 4.0, 24.9, 'BYE', 6.1, 24.6, 12.3, 13.5, 5.6, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.6, 11.7, 10.7, 8.2, 'BYE', 13.3, 9.9, 12.1, 12.5, 7.6, 14.4, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 6.4, 3.4, 3.7, 3.5, 'BYE', 5.1, 3.1, 4.2, 3.4, 3.0, 3.6, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 18.4, 16.9, 15.6, 15.6, 'BYE', 18.3, 16.4, 16.3, 16.9, 16.4, 17.1, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Reserve: WR-3",
    "team": "Cleveland Browns",
    "projected": 10.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 23,
    "avg_fp2": 9.86,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.57,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jarvis Landry caught 7-of-8 targets for 61 yards and one touchdown in the Browns' Week 15 win over the Giants.\n",
    "report": "",
    "analysis": "Landry's stat lines have done a 180-degree turn since the midpoint of the season. No Odell Beckham has earned Landry more weekly target, and Landry was able to get healthier with the bye week after struggling with hip and rib injuries in September and October. Over the last month, Landry has been a weekly WR2 with upside in the right matchups. That will be the case in Week 16 against the Jets.\u00a0\n",
    "timestamp": "2020-12-21 04:22 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 6.1,
    "week03": 5.6,
    "week04": 12.78,
    "week05": 10.8,
    "week06": 5.5,
    "week07": 8.46,
    "week08": 7.2,
    "week09": "BYE",
    "week10": 4.4,
    "week11": 3.6,
    "week12": 24.3,
    "week13": 16.44,
    "week14": 8.68,
    "week15": 15.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 6.1, 5.6, 12.78, 10.8, 5.5, 8.46, 7.2, 'BYE', 4.4, 3.6, 24.3, 16.44, 8.68, 15.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 12.2, 8.1, 9.7, 10.7, 'BYE', 2.8, 5.9, 3.7, 10.1, 5.2, 5.6, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 4.9, 6.4, 4.9, 5.3, 'BYE', 5.9, 2.7, 4.7, 7.2, 5.6, 5.0, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 17.7, 18.1, 16.9, 16.5, 'BYE', 16.2, 18.5, 16.1, 18.1, 17.1, 16.4, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 10.8,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 24,
    "avg_fp2": 9.21,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 32.14,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "DeVante Parker (hamstring) practiced on a limited basis on Wednesday.\n",
    "report": "",
    "analysis": "Parker missed Week 15 with the same injury and did get in limited sessions before that contest. With the Dolphins in the thick of the playoff hunt and facing a Raiders defense that scares no one, getting back Parker and Mike Gesicki would be a massive boost for the explosiveness of the offense.\n",
    "timestamp": "2020-12-24 02:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 13.8,
    "week03": 9.4,
    "week04": 16.0,
    "week05": 12.0,
    "week06": 5.0,
    "week07": "BYE",
    "week08": 6.8,
    "week09": 9.4,
    "week10": 4.1,
    "week11": 15.1,
    "week12": 15.9,
    "week13": 5.5,
    "week14": 0.0,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 13.8, 9.4, 16.0, 12.0, 5.0, 'BYE', 6.8, 9.4, 4.1, 15.1, 15.9, 5.5, 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.6, 11.6, 17.9, 9.6, 10.2, 'BYE', 9.7, 9.9, 8.1, 9.0, 8.6, 12.6, 10.9, 'DNP', 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 3.6, 3.4, 1.8, 6.6, 4.4, 'BYE', 7.2, 1.2, 3.1, 3.0, 2.9, 2.8, 3.0, 'DNP', 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 16.2, 17.0, 14.9, 18.1, 16.1, 'BYE', 17.0, 15.8, 15.3, 14.6, 14.6, 15.1, 15.9, 'DNP', 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 10.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 9.53,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.08,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Abdomen",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Allen Lazard caught 5-of-6\u00a0targets for 56 yards in the Packers' Week 15\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "This was the team's worst passing output of the season, despite opening the game with three straight touchdown drives. Lazard was far more involved than Marquez Valdes-Scantling, who failed to register a catch on his lone target. It would be difficult to trust Lazard in your lineups in Week 16 against the Titans.\n",
    "timestamp": "2020-12-20 02:45 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 16.2,
    "week02": 6.0,
    "week03": 23.4,
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 2.8,
    "week12": 10.3,
    "week13": 6.5,
    "week14": 2.9,
    "week15": 8.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 6.0, 23.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.3, 6.5, 2.9, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.0, 12.0, 8.6, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.6, 7.2, 10.6, 15.9, 12.7, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 6.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 2.7, 0.9, 2.7, 1.6, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 11.7, 12.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 13.3, 13.0, 12.7, 11.2, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 10.0,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 2.97,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 34.93,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Alshon Jeffery caught 2-of-3 targets for 63 yards in Philadelphia's Week 15 loss to Arizona.\n",
    "report": "",
    "analysis": "He was actually targeted far more than the box score shows but ended up drawing around 50-yards worth of penalties downfield. Even in finishing with season-highs in catches and receiving yards, Jeffery isn't on the radar for re-draft leagues in 2020. He's a better one/two-game DFS option until he inevitably lands elsewhere next year.\n",
    "timestamp": "2020-12-21 03:08 AM",
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
    "week10": 0.0,
    "week11": 0.0,
    "week12": 2.5,
    "week13": 0.0,
    "week14": 8.0,
    "week15": 7.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 2.5, 0.0, 8.0, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.6, 1.7, 2.7, 2.5, 2.8, 6.9, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.4, 5.0, 5.2, 1.8, 3.2, 2.8, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 17.9, 20.1, 20.0, 12.5, 15.7, 17.5, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 10.0,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 16,
    "avg_fp2": 11.27,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.31,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Robby Anderson caught 2-of-5\u00a0targets for 21 yards in the Panthers' Week 15\u00a0loss to the Packers.\n",
    "report": "",
    "analysis": "Anderson had zero impact on this game and did not see his first target until the second half. A re-watch might show Jaire Alexander trailing Anderson, but D.J. Moore simply was relied on more to create downfield, and Joe Brady attempted to incorporate Curtis Samuel near the line of scrimmage. Still, the 21 yards were enough to get Anderson over 1,000 receiving yards on the season for the first time in his career. Anderson and Moore are the last Panthers' duo to both reach the 1,000-yard mark in the same season since Muhsin Muhammad and Patrick Jeffers in 1999.\n",
    "timestamp": "2020-12-20 06:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.5,
    "week02": 13.4,
    "week03": 8.0,
    "week04": 13.9,
    "week05": 15.5,
    "week06": 9.7,
    "week07": 10.4,
    "week08": 7.3,
    "week09": 10.8,
    "week10": 4.1,
    "week11": 8.1,
    "week12": 17.4,
    "week13": "BYE",
    "week14": 13.7,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.5, 13.4, 8.0, 13.9, 15.5, 9.7, 10.4, 7.3, 10.8, 4.1, 8.1, 17.4, 'BYE', 13.7, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 7.9, 8.1, 6.3, 6.3, 12.8, 6.4, 14.0, 8.3, 11.4, 13.2, 6.1, 'BYE', 8.2, 9.1, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 2.8, 1.6, 2.6, 2.5, 2.5, 3.7, 3.2, 1.1, 3.2, 2.3, 2.1, 'BYE', 3.5, 1.7, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 16.3, 15.3, 22.2, 17.4, 15.6, 17.1, 15.7, 14.9, 15.5, 15.0, 14.3, 'BYE', 15.9, 13.9, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 10.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 4,
    "avg_fp2": 16.55,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Calvin Ridley caught 10-of-14 targets for 163 yards and one touchdown in the Falcons' Week 15 loss to the Bucs.\n",
    "report": "",
    "analysis": "With Julio Jones (hamstring) out and Bucs CB Carlton Davis limited to one half of play by a groin injury, Ridley exploded for his best game of the season. Both the catches and yards were new 2020 bests. The week-winning performance featured Ridley's third score in four games. Now cooking with gas with at least 5/108 over each of his past three appearances, Ridley will close his fantasy campaign with an intriguing Week 16 spot with the Chiefs. The over/under will surely be tempting, but the Chiefs entered Week 15 permitting the fewest wide receiver receptions.\u00a0\n",
    "timestamp": "2020-12-21 06:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.4,
    "week02": 26.4,
    "week03": 14.2,
    "week04": 0.0,
    "week05": 17.6,
    "week06": 15.9,
    "week07": 17.4,
    "week08": 5.7,
    "week09": "DNP",
    "week10": "BYE",
    "week11": 11.5,
    "week12": 14.0,
    "week13": 13.3,
    "week14": 22.4,
    "week15": 27.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.4, 26.4, 14.2, 0.0, 17.6, 15.9, 17.4, 5.7, 'DNP', 'BYE', 11.5, 14.0, 13.3, 22.4, 27.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 12.9, 11.5, 13.7, 15.0, 8.3, 15.0, 15.4, 'DNP', 'BYE', 12.2, 14.2, 10.9, 15.4, 18.7, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 5.0, 4.1, 6.6, 3.4, 3.1, 4.6, 5.6, 'DNP', 'BYE', 4.9, 4.8, 7.0, 2.8, 5.6, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.0, 24.1, 24.4, 20.6, 21.3, 21.7, 20.7, 'DNP', 'BYE', 20.5, 21.1, 20.6, 14.5, 20.4, 22.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 9.8,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Mike Williams caught 2-of-2 targets for 22 yards in the Chargers' Week 15 win over the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Williams also drew a DPI in the end zone to set the Chargers up at the one-yard line in the third quarter. Battling through a back injury, Williams played only 28-of-66 snaps, per Pro Football Focus. He now has 10 days to get healthier for Week 16 against the Broncos. Williams will be a zero-floor WR4 for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-18 05:43 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.9,
    "week02": 2.4,
    "week03": 2.2,
    "week04": "DNP",
    "week05": 25.4,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 18.5,
    "week09": 10.6,
    "week10": 4.8,
    "week11": 15.2,
    "week12": 4.1,
    "week13": 6.3,
    "week14": 0.0,
    "week15": 3.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.9, 2.4, 2.2, 'DNP', 25.4, 'BYE', 0.9, 18.5, 10.6, 4.8, 15.2, 4.1, 6.3, 0.0, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 6.9, 5.6, 'DNP', 6.3, 'BYE', 9.8, 6.7, 7.2, 12.4, 11.9, 12.6, 10.5, 13.3, 9.2, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.7, 0.6, 'DNP', 0.0, 'BYE', 3.7, 2.0, 1.9, 4.1, 1.5, 4.3, 4.7, 4.6, 5.0, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 11.1, 'DNP', 10.5, 'BYE', 13.8, 14.8, 15.3, 15.0, 12.4, 13.1, 14.2, 13.8, 15.5, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 9.4,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 14,
    "avg_fp2": 9.39,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.72,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Nelson Agholor caught 4-of-8 targets for 49 yards in the Raiders' Week 15 loss to the Chargers.\u00a0\n",
    "report": "",
    "analysis": "Tonight had a little bit of everything for Agholor, including a quarterback change from Derek Carr to Marcus Mariota after the second series. Agholor caught a 30-yard pass from Carr and drew a DPI in the end zone on a Mariota target in the third quarter. He also dislocated a finger that had to be popped back in and endured a Mariota hospital ball that resulted in a painful ribs shot. Agholor is going to need all nine days between now and the Raiders' Week 16 game against the Dolphins to heal up. He will be more of a WR4 than WR3 for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-18 05:33 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.8,
    "week02": 2.4,
    "week03": 4.2,
    "week04": 12.4,
    "week05": 13.7,
    "week06": "BYE",
    "week07": 19.2,
    "week08": 0.0,
    "week09": 12.5,
    "week10": 1.3,
    "week11": 17.8,
    "week12": 7.9,
    "week13": 5.8,
    "week14": 18.5,
    "week15": 6.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.8, 2.4, 4.2, 12.4, 13.7, 'BYE', 19.2, 0.0, 12.5, 1.3, 17.8, 7.9, 5.8, 18.5, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.1, 2.3, 4.3, 6.6, 'BYE', 5.4, 4.2, 6.4, 6.2, 4.9, 10.3, 9.5, 4.9, 10.1, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 2.6, 1.5, 1.0, 0.0, 'BYE', 1.5, 1.1, 2.3, 1.0, 2.5, 1.1, 4.0, 0.8, 1.2, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.7, 14.3, 13.5, 11.2, 13.8, 'BYE', 13.5, 13.2, 11.3, 12.7, 14.6, 13.6, 12.9, 13.5, 13.1, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 9.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 11.26,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.35,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Chase Claypool caught 3-of-8 targets for 54 yards in the Steelers' Week 15 loss to the Bengals.\n",
    "report": "",
    "analysis": "His big catch went for 37 yards down the left sideline to set up a Diontae Johnson 23-yard touchdown. Claypool's eight targets were second on the team. but Big Ben missed the rookie on a would-be touchdown in the back of the end zone. Claypool hasn't caught a touchdown since Week 11 after scoring eight times the first 11 weeks. He'll be a WR3/4 for Week 16 against the Colts.\n",
    "timestamp": "2020-12-22 04:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.7,
    "week02": 16.3,
    "week03": 2.9,
    "week04": "BYE",
    "week05": 39.1,
    "week06": 16.1,
    "week07": 0.0,
    "week08": 10.7,
    "week09": 11.3,
    "week10": 19.3,
    "week11": 13.9,
    "week12": 8.2,
    "week13": 4.8,
    "week14": 3.0,
    "week15": 6.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 16.3, 2.9, 'BYE', 39.1, 16.1, 0.0, 10.7, 11.3, 19.3, 13.9, 8.2, 4.8, 3.0, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.1, 4.2, 4.9, 'BYE', 4.3, 10.8, 13.0, 10.2, 9.3, 5.6, 15.0, 10.1, 10.2, 13.0, 8.7, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 'BYE', 0.8, 3.2, 6.2, 0.0, 2.6, 0.0, 8.9, 2.5, 9.3, 3.1, 1.3, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 8.3, 7.1, 'BYE', 6.1, 14.1, 16.6, 13.4, 30.9, 27.1, 17.6, 16.6, 19.7, 24.2, 24.3, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 9.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 10.71,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.35,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "JuJu Smith-Schuster caught 3-of-6 targets for 15 yards in the Steelers' Week 15 loss to the Bengals.\n",
    "report": "",
    "analysis": "JuJu was blown up for a six-yard loss and lost fumble in the first half, which was one of the Steelers' three first-half turnovers that put them in a 17-0 hole. Other than that, Smith-Schuster didn't impact the box score. He'll try to rebound as a WR3 for Week 16 against the Colts.\n",
    "timestamp": "2020-12-22 04:57 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.9,
    "week02": 8.3,
    "week03": 14.3,
    "week04": "BYE",
    "week05": 4.8,
    "week06": 1.6,
    "week07": 13.0,
    "week08": 10.2,
    "week09": 18.3,
    "week10": 18.2,
    "week11": 3.9,
    "week12": 13.7,
    "week13": 6.3,
    "week14": 14.5,
    "week15": 1.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.9, 8.3, 14.3, 'BYE', 4.8, 1.6, 13.0, 10.2, 18.3, 18.2, 3.9, 13.7, 6.3, 14.5, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 17.5, 16.4, 'BYE', 15.1, 7.2, 9.6, 9.0, 10.5, 5.6, 11.5, 7.9, 9.6, 10.0, 6.8, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.5, 14.0, 'BYE', 4.9, 2.5, 2.1, 5.4, 4.3, 3.6, 5.7, 3.0, 4.6, 4.7, 4.8, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.9, 20.7, 25.8, 'BYE', 19.7, 20.3, 19.2, 20.7, 18.8, 20.3, 20.2, 18.5, 19.9, 19.8, 18.7, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 9.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 18,
    "avg_fp2": 14.58,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.99,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Adam Thielen caught 2-of-3 targets for 11 yards and one touchdown in the Vikings' Week 15 loss to the Bears.\n",
    "report": "",
    "analysis": "It's a concerning stat line for Thielen. His three targets were nowhere near Justin Jefferson's 11. It seems like Jefferson has surfaced as Cousins' go-to receiver, at least between the 20s. Thielen did catch his NFL-leading 12th red zone touchdown on Sunday to bail out his total dud. Things won't get easier next week with the Saints on the schedule. Thielen is a boom-bust WR2.\u00a0\n",
    "timestamp": "2020-12-20 09:29 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 28.0,
    "week02": 4.6,
    "week03": 10.8,
    "week04": 22.2,
    "week05": 24.8,
    "week06": 12.6,
    "week07": "BYE",
    "week08": 4.2,
    "week09": 4.8,
    "week10": 18.3,
    "week11": 28.3,
    "week12": "DNP",
    "week13": 17.5,
    "week14": 5.4,
    "week15": 8.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.0, 4.6, 10.8, 22.2, 24.8, 12.6, 'BYE', 4.2, 4.8, 18.3, 28.3, 'DNP', 17.5, 5.4, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 14.8, 16.5, 15.2, 13.7, 13.4, 'BYE', 13.5, 16.6, 7.0, 15.6, 'DNP', 9.3, 18.5, 12.9, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 11.6, 3.0, 1.3, 7.0, 0.9, 'BYE', 1.0, 2.3, 1.6, 2.0, 'DNP', 2.8, 0.1, 2.5, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.9, 24.0, 18.6, 18.0, 18.8, 18.5, 'BYE', 17.5, 18.1, 17.0, 16.2, 'DNP', 18.6, 21.2, 18.1, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 9.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 30,
    "avg_fp2": 7.6,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 27.16,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jakobi Meyers caught 7-of-10 targets for 110 yards in the Patriots' Week 15 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "The yards were Meyers' second most of the season, though the effort was marred by a lost fumble. Meyers' first career cough up came at the end of a 20-yard reception in the third quarter. Don't count on a repeat in Week 16 against the Bills, where Meyers will remain a moderate-floor, low-ceiling WR4 for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 12:06 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.0,
    "week02": 1.2,
    "week03": 0.0,
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 10.8,
    "week09": 22.9,
    "week10": 13.36,
    "week11": 5.3,
    "week12": 7.7,
    "week13": 2.5,
    "week14": 6.7,
    "week15": 12.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.2, 0.0, 'DNP', 'BYE', 'DNP', 'DNP', 10.8, 22.9, 13.36, 5.3, 7.7, 2.5, 6.7, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 1.8, 1.2, 'DNP', 'BYE', 'DNP', 'DNP', 4.4, 7.8, 3.7, 7.2, 8.7, 9.6, 8.5, 10.5, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.4, 0.8, 'DNP', 'BYE', 'DNP', 'DNP', 0.9, 0.0, 0.0, 1.6, 1.5, 1.6, 1.6, 1.3, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 7.8, 5.9, 'DNP', 'BYE', 'DNP', 'DNP', 7.6, 7.2, 13.3, 12.3, 13.4, 10.3, 12.1, 11.3, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 8.9,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 25,
    "avg_fp2": 11.91,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 29.01,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin (ankle) remained sidelined on Thursday.\u00a0\n",
    "report": "",
    "analysis": "McLaurin's ankle has limited his reps some of late, but he was not on the Week 15 injury report. Back-to-back DNPs are certainly a concern. Even a \"limited\" Friday session would put McLaurin back on track to play against the Panthers, but fantasy managers in the finals need to have a contingency plan for their WR2.\u00a0\n",
    "timestamp": "2020-12-24 06:24 PM",
    "source": "Nicki Jhabvala on Twitter ",
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 22.0,
    "week03": 10.6,
    "week04": 16.8,
    "week05": 4.1,
    "week06": 10.9,
    "week07": 18.5,
    "week08": "BYE",
    "week09": 21.0,
    "week10": 13.7,
    "week11": 10.9,
    "week12": 12.7,
    "week13": 2.4,
    "week14": 3.4,
    "week15": 11.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 22.0, 10.6, 16.8, 4.1, 10.9, 18.5, 'BYE', 21.0, 13.7, 10.9, 12.7, 2.4, 3.4, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 9.4, 10.1, 8.9, 10.7, 9.7, 17.1, 'BYE', 11.1, 12.2, 14.0, 15.3, 13.5, 10.6, 13.7, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 5.7, 11.3, 4.7, 3.5, 4.8, 5.4, 'BYE', 8.2, 4.8, 5.9, 5.1, 6.0, 4.2, 4.3, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 19.7, 23.9, 17.9, 17.7, 17.9, 18.7, 'BYE', 18.1, 17.2, 20.0, 16.8, 19.1, 16.1, 16.2, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 8.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 21,
    "avg_fp2": 6.15,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.66,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Tre'Quan Smith (ankle) remained sidelined for Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "It is another bad sign for Smith's status on Christmas Day against the Vikings. The Saints surely will be limited on the pass-catcher front, but there is a chance that WR Marquez Callaway returns in time to help out.\n",
    "timestamp": "2020-12-24 12:34 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 0.9,
    "week02": 11.1,
    "week03": 6.2,
    "week04": 19.4,
    "week05": 1.8,
    "week06": "BYE",
    "week07": 7.4,
    "week08": 6.8,
    "week09": 7.9,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 2.1,
    "week13": 12.0,
    "week14": 7.5,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.9, 11.1, 6.2, 19.4, 1.8, 'BYE', 7.4, 6.8, 7.9, 0.0, 0.0, 2.1, 12.0, 7.5, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 6.1, 2.8, 7.2, 10.4, 'BYE', 7.5, 8.1, 4.4, 7.8, 10.9, 5.5, 4.0, 2.2, 10.7, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.1, 7.3, 0.0, 0.0, 0.2, 0.0, 1.0, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 11.2, 12.2, 13.9, 9.0, 'BYE', 9.7, 14.3, 16.3, 12.4, 14.9, 9.9, 13.4, 9.9, 12.2, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 8.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 8.56,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.74,
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
    "headlineNews": "Christian Kirk caught 3-of-4 targets for 33 yards in Arizona's Week 15 win over the Eagles.\n",
    "report": "",
    "analysis": "Kirk was peppered near the line of scrimmage, totaling four targets or less for the third consecutive game. With Dan Arnold emerging as Kyler Murray's de facto No. 2 target of late, Kirk, who hasn't eclipsed 50 receiving yards in five consecutive starts, has been pushed down the pecking order and become unusable for fantasy in that span. Managers\u00a0should continue avoiding him in the Championship Game against the 49ers.\n",
    "timestamp": "2020-12-21 03:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.5,
    "week02": 7.0,
    "week03": "DNP",
    "week04": 9.4,
    "week05": 10.3,
    "week06": 21.6,
    "week07": 18.2,
    "week08": "BYE",
    "week09": 20.8,
    "week10": 4.7,
    "week11": 7.0,
    "week12": 3.4,
    "week13": 0.7,
    "week14": 2.9,
    "week15": 4.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.5, 7.0, 'DNP', 9.4, 10.3, 21.6, 18.2, 'BYE', 20.8, 4.7, 7.0, 3.4, 0.7, 2.9, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 5.3, 'DNP', 8.9, 8.6, 7.5, 10.1, 'BYE', 9.1, 6.9, 6.9, 9.7, 8.4, 6.6, 10.9, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 3.1, 'DNP', 0.0, 11.6, 4.5, 16.0, 'BYE', 1.7, 5.6, 9.0, 0.0, 4.7, 0.0, 2.3, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.1, 'DNP', 18.9, 23.0, 13.1, 37.7, 'BYE', 16.6, 19.1, 19.1, 17.1, 13.9, 12.7, 11.4, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 8.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 13.04,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.87,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Tyler Lockett caught 4-of-7 targets for 34 yards in Seattle's Week 15 win against Washington.\n",
    "report": "",
    "analysis": "Lockett finished with a team-high in targets (7-6), which can likely be attributed to D.K. Metcalf's absence for a brief period\u00a0with a hamstring injury in the first half.\u00a0More importantly, Lockett quietly reached 85 catches on the year, which qualifies as a new career-high mark. Seattle ran the ball 26 times (compared to 27 pass attempts), which sunk Lockett's and Metcalf's ceilings from kick-off, but the former is still the team's clear-cut No. 2 wideout. Even so, Lockett has now totaled less than 70 receiving yards in seven consecutive games and continues to plummet down rankings as a low-end WR2 ahead of\u00a0Week 16 against the Rams.\n",
    "timestamp": "2020-12-20 10:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.2,
    "week02": 16.2,
    "week03": 32.5,
    "week04": 4.9,
    "week05": 6.4,
    "week06": "BYE",
    "week07": 45.5,
    "week08": 5.3,
    "week09": 6.0,
    "week10": 9.1,
    "week11": 17.2,
    "week12": 3.8,
    "week13": 9.3,
    "week14": 7.7,
    "week15": 5.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 16.2, 32.5, 4.9, 6.4, 'BYE', 45.5, 5.3, 6.0, 9.1, 17.2, 3.8, 9.3, 7.7, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 7.5, 11.9, 11.0, 13.0, 'BYE', 8.5, 7.5, 9.2, 7.4, 10.6, 11.1, 9.8, 11.4, 7.2, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.5, 2.0, 4.7, 4.6, 'BYE', 1.2, 3.1, 2.0, 6.4, 6.0, 6.6, 2.7, 2.4, 2.4, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 15.7, 14.3, 18.6, 19.7, 'BYE', 14.7, 21.2, 15.1, 23.3, 23.0, 22.9, 16.1, 15.5, 17.6, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 7.9,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 7.15,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Kendrick Bourne caught 4-of-4 targets for 86 yards in the 49ers' Week 15 loss to the Cowboys.\n",
    "report": "",
    "analysis": "Bourne's touchdown came on a last-second 49 yards hail mary that didn't impact the actual outcome of the game. He was held under 40 yards up until that point and only saw four targets. Unless Bourne is going to be scoring on these types of plays regularly, he can be kept on the waiver wire in most fantasy leagues.\n",
    "timestamp": "2020-12-20 09:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 8.7,
    "week03": 8.3,
    "week04": 4.8,
    "week05": 10.0,
    "week06": 5.4,
    "week07": 0.0,
    "week08": 12.1,
    "week09": "DNP",
    "week10": 4.6,
    "week11": "BYE",
    "week12": 4.9,
    "week13": 5.5,
    "week14": 7.7,
    "week15": 16.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 8.7, 8.3, 4.8, 10.0, 5.4, 0.0, 12.1, 'DNP', 4.6, 'BYE', 4.9, 5.5, 7.7, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 14.9, 8.0, 12.3, 7.5, 6.0, 10.0, 8.3, 'DNP', 7.0, 'BYE', 7.4, 8.3, 5.3, 7.6, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.5, 1.0, 0.9, 1.2, 0.0, 1.3, 'DNP', 1.7, 'BYE', 0.1, 1.2, 0.5, 1.5, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.3, 8.9, 9.5, 8.9, 9.0, 9.7, 9.2, 'DNP', 9.3, 'BYE', 8.9, 9.0, 8.6, 10.6, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 7.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 13,
    "avg_fp2": 10.86,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.83,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp caught 4-of-4 targets for 33 yards in the Rams' Week 15 loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "It was another disappointing day for Kupp in a shocking loss. He has now failed to surpass 41 yards in 3-of-4 games, and has found the end zone only one time since Week 4. Robert Woods is the lone pass catcher displaying consistent WR2 value in the Rams' increasingly run-focused offense. For the fantasy finals, Kupp will be rematching with a Seahawks defense that held him to 5/50 on seven looks in Week 10.\u00a0\n",
    "timestamp": "2020-12-21 01:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 10.5,
    "week03": 21.2,
    "week04": 15.2,
    "week05": 9.1,
    "week06": 2.6,
    "week07": 8.9,
    "week08": 16.5,
    "week09": "BYE",
    "week10": 7.5,
    "week11": 20.0,
    "week12": 5.1,
    "week13": 11.3,
    "week14": 11.8,
    "week15": 6.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 10.5, 21.2, 15.2, 9.1, 2.6, 8.9, 16.5, 'BYE', 7.5, 20.0, 5.1, 11.3, 11.8, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 9.3, 7.2, 7.0, 8.3, 11.7, 9.3, 7.7, 'BYE', 10.0, 6.0, 10.8, 10.1, 5.4, 10.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 3.2, 5.0, 5.7, 6.6, 6.4, 3.5, 5.9, 'BYE', 6.4, 4.5, 5.0, 5.2, 6.1, 5.5, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 20.9, 19.3, 20.1, 21.4, 20.2, 20.5, 19.0, 'BYE', 21.4, 19.2, 20.2, 21.7, 17.7, 19.9, 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040035.png",
    "name": "Greg Ward",
    "depthchart": "Reserve: WR-3",
    "team": "Philadelphia Eagles",
    "projected": 7.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 7.23,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 34.93,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Greg Ward caught 3-of-4 targets for 57 yards and a touchdown in the Eagles' Week 13 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Ward's touchdown reception came from Jalen Hurts with 7:52 remaining. Facing a 4th-and-18, Hurts rolled out to the right and displayed perfect touch as he found Ward in the end zone for a 32-yard strike. Ward was also the intended target on Hurts' tipped interception that functionally ended the game. Despite today's revival, Ward will not be in the WR5 conversation for Week 14 against the Saints, regardless of whom is under center for the Eagles.\u00a0\n",
    "timestamp": "2020-12-07 01:39 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.6,
    "week02": 1.0,
    "week03": 16.6,
    "week04": 5.8,
    "week05": 10.6,
    "week06": 4.9,
    "week07": 12.7,
    "week08": 2.7,
    "week09": "BYE",
    "week10": 6.4,
    "week11": 2.4,
    "week12": 0.8,
    "week13": 13.2,
    "week14": 3.0,
    "week15": 15.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.0, 16.6, 5.8, 10.6, 4.9, 12.7, 2.7, 'BYE', 6.4, 2.4, 0.8, 13.2, 3.0, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 4.9, 1.7, 3.8, 3.7, 3.8, 8.8, 6.4, 'BYE', 5.3, 3.6, 7.0, 4.6, 6.8, 5.8, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 3.4, 9.7, 2.2, 0.7, 4.0, 3.4, 4.1, 'BYE', 1.4, 3.6, 0.0, 3.4, 3.7, 2.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 12.5, 15.1, 7.1, 10.0, 13.6, 8.6, 12.9, 'BYE', 10.6, 12.9, 10.1, 12.0, 13.6, 10.9, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 7.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 7.36,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.0,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Breshad Perriman caught a 21-yard pass in the Jets' Week 15 win over the Rams.\u00a0\n",
    "report": "",
    "analysis": "Perriman's third quarter grab was his lone target. You would think a stunning Jets upset would require a big Perriman play or two, but that was not the case in Los Angeles. Perriman continues to display zero chemistry with Sam Darnold. Week 16 opponent Cleveland surrenders chunk\u00a0gains in the passing game, but Perriman has no WR4 juice.\u00a0\n",
    "timestamp": "2020-12-21 01:15 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 2.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 8.2,
    "week07": 3.7,
    "week08": "DNP",
    "week09": 24.6,
    "week10": "BYE",
    "week11": 12.4,
    "week12": 9.9,
    "week13": 2.7,
    "week14": 4.1,
    "week15": 2.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 2.2, 'DNP', 'DNP', 'DNP', 8.2, 3.7, 'DNP', 24.6, 'BYE', 12.4, 9.9, 2.7, 4.1, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 8.0, 'DNP', 'DNP', 'DNP', 8.8, 5.6, 'DNP', 3.7, 'BYE', 9.3, 6.1, 8.1, 3.8, 5.5, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 2.3, 'DNP', 'DNP', 'DNP', 0.0, 2.3, 'DNP', 2.2, 'BYE', 0.0, 0.7, 0.8, 0.0, 0.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 11.2, 'DNP', 'DNP', 'DNP', 7.7, 10.9, 'DNP', 13.1, 'BYE', 11.6, 11.6, 11.7, 7.6, 13.0, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 7.5,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 26,
    "avg_fp2": 10.16,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 32.75,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins caught 3-of-6 targets for 31 yards in the Bengals' Week 15 win over the Steelers.\n",
    "report": "",
    "analysis": "Higgins did all of his damage in the first half. With the Bengals controlling this one start to finish and Ryan Finley throwing just 13 passes, there wasn't much room for Higgins to produce. He should be considered a WR3/4 for Week 16 at Houston.\n",
    "timestamp": "2020-12-22 04:55 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": "DNP",
    "week03": 18.5,
    "week04": 11.0,
    "week05": 8.2,
    "week06": 15.7,
    "week07": 16.3,
    "week08": 11.4,
    "week09": "BYE",
    "week10": 19.0,
    "week11": 4.1,
    "week12": 12.9,
    "week13": 8.1,
    "week14": 7.4,
    "week15": 4.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 18.5, 11.0, 8.2, 15.7, 16.3, 11.4, 'BYE', 19.0, 4.1, 12.9, 8.1, 7.4, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 'DNP', 4.2, 7.9, 8.6, 12.0, 13.7, 12.3, 'BYE', 8.0, 14.3, 11.4, 13.2, 11.7, 15.9, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 0.0, 3.4, 5.7, 9.4, 9.4, 2.9, 'BYE', 10.6, 8.3, 2.5, 4.6, 4.2, 6.9, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 'DNP', 9.5, 11.8, 12.2, 11.9, 20.1, 16.2, 'BYE', 13.8, 19.7, 14.0, 17.0, 16.4, 16.3, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 7.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 21,
    "avg_fp2": 8.83,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.66,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Emmanuel\u00a0Sanders caught 4-of-5 targets for 76 yards in the Saints' Week 15 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Michael Thomas on injured reserve leaves Sanders as the default WR1 in New Orleans. Against KC, Sanders saved his fantasy day with a 51-yard reception down the sideline in the first half -- one of Drew Brees' only deep throws of the day. He didn't do much beyond the grab, though Brees' targets were very much spread out in his return to the starting lineup. Sanders will be a low-ceiling WR3 play in Week 16 against the Vikings.\u00a0\n",
    "timestamp": "2020-12-21 02:11 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 9.0,
    "week02": 2.3,
    "week03": 13.6,
    "week04": 12.3,
    "week05": 18.2,
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 11.8,
    "week10": 1.0,
    "week11": 8.6,
    "week12": 0.9,
    "week13": 6.4,
    "week14": 12.3,
    "week15": 9.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 2.3, 13.6, 12.3, 18.2, 'BYE', 'DNP', 'DNP', 11.8, 1.0, 8.6, 0.9, 6.4, 12.3, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1, 'BYE', 'DNP', 'DNP', 5.1, 7.0, 11.6, 5.8, 7.3, 3.2, 11.3, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 2.9, 'BYE', 'DNP', 'DNP', 1.1, 4.4, 1.6, 2.0, 1.3, 1.5, 1.5, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 13.3, 'BYE', 'DNP', 'DNP', 14.5, 14.3, 12.7, 14.6, 15.7, 14.8, 17.4, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 7.4,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 16,
    "avg_fp2": 12.28,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.31,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "D.J. Moore caught 6-of-8\u00a0targets for 131\u00a0yards in Week 15\u00a0against the Packers.\n",
    "report": "",
    "analysis": "Moore was the leading receiver in this game despite two players seeing more targets. His highlight was an early 40-yard lofted pass along the left sideline, where Teddy Bridgewater asked Moore to win in the air against two defensive backs and the receiver accepted the challenge. This was actually Moore's first game since Week 12, as he missed Week 14 while being on the COVID-19 list following the team's bye week. Still, Moore now has four straight games of at least 61 yards and eclipsed the 1,000-yard mark on the season.\n",
    "timestamp": "2020-12-20 05:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 16.0,
    "week03": 7.5,
    "week04": 6.9,
    "week05": 17.3,
    "week06": 11.8,
    "week07": 23.3,
    "week08": 6.5,
    "week09": 2.8,
    "week10": 17.6,
    "week11": 18.3,
    "week12": 8.1,
    "week13": "BYE",
    "week14": "DNP",
    "week15": 16.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 16.0, 7.5, 6.9, 17.3, 11.8, 23.3, 6.5, 2.8, 17.6, 18.3, 8.1, 'BYE', 'DNP', 16.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 8.1, 12.2, 10.1, 11.3, 14.5, 8.6, 16.2, 11.5, 11.5, 9.5, 10.0, 'BYE', 'DNP', 7.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 4.2, 3.0, 3.2, 3.8, 3.4, 3.8, 4.9, 5.8, 3.6, 6.5, 'BYE', 'DNP', 4.5, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.6, 16.5, 15.7, 15.5, 16.1, 14.0, 14.6, 17.5, 17.4, 17.2, 14.9, 18.3, 'BYE', 'DNP', 16.3, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 8.63,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.36,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown caught 5-of-7 targets for 93 yards and one touchdown in the Bucs' Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "Brown's seven targets tied Mike Evans and Rob Gronkowski for the team lead. He was having a mostly quiet day before getting loose behind the defense for a 46-yard touchdown over the top with 6:19 to play that proved to be the game-winning score. It was Brown's first touchdown in six games with the Bucs. He continues to see heavy target usage and will be a WR3 next week in a dream spot against the Lions.\n",
    "timestamp": "2020-12-20 10:23 PM",
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
    "week09": 4.6,
    "week10": 10.1,
    "week11": 9.8,
    "week12": 2.1,
    "week13": "BYE",
    "week14": 7.4,
    "week15": 17.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 10.1, 9.8, 2.1, 'BYE', 7.4, 17.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.4, 5.6, 7.1, 10.7, 'BYE', 9.6, 5.5, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 0.0, 5.2, 3.2, 'BYE', 4.1, 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9, 13.6, 17.1, 16.7, 'BYE', 20.4, 14.6, 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 7.3,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 9.41,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 25.48,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "D.J. Chark caught 4-of-5 targets for 53 yards in the Jaguars' Week 15 loss to Baltimore.\u00a0\n",
    "report": "",
    "analysis": "No one outside of James Robinson has weekly fantasy value in the Jaguars offense, including Chark. He remains the only Jaguars wideout in the WR3 conversation. Chark should be a flex play in deep leagues next week against the Bears.\u00a0\n",
    "timestamp": "2020-12-20 10:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 10.4,
    "week03": "DNP",
    "week04": 25.5,
    "week05": 3.1,
    "week06": 8.0,
    "week07": 3.1,
    "week08": "BYE",
    "week09": 24.1,
    "week10": 7.6,
    "week11": 6.1,
    "week12": "DNP",
    "week13": 5.1,
    "week14": 2.6,
    "week15": 7.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 10.4, 'DNP', 25.5, 3.1, 8.0, 3.1, 'BYE', 24.1, 7.6, 6.1, 'DNP', 5.1, 2.6, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.1, 'DNP', 5.5, 10.3, 13.5, 8.9, 'BYE', 10.6, 16.0, 8.0, 'DNP', 10.8, 13.9, 8.0, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 0.0, 'DNP', 5.0, 0.7, 0.0, 0.0, 'BYE', 0.5, 1.7, 0.1, 'DNP', 0.2, 1.2, 1.2, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 15.1, 'DNP', 16.6, 17.6, 12.1, 19.2, 'BYE', 17.3, 15.1, 15.0, 'DNP', 16.0, 19.1, 15.8, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Las Vegas Raiders",
    "projected": 7.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 14,
    "avg_fp2": 6.7,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.72,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Hunter Renfrow caught 5-of-7 targets for 38 yards in the Raiders' Week 14 loss to the Colts.\n",
    "report": "",
    "analysis": "Renfrow continues to operate as Derek Carr's underneath outlet, but it's a role that lacks a fantasy ceiling. The slot man has two touchdowns and just one game over 75 yards. He'll be off the redraft radar against the Chargers in Week 15.\n",
    "timestamp": "2020-12-14 01:41 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 5.2,
    "week03": 17.4,
    "week04": 8.2,
    "week05": 4.7,
    "week06": "BYE",
    "week07": 6.2,
    "week08": 10.6,
    "week09": 7.0,
    "week10": 4.0,
    "week11": 4.7,
    "week12": 10.8,
    "week13": 6.7,
    "week14": 4.3,
    "week15": 0.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 5.2, 17.4, 8.2, 4.7, 'BYE', 6.2, 10.6, 7.0, 4.0, 4.7, 10.8, 6.7, 4.3, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 3.9, 8.1, 12.6, 8.2, 'BYE', 5.8, 6.4, 8.2, 5.0, 5.2, 7.9, 6.7, 6.2, 6.7, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 2.1, 1.3, 2.2, 1.5, 'BYE', 1.2, 2.1, 9.0, 2.3, 1.4, 2.7, 3.7, 2.8, 2.3, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 13.9, 12.9, 14.2, 14.0, 'BYE', 14.0, 15.5, 18.1, 14.0, 12.9, 11.6, 8.2, 13.3, 11.5, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 7.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 12.71,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.46,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Corey Davis caught 4-of-6 targets for 110 yards and one touchdown in the Titans' Week 15 win over the Lions.\n",
    "report": "",
    "analysis": "The six targets tied A.J. Brown for the team lead on a day Ryan Tannehill attempted 27 passes. Davis' big play was a 75-yard touchdown on the second drive where S Duron Harmon was tied in knots trying to tackle Davis after the catch. Davis could have had a second touchdown late in the second half, but Tannehill badly missed him wide open in the end zone on his only poor throw of the day. Davis is enjoying a career year in an elite Titans offense and will be a WR2/3 next week against the Packers.\n",
    "timestamp": "2020-12-20 10:12 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 13.6,
    "week02": 11.1,
    "week03": 9.4,
    "week04": "BYE",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.5,
    "week08": 22.8,
    "week09": 0.0,
    "week10": 9.2,
    "week11": 13.8,
    "week12": 8.5,
    "week13": 29.7,
    "week14": 2.9,
    "week15": 19.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 11.1, 9.4, 'BYE', 'DNP', 'DNP', 12.5, 22.8, 0.0, 9.2, 13.8, 8.5, 29.7, 2.9, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.4, 7.5, 'BYE', 'DNP', 'DNP', 7.9, 11.7, 7.8, 5.5, 7.3, 4.2, 6.9, 12.5, 8.4, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.6, 0.7, 'BYE', 'DNP', 'DNP', 0.0, 1.5, 2.8, 1.9, 1.9, 7.3, 0.8, 3.3, 1.4, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 12.7, 12.1, 'BYE', 'DNP', 'DNP', 13.4, 15.5, 15.1, 12.5, 14.4, 15.0, 14.1, 17.5, 15.5, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932430.png",
    "name": "Jalen Guyton",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 7.2,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 5.52,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Jalen Guyton caught 4-of-6 targets for 91 yards in the Chargers' Week 15 overtime win over the Raiders.\u00a0\n",
    "report": "",
    "analysis": "With Keenan Allen and Mike Williams both severely hobbled, Guyton lead the Chargers' wideouts in snaps and yards. Guyton also committed a drop and drew 48 yards worth of penalties. He was tormenting Raiders CB Trayvon Mullen. The speedster entered this evening with just 119 yards over his past seven games. His Week 16 playing time will depend on Allen and Williams' health. They have 10 days to get ready for a matchup with the Broncos. Guyton is worth an end-of-bench spot in Dynasty leagues. He is still only 23.\u00a0\n",
    "timestamp": "2020-12-18 05:40 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.1,
    "week02": 7.9,
    "week03": 3.3,
    "week04": 13.7,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 15.4,
    "week08": 0.8,
    "week09": 1.4,
    "week10": 4.4,
    "week11": 0.9,
    "week12": 4.8,
    "week13": 4.8,
    "week14": 1.3,
    "week15": 11.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 7.9, 3.3, 13.7, 5.0, 'BYE', 15.4, 0.8, 1.4, 4.4, 0.9, 4.8, 4.8, 1.3, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 2.2, 1.8, 1.7, 4.0, 'BYE', 7.2, 3.1, 6.2, 8.8, 8.9, 6.0, 6.4, 8.3, 8.9, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.8, 0.0, 0.0, 0.0, 'BYE', 3.5, 3.1, 3.4, 0.0, 0.0, 0.9, 2.0, 0.0, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.7, 4.2, 11.4, 7.8, 12.6, 'BYE', 11.5, 16.0, 13.9, 10.4, 12.0, 3.9, 9.3, 7.9, 7.7, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 7.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 1,
    "avg_fp2": 7.61,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.21,
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
    "headlineNews": "Sammy Watkins caught 4-of-6 targets for 60 yards in the Chiefs' Week 15 win against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Watkins was second on the team in receiving yardage thanks to a 23-yard grab in the second half against New Orleans. Watkins is the closest thing to a fantasy starter among KC pass catchers outside of Tyreek Hill and Travis Kelce. He has at least six targets in three of his past four games. He'll be a WR4/5 next week against the Falcons.\u00a0\n",
    "timestamp": "2020-12-21 03:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.0,
    "week02": 1.6,
    "week03": 9.7,
    "week04": 4.3,
    "week05": 9.4,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 5.8,
    "week13": 5.5,
    "week14": 6.2,
    "week15": 8.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 1.6, 9.7, 4.3, 9.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.8, 5.5, 6.2, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 7.8, 9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 9.6, 10.4, 6.1, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 4.1, 4.6, 3.8, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.4, 3.5, 2.6, 4.0, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 21.1, 20.1, 18.8, 19.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 17.9, 19.7, 17.5, 20.8, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035793.png",
    "name": "Quintez Cephus",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 7.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 3.95,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.98,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Quintez Cephus caught 2-of-3 targets for 63 yards and a touchdown in the Lions' Week 13 win against the Bears.\u00a0\n",
    "report": "",
    "analysis": "Cephus was among several Lions pass catchers who benefited from Matthew Stafford's 402-yard day against the Bears. The Lions reportedly want to get Cephus more playing time down the final stretch of a lost season, though he only ran 20 pass routes against Chicago. Fantasy managers in deep leagues might scoop up Cephus if they have several flex spots to fill.\u00a0\n",
    "timestamp": "2020-12-07 03:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.8,
    "week02": 6.9,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 4.1,
    "week10": 1.5,
    "week11": 1.4,
    "week12": 3.7,
    "week13": 13.3,
    "week14": 2.6,
    "week15": 4.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.8, 6.9, 0.0, 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 4.1, 1.5, 1.4, 3.7, 13.3, 2.6, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 4.4, 3.3, 0.9, 'BYE', 'DNP', 'DNP', 'DNP', 5.7, -0.1, 3.6, 5.0, 1.2, 5.8, 6.3, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 0.0, 0.5, 0.3, 0.1, 0.3, 1.7, 1.2, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 11.3, 10.0, 6.7, 'BYE', 'DNP', 'DNP', 'DNP', 8.4, 3.2, 4.7, 3.1, 3.6, 9.3, 5.5, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 6.9,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 31,
    "avg_fp2": 6.19,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.41,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Willie Snead caught 3-of-5 targets for 29 yards in the Ravens' Week 14 win over the Browns.\n",
    "report": "",
    "analysis": "Snead has 37 yards or fewer in 8-of-11 games this season. He's a very poor fantasy option despite being third on the totem pole for targets behind Marquise Brown and Mark Andrews in this run-heavy offense. The Jaguars, however, do present a juicy Week 15 matchup.\n",
    "timestamp": "2020-12-15 05:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.4,
    "week02": 3.9,
    "week03": 1.4,
    "week04": 3.0,
    "week05": 0.0,
    "week06": 3.7,
    "week07": "BYE",
    "week08": 13.1,
    "week09": 5.7,
    "week10": 20.9,
    "week11": 3.8,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 4.4,
    "week15": 0.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 3.9, 1.4, 3.0, 0.0, 3.7, 'BYE', 13.1, 5.7, 20.9, 3.8, 'DNP', 'DNP', 4.4, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.8, 5.7, 0.6, 4.4, 6.9, 'BYE', 2.9, 5.1, 4.3, 6.9, 'DNP', 'DNP', 10.0, 8.4, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 0.4, 0.0, 3.6, 0.9, 3.0, 'BYE', 0.6, 1.6, 0.7, 1.5, 'DNP', 'DNP', 1.8, 0.7, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.0, 9.2, 11.5, 12.0, 10.6, 'BYE', 9.8, 10.4, 9.6, 9.7, 'DNP', 'DNP', 11.5, 12.6, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915823.png",
    "name": "Keke Coutee",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 6.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 3,
    "avg_fp2": 8.43,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 29.14,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Keke Coutee was limited during Wednesday's practice with a foot injury.\n",
    "report": "",
    "analysis": "Coutee is an important piece of the Texans' offense right now, seeing seven targets in Week 15 and two touchdowns over the last two weeks. Hopefully the foot injury is minor, but check back in before Sunday to see his status for Week 16.\n",
    "timestamp": "2020-12-24 03:20 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 8.0,
    "week12": 4.7,
    "week13": 18.1,
    "week14": 7.9,
    "week15": 11.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.0, 4.7, 18.1, 7.9, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.9, 4.8, 4.5, 8.0, 6.2, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 1.2, 1.1, 1.1, 4.7, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.4, 14.9, 12.5, 11.1, 16.0, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 6.7,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 11.16,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.0,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jamison Crowder (calf, thigh) was limited during Wednesday's practice.\n",
    "report": "",
    "analysis": "Crowder turned eight targets into 66 yards against the Rams after dealing with a calf injury heading into the contest. It is unlikely you are willing to play Crowder in the fantasy finals, but he does have a chance of seeing 6-plus targets out of the slot against the Browns.\n",
    "timestamp": "2020-12-24 03:47 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 13.9,
    "week05": 21.6,
    "week06": 8.3,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 9.6,
    "week10": "BYE",
    "week11": 2.1,
    "week12": 4.6,
    "week13": 19.2,
    "week14": 1.7,
    "week15": 9.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 'DNP', 'DNP', 13.9, 21.6, 8.3, 'DNP', 'DNP', 9.6, 'BYE', 2.1, 4.6, 19.2, 1.7, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 'DNP', 'DNP', 10.0, 6.7, 8.9, 'DNP', 'DNP', 6.0, 'BYE', 6.7, 5.3, 6.6, 1.3, 4.1, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 'DNP', 'DNP', 2.4, 2.3, 2.8, 'DNP', 'DNP', 3.6, 'BYE', 3.0, 2.2, 2.9, 2.4, 2.0, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 'DNP', 'DNP', 14.9, 14.4, 15.7, 'DNP', 'DNP', 14.8, 'BYE', 15.7, 14.9, 14.2, 14.8, 14.1, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 11.38,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.36,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Chris Godwin caught 4-of-5 targets for 36 yards and one touchdown in the Bucs' Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "Godwin's five targets were tied for fourth on the team behind Mike Evans, Antonio Brown, and Rob Gronkowski, but it was Godwin who caught Tom Brady's first of two touchdowns with a four-yarder in the third quarter. It was just Godwin's fourth touchdown grab of the year. His ceiling is gone with Brown now a member of the Bucs, but Godwin remains an every-week WR2/3 ahead of a Week 16 date with the pathetic Lions.\n",
    "timestamp": "2020-12-20 10:34 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.9,
    "week02": "DNP",
    "week03": 14.9,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 7.3,
    "week07": 19.3,
    "week08": "DNP",
    "week09": 5.6,
    "week10": 12.2,
    "week11": 14.8,
    "week12": 13.7,
    "week13": "BYE",
    "week14": 3.5,
    "week15": 11.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 'DNP', 14.9, 'DNP', 'DNP', 7.3, 19.3, 'DNP', 5.6, 12.2, 14.8, 13.7, 'BYE', 3.5, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 'DNP', 5.0, 'DNP', 'DNP', 8.9, 8.7, 'DNP', 11.6, 2.8, 5.9, 8.2, 'BYE', 7.0, 4.9, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 'DNP', 2.6, 'DNP', 'DNP', 8.3, 1.4, 'DNP', 6.3, 0.5, 2.1, 3.7, 'BYE', 4.6, 2.6, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 'DNP', 20.4, 'DNP', 'DNP', 26.1, 20.3, 'DNP', 22.8, 20.4, 20.1, 18.4, 'BYE', 19.1, 19.9, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 6.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 11.66,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 25.37,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Cole Beasley caught 8-of-10 targets for 112 yards in Week 15 against the Broncos.\n",
    "report": "",
    "analysis": "It's a rebound game after Beasley was held to 41 yards on five catches last week.\u00a0Beasley had no problem getting open against an injured Broncos secondary.\u00a0The veteran slot receiver now needs only 50 yards to go over 1,000 yards on the season. Beasley gets a matchup with New England in Week 16.\n",
    "timestamp": "2020-12-20 06:20 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 7.8,
    "week02": 9.5,
    "week03": 13.0,
    "week04": 10.7,
    "week05": 8.3,
    "week06": 12.5,
    "week07": 16.7,
    "week08": 3.4,
    "week09": 5.4,
    "week10": 22.4,
    "week11": "BYE",
    "week12": 8.3,
    "week13": 23.5,
    "week14": 6.6,
    "week15": 15.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.8, 9.5, 13.0, 10.7, 8.3, 12.5, 16.7, 3.4, 5.4, 22.4, 'BYE', 8.3, 23.5, 6.6, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.1, 4.2, 7.1, 5.6, 2.9, 4.4, 5.5, 7.6, 5.4, 'BYE', 6.6, 4.5, 6.5, 6.6, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.4, 0.5, 1.8, 1.1, 0.9, 1.2, 3.3, 1.4, 0.9, 'BYE', 2.7, 1.9, 1.6, 1.6, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.7, 11.2, 11.3, 12.7, 12.1, 12.3, 14.6, 12.7, 12.1, 'BYE', 12.7, 11.8, 14.1, 12.8, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035403.png",
    "name": "Denzel Mims",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 6.4,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 6.74,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.0,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Denzel Mims caught 3-of-4 targets for 18 yards in the Jets' Week 15 win over the Rams.\u00a0\n",
    "report": "",
    "analysis": "With Sam Darnold settling back in under center, Mims has seen his receiving production decline each of the past three weeks. That could change against the Browns' leaky pass defense in Week 16, but it is too volatile of a situation to take a WR4 chance on Mims in the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 6.2,
    "week08": 5.2,
    "week09": 8.2,
    "week10": "BYE",
    "week11": 8.6,
    "week12": 8.7,
    "week13": 7.0,
    "week14": "DNP",
    "week15": 3.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 5.2, 8.2, 'BYE', 8.6, 8.7, 7.0, 'DNP', 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.9, 8.0, 6.4, 'BYE', 6.7, 5.3, 7.3, 'DNP', 5.2, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.7, 5.0, 2.5, 'BYE', 3.2, 1.6, 2.4, 'DNP', 7.1, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 11.2, 15.2, 'BYE', 12.1, 14.1, 15.0, 'DNP', 9.1, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 6.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 7.8,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 28.23,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Darius Slayton caught 4-of-9 targets for 74 yards in the Giants' Week 15 loss to the Browns.\n",
    "report": "",
    "analysis": "A quality on-paper matchup turned into a usable but forgettable box score for Slayton, who has been entirely erased with Sterling Shepard in the lineup. This was only Slayton's fourth game reaching at least 60 yards this season. Despite being maxed out as a no-floor WR5, Slayton offers serviceable real-life play as a deep threat for New York. He'll need to rip off some chunk gains for the Giants to hang with the Ravens in Week 16.\n",
    "timestamp": "2020-12-21 04:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.2,
    "week02": 4.8,
    "week03": 4.8,
    "week04": 6.3,
    "week05": 16.9,
    "week06": 10.8,
    "week07": 3.3,
    "week08": 8.1,
    "week09": 1.3,
    "week10": 11.8,
    "week11": "BYE",
    "week12": 0.0,
    "week13": 1.9,
    "week14": 4.6,
    "week15": 9.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.2, 4.8, 4.8, 6.3, 16.9, 10.8, 3.3, 8.1, 1.3, 11.8, 'BYE', 0.0, 1.9, 4.6, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 10.9, 11.5, 9.9, 16.6, 12.0, 10.6, 13.3, 10.4, 13.3, 'BYE', 11.1, 10.4, 7.6, 9.3, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.8, 3.4, 2.2, 0.6, 0.9, 2.1, 2.1, 1.2, 1.5, 'BYE', 2.6, 1.6, 0.0, 1.9, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.1, 22.8, 14.9, 18.7, 19.6, 21.3, 19.8, 20.2, 17.6, 'BYE', 19.5, 18.9, 16.0, 19.6, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3134353.png",
    "name": "Tim Patrick",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 6.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 28,
    "avg_fp2": 8.96,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.27,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Tim Patrick caught 3-of-4 targets for 14 yards in Week 15 against Buffalo.\n",
    "report": "",
    "analysis": "The three catches led the Broncos receivers. Patrick's targets have been down the last few weeks, but he\u00a0managed to salvage his fantasy production with touchdowns in two of the last three games.\u00a0Patrick will again be a TD-dependent WR3 for a Week 16 matchup with the Chargers.\n",
    "timestamp": "2020-12-20 01:57 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 10.9,
    "week10": 8.1,
    "week11": 14.4,
    "week12": 0.0,
    "week13": 18.4,
    "week14": 11.1,
    "week15": 2.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 10.9, 8.1, 14.4, 0.0, 18.4, 11.1, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 8.1, 5.7, 5.4, 6.9, 6.0, 10.4, 5.7, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.5, 0.9, 5.6, 1.2, 0.1, 1.7, 5.5, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 8.8, 8.0, 10.4, 7.4, 8.8, 12.3, 13.5, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115306.png",
    "name": "Josh Reynolds",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 6.1,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 13,
    "avg_fp2": 5.96,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.83,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Josh Reynolds caught 1-of-2 targets for six yards in the Rams' Week 14 win over the Patriots.\u00a0\n",
    "report": "",
    "analysis": "With the Rams smashing the Patriots on the ground, they lined up in three-receiver sets for only 15-20 plays. Reynolds has established a roughly 4/40 floor, but other than one game against the Seahawks, it hasn't come with any ceiling. The Rams do get the Seahawks again in Week 16, and the Jets in Week 15. Not even those golden matchups will be enough to get Reynolds in the WR4 mix, however.\u00a0\n",
    "timestamp": "2020-12-11 04:50 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 4.3,
    "week03": 6.0,
    "week04": 4.0,
    "week05": 5.6,
    "week06": 11.5,
    "week07": 13.2,
    "week08": 6.4,
    "week09": "BYE",
    "week10": 13.4,
    "week11": 4.7,
    "week12": 6.5,
    "week13": 2.6,
    "week14": 1.1,
    "week15": 1.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 4.3, 6.0, 4.0, 5.6, 11.5, 13.2, 6.4, 'BYE', 13.4, 4.7, 6.5, 2.6, 1.1, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, -0.1, 1.5, 1.3, 1.7, 4.9, 4.1, 3.3, 'BYE', 5.6, 4.2, 6.2, 5.6, 3.8, 7.2, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.8, 0.0, 0.1, 'BYE', 0.4, 0.9, 0.4, 0.0, 0.0, 0.1, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 7.8, 8.2, 10.4, 9.5, 9.2, 10.2, 7.8, 'BYE', 10.1, 11.7, 9.4, 9.7, 9.5, 10.4, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 5.9,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 5.67,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.74,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Larry Fitzgerald caught 3-of-4 targets for 35 yards and one score in Arizona's Week 15 win over Philadelphia.\n",
    "report": "",
    "analysis": "Fitzgerald made a spectacular grab while turning around in the back of the end zone to notch his first touchdown of the year. It's still notable that it took until the Cardinals faced Philadelphia's secondary, short three starting corners on Sunday, for\u00a0Fitzgerald to touch paint. He can continue being ignored as a better option for his own team than your fantasy squad.\n",
    "timestamp": "2020-12-21 04:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.4,
    "week02": 8.5,
    "week03": 0.5,
    "week04": 1.4,
    "week05": 5.5,
    "week06": 3.7,
    "week07": 10.2,
    "week08": "BYE",
    "week09": 7.4,
    "week10": 2.3,
    "week11": 10.2,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 2.0,
    "week15": 11.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 8.5, 0.5, 1.4, 5.5, 3.7, 10.2, 'BYE', 7.4, 2.3, 10.2, 'DNP', 'DNP', 2.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.1, 8.6, 4.9, 5.7, 5.0, 6.6, 'BYE', 4.8, 5.0, 3.8, 'DNP', 'DNP', 3.6, 8.3, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 3.8, 5.5, 2.8, 5.3, 5.1, 2.6, 'BYE', 3.9, 3.1, 3.4, 'DNP', 'DNP', 2.4, 2.8, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 18.1, 19.3, 14.8, 19.4, 19.1, 21.3, 'BYE', 16.9, 18.4, 17.0, 'DNP', 'DNP', 15.8, 17.3, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3071572.png",
    "name": "Keelan Cole",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 5.8,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 8.57,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 25.48,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Keelan Cole caught both of his targets for 22 yards in the Jaguars' Week 15 loss to the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Jacksonville's pass catchers could make anything happen in two quarters of garbage time against Baltimore. Cole was fifth on the team in targets this week after seeing 12 targets in Week 14 against the Titans. D.J. Chark being back in the Jags lineup quashes Cole's floor and ceiling.\u00a0\n",
    "timestamp": "2020-12-20 11:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.2,
    "week02": 14.8,
    "week03": 6.3,
    "week04": 6.6,
    "week05": 9.7,
    "week06": 17.3,
    "week07": 1.7,
    "week08": "BYE",
    "week09": 1.1,
    "week10": 19.2,
    "week11": 3.6,
    "week12": 5.9,
    "week13": 1.2,
    "week14": 16.2,
    "week15": 3.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 14.8, 6.3, 6.6, 9.7, 17.3, 1.7, 'BYE', 1.1, 19.2, 3.6, 5.9, 1.2, 16.2, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.5, 5.9, 8.4, 5.7, 6.3, 7.9, 6.7, 'BYE', 8.7, 6.7, 7.9, 8.4, 8.6, 6.2, 5.6, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 1.2, 1.0, 1.3, 0.0, 'BYE', 2.0, 4.6, 3.6, 0.0, 2.2, 0.2, 2.1, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.6, 12.6, 11.2, 10.4, 11.3, 10.9, 'BYE', 14.5, 16.0, 13.0, 13.2, 12.8, 10.6, 13.9, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png",
    "name": "Darnell Mooney",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 5.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 7.19,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.37,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Darnell Mooney caught 4-of-5 targets for 49 yards and one touchdown in the Bears' Week 15 win over the Vikings.\u00a0\n",
    "report": "",
    "analysis": "Mooney has been a low-volume player all year with Allen Robinson dominating looks with Mitchell Trubisky. This week was no different, but the rookie was able to find the end zone on a coverage bust in the flats. Mooney can make a big play here and there. He's just been held to under 60 yards in all but one game. His odds of eclipsing that mark are increased with the Jaguars waiting in Week 16.\n",
    "timestamp": "2020-12-20 09:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 11.1,
    "week03": 2.9,
    "week04": 7.4,
    "week05": 2.5,
    "week06": 5.1,
    "week07": 5.5,
    "week08": 15.4,
    "week09": 6.8,
    "week10": 1.3,
    "week11": "BYE",
    "week12": 6.9,
    "week13": 6.3,
    "week14": 9.7,
    "week15": 14.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 11.1, 2.9, 7.4, 2.5, 5.1, 5.5, 15.4, 6.8, 1.3, 'BYE', 6.9, 6.3, 9.7, 14.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.3, 6.7, 9.7, 3.7, 6.7, 6.3, 6.4, 9.7, 8.0, 'BYE', 5.4, 5.2, 8.4, 7.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.8, 5.0, 4.4, 0.0, 0.0, 4.0, 3.9, 2.4, 5.5, 'BYE', 2.4, 3.0, 3.3, 4.2, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 2.8, 9.4, 9.3, 14.7, 12.8, 10.0, 7.3, 8.3, 12.7, 'BYE', 10.9, 6.6, 10.9, 8.2, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 5.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 8.14,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 25.37,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Ankle",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills coach Sean McDermott said John Brown (ankle) won't play in Week 15 against the Broncos.\n",
    "report": "",
    "analysis": "Brown returned to practice mid-week but won't be able to turnaround in time for Saturday's game. It will be business as usual for Buffalo with Stefon Diggs, Cole Beasley, and Gabriel Davis in three-wide sets in a game that has been bet up from 48 to 50 since initially opening. With Denver's secondary likely down to fourth- and fifth-string corners, all of the Bills' wideouts are legitimately in play for re-draft playoffs in Week 15.\n",
    "timestamp": "2020-12-17 02:33 PM",
    "source": "Sal Capaccio on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 16.0,
    "week02": 16.2,
    "week03": 0.0,
    "week04": 6.2,
    "week05": "DNP",
    "week06": 0.0,
    "week07": "DNP",
    "week08": 2.6,
    "week09": 13.9,
    "week10": 10.2,
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 16.2, 0.0, 6.2, 'DNP', 0.0, 'DNP', 2.6, 13.9, 10.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 7.2, 10.8, 'DNP', 6.1, 'DNP', 6.9, 10.1, 8.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.6, 3.6, 'DNP', 3.2, 'DNP', 3.4, 2.7, 1.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 14.7, 15.2, 17.6, 'DNP', 15.9, 'DNP', 15.5, 14.5, 14.5, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Reserve: WR-3",
    "team": "Carolina Panthers",
    "projected": 5.3,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 16,
    "avg_fp2": 10.75,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.31,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Curtis Samuel caught 4-of-9\u00a0targets for 42 yards in the Panthers' Week 15\u00a0loss to the Panthers.\n",
    "report": "",
    "analysis": "The bad side of Samuel's game popped up, as he dropped two screen targets on manufactured opportunities. Samuel seemed to be targeted most when operating in tight formations or from the slot, and overall the Panthers' offense lacks pizzazz. Samuel will be difficult to rely on in Week 16 against Washington.\n",
    "timestamp": "2020-12-20 06:47 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.8,
    "week02": 4.9,
    "week03": 7.2,
    "week04": 6.3,
    "week05": 8.9,
    "week06": "DNP",
    "week07": 14.3,
    "week08": 19.4,
    "week09": 22.3,
    "week10": 2.7,
    "week11": 17.4,
    "week12": 10.2,
    "week13": "BYE",
    "week14": 12.5,
    "week15": 6.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.8, 4.9, 7.2, 6.3, 8.9, 'DNP', 14.3, 19.4, 22.3, 2.7, 17.4, 10.2, 'BYE', 12.5, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.5, 6.7, 5.3, 2.8, 'DNP', 5.1, 10.8, 7.5, 9.9, 8.9, 5.7, 'BYE', 7.2, 7.3, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 3.4, 2.9, 1.2, 3.0, 'DNP', 2.8, 3.5, 2.9, 2.2, 3.4, 4.1, 'BYE', 3.2, 2.0, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 13.2, 13.5, 14.6, 12.3, 'DNP', 12.8, 14.5, 14.6, 12.8, 15.6, 13.9, 'BYE', 14.4, 13.6, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243160.png",
    "name": "Laviska Shenault",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 5.2,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 7.77,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 25.48,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Laviska\u00a0Shenault caught 5-of-6 targets for 42 yards in the Jaguars' Week 15 loss to the Ravens, adding two rushes for one yard.\u00a0\n",
    "report": "",
    "analysis": "The Jaguars still seem interested in manufacturing touches for the rookie, but nearly all of his opportunities are at or near the line of scrimmage. Shenault displayed his impressive run-after-the-catch ability against the Ravens, shedding tacklers and muscling his way for extra yards. Shenault is a low-ceiling WR4/5 option for Week 15 against Chicago.\u00a0\n",
    "timestamp": "2020-12-20 10:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 11.6,
    "week05": 11.4,
    "week06": 2.6,
    "week07": 5.9,
    "week08": "BYE",
    "week09": 0.4,
    "week10": "DNP",
    "week11": "DNP",
    "week12": 5.2,
    "week13": 14.3,
    "week14": 8.1,
    "week15": 6.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 11.6, 11.4, 2.6, 5.9, 'BYE', 0.4, 'DNP', 'DNP', 5.2, 14.3, 8.1, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.0, 6.9, 9.3, 6.0, 'BYE', 9.0, 'DNP', 'DNP', 7.9, 8.8, 10.4, 4.5, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 0.0, 1.1, 5.4, 'BYE', 3.5, 'DNP', 'DNP', 1.4, 1.8, 3.8, 7.5, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.5, 13.3, 12.5, 10.7, 'BYE', 9.6, 'DNP', 'DNP', 8.1, 10.0, 13.1, 15.3, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 5.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 14,
    "avg_fp2": 6.1,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.72,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthOut": "Reserve-covid-19",
    "injury": "Undisclosed",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Henry Ruggs (COVID-19) is expected to re-join the team this week, but his status for Week 16 against the Dolphins is uncertain.\n",
    "report": "",
    "analysis": "Ruggs missed Week 15 while on the COVID-19 list. At this point we still are not sure who is starting at quarterback for the Raiders with Derek Carr returning to practice, but it would help the entire team for Ruggs to be on the field to threaten the verticals on the outside.\n",
    "timestamp": "2020-12-24 01:05 AM",
    "source": "Vincent Bonsignore on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 18.8,
    "week06": "BYE",
    "week07": 5.5,
    "week08": 1.9,
    "week09": 1.0,
    "week10": 4.6,
    "week11": 2.2,
    "week12": 6.9,
    "week13": 13.9,
    "week14": 3.3,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 18.8, 'BYE', 5.5, 1.9, 1.0, 4.6, 2.2, 6.9, 13.9, 3.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.1, 'BYE', 5.1, 8.5, 10.6, 10.0, 6.9, 8.9, 6.0, 5.1, 'DNP', 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 1.1, 'BYE', 4.8, 4.1, 4.3, 1.6, 0.0, 0.7, 0.0, 2.2, 'DNP', 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.5, 'BYE', 14.3, 16.7, 13.6, 14.5, 13.7, 4.5, 8.2, 9.7, 'DNP', 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051738.png",
    "name": "Marquez Valdes-Scantling",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 5.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 7.48,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.08,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Marquez Valdes-Scantling failed to catch his only target\u00a0in the Packers' Week 15\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "It is a difficult zero to take against what previously proved to be a bad secondary, especially after MVS took six catches for 85 yards and a score just one week ago. Now, Valdes-Scantling has two games of zero receiving yards in his last three contests. He would be difficult to put into lineups in Week 16 against the Titans.\n",
    "timestamp": "2020-12-20 05:02 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 17.6,
    "week02": 7.9,
    "week03": 1.0,
    "week04": 6.5,
    "week05": "BYE",
    "week06": 4.7,
    "week07": 0.9,
    "week08": 2.8,
    "week09": 18.3,
    "week10": 22.9,
    "week11": 5.0,
    "week12": 0.0,
    "week13": -0.4,
    "week14": 17.5,
    "week15": 0.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.6, 7.9, 1.0, 6.5, 'BYE', 4.7, 0.9, 2.8, 18.3, 22.9, 5.0, 0.0, -0.4, 17.5, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 4.6, 4.0, 1.9, 'BYE', 4.1, 7.7, 6.6, 5.5, 7.9, 5.8, 6.5, 5.9, 5.0, 6.9, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 1.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 14.5, 11.0, 11.2, 'BYE', 11.4, 11.4, 10.1, 9.7, 12.4, 12.2, 10.8, 11.1, 10.9, 12.9, 12.0]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 22.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 1,
    "avg_fp2": 17.21,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.47,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Travis Kelce caught 8-of-12 targets for 68 yards and a touchdown in the Chiefs' Week 15 win against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Kelce once again led KC in targets, catching a short touchdown on a weird push-toss from Patrick Mahomes in the first half. He benefited from the Saints refusing to allow Mahomes anything downfield. Kelce is now 59 yards away from setting the single-season tight end receiving yardage record held by George Kittle. We'd say he has a fair shot at the record in Week 16 against the Falcons' terrible coverage unit.\u00a0\n",
    "timestamp": "2020-12-21 01:57 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 19.5,
    "week03": 11.7,
    "week04": 8.5,
    "week05": 20.8,
    "week06": 19.0,
    "week07": 4.6,
    "week08": 20.9,
    "week09": 20.9,
    "week10": "BYE",
    "week11": 22.86,
    "week12": 12.2,
    "week13": 23.6,
    "week14": 23.6,
    "week15": 18.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 19.5, 11.7, 8.5, 20.8, 19.0, 4.6, 20.9, 20.9, 'BYE', 22.86, 12.2, 23.6, 23.6, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 16.5, 19.3, 14.7, 13.2, 16.5, 'BYE', 11.8, 12.5, 14.4, 15.4, 15.3, 22.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4, 4.8, 3.8, 5.3, 7.0, 'BYE', 5.2, 5.5, 6.6, 5.6, 6.4, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4, 18.8, 19.4, 18.9, 20.5, 'BYE', 19.2, 19.3, 20.1, 19.6, 20.0, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 16.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.61,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Robert Tonyan caught 3-of-3\u00a0targets for 18 yards and a touchdown in the Packers' Week 15\u00a0win over the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Tonyan currently leads all NFL tight ends with 10 touchdown receptions on the season - imagine saying that back in August. On Saturday night, Tonyan's scoring reception was a simple one-yard catch off play action. He has now scored in five straight games, but the three targets tonight are a six-game low. He should be in starting lineups against the Titans in Week 16.\n",
    "timestamp": "2020-12-20 06:04 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 0.0,
    "week02": 9.5,
    "week03": 13.5,
    "week04": 30.8,
    "week05": "BYE",
    "week06": 4.0,
    "week07": 4.2,
    "week08": 10.4,
    "week09": 1.0,
    "week10": 4.8,
    "week11": 12.9,
    "week12": 15.2,
    "week13": 11.9,
    "week14": 12.1,
    "week15": 9.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 9.5, 13.5, 30.8, 'BYE', 4.0, 4.2, 10.4, 1.0, 4.8, 12.9, 15.2, 11.9, 12.1, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.3, 3.9, 11.7, 'BYE', 7.4, 9.0, 11.2, 9.6, 10.0, 5.9, 9.3, 8.3, 9.1, 13.1, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.7, 2.6, 'BYE', 4.7, 4.7, 2.2, 1.1, 0.1, 0.0, 2.9, 0.6, 2.2, 2.8, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 9.5, 10.4, 11.7, 'BYE', 11.7, 11.0, 11.6, 8.6, 22.0, 18.2, 13.1, 16.6, 15.1, 19.4, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 15.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 9.54,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 11.59,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson caught just 2-of-4 targets for 18 yards in the Lions' Week 15 loss to the Titans.\n",
    "report": "",
    "analysis": "He also lost a fumble. It was a rare bad game for Hockenson, who had 50 yards and/or one touchdown in all but one game entering Week 15. The Lions are spreading snaps around in a lost season, as both Hunter Bryant and Jesse James saw another three targets. Hockenson will remain a TE1 for Week 16 against the Bucs.\n",
    "timestamp": "2020-12-20 10:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 8.2,
    "week03": 7.3,
    "week04": 9.9,
    "week05": "BYE",
    "week06": 8.7,
    "week07": 14.4,
    "week08": 10.0,
    "week09": 12.4,
    "week10": 2.3,
    "week11": 8.8,
    "week12": 11.4,
    "week13": 11.9,
    "week14": 13.3,
    "week15": 0.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 8.2, 7.3, 9.9, 'BYE', 8.7, 14.4, 10.0, 12.4, 2.3, 8.8, 11.4, 11.9, 13.3, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.6, 7.9, 11.9, 'BYE', 10.2, 10.7, 7.3, 8.6, 12.0, 9.5, 13.3, 12.2, 12.2, 9.2, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 1.8, 0.0, 'BYE', 6.9, 5.8, 0.0, 5.5, 3.4, 1.4, 3.6, 4.8, 0.5, 2.9, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.8, 11.6, 10.1, 7.6, 'BYE', 16.5, 14.5, 10.4, 13.5, 11.6, 10.4, 12.1, 13.4, 10.3, 12.2, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 14.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.71,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Dallas Goedert caught 4-of-8 targets for 39 yards in Philadelphia's Week 15 loss to the Cardinals.\n",
    "report": "",
    "analysis": "He also dropped a touchdown that would've helped his final line. Goedert still finished with a team-high in targets from Jalen Hurts, who has now thrown in the former's direction a total of 14 times in the last two games. Although Hurts continues spreading the ball around to whomever is on the field at the time, Goedert is the most confident option among the team's receivers to spike a ceiling game through the air from the rookie in Week 16 against Dallas.\n",
    "timestamp": "2020-12-21 03:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.1,
    "week02": 5.0,
    "week03": 1.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 2.0,
    "week09": "BYE",
    "week10": 5.3,
    "week11": 16.2,
    "week12": 17.0,
    "week13": 9.1,
    "week14": 6.3,
    "week15": 5.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.1, 5.0, 1.2, 'DNP', 'DNP', 'DNP', 'DNP', 2.0, 'BYE', 5.3, 16.2, 17.0, 9.1, 6.3, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 9.4, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 'BYE', 6.9, 10.9, 12.6, 6.7, 10.0, 13.1, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 1.5, 1.6, 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 'BYE', 0.0, 1.4, 1.5, 3.2, 3.6, 2.9, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.3, 12.7, 'DNP', 'DNP', 'DNP', 'DNP', 13.7, 'BYE', 10.8, 13.0, 12.8, 13.4, 13.7, 14.0, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.0,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 6,
    "avg_fp2": 7.44,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.9,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski caught 3-of-7 targets for 29 yards in the Bucs' Week 15 win over the Falcons.\n",
    "report": "",
    "analysis": "Gronk tied for the team lead in targets but now has 41 yards or fewer in five of the last seven games. He did draw a blatant DPI call in the end zone to set up a Leonard Fournette rushing score on the next play. Gronk will be a TD-dependent TE1 in a glorious Week 16 date with the Lions.\n",
    "timestamp": "2020-12-20 10:44 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.1,
    "week02": 0.0,
    "week03": 7.8,
    "week04": 3.4,
    "week05": 6.7,
    "week06": 16.3,
    "week07": 14.7,
    "week08": 12.1,
    "week09": 0.7,
    "week10": 12.1,
    "week11": 3.5,
    "week12": 13.6,
    "week13": "BYE",
    "week14": 6.7,
    "week15": 4.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4, 6.7, 16.3, 14.7, 12.1, 0.7, 12.1, 3.5, 13.6, 'BYE', 6.7, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 10.3, 16.0, 18.5, 17.6, 13.9, 17.8, 15.9, 13.6, 'BYE', 15.5, 15.0, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7, 3.3, 4.1, 4.1, 2.3, 3.6, 3.7, 4.4, 'BYE', 4.5, 4.1, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0, 20.5, 21.1, 20.2, 17.1, 21.4, 19.5, 21.1, 'BYE', 21.7, 23.3, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 13.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 31,
    "avg_fp2": 10.48,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 9.34,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Andrews caught 5-of-5 targets for 66 yards and a touchdown in the Ravens' Week 15 win against the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Only Marquise Brown saw more targets for the Ravens. Andrews nearly caught a 40-yard pass in the first half on a flagrant pass interference penalty by Jacksonville. He was wide open on several of his first half receptions against a Jaguars secondary that didn't seem all that interested in covering Baltimore pass catchers. One of fantasy's biggest disappointments in 2020, Andrews will look to continue his solid finish to the season in Week 16 against the Giants. He'll be a TE1.\u00a0\n",
    "timestamp": "2020-12-20 09:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 3.4,
    "week03": 3.7,
    "week04": 19.2,
    "week05": 14.6,
    "week06": 3.1,
    "week07": "BYE",
    "week08": 4.7,
    "week09": 3.7,
    "week10": 9.6,
    "week11": 18.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 10.3,
    "week15": 15.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 3.4, 3.7, 19.2, 14.6, 3.1, 'BYE', 4.7, 3.7, 9.6, 18.1, 'DNP', 'DNP', 10.3, 15.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 13.8, 15.2, 10.4, 9.7, 15.1, 'BYE', 12.6, 8.2, 7.4, 12.0, 'DNP', 'DNP', 13.2, 7.2, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 1.0, 2.5, 3.0, 5.1, 4.2, 'BYE', 4.7, 0.8, 0.0, 1.8, 'DNP', 'DNP', 2.4, 2.6, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 12.6, 16.2, 15.3, 17.2, 11.9, 'BYE', 14.1, 13.1, 14.5, 12.8, 'DNP', 'DNP', 15.3, 14.9, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 13.3,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 8.77,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Hunter Henry missed Wednesday's practice with an illness.\n",
    "report": "",
    "analysis": "Henry has been held out for two straight days. This is on the heels of Henry turning seven targets for 65 yards and a touchdown with a matchup against the Broncos on tap. Check back in on Sunday for an update on Henry's status.\n",
    "timestamp": "2020-12-24 04:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 11.3,
    "week03": 7.5,
    "week04": 4.9,
    "week05": 10.3,
    "week06": "BYE",
    "week07": 3.8,
    "week08": 5.3,
    "week09": 5.3,
    "week10": 11.0,
    "week11": 12.8,
    "week12": 10.2,
    "week13": 1.0,
    "week14": 7.1,
    "week15": 15.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 11.3, 7.5, 4.9, 10.3, 'BYE', 3.8, 5.3, 5.3, 11.0, 12.8, 10.2, 1.0, 7.1, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 15.6, 8.7, 10.1, 14.0, 'BYE', 19.6, 11.8, 11.1, 13.2, 10.6, 12.3, 11.3, 14.6, 13.8, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 5.7, 3.3, 3.7, 3.9, 'BYE', 4.8, 6.7, 3.7, 4.2, 3.2, 3.8, 4.0, 2.7, 4.0, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 13.6, 14.6, 12.2, 13.4, 'BYE', 15.2, 16.9, 12.0, 14.8, 13.8, 12.6, 12.2, 13.4, 14.2, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 12.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 13.27,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 8.31,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Foot",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "The San Jose Mercury News reports \"all signs point toward\"\u00a0George Kittle (foot) returning for Saturday's game against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "With Kittle still technically on injured reserve, the 49ers do not have to update his practice status, but this has been the growing belief. \u201cYes, you have to have discretion and all those things, but we\u2019ve been very thoughtful about this, and if he plays, it\u2019s only because he\u2019s ready to play,\u201d GM John Lynch said in a Thursday radio interview. \u201cHe\u2019s eager to play and we want him to play.\u201d A final announcement\u00a0will come by Friday afternoon, which is the 49ers' deadline to activate Kittle for Saturday's game. Although he is sure to be on a snap count for the playoff-eliminated 49ers with C.J. Beathard under center, Kittle will immediately slot in as a top-five option for the fantasy finals.\u00a0\u00a0\n",
    "timestamp": "2020-12-24 07:21 PM",
    "source": "San Jose Mercury News ",
    "game_day_logo": "",
    "week01": 7.3,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 32.6,
    "week05": 6.4,
    "week06": 20.4,
    "week07": 8.0,
    "week08": 4.9,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 'DNP', 'DNP', 32.6, 6.4, 20.4, 8.0, 4.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 'DNP', 'DNP', 15.1, 17.1, 12.9, 12.0, 12.7, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 'DNP', 'DNP', 3.1, 8.4, 3.1, 5.5, 4.7, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 'DNP', 'DNP', 18.1, 18.7, 17.4, 18.7, 19.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 11.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 23,
    "avg_fp2": 6.2,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 14.8,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Austin Hooper caught 5-of-6 targets for 41 yards and a touchdown in the Browns' Week 15 win over the Giants.\n",
    "report": "",
    "analysis": "Hooper has been a fantasy bust this season. Tonight's 41-yard game was his highest since Week 6 and his touchdown was only his third of the year. Perhaps he closes out strong after a few weeks of playing through injury, but there's typically not enough volume for Hooper to break out of the TE2 streamer mix. The Jets are the easiest matchup for tight ends for those making moves ahead of fantasy finals.\n",
    "timestamp": "2020-12-21 04:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.5,
    "week02": 3.2,
    "week03": 4.0,
    "week04": 11.9,
    "week05": 8.2,
    "week06": 7.7,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 1.6,
    "week11": 4.8,
    "week12": 8.3,
    "week13": 3.4,
    "week14": "DNP",
    "week15": 12.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.2, 4.0, 11.9, 8.2, 7.7, 'DNP', 'DNP', 'BYE', 1.6, 4.8, 8.3, 3.4, 'DNP', 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 8.9, 6.4, 5.3, 3.3, 3.6, 'DNP', 'DNP', 'BYE', 4.9, 6.2, 12.8, 11.9, 'DNP', 11.4, 11.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.4, 1.1, 3.8, 0.9, 1.5, 'DNP', 'DNP', 'BYE', 4.5, 1.1, 1.9, 0.7, 'DNP', 1.5, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.6, 11.9, 13.6, 11.5, 11.3, 'DNP', 'DNP', 'BYE', 11.4, 11.9, 13.0, 13.6, 'DNP', 11.6, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 11.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 28,
    "avg_fp2": 7.85,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.64,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Noah Fant\u00a0caught 8-of-11 targets for 68 yards and a touchdown in Week 15 against Buffalo.\n",
    "report": "",
    "analysis": "Fant's 11 targets paced the Broncos. Drew Lock spent most of the night checking down to Fant and his running backs, with Lock completing just five passes to his receivers.\u00a0Fant's touchdown came on a short throw where he got open in the back of the end-zone.\u00a0 Fant has battled injures but he's been productive when healthy. He'll take a 52/560/3 line into Week 16 against the Chargers.\n",
    "timestamp": "2020-12-20 02:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.6,
    "week02": 15.7,
    "week03": 7.1,
    "week04": 6.0,
    "week05": "BYE",
    "week06": "DNP",
    "week07": 5.3,
    "week08": 8.2,
    "week09": 6.0,
    "week10": 3.3,
    "week11": 7.5,
    "week12": 1.8,
    "week13": 7.7,
    "week14": 0.0,
    "week15": 16.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.6, 15.7, 7.1, 6.0, 'BYE', 'DNP', 5.3, 8.2, 6.0, 3.3, 7.5, 1.8, 7.7, 0.0, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.2, 13.3, 8.7, 'BYE', 'DNP', 5.6, 11.7, 10.9, 7.2, 11.7, 7.3, 6.7, 6.9, 4.2, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 3.7, 1.6, 'BYE', 'DNP', 1.6, 2.0, 0.0, 1.1, 1.3, 2.6, 0.4, 1.6, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 12.0, 13.8, 14.9, 'BYE', 'DNP', 13.1, 12.0, 13.5, 12.6, 12.3, 10.5, 8.4, 10.5, 9.4, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 11.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 6.88,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.77,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Evan Engram caught 4-of-7 targets for 46 yards in the Giants' Week 16 loss to the Browns.\n",
    "report": "",
    "analysis": "Engram was playing through a minor calf injury, but it didn't appear to limit him much. The tight end was productive in garbage time and nearly came down with a touchdown. That, of course, doesn't matter for those who rode him as a TE1/2 in fantasy semis. The Giants offense is hard to bet on unless Daniel Jones is healthy and the matchup is clean. It's unclear if Jones will be ready for next week, and the Giants will be playing in Baltimore. Engram will be\u00a0more of a high-end TE2 than a mid-range TE1.\n",
    "timestamp": "2020-12-21 05:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 9.5,
    "week03": 3.7,
    "week04": 6.5,
    "week05": 9.0,
    "week06": 4.0,
    "week07": 7.9,
    "week08": 9.5,
    "week09": 13.3,
    "week10": 2.5,
    "week11": "BYE",
    "week12": 13.9,
    "week13": 5.2,
    "week14": 2.8,
    "week15": 6.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 9.5, 3.7, 6.5, 9.0, 4.0, 7.9, 9.5, 13.3, 2.5, 'BYE', 13.9, 5.2, 2.8, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.7, 8.3, 15.6, 13.6, 15.7, 12.6, 13.2, 7.6, 16.1, 'BYE', 11.3, 13.0, 12.8, 16.9, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 2.8, 3.8, 3.4, 3.2, 1.9, 3.2, 3.9, 2.8, 4.5, 'BYE', 1.7, 3.2, 3.1, 3.2, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.3, 14.7, 14.4, 13.1, 12.4, 13.3, 14.3, 15.4, 13.6, 'BYE', 9.4, 14.1, 15.0, 13.9, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 10.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 14,
    "avg_fp2": 13.51,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.96,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Darren Waller caught 9-of-12 targets for 150 yards and a touchdown in the Raiders' Week 15 loss to the Chargers.\u00a0\n",
    "report": "",
    "analysis": "Mt. Waller continued to erupt this evening, bringing his statline for the past three weeks up to 29/425/3. That's despite the fact that Derek Carr made it only two drives before departing with a groin issue. Marcus Mariota found his mountainous seam stretcher for gains of 35, 25 and 25 yards, with the 35-yarder ending in the end zone. Mariota delivered a drop-in-the-bucket dime down the left sideline. Previously the TE2 overall by volume default, Waller has provided ceiling just when fantasy managers need it most. The Dolphins are on deck for Week 16.\u00a0\n",
    "timestamp": "2020-12-18 05:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 22.3,
    "week03": 1.9,
    "week04": 11.3,
    "week05": 13.3,
    "week06": "BYE",
    "week07": 14.0,
    "week08": 5.3,
    "week09": 10.7,
    "week10": 5.2,
    "week11": 18.3,
    "week12": 4.3,
    "week13": 38.5,
    "week14": 11.0,
    "week15": 25.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 22.3, 1.9, 11.3, 13.3, 'BYE', 14.0, 5.3, 10.7, 5.2, 18.3, 4.3, 38.5, 11.0, 25.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 10.4, 10.8, 10.6, 14.0, 'BYE', 15.0, 15.5, 11.4, 9.7, 10.9, 8.6, 13.5, 9.7, 13.5, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 5.4, 18.7, 2.8, 0.7, 'BYE', 0.0, 2.4, 1.2, 9.6, 5.8, 12.1, 5.5, 0.1, 1.4, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 12.2, 24.1, 15.6, 14.0, 'BYE', 15.7, 14.9, 11.1, 17.3, 27.1, 19.8, 13.3, 17.8, 14.1, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 10.7,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 4.67,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.69,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Tyler Eifert caught 3-of-4 targets for 51 yards in the Jaguars' Week 15 loss to the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Eifert caught an impressive 28-yard pass in garbage time. He had the second most yards among Jaguars pass catchers in the blowout loss. As the team's primary pass catching tight end, Eifert has some value as a streaming option in the deepest fantasy formats. Eifert has a fantastic Week 16 matchup against a Chicago defense that has been generous to tight ends all year.\u00a0\n",
    "timestamp": "2020-12-20 10:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.3,
    "week02": 11.1,
    "week03": 2.1,
    "week04": 3.2,
    "week05": 3.1,
    "week06": 0.0,
    "week07": "DNP",
    "week08": "BYE",
    "week09": 6.8,
    "week10": 2.5,
    "week11": 4.2,
    "week12": 9.1,
    "week13": 7.5,
    "week14": 3.2,
    "week15": 6.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 11.1, 2.1, 3.2, 3.1, 0.0, 'DNP', 'BYE', 6.8, 2.5, 4.2, 9.1, 7.5, 3.2, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 8.9, 10.5, 6.5, 11.4, 5.5, 'DNP', 'BYE', 7.2, 11.8, 11.6, 12.8, 9.0, 5.5, 5.8, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.5, 3.1, 0.6, 1.6, 1.9, 'DNP', 'BYE', 0.0, 1.2, 1.1, 1.2, 1.6, 0.7, 0.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 12.7, 16.5, 13.9, 11.3, 13.0, 'DNP', 'BYE', 11.3, 16.8, 13.3, 13.8, 14.0, 12.7, 13.5, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 9.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 11,
    "avg_fp2": 7.21,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 11.43,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dalton Schultz caught both of his targets for 14 yards and a touchdown in the Cowboys' Week\u00a015 win over the 49ers.\n",
    "report": "",
    "analysis": "Schultz still has one game with more than 50 yards since Dak Prescott went down. This was just his second score without Prescott under center. He remains nothing more than a low-end TE2 versus the Eagles next week.\n",
    "timestamp": "2020-12-20 10:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.6,
    "week02": 17.3,
    "week03": 6.8,
    "week04": 15.2,
    "week05": 1.1,
    "week06": 5.5,
    "week07": 3.2,
    "week08": 8.3,
    "week09": 6.8,
    "week10": "BYE",
    "week11": 10.5,
    "week12": 4.9,
    "week13": 6.4,
    "week14": 4.9,
    "week15": 8.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.6, 17.3, 6.8, 15.2, 1.1, 5.5, 3.2, 8.3, 6.8, 'BYE', 10.5, 4.9, 6.4, 4.9, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 7.8, 7.9, 8.4, 11.9, 11.7, 7.5, 2.8, 9.6, 'BYE', 2.9, 11.5, 8.9, 11.3, 5.0, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.9, 2.8, 1.7, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.5, 1.6, 3.7, 10.9, 10.5, 9.5, 4.8, 7.1, 9.2, 'BYE', 10.6, 8.3, 9.3, 10.0, 8.6, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 9.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 27,
    "avg_fp2": 5.73,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.71,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Zach Ertz caught 2-of-7 targets for 69 yards in Philadelphia's Week 15 loss\u00a0to\u00a0Arizona.\n",
    "report": "",
    "analysis": "He could have racked up more had he come down with a tough catch between double coverage in the end zone during the Eagles' final possession. Ertz's 69 receiving yards were still a team-high mark and the most he's recorded since returning from injured reserve in Week 13. Unfortunately, Jalen Hurts has splattered targets to everyone on the field, leaving Ertz as nothing more than a middle-of-the-road\u00a0TE2\u00a0with touchdown upside in Week 16 against the Cowboys.\n",
    "timestamp": "2020-12-21 03:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 6.7,
    "week03": 10.5,
    "week04": 4.9,
    "week05": 1.1,
    "week06": 5.3,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 4.1,
    "week14": 1.8,
    "week15": 7.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 6.7, 10.5, 4.9, 1.1, 5.3, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 4.1, 1.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 10.4, 11.4, 13.5, 10.7, 7.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 10.1, 5.1, 6.5, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 5.1, 3.2, 4.7, 3.8, 3.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.7, 2.3, 2.1, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 16.7, 13.8, 17.3, 17.6, 16.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 18.5, 16.5, 12.0, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 8.5,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 25,
    "avg_fp2": 8.54,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.42,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Logan Thomas caught 13-of-15 targets for 101 yards in Washington's Week 15 loss to Seattle.\n",
    "report": "",
    "analysis": "Down 20-3 with nearly a full two quarters left to play, Dwayne Haskins and Washington's offense were unsurprisingly forced to rear back for 55 pass attempts to strike a comeback. Thomas was the beneficiary of that game script, finishing with at least seven targets for the third consecutive game and leading the team's skill players in that category for the second straight week. Thomas was arguably open for even more opportunity than his\u00a0box score shows. He'll (continue to) be a unanimous TE1 in Week 16 against Carolina.\n",
    "timestamp": "2020-12-21 02:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.7,
    "week02": 4.6,
    "week03": 5.1,
    "week04": 1.3,
    "week05": 0.9,
    "week06": 11.7,
    "week07": 14.0,
    "week08": "BYE",
    "week09": 4.3,
    "week10": 8.6,
    "week11": 1.8,
    "week12": 11.42,
    "week13": 20.3,
    "week14": 7.3,
    "week15": 16.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 4.6, 5.1, 1.3, 0.9, 11.7, 14.0, 'BYE', 4.3, 8.6, 1.8, 11.42, 20.3, 7.3, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.6, 12.7, 4.8, 2.4, 6.2, 7.0, 'BYE', 7.2, 9.3, 9.5, 8.4, 6.2, 5.8, 5.7, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 2.4, 0.1, 0.0, 0.1, 0.1, 'BYE', 0.0, 0.9, 0.3, 0.5, 0.0, 0.0, 0.0, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 7.8, 7.7, 6.4, 4.5, 5.9, 5.7, 'BYE', 6.7, 5.9, 7.8, 7.5, 6.3, 6.7, 6.9, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 7.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 4,
    "avg_fp2": 6.94,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.21,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Hayden Hurst caught 4-of-5 targets for 21 yards and one touchdown in the Falcons' Week 15 loss to the Bucs.\n",
    "report": "",
    "analysis": "It was Hurst's first touchdown since Week 6, as he secured a seven-yarder in the second half, catching Matt Ryan's third touchdown of the day. His five targets were a distant third on the team behind Calvin Ridley and Russell Gage, who combined for 24 looks. Hurst will be more of a TE2 for next week's date with the Chiefs.\n",
    "timestamp": "2020-12-20 10:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 15.7,
    "week03": 6.6,
    "week04": 7.1,
    "week05": 1.8,
    "week06": 13.7,
    "week07": 9.8,
    "week08": 7.9,
    "week09": 9.7,
    "week10": "BYE",
    "week11": 0.0,
    "week12": 6.8,
    "week13": 1.4,
    "week14": 1.2,
    "week15": 10.1,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 15.7, 6.6, 7.1, 1.8, 13.7, 9.8, 7.9, 9.7, 'BYE', 0.0, 6.8, 1.4, 1.2, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.3, 8.3, 9.5, 5.7, 5.1, 10.1, 14.9, 7.5, 'BYE', 6.8, 11.9, 7.2, 12.7, 6.1, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.8, 1.6, 0.2, 1.2, 0.4, 0.0, 1.5, 'BYE', 4.4, 0.0, 0.0, 1.4, 0.9, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 7.1, 15.5, 9.5, 9.1, 7.0, 8.0, 9.7, 8.0, 'BYE', 10.6, 9.5, 9.3, 9.5, 9.7, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png",
    "name": "Cole Kmet",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 6.9,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 2.85,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 11.16,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Cole Kmet caught 2-of-2 targets for 12 yards in the Bears' Week 15 win over the Vikings.\n",
    "report": "",
    "analysis": "Kmet's matchup was good with the Vikings missing elite coverage LB Eric Kendricks, but the Bears held a lead for most of the game. Mitchell Trubisky only attempted\u00a021 passes. The rookie has passed the eye test but isn't quite on the TE2 radar with Jimmy Graham mixing in. The Bears' Week 16 matchup against the Jaguars is a good one at least.\n",
    "timestamp": "2020-12-20 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.7,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 9.0,
    "week07": 5.5,
    "week08": 0.7,
    "week09": 0.0,
    "week10": 1.2,
    "week11": "BYE",
    "week12": 1.3,
    "week13": 12.2,
    "week14": 6.1,
    "week15": 2.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.7, 0.0, 0.0, 0.0, 9.0, 5.5, 0.7, 0.0, 1.2, 'BYE', 1.3, 12.2, 6.1, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, -0.2, 6.2, -1.7, -2.1, -2.3, 1.2, 1.4, 2.6, 1.2, 'BYE', -0.4, 2.5, 5.6, 3.5, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 7.0, 4.6, 4.7, 6.5, 4.4, 0.0, 3.2, 7.0, 2.7, 'BYE', 5.7, 3.5, 7.4, 5.8, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123050.png",
    "name": "Chris Herndon",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 6.9,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 2.21,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.09,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Chris Herndon caught 3-of-4 targets for 48 yards in the Jets' Week 15 win against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Herndon came to life with 29 pass routes against LA, the tenth most of Week 15 among tight ends. He's still not a reliable fantasy option but it's good to see the promising young tight end -- who has struggled with confidence issues this season -- capitalize on rare opportunities. Herndon is 20th in tight end routes this season while playing two-thirds of the Jets' offensive snaps.\u00a0\n",
    "timestamp": "2020-12-21 03:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.7,
    "week02": 1.0,
    "week03": 3.6,
    "week04": 1.6,
    "week05": 3.4,
    "week06": 0.0,
    "week07": 0.0,
    "week08": -1.2,
    "week09": 0.0,
    "week10": "BYE",
    "week11": 10.2,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 1.4,
    "week15": 6.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 1.0, 3.6, 1.6, 3.4, 0.0, 0.0, -1.2, 0.0, 'BYE', 10.2, 0.0, 0.0, 1.4, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.7, 4.4, 11.2, 5.5, 5.6, 6.7, 6.0, 4.4, 'BYE', 6.9, 4.7, 7.7, -0.7, 2.4, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.3, 3.3, 0.4, 0.6, 12.1, 0.3, 0.3, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 9.7, 12.5, 6.2, 5.0, 16.9, 8.1, 8.4, 10.5, 'BYE', 9.8, 8.6, 7.2, 9.5, 8.3, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 6.8,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 7.19,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 8.11,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Back",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Eric Ebron (back) was held out of Wednesday's practice.\n",
    "report": "",
    "analysis": "Ebron exited Monday's game against the Bengals with the injury, and Tom Pelissero reported that the tight end did not suffer organ damage. Even needing to report that might tell us the status of Ebron ahead of Sunday. Check back later in the week for updates.\n",
    "timestamp": "2020-12-24 04:23 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 5.8,
    "week03": 13.7,
    "week04": "BYE",
    "week05": 4.8,
    "week06": 1.9,
    "week07": 8.0,
    "week08": 12.8,
    "week09": 9.7,
    "week10": 4.8,
    "week11": 11.6,
    "week12": 8.9,
    "week13": 10.3,
    "week14": 6.0,
    "week15": 0.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.8, 13.7, 'BYE', 4.8, 1.9, 8.0, 12.8, 9.7, 4.8, 11.6, 8.9, 10.3, 6.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 8.9, 7.2, 'BYE', 13.4, 7.7, 9.6, 7.9, 3.9, 13.0, 7.4, 9.5, 7.8, 9.3, 11.0, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.4, 3.3, 'BYE', 2.1, 3.8, 2.7, 2.2, 2.5, 2.5, 2.8, 2.5, 2.0, 2.4, 1.8, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 13.7, 13.9, 'BYE', 12.7, 13.8, 12.3, 12.8, 12.5, 13.0, 13.3, 13.1, 12.4, 12.3, 13.3, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 6.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 24,
    "avg_fp2": 9.09,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 9.56,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Mike Gesicki (shoulder) got in another \"limited\" practice on Wednesday.\n",
    "report": "",
    "analysis": "Gesicki missed Week 15 with the Dolphins craving pass catching talent. Hopefully he is trending in the right direction, as Gesicki would be an important addition inside the red zone for Tua Tagovailoa against a weak Raiders' defense.\n",
    "timestamp": "2020-12-24 05:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 23.0,
    "week03": 8.0,
    "week04": 2.0,
    "week05": 11.6,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 1.3,
    "week09": 5.7,
    "week10": 5.0,
    "week11": 6.3,
    "week12": 10.5,
    "week13": 19.3,
    "week14": 21.0,
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 23.0, 8.0, 2.0, 11.6, 0.0, 'BYE', 1.3, 5.7, 5.0, 6.3, 10.5, 19.3, 21.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 7.0, 11.1, 11.1, 5.1, 7.4, 'BYE', 6.5, 8.1, 3.5, 4.4, 8.1, 7.4, 9.4, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 1.1, 0.0, 0.0, 0.6, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 13.3, 12.4, 9.5, 12.3, 7.9, 'BYE', 9.6, 12.1, 9.0, 8.5, 11.0, 12.1, 12.6, 'DNP', 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 3.99,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 9.29,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Foot",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Jacob\u00a0Hollister caught both of his targets for 17 yards and a touchdown in the Seahawks' Week 15 win against the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Hollister, who continues to lead Seattle tight ends in pass routes, caught Russell Wilson's lone touchdown pass in Seattle's depressingly scaled down passing attack. Will Dissly did not see a target against Washington. Greg Olsen (foot) returning from injured reserve in the next week or two would end Hollister's fantasy relevance for now. Even without Olsen, he's a borderline streaming option in 14-team formats.\u00a0\n",
    "timestamp": "2020-12-21 03:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.4,
    "week02": 0.0,
    "week03": 8.6,
    "week04": 6.0,
    "week05": 2.5,
    "week06": "BYE",
    "week07": 2.8,
    "week08": 0.0,
    "week09": 2.3,
    "week10": 4.3,
    "week11": 3.0,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.4, 0.0, 8.6, 6.0, 2.5, 'BYE', 2.8, 0.0, 2.3, 4.3, 3.0, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 9.8, 13.6, 6.7, 8.6, 'BYE', 7.2, 5.0, 7.0, 3.9, 5.9, 'DNP', 'DNP', 'DNP', 'DNP', 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 2.4, 1.6, 3.0, 3.2, 'BYE', 2.1, 2.5, 2.5, 1.9, 1.5, 'DNP', 'DNP', 'DNP', 'DNP', 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 14.7, 15.7, 15.2, 15.0, 'BYE', 14.0, 14.1, 13.8, 14.3, 13.5, 'DNP', 'DNP', 'DNP', 'DNP', 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 6.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 5.23,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.84,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Dan Arnold caught 3-of-5 targets for 54 yards in Arizona's Week 15 win over Philadelphia.\n",
    "report": "",
    "analysis": "Arnold continued emerging as Kyler Murray's No. 2 target, exceeding 50 receiving yards for the second time in his last three games. He was afforded similar types of targets as DeAndre Hopkins, being entrusted to leap for numerous 50-50 chances over opposing linebackers downfield. Given his explosiveness, Arnold is trending towards ranking as a middling TE2 in a pinch in Week 16 against the 49ers.\n",
    "timestamp": "2020-12-21 04:09 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.6,
    "week03": 1.6,
    "week04": 5.9,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 6.7,
    "week08": "BYE",
    "week09": 2.1,
    "week10": 5.4,
    "week11": 6.9,
    "week12": 2.2,
    "week13": 19.1,
    "week14": 9.7,
    "week15": 6.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.6, 1.6, 5.9, 0.0, 0.0, 6.7, 'BYE', 2.1, 5.4, 6.9, 2.2, 19.1, 9.7, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 5.3, 4.4, 5.8, 2.9, 0.8, 2.8, 'BYE', 2.3, 1.1, 0.7, 2.5, 1.5, 4.4, 9.7, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 1.6, 0.0, 0.0, 1.2, 0.4, 'BYE', 3.0, 0.2, 3.0, 1.8, 0.0, 3.8, 0.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 7.7, 10.8, 10.0, 7.0, 9.7, 7.3, 'BYE', 4.8, 5.0, 7.3, 8.3, 6.9, 8.7, 5.1, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Backup: TE-2",
    "team": "Chicago Bears",
    "projected": 6.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 6.87,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 11.16,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Jimmy Graham caught 2-of-3 targets for 25 yards in the Bears' Week 15 win over the Vikings.\n",
    "report": "",
    "analysis": "Graham remains a threat inside the red zone, but he's splitting time with rookie Cole Kmet right now. It keeps the veteran off the redraft radar, even in great matchups like next week's. The Bears will face the tanking Jaguars. Kmet is the better overall play for those taking a dive deep into the depths of Lake TE2/3.\n",
    "timestamp": "2020-12-20 09:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 2.3,
    "week03": 21.0,
    "week04": 5.3,
    "week05": 10.8,
    "week06": 5.9,
    "week07": 5.6,
    "week08": 2.3,
    "week09": 14.5,
    "week10": 0.0,
    "week11": "BYE",
    "week12": 4.7,
    "week13": 0.0,
    "week14": 10.3,
    "week15": 3.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 2.3, 21.0, 5.3, 10.8, 5.9, 5.6, 2.3, 14.5, 0.0, 'BYE', 4.7, 0.0, 10.3, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 13.4, 16.8, 7.7, 9.1, 5.5, 9.8, 10.7, 15.5, 15.3, 'BYE', 6.9, 11.0, 5.9, 4.0, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.5, 1.3, 2.6, 1.8, 2.4, 1.3, 3.4, 3.1, 3.6, 'BYE', 2.6, 1.5, 1.1, 2.5, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 17.5, 14.7, 15.0, 13.8, 14.6, 13.5, 16.8, 17.2, 14.4, 'BYE', 14.5, 12.9, 13.9, 16.8, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Backup: TE-2",
    "team": "Cleveland Browns",
    "projected": 6.1,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 23,
    "avg_fp2": 3.26,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 14.8,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "David Njoku (knee) is active for Week 15 against the Giants.\n",
    "report": "",
    "analysis": "As is Austin Hooper. Njoku has been sprinkling in with Hooper and Harrison Bryant in the Browns' two-tight end sets. It's a committee that's worth avoiding in standard-sized leagues.\n",
    "timestamp": "2020-12-21 12:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 1.1,
    "week06": 1.2,
    "week07": 9.0,
    "week08": 2.4,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 1.0,
    "week14": 6.0,
    "week15": 2.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.5, 'DNP', 'DNP', 'DNP', 1.1, 1.2, 9.0, 2.4, 'BYE', 0.0, 0.0, 0.0, 1.0, 6.0, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 'DNP', 'DNP', 'DNP', 1.7, 1.5, 11.5, 6.5, 'BYE', 3.0, 1.6, 4.3, 5.9, 2.2, 5.1, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 'DNP', 'DNP', 'DNP', 1.3, 2.0, 1.1, 0.7, 'BYE', 1.7, 1.1, 0.0, 0.5, 0.0, 1.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 'DNP', 'DNP', 'DNP', 11.7, 12.5, 10.2, 11.0, 'BYE', 11.6, 10.1, 9.0, 8.0, 7.6, 10.5, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 6.1,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 8.3,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 7.97,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Jonnu Smith caught all five of his targets for 52 yards in the Titans' Week 15 win over the Lions.\n",
    "report": "",
    "analysis": "The 52 yards were Smith's most since Week 3, but he was still left out of the fun for the most part with the Titans scoring six offensive touchdowns. Ryan Tannehill's three scores, however, went to Corey Davis, A.J. Brown, and Darrynton Evans. Smith will be a TD-dependent TE1/2 next week against the Packers.\n",
    "timestamp": "2020-12-21 06:34 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 11.6,
    "week02": 22.4,
    "week03": 8.6,
    "week04": "BYE",
    "week05": 18.5,
    "week06": 1.8,
    "week07": 1.4,
    "week08": 3.9,
    "week09": 10.2,
    "week10": 8.5,
    "week11": 10.0,
    "week12": 0.0,
    "week13": "DNP",
    "week14": 3.3,
    "week15": 7.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.6, 22.4, 8.6, 'BYE', 18.5, 1.8, 1.4, 3.9, 10.2, 8.5, 10.0, 0.0, 'DNP', 3.3, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 10.0, 9.9, 'BYE', 10.3, 11.0, 9.0, 12.0, 8.7, 6.7, 7.3, 9.0, 'DNP', 3.7, 8.4, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 1.2, 'BYE', 0.0, 2.9, 1.7, 0.0, 0.0, 1.1, 1.3, 1.1, 'DNP', 5.5, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 9.5, 11.9, 'BYE', 7.5, 13.6, 12.5, 9.7, 9.2, 11.6, 10.6, 12.2, 'DNP', 12.8, 11.6, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128452.png",
    "name": "Jordan Akins",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 5.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 3,
    "avg_fp2": 5.26,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 11.56,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Jordan Akins caught 5-of-6 targets for 50 yards in the Texans' Week 15 loss to the Colts.\u00a0\n",
    "report": "",
    "analysis": "Both the catches and yards were Akins' most in four games. It is too little, too late for fantasy managers who were hoping for a production spike following Will Fuller's season-ending suspension. Akins will remain a barely-there TE2 for Week 16 against the Bengals.\u00a0\n",
    "timestamp": "2020-12-20 11:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.9,
    "week02": 9.0,
    "week03": 3.8,
    "week04": 6.1,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 2.9,
    "week10": 1.0,
    "week11": 10.8,
    "week12": 0.4,
    "week13": 2.0,
    "week14": 3.5,
    "week15": 7.5,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 9.0, 3.8, 6.1, 'DNP', 'DNP', 'DNP', 'BYE', 2.9, 1.0, 10.8, 0.4, 2.0, 3.5, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 4.8, 8.3, 8.3, 'DNP', 'DNP', 'DNP', 'BYE', 8.7, 4.6, 4.5, 8.4, 4.7, 7.9, 6.9, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.5, 1.1, 6.4, 'DNP', 'DNP', 'DNP', 'BYE', 0.7, 0.8, 0.0, 0.0, 1.1, 0.0, 0.4, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 10.1, 9.1, 11.6, 'DNP', 'DNP', 'DNP', 'BYE', 7.9, 6.7, 5.8, 6.6, 7.2, 9.3, 5.8, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15860.png",
    "name": "Jordan Reed",
    "depthchart": "Backup: TE-2",
    "team": "San Francisco 49ers",
    "projected": 5.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 6.68,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 8.31,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jordan Reed caught 2-of-5 targets for 18 yards and a touchdown in the 49ers Week 15 loss to the Cowboys.\n",
    "report": "",
    "analysis": "Reed is now averaging 5.2 targets per game across his previous five contests but only has one day above 32 yards in that span. If George Kittle is out for the 49ers' Week 16 matchup with the Cardinals, Reed would have some TE2 appeal. If he is able to return, Reed can safely be cut by fantasy managers.\n",
    "timestamp": "2020-12-20 11:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 20.5,
    "week03": 3.3,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.8,
    "week10": 8.7,
    "week11": "BYE",
    "week12": 2.8,
    "week13": 10.7,
    "week14": 2.3,
    "week15": 8.8,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 20.5, 3.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.8, 8.7, 'BYE', 2.8, 10.7, 2.3, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 2.5, 7.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 2.8, 'BYE', 12.3, 8.3, 8.1, 10.3, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 2.4, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.2, 5.1, 'BYE', 3.3, 2.3, 2.6, 1.9, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.0, 16.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.0, 17.6, 'BYE', 16.8, 17.2, 16.6, 16.0, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 5.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 21,
    "avg_fp2": 6.68,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.51,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Jared Cook caught 2-of-5 targets for 29 yards in the Saints' Week 15 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Drew Brees was nearly picked off in the end zone when he threw to Cook in triple coverage. Cook was second in targets for the Saints on a day where Brees spread out his 34 attempts. He had some kind of spat with Brees and Saints coaches after an intentional grounding call in the second half -- a play during which Cook was not on the same page with his QB. Cook will be a TE2 option in Week 16 against Atlanta. The Falcons have allowed the fifth most tight end receptions this season.\u00a0\n",
    "timestamp": "2020-12-21 02:43 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": 10.5,
    "week02": 8.3,
    "week03": 3.1,
    "week04": "DNP",
    "week05": 12.2,
    "week06": "BYE",
    "week07": 10.7,
    "week08": 13.6,
    "week09": 2.0,
    "week10": 0.0,
    "week11": 1.1,
    "week12": 0.0,
    "week13": 10.3,
    "week14": 11.2,
    "week15": 3.9,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 8.3, 3.1, 'DNP', 12.2, 'BYE', 10.7, 13.6, 2.0, 0.0, 1.1, 0.0, 10.3, 11.2, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.4, 'BYE', 13.2, 5.8, 7.4, 5.5, 5.1, 6.6, 4.1, 10.8, 10.9, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3, 'BYE', 1.6, 1.6, 1.7, 1.0, 0.6, 1.0, 0.0, 1.3, 3.4, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5, 'BYE', 13.4, 12.4, 13.5, 13.0, 14.9, 12.4, 11.5, 14.0, 13.2, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 4.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 3.53,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 6.09,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Trey Burton caught 1-of-2 targets for eight yards in the Colts' Week 15 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "Burton and Jack Doyle ran 15 pass routes while Mo Alie-Cox ran nine routes against Houston. All three guys saw two targets. None of the Colts' tight ends are fantasy viable unless fantasy managers have cracked the code for determining Indy tight end usage.\u00a0\n",
    "timestamp": "2020-12-21 05:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.4,
    "week02": "DNP",
    "week03": 0.0,
    "week04": 1.7,
    "week05": 0.0,
    "week06": 8.4,
    "week07": "BYE",
    "week08": 8.8,
    "week09": 0.0,
    "week10": "DNP",
    "week11": 7.1,
    "week12": 0.0,
    "week13": 1.7,
    "week14": 5.9,
    "week15": 2.4,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 0.0, 1.7, 0.0, 8.4, 'BYE', 8.8, 0.0, 'DNP', 7.1, 0.0, 1.7, 5.9, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 'DNP', 7.7, 4.4, 9.5, 1.2, 'BYE', 1.2, 1.7, 'DNP', 6.2, 5.9, 2.9, -1.6, 1.6, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 'DNP', 0.8, 0.6, 0.0, 5.0, 'BYE', 1.4, 0.7, 'DNP', 0.0, 0.0, 1.5, 2.0, 0.4, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 'DNP', 9.6, 11.4, 10.4, 14.1, 'BYE', 10.1, 10.6, 'DNP', 11.6, 9.8, 10.6, 10.2, 10.1, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9614.png",
    "name": "Marcedes Lewis",
    "depthchart": "Backup: TE-2",
    "team": "Green Bay Packers",
    "projected": 4.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 2.48,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.61,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Jace\u00a0Sternberger remains in the league's concussion protocol.\u00a0\n",
    "report": "",
    "analysis": "Sternberger missed Week 14 with concussion symptoms and looks likely to miss Week 15 against Carolina. Last week, Robert Tonyan played 61 percent of the team's offensive snaps and saw five targets while Marcedes Lewis played 57 percent of the snaps and had one target.\u00a0\n",
    "timestamp": "2020-12-17 07:54 PM",
    "source": "ESPN",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": 0.9,
    "week03": 8.3,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 0.0,
    "week07": 1.4,
    "week08": 0.0,
    "week09": 6.6,
    "week10": 0.0,
    "week11": 1.3,
    "week12": 8.6,
    "week13": 4.1,
    "week14": 1.1,
    "week15": 0.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.9, 8.3, 'DNP', 'BYE', 0.0, 1.4, 0.0, 6.6, 0.0, 1.3, 8.6, 4.1, 1.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 1.0, 1.0, 'DNP', 'BYE', -0.4, 1.3, 1.3, 0.3, 1.8, 1.6, 0.7, 1.3, 2.2, 2.7, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.4, 'DNP', 'BYE', 0.1, 0.5, 0.2, 0.3, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.2, 6.8, 'DNP', 'BYE', 9.3, 8.5, 8.1, 7.2, 8.3, 8.4, 7.9, 8.7, 6.8, 8.3, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 4.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 4.45,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 7.07,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox caught 2-of-4 targets for 36 yards and a touchdown in Week 15 against the Broncos.\n",
    "report": "",
    "analysis": "Knox\u00a0was left wide open for a nine-yard touchdown on the opening drive. He also added a 27-yard catch later in the game.\u00a0Knox\u00a0missed part of Week 14 with a neck injury and was sidelined for a few snaps with a stinger this week. The\u00a0Bills may limit his practice reps leading up to Week 16 against the Patriots.\n",
    "timestamp": "2020-12-20 02:09 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 3.6,
    "week02": 2.3,
    "week03": "DNP",
    "week04": 2.6,
    "week05": 2.0,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.0,
    "week10": 2.6,
    "week11": "BYE",
    "week12": 6.7,
    "week13": 10.7,
    "week14": 3.4,
    "week15": 10.6,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 2.3, 'DNP', 2.6, 2.0, 'DNP', 'DNP', 'DNP', 0.0, 2.6, 'BYE', 6.7, 10.7, 3.4, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 5.4, 'DNP', 'DNP', 'DNP', 10.3, 3.1, 'BYE', 4.7, 3.7, 8.3, 3.8, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2, 'DNP', 'DNP', 'DNP', 0.7, 1.3, 'BYE', 1.6, 0.8, 0.8, 1.6, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3, 'DNP', 'DNP', 'DNP', 6.0, 4.8, 'BYE', 6.7, 7.7, 5.7, 7.4, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 4.4,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 13,
    "avg_fp2": 7.37,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.97,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Tyler Higbee caught 4-of-5 targets for 67 yards and a touchdown in the Rams' Week 15 loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "Gifted a great matchup, Higbee responded with his best fantasy effort of the season. The fact that it was 4/67/1 tells you all you need to know about Higbee's 2020 following last year's monster finish. For Week 16, Higbee will be rematching with a Seahawks defense that coughed up his previous season high for yardage (60) in Week 10. He will flirt with top 20 status for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.5,
    "week02": 25.9,
    "week03": 7.0,
    "week04": 3.6,
    "week05": 2.2,
    "week06": 7.1,
    "week07": "DNP",
    "week08": 2.4,
    "week09": "BYE",
    "week10": 7.5,
    "week11": 4.0,
    "week12": 1.1,
    "week13": 10.4,
    "week14": 4.4,
    "week15": 14.7,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 25.9, 7.0, 3.6, 2.2, 7.1, 'DNP', 2.4, 'BYE', 7.5, 4.0, 1.1, 10.4, 4.4, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.5, 3.1, 8.1, 5.3, 4.9, 'DNP', 3.1, 'BYE', 6.8, 9.8, 4.9, 4.5, 6.9, 6.8, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 9.8, 0.0, 0.8, 0.0, 0.0, 'DNP', 5.9, 'BYE', 2.2, 0.3, 0.0, 0.0, 0.0, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 15.5, 10.1, 9.3, 13.5, 10.0, 'DNP', 14.9, 'BYE', 9.3, 9.1, 11.9, 9.9, 11.1, 9.0, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16974.png",
    "name": "Trey Burton",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 4.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 5.76,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 6.09,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Trey Burton caught 1-of-2 targets for eight yards in the Colts' Week 15 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "Burton and Jack Doyle ran 15 pass routes while Mo Alie-Cox ran nine routes against Houston. All three guys saw two targets. None of the Colts' tight ends are fantasy viable unless fantasy managers have cracked the code for determining Indy tight end usage.\u00a0\n",
    "timestamp": "2020-12-21 05:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.8,
    "week06": 19.9,
    "week07": "BYE",
    "week08": 8.6,
    "week09": 1.1,
    "week10": 3.9,
    "week11": 9.5,
    "week12": 11.7,
    "week13": 1.6,
    "week14": 0.0,
    "week15": 1.3,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 19.9, 'BYE', 8.6, 1.1, 3.9, 9.5, 11.7, 1.6, 0.0, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 4.0, 5.5, 'BYE', 10.8, 5.3, 6.0, 5.3, 3.2, 7.8, 4.2, 8.0, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.4, 0.7, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 7.4, 'BYE', 9.8, 11.2, 10.5, 11.4, 11.1, 9.6, 9.5, 9.0, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040980.png",
    "name": "Irv Smith",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 3.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 18,
    "avg_fp2": 5.38,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.06,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Kyle Rudolph (foot) is out for Week 16 against the Saints.\n",
    "report": "",
    "analysis": "It will be Rudolph's third straight missed game. Irv Smith hasn't exactly seized the day as a TE2 in Rudolph's absence, but he does have some top-20 juice for the fantasy finals. The Saints have not been quite as stingy up the seam as they are in some other areas of the field.\u00a0\n",
    "timestamp": "2020-12-24 07:17 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 8.4,
    "week06": 9.5,
    "week07": "BYE",
    "week08": 2.1,
    "week09": 14.0,
    "week10": "DNP",
    "week11": 3.3,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 14.3,
    "week15": 5.2,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 8.4, 9.5, 'BYE', 2.1, 14.0, 'DNP', 3.3, 'DNP', 'DNP', 14.3, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.9, 1.4, 1.6, 'BYE', 9.7, 9.7, 'DNP', 3.0, 'DNP', 'DNP', 6.0, 9.2, 3.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.1, 1.1, 2.0, 'BYE', 1.0, 0.3, 'DNP', 0.5, 'DNP', 'DNP', 1.1, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.2, 7.3, 8.3, 'BYE', 5.1, 5.4, 'DNP', 6.9, 'DNP', 'DNP', 6.7, 8.6, 9.2]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 8.1,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 29,
    "opp_avg_pts": 19.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 22.71,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.29,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears declared S Deon Bush, CB\u00a0Jaylon Johnson, RB Artavis Pierce, OL\u00a0Lachavious Simmons, and CB\u00a0Buster Skrine as inactive for Week 15 against the Vikings.\n",
    "report": "",
    "analysis": "Jaylon Johnson and Buster Skrine are both starters while Bush mixes in occasionally. He's mostly a special teamer. Not having two starting corners against the Vikings receivers is poor timing.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.14,
    "week01": 3.0,
    "week02": 14.0,
    "week03": 4.0,
    "week04": 2.0,
    "week05": 6.0,
    "week06": 9.0,
    "week07": 11.0,
    "week08": 1.0,
    "week09": 3.0,
    "week10": 12.0,
    "week11": "BYE",
    "week12": -4.0,
    "week13": 3.0,
    "week14": 17.0,
    "week15": 5.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 14.0, 4.0, 2.0, 6.0, 9.0, 11.0, 1.0, 3.0, 12.0, 'BYE', -4.0, 3.0, 17.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 7.3, 6.1, 6.1, 7.9, 6.8, 5.3, 6.4, 4.1, 7.2, 'BYE', 4.9, 8.2, 6.5, 6.7, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 3.8, 1.6, 1.7, 1.4, 2.4, 1.2, 0.6, 0.5, 0.6, 'BYE', 0.0, 0.3, 1.2, 1.3, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.4, 15.6, 14.5, 14.5, 14.4, 12.9, 12.8, 15.2, 12.1, 'BYE', 16.5, 12.1, 14.3, 14.5, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 8.0,
    "opponent": "New York Giants",
    "opp_rank_pts": 31,
    "opp_avg_pts": 17.43,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 20.5,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens activated DB Geno Stone from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "This means Baltimore has no players on its COVID list for the first time since November 12. The Ravens went through one of sports' largest outbreaks to date earlier this year, placing 23 players on the COVID list from November 23 to December 2, but Monday marks 40 consecutive days without a single positive test among personnel. Baltimore should be fully healthy if its able to clinch a playoff berth.\n",
    "timestamp": "",
    "source": "Jamison Hensley on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.64,
    "week01": 11.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 6.0,
    "week05": 20.0,
    "week06": 5.0,
    "week07": "BYE",
    "week08": 4.0,
    "week09": 8.0,
    "week10": 1.0,
    "week11": 3.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 0.0,
    "week15": 10.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 20.0, 5.0, 'BYE', 4.0, 8.0, 1.0, 3.0, 8.0, 3.0, 0.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 7.0, 7.7, 7.8, 10.0, 7.1, 'BYE', 8.2, 6.3, 6.6, 7.8, 5.0, 9.3, 6.9, 8.3, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 1.9, 3.9, 2.2, 1.3, 'BYE', 4.4, 0.8, 0.6, 0.0, 0.9, 1.7, 2.2, 3.4, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 16.7, 15.3, 16.4, 16.0, 14.0, 'BYE', 19.1, 14.2, 15.0, 13.9, 16.4, 12.9, 14.1, 16.6, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 7.1,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 30,
    "opp_avg_pts": 19.36,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 27.57,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.79,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans DT Brandon Dunn will miss the remainder of the season with a pelvic fracture.\n",
    "report": "",
    "analysis": "Signed to a new three-year deal in the offseason, Dunn started all 13 games and played 50% of the Texans' snaps this season before leaving on a cart in Week 14 against the Bears. He was re-signed to help replace NT D.J. Reader, who left for the Bengals in free agency.\n",
    "timestamp": "",
    "source": "Houston Chronicle",
    "game_day_logo": "",
    "avg_fp2": 2.71,
    "week01": 0.0,
    "week02": 3.0,
    "week03": 1.0,
    "week04": 2.0,
    "week05": 9.0,
    "week06": 2.0,
    "week07": -4.0,
    "week08": "BYE",
    "week09": 4.0,
    "week10": 5.0,
    "week11": 3.0,
    "week12": 10.0,
    "week13": 3.0,
    "week14": -1.0,
    "week15": 1.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.0, 1.0, 2.0, 9.0, 2.0, -4.0, 'BYE', 4.0, 5.0, 3.0, 10.0, 3.0, -1.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.4, 5.3, 6.3, 5.8, 4.5, 4.6, 'BYE', 6.6, 5.4, 5.2, 5.2, 5.0, 5.7, 5.2, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 0.3, 0.0, 0.2, 0.0, 'BYE', 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.3, 12.8, 13.3, 13.7, 12.8, 11.1, 'BYE', 13.1, 12.3, 12.9, 13.6, 12.8, 13.4, 13.0, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 7.1,
    "opponent": "New York Jets",
    "opp_rank_pts": 32,
    "opp_avg_pts": 14.71,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 26.29,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.07,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Denzel Ward (calf) is active for Week 15 against the Giants.\n",
    "report": "",
    "analysis": "Ward hasn't played since Week 11 but claims to be feeling \"great\". The Browns secondary, especially at safety, is gutted with injuries. Ward's return\u00a0a big bump for Cleveland's defense. The Browns declared\u00a0WR Marvin Hall, S Andrew Sendejo, CB Robert Jackson, LB Mack Wilson, G Wyatt Teller, and DE Joe Jackson as inactive. Austin Hooper will play.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.29,
    "week01": -2.0,
    "week02": 4.0,
    "week03": 14.0,
    "week04": 5.0,
    "week05": 7.0,
    "week06": 1.0,
    "week07": 7.0,
    "week08": 3.0,
    "week09": "BYE",
    "week10": 6.0,
    "week11": 14.0,
    "week12": 0.0,
    "week13": 5.0,
    "week14": 2.0,
    "week15": 8.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 4.0, 14.0, 5.0, 7.0, 1.0, 7.0, 3.0, 'BYE', 6.0, 14.0, 0.0, 5.0, 2.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0, 5.1, 5.6, 7.5, 'BYE', 6.1, 7.3, 6.2, 3.2, 5.9, 5.8, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4, 0.0, 0.9, 0.0, 'BYE', 0.9, 1.1, 1.4, 0.7, 0.7, 1.2, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3, 13.6, 11.2, 10.3, 'BYE', 11.9, 10.4, 11.7, 11.0, 11.1, 11.6, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 6.9,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 5,
    "opp_avg_pts": 29.07,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 21.5,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Patriots CB Stephon Gilmore (quad) will undergo season-ending surgery.\n",
    "report": "",
    "analysis": "Gilmore suffered a partially torn quad in Sunday's loss, which also knocked the Patriots out of postseason contention. He's still expected to be able to turn around for a portion of the team's offseason program since there was no structural damage found in his knee. It's obviously a long-term blow to the organization as Gilmore, who was shopped prior to the trade deadline, will have to make a full recovery before stepping back onto the field for his\u00a0contract year at the age of 30.\u00a0Veteran Jason McCourty will start opposite J.C. Jackson over the Patriots' last two games.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 6.14,
    "week01": 11.0,
    "week02": 0.0,
    "week03": 9.0,
    "week04": 4.0,
    "week05": "BYE",
    "week06": 9.0,
    "week07": 4.0,
    "week08": 3.0,
    "week09": 3.0,
    "week10": 5.0,
    "week11": 0.0,
    "week12": 5.0,
    "week13": 25.0,
    "week14": 4.0,
    "week15": 4.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 0.0, 9.0, 4.0, 'BYE', 9.0, 4.0, 3.0, 3.0, 5.0, 0.0, 5.0, 25.0, 4.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 7.7, 6.5, 4.4, 'BYE', 8.3, 6.9, 7.1, 9.3, 6.2, 7.2, 6.4, 4.9, 7.8, 6.5, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.3, 1.4, 0.9, 'BYE', 1.5, 2.7, 2.2, 2.7, 1.5, 1.8, 1.0, 1.6, 1.2, 2.6, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 15.6, 11.5, 13.1, 'BYE', 14.5, 15.7, 14.8, 15.4, 13.4, 13.5, 13.2, 13.3, 13.8, 14.3, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 6.7,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 17,
    "opp_avg_pts": 24.64,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 24.36,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks declared\u00a0DE Carlos Dunlap, S Ryan Neal, OT Cedric Ogbuehi, OL Jamarco Jones, G Phil Haynes and RB Travis Homer inactive for Week 14 against the Jets.\n",
    "report": "",
    "analysis": "No surprises here. Dunlap, who was a known game-time call, ultimately won't be able to turn around for kick-off. He should be considered questionable for Week 15.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.21,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 11.0,
    "week04": 5.0,
    "week05": 7.0,
    "week06": "BYE",
    "week07": 0.0,
    "week08": 7.0,
    "week09": 3.0,
    "week10": 5.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 7.0,
    "week14": 12.0,
    "week15": 9.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 11.0, 5.0, 7.0, 'BYE', 0.0, 7.0, 3.0, 5.0, 5.0, 9.0, 7.0, 12.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.5, 6.8, 5.6, 6.4, 'BYE', 5.0, 7.0, 6.4, 6.0, 7.7, 6.3, 7.3, 8.3, 6.7, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.7, 2.2, 1.2, 1.2, 'BYE', 0.6, 0.7, 0.0, 2.2, 0.0, 1.2, 1.5, 1.6, 2.2, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 15.6, 15.8, 14.2, 13.9, 'BYE', 13.4, 14.3, 12.4, 13.7, 15.0, 14.6, 15.6, 14.9, 14.3, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 6.7,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 26,
    "opp_avg_pts": 21.57,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 25.43,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers CB Donte Jackson (toe) is doubtful for Week 12 against the Vikings.\n",
    "report": "",
    "analysis": "A starting outside corner for Carolina, Jackson has been battling through a lingering toe injury for much of the season. He was carted with it in Week 5, re-injured it in Week 8, and had another setback recently. The Panthers defense remains one of the youngest in the NFL. At least they'll dodge Adam Thielen (COVID-19) on Sunday.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.71,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 11.0,
    "week04": 3.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": 3.0,
    "week08": 4.0,
    "week09": 2.0,
    "week10": 1.0,
    "week11": 17.0,
    "week12": 7.0,
    "week13": "BYE",
    "week14": 2.0,
    "week15": 5.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-1.0, 3.0, 11.0, 3.0, 5.0, 4.0, 3.0, 4.0, 2.0, 1.0, 17.0, 7.0, 'BYE', 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 6.5, 5.4, 6.2, 5.1, 7.5, 3.7, 5.5, 4.9, 8.1, 7.4, 5.9, 'BYE', 6.8, 4.1, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.4, 1.2, 0.9, 0.0, 1.9, 0.0, 1.6, 0.0, 1.8, 1.3, 0.3, 'BYE', 1.7, 0.2, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.5, 13.7, 13.6, 16.3, 13.1, 13.5, 13.5, 12.2, 14.3, 13.8, 11.8, 'BYE', 14.3, 13.8, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.5,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 10,
    "opp_avg_pts": 27.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 25.14,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.71,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.21,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Contract-year CB\u00a0Richard Sherman doesn't expect to re-sign with the 49ers.\n",
    "report": "",
    "analysis": "Sherman, who doesn't have an agent, said his doubts about remaining with the 49ers are based on the salary cap and conversations with the team. San Francisco is expected to prioritize\u00a0extensions for\u00a0LT Trent Williams\u00a0and LB Fred Warner this offseason, leaving them with limited cap space. 32-year-old Sherman spent nine weeks on IR with a calf injury, but has been productive when healthy, posting 14 tackles and an interception in three games. The five-time Pro Bowler will have interest from teams if he\u00a0reaches free agency.\n",
    "timestamp": "",
    "source": "ESPN",
    "game_day_logo": "",
    "avg_fp2": 4.86,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 12.0,
    "week04": 6.0,
    "week05": -2.0,
    "week06": 5.0,
    "week07": 17.0,
    "week08": -2.0,
    "week09": 0.0,
    "week10": 7.0,
    "week11": "BYE",
    "week12": 11.0,
    "week13": 2.0,
    "week14": 5.0,
    "week15": -2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 12.0, 6.0, -2.0, 5.0, 17.0, -2.0, 0.0, 7.0, 'BYE', 11.0, 2.0, 5.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.3, 6.4, 7.7, 8.5, 6.6, 4.3, 5.0, 3.9, 3.9, 'BYE', 7.2, 6.7, 7.5, 5.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.5, 1.2, 1.0, 0.8, 0.4, 0.0, 0.6, 0.1, 0.0, 'BYE', 0.2, 1.8, 0.8, 0.9, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 13.2, 13.4, 13.9, 13.7, 12.3, 14.3, 13.3, 13.6, 11.2, 'BYE', 12.7, 13.6, 12.8, 11.8, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 6.5,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 28,
    "opp_avg_pts": 19.86,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 27.79,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.14,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.21,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers coach Anthony Lynn said that DE\u00a0Joey Bosa (concussion) is unlikely to be shut down for the season.\n",
    "report": "",
    "analysis": "Bosa\u00a0in in the concussion protocol for the second time in\u00a0eight weeks. He has a few extra days to get ready\u00a0with the Chargers coming off a Thursday night game, but\u00a0his Week 16 status is up in the air.\u00a0Bosa should return for Week 17 if he doesn't get cleared this week.\u00a0\n",
    "timestamp": "",
    "source": "The Athletic",
    "game_day_logo": "",
    "avg_fp2": 3.64,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": -2.0,
    "week05": 3.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 3.0,
    "week09": 2.0,
    "week10": 1.0,
    "week11": 2.0,
    "week12": 9.0,
    "week13": -3.0,
    "week14": 9.0,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 4.0, -2.0, 3.0, 'BYE', 6.0, 3.0, 2.0, 1.0, 2.0, 9.0, -3.0, 9.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.8, 6.1, 7.4, 5.2, 'BYE', 6.9, 6.8, 6.2, 5.3, 7.6, 4.6, 5.2, 6.1, 5.4, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.4, 1.6, 1.2, 0.4, 'BYE', 1.6, 1.2, 0.7, 0.4, 1.2, 0.0, 1.0, 0.3, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.8, 13.5, 13.0, 12.3, 'BYE', 12.5, 12.0, 12.3, 12.0, 12.8, 10.5, 13.2, 12.5, 10.2, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 19,
    "opp_avg_pts": 23.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 22.93,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Bucs waived/injured S Justin Evans.\n",
    "report": "",
    "analysis": "Evans hasn't played since 2018 due to foot injuries. The 2017\u00a0second-rounder will revert to IR after he clears waivers.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.14,
    "week01": 0.0,
    "week02": 14.0,
    "week03": 16.0,
    "week04": 6.0,
    "week05": 6.0,
    "week06": 19.0,
    "week07": 6.0,
    "week08": 7.0,
    "week09": 1.0,
    "week10": 5.0,
    "week11": 4.0,
    "week12": 4.0,
    "week13": "BYE",
    "week14": 9.0,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0, 6.0, 19.0, 6.0, 7.0, 1.0, 5.0, 4.0, 4.0, 'BYE', 9.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.8, 5.2, 6.5, 9.1, 5.3, 7.6, 8.0, 6.7, 'BYE', 6.5, 6.2, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5, 1.2, 0.7, 2.3, 1.8, 1.0, 1.0, 1.2, 'BYE', 1.0, 1.4, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0, 14.8, 14.7, 15.6, 15.8, 14.5, 15.2, 14.7, 'BYE', 14.9, 14.5, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.3,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 14,
    "opp_avg_pts": 25.71,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 21.21,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints placed CB\u00a0Patrick Robinson (hamstring) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Robinson has been playing roughly 30 snaps per week, though that number has occasionally ballooned beyond 60. He was limited to six in Week 13 after aggravating his hamstring issue. Robinson\u00a0is ineligible to return before the regular season finale in Week 17.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "avg_fp2": 7.29,
    "week01": 11.0,
    "week02": 4.0,
    "week03": -3.0,
    "week04": 4.0,
    "week05": 3.0,
    "week06": "BYE",
    "week07": 1.0,
    "week08": 7.0,
    "week09": 16.0,
    "week10": 14.0,
    "week11": 16.0,
    "week12": 14.0,
    "week13": 6.0,
    "week14": 2.0,
    "week15": 7.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 4.0, -3.0, 4.0, 3.0, 'BYE', 1.0, 7.0, 16.0, 14.0, 16.0, 14.0, 6.0, 2.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.4, 'BYE', 4.9, 7.2, 5.4, 5.7, 6.1, 6.0, 6.1, 6.2, 6.2, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4, 'BYE', 1.1, 0.4, 1.0, 0.2, 0.4, 2.7, 5.8, 0.5, 2.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9, 'BYE', 12.1, 12.7, 13.2, 12.1, 12.1, 14.8, 16.5, 12.6, 13.3, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 6.2,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 20,
    "opp_avg_pts": 23.79,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 23.5,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals placed CB\u00a0Johnathan Joseph (neck)\u00a0on injured reserve.\n",
    "report": "",
    "analysis": "Joseph played under 30% of snaps in four appearances\u00a0after coming over from the Titans. He'll be sidelined at least the next three games with a stinger\u00a0but could return if the Cardinals make the postseason. Arizona activated starting DL Jordan Phillips and CB Kevin Peterson from IR in corresponding moves\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.29,
    "week01": 4.0,
    "week02": 11.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 7.0,
    "week06": 11.0,
    "week07": 7.0,
    "week08": "BYE",
    "week09": 2.0,
    "week10": 3.0,
    "week11": 2.0,
    "week12": 8.0,
    "week13": 2.0,
    "week14": 18.0,
    "week15": 8.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 11.0, 4.0, 1.0, 7.0, 11.0, 7.0, 'BYE', 2.0, 3.0, 2.0, 8.0, 2.0, 18.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.4, 6.8, 5.0, 7.1, 4.4, 4.6, 'BYE', 6.6, 6.3, 4.8, 3.9, 5.9, 5.3, 6.2, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.6, 1.1, 1.1, 1.0, 0.9, 'BYE', 0.6, 1.0, 1.5, 1.2, 0.4, 1.0, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 14.0, 13.2, 14.7, 12.8, 13.6, 13.3, 'BYE', 14.6, 13.5, 13.0, 14.3, 13.5, 13.5, 13.6, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 6.2,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 23,
    "opp_avg_pts": 22.5,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 30.21,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars declared\u00a0QB Jake Luton, CB Sidney Jones IV, CB Luq Barcoo, LB Quincy Williams, and DT Daniel Ross inactive for Week 15 against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "The Jaguars' secondary is one of the most beat up units in the league. With Greg Mabin and Josiah Scott expected to start in the secondary Sunday against Baltimore, Lamar Jackson's matchup could hardly be better.\u00a0\n",
    "timestamp": "",
    "source": "Jacksonville Jaguars on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 3.0,
    "week01": 6.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 3.0,
    "week07": -3.0,
    "week08": "BYE",
    "week09": 4.0,
    "week10": 11.0,
    "week11": 2.0,
    "week12": 4.0,
    "week13": 8.0,
    "week14": 2.0,
    "week15": -1.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 0.0, 2.0, 4.0, 3.0, -3.0, 'BYE', 4.0, 11.0, 2.0, 4.0, 8.0, 2.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 5.3, 7.0, 5.6, 6.1, 7.9, 3.6, 'BYE', 6.1, 4.1, 6.2, 5.5, 4.4, 3.6, 4.0, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.6, 1.2, 1.3, 0.4, 0.5, 'BYE', 0.3, 0.7, 1.2, 0.4, 0.5, 0.6, 0.2, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.8, 12.5, 12.3, 12.0, 11.9, 12.7, 'BYE', 11.7, 12.2, 11.6, 12.0, 12.1, 11.2, 11.7, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 6.1,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 4,
    "opp_avg_pts": 29.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 19.21,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.29,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams placed S\u00a0Juju Hughes on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Hughes played 31 snaps in Sunday's shocking loss to the Jets, so some contract tracing will be underway. A rookie UDFA, Hughes has typically\u00a0been providing 15-20 weekly plays for the Rams' impressive defense.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.21,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 12.0,
    "week06": 0.0,
    "week07": 12.0,
    "week08": 4.0,
    "week09": "BYE",
    "week10": 13.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 5.0,
    "week14": 15.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 4.0, 11.0, 12.0, 0.0, 12.0, 4.0, 'BYE', 13.0, 5.0, 9.0, 5.0, 15.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 8.4, 6.9, 6.4, 5.2, 'BYE', 6.4, 6.3, 7.5, 7.4, 6.7, 10.2, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2, 0.6, 0.3, 0.9, 'BYE', 1.1, 1.5, 1.1, 1.5, 0.0, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4, 14.8, 14.0, 14.2, 'BYE', 13.7, 14.7, 14.6, 14.0, 15.4, 12.9, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 6.1,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 22,
    "opp_avg_pts": 23.07,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 21.07,
    "team_ranked_takeaways": 23,
    "team_avg_takeaways": 1.21,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.64,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington signed LB Mychal Kendricks, formerly of the Seahawks.\n",
    "report": "",
    "analysis": "Washington was able to poach Kendricks from Seattle's practice squad since he wasn't two of its protected players this week. Although the veteran made 14 starts for the Seahawks last year, he's failed to crack the roster on game day at any point this year. Kendricks is admittedly a great mind to have in the room if Washington, injected with a core of premium pass rushers, is able to squeak out the NFC East crown and make a postseason appearance.\n",
    "timestamp": "",
    "source": "Washington Football Team on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.43,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 1.0,
    "week04": 4.0,
    "week05": 2.0,
    "week06": 6.0,
    "week07": 17.0,
    "week08": "BYE",
    "week09": 5.0,
    "week10": 0.0,
    "week11": 12.0,
    "week12": 9.0,
    "week13": 3.0,
    "week14": 11.0,
    "week15": 3.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 1.0, 4.0, 2.0, 6.0, 17.0, 'BYE', 5.0, 0.0, 12.0, 9.0, 3.0, 11.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.8, 6.7, 5.3, 6.5, 5.4, 5.5, 'BYE', 6.0, 5.1, 7.1, 4.9, 5.6, 5.1, 5.9, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 0.9, 0.4, 0.0, 1.2, 2.4, 'BYE', 1.4, 0.8, 1.3, 1.2, 1.7, 1.3, 0.9, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.7, 11.7, 11.2, 12.6, 11.4, 11.7, 'BYE', 11.5, 10.8, 11.1, 11.4, 11.9, 11.0, 11.4, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 6.0,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 22.21,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants activated James\u00a0Bradberry from\u00a0the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Bradberry, Pro Football Focus' No. 10 corner this season,\u00a0was initially placed on the team's COVID list as a\u00a0high-risk close contact because he was exposed to someone away from the team facility. He'll ultimately miss only one game as the Giants still have an outside shot of taking down the NFC East crown. Bradberry is expected to return to practice as early as Wednesday.\n",
    "timestamp": "",
    "source": "Around The NFL on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.64,
    "week01": 2.0,
    "week02": 9.0,
    "week03": -2.0,
    "week04": 5.0,
    "week05": 2.0,
    "week06": 12.0,
    "week07": 5.0,
    "week08": 4.0,
    "week09": 13.0,
    "week10": 4.0,
    "week11": "BYE",
    "week12": 9.0,
    "week13": 13.0,
    "week14": 1.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 9.0, -2.0, 5.0, 2.0, 12.0, 5.0, 4.0, 13.0, 4.0, 'BYE', 9.0, 13.0, 1.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.7, 5.9, 5.4, 5.9, 6.9, 5.1, 7.0, 7.6, 5.4, 'BYE', 6.5, 4.7, 6.5, 6.2, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.4, 1.0, 1.3, 0.0, 1.3, 1.0, 0.7, 1.3, 0.8, 'BYE', 1.1, 0.8, 0.9, 0.9, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 13.6, 13.4, 16.2, 13.5, 13.8, 13.9, 14.0, 13.6, 'BYE', 13.9, 13.7, 14.0, 13.2, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 5.9,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 26.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 22.71,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.71,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts DT\u00a0DeForest Buckner (ankle) didn't practice Friday and is questionable for Week 15 against the Texans.\u00a0\n",
    "report": "",
    "analysis": "The usually stout Indianapolis front seven has been far less imposing when Buckner has missed games this season. Buckner injured his ankle during Thursday's practice and missed Friday's practice entirely -- a bad sign for his Week 15 availability. His absence would be a boon for Deshaun Watson and the Houston offense.\u00a0\n",
    "timestamp": "",
    "source": "Mike Chappell on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.79,
    "week01": 4.0,
    "week02": 19.0,
    "week03": 14.0,
    "week04": 7.0,
    "week05": 11.0,
    "week06": 6.0,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 4.0,
    "week10": 2.0,
    "week11": 8.0,
    "week12": -3.0,
    "week13": 12.0,
    "week14": 6.0,
    "week15": 10.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 19.0, 14.0, 7.0, 11.0, 6.0, 'BYE', 9.0, 4.0, 2.0, 8.0, -3.0, 12.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.8, 8.6, 5.9, 6.5, 8.2, 'BYE', 6.8, 6.9, 4.4, 6.3, 6.9, 6.1, 5.6, 7.8, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 0.2, 2.7, 0.1, 1.5, 'BYE', 1.0, 1.3, 1.3, 1.1, 1.4, 1.1, 0.4, 1.4, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.2, 12.3, 14.1, 13.2, 12.9, 'BYE', 13.9, 12.7, 11.9, 12.3, 13.1, 12.7, 12.3, 12.5, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 5.9,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 15,
    "opp_avg_pts": 25.36,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 21.71,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.71,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs placed LB\u00a0Anthony Hitchens on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "NFL Network reports Hitchens was a \"close contact,\" and is not yet COVID positive himself. If that remains the case for the next five days, he will be eligible to play against the Falcons on Sunday. An every-week starter, Hitchens has played roughly two thirds of the Chiefs' snaps this season.\u00a0\n",
    "timestamp": "",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.0,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 14.0,
    "week05": -1.0,
    "week06": 5.0,
    "week07": 24.0,
    "week08": 9.0,
    "week09": 1.0,
    "week10": "BYE",
    "week11": 1.0,
    "week12": 5.0,
    "week13": 5.0,
    "week14": 14.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 7.0, 14.0, -1.0, 5.0, 24.0, 9.0, 1.0, 'BYE', 1.0, 5.0, 5.0, 14.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 7.6, 4.1, 6.6, 8.1, 6.6, 'BYE', 6.0, 5.7, 6.7, 6.5, 5.1, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5, 0.8, 0.0, 0.6, 1.4, 'BYE', 0.3, 0.2, 0.9, 0.9, 0.2, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7, 13.2, 13.5, 14.1, 14.0, 'BYE', 13.1, 14.5, 14.0, 13.0, 13.0, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 5.8,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 23.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 28.07,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 1.79,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos coach Vic Fangio said he's \"not optimistic\" LB Von Miller will return this year.\n",
    "report": "",
    "analysis": "Miller has yet to practice at any point this year, which would be the first step towards any miraculous return. At 5-9 and third in the AFC West, however, the Broncos are clearly better off keeping the 31-year-old preserved and off the field for the team's remaining two games. Miller is\u00a0expected to return at full health in the spring since he avoided a torn Achilles' when initially going down in September.\n",
    "timestamp": "",
    "source": "Ryan O'Halloran on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.43,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 3.0,
    "week04": 6.0,
    "week05": "BYE",
    "week06": 12.0,
    "week07": 2.0,
    "week08": 5.0,
    "week09": 3.0,
    "week10": -4.0,
    "week11": 12.0,
    "week12": 4.0,
    "week13": 1.0,
    "week14": 10.0,
    "week15": -1.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 3.0, 6.0, 'BYE', 12.0, 2.0, 5.0, 3.0, -4.0, 12.0, 4.0, 1.0, 10.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 5.2, 6.5, 6.9, 'BYE', 5.0, 5.7, 5.2, 4.6, 5.1, 6.9, 4.9, 4.4, 5.0, 7.2, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.5, 2.0, 1.4, 'BYE', 1.3, 1.3, 1.4, 1.0, 1.4, 1.3, 0.3, 0.9, 1.1, 1.1, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.4, 13.2, 13.3, 'BYE', 12.7, 13.7, 13.6, 12.9, 12.8, 13.4, 13.6, 12.3, 13.0, 13.0, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 5.8,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 12,
    "opp_avg_pts": 26.14,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 29.5,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets placed DT Quinnen Williams (neck, concussion) on injured reserve.\n",
    "report": "",
    "analysis": "This ends his season with only two games left.\u00a0Williams took a step forward in his second year, posting seven sacks, 55 tackles, and 10 TFLs as the anchor of the Jets' defensive line. There were rumors the Jets were shopping\u00a0Williams at the trade deadline, but the 23-year-old will likely be playing for a new coaching staff\u00a0this offseason. Williams has a $9 million cap number in 2021.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 3.0,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 2.0,
    "week06": 6.0,
    "week07": 5.0,
    "week08": -4.0,
    "week09": -1.0,
    "week10": "BYE",
    "week11": 6.0,
    "week12": 9.0,
    "week13": 5.0,
    "week14": -1.0,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 4.0, 0.0, 2.0, 2.0, 6.0, 5.0, -4.0, -1.0, 'BYE', 6.0, 9.0, 5.0, -1.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 5.1, 5.4, 6.3, 6.1, 4.2, 6.6, 4.9, 6.1, 'BYE', 5.2, 5.9, 6.1, 4.6, 6.3, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.2, 0.6, 1.1, 1.0, 0.0, 0.2, 0.0, 1.7, 'BYE', 0.0, 0.0, 0.0, 0.5, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.9, 11.9, 12.2, 12.8, 10.4, 11.1, 11.6, 12.5, 'BYE', 12.7, 10.1, 11.4, 13.2, 11.1, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 5.6,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 9,
    "opp_avg_pts": 28.07,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 19.0,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.29,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "The Pittsburgh Post Gazette reports Joe Haden (concussion) is likely to return in Week 15.\n",
    "report": "",
    "analysis": "Haden spent last week in the concussion protocol. He's expected to return to practice this week\u00a0and is on track for\u00a0Week 15's game with the Bengals. Playing on Monday night gives Haden an extra day to get cleared.\n",
    "timestamp": "",
    "source": "Pittsburgh Post-Gazette",
    "game_day_logo": "",
    "avg_fp2": 8.79,
    "week01": 8.0,
    "week02": 13.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 8.0,
    "week06": 18.0,
    "week07": 2.0,
    "week08": 12.0,
    "week09": 7.0,
    "week10": 12.0,
    "week11": 17.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 6.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 7.0, 'BYE', 8.0, 18.0, 2.0, 12.0, 7.0, 12.0, 17.0, 8.0, 3.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.8, 8.4, 'BYE', 8.0, 7.8, 4.6, 6.1, 7.4, 7.0, 8.1, 5.4, 8.8, 5.8, 8.7, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 2.1, 'BYE', 2.8, 1.1, 1.9, 1.9, 1.9, 2.1, 2.3, 3.3, 2.7, 2.3, 3.3, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.9, 14.7, 'BYE', 14.8, 14.9, 13.7, 15.0, 14.8, 14.7, 14.3, 14.6, 14.8, 14.4, 15.1, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 5.6,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 1,
    "opp_avg_pts": 31.14,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 24.21,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.71,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.21,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers CB Kevin King (achilles) is questionable for Week 12 against the Bears.\n",
    "report": "",
    "analysis": "The Packers troll us every week by listing dozens of players as limited in practice all week. King was one of those players on Thursday and Friday. It's unclear if he'll return after being ruled out late in the week ahead of the Packers' last game. With Mitchell Trubisky starting, the Packers likely could be fine without King if he's forced to miss another game.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 4.93,
    "week01": 5.0,
    "week02": 6.0,
    "week03": 3.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": -1.0,
    "week07": 6.0,
    "week08": 0.0,
    "week09": 6.0,
    "week10": 6.0,
    "week11": 4.0,
    "week12": 9.0,
    "week13": 10.0,
    "week14": 4.0,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 5.0, 'BYE', -1.0, 6.0, 0.0, 6.0, 6.0, 4.0, 9.0, 10.0, 4.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.0, 4.5, 6.2, 'BYE', 6.2, 5.0, 7.3, 4.5, 7.8, 6.6, 7.7, 6.6, 5.9, 6.4, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.1, 1.9, 0.8, 'BYE', 0.9, 4.8, 1.2, 0.9, 0.7, 1.2, 3.1, 0.9, 1.2, 1.7, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 14.0, 14.1, 13.7, 'BYE', 14.1, 17.7, 14.1, 14.0, 14.8, 14.0, 15.4, 14.6, 13.9, 14.3, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 5.5,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 11,
    "opp_avg_pts": 26.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 18.36,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins activated LB Kyle Van Noy from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Van Noy was placed on the team's COVID list only 48 hours ago but will be removed in time to suit up for Sunday's game against the Chargers. He has notably\u00a0played the most snaps among all of Miami's linebackers this year, grading at Pro Football Focus as the Dolphins' second-best player at that position. Antonio Callaway was also promoted to the active roster ahead of Week 10.\n",
    "timestamp": "",
    "source": "Miami Dolphins on Twitter",
    "game_day_logo": "",
    "avg_fp2": 8.79,
    "week01": 2.0,
    "week02": 4.0,
    "week03": 12.0,
    "week04": 3.0,
    "week05": 12.0,
    "week06": 15.0,
    "week07": "BYE",
    "week08": 17.0,
    "week09": 2.0,
    "week10": 4.0,
    "week11": 5.0,
    "week12": 14.0,
    "week13": 14.0,
    "week14": 10.0,
    "week15": 9.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 4.0, 12.0, 3.0, 12.0, 15.0, 'BYE', 17.0, 2.0, 4.0, 5.0, 14.0, 14.0, 10.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 7.4, 6.2, 4.1, 6.2, 7.0, 'BYE', 5.8, 5.8, 5.2, 6.1, 6.6, 7.1, 6.1, 5.6, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 2.9, 0.0, 0.7, 0.7, 'BYE', 0.0, 0.4, 0.3, 0.0, 0.2, 1.2, 0.5, 0.5, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 14.2, 10.5, 12.8, 13.5, 13.1, 'BYE', 12.6, 13.0, 11.3, 12.9, 13.1, 14.9, 13.0, 14.0, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.5,
    "opponent": "Houston Texans",
    "opp_rank_pts": 23,
    "opp_avg_pts": 22.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 25.36,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals placed DT Geno Atkins (shoulder) on injured reserve.\n",
    "report": "",
    "analysis": "This ends his season and potentially his career with the Bengals.\u00a0Atkins missed the first five weeks with shoulder issues. He never looked healthy when he returned, playing 14% of snaps in eight games. 32-year-old Atkins is signed through 2022, but the Bengals can save $9.6 million\u00a0from releasing him this offseason. The Bengals would clear $11.6 million with $2.6 million in dead money by making Atkins a post-June cut.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 3.0,
    "week01": 3.0,
    "week02": -2.0,
    "week03": 7.0,
    "week04": 5.0,
    "week05": 3.0,
    "week06": 2.0,
    "week07": -2.0,
    "week08": 4.0,
    "week09": "BYE",
    "week10": -4.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 3.0,
    "week14": 1.0,
    "week15": 8.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, -2.0, 7.0, 5.0, 3.0, 2.0, -2.0, 4.0, 'BYE', -4.0, 5.0, 9.0, 3.0, 1.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.1, 6.4, 6.4, 6.3, 5.5, 5.7, 5.6, 'BYE', 5.9, 6.7, 5.9, 5.1, 5.1, 6.4, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 2.4, 1.2, 0.0, 0.5, 0.3, 1.4, 0.3, 'BYE', 0.9, 1.2, 0.5, 0.8, 0.9, 0.6, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.4, 12.3, 14.3, 12.5, 13.1, 13.1, 11.7, 'BYE', 12.7, 13.2, 12.7, 12.8, 12.5, 12.1, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 5.4,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 18,
    "opp_avg_pts": 24.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 25.79,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 1.93,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles declared CB Darius Slay, QB Nate Sudfeld, WR J.J. Arcega-Whiteside, RB Jason Huntley, DB Grayland Arnold, and WR John Hightower inactive for Week 15 against the Cardinals.\n",
    "report": "",
    "analysis": "Nickell Robey-Coleman and Kevon Seymour will be forced into the lineup against DeAndre Hopkins and Co. since Slay couldn't clear the league's protocol in time. Jordan Howard will also be available in place of Huntley.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.36,
    "week01": 3.0,
    "week02": 1.0,
    "week03": 8.0,
    "week04": 12.0,
    "week05": -1.0,
    "week06": 14.0,
    "week07": 9.0,
    "week08": 14.0,
    "week09": "BYE",
    "week10": 3.0,
    "week11": 8.0,
    "week12": 2.0,
    "week13": 1.0,
    "week14": 9.0,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 1.0, 8.0, 12.0, -1.0, 14.0, 9.0, 14.0, 'BYE', 3.0, 8.0, 2.0, 1.0, 9.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 7.2, 7.1, 6.1, 6.1, 6.4, 7.2, 7.8, 'BYE', 6.1, 7.8, 4.6, 4.0, 5.6, 5.1, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 0.8, 3.4, 1.7, 2.2, 1.5, 2.1, 1.4, 'BYE', 2.3, 2.1, 1.5, 1.8, 1.9, 1.5, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 12.9, 15.0, 13.7, 14.6, 14.2, 14.4, 14.7, 'BYE', 14.6, 14.5, 14.2, 13.7, 14.0, 14.2, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 5.4,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 6,
    "opp_avg_pts": 28.64,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.07,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.14,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmTextLite": "#0076B6",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions placed DE\u00a0Everson Griffen on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Griffen has been playing in the neighborhood of 25-50 snaps since arriving from Dallas, notching three sacks in five games. His loss comes the same day the Lions placed CB Jeffrey Okudah on injured reserve with a groin injury. An already easy matchup for Aaron Rodgers has become downright comical. Reportedly COVID-19 positive and not just a \"close contact,\" Griffen will also miss Week 15.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 1.71,
    "week01": 1.0,
    "week02": -3.0,
    "week03": 7.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 4.0,
    "week07": 4.0,
    "week08": -2.0,
    "week09": 0.0,
    "week10": 4.0,
    "week11": 6.0,
    "week12": 0.0,
    "week13": 5.0,
    "week14": -1.0,
    "week15": -1.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, -3.0, 7.0, 0.0, 'BYE', 4.0, 4.0, -2.0, 0.0, 4.0, 6.0, 0.0, 5.0, -1.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 4.8, 4.3, 4.7, 'BYE', 6.9, 3.9, 6.2, 5.1, 5.7, 4.7, 4.7, 4.6, 4.1, 3.3, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.1, 0.1, 'BYE', 0.1, 0.0, 0.6, 0.4, 0.2, 0.0, 0.4, 0.3, 0.3, 0.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.6, 12.7, 12.8, 'BYE', 12.0, 11.3, 12.4, 12.6, 13.1, 12.7, 11.9, 13.0, 12.5, 12.0, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 5.4,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 2,
    "opp_avg_pts": 31.07,
    "home_away": "at ",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 25.21,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.71,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons CB\u00a0Darqueze Dennard (quad) is out for Week 15 against the Buccaneers.\n",
    "report": "",
    "analysis": "Dennard is the second outside corner for the Falcons, so he would've been defending Antonio Brown at times on Sunday. It's a slight upgrade for the Bucs all around, although they were already projecting really well. After not practicing at all, Dennard's season could be over. He's week to week.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.57,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 5.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 9.0,
    "week07": 2.0,
    "week08": 6.0,
    "week09": 3.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 22.0,
    "week13": 4.0,
    "week14": 4.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-1.0, 3.0, 5.0, 0.0, 0.0, 9.0, 2.0, 6.0, 3.0, 'BYE', 5.0, 22.0, 4.0, 4.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.3, 5.9, 4.2, 5.2, 5.0, 5.4, 5.9, 6.0, 'BYE', 3.9, 5.2, 5.6, 5.5, 5.6, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 1.2, 1.3, 1.3, 0.5, 0.7, 1.1, 1.2, 'BYE', 1.1, 0.0, 0.0, 0.3, 0.6, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 11.1, 11.7, 12.3, 11.9, 11.2, 12.1, 11.8, 12.5, 'BYE', 14.4, 12.5, 12.1, 12.0, 11.5, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 5.1,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 25,
    "opp_avg_pts": 21.64,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 30.79,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.86,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys activated CB Trevon Diggs (foot) from injured reserve.\n",
    "report": "",
    "analysis": "Diggs has spent the past five weeks on IR. He started all nine games before going down, posting 48 tackles and two interceptions in an every-down role. Diggs should match up with 49ers WR Brandon Aiyuk in Week 15.\n",
    "timestamp": "",
    "source": "Dallas Morning News",
    "game_day_logo": "",
    "avg_fp2": 3.86,
    "week01": 4.0,
    "week02": -3.0,
    "week03": 0.0,
    "week04": -2.0,
    "week05": 3.0,
    "week06": 1.0,
    "week07": 2.0,
    "week08": 12.0,
    "week09": 2.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 1.0,
    "week13": 2.0,
    "week14": 12.0,
    "week15": 15.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, -3.0, 0.0, -2.0, 3.0, 1.0, 2.0, 12.0, 2.0, 'BYE', 5.0, 1.0, 2.0, 12.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.8, 5.0, 5.8, 5.9, 3.9, 6.4, 6.3, 4.2, 'BYE', 4.3, 5.9, 4.4, 5.2, 5.8, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.4, 1.2, 1.0, 1.1, 1.3, 1.5, 1.1, 1.8, 'BYE', 0.0, 1.0, 1.3, 3.0, 0.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 14.2, 12.6, 12.1, 12.0, 12.8, 12.5, 12.4, 12.3, 'BYE', 11.7, 12.1, 12.0, 12.6, 12.1, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 5.0,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 16,
    "opp_avg_pts": 25.14,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 30.07,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.93,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders placed S Erik Harris on the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Harris has started 30 games over the last three seasons, playing 87% of the defensive snaps last season and 77% this year. It's unclear if Harris has tested positive or is a close contact. The Raiders host the Dolphins and go to Denver Weeks 16-17 to close out the season.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 2.29,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": -4.0,
    "week08": 9.0,
    "week09": 4.0,
    "week10": 16.0,
    "week11": -2.0,
    "week12": -1.0,
    "week13": 8.0,
    "week14": -4.0,
    "week15": 0.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 0.0, 0.0, 4.0, 'BYE', -4.0, 9.0, 4.0, 16.0, -2.0, -1.0, 8.0, -4.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.0, 3.2, 5.3, 5.2, 'BYE', 4.6, 5.7, 4.2, 5.0, 4.9, 4.0, 6.2, 3.1, 5.4, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 0.9, 0.0, 0.2, 'BYE', 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 11.3, 12.3, 11.4, 11.3, 'BYE', 10.3, 9.3, 10.8, 11.0, 11.2, 11.0, 11.1, 9.1, 11.0, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 4.6,
    "opponent": "New England Patriots",
    "opp_rank_pts": 27,
    "opp_avg_pts": 20.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 24.29,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills activated\u00a0LB Matt Milano (chest) from injured reserve.\n",
    "report": "",
    "analysis": "He'll\u00a0be eligible to play immediately on Monday night against the Niners. Coach Sean McDermott mentioned earlier in the week that LB A.J. Klein has been filling in with aplomb for\u00a0Milano since Week 9, perhaps leaving the door open to run the latter for minimal snaps as he works his way back from injury. Monday would\u00a0be Milano's sixth appearance this season.\n",
    "timestamp": "",
    "source": "Chris Brown on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 5.29,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 5.0,
    "week04": 6.0,
    "week05": -4.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 4.0,
    "week09": 12.0,
    "week10": 6.0,
    "week11": "BYE",
    "week12": 6.0,
    "week13": 4.0,
    "week14": 6.0,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 5.0, 6.0, -4.0, 1.0, 14.0, 4.0, 12.0, 6.0, 'BYE', 6.0, 4.0, 6.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.9, 4.8, 6.5, 6.4, 5.8, 4.8, 'BYE', 3.8, 4.9, 5.3, 8.3, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1, 0.7, 1.0, 0.0, 0.4, 0.0, 'BYE', 0.6, 0.7, 0.6, 1.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8, 13.8, 14.1, 14.3, 13.2, 13.1, 'BYE', 13.5, 13.4, 13.7, 14.4, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 4.0,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 31.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 25.79,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.93,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans CB Adoree' Jackson (knee) is questionable for Week 15 against the Lions.\n",
    "report": "",
    "analysis": "Jackson hasn't played all year and only got in limited practices this week. He's likely to be ruled out on Sunday, but he does seem closer to making his 2020 debut. The speedy corner needs his knee at near 100% to be effective.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 4.5,
    "week01": 3.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 8.0,
    "week06": 2.0,
    "week07": 6.0,
    "week08": -1.0,
    "week09": 8.0,
    "week10": 0.0,
    "week11": 3.0,
    "week12": 10.0,
    "week13": -2.0,
    "week14": 8.0,
    "week15": 6.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 7.0, 'BYE', 8.0, 2.0, 6.0, -1.0, 8.0, 0.0, 3.0, 10.0, -2.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.2, 5.7, 'BYE', 6.1, 6.1, 5.7, 6.4, 6.4, 4.5, 5.3, 4.4, 4.8, 6.8, 5.9, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 1.3, 'BYE', 0.0, 1.6, 0.5, 0.3, 0.9, 0.2, 0.0, 0.0, 0.0, 2.1, 0.8, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 12.9, 13.5, 'BYE', 13.7, 12.6, 13.3, 13.1, 13.6, 12.5, 13.3, 10.6, 13.3, 14.2, 13.8, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 3.8,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 27.71,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings LB\u00a0Eric Kendricks (calf) is out for Week 16 against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Troy Dye is also out, thinning the Vikings' depth. It will be Kendricks' fourth straight absence. It's a boost for Alvin Kamara after his quiet day in Drew Brees' Week 15 return. At this point, Kendricks should be considered doubtful for next week's finale.\u00a0\n",
    "timestamp": "",
    "source": "Chris Tomasson on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mqsqm4m0vsxerk2zp7ts",
    "avg_fp2": 4.21,
    "week01": -4.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": 6.0,
    "week06": 2.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 9.0,
    "week10": 10.0,
    "week11": 4.0,
    "week12": 4.0,
    "week13": 13.0,
    "week14": 0.0,
    "week15": 2.0,
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 3.0, 2.0, 5.0, 6.0, 2.0, 'BYE', 3.0, 9.0, 10.0, 4.0, 4.0, 13.0, 0.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 5.0, 6.0, 6.4, 4.7, 5.6, 'BYE', 3.8, 6.7, 6.0, 7.0, 6.7, 6.8, 5.6, 7.8, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.7, 0.4, 0.9, 1.3, 0.3, 'BYE', 0.4, 0.9, 1.0, 0.7, 0.8, 0.9, 1.0, 0.6, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.8, 14.1, 12.7, 14.0, 13.2, 'BYE', 13.0, 13.9, 13.5, 13.6, 13.4, 13.2, 14.0, 13.0, 13.0]
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