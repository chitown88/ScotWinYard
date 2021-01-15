var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Friday, 15 January 2021 09:12 AM (central time)"};
$scope.week = {"nflWeek": "Divisional Round"};
$scope.playoffLogo = {"src": "https://iconape.com/wp-content/png_logo_vector/nfl-afc-divisional-logo.png"}

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
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 25.32,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.6,
    "fanduelSalary": "$9200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Coach Andy Reid announced Patrick Mahomes will rest Week 17 against the Chargers, and Chad Henne will make the start.\n",
    "report": "",
    "analysis": "Kansas City has already locked up the No. 1 seed in the AFC and a first-round bye. Mahomes will essentially get two weeks off and sets his eyes on what the team hopes is a second straight Super Bowl title. 35-year-old Henne will be making his first start since 2014. Expect the Chiefs to rest a majority of their other key starters.\n",
    "timestamp": "2020-12-30 08:00 PM",
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
    "week16": 20.22,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [20.44, 27.48, 40.0, 20.24, 30.7, 20.6, 12.0, 36.64, 30.88, 'BYE', 22.52, 31.28, 19.32, 21.62, 25.86, 20.22, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [26.8, 20.8, 17.8, 31.6, 30.6, 22.4, 19.3, 25.4, 23.8, 'BYE', 21.6, 28.4, 31.3, 23.5, 25.1, 27.5, 'DNP', 'DNP', 26.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 17.6, 17.0, 15.9, 16.1, 17.6, 17.4, 19.2, 17.0, 'BYE', 16.0, 18.2, 16.3, 16.5, 18.0, 16.0, 'DNP', 'DNP', 16.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.3, 32.6, 32.2, 30.8, 32.3, 34.1, 32.6, 33.1, 32.3, 'BYE', 31.3, 32.4, 30.7, 29.9, 33.0, 32.3, 'DNP', 'DNP', 31.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 25.9,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 32,
    "avg_fp2": 22.85,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.27,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 17-of-24 pass attempts for 179 yards and an interception in the Ravens' Wild Card win over the Titans, adding 16 carries for 136 yards and a touchdown.\n",
    "report": "",
    "analysis": "Jackson opened the game with a duck on a deep attempt that was intercepted and things began to look like a repeat of his previous two meetings with the Titans, both of which Baltimore lost. He tightened up his passing but it was his rushing output that won the Ravens this game. Jackson got the Ravens their first score of the day with a 48-yard rushing touchdown. He also added carries for 23 and 33 yards in the second half. It may not have been his best performance through the air but it didn't have to be with the way he was blowing by defenders on the ground. The Ravens will move on to face either the Bills or the Chiefs in the Divisional Round. Jackson remains an elite DFS option for next week.\n",
    "timestamp": "2021-01-10 09:03 PM",
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
    "week16": 21.32,
    "week17": 25.22,
    "week18": 25.76,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.5, 17.56, 14.18, 26.02, 14.5, 28.24, 'BYE', 16.82, 18.6, 22.46, 17.54, 'DNP', 27.7, 34.92, 30.22, 21.32, 25.22, 25.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [28.5, 28.8, 27.5, 29.5, 23.5, 22.1, 'BYE', 17.7, 19.9, 23.1, 27.5, 'DNP', 26.8, 19.5, 19.0, 23.9, 25.5, 25.7, 25.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [18.1, 16.9, 23.4, 20.7, 15.4, 14.3, 'BYE', 18.0, 12.9, 13.9, 16.0, 'DNP', 15.9, 23.0, 19.3, 17.7, 18.4, 19.0, 13.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.5, 27.6, 39.2, 34.6, 26.8, 29.6, 'BYE', 34.7, 27.5, 28.9, 30.8, 'DNP', 35.0, 30.3, 38.9, 35.7, 33.0, 32.8, 31.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 22.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 21.84,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.13,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 22-of-40 passes for 381 yards and two touchdowns in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "As normal, Brady was a constant chain mover and avoided mistakes for all four quarters. He was under pressure in the second half after losing his starting right guard, but the Bucs offense looked fine overall despite Washington's front four and Ronald Jones' unexpected absence. Brady will be asked to pass a lot in the Divisional Round regardless of opponent. Right now, the Bucs are expected to head to New Orleans.\n",
    "timestamp": "2021-01-10 05:13 AM",
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
    "week16": 29.92,
    "week17": 31.26,
    "week18": 23.04,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46, 14.12, 14.64, 36.86, 19.06, 5.36, 31.84, 14.24, 23.7, 'BYE', 15.64, 23.4, 29.92, 31.26, 23.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 17.2, 19.7, 19.5, 21.4, 20.7, 15.5, 19.2, 20.1, 'BYE', 19.7, 24.7, 24.2, 20.1, 16.8, 22.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4, 11.6, 14.5, 13.9, 11.5, 11.2, 10.4, 10.2, 'BYE', 10.4, 12.8, 10.8, 12.4, 9.4, 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8, 27.6, 28.8, 27.6, 26.2, 26.3, 25.6, 25.3, 'BYE', 26.9, 26.7, 25.7, 28.3, 26.1, 25.7]
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
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 24.23,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.37,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers QB Aaron Rodgers was voted\u00a0first-team\u00a0All-Pro by the\u00a0Associated Press.\n",
    "report": "",
    "analysis": "This is the third All-Pro selection for Rodgers, who beat out Patrick Mahomes and Josh Allen. It's also a strong sign Rodgers will be voted MVP later this month. Rams DT\u00a0Aaron Donald and Chiefs TE Travis Kelce were the only\u00a0unanimous picks. Titans RB\u00a0Derrick Henry,\u00a0Packers WR Davante Adams, and\u00a0Bills WR\u00a0Stefon Diggs all made the team as first-time selections.\n",
    "timestamp": "2021-01-08 05:42 PM",
    "source": "AP News",
    "game_day_logo": "",
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
    "week16": 26.14,
    "week17": 26.0,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [30.76, 18.7, 24.52, 29.58, 'BYE', 5.8, 27.32, 22.54, 28.9, 26.4, 22.74, 25.64, 23.5, 30.9, 18.32, 26.14, 26.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 24.8, 26.3, 27.1, 'BYE', 16.5, 21.8, 26.4, 21.1, 23.0, 18.3, 18.9, 24.5, 22.9, 29.6, 19.2, 22.3, 'DNP', 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 13.8, 9.5, 14.4, 'BYE', 12.6, 15.7, 14.1, 12.2, 15.2, 13.7, 11.5, 14.1, 13.9, 14.3, 18.4, 12.4, 'DNP', 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.7, 30.7, 32.1, 29.9, 'BYE', 27.5, 28.6, 30.2, 28.0, 29.5, 26.4, 29.0, 30.8, 30.3, 30.9, 28.9, 28.5, 'DNP', 29.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 21.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 19,
    "avg_fp2": 17.96,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.21,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Taysom Hill (knee) didn't practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's looking more and more likely like Sean Payton will be without his favorite gadget player for the Saints' Divisional Round tilt against Tampa. Hill, of course, has a shot to play if he can log a limited Friday practice. Hill's absence would be a considerable goal line boon for both Drew Brees and Alvin Kamara.\u00a0\n",
    "timestamp": "2021-01-14 09:30 PM",
    "source": "Nick Underhill on Twitter ",
    "game_day_logo": "",
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
    "week16": 10.14,
    "week17": 20.04,
    "week18": 18.8,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 15.48, 23.52, 16.54, 22.1, 'BYE', 23.68, 19.6, 22.68, 6.94, 'DNP', 'DNP', 'DNP', 'DNP', 20.36, 10.14, 20.04, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.8, 22.8, 18.5, 21.3, 19.1, 'BYE', 19.7, 13.3, 22.3, 21.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.9, 19.5, 18.0, 24.1, 21.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 14.7, 9.6, 11.3, 10.4, 'BYE', 11.8, 10.8, 11.7, 10.4, 'DNP', 'DNP', 'DNP', 'DNP', 11.1, 10.6, 8.5, 11.3, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 30.5, 27.9, 28.4, 25.9, 'BYE', 26.6, 26.9, 26.9, 27.8, 'DNP', 'DNP', 'DNP', 'DNP', 27.1, 27.6, 26.4, 27.2, 25.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 17.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 16.86,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.76,
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
    "headlineNews": "Jared Goff (thumb) has been removed from the final Divisional Round injury report and will start against the Packers.\u00a0\n",
    "report": "",
    "analysis": "John Wolford (neck) has been declared out, so it will be Blake Bortles backing Goff up in the Frozen Tundra of Green Bay. Goff appeared mostly healthy after being thrust into duty against the Seahawks, but the Rams' mid-week needle thread \u2014\u00a0Goff was healthy enough for backup duties but not quite ready to start \u2014 actually appeared true instead of being coachspeak to justify sitting\u00a0a starter. With another seven days of healing under his belt, hopefully Goff's ball placement will be there against the Packers' stingy pass defense. The Rams are going to try to ride Cam Akers to the upset. The Pack are far more vulnerable on the ground.\u00a0\n",
    "timestamp": "2021-01-14 09:21 PM",
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
    "week16": 10.66,
    "week17": "DNP",
    "week18": 10.6,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [11.5, 23.98, 28.24, 11.7, 25.36, 15.92, 16.86, 12.2, 'BYE', 10.48, 25.04, 5.02, 24.14, 15.58, 16.26, 10.66, 'DNP', 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.2, 15.9, 16.5, 21.4, 16.7, 19.4, 11.9, 22.5, 'BYE', 18.6, 15.7, 14.4, 15.2, 11.7, 20.5, 15.5, 'DNP', 2.6, 17.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 12.7, 8.1, 15.3, 9.3, 12.3, 8.9, 9.0, 'BYE', 12.9, 8.6, 9.0, 9.8, 5.8, 8.9, 14.3, 'DNP', 8.1, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 26.2, 24.5, 26.9, 23.3, 25.2, 17.9, 25.8, 'BYE', 26.3, 22.7, 25.0, 24.6, 22.5, 24.0, 24.9, 'DNP', 25.3, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 16.5,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 25.35,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.57,
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
    "headlineNews": "Josh Allen completed 26-of-35 passes for 324 yards and two touchdowns in the Bills' 27-24 Wild Card Weekend in against the Colts, adding 11 rushes for 54 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Allen started slow but picked apart the Colts' secondary through much of the second half. He had a handful of designed runs -- including a beautifully executed read-option touchdown run at the goal line --\u00a0in Buffalo's first postseason victory since the first Clinton administration. Allen demonstrated his arm strength and willingness to take chances on several first half throws, proving unstoppable with Stefon Diggs once again wrecking an opposing secondary. Allen will look to continue gunslinging his way toward a Super Bowl next week in the Divisional Round.\u00a0\n",
    "timestamp": "2021-01-09 09:52 PM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 32.3,
    "week17": 20.26,
    "week18": 32.36,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [28.18, 34.48, 32.24, 25.42, 18.32, 16.08, 16.38, 13.46, 36.0, 28.86, 'BYE', 16.48, 30.1, 19.32, 37.66, 32.3, 20.26, 32.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 23.8, 19.8, 18.7, 17.2, 20.8, 21.6, 'BYE', 24.5, 21.1, 26.2, 24.0, 19.8, 22.7, 21.2, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7, 9.3, 8.5, 11.2, 13.1, 8.8, 'BYE', 10.3, 10.8, 9.6, 12.9, 10.6, 11.3, 11.2, 12.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1, 25.0, 24.9, 28.2, 29.9, 28.6, 'BYE', 29.0, 30.2, 29.0, 28.7, 30.7, 31.8, 30.7, 28.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 16.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 24,
    "avg_fp2": 16.01,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 20.34,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Baker Mayfield completed 21-of-34 passes for 263 yards and three touchdowns in Cleveland's 48-37\u00a0Wild Card win against the Steelers.\n",
    "report": "",
    "analysis": "It was the organization's\u00a0first playoff win since 1995 and first road postseason win in 52 years. Cleveland opened the half\u00a0with a commanding 35-10 lead, tying the team record for the most points in any half of a playoff game, due to a fumble-six following\u00a0Mike Pouncey's first (poor) snap from scrimmage and tacking on a 40-yard touchdown pass to Jarvis Landry (5/92/1) and two touchdown scampers\u00a0from Kareem Hunt. Pittsburgh made it interesting in the third quarter, scoring 13 unanswered to close the gap to a 35-23 deficit, but coach Mike Tomlin cowardly punted the ball back to Cleveland on 4th-and-6 to start\u00a0the fourth quarter and could only watch as Nick Chubb housed a 40-yard touchdown pass from Mayfield on the Browns' sixth play of the possession. Cleveland's injury-riddled o-line also kept Mayfield clean without a single pressure permitted throughout the game. The Browns will take the night to celebrate this one before returning in the Divisional Round against the Chiefs.\n",
    "timestamp": "2021-01-11 04:51 AM",
    "source": null,
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
    "week16": 8.0,
    "week17": 16.24,
    "week18": 22.82,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.86, 16.26, 14.34, 15.2, 17.58, 7.26, 30.78, 7.78, 'BYE', 5.38, 7.06, 18.42, 28.96, 31.02, 20.98, 8.0, 16.24, 22.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 13.9, 14.6, 18.4, 25.9, 'BYE', 17.0, 14.6, 15.1, 25.1, 13.3, 15.7, 22.9, 15.8, 13.1, 16.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1, 11.8, 11.7, 12.8, 'BYE', 11.8, 9.6, 11.7, 9.6, 10.2, 12.3, 11.3, 5.5, 9.9, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4, 21.0, 19.1, 23.3, 'BYE', 21.7, 23.4, 24.2, 22.0, 23.1, 25.0, 25.1, 20.2, 23.2, 19.2]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 23.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 6,
    "avg_fp2": 22.42,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Latavius Murray (quad) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "NFL Network's Ian Rapoport said Wednesday that Murray's status for the Divisional Round was \"up in the air\" as he struggles through his thigh injury. Missing a late-week practice isn't the best development for Murray, but he probably has a shot to suit up against the Bucs. Either way, Alvin Kamara should be expected to dominate backfield touches.\u00a0\n",
    "timestamp": "2021-01-14 09:26 PM",
    "source": "Nick Underhill on Twitter ",
    "game_day_logo": "",
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
    "week16": 54.7,
    "week17": "DNP",
    "week18": 18.6,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.2, 33.9, 38.2, 19.4, 15.9, 'BYE', 18.8, 20.8, 13.4, 31.3, 10.5, 5.7, 16.7, 18.9, 16.9, 54.7, 'DNP', 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 19.4, 22.1, 18.6, 21.2, 'BYE', 21.9, 15.5, 19.1, 21.5, 17.6, 17.2, 17.0, 24.2, 18.3, 25.0, 'DNP', 19.2, 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 6.6, 6.4, 10.0, 11.4, 'BYE', 10.5, 11.2, 8.6, 9.2, 9.6, 9.7, 9.7, 8.8, 11.1, 10.1, 'DNP', 9.1, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 24.0, 25.1, 27.6, 27.9, 'BYE', 28.5, 29.9, 24.6, 24.7, 26.4, 24.8, 25.1, 24.4, 27.5, 26.4, 'DNP', 26.0, 35.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 16.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 8,
    "avg_fp2": 16.81,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.1,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Jones rushed 11 times for 42 yards and a touchdown in the Packers' Week 17 win over the Bears, adding four receptions for 43 yards.\u00a0\n",
    "report": "",
    "analysis": "No other Green Bay back saw more than five carries on the day. Jones' pass game involvement was encouraging even with the return of Jamaal Williams, who had eaten into Jones' passing down opportunity this season. Jones missed two games this season and still finished third in rushing yardage. He'll continue to be a central part of the Packers' offense when they start their Super Bowl push after their first round bye.\u00a0\n",
    "timestamp": "2021-01-04 01:18 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 11.8,
    "week17": 16.5,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 43.6, 15.6, 19.6, 'BYE', 11.6, 'DNP', 'DNP', 10.4, 12.0, 15.1, 9.5, 22.3, 8.5, 23.3, 11.8, 16.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 18.4, 17.3, 16.7, 'BYE', 13.6, 'DNP', 'DNP', 14.3, 17.3, 15.3, 12.5, 13.5, 20.2, 14.0, 15.0, 10.7, 'DNP', 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 3.4, 3.8, 8.9, 'BYE', 3.1, 'DNP', 'DNP', 4.6, 18.0, 1.2, 4.6, 4.4, 4.9, 6.2, 4.1, 3.9, 'DNP', 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.8, 23.7, 24.1, 21.9, 'BYE', 27.7, 'DNP', 'DNP', 25.7, 32.5, 27.6, 25.4, 25.2, 26.3, 27.7, 23.7, 20.8, 'DNP', 24.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 14.3,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 10,
    "avg_fp2": 7.41,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.52,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cam Akers rushed 28 times for 131 yards and a touchdown in the Rams' Wild Card win over the Seahawks, adding two receptions for 45 additional\u00a0yards.\u00a0\n",
    "report": "",
    "analysis": "Akers supposedly suffered a high-ankle sprain in Week 15, but he was surprisingly left off the final injury report on Thursday, suggesting 100 percent health\u00a0for the playoffs. That indeed appeared to be the case, as Akers was the best offensive player in an ugly slugfest where both passing games were completely inept. Running with Peterson-ian power, Akers' ankle was not hindering him going side to side. With Jared Goff (thumb) still nowhere close to 100 percent healthy, Akers \u2014 who has cleared 170 yards from scrimmage twice in his past four games \u2014 will undoubtedly remain the Rams' offensive engine for the Divisional Round.\u00a0\u00a0\n",
    "timestamp": "2021-01-10 01:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 1.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 6.1,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 5.9,
    "week09": "BYE",
    "week10": 3.8,
    "week11": 8.4,
    "week12": 14.4,
    "week13": 15.9,
    "week14": 20.4,
    "week15": 6.7,
    "week16": "DNP",
    "week17": 8.6,
    "week18": 24.6,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [4.8, 1.3, 'DNP', 'DNP', 6.1, 0.0, 0.0, 5.9, 'BYE', 3.8, 8.4, 14.4, 15.9, 20.4, 6.7, 'DNP', 8.6, 24.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.0, 'DNP', 'DNP', 4.2, 2.3, 3.3, 3.3, 'BYE', 2.3, 0.7, 2.4, 5.9, 12.0, 14.4, 'DNP', 12.7, 10.1, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 'BYE', 0.1, 0.3, 0.1, 0.2, 1.6, 4.9, 'DNP', 0.9, 1.0, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 7.5, 'DNP', 'DNP', 8.2, 10.1, 9.8, 11.3, 'BYE', 5.5, 5.2, 5.1, 10.5, 10.6, 16.4, 'DNP', 11.8, 13.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 14.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 3,
    "avg_fp2": 16.64,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.59,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nick Chubb rushed 18 times for 76 yards, hauling in all four of his targets for (a nice) 69 receiving yards and one score in Cleveland's Wild Card domination of the Steelers.\n",
    "report": "",
    "analysis": "Chubb opened the game on fire, rocketing to 17- and 20-yard gains with\u00a0his first two carries. The Steelers nearly held him in check from that point forward, limiting him to 39 yards and 2.4 YPC for the rest of the game, but interim play-caller\u00a0Alex Van Pelt intelligently kept the 25-year-old involved as a receiver, allowing Chubb to house\u00a0a 40-yard screen pass following coach Mike Tomlin's cowardly decision to punt the ball on 4th-and-6 while trailing 35-23 to open the fourth quarter. Chubb's 22 touches were\u00a0his most since Week 12, out-carrying Kareem Hunt 18-8. Chubb will\u00a0return in the Divisional Round against the Chiefs as a strong option for any contrarian DFS builds.\n",
    "timestamp": "2021-01-11 05:05 AM",
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
    "week16": 15.1,
    "week17": 16.8,
    "week18": 22.5,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 25.8, 23.5, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.6, 11.4, 25.1, 17.1, 23.3, 13.6, 15.1, 16.8, 22.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.3, 10.9, 10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.8, 11.4, 16.6, 11.2, 12.1, 14.5, 9.7, 14.7, 13.4, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 3.5, 2.6, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.1, 3.5, 4.8, 6.2, 4.8, 5.0, 4.1, 3.7, 4.5, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.8, 18.1, 23.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 22.7, 18.9, 21.0, 24.5, 23.8, 21.6, 22.5, 24.3, 23.2, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 13.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 20,
    "avg_fp2": 7.78,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.04,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills added RB\u00a0Devonta Freeman to their practice squad.\u00a0\n",
    "report": "",
    "analysis": "The former Falcons and Giants\u00a0running back will join Buffalo's practice squad after the team lost rookie Zack Moss to a season-ending ankle injury last week against the Colts. The Bills' running back depth chart includes Devin Singletary -- who will operate as the primary ball carrier with Moss sidelined -- T.J. Yeldon, and Taiwan Jones. Yeldon was a healthy scratch last week against the Colts. Freeman, 28, was the Giants' lead back from Week 4-6, seeing 53 touches over that stretch. Probably he won't be active this week against Baltimore.\u00a0\n",
    "timestamp": "2021-01-12 02:44 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "",
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
    "week16": 6.2,
    "week17": 1.8,
    "week18": 5.9,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [7.8, 8.6, 14.1, 16.1, 3.8, 5.0, 5.7, 9.7, 4.9, 1.5, 'BYE', 9.7, 9.8, 3.9, 15.9, 6.2, 1.8, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 14.2, 19.5, 12.0, 11.0, 8.5, 7.6, 'BYE', 12.3, 8.1, 10.7, 10.4, 13.6, 8.3, 13.2, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1, 7.9, 5.1, 3.7, 5.4, 5.5, 'BYE', 4.2, 5.4, 6.9, 4.3, 5.0, 5.6, 4.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1, 16.9, 14.9, 14.4, 15.4, 14.9, 'BYE', 15.8, 16.6, 14.6, 13.2, 15.5, 14.0, 15.9, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 12.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 12.15,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.05,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde Edwards-Helaire (hip) was downgraded to \"DNP\" on Thursday.\u00a0\n",
    "report": "",
    "analysis": "CEH was limited on Wednesday coming off the Chiefs' bye week. It's possible this is part of a pre-planned routine to manage CEH's reps, but it's still a bad sign for a player who went down in Week 15. Edwards-Helaire should now be considered on the wrong side of questionable for Sunday's Divisional Round showdown with the Browns. His absence would leave Le'Veon Bell and Darrel Williams to sort out touches in the Chiefs' backfield. The last time things mattered for the Chiefs in Week 16, coach Andy Reid featured Williams over Bell.\u00a0\n",
    "timestamp": "2021-01-14 07:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.8,
    "week02": 10.0,
    "week03": 15.9,
    "week04": 10.6,
    "week05": 9.5,
    "week06": 18.9,
    "week07": 12.8,
    "week08": 4.6,
    "week09": 10.9,
    "week10": "BYE",
    "week11": 20.2,
    "week12": 4.4,
    "week13": "DNP",
    "week14": 11.6,
    "week15": 8.8,
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [19.8, 10.0, 15.9, 10.6, 9.5, 18.9, 12.8, 4.6, 10.9, 'BYE', 20.2, 4.4, 'DNP', 11.6, 8.8, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 14.3, 11.1, 15.7, 13.2, 15.9, 17.0, 12.6, 8.0, 'BYE', 8.4, 10.2, 'DNP', 7.8, 8.6, 'DNP', 'DNP', 'DNP', 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 11.9, 11.3, 13.2, 10.8, 7.9, 9.5, 8.4, 11.1, 'BYE', 6.9, 10.9, 'DNP', 10.3, 5.8, 'DNP', 'DNP', 'DNP', 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.9, 16.8, 20.3, 20.8, 22.6, 21.0, 16.5, 19.2, 'BYE', 15.2, 18.9, 'DNP', 18.4, 12.4, 'DNP', 'DNP', 'DNP', 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 11.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 6,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Latavius Murray (quad) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "NFL Network's Ian Rapoport said Wednesday that Murray's status for the Divisional Round was \"up in the air\" as he struggles through his thigh injury. Missing a late-week practice isn't the best development for Murray, but he probably has a shot to suit up against the Bucs. Either way, Alvin Kamara should be expected to dominate backfield touches.\u00a0\n",
    "timestamp": "2021-01-14 09:26 PM",
    "source": "Nick Underhill on Twitter ",
    "game_day_logo": "",
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
    "week16": 11.1,
    "week17": "DNP",
    "week18": 9.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.3, 7.0, 20.8, 6.7, 'BYE', 6.1, 4.6, 5.2, 5.7, 9.5, 25.1, 2.7, 1.2, 9.9, 11.1, 'DNP', 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7, 'BYE', 7.4, 6.5, 6.0, 8.1, 4.6, 7.3, 5.6, 8.3, 7.2, 8.9, 'DNP', 7.5, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8, 'BYE', 1.0, 0.0, 1.8, 0.5, 8.2, 1.5, 8.4, 1.6, 1.4, 0.5, 'DNP', 1.4, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3, 'BYE', 13.5, 17.3, 16.0, 13.0, 19.0, 15.1, 21.2, 16.9, 16.2, 14.0, 'DNP', 16.0, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 10.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 3,
    "avg_fp2": 12.47,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.59,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Kareem Hunt rushed eight times for 48 yards and two scores in Cleveland's Wild Card blowout against the Steelers.\n",
    "report": "",
    "analysis": "Hunt had an early hand in helping Cleveland tie a\u00a0franchise record with 35 first-half points in a playoff game, rushing for an 11- and eight-yard touchdown in the first quarter alone. Although he was effective in spelling Nick Chubb inside the red zone, Hunt was still notably out-touched 22-9 and ceded four targets including a 40-yard screen pass to his backfield teammate. Hunt has also averaged just 9.8 touches in his last five games. He'll continue to be viewed as Cleveland's lesser-used back in the Divisional Round against Kansas City.\n",
    "timestamp": "2021-01-11 05:23 AM",
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
    "week16": 12.7,
    "week17": 4.6,
    "week18": 18.6,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 23.1, 13.4, 19.1, 16.8, 6.7, 17.7, 8.3, 'BYE', 14.7, 8.6, 6.2, 7.2, 26.0, 4.3, 12.7, 4.6, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 14.7, 16.5, 16.6, 16.0, 'BYE', 12.2, 8.5, 12.9, 7.8, 6.7, 8.0, 5.1, 9.0, 8.8, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3, 6.4, 6.5, 6.7, 'BYE', 7.2, 10.4, 5.6, 7.3, 7.0, 7.3, 5.8, 6.3, 5.3, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7, 24.1, 24.5, 23.7, 'BYE', 24.6, 23.3, 23.8, 24.0, 23.1, 24.0, 22.3, 25.4, 24.8, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 9.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 10.63,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.54,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "J.K. Dobbins rushed nine times for 43 yards and a touchdown in the Ravens' Wild Card win over the Titans.\n",
    "report": "",
    "analysis": "Dobbins also \"added\" a reception for -6 yards. He still split the running work evenly with Gus Edwards, who saw eight carries. On top of that, FB Patrick Ricard was targeted four times. Dobbins has made a living on efficiency and touchdown volume when successful this year. If he doesn't find the end zone, his share of the running back carries and lack of usage as a receiver is often not enough for him to post a notable fantasy game. With just eight teams remaining next week, he'll be a popular upside option in DFS.\n",
    "timestamp": "2021-01-10 09:32 PM",
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
    "week16": 13.7,
    "week17": 28.0,
    "week18": 10.2,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.2, 6.6, 6.4, 2.2, 7.0, 3.9, 'BYE', 12.6, 4.5, 1.9, 17.5, 'DNP', 13.1, 13.3, 14.6, 13.7, 28.0, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 11.2, 7.1, 7.9, 6.1, 2.4, 'BYE', 4.3, 7.1, 7.5, 6.5, 'DNP', 11.2, 10.4, 14.1, 11.9, 14.5, 13.5, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 7.2, 4.5, 0.0, 2.8, 0.0, 'BYE', 2.7, 3.5, 2.1, 10.9, 'DNP', 2.9, 2.3, 6.3, 3.0, 6.1, 4.4, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 21.7, 9.8, 15.0, 9.7, 11.1, 'BYE', 12.0, 7.4, 9.0, 14.7, 'DNP', 8.8, 10.3, 14.7, 13.6, 14.4, 19.2, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 8.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 8,
    "avg_fp2": 7.97,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.1,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Jamaal\u00a0Williams rushed five times for 26 yards in the Packers' Week 17 win against the Bears.\u00a0\n",
    "report": "",
    "analysis": "Missing Week 16 with a quad injury didn't seem to affect Williams' role in the Packers' offense.\u00a0Williams ripped off a 14-yard run late in the game, taking AJ Dillon's spot as the No. 2 back behind Aaron Jones. He'll continue to see a handful of touches -- mostly in the second half -- during the team's postseason run. The Packers have a first round bye.\u00a0\n",
    "timestamp": "2021-01-04 02:19 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": "DNP",
    "week17": 2.6,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.2, 8.3, 2.2, 14.5, 'BYE', 3.4, 19.4, 15.2, 'DNP', 7.0, 8.1, 13.3, 4.6, 3.8, 3.0, 'DNP', 2.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 8.0, 5.9, 4.8, 'BYE', 6.5, 9.8, 10.4, 'DNP', 9.0, 9.2, 7.2, 7.8, 8.2, 5.6, 'DNP', 3.0, 'DNP', 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.1, 0.1, 4.5, 'BYE', 0.0, 1.5, 0.0, 'DNP', 2.1, 0.9, 0.4, 2.5, 5.3, 0.9, 'DNP', 1.3, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 13.1, 12.4, 12.3, 'BYE', 14.6, 15.2, 15.4, 'DNP', 16.0, 14.0, 15.5, 11.9, 16.2, 15.1, 'DNP', 15.8, 'DNP', 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 8.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 6.05,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.05,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde Edwards-Helaire (hip, ankle) was limited during Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "That would seem to put the rookie on track to play this week against the Rams.\u00a0CEH worked as the team's unquestioned primary back with 36 touches in his final two games of the regular season before the hip and ankle injuries.\u00a0Edwards-Helaire could be a cheap source of touches in this week's four-game DFS slate.\u00a0\n",
    "timestamp": "2021-01-14 06:16 PM",
    "source": "Adam Teicher on Twitter ",
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
    "week16": 4.4,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [5.6, 'DNP', 'DNP', 'DNP', 7.2, 'DNP', 3.9, 5.3, 0.8, 'BYE', 10.1, 4.2, 6.5, 4.5, 14.1, 4.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 18.3, 'DNP', 9.3, 7.6, 4.6, 'BYE', 5.9, 6.8, 8.9, 5.6, 5.4, 13.2, 'DNP', 'DNP', 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3, 'DNP', 9.1, 8.9, 6.9, 'BYE', 7.6, 0.7, 7.5, 7.4, 3.1, 4.4, 'DNP', 'DNP', 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1, 'DNP', 26.3, 27.1, 26.2, 'BYE', 24.8, 19.8, 24.9, 24.2, 12.6, 23.1, 'DNP', 'DNP', 24.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.8,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 28,
    "avg_fp2": 12.31,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.47,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ronald Jones (quad) returned to practice Thursday.\n",
    "report": "",
    "analysis": "It's unclear early in the session if Jones was limited or practiced in full, but Tampa Bay's official injury report will clear that up Thursday afternoon. Jones also still had a brace on his thumb while carrying the ball. If available for the team's upcoming game against the Saints, Jones would likely return to his primary role ahead of Leonard Fournette. The latter would continue handling the lion's share of touches if Jones is ruled out.\n",
    "timestamp": "2021-01-14 06:21 PM",
    "source": "Jenna Laine on Twitter",
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 9.7,
    "week03": 8.3,
    "week04": 15.8,
    "week05": 14.0,
    "week06": 25.1,
    "week07": 10.1,
    "week08": 4.6,
    "week09": 3.3,
    "week10": 24.3,
    "week11": 2.4,
    "week12": 16.8,
    "week13": "BYE",
    "week14": 14.9,
    "week15": "DNP",
    "week16": "DNP",
    "week17": 13.8,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 9.7, 8.3, 15.8, 14.0, 25.1, 10.1, 4.6, 3.3, 24.3, 2.4, 16.8, 'BYE', 14.9, 'DNP', 'DNP', 13.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 15.3, 15.0, 12.1, 8.6, 16.6, 13.4, 14.6, 11.7, 16.3, 14.2, 12.9, 'BYE', 14.7, 'DNP', 'DNP', 12.2, 'DNP', 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 2.0, 2.9, 1.6, 3.0, 2.5, 3.5, 3.6, 3.1, 0.5, 0.4, 'BYE', 6.3, 'DNP', 'DNP', 4.2, 'DNP', 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 9.1, 13.6, 11.4, 10.9, 12.6, 12.9, 15.7, 16.0, 16.3, 10.8, 9.7, 'BYE', 18.6, 'DNP', 'DNP', 15.9, 'DNP', 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.0,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 7.73,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.54,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Gus Edwards rushed eight times for 38 yards in the Ravens' Wild Card win over the Titans.\n",
    "report": "",
    "analysis": "Edwards was not targeted and saw fewer carries than Lamar Jackson and J.K. Dobbins. The Ravens were confident enough in Edwards to make Mark Ingram inactive but he is still on the wrong side of a backfield committee. Edwards is an efficient runner but doesn't get targets or red zone work. He'll be a\u00a0touchdown-or-bust flyer for DFS purposes next week and nothing more.\n",
    "timestamp": "2021-01-10 09:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.7,
    "week02": 7.3,
    "week03": 3.9,
    "week04": 3.8,
    "week05": 2.5,
    "week06": 8.6,
    "week07": "BYE",
    "week08": 14.7,
    "week09": 8.4,
    "week10": 7.8,
    "week11": 0.6,
    "week12": 7.0,
    "week13": 10.1,
    "week14": 17.8,
    "week15": 8.8,
    "week16": 13.2,
    "week17": 7.5,
    "week18": 3.8,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 7.3, 3.9, 3.8, 2.5, 8.6, 'BYE', 14.7, 8.4, 7.8, 0.6, 7.0, 10.1, 17.8, 8.8, 13.2, 7.5, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 1.4, 5.8, 4.0, 5.0, 2.9, 'BYE', 7.3, 4.3, 4.7, 5.5, 6.8, 3.6, 4.0, 7.8, 5.7, 7.2, 6.8, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 7.2, 2.5, 2.1, 0.8, 4.3, 'BYE', 5.9, 2.5, 1.9, 2.7, 1.7, 2.0, 1.8, 1.8, 1.3, 2.3, 2.3, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 15.3, 8.5, 11.5, 12.4, 11.0, 'BYE', 12.1, 11.3, 10.9, 11.3, 9.9, 12.0, 9.7, 10.8, 10.7, 11.8, 10.9, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976516.png",
    "name": "T.J. Yeldon",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 5.7,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 20,
    "avg_fp2": 5.23,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.04,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills added RB\u00a0Devonta Freeman to their practice squad.\u00a0\n",
    "report": "",
    "analysis": "The former Falcons and Giants\u00a0running back will join Buffalo's practice squad after the team lost rookie Zack Moss to a season-ending ankle injury last week against the Colts. The Bills' running back depth chart includes Devin Singletary -- who will operate as the primary ball carrier with Moss sidelined -- T.J. Yeldon, and Taiwan Jones. Yeldon was a healthy scratch last week against the Colts. Freeman, 28, was the Giants' lead back from Week 4-6, seeing 53 touches over that stretch. Probably he won't be active this week against Baltimore.\u00a0\n",
    "timestamp": "2021-01-12 02:44 PM",
    "source": "Adam Schefter on Twitter ",
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
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.3]
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
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 10,
    "avg_fp2": 6.09,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.52,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Malcolm Brown rushed nine times for 30 yards in the Rams' Wild Card win over the Seahawks, adding a nine-yard reception.\u00a0\n",
    "report": "",
    "analysis": "It was a bigger workload than Brown had been seeing in Cam Akers' recent healthy appearances. That's because Jared Goff could barely throw the ball with his thumb injury after replacing an injured John Wolford. Goff will presumably be healthier for the Divisional Round. There will be little reason to look Brown's way in DFS.\u00a0\n",
    "timestamp": "2021-01-10 02:51 AM",
    "source": null,
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
    "week16": 4.0,
    "week17": 2.3,
    "week18": 4.4,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [24.5, 4.7, 1.9, 8.1, 2.9, 3.7, 11.7, 6.7, 'BYE', 18.1, 3.3, 0.9, 3.2, 0.0, 1.5, 4.0, 2.3, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.0, 10.4, 6.1, 12.1, 2.9, 6.0, 5.3, 'BYE', 5.2, 3.5, 4.5, 6.4, 3.1, 2.2, 6.1, 8.5, 3.1, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 12.1, 15.7, 0.0, 0.0, 0.0, 0.5, 0.8, 'BYE', 0.5, 1.2, 0.0, 0.0, 1.3, 0.0, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 19.5, 22.5, 9.3, 6.9, 11.5, 7.9, 7.0, 'BYE', 6.1, 8.4, 8.7, 8.8, 9.4, 6.5, 7.5, 10.0, 8.0, 6.1]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 16.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.14,
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
    "headlineNews": "Davante Adams caught 6-of-6 targets for 47 yards and a touchdown in the Packers' Week 17 win over the Bears.\u00a0\n",
    "report": "",
    "analysis": "It wasn't the most explosive performance from Adams, who recorded a long reception of nine yards against Chicago. He was mostly uninvolved in the Packers' passing attack until the fourth quarter, when Aaron Rodgers turned to his No. 1 receiver on a game-sealing drive capped off with a short Adams touchdown. Rodgers will surely lean on Adams in the team's upcoming Super Bowl run.\u00a0\n",
    "timestamp": "2021-01-04 12:41 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 37.7,
    "week17": 13.6,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.6, 5.1, 'DNP', 'DNP', 'BYE', 9.1, 38.1, 26.8, 28.3, 14.6, 20.1, 15.1, 29.1, 21.0, 7.7, 37.7, 13.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 22.6, 'DNP', 'DNP', 'BYE', 13.4, 18.8, 16.8, 15.2, 20.9, 15.8, 15.2, 16.3, 25.5, 21.0, 18.3, 17.7, 'DNP', 16.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 10.5, 'DNP', 'DNP', 'BYE', 6.7, 6.1, 18.4, 6.8, 10.9, 12.1, 6.9, 10.9, 15.5, 7.2, 4.8, 6.9, 'DNP', 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 24.9, 'DNP', 'DNP', 'BYE', 20.0, 20.5, 31.4, 17.9, 25.8, 25.0, 21.5, 22.9, 27.9, 23.5, 20.7, 22.6, 'DNP', 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 15.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
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
    "headlineNews": "Chiefs declared\u00a0WR Tyreek Hill, WR Sammy Watkins, QB Patrick Mahomes, RB Clyde Edwards-Helaire, S Tyrann Mathieu, LB Ben Niemann and OT Mike Remmers inactive for Week 17 against the Chargers.\n",
    "report": "",
    "analysis": "Nursing hamstring soreness over the past several weeks, Hill will be ready to rock for the Divisional Round for the top-seeded Chiefs.\u00a0\n",
    "timestamp": "2021-01-03 08:12 PM",
    "source": null,
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
    "week16": 8.5,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [13.1, 19.3, 18.7, 14.4, 16.8, 4.0, 14.5, 23.8, 28.6, 'BYE', 21.5, 51.4, 11.8, 24.6, 14.4, 8.5, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 12.7, 13.6, 20.1, 13.0, 13.3, 10.4, 13.8, 12.2, 'BYE', 14.4, 20.8, 16.6, 16.5, 17.0, 18.0, 'DNP', 'DNP', 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.0, 5.3, 8.4, 4.3, 5.1, 6.6, 6.7, 4.5, 'BYE', 4.4, 6.0, 5.9, 6.6, 6.1, 5.1, 'DNP', 'DNP', 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 20.8, 24.3, 24.8, 23.3, 21.3, 23.5, 23.3, 21.3, 'BYE', 21.5, 23.9, 24.2, 24.1, 26.2, 23.7, 'DNP', 'DNP', 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 13.7,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 16.57,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.53,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stefon Diggs (oblique) has been removed from the Divisional Round injury report.\u00a0\n",
    "report": "",
    "analysis": "As has Cole Beasley (knee). The Bills will be at full strength against the Ravens as they look to improve upon what was basically a survive-and-advance Wild Card Round performance. That does not include Josh Allen, who was at his best vs. Indy. He's going to have to hit\u00a0big plays to Diggs in man coverage against the Ravens' aggressive defense. Diggs has been held below 90 yards one time in his past six games.\u00a0\n",
    "timestamp": "2021-01-14 08:22 PM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 37.0,
    "week17": 11.1,
    "week18": 21.8,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [12.6, 25.3, 12.9, 14.5, 15.6, 13.6, 7.8, 12.2, 16.3, 20.3, 'BYE', 7.4, 14.2, 24.1, 20.2, 37.0, 11.1, 21.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 14.5, 11.4, 12.2, 11.2, 18.1, 14.1, 'BYE', 14.9, 9.7, 13.9, 12.9, 11.8, 19.9, 16.1, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 3.9, 3.6, 5.6, 5.6, 4.6, 4.6, 'BYE', 4.6, 5.0, 5.0, 7.7, 5.8, 7.2, 5.4, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 19.6, 20.2, 19.2, 17.9, 18.6, 19.0, 'BYE', 19.9, 18.9, 19.2, 20.8, 20.5, 22.6, 20.2, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 13.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 19,
    "avg_fp2": 9.13,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Michael Thomas caught 5-of-7 targets for 73 yards and one touchdown in the Saints' Wild Card win over the Bears.\n",
    "report": "",
    "analysis": "After going scoreless across seven injury-riddled appearances in the regular season, Thomas found the end zone to start off 2021 and the Saints' playoff run. He got the scoring started from 11 yards out in the first quarter, and it was the only touchdown of the first half. Drew Brees under center is much better for Thomas in the box score. The Saints will host the Bucs in the Divisional Round next weekend. Thomas actually played in both games against Tampa Bay this season, totaling 8-69-0 on 11 targets in those games.\n",
    "timestamp": "2021-01-11 01:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 7.6,
    "week10": 3.7,
    "week11": 14.9,
    "week12": 7.1,
    "week13": 15.0,
    "week14": 12.4,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": 15.8,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.6, 3.7, 14.9, 7.1, 15.0, 12.4, 'DNP', 'DNP', 'DNP', 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.7, 18.1, 20.5, 11.0, 11.7, 11.1, 'DNP', 'DNP', 'DNP', 12.5, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.8, 7.7, 6.6, 7.6, 6.8, 8.1, 'DNP', 'DNP', 'DNP', 6.9, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 22.5, 23.1, 23.2, 22.8, 21.4, 22.5, 'DNP', 'DNP', 'DNP', 21.2, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 13.4,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.03,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp (knee) is listed as questionable for the Divisional Round against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Dealing with inflammation in his knee, Kupp would be a stunning inactive in the Rams' matchup with Green Bay after catching\u00a04-of-9 targets for 78 yards in LA's Wild Card win over the Seahawks. None of the Rams wideouts have much DFS appeal with an injured Jared Goff under center in the freezing Lambeau weather. If Kupp is out, Van Jefferson and Josh Reynolds would be in line for a bump in snaps and targets.\u00a0\n",
    "timestamp": "2021-01-14 09:19 PM",
    "source": "Matt Schneidman on Twitter ",
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
    "week16": 6.9,
    "week17": 5.6,
    "week18": 12.5,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [14.9, 10.3, 18.9, 6.7, 15.1, 12.0, 4.0, 24.9, 'BYE', 6.1, 24.6, 12.3, 13.5, 5.6, 18.6, 6.9, 5.6, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.6, 11.7, 10.7, 8.2, 'BYE', 13.3, 9.9, 12.1, 12.5, 7.6, 14.4, 10.9, 9.1, 9.3, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 6.4, 3.4, 3.7, 3.5, 'BYE', 5.1, 3.1, 4.2, 3.4, 3.0, 3.6, 3.2, 7.1, 10.5, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 18.4, 16.9, 15.6, 15.6, 'BYE', 18.3, 16.4, 16.3, 16.9, 16.4, 17.1, 17.2, 18.7, 20.5, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 10.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.31,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans (knee) was \"limited\" in Wednesday and Thursday's practices.\u00a0\n",
    "report": "",
    "analysis": "Evans avoided setbacks in last week's Wild Card win, so the Bucs are just being cautious. Although he has been scorching hot of late, Evans had a pair of regular season duds against the Saints, and has a checkered history with CB Marshon Lattimore. Nevertheless, Evans and Tom Brady have been playing too well of late to be fully faded on this weekend's four-game DFS slate.\u00a0\n",
    "timestamp": "2021-01-14 09:41 PM",
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
    "week16": 35.1,
    "week17": 6.1,
    "week18": 14.9,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7, 12.6, 1.5, 4.7, 14.0, 8.4, 16.7, 13.4, 18.5, 'BYE', 7.1, 14.0, 35.1, 6.1, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.4, 13.0, 13.6, 15.2, 17.5, 8.7, 9.3, 14.6, 'BYE', 15.4, 9.8, 11.3, 13.8, 10.8, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 6.6, 5.6, 4.2, 5.9, 5.3, 4.5, 5.5, 5.1, 'BYE', 5.9, 5.6, 5.6, 6.5, 5.5, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 22.3, 22.3, 21.9, 21.9, 22.1, 21.5, 22.2, 21.1, 'BYE', 21.7, 21.3, 22.2, 21.3, 22.7, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 9.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 32,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.61,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Marquise Brown caught 7-of-9 targets for 109 yards in the Ravens' Wild Card win over the Titans.\n",
    "report": "",
    "analysis": "Brown also got credit for two carries which he turned into 19 yards. Without any egregious drops, Brown looked like the consistent downfield burner Baltimore drafted him to be. He now has at least 90 yards or a touchdown in seven consecutive games. Contributing on a weekly basis has not been Brown's strong suit this year, disappearing from that stat sheet for stretches of games at a time. If he can continue producing in the Divisional Round, he may be able to remove the \"bust\" from his boom/bust moniker.\n",
    "timestamp": "2021-01-11 05:19 AM",
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
    "week16": 10.5,
    "week17": 18.6,
    "week18": 16.3,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 6.7, 2.3, 10.6, 16.8, 7.7, 'BYE', 6.8, 5.3, 2.4, 0.0, 16.5, 12.4, 12.0, 12.8, 10.5, 18.6, 16.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 15.7, 11.8, 7.1, 7.0, 11.1, 'BYE', 8.7, 10.7, 10.8, 12.9, 6.8, 7.0, 15.5, 8.6, 11.6, 12.7, 15.4, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.6, 10.0, 1.8, 4.0, 8.9, 'BYE', 0.2, 4.0, 1.1, 2.8, 1.0, 4.1, 3.4, 7.2, 7.1, 3.0, 1.7, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 18.3, 20.8, 18.2, 14.7, 20.2, 'BYE', 15.2, 17.9, 15.5, 16.9, 12.9, 18.1, 14.5, 16.9, 17.4, 13.3, 14.5, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 8.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 19,
    "avg_fp2": 9.59,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Emmanuel Sanders caught 2-of-3 targets for three yards in the Saints' Wild Card win over the Bears.\n",
    "report": "",
    "analysis": "A 1.0 yards per target is hard to do, but Sanders accomplished it. His catches gained three and zero yards. With Michael Thomas back healthy and Deonte Harris playing an expanded role, Sanders did nothing of note. He won't be a recommended fantasy play next week in the Divisional Round against the Bucs.\n",
    "timestamp": "2021-01-11 02:20 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 11.5,
    "week17": 16.8,
    "week18": 1.3,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 2.3, 13.6, 12.3, 18.2, 'BYE', 'DNP', 'DNP', 11.8, 1.0, 8.6, 0.9, 6.4, 12.3, 9.6, 11.5, 16.8, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1, 'BYE', 'DNP', 'DNP', 5.1, 7.0, 11.6, 5.8, 7.3, 3.2, 11.3, 11.1, 10.8, 6.7, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 2.9, 'BYE', 'DNP', 'DNP', 1.1, 4.4, 1.6, 2.0, 1.3, 1.5, 1.5, 3.3, 0.6, 3.2, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 13.3, 'BYE', 'DNP', 'DNP', 14.5, 14.3, 12.7, 14.6, 15.7, 14.8, 17.4, 16.3, 14.5, 15.2, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 8.5,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.53,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "John Brown did not catch any of his four targets in the Bills' Wild Card Weekend win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "Brown's usage was fine. He played nearly all of Buffalo's 59 offensive snaps and ran a route on 40 of Josh Allen's 41 drop backs against the Colts but was overshadowed by Gabriel Davis, who had four receptions for 85 yards. Brown will continue to be a high-variance fantasy option next week against the Ravens with Davis, Cole Beasley, and alpha No. 1 wideout Stefon Diggs commanding targets from Allen.\u00a0\n",
    "timestamp": "2021-01-11 02:46 PM",
    "source": null,
    "game_day_logo": "",
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
    "week16": "DNP",
    "week17": 15.2,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [16.0, 16.2, 0.0, 6.2, 'DNP', 0.0, 'DNP', 2.6, 13.9, 10.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 7.2, 10.8, 'DNP', 6.1, 'DNP', 6.9, 10.1, 8.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.7, 10.3, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.6, 3.6, 'DNP', 3.2, 'DNP', 3.4, 2.7, 1.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.2, 1.6, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 14.7, 15.2, 17.6, 'DNP', 15.9, 'DNP', 15.5, 14.5, 14.5, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6, 14.0, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115306.png",
    "name": "Josh Reynolds",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 8.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 6.14,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.03,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams head coach Sean McVay said the \"hope\" is that Cooper Kupp, who has bursitis of the knee, will be able to play this week against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Bursitis is the inflammation or irritation of a fluid-filled sac near the knee joint. Kupp was seen with team trainers late in the Rams' Wild Card win over Seattle examining the knee, with Kupp in clear discomfort. If Kupp isn't able to play this week against Green Bay, look for Van Jefferson and Josh Reynolds to see a boost in snaps. Jefferson saw eight targets to Reynold's six targets with Kupp sidelined in Week 17.\u00a0\n",
    "timestamp": "2021-01-11 02:05 PM",
    "source": "Adam Schefter on Twitter ",
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
    "week16": 10.0,
    "week17": 4.9,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [2.2, 4.3, 6.0, 4.0, 5.6, 11.5, 13.2, 6.4, 'BYE', 13.4, 4.7, 6.5, 2.6, 1.1, 1.9, 10.0, 4.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, -0.1, 1.5, 1.3, 1.7, 4.9, 4.1, 3.3, 'BYE', 5.6, 4.2, 6.2, 5.6, 3.8, 7.2, 6.6, 4.0, 7.2, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.8, 0.0, 0.1, 'BYE', 0.4, 0.9, 0.4, 0.0, 0.0, 0.1, 0.4, 0.0, 0.4, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 7.8, 8.2, 10.4, 9.5, 9.2, 10.2, 7.8, 'BYE', 10.1, 11.7, 9.4, 9.7, 9.5, 10.4, 9.9, 10.0, 10.6, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 8.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 6.99,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Sammy Watkins (calf) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Watkins' status for the Chiefs' Divisional Round clash with the Browns is looking bleaker every day. He suffered the calf injury and was rested -- along with most KC starters -- in Week 17. Without a limited practice on Friday, Watkins will be hard pressed to suit up against Cleveland. That would open up snaps and targets for Demarcus Robinson and Mecole Hardman. Robinson averaged five targets in games where Watkins was sidelined while Hardman averaged 3.17 targets.\u00a0\n",
    "timestamp": "2021-01-14 08:05 PM",
    "source": "James Palmer on Twitter ",
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
    "week16": 1.4,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [18.0, 1.6, 9.7, 4.3, 9.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.8, 5.5, 6.2, 8.0, 1.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 7.8, 9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 9.6, 10.4, 6.1, 7.6, 'DNP', 'DNP', 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 4.1, 4.6, 3.8, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.4, 3.5, 2.6, 4.0, 1.5, 'DNP', 'DNP', 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 21.1, 20.1, 18.8, 19.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 17.9, 19.7, 17.5, 20.8, 18.4, 'DNP', 'DNP', 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.0,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.31,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown caught 2-of-3 targets for 49 yards and one touchdown in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "Brown broke free for a 36-yard touchdown in the first quarter and turned the corner on a target in the flats for his two receptions. He seems to be getting more comfortable as the weeks stack up, although he's still being utilized as a distant third receiver behind Chris Godwin (12 targets) and Mike Evans (10 targets). Brown will be parked inside three-receiver sets next weekend, possibly in New Orleans.\n",
    "timestamp": "2021-01-10 05:11 AM",
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
    "week16": 11.5,
    "week17": 31.3,
    "week18": 14.1,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 10.1, 9.8, 2.1, 'BYE', 7.4, 17.8, 11.5, 31.3, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.4, 5.6, 7.1, 10.7, 'BYE', 9.6, 5.5, 7.4, 10.2, 8.1, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 0.0, 5.2, 3.2, 'BYE', 4.1, 0.0, 0.3, 7.9, 5.2, 16.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9, 13.6, 17.1, 16.7, 'BYE', 20.4, 14.6, 24.6, 18.7, 19.4, 27.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 8.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 10.85,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.03,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp (knee) is listed as questionable for the Divisional Round against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Dealing with inflammation in his knee, Kupp would be a stunning inactive in the Rams' matchup with Green Bay after catching\u00a04-of-9 targets for 78 yards in LA's Wild Card win over the Seahawks. None of the Rams wideouts have much DFS appeal with an injured Jared Goff under center in the freezing Lambeau weather. If Kupp is out, Van Jefferson and Josh Reynolds would be in line for a bump in snaps and targets.\u00a0\n",
    "timestamp": "2021-01-14 09:19 PM",
    "source": "Matt Schneidman on Twitter ",
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
    "week16": 10.6,
    "week17": "DNP",
    "week18": 9.8,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [6.0, 10.5, 21.2, 15.2, 9.1, 2.6, 8.9, 16.5, 'BYE', 7.5, 20.0, 5.1, 11.3, 11.8, 6.4, 10.6, 'DNP', 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 9.3, 7.2, 7.0, 8.3, 11.7, 9.3, 7.7, 'BYE', 10.0, 6.0, 10.8, 10.1, 5.4, 10.7, 9.0, 'DNP', 7.8, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 3.2, 5.0, 5.7, 6.6, 6.4, 3.5, 5.9, 'BYE', 6.4, 4.5, 5.0, 5.2, 6.1, 5.5, 3.2, 'DNP', 3.1, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 20.9, 19.3, 20.1, 21.4, 20.2, 20.5, 19.0, 'BYE', 21.4, 19.2, 20.2, 21.7, 17.7, 19.9, 21.2, 'DNP', 17.6, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 7.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.14,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Allen Lazard caught 2-of-4\u00a0targets for 17 yards in the Packers' Week 17 win over the Bears.\u00a0\n",
    "report": "",
    "analysis": "Lazard has settled in as the team's No. 4 pass catching option in recent weeks. He narrowly missed a touchdown against Chicago, getting tripped up inside the five yard line on a shoestring tackle. Aaron Jones plunged into the end zone one play later. Lazard won't be a viable fantasy option in fantasy playoff leagues or DFS unless the Packers struggle with pass catcher injuries.\u00a0\n",
    "timestamp": "2021-01-04 02:12 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 2.4,
    "week17": 2.7,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 6.0, 23.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.3, 6.5, 2.9, 8.1, 2.4, 2.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.0, 12.0, 8.6, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.6, 7.2, 10.6, 15.9, 12.7, 11.7, 10.3, 'DNP', 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 6.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 2.7, 0.9, 2.7, 1.6, 2.8, 1.6, 'DNP', 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 11.7, 12.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 13.3, 13.0, 12.7, 11.2, 14.9, 10.3, 'DNP', 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 6.9,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 11.1,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.53,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Cole Beasley (knee) was removed from Buffalo's injury report.\u00a0\n",
    "report": "",
    "analysis": "Beasley was limited at Thursday's practice, and will play this weekend against Baltimore. Beasley played a full complement of snaps last week after being limited in practice leading up to Buffalo's Wild Card victory over the Colts, catching seven balls for 57 yards. Slot receivers have had some success against the Ravens' secondary this season, making Beasley an intriguing DFS option.\u00a0\n",
    "timestamp": "2021-01-14 09:06 PM",
    "source": "Buffalo Bills on Twitter ",
    "game_day_logo": "",
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
    "week16": 3.2,
    "week17": "DNP",
    "week18": 9.2,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [7.8, 9.5, 13.0, 10.7, 8.3, 12.5, 16.7, 3.4, 5.4, 22.4, 'BYE', 8.3, 23.5, 6.6, 15.2, 3.2, 'DNP', 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.1, 4.2, 7.1, 5.6, 2.9, 4.4, 5.5, 7.6, 5.4, 'BYE', 6.6, 4.5, 6.5, 6.6, 6.1, 'DNP', 9.4, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.4, 0.5, 1.8, 1.1, 0.9, 1.2, 3.3, 1.4, 0.9, 'BYE', 2.7, 1.9, 1.6, 1.6, 1.7, 'DNP', 1.7, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.7, 11.2, 11.3, 12.7, 12.1, 12.3, 14.6, 12.7, 12.1, 'BYE', 12.7, 11.8, 14.1, 12.8, 14.4, 'DNP', 13.5, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042910.png",
    "name": "Rashard Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 6.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 24,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Rashard Higgins caught 2-of-7 targets for 28 yards in Cleveland's Wild Card domination of the Steelers.\n",
    "report": "",
    "analysis": "Higgins' most impactful moment\u00a0was a 12-yard gain in the first quarter that helped set up Kareem Hunt's first of two touchdown runs on the ensuing play. His seven targets ultimately finished third on the team behind Austin Hooper's (11) and Jarvis Landry's (8), although they were the most Higgins has seen since Week 14. He'll be a thin DFS option for a potential blowout game script in the Divisional Round against Kansas City.\u00a0\n",
    "timestamp": "2021-01-11 06:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 10.6,
    "week06": 7.8,
    "week07": 14.0,
    "week08": 1.9,
    "week09": "BYE",
    "week10": 6.3,
    "week11": 8.0,
    "week12": 2.0,
    "week13": 18.5,
    "week14": 15.8,
    "week15": 9.6,
    "week16": "DNP",
    "week17": 6.5,
    "week18": 3.8,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.0, 'DNP', 'DNP', 10.6, 7.8, 14.0, 1.9, 'BYE', 6.3, 8.0, 2.0, 18.5, 15.8, 9.6, 'DNP', 6.5, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, -0.4, 'DNP', 'DNP', 1.7, 4.0, 4.6, 6.4, 'BYE', 4.4, 6.8, 5.4, 7.9, 6.9, 8.6, 'DNP', 5.5, 4.7, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 0.0, 0.0, 0.1, 3.4, 'BYE', 0.5, 4.3, 0.0, 0.0, 0.0, 3.5, 'DNP', 0.2, 1.8, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 8.3, 'DNP', 'DNP', 9.5, 9.0, 9.0, 11.5, 'BYE', 9.7, 10.8, 8.5, 9.1, 9.1, 12.8, 'DNP', 8.8, 10.2, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Reserve: WR-3",
    "team": "Cleveland Browns",
    "projected": 6.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 24,
    "avg_fp2": 10.13,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jarvis Landry caught 5-of-8 targets for 92 yards and a touchdown in Cleveland's Wild Card win over the Steelers.\n",
    "report": "",
    "analysis": "Landry helped build Cleveland's 28-0 first-quarter lead, separating from S Terrell Edmunds and shaking CB Mike Hilton to complete a 40-yard touchdown grab\u00a0on 3rd-and-5. Sunday was also the fifth time in Cleveland's\u00a0last six games that Landry accrued at least eight targets, totaling 52 opportunities (8.6 per game) in that stretch. Austin Hooper actually led the Browns with 11 targets, but Landry should still be trusted as the team's No. 1 receiving threat for fantasy purposes when the Browns travel to Kansas City in the Divisional Round.\n",
    "timestamp": "2021-01-11 06:10 AM",
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
    "week16": "DNP",
    "week17": 13.9,
    "week18": 17.7,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 6.1, 5.6, 12.78, 10.8, 5.5, 8.46, 7.2, 'BYE', 4.4, 3.6, 24.3, 16.44, 8.68, 15.6, 'DNP', 13.9, 17.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 12.2, 8.1, 9.7, 10.7, 'BYE', 2.8, 5.9, 3.7, 10.1, 5.2, 5.6, 'DNP', 5.7, 5.2, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 4.9, 6.4, 4.9, 5.3, 'BYE', 5.9, 2.7, 4.7, 7.2, 5.6, 5.0, 'DNP', 5.6, 5.9, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 17.7, 18.1, 16.9, 16.5, 'BYE', 16.2, 18.5, 16.1, 18.1, 17.1, 16.4, 'DNP', 17.6, 17.7, 16.8]
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
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 13.21,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.31,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Chris Godwin (hip, quad) remained \"limited\" in Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "We haven't seen concern about Godwin's status from the Bucs' press corps, though it is worth noting that he was absent from the Wild Card injury report. Frequently at less than 100 percent health this season, Godwin combined for a modest 9/120/0 across the Bucs' two regular season losses to the Saints. Including last week's playoff win, Godwin is coming off one of his better two-game stretches of the season.\u00a0\n",
    "timestamp": "2021-01-14 09:35 PM",
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
    "week16": 16.9,
    "week17": 27.8,
    "week18": 16.4,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 'DNP', 14.9, 'DNP', 'DNP', 7.3, 19.3, 'DNP', 5.6, 12.2, 14.8, 13.7, 'BYE', 3.5, 11.6, 16.9, 27.8, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 'DNP', 5.0, 'DNP', 'DNP', 8.9, 8.7, 'DNP', 11.6, 2.8, 5.9, 8.2, 'BYE', 7.0, 4.9, 6.1, 8.7, 6.6, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 'DNP', 2.6, 'DNP', 'DNP', 8.3, 1.4, 'DNP', 6.3, 0.5, 2.1, 3.7, 'BYE', 4.6, 2.6, 4.6, 3.0, 4.1, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 'DNP', 20.4, 'DNP', 'DNP', 26.1, 20.3, 'DNP', 22.8, 20.4, 20.1, 18.4, 'BYE', 19.1, 19.9, 17.3, 14.8, 20.1, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 5.4,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 6.73,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Sammy Watkins (calf) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Watkins' status for the Chiefs' Divisional Round clash with the Browns is looking bleaker every day. He suffered the calf injury and was rested -- along with most KC starters -- in Week 17. Without a limited practice on Friday, Watkins will be hard pressed to suit up against Cleveland. That would open up snaps and targets for Demarcus Robinson and Mecole Hardman. Robinson averaged five targets in games where Watkins was sidelined while Hardman averaged 3.17 targets.\u00a0\n",
    "timestamp": "2021-01-14 08:05 PM",
    "source": "James Palmer on Twitter ",
    "game_day_logo": "",
    "week01": 1.1,
    "week02": 6.3,
    "week03": 16.1,
    "week04": 10.7,
    "week05": 6.0,
    "week06": 0.0,
    "week07": 8.0,
    "week08": 19.1,
    "week09": 6.3,
    "week10": "BYE",
    "week11": 2.1,
    "week12": 3.8,
    "week13": 2.0,
    "week14": 9.5,
    "week15": 9.2,
    "week16": 5.9,
    "week17": 1.5,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [1.1, 6.3, 16.1, 10.7, 6.0, 0.0, 8.0, 19.1, 6.3, 'BYE', 2.1, 3.8, 2.0, 9.5, 9.2, 5.9, 1.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, -2.5, 3.6, 4.6, 5.5, 6.4, 2.9, 8.6, 7.7, 'BYE', 5.6, 5.7, 4.1, 3.3, 2.7, 1.8, 6.3, 'DNP', 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 0.0, 0.0, 1.6, 2.4, 1.7, 0.0, 1.7, 'BYE', 0.9, 0.0, 1.9, 0.0, 0.7, 1.1, 1.6, 'DNP', 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 14.9, 11.4, 8.9, 12.8, 10.4, 12.6, 9.7, 12.3, 'BYE', 10.7, 10.1, 9.9, 12.6, 11.6, 11.5, 11.6, 'DNP', 11.0]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 16.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 17.35,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.76,
    "fanduelSalary": "$8500",
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
    "week16": 19.3,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [14.0, 19.5, 11.7, 8.5, 20.8, 19.0, 4.6, 20.9, 20.9, 'BYE', 22.86, 12.2, 23.6, 23.6, 18.8, 19.3, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 16.5, 19.3, 14.7, 13.2, 16.5, 'BYE', 11.8, 12.5, 14.4, 15.4, 15.3, 21.5, 'DNP', 'DNP', 16.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4, 4.8, 3.8, 5.3, 7.0, 'BYE', 5.2, 5.5, 6.6, 5.6, 6.4, 5.6, 'DNP', 'DNP', 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4, 18.8, 19.4, 18.9, 20.5, 'BYE', 19.2, 19.3, 20.1, 19.6, 20.0, 19.3, 'DNP', 'DNP', 21.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 7.93,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.42,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski failed to catch his lone target in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "The last time Gronkowski went catchless in a game was back in Week 2. The veteran has been looking spry since turning into a full-time player in the second half of the season. It's likely a one-game outlier, although he did seem to stay in for pass protection more than normal on Saturday. Expect Gronkowski to be a threat in the red zone next weekend. Tampa Bay is most likely headed for New Orleans.\n",
    "timestamp": "2021-01-10 05:11 AM",
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
    "week16": 18.8,
    "week17": 3.9,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4, 6.7, 16.3, 14.7, 12.1, 0.7, 12.1, 3.5, 13.6, 'BYE', 6.7, 4.4, 18.8, 3.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 10.3, 16.0, 18.5, 17.6, 13.9, 17.8, 15.9, 13.6, 'BYE', 15.5, 15.0, 14.3, 13.8, 9.8, 14.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7, 3.3, 4.1, 4.1, 2.3, 3.6, 3.7, 4.4, 'BYE', 4.5, 4.1, 3.9, 3.2, 3.0, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0, 20.5, 21.1, 20.2, 17.1, 21.4, 19.5, 21.1, 'BYE', 21.7, 23.3, 21.9, 21.7, 22.0, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 11.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 32,
    "avg_fp2": 10.08,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.74,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Andrews caught 4-of-6 targets for 41 yards in the Ravens' Wild Card win over the Titans.\n",
    "report": "",
    "analysis": "Andrews opened the game with a bad drop which has been an issue he has dealt with for most of his NFL career. The Titans weren't able to mount much of an offense versus the Ravens so Andrews' lone mistake didn't cost them much in the Wild Card Round but it could when they go up against a team capable of scoring in an instant. Still, Andrews is one of the best athletes at his position and the ability to get open and draw targets is just as important as his drop rate. He'll be the No. 2 fantasy tight end behind Travis Kelce for the next round of the playoffs.\n",
    "timestamp": "2021-01-10 10:11 PM",
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
    "week16": 10.6,
    "week17": 4.7,
    "week18": 6.1,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 3.4, 3.7, 19.2, 14.6, 3.1, 'BYE', 4.7, 3.7, 9.6, 18.1, 'DNP', 'DNP', 10.3, 15.1, 10.6, 4.7, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 13.8, 15.2, 10.4, 9.7, 15.1, 'BYE', 12.6, 8.2, 7.4, 12.0, 'DNP', 'DNP', 13.2, 7.2, 13.8, 13.5, 14.9, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 1.0, 2.5, 3.0, 5.1, 4.2, 'BYE', 4.7, 0.8, 0.0, 1.8, 'DNP', 'DNP', 2.4, 2.6, 8.0, 3.8, 3.4, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 12.6, 16.2, 15.3, 17.2, 11.9, 'BYE', 14.1, 13.1, 14.5, 12.8, 'DNP', 'DNP', 15.3, 14.9, 18.3, 16.4, 15.7, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 10.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 19,
    "avg_fp2": 7.26,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Back",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Jared Cook (back) was limited during Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "Cook's back issue doesn't seem overly concerning, though DFS players should watch for late-week setbacks for the veteran tight end. Cook, who last week caught four balls for 40 yards in the Saints' Wild Card win, had seven catches for 80 yards\u00a0in two games against Tampa this season. The Saints play the Bucs in the Divisional Round.\u00a0\n",
    "timestamp": "2021-01-13 10:01 PM",
    "source": "Nick Underhill on Twitter ",
    "game_day_logo": "",
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
    "week16": 9.7,
    "week17": 12.3,
    "week18": 6.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 8.3, 3.1, 'DNP', 12.2, 'BYE', 10.7, 13.6, 2.0, 0.0, 1.1, 0.0, 10.3, 11.2, 3.9, 9.7, 12.3, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.4, 'BYE', 13.2, 5.8, 7.4, 5.5, 5.1, 6.6, 4.1, 10.8, 10.9, 5.9, 7.8, 10.6, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3, 'BYE', 1.6, 1.6, 1.7, 1.0, 0.6, 1.0, 0.0, 1.3, 3.4, 1.2, 1.1, 1.6, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5, 'BYE', 13.4, 12.4, 13.5, 13.0, 14.9, 12.4, 11.5, 14.0, 13.2, 12.5, 12.9, 12.9, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 8.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 24,
    "avg_fp2": 6.96,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.84,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Austin Hooper caught 7-of-11 targets for 46 yards and a touchdown in Cleveland's Wild Card win against the Steelers.\n",
    "report": "",
    "analysis": "Hooper's seven-yard touchdown at the end of the second quarter allowed the Browns to tie a franchise record with 35 points in the first half of a postseason game. His 11 targets were also a team-high mark, lending him at least five in Cleveland's last four games and three touchdowns in three of his last four. Hooper has also quietly averaged 9.4 targets per game since Week 15. He'll be a terrific contrarian option for DFS tournaments in the Divisional Round against Kansas City.\n",
    "timestamp": "2021-01-11 06:24 AM",
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
    "week16": 10.6,
    "week17": 11.7,
    "week18": 14.1,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.2, 4.0, 11.9, 8.2, 7.7, 'DNP', 'DNP', 'BYE', 1.6, 4.8, 8.3, 3.4, 'DNP', 12.6, 10.6, 11.7, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 8.9, 6.4, 5.3, 3.3, 3.6, 'DNP', 'DNP', 'BYE', 4.9, 6.2, 12.8, 11.9, 'DNP', 11.4, 10.4, 6.3, 10.7, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.4, 1.1, 3.8, 0.9, 1.5, 'DNP', 'DNP', 'BYE', 4.5, 1.1, 1.9, 0.7, 'DNP', 1.5, 2.2, 1.5, 2.8, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.6, 11.9, 13.6, 11.5, 11.3, 'DNP', 'DNP', 'BYE', 11.4, 11.9, 13.0, 13.6, 'DNP', 11.6, 12.5, 12.9, 12.0, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 7.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 9.41,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 9.38,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Robert Tonyan caught both of his targets for 18 yards and a touchdown in the Packers' Week 17 win over the Bears.\u00a0\n",
    "report": "",
    "analysis": "Tonyan notched his 11th score of the season. He's now scored a touchdown in six of his past seven outings. An ideal red zone target for Aaron Rodgers with defenses focused on stopping Davante Adams, Tonyan has been as consistent a touchdown scorer as any tight end in the league not named Travis Kelce. The Packers will use Tonyan to create mismatches with linebackers and safeties in their upcoming playoff run.\u00a0\n",
    "timestamp": "2021-01-04 02:07 AM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 2.2,
    "week17": 8.8,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 9.5, 13.5, 30.8, 'BYE', 4.0, 4.2, 10.4, 1.0, 4.8, 12.9, 15.2, 11.9, 12.1, 9.3, 2.2, 8.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.3, 3.9, 11.7, 'BYE', 7.4, 9.0, 11.2, 9.6, 10.0, 5.9, 9.3, 8.3, 9.1, 13.1, 14.3, 7.3, 'DNP', 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.7, 2.6, 'BYE', 4.7, 4.7, 2.2, 1.1, 0.1, 0.0, 2.9, 0.6, 2.2, 2.8, 2.2, 4.4, 'DNP', 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 9.5, 10.4, 11.7, 'BYE', 11.7, 11.0, 11.6, 8.6, 22.0, 18.2, 13.1, 16.6, 15.1, 19.4, 12.4, 13.9, 'DNP', 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 5.5,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 2,
    "avg_fp2": 4.58,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 9.36,
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
    "headlineNews": "Dawson Knox caught 2-of-3 targets for five yards and a touchdown in the Bills' Wild Card Weekend win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "Knox was on the receiving end of an improvised first quarter push pass from Josh Allen as the quarterback abandoned a designed run and spotted Knox in the back of the end zone. Knox was uninvolved from there. He's a touchdown-dependent fantasy option as long as Cole Beasley is in the Buffalo lineup.\u00a0\n",
    "timestamp": "2021-01-09 10:27 PM",
    "source": null,
    "game_day_logo": "",
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
    "week16": 6.6,
    "week17": 3.9,
    "week18": 7.5,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [3.6, 2.3, 'DNP', 2.6, 2.0, 'DNP', 'DNP', 'DNP', 0.0, 2.6, 'BYE', 6.7, 10.7, 3.4, 10.6, 6.6, 3.9, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 5.4, 'DNP', 'DNP', 'DNP', 10.3, 3.1, 'BYE', 4.7, 3.7, 8.3, 3.8, 3.7, 9.8, 3.3, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2, 'DNP', 'DNP', 'DNP', 0.7, 1.3, 'BYE', 1.6, 0.8, 0.8, 1.6, 0.3, 0.0, 1.3, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3, 'DNP', 'DNP', 'DNP', 6.0, 4.8, 'BYE', 6.7, 7.7, 5.7, 7.4, 7.3, 9.3, 6.0, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 4.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 7.09,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 8.18,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Tyler Higbee caught 1-of-3 targets for four yards in the Rams' Wild Card win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "The Rams completed just 12-of-25 pass attempts, so there was no way for Higbee to compile. Not that Higbee compiled much during the regular season, where he caught more than three passes only four times. You will be praying for a touchdown if Higbee makes the salaries fit in Divisional Round DFS.\u00a0\n",
    "timestamp": "2021-01-10 02:54 AM",
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
    "week16": 4.9,
    "week17": 5.6,
    "week18": 0.9,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [5.5, 25.9, 7.0, 3.6, 2.2, 7.1, 'DNP', 2.4, 'BYE', 7.5, 4.0, 1.1, 10.4, 4.4, 14.7, 4.9, 5.6, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.5, 3.1, 8.1, 5.3, 4.9, 'DNP', 3.1, 'BYE', 6.8, 9.8, 4.9, 4.5, 6.9, 6.8, 4.8, 5.7, 2.6, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 9.8, 0.0, 0.8, 0.0, 0.0, 'DNP', 5.9, 'BYE', 2.2, 0.3, 0.0, 0.0, 0.0, 0.6, 0.0, 7.1, 0.0, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 15.5, 10.1, 9.3, 13.5, 10.0, 'DNP', 14.9, 'BYE', 9.3, 9.1, 11.9, 9.9, 11.1, 9.0, 8.7, 16.8, 10.2, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3911853.png",
    "name": "Adam Trautman",
    "depthchart": "Backup: TE-2",
    "team": "New Orleans Saints",
    "projected": 3.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 19,
    "avg_fp2": 2.04,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints TE Adam Trautman is expected to start in Week 4 against the Lions.\n",
    "report": "",
    "analysis": "With Jared Cook (groin) out, Trautman is stepping into an expanded role along with Josh Hill. He should see a few\u00a0targets in an offense that\u2019s also missing Michael Thomas (ankle) and hasn\u2019t gotten much from Emmanuel Sanders and Tre\u2019Quan Smith. Trautman is a back-end\u00a0streaming option and DFS punt.\n",
    "timestamp": "2020-10-08 08:35 PM",
    "source": "USA Today",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 11.4,
    "week10": 0.0,
    "week11": 2.4,
    "week12": 1.3,
    "week13": 2.4,
    "week14": 1.7,
    "week15": 0.0,
    "week16": 5.5,
    "week17": 1.0,
    "week18": 0.9,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 11.4, 0.0, 2.4, 1.3, 2.4, 1.7, 0.0, 5.5, 1.0, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.3, 'DNP', 'BYE', 'DNP', -1.4, -1.1, 0.8, -0.3, -0.3, 2.0, 0.9, 2.5, 0.8, 2.5, 3.4, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.1, 0.0, 0.0, 0.3, 0.0, 0.0, 0.1, 1.8, 0.0, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 5.6, 'DNP', 'BYE', 'DNP', 6.2, 0.7, 1.8, 7.4, 2.7, 6.4, 3.9, 2.1, 3.4, 5.8, 3.1, 2.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Rams",
    "projected": 3.5,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 13,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 8.18,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Gerald Everett caught 2-of-7 targets for 25 yards in the Rams' Week 17 win over the Cardinals.\n",
    "report": "",
    "analysis": "Everett's seven targets were tied for second on the team, but John Wolford didn't create many plays under center with his arm, as the offense generated zero touchdowns. Everett's targets were promising, but he and Tyler Higbee continue to cancel each other out as back-end TE2 plays for the Wild Card date with the Seahawks.\n",
    "timestamp": "2021-01-04 06:22 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 0.0,
    "week03": 4.4,
    "week04": 5.7,
    "week05": 11.0,
    "week06": 4.2,
    "week07": 10.8,
    "week08": 5.7,
    "week09": "BYE",
    "week10": 3.7,
    "week11": 4.7,
    "week12": 2.6,
    "week13": 7.4,
    "week14": 1.4,
    "week15": 3.8,
    "week16": 2.3,
    "week17": 3.5,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [1.2, 0.0, 4.4, 5.7, 11.0, 4.2, 10.8, 5.7, 'BYE', 3.7, 4.7, 2.6, 7.4, 1.4, 3.8, 2.3, 3.5, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 4.0, -1.0, 4.7, 2.4, 3.5, 4.3, 1.2, 'BYE', 4.9, 6.2, 5.0, 3.6, 4.8, 4.4, 4.0, 3.1, 2.1, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.5, 0.6, 0.0, 0.0, 0.0, 'BYE', 4.8, 0.0, 1.4, 0.5, 0.9, 0.0, 1.5, 0.0, 0.4, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 8.9, 6.2, 6.2, 8.5, 8.2, 7.7, 7.7, 'BYE', 12.7, 8.5, 10.3, 8.9, 8.9, 7.6, 10.6, 9.4, 7.4, 7.3]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 7.5,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 2,
    "opp_avg_pts": 31.31,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 18.94,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Marcus Peters (back) is considered questionable for the Ravens' Divisional Round game against Buffalo.\u00a0\n",
    "report": "",
    "analysis": "Peters was limited during Thursday's practice. It's an upgrade for Peters, who did not practice on Tuesday or Wednesday. He has played through several injuries this season, including a calf ailment that plagued him in the final weeks of the regular season. The Ravens are going to need Peters against Buffalo's lethal passing attack.\u00a0\n",
    "timestamp": "",
    "source": "Jamison Hensley on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.12,
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
    "week16": 10.0,
    "week17": 11.0,
    "week18": 7.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 20.0, 5.0, 'BYE', 4.0, 8.0, 1.0, 3.0, 8.0, 3.0, 0.0, 10.0, 10.0, 11.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 7.0, 7.7, 7.8, 10.0, 7.1, 'BYE', 8.2, 6.3, 6.6, 7.8, 5.0, 9.3, 6.9, 8.3, 8.8, 7.4, 5.1, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 1.9, 3.9, 2.2, 1.3, 'BYE', 4.4, 0.8, 0.6, 0.0, 0.9, 1.7, 2.2, 3.4, 3.3, 1.9, 1.7, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 16.7, 15.3, 16.4, 16.0, 14.0, 'BYE', 19.1, 14.2, 15.0, 13.9, 16.4, 12.9, 14.1, 16.6, 16.6, 14.2, 15.8, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 7.4,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 22,
    "opp_avg_pts": 23.25,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 23.06,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4600",
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
    "game_day_logo": "",
    "avg_fp2": 5.12,
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
    "week16": 7.0,
    "week17": 6.0,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 5.0, 'BYE', -1.0, 6.0, 0.0, 6.0, 6.0, 4.0, 9.0, 10.0, 4.0, 6.0, 7.0, 6.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.0, 4.5, 6.2, 'BYE', 6.2, 5.0, 7.3, 4.5, 7.8, 6.6, 7.7, 6.6, 5.9, 6.4, 6.3, 6.6, 'DNP', 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.1, 1.9, 0.8, 'BYE', 0.9, 4.8, 1.2, 0.9, 0.7, 1.2, 3.1, 0.9, 1.2, 1.7, 0.8, 1.0, 'DNP', 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 14.0, 14.1, 13.7, 'BYE', 14.1, 17.7, 14.1, 14.0, 14.8, 14.0, 15.4, 14.6, 13.9, 14.3, 14.1, 13.3, 'DNP', 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.5,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 30.75,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 21.06,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints activated CB\u00a0Patrick Robinson (hamstring) from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "The nickel man was limited to seven 2020 appearances as he battled continual hamstring woes. With the Saints' secondary finally at full strength, Robinson figures to mix in for 25-30 snaps against the Bears.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.35,
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
    "week16": 1.0,
    "week17": 17.0,
    "week18": 5.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 4.0, -3.0, 4.0, 3.0, 'BYE', 1.0, 7.0, 16.0, 14.0, 16.0, 14.0, 6.0, 2.0, 7.0, 1.0, 17.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.4, 'BYE', 4.9, 7.2, 5.4, 5.7, 6.1, 6.0, 6.1, 6.2, 6.2, 4.9, 7.5, 6.4, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4, 'BYE', 1.1, 0.4, 1.0, 0.2, 0.4, 2.7, 5.8, 0.5, 2.3, 0.0, 0.4, 0.4, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9, 'BYE', 12.1, 12.7, 13.2, 12.1, 12.1, 14.8, 16.5, 12.6, 13.3, 14.4, 12.0, 12.7, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 6.3,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.88,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 23.44,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.06,
    "fanduelSalary": "$4000",
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
    "game_day_logo": "",
    "avg_fp2": 5.65,
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
    "week16": 7.0,
    "week17": 15.0,
    "week18": 0.0,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [6.0, 2.0, 5.0, 6.0, -4.0, 1.0, 14.0, 4.0, 12.0, 6.0, 'BYE', 6.0, 4.0, 6.0, 6.0, 7.0, 15.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.9, 4.8, 6.5, 6.4, 5.8, 4.8, 'BYE', 3.8, 4.9, 5.3, 8.3, 4.9, 6.5, 5.6, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1, 0.7, 1.0, 0.0, 0.4, 0.0, 'BYE', 0.6, 0.7, 0.6, 1.0, 0.8, 0.5, 0.5, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8, 13.8, 14.1, 14.3, 13.2, 13.1, 'BYE', 13.5, 13.4, 13.7, 14.4, 13.3, 13.8, 13.5, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.3,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 14,
    "opp_avg_pts": 25.38,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 22.25,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.81,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs activated LB Anthony Hitchens from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Stuck on the team's COVID list as a close-contact since Week 16,\u00a0Hitchens will only miss one relevant game since Andy Reid rested all key starters in the regular season finale against the Chargers. Hitchens has collected 78 tackles and one pass defended across 14 starts this year.\n",
    "timestamp": "",
    "source": "Pro Football Talk on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.5,
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
    "week16": 7.0,
    "week17": -1.0,
    "week18": "DNP",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [7.0, 5.0, 7.0, 14.0, -1.0, 5.0, 24.0, 9.0, 1.0, 'BYE', 1.0, 5.0, 5.0, 14.0, 2.0, 7.0, -1.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 7.6, 4.1, 6.6, 8.1, 6.6, 'BYE', 6.0, 5.7, 6.7, 6.5, 5.1, 5.8, 7.0, 'DNP', 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5, 0.8, 0.0, 0.6, 1.4, 'BYE', 0.3, 0.2, 0.9, 0.9, 0.2, 0.6, 0.6, 'DNP', 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7, 13.2, 13.5, 14.1, 14.0, 'BYE', 13.1, 14.5, 14.0, 13.0, 13.0, 13.8, 13.8, 'DNP', 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.8,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 5,
    "opp_avg_pts": 30.12,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 22.19,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.69,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers placed LB Kevin Minter on the\u00a0reserve/COVID list.\n",
    "report": "",
    "analysis": "Minter started in Tampa Bay's last two games, most recently collecting six tackles and one pass defended in Saturday's Wild Card win against Washington. Devin White, who was activated from the COVID list Monday, is expected to return to the team's starting lineup in the Divisional Round against the Saints.\n",
    "timestamp": "",
    "source": "Pro Football Talk on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.12,
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
    "week16": 12.0,
    "week17": 5.0,
    "week18": 4.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0, 6.0, 19.0, 6.0, 7.0, 1.0, 5.0, 4.0, 4.0, 'BYE', 9.0, 3.0, 12.0, 5.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.8, 5.2, 6.5, 9.1, 5.3, 7.6, 8.0, 6.7, 'BYE', 6.5, 6.2, 6.4, 7.1, 9.6, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5, 1.2, 0.7, 2.3, 1.8, 1.0, 1.0, 1.2, 'BYE', 1.0, 1.4, 0.1, 0.8, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0, 14.8, 14.7, 15.6, 15.8, 14.5, 15.2, 14.7, 'BYE', 14.9, 14.5, 15.4, 14.1, 14.6, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 5.2,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 1,
    "opp_avg_pts": 31.81,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 18.5,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.06,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Aaron Donald (ribs) has been removed from the Rams' Divisional\u00a0Round injury report.\u00a0\n",
    "report": "",
    "analysis": "Donald's injury ended up looking worse than it was. Either that, or he has been given enough pain-killing injections to no longer feel his ribs. Donald said on Wednesday that he had \"no pain.\" It's the best-case scenario for the Rams, who are going to need Donald to once again wreak havoc up front if they are to spring another road postseason upset against the Packers in wintry Green Bay.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.71,
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
    "week16": 6.0,
    "week17": 14.0,
    "week18": 10.0,
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [4.0, 5.0, 4.0, 11.0, 12.0, 0.0, 12.0, 4.0, 'BYE', 13.0, 5.0, 9.0, 5.0, 15.0, 2.0, 6.0, 14.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 8.4, 6.9, 6.4, 5.2, 'BYE', 6.4, 6.3, 7.5, 7.4, 6.7, 10.2, 5.6, 7.6, 5.9, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2, 0.6, 0.3, 0.9, 'BYE', 1.1, 1.5, 1.1, 1.5, 0.0, 0.6, 0.0, 0.6, 0.6, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4, 14.8, 14.0, 14.2, 'BYE', 13.7, 14.7, 14.6, 14.0, 15.4, 12.9, 13.9, 13.4, 14.1, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 4.8,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 6,
    "opp_avg_pts": 29.56,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 25.81,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns activated CB Denzel Ward from the\u00a0reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Kevin Johnson was also activated from the COVID list. Getting both players back comes at a good time with\u00a0CB Robert Jackson going on IR with a\u00a0hamstring injury. The Browns will try to limit Tyreek Hill with a healthy Ward in Sunday's Divisional Round matchup\u00a0with the Chiefs, with\u00a0Johnson resuming his role in nickel packages.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.24,
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
    "week16": 6.0,
    "week17": 3.0,
    "week18": 6.0,
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 4.0, 14.0, 5.0, 7.0, 1.0, 7.0, 3.0, 'BYE', 6.0, 14.0, 0.0, 5.0, 2.0, 8.0, 6.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0, 5.1, 5.6, 7.5, 'BYE', 6.1, 7.3, 6.2, 3.2, 5.9, 5.8, 6.4, 7.1, 5.8, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4, 0.0, 0.9, 0.0, 'BYE', 0.9, 1.1, 1.4, 0.7, 0.7, 1.2, 1.1, 1.0, 1.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3, 13.6, 11.2, 10.3, 'BYE', 11.9, 10.4, 11.7, 11.0, 11.1, 11.6, 11.7, 11.7, 11.9, 10.5]
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