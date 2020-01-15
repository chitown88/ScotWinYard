var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {
  
  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 15 January 2020 09:50 AM (central time)"};
$scope.week = {"nflWeek": "Conference Championships"};

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
    "projected": 22.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 5,
    "avg_fp2": 20.86,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.41,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Marvelous second quarter spurs win",
    "report": "Mahomes completed 23 of 35 pass attempts for 321 yards and five touchdowns, while also picking up 53 rushing yards on seven carries during Sunday's 51-31 AFC divisional-round win against Houston.",
    "analysis": "The reigning MVP orchestrated a trademark comeback effort after Kansas City fell into a 24-0 hole, joining Washington's Doug Williams as the only quarterbacks in postseason history with four TD passes in a single quarter, as the Chiefs rattled off 28 second-quarter points and a total of 41 unanswered points Sunday. With the convincing come-from-behind victory, Kansas City became the first team in NFL history to win by 20-plus points after trailing by at least 20 in a playoff game, while Mahomes established postseason career bests in both passing yards and TDs. He now owns an impressive 31:5 TD:INT in the regular season and postseason while averaging more than 290 passing yards per game. However, he now heads into an AFC Championship Game matchup against a Tennessee defense that has forced three interceptions and allowed just one TD throw thus far in the playoffs.",
    "timestamp": "2020-01-12 03:53 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5, 14.92, 23.7, 25.44, 12.06, 'DNP', 38.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 24.5, 18.1, 'BYE', 21.5, 18.6, 24.0, 21.2, 20.1, 'DNP', 19.9, 22.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.7, 16.9, 17.6, 22.8, 18.8, 15.0, 14.1, 'DNP', 'DNP', 4.3, 19.8, 'BYE', 18.9, 6.5, 7.1, 15.3, 8.5, 'DNP', 11.1, 17.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [36.1, 23.4, 24.2, 34.0, 36.1, 31.4, 26.6, 'DNP', 'DNP', 29.9, 31.1, 'BYE', 32.6, 26.9, 34.2, 31.9, 33.4, 'DNP', 34.4, 27.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 20.6,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 17.77,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 16.24,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Throws two TD passes vs. Seahawks",
    "report": "Rodgers completed 16 of 27 pass attempts for 243 yards and two touchdowns during Sunday's 28-23 divisional-round win over the Seahawks.",
    "analysis": "Rodgers completed just 59 percent of his pass attempts, but he averaged a healthy 9.0 yards per attempt thanks to some big gains through the air. The majority of his damage was done when targeting Davante Adams, who piled up 160 yards while reaching the end zone in the first and third quarters. Rodgers could be busier in next week's NFC Championship Game against the 49ers, but he could face a tough task against one of the league's best defensive units.",
    "timestamp": "2020-01-12 08:32 PM",
    "week01": 12.92,
    "week02": 14.36,
    "week03": 13.3,
    "week04": 26.48,
    "week05": 9.42,
    "week06": 19.32,
    "week07": 43.76,
    "week08": 27.1,
    "week09": 12.94,
    "week10": 10.02,
    "week11": "BYE",
    "week12": 11.46,
    "week13": 28.12,
    "week14": 11.4,
    "week15": 14.42,
    "week16": 9.34,
    "week17": 20.02,
    "week18": "DNP",
    "week19": 19.12,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46, 28.12, 11.4, 14.42, 9.34, 20.02, 'DNP', 19.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.1, 22.1, 'BYE', 12.9, 21.7, 22.5, 23.8, 15.3, 18.1, 'DNP', 19.8, 20.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 15.4, 20.3, 11.1, 15.5, 14.7, 16.1, 16.8, 14.6, 14.2, 'BYE', 16.1, 17.2, 13.6, 13.2, 13.7, 19.3, 'DNP', 14.1, 14.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.8, 26.8, 29.6, 25.0, 24.1, 24.8, 23.0, 28.7, 25.0, 31.5, 'BYE', 24.2, 31.8, 30.0, 21.1, 22.2, 26.8, 'DNP', 24.1, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 17.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 21,
    "avg_fp2": 19.18,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.27,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Trio of touchdowns in shocking win",
    "report": "Tannehill completed seven of 14 passes for 88 yards with two touchdowns and no interceptions in the Titans' 28-12 divisional-round win over the Ravens on Saturday. He also rushed six times for 13 yards and another score.",
    "analysis": "For the second consecutive postseason victory, Tannehill played the game-manager role with great efficacy, as he threw only when absolutely necessary and made excellent use of his 13 total touches. The veteran opened the scoring with a 12-yard touchdown pass to Jonnu Smith before connecting with Kalif Raymond on a perfectly thrown 45-yard bomb on the second play of the second quarter. Tannehill then helped seal the shocking upset with a one-yard touchdown run with 4:20 remaining in the third quarter, which pushed the Titans' advantage to 28-12 at the time. The 31-year-old continues his improbable season in next Sunday's AFC Championship Game, a contest in which Tennessee will take to the road for a third straight week and face either the division-rival Texans or the Chiefs.",
    "timestamp": "2020-01-11 08:51 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 20.18,
    "week08": 19.42,
    "week09": 25.04,
    "week10": 18.94,
    "week11": "BYE",
    "week12": 32.36,
    "week13": 13.78,
    "week14": 28.54,
    "week15": 25.16,
    "week16": 23.68,
    "week17": 17.92,
    "week18": 6.98,
    "week19": 18.82,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36, 13.78, 28.54, 25.16, 23.68, 17.92, 6.98, 18.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 18.8, 10.8, 19.6, 'BYE', 13.0, 11.9, 13.9, 19.5, 18.3, 15.3, 11.1, 16.4, 17.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3, 8.1, 5.9, 15.1, 'BYE', 11.7, 10.4, 6.6, 10.4, 8.7, 13.9, 12.1, 7.9, 9.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.9, 18.7, 22.4, 26.8, 'BYE', 17.0, 25.9, 23.7, 26.4, 30.5, 29.3, 24.0, 21.7, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 14.6,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 16.52,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 14.35,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Just 19 pass attempts in win",
    "report": "Garoppolo completed 11 of 19 pass attempts for 131 yards, a touchdown and an interception in Saturday's 27-10 NFC divisional-round victory over the Vikings.",
    "analysis": "This game played out like one of the early season victories for the 49ers during its 10-0 start to the season. The defense was back at full strength and completely shut down the Vikings' offense, and the rushing attack did all of the heavy lifting on offense, leaving Garoppolo with little to do from a statistical standpoint. The 28-year-old may be asked to contribute more offensively in the NFC Championship Round, as either potential opposing quarterback (Russell Wilson or Aaron Rodgers) could put up more points and force Garoppolo to match his production. San Francisco's signal caller has come through with flying colors in these situations this season, but his upside remains lower than nearly every potential quarterback option that will be available in DFS contests next Sunday.",
    "timestamp": "2020-01-11 06:56 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1, 29.06, 12.6, 12.42, 11.8, 'DNP', 8.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.0, 18.0, 14.6, 15.6, 10.6, 21.8, 19.4, 16.7, 12.8, 'DNP', 18.8, 14.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.8, 3.1, 0.9, 'BYE', 9.3, 12.0, 10.6, 5.9, 5.0, 8.2, 9.1, 9.3, 8.5, 9.1, 7.6, 11.0, 9.3, 'DNP', 9.2, 9.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 23.1, 27.4, 'BYE', 14.2, 19.0, 20.3, 22.5, 26.9, 23.3, 17.4, 19.0, 19.7, 17.3, 27.2, 27.3, 17.5, 'DNP', 21.2, 20.6]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 15.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 23.01,
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
    "headlineNews": "Leads impressive rushing attack",
    "report": "Coleman rushed 22 times for 105 yards and two touchdowns in Saturday's 27-10 win over the Vikings.",
    "analysis": "Coleman split starting duties with Raheem Mostert. as per usual, but the former had a bit more success early on. This led to coach Kyle Shanahan rolling with the hot hand -- as he is prone to do -- in the second half, and Coleman ran roughshod all over Minnesota's front seven while Mostert left the game in the fourth quarter with a calf cramp. The 22 carries were a new season high for the 26-year-old; in fact, he had only reached the 20-carry mark just once in 2019, and he hadn't received double-digit touches since Week 12 of the regular season. Saturday's box score should lead to Coleman becoming the preferred option coming out of San Francisco's backfield for the NFC Championship Game next Sunday, but Mostert will also see a healthy amount of touches to remain relevant as a DFS option.",
    "timestamp": "2020-01-11 06:03 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0, 0.6, 4.0, 3.3, 2.3, 'DNP', 22.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 16.8, 12.8, 12.9, 12.0, 14.6, 9.2, 5.2, 8.3, 8.0, 'DNP', 8.7, 15.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 'DNP', 'DNP', 'BYE', 4.3, 4.4, 4.0, 5.5, 6.1, 3.2, 4.0, 4.7, 9.0, 1.8, 10.4, 6.9, 1.4, 'DNP', 3.7, 2.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 'DNP', 'DNP', 'BYE', 14.3, 10.0, 12.6, 17.0, 35.6, 19.0, 15.5, 10.2, 14.8, 9.6, 19.9, 13.7, 12.5, 'DNP', 7.8, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 15.1,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 23,
    "avg_fp2": 11.4,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Three scores in divisional round",
    "report": "Williams ran for 47 yards and two touchdowns on 12 carries and caught two of six targets for 21 receiving yards and an additional TD during Sunday's 51-31 divisional-round win against Houston.",
    "analysis": "Williams' first score was the snowball that started the avalanche, as Kansas City went on to rack up an additional 35 unanswered points after he hauled in a 17-yard TD pass from Patrick Mahomes at the 9:55 mark of the second quarter. He was an effective red-zone rusher in addition to his contributions in the passing game, punching in five- and one-yard TD runs during the third quarter to help KC balloon its lead to 17 points before Houston finally broke its scoreless streak. Williams has now racked up 314 scrimmage yards and six total scores since Week 16, but he now draws an AFC Championship Game matchup against a Titans defense that held Baltimore RBs to just 42 combined rushing yards on nine carries Saturday.",
    "timestamp": "2020-01-12 04:55 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP', 'DNP', 'DNP', 16.7, 29.4, 'DNP', 25.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 9.6, 8.7, 13.6, 'BYE', 'DNP', 'DNP', 'DNP', 12.8, 14.8, 'DNP', 13.0, 15.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 16.0, 'DNP', 'DNP', 10.9, 6.7, 5.0, 0.9, 0.0, 1.2, 0.7, 'BYE', 'DNP', 'DNP', 'DNP', 4.7, 3.1, 'DNP', 6.3, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 22.2, 'DNP', 'DNP', 21.5, 28.9, 19.7, 12.1, 13.6, 8.4, 19.7, 'BYE', 'DNP', 'DNP', 'DNP', 10.0, 13.7, 'DNP', 24.3, 31.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 14.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Pos": 3,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.57,
    "fanduelSalary": "$9800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Tramples another elite defense",
    "report": "Henry rushed 30 times for 195 yards, threw a three-yard touchdown pass, and brought in both his targets for seven yards in the Titans' 28-12 divisional-round win over the Ravens on Saturday.",
    "analysis": "The final rushing numbers encapsulate how dominant Henry was against yet another elite defensive unit, while his unlikely touchdown pass was a perfect combination of precisely timed playcalling by offensive coordinator Arthur Smith and flawless execution by Henry on a jump pass to Corey Davis. Henry now has at least 30 carries in three consecutive contests dating back to Week 17, a span during which he's accumulated a jaw-dropping 588 rushing yards and four scores on the ground in addition to the one through the air Saturday. Henry still appears  fresh despite the heavy usage, which doesn't bode well for either the Texans or the Chiefs in next Sunday's AFC Championship Game.",
    "timestamp": "2020-01-11 09:05 PM",
    "week01": 28.4,
    "week02": 16.3,
    "week03": 11.1,
    "week04": 11.3,
    "week05": 13.8,
    "week06": 3.8,
    "week07": 17.3,
    "week08": 6.8,
    "week09": 23.4,
    "week10": 32.1,
    "week11": "BYE",
    "week12": 28.0,
    "week13": 22.1,
    "week14": 23.4,
    "week15": 8.6,
    "week16": "DNP",
    "week17": 39.1,
    "week18": 26.9,
    "week19": 25.32,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0, 22.1, 23.4, 8.6, 'DNP', 39.1, 26.9, 25.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.7, 13.0, 'BYE', 16.3, 9.1, 12.1, 18.4, 'DNP', 16.0, 12.7, 16.5, 14.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.7, 9.6, 0.5, 15.1, 7.1, 2.4, 2.6, 5.1, 1.0, 'BYE', 8.5, 0.0, 6.9, 5.2, 'DNP', 6.6, 12.3, 7.7, 9.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 30.6, 28.8, 34.3, 41.1, 23.0, 18.8, 19.8, 21.0, 26.3, 'BYE', 31.3, 23.4, 25.2, 24.3, 'DNP', 18.4, 25.4, 24.7, 31.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 12.1,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 15,
    "avg_fp2": 18.14,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.89,
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
    "headlineNews": "Scores two TDs in win over Seahawks",
    "report": "Jones carried 21 times for 62 yards and two touchdowns during Sunday's 28-23 divisional-round win over the Seahawks. He also caught one of two targets for four yards.",
    "analysis": "Jones' yardage output was lacking on an evening when he averaged just 3.0 yards per carry while doing next to nothing as a receiver. He salvaged his performance from a fantasy perspective with a pair of one-yard touchdown runs in the second quarter. Jones finished the regular season with three 100-yard games in his last four, so his struggles to produce efficiently came as a bit of a surprise. Things won't get any easier in next week's NFC Championship Game against a 49ers team that just shut down the Vikings' Dalvin Cook, and that's been one of the stingiest teams against the run all season.",
    "timestamp": "2020-01-12 08:50 PM",
    "week01": 4.4,
    "week02": 23.0,
    "week03": 14.8,
    "week04": 14.8,
    "week05": 45.7,
    "week06": 6.0,
    "week07": 16.3,
    "week08": 38.1,
    "week09": 3.4,
    "week10": 27.3,
    "week11": "BYE",
    "week12": 3.8,
    "week13": 5.1,
    "week14": 28.2,
    "week15": 17.1,
    "week16": 27.0,
    "week17": 15.3,
    "week18": "DNP",
    "week19": 19.1,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8, 5.1, 28.2, 17.1, 27.0, 15.3, 'DNP', 19.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 14.8, 17.8, 'BYE', 10.2, 10.3, 11.3, 14.1, 12.2, 20.7, 'DNP', 22.0, 12.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.2, 0.0, 0.0, 7.0, 5.6, 0.0, 13.7, 0.0, 18.6, 'BYE', 0.0, 4.4, 1.1, 0.0, 0.0, 1.6, 'DNP', 7.6, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 15.0, 20.1, 19.3, 22.7, 27.0, 35.0, 33.6, 16.2, 47.8, 'BYE', 38.9, 18.2, 17.2, 12.3, 18.7, 13.4, 'DNP', 23.4, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 6.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 15,
    "avg_fp2": 9.06,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.89,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Minimal role in playoff victory",
    "report": "Williams had one carry for three yards and one reception for nine yards in Sunday's divisional-round win over the Seahawks.",
    "analysis": "Williams was back in action after missing the Packers' regular season finale because of a shoulder injury, but he only played a complementary role alongside Aaron Jones in the Packers' first playoff game, totaling two touches on nine snaps. He could be a bit more active in next weekend's NFC Championship Game if the Packers decide they need him to assist with pass protection more often than he did Sunday.",
    "timestamp": "2020-01-13 10:03 AM",
    "week01": 2.5,
    "week02": 11.6,
    "week03": 9.6,
    "week04": 0.5,
    "week05": "DNP",
    "week06": 21.6,
    "week07": 11.1,
    "week08": 17.1,
    "week09": 13.9,
    "week10": 6.3,
    "week11": "BYE",
    "week12": 11.5,
    "week13": 8.7,
    "week14": 2.4,
    "week15": 3.8,
    "week16": 6.2,
    "week17": "DNP",
    "week18": "DNP",
    "week19": 1.7,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9, 6.3, 'BYE', 11.5, 8.7, 2.4, 3.8, 6.2, 'DNP', 'DNP', 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 8.8, 10.1, 'BYE', 9.2, 5.4, 6.7, 8.2, 5.1, 'DNP', 'DNP', 9.1, 6.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 0.0, 5.2, 4.3, 'DNP', 0.7, 0.5, 0.0, 1.2, 6.9, 'BYE', 0.8, 10.1, 6.8, 5.1, 3.1, 'DNP', 'DNP', 4.5, 6.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 30.2, 21.3, 26.1, 'DNP', 21.2, 6.9, 18.7, 18.3, 16.8, 'BYE', 20.3, 23.9, 24.9, 11.8, 9.1, 'DNP', 'DNP', 13.5, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 6.1,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 9.89,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 23.01,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Dealing with calf cramp",
    "report": "Mostert told Nick Wagoner of ESPN.com after Saturday's win against the Vikings that he exited in the fourth quarter due to a cramp in his calf.",
    "analysis": "According to Mostert, he was treated with an IV and added that he dealt with \"some sickness\" during the week. Niners injury reports prior to the game didn't mention his name at all, but in any case he expects to be fine moving forward. On Saturday, Mostert took a back seat to Tevin Coleman (22 carries for 105 yards) out of the backfield but still contributed 58 yards on 12 rushes and recovered a muffed punt.",
    "timestamp": "2020-01-11 05:52 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 'DNP', -0.2, 4.0, 3.7, 13.2, 22.4, 23.9, 10.4, 11.3, 19.8, 'DNP', 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 'DNP', 5.7, 2.5, 8.4, 1.8, 2.0, 2.0, 11.4, 13.1, 16.8, 'DNP', 12.7, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 4.4, 'BYE', 0.0, 0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 2.0, 4.5, 4.2, 0.0, 8.4, 1.0, 'DNP', 4.8, 5.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 8.9, 27.6, 'BYE', 25.7, 17.9, 20.2, 'DNP', 21.0, 9.9, 10.2, 8.4, 14.3, 17.2, 15.8, 16.6, 11.6, 'DNP', 20.6, 23.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361606.png",
    "name": "Darwin Thompson",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 23,
    "avg_fp2": 2.3,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Minimal Week 17 showing",
    "report": "Thompson collected 17 yards on four carries and reeled in his only target for a loss of four yards in the regular-season finale Sunday versus the Chargers.",
    "analysis": "Thompson's 12 offensive snaps Sunday represent an increase compared to the six he logged against Chicago, but it doesn't exactly position him as a fantasy threat during the postseason. The rookie finished the 2019 regular season with 37 carries for 128 yards and a touchdown, and recorded just nine grabs for 43 yards over the 12 games in which he appeared. With Damien Williams under contract again in 2020, Thompson's immediate fantasy future doesn't appear bright.",
    "timestamp": "2019-12-31 03:35 PM",
    "week01": 0.8,
    "week02": 0.1,
    "week03": 0.8,
    "week04": 0.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "BYE",
    "week13": "DNP",
    "week14": 6.3,
    "week15": 4.4,
    "week16": "DNP",
    "week17": 1.8,
    "week18": "DNP",
    "week19": 0.0,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 0.1, 0.8, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 6.3, 4.4, 'DNP', 1.8, 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 3.1, 3.3, 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.6, 2.1, 'DNP', 3.8, 'DNP', 5.0, 5.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 0.8, 0.6, 1.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 2.2, 'DNP', 0.0, 'DNP', 0.2, 0.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.9, 1.5, 2.0, 2.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.7, 9.7, 'DNP', 7.2, 'DNP', 10.0, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 5.7,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 23,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "No snaps in regular-season finale",
    "report": "Despite being active for the regular-season finale, McCoy did not take the field against the Chargers.",
    "analysis": "McCoy's involvement in the Chiefs' offense has screeched to a grinding halt; he was a healthy scratch in Week 16 before spending Week 17 on the bench. The veteran back finished the 2019 regular season with just 101 carries for 465 yards and four touchdowns and will likely see a minimal role in the playoffs before becoming a free agent again this offseason.",
    "timestamp": "2020-01-03 11:08 AM",
    "week01": "DNP",
    "week02": 3.8,
    "week03": 21.5,
    "week04": 15.9,
    "week05": 1.3,
    "week06": 5.4,
    "week07": 8.6,
    "week08": 6.3,
    "week09": 1.4,
    "week10": "DNP",
    "week11": 13.7,
    "week12": "BYE",
    "week13": 10.5,
    "week14": 4.8,
    "week15": 1.6,
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": 0.0,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE', 10.5, 4.8, 1.6, 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 8.2, 'DNP', 6.8, 'BYE', 5.3, 5.0, 7.7, 'DNP', 'DNP', 'DNP', 4.8, 5.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.9, 0.0, 10.6, 13.0, 8.5, 2.5, 5.6, 3.8, 'DNP', 2.0, 'BYE', 3.8, 5.9, 7.3, 'DNP', 'DNP', 'DNP', 4.5, 4.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 16.0, 20.0, 21.2, 16.9, 9.0, 11.0, 12.0, 'DNP', 10.7, 'BYE', 11.4, 18.4, 10.4, 'DNP', 'DNP', 'DNP', 13.8, 11.1]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 14.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 5,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.12,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Just three catches, muffs punt",
    "report": "Hill caught three of four targets for 41 receiving yards and lost one fumble during Sunday's 51-31 divisional-round win against the Texans.",
    "analysis": "The four-time Pro Bowler put his defense into a precarious situation late in the first quarter, muffing a Bryan Anger punt inside his own 10-yard line and setting up Houston for a touchdown two plays later to extend its lead to 21-0. Hill would later have to briefly exit the game after absorbing a hard hit from Texans safety Justin Reid, but he would return a drive later and finish out the contest. In addition to his 20-yard catch that helped the Chiefs tally a go-ahead TD shortly before the halftime break, Hill also drew a pass interference call on Bradley Roby in the third quarter to help situate KC inside the red zone for another score at the 4:39 mark. His contributions of late have not been clearly reflected on the stat sheet -- Hill has been held under 73 receiving yards for seven consecutive games heading into an AFC Championship Game against a Tennessee defense that allowed just one Raven to exceed 60 receiving yards in Saturday's win over Baltimore.",
    "timestamp": "2020-01-12 04:37 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6, 10.0, 21.3, 9.7, 8.1, 'DNP', 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 11.5, 13.5, 14.1, 'BYE', 13.5, 15.7, 17.1, 16.4, 12.9, 'DNP', 12.9, 14.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [15.3, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 1.0, 6.6, 12.3, 13.2, 7.8, 'BYE', 7.1, 6.1, 5.0, 10.9, 5.5, 'DNP', 7.8, 8.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 'DNP', 'DNP', 'DNP', 'DNP', 15.2, 28.1, 29.4, 16.8, 25.6, 29.1, 'BYE', 20.1, 28.3, 24.6, 26.4, 20.1, 'DNP', 19.7, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 14.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 10.7,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Carries offense in win",
    "report": "Adams caught eight of 11 targets for 160 yards and two touchdowns during Sunday's 28-23 divisional-round win over the Seahawks.",
    "analysis": "Adams averaged an impressive 20.0 yards per catch, as he accounted for nearly two-thirds of Aaron Rodgers' passing yardage. The duo connected for a 20-yard touchdown in the first quarter while adding an electric 40-yard score in the third. Adams also helped put the game away with a beautiful 32-yard over-the-shoulder catch in the final minutes of the fourth quarter.  The talented wideout is averaging 118 yards per game with four touchdowns over his last four contests, and he'll look to continue his excellent form in next Sunday's NFC Championship Game against the 49ers.",
    "timestamp": "2020-01-12 08:43 PM",
    "week01": 5.6,
    "week02": 14.1,
    "week03": 7.6,
    "week04": 23.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 7.6,
    "week10": 15.3,
    "week11": "BYE",
    "week12": 15.8,
    "week13": 21.4,
    "week14": 6.1,
    "week15": 19.8,
    "week16": 16.1,
    "week17": 18.8,
    "week18": "DNP",
    "week19": 32.0,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 'DNP', 'DNP', 'DNP', 'DNP', 7.6, 15.3, 'BYE', 15.8, 21.4, 6.1, 19.8, 16.1, 18.8, 'DNP', 32.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 11.0, 13.2, 'BYE', 9.1, 14.3, 13.1, 15.1, 12.6, 17.2, 'DNP', 12.0, 14.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 4.1, 8.3, 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 6.0, 5.2, 'BYE', 6.3, 5.2, 10.7, 6.6, 13.5, 10.3, 'DNP', 10.0, 6.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 16.3, 19.0, 25.8, 'DNP', 'DNP', 'DNP', 'DNP', 15.0, 17.3, 'BYE', 16.3, 22.9, 23.3, 15.3, 21.2, 22.4, 'DNP', 17.9, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 10.8,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 10.73,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.4,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Huge game to finish regular season",
    "report": "Samuel corralled all five targets for 102 yards while rushing twice for 33 yards and a touchdown in Sunday's 26-21 win over Seattle.",
    "analysis": "Samuel made some big plays through the air, but he was able to find the end zone when he deployed a nifty spin move on a 30-yard end around in the first quarter. This was a signature game for the second-round rookie, as he flashed his ability as a wideout with his third 100-yard receiving game while also putting his versatility as a rushing threat on display. Samuel finishes his first pro season with 961 combined yards and six touchdowns over a full 16 games, surpassing receivers with more experience on the depth chart to finish second behind Emmanuel Sanders. The dynamic wideout figures to maintain that role through the playoffs, but he could elevate to the 49ers' top wide receiver option with Sanders set for unrestricted free agency this upcoming offseason.",
    "timestamp": "2019-12-29 10:37 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1, 13.4, 4.48, 13.9, 22.0, 'DNP', 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 5.9, 9.2, 7.6, 13.0, 8.6, 8.8, 8.2, 9.5, 9.2, 'DNP', 8.5, 10.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 5.4, 8.5, 'BYE', 9.7, 9.3, 'DNP', 5.6, 3.8, 1.8, 3.3, 0.0, 0.0, 3.0, 2.3, 5.7, 3.8, 'DNP', 4.8, 10.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.2, 6.1, 9.2, 'BYE', 11.2, 10.4, 'DNP', 6.7, 18.9, 15.4, 13.1, 19.6, 22.0, 20.8, 20.4, 17.6, 18.4, 'DNP', 22.0, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 10.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.4,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Quiet game on SNF",
    "report": "Sanders had three catches (four targets) for 25 yards in Sunday's 26-21 win over Seattle.",
    "analysis": "Sanders had a quiet cap to the 2019 regular season, finishing with 25 receiving yards or less for the fifth time in 10 starts with his new squad. The veteran's receptions had a much larger impact on the actual team, as he quickly became a third-down security blanket for Jimmy Garoppolo. Sanders finishes with 66 receptions for 869 yards and five touchdowns across 17 games between Denver and San Francisco. The 32-year-old is set to hit unrestricted free agency this upcoming offseason, and his eventual landing spot will help determine what kind of fantasy value we can expect from the wideout in 2020. For now, Sanders will look to help his current club on a quest for an appearance in the Super Bowl.",
    "timestamp": "2019-12-29 11:04 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1, 30.6, 1.9, 7.6, 4.0, 'DNP', 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 14.7, 13.9, 12.2, 12.9, 6.3, 7.5, 6.0, 8.5, 11.8, 'DNP', 10.7, 10.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 9.2, 9.0, 'BYE', 9.1, 5.3, 8.8, 7.6, 7.3, 11.6, 5.1, 3.9, 3.6, 6.5, 2.4, 4.5, 2.7, 'DNP', 6.4, 1.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 19.0, 19.8, 'BYE', 14.7, 23.3, 15.3, 19.6, 21.5, 26.4, 16.4, 24.5, 15.8, 11.2, 17.8, 16.6, 12.2, 'DNP', 9.6, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 9.9,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 5.33,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Limited in divisional-round victory",
    "report": "Lazard was not targeted but had one carry for five yards in Sunday's divisional-round win over the Seahawks.",
    "analysis": "An ankle injury suffered in the second quarter limited Lazard's opportunities to make an impact, and he finished with just 20 snaps. Lazard was spotted on the sideline after suffering the injury and, according to Lily Zhao of WFRV, was walking without a limp after the game, so he should be good to go for next weekend's NFC Championship Game.",
    "timestamp": "2020-01-13 09:55 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 5.7,
    "week08": 6.7,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": 17.8,
    "week14": 2.9,
    "week15": 2.4,
    "week16": 7.0,
    "week17": 14.9,
    "week18": "DNP",
    "week19": 0.5,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.7, 6.7, 'DNP', 'DNP', 'BYE', 'DNP', 17.8, 2.9, 2.4, 7.0, 14.9, 'DNP', 0.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.0, 3.1, 'DNP', 'DNP', 'BYE', 'DNP', 4.5, 6.8, 5.9, 8.3, 10.1, 'DNP', 8.6, 9.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.1, 0.5, 12.5, 'DNP', 0.0, 0.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.1, 8.9, 'DNP', 'DNP', 'BYE', 'DNP', 10.3, 5.7, 4.3, 2.8, 19.6, 'DNP', 21.5, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 9.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 21,
    "avg_fp2": 11.94,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Quiet in win",
    "report": "Brown hauled in his long target for four yards in the team's playoff win over the Patriots on Saturday.",
    "analysis": "Brown had topped 100 receiving yards in four of his last six contests, but failed to make much impact in the team's playoff win. However, he also wasn't given much opportunity as the team attempted just 15 passes in the contest, limiting the volume for all pass catchers. The Titans will likely need to throw more in a tough matchup against Baltimore in the divisional round of the playoffs, though the Ravens have proven to be a stingy defense throughout the second half of the season.",
    "timestamp": "2020-01-04 09:42 PM",
    "week01": 11.5,
    "week02": 4.0,
    "week03": 0.9,
    "week04": 22.9,
    "week05": 3.7,
    "week06": 3.3,
    "week07": 9.2,
    "week08": 8.1,
    "week09": 10.1,
    "week10": 2.2,
    "week11": "BYE",
    "week12": 21.5,
    "week13": 6.0,
    "week14": 31.1,
    "week15": 21.4,
    "week16": 14.8,
    "week17": 20.4,
    "week18": 0.9,
    "week19": 2.3,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5, 6.0, 31.1, 21.4, 14.8, 20.4, 0.9, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 8.5, 4.2, 'BYE', 10.7, 16.9, 6.9, 11.2, 10.7, 18.9, 11.7, 13.8, 9.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 7.8, 7.0, 6.1, 7.5, 7.0, 0.5, 2.1, 3.5, 5.0, 'BYE', 0.0, 0.0, 0.8, 0.0, 0.0, 5.5, 0.3, 3.5, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 9.1, 7.5, 6.9, 8.5, 7.7, 10.2, 7.6, 13.2, 13.9, 'BYE', 11.4, 10.9, 6.1, 23.9, 32.9, 32.4, 28.1, 26.8, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 7.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 5,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.12,
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
    "headlineNews": "Makes 48-yard catch",
    "report": "Watkins caught both of his targets for 76 receiving yards and ran for 14 yards on his only rush attempt during Sunday's 51-31 divisional-round win against the Texans.",
    "analysis": "The 2014 No. 4 overall draft choice made some notable contributions during his fourth career postseason appearance Sunday, corralling Patrick Mahomes passes of 48 and 28 yards as Kansas City punished Houston's defense for jumping offside in each instance. When also taking into account his 14-yard rush, the explosive Watkins accounted for 30 scrimmage yards per touch against the Texans after picking up just 10.3 yards per play Weeks 5 through 17. Though liable to break off an enormous gain any time he touches the ball, Watkins has commanded just 3.3 targets per game since Week 15 and has yet to reach the end zone since scoring three times in the season opener against Jacksonville.",
    "timestamp": "2020-01-12 05:09 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE', 0.0, 7.0, 8.4, 3.8, 1.3, 'DNP', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 8.5, 7.1, 7.7, 'BYE', 6.0, 9.2, 8.6, 5.3, 6.4, 'DNP', 6.4, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 0.0, 2.4, 1.0, 4.0, 'DNP', 'DNP', 1.0, 0.0, 2.8, 0.0, 'BYE', 0.8, 3.8, 2.9, 4.2, 0.0, 'DNP', 2.8, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 38.0, 20.4, 16.9, 22.8, 'DNP', 'DNP', 3.5, 18.9, 6.8, 16.2, 'BYE', 12.5, 19.5, 11.7, 9.6, 24.4, 'DNP', 8.2, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.3,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 5.18,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.4,
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
    "headlineNews": "Scores first career postseason TD",
    "report": "Bourne caught three of five targets for 40 yards and a touchdown in Saturday's 27-10 NFC divisional-round victory over Minnesota.",
    "analysis": "Bourne's three catches tied Deebo Samuel for the team lead in receptions, but the former was the only receiver to hit paydirt. It's tough to take away a whole lot from the 49ers' passing attack in this one, as the team played with the lead for the final three quarters and ran the ball 71 percent of the time. The 6-foot-1 wideout does offer upside in terms of his red-zone skills, as he now has six touchdowns on just 33 receptions this season, but he remains a cheap flyer in DFS formats heading into the NFC Championship Round next Sunday.",
    "timestamp": "2020-01-11 06:40 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 3.7, 5.7, 15.3, 1.6, 3.9, 0.0, 'DNP', 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 9.0, 4.3, 5.9, 6.1, 5.8, 6.3, 'DNP', 4.3, 5.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 0.0, 0.8, 1.9, 0.0, 2.3, 'DNP', 2.8, 1.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.9, 'DNP', 'DNP', 'DNP', 'DNP', 9.5, 10.1, 8.6, 11.1, 7.3, 6.3, 'DNP', 15.0, 11.6]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 17.4,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 12.86,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.68,
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
    "headlineNews": "Limited production in playoff win",
    "report": "Kittle had three catches (five targets) for 16 yards in Saturday's NFC divisional -round win over Minnesota.",
    "analysis": "This was set to be a tough matchup for Kittle on paper, as the Vikings allowed the sixth-fewest fantasy points to opposing tight ends. Minnesota boasts fast and athletic 4-3 linebackers, it consistently doubled San Francisco's star tight end when he went out on routes. Coach Kyle Shanahan's run-heavy game plan (47 rushes to 19 pass attempts) also factored into the 26-year-old's reduced offensive opportunities. Both of the 49ers' potential opponents in the upcoming NFC Championship Game (Seattle or Green Bay) were far more lenient on opposing tight ends this season, so there is certainly bounce-back potential for Kittle heading into next Sunday's contest.",
    "timestamp": "2020-01-11 06:21 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4, 15.7, 19.9, 16.4, 12.8, 'DNP', 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.6, 'DNP', 'DNP', 16.3, 12.5, 8.4, 17.4, 11.6, 12.3, 'DNP', 14.4, 17.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 13.6, 'BYE', 4.8, 11.8, 8.2, 7.7, 7.0, 'DNP', 'DNP', 7.5, 8.5, 0.0, 7.8, 3.5, 5.3, 'DNP', 6.4, 11.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.6, 15.3, 23.7, 'BYE', 19.1, 20.9, 21.8, 21.8, 20.4, 'DNP', 'DNP', 25.6, 20.5, 15.6, 25.2, 17.3, 24.5, 'DNP', 18.0, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 11.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 5,
    "avg_fp2": 12.92,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.14,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Fuels comeback with three TD grabs",
    "report": "Kelce hauled in 10 of 12 targets for 134 receiving yards and three touchdowns during Sunday's 51-31 AFC divisional-round win against the Texans.",
    "analysis": "Houston seemingly had no answers for the five-time Pro Bowl tight end, as Kelce had seven more receptions than any other Kansas City player Sunday while accounting for nearly 42 percent of his team's receiving yardage. He had a costly third-down drop on the Chiefs' opening drive of the afternoon; however, he responded by scoring on three consecutive second-quarter drives -- logging touchdown grabs of five, five and six yards as KC accounted for 21 points over the final 8:05 of the first half. Kelce has four combined touchdowns over two of his past three outings heading into an AFC Championship Game matchup against a Tennessee defense that allowed the second-most TDs to tight ends during the regular season.",
    "timestamp": "2020-01-12 04:15 PM",
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5, 14.5, 19.7, 17.4, 3.9, 'DNP', 36.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 6.8, 10.9, 11.2, 'BYE', 13.8, 10.6, 4.4, 12.3, 14.6, 'DNP', 13.3, 11.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 5.5, 1.9, 6.0, 4.6, 7.6, 2.1, 8.4, 6.7, 7.2, 7.4, 'BYE', 8.6, 9.0, 7.4, 9.4, 7.0, 'DNP', 9.1, 8.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 23.0, 14.9, 19.2, 21.2, 14.5, 14.5, 13.2, 11.5, 14.4, 14.9, 'BYE', 14.4, 16.1, 17.3, 17.2, 15.2, 'DNP', 15.6, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 11.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 5.11,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.58,
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
    "headlineNews": "Nets 49 receiving yards",
    "report": "Graham caught three of four targets for 49 yards during Sunday's 28-23 divisional-round win over the Seahawks.",
    "analysis": "Graham finished second on the team in targets, catches and receiving yards, though his modest totals in each category were nothing to write home about. He did make a couple of flashy plays, however, including a 27-yard grab and a crucial third-down conversion in the final minutes. With that said, Graham simply isn't a focal point in the offense and seems unlikely to produce notable numbers during next Sunday's NFC Championship Game against the 49ers.",
    "timestamp": "2020-01-12 08:54 PM",
    "week01": 10.5,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 15.1,
    "week05": 5.6,
    "week06": 2.7,
    "week07": 14.5,
    "week08": 3.5,
    "week09": 3.7,
    "week10": 6.9,
    "week11": "BYE",
    "week12": 1.2,
    "week13": 2.1,
    "week14": 6.4,
    "week15": 0.5,
    "week16": 2.1,
    "week17": 6.9,
    "week18": "DNP",
    "week19": 6.4,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2, 2.1, 6.4, 0.5, 2.1, 6.9, 'DNP', 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.9, 7.4, 'BYE', 5.9, 7.1, 9.8, 8.0, 5.1, 8.5, 'DNP', 10.5, 11.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 4.9, 2.0, 4.4, 3.2, 4.1, 4.4, 2.7, 5.0, 1.6, 'BYE', 4.2, 4.7, 2.2, 4.4, 3.8, 2.6, 'DNP', 1.3, 0.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 12.1, 11.0, 11.5, 7.5, 9.0, 7.9, 12.0, 10.7, 'BYE', 11.0, 11.1, 7.2, 12.9, 8.2, 9.4, 'DNP', 9.4, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 6.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 21,
    "avg_fp2": 5.45,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.01,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Touchdown grab in upset win",
    "report": "Smith secured two of three targets for 12 yards and a touchdown in the Titans' 28-12 divisional-round win over the Ravens on Saturday.",
    "analysis": "The third-year pro opened the scoring in the upset with a 12-yard scoring grab late in the first quarter, and although he was minimally involved thereafter, his role in helping the Titans establish a positive early tone was certainly invaluable. Smith's usage has fluctuated considerably at times this season, but he'll look to make an impact in next Sunday's AFC Championship Game versus either the Texans or Chiefs, two teams that were vulnerable to the tight end position all season.",
    "timestamp": "2020-01-11 09:32 PM",
    "week01": 2.2,
    "week02": 0.0,
    "week03": 3.0,
    "week04": 1.0,
    "week05": 6.2,
    "week06": 1.3,
    "week07": 7.9,
    "week08": 16.8,
    "week09": 3.3,
    "week10": 5.0,
    "week11": "BYE",
    "week12": 0.4,
    "week13": 1.0,
    "week14": 10.4,
    "week15": 14.2,
    "week16": 13.8,
    "week17": 0.7,
    "week18": 1.4,
    "week19": 8.2,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4, 1.0, 10.4, 14.2, 13.8, 0.7, 1.4, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 2.6, 3.3, 'BYE', 4.8, 8.0, 5.0, 10.5, 8.4, 5.7, 5.5, 6.7, 6.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.9, 0.0, 2.5, 2.6, 0.0, 'BYE', 0.1, 0.0, 0.0, 0.6, 0.7, 6.4, 0.8, 4.3, 0.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.5, 6.2, 8.2, 8.2, 4.5, 3.7, 11.0, 11.1, 13.1, 9.6, 'BYE', 3.4, 3.1, 2.8, 8.6, 12.6, 14.3, 11.9, 15.2, 12.5]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.2,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.06,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.44,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 8.47,
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0, -2.0, 3.0, 1.0, 1.0, 'DNP', 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 7.3, 7.1, 7.2, 6.8, 6.3, 5.5, 7.0, 9.1, 8.0, 'DNP', 7.1, 6.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 6.0, 6.1, 'BYE', 4.9, 2.2, 2.0, 3.9, 3.1, 7.4, 0.2, 4.0, 3.1, 4.0, 2.1, 3.9, 5.4, 'DNP', 3.5, 3.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 9.8, 9.5, 'BYE', 8.4, 6.9, 8.4, 13.5, 12.5, 15.3, 14.7, 10.1, 9.6, 10.9, 12.4, 10.7, 10.7, 'DNP', 9.6, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.1,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 25.12,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.81,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 7.82,
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
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0, 10.0, 11.0, 10.0, 13.0, 'DNP', 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 6.5, 5.9, 5.9, 'BYE', 6.9, 5.4, 6.1, 8.2, 7.1, 'DNP', 6.1, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 0.0, 1.3, 2.6, 1.6, 0.0, 4.8, 3.8, 2.7, 2.4, 3.6, 'BYE', 4.2, 3.2, 0.2, 6.2, 4.9, 'DNP', 4.3, 3.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.6, 17.1, 12.7, 8.7, 7.8, 12.3, 7.3, 10.8, 15.7, 12.1, 'BYE', 10.4, 7.8, 16.5, 10.0, 9.4, 'DNP', 9.7, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 5.7,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.56,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.76,
    "week01": 14.0,
    "week02": 12.0,
    "week03": 13.0,
    "week04": -1.0,
    "week05": 9.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 4.0,
    "week09": 2.0,
    "week10": 8.0,
    "week11": "BYE",
    "week12": -1.0,
    "week13": 10.0,
    "week14": 7.0,
    "week15": 13.0,
    "week16": 11.0,
    "week17": 4.0,
    "week18": "DNP",
    "week19": 5.0,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0, 10.0, 7.0, 13.0, 11.0, 4.0, 'DNP', 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.4, 8.1, 'BYE', 6.4, 8.3, 7.6, 7.6, 5.0, 6.8, 'DNP', 6.2, 5.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 2.8, 4.6, 3.5, 1.3, 2.7, 2.5, 2.4, 3.7, 2.4, 'BYE', 2.4, 4.9, 3.2, 3.8, 3.7, 1.8, 'DNP', 3.8, 2.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 23.0, 10.9, 9.2, 6.9, 7.8, 7.6, 8.5, 8.9, 12.0, 'BYE', 6.0, 9.9, 14.7, 13.5, 10.7, 15.4, 'DNP', 9.6, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 4.9,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.81,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.69,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.06,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.5,
    "week01": 17.0,
    "week02": 8.0,
    "week03": 1.0,
    "week04": 11.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": 4.0,
    "week08": 11.0,
    "week09": 8.0,
    "week10": 7.0,
    "week11": "BYE",
    "week12": 6.0,
    "week13": 16.0,
    "week14": 4.0,
    "week15": 5.0,
    "week16": -1.0,
    "week17": 7.0,
    "week18": 6.0,
    "week19": 14.0,
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0, 16.0, 4.0, 5.0, -1.0, 7.0, 6.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.6, 6.4, 'BYE', 8.4, 6.1, 6.5, 4.4, 5.8, 7.7, 5.3, 4.6, 4.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 4.4, 6.6, 4.2, 5.3, 6.7, 6.0, 1.5, 5.7, 0.0, 'BYE', 6.5, 5.6, 4.8, 3.2, 0.6, 1.6, 4.8, 1.9, 1.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 9.0, 9.9, 10.1, 10.3, 9.9, 11.1, 6.7, 10.4, 6.2, 'BYE', 10.3, 9.1, 9.6, 7.3, 5.6, 8.4, 7.6, 8.5, 6.6]
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