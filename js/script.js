var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 12 February 2022 08:29 AM (central time)"};
$scope.week = {"nflWeek": "Super Bowl"};
$scope.playoffLogo = {"src": "https://content.sportslogos.net/logos/7/593/full/6168__super_bowl-primary-2021.png"}

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 20.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 20.45,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.01,
    "fanduelSalary": "$15500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Matthew Stafford completed 31-of-45 passes for 337 yards, two touchdowns, and one interception in the Rams' 20-17, NFC Championship win over the 49ers.\n",
    "report": "",
    "analysis": "He also rushed for eight yards on five attempts, but that doesn't tell the whole story, as Stafford picked up a couple first downs with his legs. A couple last-play kneel-downs sunk his yardage total. Stafford's two touchdown throws went to Cooper Kupp from 16 and 11 yards out in the first and fourth quarters for the 19th and 20th times this season. Stafford looked like he was going to pull a \"Stafford\" with an end-zone interception in the first half, but he overcame it at the end of the day and engineered a fourth-quarter comeback for the ages. The Rams overcame a 10-point deficit and will host the Bengals two weeks from now in L.A. for Super Bowl 56. Stafford has been a major part of the Rams' postseason run with a 6:1 TD:INT mark.\n",
    "timestamp": "2022-02-01 05:01 PM",
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
    "week19": 24.28,
    "week20": 29.24,
    "week21": 21.28,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24, 27.16, 24.2, 15.06, 11.82, 'BYE', 22.98, 24.0, 23.48, 16.46, 9.68, 16.26, 19.52, 24.28, 29.24, 21.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2, 22.1, 23.9, 20.6, 'BYE', 16.9, 21.1, 17.8, 22.3, 20.0, 20.4, 19.5, 20.0, 17.6, 20.1, 20.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8, 16.1, 16.8, 13.5, 'BYE', 20.4, 16.3, 14.0, 18.5, 19.3, 16.1, 13.1, 16.8, 14.0, 15.1, 17.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1, 26.4, 25.4, 25.9, 'BYE', 28.4, 25.8, 22.0, 25.2, 28.8, 26.8, 23.0, 26.0, 24.0, 24.2, 28.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 19.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 20.52,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.43,
    "fanduelSalary": "$15000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals QB Joe Burrow was named the 2021 Associated Press Comeback Player of the Year.\n",
    "report": "",
    "analysis": "In a surprisingly tight vote, Burrow (28 votes) beat out Dak Prescott (21) for the honor. Derwin James received the other ballot. Coming off a season-ending torn ACL injury, Burrow finished as a low-end QB1 in 2021. The Bengals played it run-heavy at times to protect him from a weak offensive line, but when Burrow blew up in Weeks 16 and 17, he won a lot of fantasy titles for his managers. He'll remain in the QB1 discussion in 2022. Oh, and you might see him this weekend too.\u00a0\u00a0\n",
    "timestamp": "2022-02-11 04:37 PM",
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
    "week19": 17.56,
    "week20": 13.42,
    "week21": 21.5,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34, 23.84, 27.64, 21.26, 9.38, 'BYE', 9.02, 17.4, 18.6, 22.22, 12.78, 38.1, 34.84, 'DNP', 17.56, 13.42, 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3, 19.8, 20.5, 21.5, 'BYE', 19.9, 18.2, 14.9, 18.4, 16.1, 19.6, 19.3, 'DNP', 19.2, 18.2, 19.3, 19.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7, 19.0, 11.5, 11.4, 'BYE', 10.0, 9.6, 11.0, 13.5, 8.8, 13.0, 12.1, 'DNP', 11.5, 15.1, 13.3, 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3, 26.9, 22.7, 21.4, 'BYE', 18.9, 16.8, 23.8, 23.0, 18.0, 22.2, 22.4, 'DNP', 26.0, 29.6, 31.3, 26.0]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 13.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 16.68,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$12500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Joe Mixon rushed 21 times for 88 yards in the Bengals' AFC Championship Game win over the Chiefs, adding three receptions for 21 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Much to DFS players' frustration, Mixon ceded the biggest backfield play of the day to Samaje Perine, who housed a screen for a 41-yard score. Beyond that, Mixon out-touched his third down running mate 24-3. Regardless of who the Bengals face in Super Bowl LVI, establishment of the run is guaranteed to be a theme. We would expect Mixon to handle the rock 20-plus times for the fourth time this postseason.\u00a0\u00a0\n",
    "timestamp": "2022-02-01 04:31 PM",
    "source": null,
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
    "week21": 13.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0, 23.8, 11.9, 23.1, 25.5, 'BYE', 24.3, 30.3, 9.4, 7.8, 6.5, 28.5, 12.1, 'DNP', 9.6, 19.5, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0, 12.1, 15.9, 12.4, 'BYE', 13.4, 15.4, 19.7, 14.9, 13.1, 13.8, 18.2, 'DNP', 16.5, 11.6, 12.8, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3, 8.5, 17.4, 13.8, 'BYE', 18.0, 9.7, 17.4, 8.8, 10.2, 9.0, 7.1, 'DNP', 11.5, 10.0, 8.5, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3, 18.6, 22.5, 15.8, 'BYE', 23.7, 15.9, 33.4, 15.9, 17.3, 14.9, 20.5, 'DNP', 27.3, 20.3, 19.3, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 10.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 24,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
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
    "headlineNews": "Rams did not list Cam Akers (shoulder) on their injury report for Super Bowl LVI against the Bengals.\n",
    "report": "",
    "analysis": "Akers looks set to operate as the Rams lead back, although both Sony Michel and Darrell Henderson are also expected to see snaps. Michel actually led the backfield in snaps against the 49ers, but that was partially driven by Akers' injury. Even while battling his shoulder injury, Akers out-touched Michel against the 49ers and is likely to do so again this week. The key question will be if the Rams split up touches three ways, as Sean McVay hinted on Wednesday that they would. If so, Akers will need to be far more efficient than he's been since returning for his torn Achilles. Fortunately, the Bengals' defense is much weaker against the run than the Buccaneers and 49ers, both of whom have high-end run defenses. Akers profiles as a risky, but high ceiling option.\n",
    "timestamp": "2022-02-11 09:36 PM",
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
    "week19": 10.0,
    "week20": 4.3,
    "week21": 5.5,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.0, 4.3, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.3, 5.7, 7.9, 9.4, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.2, 4.6, 3.5, 0.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.9, 12.4, 13.4, 9.2, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116389.png",
    "name": "Samaje Perine",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 5.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 4.65,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Samaje Perine caught 3-of-4 targets for 43 yards and a touchdown in the Bengals' AFC Championship Game victory over the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Perine housed a second quarter screen for the Bengals' first touchdown in their eventual comeback from a 21-3 deficit. He still got out-touched 24-3 by Joe Mixon. Perine figures to draw a couple 2-3 targets in Super Bowl LVI, but he won't be anything like an \"X-factor.\"\u00a0\n",
    "timestamp": "2022-01-31 12:24 AM",
    "source": null,
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
    "week21": 11.8,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 0.0, 1.2, 2.7, 16.3, 'DNP', 14.0, 2.6, 4.7, 'BYE', 3.6, 2.0, 5.1, 5.3, 5.3, 1.6, 1.9, 0.0, 0.2, 0.9, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.4, 2.5, 5.3, 4.1, 'DNP', 4.9, 6.5, 4.3, 'BYE', 4.8, 5.1, 6.0, 6.0, 5.6, 5.3, 6.1, 7.4, 5.9, 4.8, 5.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.0, 1.2, 10.1, 0.0, 'DNP', 3.8, 3.5, 3.2, 'BYE', 4.8, 2.5, 7.3, 3.8, 5.4, 2.8, 1.7, 3.5, 0.0, 1.6, 2.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.8, 9.1, 18.8, 5.5, 'DNP', 10.4, 15.1, 11.6, 'BYE', 9.2, 10.4, 13.3, 8.5, 9.0, 5.7, 4.7, 5.2, 4.4, 5.8, 5.9, 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Reserve: RB-3",
    "team": "Los Angeles Rams",
    "projected": 5.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 24,
    "avg_fp2": 12.41,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams activated Darrell Henderson (knee) from injured reserve.\n",
    "report": "",
    "analysis": "Henderson gives the Rams another option at running back against the Bengals defense that is below average at stopping the run. With Akers dealing with a shoulder issue, Henderson has a chance of emerging as the hot hand in the Super Bowl. And on Wednesday, Sean McVay indicated that he was planning to use all three of his running backs against the Bengals. However, if Akers is healthy enough to handle lead back duties, he remains the clear favorite to lead the backfield in touches. Henderson was losing the backfield to Sony Michel to close the regular season, so he will need to be a peak form to carve out a significant role this week. The Rams also activated NT Sebastian Joseph-Day from injured reserve.\n",
    "timestamp": "2022-02-11 09:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.2,
    "week02": 15.7,
    "week03": "DNP",
    "week04": 14.1,
    "week05": 16.4,
    "week06": 23.7,
    "week07": 7.9,
    "week08": 21.8,
    "week09": 7.3,
    "week10": 6.1,
    "week11": "BYE",
    "week12": 15.3,
    "week13": "DNP",
    "week14": "DNP",
    "week15": 3.7,
    "week16": 1.7,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": "DNP",
    "week21": "DNP",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.2, 15.7, 'DNP', 14.1, 16.4, 23.7, 7.9, 21.8, 7.3, 6.1, 'BYE', 15.3, 'DNP', 'DNP', 3.7, 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.3, 'DNP', 15.2, 17.2, 14.7, 18.3, 16.3, 15.3, 14.5, 'BYE', 13.6, 'DNP', 'DNP', 17.1, 15.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 5.7, 3.1, 7.7, 7.3, 9.1, 4.6, 8.2, 'BYE', 6.1, 'DNP', 'DNP', 8.1, 4.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 12.8, 'DNP', 15.3, 13.8, 18.2, 13.7, 21.7, 13.8, 13.8, 'BYE', 14.6, 'DNP', 'DNP', 15.7, 10.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 5.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 24,
    "avg_fp2": 8.15,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams activated Darrell Henderson (knee) from injured reserve.\n",
    "report": "",
    "analysis": "Henderson gives the Rams another option at running back against the Bengals defense that is below average at stopping the run. With Akers dealing with a shoulder issue, Henderson has a chance of emerging as the hot hand in the Super Bowl. And on Wednesday, Sean McVay indicated that he was planning to use all three of his running backs against the Bengals. However, if Akers is healthy enough to handle lead back duties, he remains the clear favorite to lead the backfield in touches. Henderson was losing the backfield to Sony Michel to close the regular season, so he will need to be a peak form to carve out a significant role this week. The Rams also activated NT Sebastian Joseph-Day from injured reserve.\n",
    "timestamp": "2022-02-11 09:25 PM",
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
    "week19": 5.8,
    "week20": 1.0,
    "week21": 1.7,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2, 0.4, 6.6, 9.6, 4.1, 'BYE', 3.0, 20.4, 7.9, 12.5, 20.0, 17.4, 5.4, 5.8, 1.0, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5, 5.8, 5.0, 6.7, 'BYE', 5.9, 9.2, 8.0, 6.4, 5.7, 8.9, 9.3, 9.4, 6.4, 8.0, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8, 3.7, 4.2, 1.4, 'BYE', 5.3, 3.2, 6.0, 6.8, 4.3, 3.0, 0.0, 3.5, 2.4, 3.2, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4, 12.8, 9.8, 13.9, 'BYE', 11.4, 9.0, 11.1, 11.6, 8.6, 11.7, 15.1, 8.8, 10.0, 9.1, 13.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 14.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$16000",
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
    "week21": 31.5,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0, 17.7, 'BYE', 15.1, 22.9, 24.8, 30.2, 16.3, 18.5, 23.1, 14.6, 26.8, 31.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4, 17.7, 21.1, 17.5, 'BYE', 18.7, 16.6, 16.7, 20.3, 14.9, 25.1, 18.8, 13.2, 12.2, 21.5, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2, 23.2, 16.5, 18.7, 'BYE', 10.8, 10.9, 7.1, 22.8, 13.3, 14.3, 14.4, 14.6, 14.1, 16.0, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6, 27.3, 21.2, 24.8, 'BYE', 18.8, 18.5, 16.4, 28.8, 21.4, 20.0, 17.5, 19.9, 19.3, 21.7, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 10.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 16.28,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$12000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals WR Ja'Marr Chase has been named the 2021 Associated Press Offensive Rookie of the Year.\n",
    "report": "",
    "analysis": "Chase won the award with 42 of 50 votes, edging out Mac Jones (5), Creed Humphrey (2), and Rashawn Slater (1). Curiously, no mention of Penei Sewell. Chase exploded on to the scene with four touchdowns in his first three games and was a fantasy football league-winner from the start, finishing with 1455 yards, 13 touchdowns, and 81 receptions. He's playing for a championship on Sunday, too, so not a bad year. He'll be an easy WR1 in 2022 and should be in Round 1 consideration in most leagues.\u00a0\n",
    "timestamp": "2022-02-11 02:52 AM",
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
    "week19": 18.4,
    "week20": 13.6,
    "week21": 14.7,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9, 11.7, 30.1, 11.6, 5.9, 'BYE', 11.5, 5.4, 7.7, 22.8, 0.8, 16.0, 50.1, 3.6, 18.4, 13.6, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3, 6.0, 14.3, 15.8, 'BYE', 19.3, 16.8, 10.3, 9.8, 9.1, 12.3, 10.1, 12.2, 12.3, 14.5, 14.0, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8, 11.1, 11.7, 12.4, 'BYE', 14.5, 8.9, 4.3, 4.6, 8.2, 4.7, 4.4, 3.4, 4.3, 4.2, 4.2, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9, 22.7, 27.0, 26.8, 'BYE', 21.1, 16.0, 17.2, 18.4, 24.0, 22.0, 22.0, 29.5, 21.6, 21.8, 21.1, 21.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 9.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins caught 6-of-10 targets for 103 yards in the Bengals' AFC Championship Game victory over the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Quiet in the Wild Card Round, Higgins now has 13 grabs for 199 yards over his past two games as the Bengals have advanced to their first Super Bowl since the 1988-89 season. With defenses understandably rolling increasingly sophisticated coverages \u2014 and raw manpower \u2014 Ja'Marr Chase's way, Higgins will remain an X-factor for Super Bowl LVI no matter who the Bengals face. Regardless of whether it is Los Angeles or San Francisco, it figures to be more methodical game script than what was forecast for the AFC Championship Game.\u00a0\n",
    "timestamp": "2022-01-31 12:00 AM",
    "source": null,
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
    "week21": 13.3,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7, 5.9, 9.7, 11.7, 10.8, 'BYE', 2.5, 20.4, 24.3, 13.9, 3.3, 37.4, 7.7, 'DNP', 1.5, 13.1, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7, 5.5, 8.8, 7.5, 'BYE', 11.3, 13.8, 7.6, 6.3, 7.7, 8.4, 6.2, 'DNP', 7.9, 13.9, 9.6, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7, 5.0, 2.7, 8.2, 'BYE', 4.6, 3.7, 5.2, 13.6, 6.5, 10.8, 7.3, 'DNP', 10.3, 12.5, 11.6, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5, 10.5, 7.0, 17.4, 'BYE', 10.4, 8.4, 9.3, 21.5, 14.0, 14.1, 17.4, 'DNP', 18.9, 22.3, 17.9, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png",
    "name": "Van Jefferson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 8.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
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
    "headlineNews": "Rams did not list Van Jefferson on their injury report for Super Bowl LVI against the Bengals.\n",
    "report": "",
    "analysis": "Jefferson will be active on Sunday, but he's been active for the last three games as has just a total of nine targets. Jefferson operates as a deep threat in the Rams offense and isn't consistently able to draw targets. And Jefferson has been seeing targets even further downfield in the playoff than he did in the regular season. Jefferson's aDOT has jumped to 19.9 in the playoffs after posting a 14.0 aDOT in the regular season. He is unlikely to see many targets this week, even if fully healthy. However, Jefferson's deep targets do give him a usable ceiling if he manages to connect on a few of his deep looks.\n",
    "timestamp": "2022-02-11 09:41 PM",
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
    "week19": 4.6,
    "week20": 5.4,
    "week21": 1.9,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 1.9, 6.2, 18.0, 2.1, 3.4, 12.3, 10.3, 5.6, 6.9, 'BYE', 16.8, 13.1, 13.8, 4.3, 1.1, 8.3, 4.1, 4.6, 5.4, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.4, 5.5, 5.6, 5.9, 6.6, 2.8, 5.2, 8.1, 6.1, 'BYE', 9.7, 7.1, 7.0, 10.4, 7.9, 9.0, 6.9, 7.5, 5.6, 6.9, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 1.7, 1.7, 0.0, 0.4, 1.3, 6.1, 9.4, 'BYE', 2.6, 8.6, 14.2, 9.0, 6.8, 4.6, 8.3, 10.6, 8.9, 8.9, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 11.8, 4.0, 5.4, 3.9, 7.6, 6.0, 8.2, 11.6, 13.1, 'BYE', 9.0, 18.0, 17.5, 14.6, 9.2, 7.3, 13.0, 16.0, 14.1, 14.2, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 7.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Impending free agent Odell Beckham said playing for the Rams \"feels like a home.\"\n",
    "report": "",
    "analysis": "\u201cThis place, it feels good in my heart,\" Beckham said. When asked by NFL.com's Nick Shook if he would sacrifice salary to stay with the Rams,\u00a0Beckham quickly responded, \"Yeah. Of course!\" It would have been surprising if Beckham\u00a0said he wanted out two days before the Super Bowl, but these quotes are a bit stronger than the usual \"I hope it works out\" fare. Either way, the Rams have bigger things on their mind than\u00a0Beckham's future this weekend.\u00a0\n",
    "timestamp": "2022-02-12 01:23 AM",
    "source": "Nick Shook on Twitter",
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
    "week21": 15.8,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0, 10.4, 3.3, 1.1, 'DNP', 'DNP', 'BYE', 16.6, 9.8, 16.7, 1.2, 11.7, 12.4, 2.8, 15.0, 9.9, 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4, 7.9, 6.0, 'DNP', 'DNP', 'BYE', 5.1, 4.0, 4.8, 6.8, 5.5, 15.2, 9.2, 9.5, 8.3, 6.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0, 9.0, 6.5, 'DNP', 'DNP', 'BYE', 9.2, 12.6, 10.9, 8.9, 10.9, 8.2, 12.2, 9.3, 5.6, 6.5, 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8, 15.1, 13.4, 'DNP', 'DNP', 'BYE', 16.3, 20.6, 17.5, 15.5, 18.6, 15.5, 17.1, 17.4, 15.9, 16.7, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 7.1,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
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
    "week21": 3.9,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 10.8, 11.6, 16.3, 4.4, 1.2, 5.9, 17.24, 1.6, 'BYE', 9.3, 2.3, 11.0, 8.3, 18.1, 16.0, 11.6, 'DNP', 10.9, 2.7, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.2, 11.2, 7.1, 6.0, 5.2, 4.0, 6.7, 4.8, 'BYE', 7.5, 7.6, 4.5, 5.1, 5.5, 6.8, 4.4, 'DNP', 6.3, 8.8, 7.0, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.8, 13.8, 7.7, 13.0, 11.7, 6.3, 10.2, 10.8, 'BYE', 3.7, 6.6, 6.5, 7.9, 4.6, 5.3, 5.6, 'DNP', 6.5, 12.3, 5.4, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.5, 16.3, 12.2, 22.2, 16.9, 8.4, 15.1, 13.4, 'BYE', 7.9, 12.4, 13.1, 13.5, 10.7, 10.7, 12.7, 'DNP', 14.1, 19.2, 11.5, 11.9]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 6.3,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 6.49,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.83,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee - MCL",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "The Bengals listed C.J. Uzomah (knee) as questionable for Super Bowl LVI against the Rams.\n",
    "report": "",
    "analysis": "Zac Taylor told reporters that Uzomah is on track to play, confirming reports from earlier on Friday. Uzomah got in a limited practice session on Thursday and practiced in full on Friday. He appears set to suit up against the Rams. Uzomah is unlikely to operate as more than the Bengals' No. 3 receiving option and could be as low as fifth in the target pecking order, depending on how healthy his knee is. His fantasy appeal is primarily tied to the hope that he can find the end zone in Los Angeles.\n",
    "timestamp": "2022-02-11 08:52 PM",
    "source": null,
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
    "week21": 0.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6, 9.0, 22.6, 5.3, 4.4, 'BYE', 1.9, 2.4, 3.5, 7.6, 3.3, 6.1, 5.2, 'DNP', 15.4, 10.6, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5, 5.9, 7.6, 13.5, 'BYE', 11.3, 5.0, 6.8, 2.3, 3.8, 6.7, 5.7, 'DNP', 7.0, 4.3, 4.0, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3, 2.6, 10.8, 1.0, 'BYE', 1.1, 1.8, 4.1, 3.7, 4.4, 1.5, 3.8, 'DNP', 2.4, 0.6, 1.2, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4, 8.0, 18.9, 7.7, 'BYE', 8.1, 4.4, 8.1, 6.9, 7.3, 7.7, 6.9, 'DNP', 9.0, 6.4, 7.0, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122103.png",
    "name": "Kendall Blanton",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 3.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 0.57,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.56,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams placed Tyler Higbee (knee) on injured reserve.\n",
    "report": "",
    "analysis": "Higbee will miss the Super Bowl, which leaves Kendall Blanton as the Rams starting tight end. Blanton ran a route on 75% of dropbacks against the 49ers, and that was with Higbee posting a 21% route rate before being injured. Blanton is far from a household name in fantasy circles, but he can be expected to operate as a full-time tight end in the Super Bowl. It's also possible that Higbee's absence opens up additional routes for No. 4 wide receiver Ben\u00a0Skowronek.\u00a0Skowronek ran 10 routes against the 49ers after running just two combined routes in the first two rounds of the playoffs. The Rams also placed T Joseph Noteboom on injured reserve.\n",
    "timestamp": "2022-02-12 12:47 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 0.0,
    "week10": 0.7,
    "week11": "BYE",
    "week12": 0.0,
    "week13": 1.1,
    "week14": 3.9,
    "week15": 0.0,
    "week16": 0.0,
    "week17": 0.0,
    "week18": 0.0,
    "week19": 0.0,
    "week20": 8.8,
    "week21": 8.2,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.7, 'BYE', 0.0, 1.1, 3.9, 0.0, 0.0, 0.0, 0.0, 0.0, 8.8, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3, 1.2, 2.6, 'BYE', 0.9, 0.0, 1.0, 3.1, 2.5, 2.8, 1.2, 1.3, 2.7, 1.5, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.1, 0.5, 0.0, 0.0, 0.4, 1.3, 0.8, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.3, 3.7, 4.3, 'BYE', 4.4, 4.8, 0.8, 1.7, 0.5, 0.7, 1.2, 1.8, 1.8, 0.3, 1.0]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 9.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 8,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.38,
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
    "week19": 15.0,
    "week20": 18.0,
    "week21": 15.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0, 11.0, 13.0, 7.0, 4.0, 'BYE', 21.0, 13.0, 5.0, 12.0, 13.0, 11.0, 11.0, 'DNP', 15.0, 18.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8, 5.9, 11.4, 8.0, 'BYE', 8.1, 8.6, 10.3, 7.1, 8.2, 7.8, 8.1, 'DNP', 9.1, 7.8, 7.2, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7, 3.2, 4.2, 6.2, 'BYE', 5.8, 4.8, 3.5, 3.7, 5.9, 6.0, 5.8, 'DNP', 4.7, 7.2, 4.7, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4, 9.8, 11.7, 11.5, 'BYE', 8.7, 15.3, 11.5, 9.9, 13.0, 13.5, 13.2, 'DNP', 14.6, 12.3, 14.7, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 8.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 6,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.19,
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
    "week19": 11.0,
    "week20": 13.0,
    "week21": 9.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0, 9.0, 8.0, 12.0, 4.0, 'BYE', 8.0, 15.0, 14.0, 10.0, 12.0, 2.0, 7.0, 11.0, 13.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5, 9.8, 9.2, 8.0, 'BYE', 5.3, 9.4, 8.2, 9.3, 10.3, 7.4, 8.5, 9.1, 7.9, 8.6, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3, 7.9, 9.1, 6.4, 'BYE', 5.6, 7.4, 6.0, 7.9, 7.1, 7.2, 6.9, 6.3, 7.3, 6.5, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5, 10.0, 11.7, 8.9, 'BYE', 8.5, 11.2, 9.6, 12.2, 10.7, 11.8, 11.3, 10.4, 11.7, 10.5, 10.8]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 5.2,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams activated DT\u00a0Sebastian Joseph-Day from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Joseph-Day has been out since suffering a pec injury way back in Week 8. Before that, he recorded three sacks, a career-high, in just seven games. He should provide quality rotational snaps against the Bengals.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.05,
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
    "week21": 3.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0, 7.0, 7.0, 5.0, 1.0, 'BYE', 2.0, 10.0, 8.0, 9.0, 11.0, 13.0, 7.0, 10.0, 7.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6, 6.6, 4.7, 6.9, 'BYE', 4.7, 7.1, 4.0, 3.7, 5.2, 5.7, 5.2, 4.2, 3.8, 5.5, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8, 4.4, 2.7, 1.9, 'BYE', 0.0, 5.6, 0.0, 3.0, 0.0, 2.2, 5.0, 1.0, 1.6, 4.3, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0, 13.6, 12.9, 10.0, 'BYE', 10.0, 12.6, 6.0, 9.2, 9.6, 10.9, 12.8, 9.9, 8.6, 11.6, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.1,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.19,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals DE Trey Hendrickson cleared the league's concussion protocol.\n",
    "report": "",
    "analysis": "Interior run-stuffer Josh Tupou is also \"trending in the right direction\" while\u00a0newly signed DT Zach Kerr could \"see some snaps\", all in an effort to stop Derrick Henry up the middle. Hendrickson, the team's leading pass rusher with 14 sacks this year, being available is a massive development.\n",
    "timestamp": "",
    "source": "Kelsey Conway on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.45,
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
    "week21": 8.0,
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0, 7.0, 6.0, 7.0, 1.0, 'BYE', 10.0, 13.0, 9.0, 5.0, 9.0, 3.0, -1.0, 5.0, 8.0, 8.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4, 4.4, 7.3, 4.3, 'BYE', 3.9, 6.0, 4.4, 5.4, 6.7, 5.9, 4.9, 4.8, 3.6, 5.2, 6.5, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8, 1.4, 9.1, 4.8, 'BYE', 2.1, 2.3, 2.4, 2.0, 3.0, 3.7, 1.6, 0.0, 1.9, 1.2, 1.3, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7, 7.9, 16.8, 10.8, 'BYE', 7.6, 10.1, 9.9, 9.6, 10.0, 11.1, 8.3, 7.4, 8.1, 7.1, 6.8, 7.2]
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