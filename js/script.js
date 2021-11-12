var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Friday, 12 November 2021 02:57 PM (central time)"};
$scope.week = {"nflWeek": "10"};
$scope.playoffLogo = {"src": ""}

$scope.qbStartSit = {"one": "Tom Brady", "two": "Lamar Jackson", "three": "Derek Carr", "four": "Matt Ryan", "five": "Trevor Lawrence", "six": "Mike White", "seven": "P.J. Walker", "eight": "Kirk Cousins", "nine": "Kyler Murray", "ten": "Baker Mayfield"};
$scope.rbStartSit = {"one": "Dalvin Cook", "two": "Najee Harris", "three": "Austin Ekeler", "four": "Aaron Jones", "five": "Zack Moss", "six": "Adrian Peterson", "seven": "Michael Carter", "eight": "Antonio Gibson", "nine": "Boston Scott", "ten": "Damien Harris"};
$scope.wrStartSit = {"one": "Marquise Brown", "two": "Mike Evans", "three": "A.J. Brown", "four": "Marquez Callaway", "five": "Michael Pittman", "six": "Corey Davis", "seven": "Justin Jefferson", "eight": "DeAndre Hopkins", "nine": "Tyreek Hill", "ten": "Courtland Sutton"};
$scope.teStartSit = {"one": "Mike Gesicki", "two": "Dawson Knox", "three": "Mark Andrews", "four": "Darren Waller", "five": "Kyle Pitts", "six": "Ian Thomas", "seven": "Ryan Griffin", "eight": "Austin Hooper", "nine": "Dallas Goedert", "ten": "Tyler Higbee"};
$scope.kStartSit = {"one": "Tyler Bass", "two": "Justin Tucker", "three": "Chris Boswell", "four": "Dustin Hopkins", "five": "Austin Seibert", "six": "Ian Thomas", "seven": "Ryan Griffin", "eight": "Austin Hooper", "nine": "Dallas Goedert", "ten": "Tyler Higbee"};
$scope.dstStartSit = {"one": "Buffalo Bills", "two": "Indianapolis Colts", "three": "Arizona Cardinals", "four": "Tampa Bay Buccaneers", "five": "Las Vegas Raiders", "six": "San Francisco 49ers", "seven": "New York Jets", "eight": "Jacksonville Jaguars", "nine": "Detroit Lions", "ten": "Los Angeles Chargers"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 26.6,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 8,
    "avg_fp2": 25.42,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 20.53,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 26-of-43 passes for 238 yards, one touchdown and an interception in the Ravens' 22-10, Week 10 loss to the Dolphins, adding nine carries for 39 additional yards.\u00a0\n",
    "report": "",
    "analysis": "In one of the Ravens' worst offensive performances of the Jackson era, the unit simply faceplanted against a hyper-aggressive defense, one committed to zero blitzes and man coverage. The Ravens never countered by getting their middle-of-the-field game going. It didn't help that one of Jackson's short, slant completions was immediately coughed up for a game-changing fumble six by Sammy Watkins in the fourth quarter. It also didn't help that Watkins simply quit on a would-be touchdown in the first quarter, seeming to lose the ball in the lights in the end zone. Either that, or he felt too close to the field goal post or the Dolphins' admittedly too-close wall. Jackson's pick came in the dying moments of the game with the contest already decided. The Ravens' lack of adjustments this evening was surprising, but they also had the looks of a gassed squad on a short week after running a billion plays against the Vikings four days prior. They now have 10 days to rest up for a Week 11 Chicago road trip. Jackson will be back in the top five for that one.\u00a0\n",
    "timestamp": "2021-11-12 06:04 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 18.0,
    "week02": 34.26,
    "week03": 20.28,
    "week04": 19.44,
    "week05": 41.88,
    "week06": 13.78,
    "week07": 23.08,
    "week08": "BYE",
    "week09": 32.64,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 34.26, 20.28, 19.44, 41.88, 13.78, 23.08, 'BYE', 32.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 27.9, 17.4, 23.0, 22.9, 22.4, 'BYE', 24.0, 26.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 17.6, 29.3, 17.1, 16.4, 20.2, 25.8, 'BYE', 14.6, 24.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.5, 32.3, 38.8, 26.2, 24.1, 28.2, 29.4, 'BYE', 22.5, 31.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 24.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 1,
    "avg_fp2": 25.86,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.37,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 28-of-40 passes for 375 yards, four touchdowns, and two interceptions in Tampa's 36-27 Week 8 loss to New Orleans.\u00a0\n",
    "report": "",
    "analysis": "Brady took three sacks and also lost a fumble on one of them, as New Orleans somehow seems to have the kryptonite for forcing turnovers against him. It was very good news for fantasy players that even on a day where Mike Evans was running into Marshon Lattimore's coverage, Antonio Brown was out, and Rob Gronkowski left early, Brady was still able to compile a neat and tidy little fantasy line. Tampa has a Week 9 bye before Brady and company meet up with the Football Team in Week 10. Spoiler: He'll probably be an easy QB1 that week.\u00a0\n",
    "timestamp": "2021-11-01 12:19 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.16, 29.64, 28.68, 11.06, 37.74, 18.98, 24.44, 27.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 23.1, 19.5, 19.0, 21.0, 21.1, 22.3, 20.8, 'BYE', 24.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.6, 12.1, 10.4, 13.4, 16.6, 17.8, 18.2, 'BYE', 19.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.8, 27.5, 19.8, 19.2, 20.7, 26.4, 24.8, 27.8, 'BYE', 27.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 24.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 4,
    "avg_fp2": 21.91,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.18,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dak Prescott completed just 19-of-39 passes for 232 yards, two touchdowns, and one interception in the Cowboys' 30-16, Week 9 loss to the Broncos.\n",
    "report": "",
    "analysis": "The Broncos completely dominated Dallas in this one, possessing the ball for 41 minutes and change to a little over 18 minutes for the Cowboys. Dallas was 5-for-13 on third downs and 0-for-4 on fourth downs, as Prescott missed some throws after missing last week to a calf injury. The calf didn't seem to be a problem in this one, but the Broncos' defense certainly was, as the Cowboys fell in a 30-0 hole before Prescott tossed a pair of garbage-time, fourth-quarter scores to backup WR Malik Turner. Prescott will try to rebound next week in an easier matchup with the Falcons.\n",
    "timestamp": "2021-11-07 09:30 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.42, 8.48, 20.12, 27.02, 21.68, 27.8, 'BYE', 'DNP', 19.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 20.3, 17.2, 18.3, 24.0, 19.1, 'BYE', 'DNP', 22.0, 24.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.9, 17.8, 12.4, 18.7, 11.7, 'BYE', 'DNP', 18.1, 20.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.6, 28.7, 27.3, 23.6, 26.7, 22.6, 'BYE', 'DNP', 26.5, 28.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 22.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 23.19,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.21,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Justin Herbert completed 32-of-38 passes for 356 yards and two touchdowns, scrambling five times for 14 yards and a rushing score in Los Angeles' 27-24 Week 9 win over the Eagles.\n",
    "report": "",
    "analysis": "Herbert completed a career-high 84% of his passes against Philly, simultaneously registering his 12th career 300-yard game, two more than any other quarterback through two seasons in NFL history \u2014 Patrick Mahomes and Dan Marino each had 10. It was a show for the ages following the team's letdown against the Patriots as Herbert completed 9-of-10 throws for 137 yards and two scores from play-action and 17-of-18 when getting the ball out of his hands within 2.5 seconds from snap to throw, finding\u00a0Mike Williams for a 49-yard gain and using his legs to cap off a fourth-quarter drive to put the Chargers up 24-17 in the final 15 minutes.\u00a0The Chargers converted two fourth-and-1 situations on their game-winning drive to eventually put this one to bed. Managers should again consider Herbert a middle-of-the-road QB1 in a tasty matchup in Week 10 against the Vikings.\n",
    "timestamp": "2021-11-08 01:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.38,
    "week02": 16.72,
    "week03": 30.84,
    "week04": 21.28,
    "week05": 42.82,
    "week06": 12.0,
    "week07": "BYE",
    "week08": 15.82,
    "week09": 31.64,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.38, 16.72, 30.84, 21.28, 42.82, 12.0, 'BYE', 15.82, 31.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.9, 19.4, 17.2, 20.9, 21.3, 21.2, 'BYE', 21.8, 20.3, 22.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.0, 13.8, 14.2, 18.4, 12.6, 18.2, 'BYE', 12.0, 20.4, 19.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.8, 30.3, 22.3, 28.4, 22.5, 29.7, 'BYE', 24.5, 35.0, 33.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 22.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 7,
    "avg_fp2": 25.04,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 18.65,
    "fanduelSalary": "$8700",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.2, 17.66, 37.22, 21.02, 36.5, 29.72, 'BYE', 29.46, 11.56]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 16.4, 20.0, 19.4, 23.0, 24.1, 'BYE', 25.9, 25.6, 22.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 11.4, 20.9, 24.1, 27.7, 22.1, 'BYE', 22.7, 28.0, 25.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 30.3, 24.4, 33.3, 34.3, 28.8, 'BYE', 29.7, 35.2, 32.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 21.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 18.88,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 22.66,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Derek Carr completed 30-of-46 passes for 296 yards and a touchdown in the Raiders' 23-16, Week 9 loss to the Giants.\n",
    "report": "",
    "analysis": "Carr tossed his second pick-six of the year in this game and both of his interceptions landed in the hands of Giants safety Xavier McKinney. McKinney read Carr well and jumped Hunter Renfrow's route, resulting in an easy house call for the second-year safety. Carr earned most of his yards on short and intermediate throws, likely the result of Henry Ruggs' release earlier this week. He connected with Zay Jones and Bryan Edwards, the potential replacements for Ruggs, just one time on eight tries. Carr gets a juicy matchup with the Chiefs next week which will help him bounce back from this weak performance. He'll be a high-end QB2 and a solid streaming option in Week 10.\u00a0\n",
    "timestamp": "2021-11-07 09:41 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 25.0,
    "week02": 24.18,
    "week03": 22.24,
    "week04": 15.44,
    "week05": 8.24,
    "week06": 21.54,
    "week07": 20.02,
    "week08": "BYE",
    "week09": 14.34,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 24.18, 22.24, 15.44, 8.24, 21.54, 20.02, 'BYE', 14.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 21.2, 23.3, 21.6, 22.5, 16.5, 19.8, 'BYE', 19.9, 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.4, 8.4, 16.2, 13.3, 12.7, 14.8, 13.1, 'BYE', 10.8, 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 23.2, 23.6, 21.1, 20.3, 21.2, 20.6, 'BYE', 21.9, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 21.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 18.56,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 20.03,
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
    "headlineNews": "Carson Wentz completed 22-of-30 passes for 272 yards and three touchdowns in the Colts' 45-30, Week 9 win over the Jets, adding four rushes for 13 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Smarting from a pair of humiliating turnovers in the Colts' Week 8 overtime loss to the Titans, Wentz bounced back against a \"defense\" that essentially let the Colts run a Saturday pre-game walk-through. The Colts posted 532 total yards and averaged 8.7 yards per play. The Jets might as well have had their scout team on the field. Wentz once again had an under-thrown deep ball or two, but he also once again struck up his connection with Michael Pittman in the end zone. His other scores were a shovel pass to Jack Doyle and end zone lob to tackle-eligible \"Danny Pinter.\" Wentz didn't have to do much to be great this evening, but that will once again be the case in Week 10 when the Colts host Jacksonville. Wentz will be in the low-end QB1 mix for that one.\u00a0\n",
    "timestamp": "2021-11-05 03:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.34,
    "week02": 18.58,
    "week03": 7.76,
    "week04": 17.92,
    "week05": 22.58,
    "week06": 17.02,
    "week07": 20.3,
    "week08": 20.34,
    "week09": 24.18,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.34, 18.58, 7.76, 17.92, 22.58, 17.02, 20.3, 20.34, 24.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.9, 21.5, 16.4, 16.6, 20.1, 17.3, 20.7, 19.8, 21.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 11.2, 12.4, 12.2, 11.9, 12.6, 19.4, 11.3, 12.0, 20.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.2, 24.5, 16.4, 18.8, 18.8, 20.8, 25.5, 17.3, 19.4, 24.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 21.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 23.09,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.03,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals coach Kliff Kingsbury said Kyler Murray (ankle) is a game-time decision for Week 10 against the Panthers.\n",
    "report": "",
    "analysis": "Murray is officially listed as questionable for Sunday. When asked if the Cardinals are considering giving Murray one more week \"to be careful\", Kingsbury said all situations are being considered but \"if Murray is ready to play, he will play.\" It's a terrific matchup for the Cardinals as two-score favorites (-10.5) at home no matter Murray's status since Colt McCoy is more than capable of suiting up and handing off to James Conner throughout the game. Murray is more of a low-end QB1 if active unless we receive word he's fully healthy and over his tweaked ankle.\n",
    "timestamp": "2021-11-12 08:47 PM",
    "source": "Darren Urban on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.56, 35.1, 19.54, 22.62, 13.66, 25.76, 22.44, 11.06, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 20.6, 27.2, 22.9, 25.3, 17.8, 24.7, 23.1, 'DNP', 21.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.7, 14.5, 25.9, 21.2, 21.9, 18.4, 17.5, 21.4, 'DNP', 12.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 31.0, 33.3, 29.1, 29.3, 27.2, 33.3, 29.4, 'DNP', 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 20.6,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 3,
    "avg_fp2": 22.5,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.19,
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
    "headlineNews": "Matthew Stafford completed 31-of-48 passes for 294 yards, one touchdown, and two interceptions in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "It was an uncharacteristically terrible performance for Stafford, who previously looked like he would compete for the MVP crown. He threw back-to-back interceptions in the first half, one of which was returned by Titans DB Kevin Byard for a touchdown. Even if you ignore the turnovers, he only averaged 6.1 yards per attempt. Stafford will look to get back on track against the 49ers in Week 10.\n",
    "timestamp": "2021-11-08 04:46 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 24.34,
    "week02": 18.22,
    "week03": 29.52,
    "week04": 20.3,
    "week05": 17.5,
    "week06": 26.24,
    "week07": 27.16,
    "week08": 24.2,
    "week09": 15.06,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24, 27.16, 24.2, 15.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2, 22.1, 23.9, 20.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8, 16.1, 16.8, 13.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1, 26.4, 25.4, 25.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 19.6,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 6,
    "avg_fp2": 21.78,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.05,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Patrick Mahomes said he will continue to \"take shots\" no matter\u00a0opposing defensive schemes.\n",
    "report": "",
    "analysis": "\u201cI think, just in general, even when we\u2019re not connecting on them, it still tells that defense they have to back up, and it opens up stuff underneath,\u201d Mahomes explained. \u201cTaking those shots during the game, even if they\u2019re not connecting, it kind of puts a little bit of a fear into the defense to know they can\u2019t start coming up; they can\u2019t start jumping some of our routes.\" Coach Andy Reid confirmed as much, stating \"if it\u2019s a situation where it\u2019s equal or depending on the matchup, you take the shot.\" Mahomes has averaged fewer than 6.0 yards per attempt in four of his last five starts but clearly does not intend on launching downfield into shell coverage any time soon. He remains a low-end QB1 for Week 10 against the Raiders.\n",
    "timestamp": "2021-11-11 04:03 PM",
    "source": "The Kansas City Star",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 33.28,
    "week02": 25.02,
    "week03": 24.9,
    "week04": 32.72,
    "week05": 20.98,
    "week06": 24.98,
    "week07": 8.74,
    "week08": 15.0,
    "week09": 10.44,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.28, 25.02, 24.9, 32.72, 20.98, 24.98, 8.74, 15.0, 10.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2, 24.1, 22.6, 21.5, 19.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1, 22.3, 16.4, 17.1, 23.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5, 31.5, 30.4, 26.3, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2565969.png",
    "name": "Taylor Heinicke",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 19.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 17.45,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.26,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Taylor Heinicke completed 24-of-39 passes for 270 yards, one touchdown, and two interceptions in Washington's 17-10 Week 8 loss to Denver.\n",
    "report": "",
    "analysis": "Only one week after Heinicke was able to salvage his fantasy performance with 10 carries and 95 rushing yards, he took off only one time for 10 yards against Denver, dragging Washington to its fourth consecutive loss after he sailed the potential game-tying Hail Mary out of the end zone and into the stands. Washington was scoreless in two red zone trips, going 0-for-6 inside the 20 over its last two games; of the team's nine possessions on Sunday, only 19 plays occurred inside Denver's 30-yard line, amassing 17 yards. Washington's bye obviously comes at the perfect time as the team's coaching staff will gather prior to Week 10 and figure out how to (hopefully) move the ball efficiently against Tampa Bay.\n",
    "timestamp": "2021-11-01 03:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.58,
    "week02": 21.04,
    "week03": 22.88,
    "week04": 27.9,
    "week05": 11.92,
    "week06": 10.28,
    "week07": 21.22,
    "week08": 13.8,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.58, 21.04, 22.88, 27.9, 11.92, 10.28, 21.22, 13.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 14.6, 11.7, 20.0, 18.0, 20.7, 12.2, 17.8, 'BYE', 19.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 16.4, 15.0, 0.0, 14.4, 25.1, 20.4, 'BYE', 20.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 12.5, 23.5, 22.6, 2.3, 14.7, 25.5, 28.2, 'BYE', 25.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 19.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 22.52,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.35,
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
    "headlineNews": "Jalen Hurts completed\u00a011-of-17 passes for 162 yards and one touchdown to go along with 10 carries for 62 rushing yards in Philadelphia's 27-24 Week 9 loss to the Chargers.\n",
    "report": "",
    "analysis": "Hurts went 4-for-4 on Philadelphia's final drive, extending the possession with two third-down scrambles and a touchdown against a zero-blitz. But Hurts completed only four pass attempts in the first half, whiffing on targets to\u00a0Dallas Goedert\u00a0downfield and\u00a0DeVonta Smith\u00a0on third down in the end zone, the latter which would have resulted in the seven points Philadelphia needed to notch a win. Of the Eagles\u2019 six losses this season, the Chargers\u2019 27 points were the second-fewest they\u2019ve allowed, permitting the fourth different quarterback to complete at least 80 percent of his passes this year. With 31 total pass attempts the past two weeks, the Eagles' league-high run play rate in neutral game script over the last month has also taken away from Hurts' fantasy production in that time. Consider him a low-end QB1 with rushing upside in Week 10 against the Broncos.\n",
    "timestamp": "2021-11-08 05:37 AM",
    "source": null,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.76, 21.8, 22.54, 28.18, 23.92, 26.0, 23.54, 11.22, 16.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 22.6, 25.0, 23.7, 20.4, 24.4, 21.0, 22.7, 19.9, 19.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 17.8, 27.3, 18.8, 22.1, 26.3, 23.8, 9.2, 13.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 30.2, 31.7, 31.2, 27.6, 25.0, 31.8, 30.6, 27.7, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 19.0,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 18.5,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 20.95,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Matt Ryan completed 23-of-30 passes for 343 yards and two touchdowns in the Falcons' 27-25, Week 9 win over the Saints, adding five carries for eight additional yards and a score.\u00a0\n",
    "report": "",
    "analysis": "Ryan's one-yard scoring rush in the third quarter was his first of 2021. Hilariously, Ryan put the defense on a poster not once, but twice with his running moves this afternoon. Let's just say\u00a0Demario Davis might need to turn in his badge and gun. Ryan has now rather quietly been playing sensible football for the better part of a month, establishing a 280/2 floor to go along with three 300-yard passing efforts in his past four contests. All this with Calvin Ridley barely playing and out indefinitely. Ceiling has been basically nonexistent with only one two-plus score day through the air, but Ryan is a perfectly fine top-18 option in a pinch. That will include for Week 10 against the feast-or-famine Cowboys.\u00a0\u00a0\n",
    "timestamp": "2021-11-07 11:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.36,
    "week02": 19.3,
    "week03": 15.62,
    "week04": 29.02,
    "week05": 21.58,
    "week06": "BYE",
    "week07": 18.44,
    "week08": 8.14,
    "week09": 28.52,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.36, 19.3, 15.62, 29.02, 21.58, 'BYE', 18.44, 8.14, 28.52]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 16.3, 14.0, 20.1, 15.1, 'BYE', 18.7, 19.2, 16.8, 19.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.5, 10.7, 15.2, 13.9, 'BYE', 16.6, 12.5, 11.3, 12.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 27.3, 19.2, 21.9, 23.6, 'BYE', 26.6, 20.7, 20.2, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 18.4,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 19.7,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 18.36,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthOut": "Reserve-covid-19",
    "injury": "Illness",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "ESPN's Adam Schefter reports that Packers QB Aaron Rodgers and Packers WR Allen Lazard have each been fined $14,650 for violating league COVID-19 protocols.\n",
    "report": "",
    "analysis": "The Packers were reportedly fined $300,000. It's a slap on the wrist considering how much the NFL has tried to make it appear as if they care about keeping everyone involved with the league safe from the virus. Rodgers and Lazard remain on the COVID list at the moment, but they have a shot to return in time for the Packers' Week 10 game against the Seahawks.\n",
    "timestamp": "2021-11-10 02:19 AM",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "",
    "week01": 3.32,
    "week02": 26.8,
    "week03": 18.54,
    "week04": 24.12,
    "week05": 20.76,
    "week06": 23.7,
    "week07": 24.66,
    "week08": 15.66,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.32, 26.8, 18.54, 24.12, 20.76, 23.7, 24.66, 15.66, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 15.5, 16.0, 14.5, 16.6, 14.5, 17.9, 16.6, 'DNP', 18.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 15.5, 22.0, 24.3, 17.3, 16.4, 26.2, 13.5, 'DNP', 19.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.3, 28.3, 29.2, 28.6, 22.2, 25.8, 31.5, 23.9, 'DNP', 26.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 17.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 16.71,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 18.82,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Teddy Bridgewater completed 19-of-28 passes for 249 yards and one touchdown in the Broncos' 30-16, Week 9 win over the Cowboys.\n",
    "report": "",
    "analysis": "After tossing a 44-yard touchdown to Tim Patrick in the second quarter, Bridgewater added a second touchdown via the ground on a one-yard sneak in the third quarter before tossing a two-pointer to Courtland Sutton to put the Broncos up 27-0. Bridgewater's 8.9 YPA average was his third-best mark of the season, and this was one of the more dominant upsets of the year. Bridgewater was throwing the ball aggressively and likely bought himself several more weeks under center after the Drew Lock whispers had been growing louder of late. Bridgewater will be a back-end QB2 next week against the Eagles.\n",
    "timestamp": "2021-11-07 09:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.46,
    "week02": 21.22,
    "week03": 11.8,
    "week04": 6.8,
    "week05": 19.62,
    "week06": 21.26,
    "week07": 14.78,
    "week08": 12.62,
    "week09": 21.86,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.46, 21.22, 11.8, 6.8, 19.62, 21.26, 14.78, 12.62, 21.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 20.0, 18.0, 20.4, 17.9, 16.9, 18.2, 21.7, 16.9, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 7.0, 17.9, 12.0, 10.0, 13.7, 9.0, 12.2, 11.9, 12.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 17.1, 22.1, 16.7, 19.0, 19.1, 14.5, 16.3, 16.8, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 17.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 13,
    "avg_fp2": 16.35,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.77,
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
    "headlineNews": "Jimmy Garoppolo completed 28-of-40 passes for 326 yards, two touchdowns, and an interception in the 49ers' 31-17, Week 9 loss to the Cardinals.\n",
    "report": "",
    "analysis": "Garoppolo came up short in a game that felt like a must-win for San Francisco. The 49ers now sit at 3-5 and are without a win at home this year. At two games below .500, they're going to struggle to make the momentous turnaround necessary to make the playoffs. The San Francisco offense put up 10 of their 17 points after the Cardinals had taken a 24-point lead and Garoppolo only came alive once the game was practically decided. Garoppolo will attempt to rebound versus the Rams next week but can only be trusted as a middling QB2, despite the potentially exciting game environment.\u00a0\n",
    "timestamp": "2021-11-08 02:39 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 14.76,
    "week02": 19.56,
    "week03": 15.68,
    "week04": 9.6,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 7.24,
    "week08": 27.28,
    "week09": 20.34,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.76, 19.56, 15.68, 9.6, 'DNP', 'BYE', 7.24, 27.28, 20.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 15.8, 21.7, 19.4, 'DNP', 'BYE', 18.7, 14.5, 14.9, 17.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 4.6, 17.6, 13.4, 'DNP', 'BYE', 20.1, 10.3, 10.6, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.0, 18.5, 24.5, 18.9, 'DNP', 'BYE', 23.6, 13.2, 14.9, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 17.3,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 11,
    "avg_fp2": 20.15,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.79,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Kirk Cousins completed 17-of-28 for 187 yards and two touchdowns in the Vikings' Week 9 loss to the Ravens, adding one rush for one yard and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "It was a lackluster performance from Cousins outside a 50-yard touchdown connection with Justin Jefferson in the first quarter. He continually settled for dump offs instead of challenging the beatable Baltimore secondary downfield. Fantasy wise, Cousins ended up OK thanks mostly to a one-yard leap into the end zone and a late touchdown toss to red zone maven Adam Thielen. Cousins could have a low fantasy floor next week against a Chargers defense that's begging for a heavy dose of Dalvin Cook.\u00a0\n",
    "timestamp": "2021-11-07 11:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.04,
    "week02": 25.26,
    "week03": 25.12,
    "week04": 11.12,
    "week05": 14.4,
    "week06": 28.52,
    "week07": "BYE",
    "week08": 13.16,
    "week09": 21.58,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.04, 25.26, 25.12, 11.12, 14.4, 28.52, 'BYE', 13.16, 21.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.7, 17.5, 20.1, 21.9, 18.4, 16.9, 'BYE', 21.6, 20.1, 17.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.7, 11.1, 20.0, 20.8, 12.5, 18.9, 'BYE', 21.6, 18.9, 19.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.3, 26.0, 24.0, 26.6, 22.7, 26.3, 'BYE', 26.7, 25.9, 27.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png",
    "name": "Mac Jones",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 17.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 13.82,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 19.9,
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
    "headlineNews": "Mac Jones completed 12-of-18 passes for 139 yards, one touchdown and an interception in the Patriots' 24-6, Week 9 win over the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Jones also took two sacks, one of which was a thundering blindside shot he never felt coming. Jones coughed up the ball for a lost fumble, but the Patriots survived his two turnovers on an afternoon where Sam Darnold committed three. It's hard to say Jones successfully \"managed the game\" when he gave the ball away twice, but he did more than enough as the Pats paved the Panthers on the ground. Jones' score was a seven-yard strike to Hunter Henry near the end of the first half. His interception came when ex-teammate Stephon Gilmore ran Jakobi Meyers' route for him in the second quarter. The ball should have never left Jones' hand. All in all, Jones is playing well for a rookie but generating little fantasy value, DFS or otherwise. The Browns are a middle-of-the-road Week 10 matchup.\u00a0\n",
    "timestamp": "2021-11-07 09:59 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.24, 7.44, 14.6, 17.9, 12.54, 15.76, 22.18, 11.72, 6.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 15.1, 11.0, 18.5, 15.8, 16.8, 14.3, 15.6, 13.9, 17.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.8, 5.6, 8.8, 10.2, 8.5, 13.2, 12.7, 12.4, 16.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 22.2, 16.5, 20.8, 22.3, 21.5, 17.0, 19.8, 19.3, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 17.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 23,
    "avg_fp2": 9.93,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.77,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Jacoby Brissett (knee) did not return to the Dolphins' Week 10 win over the Ravens after departing early in the third quarter.\n",
    "report": "",
    "analysis": "Brissett was cleared to come back, but the Dolphins decided to stick with Tua Tagovailoa. Tua's finger no longer appeared to be an issue, even after he banged it hard on a follow through. We would fully expect Tagovailoa to start Week 11 against the Jets.\u00a0\n",
    "timestamp": "2021-11-12 06:16 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.4,
    "week02": 6.56,
    "week03": 20.3,
    "week04": 14.76,
    "week05": 16.0,
    "week06": 1.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 10.46,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 6.56, 20.3, 14.76, 16.0, 1.0, 'DNP', 'DNP', 10.46]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 2.1, 11.2, 16.7, 15.4, 4.9, 'DNP', 'DNP', 4.2, 17.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 11.0, 14.4, 19.6, 2.0, 'DNP', 'DNP', 0.0, 13.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 14.6, 18.7, 18.5, 25.4, 7.4, 'DNP', 'DNP', 3.3, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 16.7,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 27,
    "avg_fp2": 19.93,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.63,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Finger",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Russell Wilson (finger) estimates his health is \"90th percentile\" ahead of his Week 10 return against the Packers.\u00a0\n",
    "report": "",
    "analysis": "\"I feel great,\" Wilson began. \"I feel really close. I'm not 100 percent yet, but I'm pretty dang close. I would say 90th percentile if not higher. I've got great conviction about what I'm doing, how I'm doing it. My mindset is better than ever. I'm ready to roll and ready to go.\" We are surprised someone like Mr. Positivity Wilson would admit he's not 100 percent, but he is practicing in full and has already been declared the Week 10 starter. We assume Wilson would not be playing if his throwing motion were still impacted, but it will be something to monitor in a game where the total is nearly 50 points.\u00a0\n",
    "timestamp": "2021-11-12 01:52 AM",
    "source": "ESPN",
    "game_day_logo": "",
    "week01": 27.06,
    "week02": 23.32,
    "week03": 16.62,
    "week04": 22.56,
    "week05": 10.08,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.06, 23.32, 16.62, 22.56, 10.08, 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 21.1, 24.5, 22.1, 22.0, 'DNP', 'DNP', 'DNP', 'BYE', 16.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 26.9, 26.3, 20.0, 'DNP', 'DNP', 'DNP', 'BYE', 15.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.6, 28.1, 35.5, 34.3, 30.4, 'DNP', 'DNP', 'DNP', 'BYE', 25.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360310.png",
    "name": "Trevor Lawrence",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 16.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 24,
    "avg_fp2": 14.43,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 21.92,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars head coach Urban Meyer said Trevor Lawrence (ankle) will play in Week 10 against the Colts.\u00a0\n",
    "report": "",
    "analysis": "Lawrence appeared to suffer a serious ankle injury in last week's win against Buffalo but got in some limited work at practice this week and is expected to be under center against Indianapolis. Lawrence, who's scored 19 combined fantasy points over his past two games, is a desperation streamer against a Colts defense giving up 71.2 percent of its yardage through the air.\u00a0\n",
    "timestamp": "2021-11-12 03:35 PM",
    "source": "Michael DiRocco on Twitter ",
    "game_day_logo": "",
    "week01": 22.08,
    "week02": 8.82,
    "week03": 9.46,
    "week04": 17.76,
    "week05": 22.72,
    "week06": 15.86,
    "week07": "BYE",
    "week08": 13.62,
    "week09": 5.12,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.08, 8.82, 9.46, 17.76, 22.72, 15.86, 'BYE', 13.62, 5.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 19.4, 17.3, 14.6, 17.1, 21.3, 'BYE', 17.5, 15.5, 16.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 10.4, 12.1, 8.1, 11.2, 12.8, 'BYE', 11.8, 11.3, 19.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 24.2, 25.1, 20.7, 22.7, 27.8, 'BYE', 21.0, 20.6, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2511109.png",
    "name": "Trevor Siemian",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 16.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 31,
    "avg_fp2": 13.26,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.51,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints will start QB Trevor Siemian in Week 10 against the Titans.\n",
    "report": "",
    "analysis": "Taysom Hill will back up Siemian, and Sean Payton indicated that the team will have packages in place for the dual-threat quarterback. With Alvin Kamara (knee) ruled out this week and a very weak wide receiver group, Siemian is not set up for success against a Titans defense that just embarrassed Matthew Stafford. Siemian should be able to handle checking down repeatedly to Mark Ingram this week. Anything beyond that is a stretch.\n",
    "timestamp": "2021-11-12 09:20 PM",
    "source": "Field Yates on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 10.56,
    "week09": 15.96,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 10.56, 15.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.6, 18.5, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 7.0, 10.4, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 14.5, 19.5, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.3,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 17,
    "avg_fp2": 13.76,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.41,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Ben Roethlisberger (shoulder) does not carry an injury designation for Week 10 against the Lions.\n",
    "report": "",
    "analysis": "",
    "timestamp": "2021-11-12 08:22 PM",
    "source": "Brian Batko on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.02, 14.8, 15.22, 10.28, 16.02, 10.86, 'BYE', 14.64, 16.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 16.3, 15.5, 14.2, 13.7, 16.0, 'BYE', 15.6, 16.6, 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.1, 9.9, 12.7, 15.0, 7.4, 14.5, 'BYE', 10.6, 14.3, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 23.6, 20.1, 25.3, 16.8, 22.5, 'BYE', 21.1, 22.3, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 16.0,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 17.62,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.27,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill is dealing with an illness but does carry an injury designation for Week 10 against the Saints.\n",
    "report": "",
    "analysis": "Mike Vrabel didn't elaborate on Tannehill's status, simply stating that he had an illness but did not have an injury designation. Tannehill was absent from practice on Friday, so this clears up why that was the case. The quarterback looks set up for a high-volume passing day against the Saints, provided he is at full health. Tannehill can be considered a high-end QB2 unless we hear negative reports on his health before kickoff.\u00a0\n",
    "timestamp": "2021-11-12 07:17 PM",
    "source": "Paul Kuharsky on Twitter",
    "game_day_logo": "",
    "week01": 15.18,
    "week02": 14.58,
    "week03": 23.48,
    "week04": 18.82,
    "week05": 13.98,
    "week06": 13.94,
    "week07": 20.4,
    "week08": 23.2,
    "week09": 15.02,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.18, 14.58, 23.48, 18.82, 13.98, 13.94, 20.4, 23.2, 15.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 12.3, 18.6, 16.1, 18.0, 15.2, 19.5, 18.2, 16.9, 16.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 12.0, 11.5, 11.9, 16.7, 12.5, 13.3, 15.2, 19.6, 12.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 21.4, 22.0, 20.6, 23.4, 18.6, 19.6, 19.9, 26.7, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 14.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 22,
    "avg_fp2": 14.18,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.82,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jared Goff completed 25-of-34 passes for 222 yards in Week 8 against the Eagles.\n",
    "report": "",
    "analysis": "Goff was rested on the Lions' final drive of the fourth quarter after taking five sacks. This was another rough outing, with Goff getting held without a touchdown for the second time in two weeks. None of Detroit's receivers had more than five targets from Goff, who targeted T.J. Hockenson on 11 of his 34 attempts.\u00a0Goff and the winless Lions have a matchup with Steelers after a Week 9 bye.\n",
    "timestamp": "2021-10-31 08:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.92,
    "week02": 19.44,
    "week03": 9.08,
    "week04": 16.76,
    "week05": 7.12,
    "week06": 9.18,
    "week07": 13.02,
    "week08": 8.88,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.92, 19.44, 9.08, 16.76, 7.12, 9.18, 13.02, 8.88, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 21.2, 27.4, 15.9, 17.2, 17.5, 14.7, 16.5, 'BYE', 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 9.6, 13.5, 16.3, 13.3, 7.4, 8.6, 10.5, 'BYE', 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 24.0, 20.2, 21.4, 17.9, 15.3, 17.8, 18.3, 'BYE', 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 13.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 15.1,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.87,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Baker Mayfield (left shoulder/foot) was upgraded to a full practice on Thursday.\n",
    "report": "",
    "analysis": "The Browns should have their starting quarterback ready for a Week 10 showdown against the Patriots. The rhetoric was trending this way even before the upgrade to full. Mayfield will be a low-end QB2 for fantasy purposes this week.\u00a0\n",
    "timestamp": "2021-11-11 09:22 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.64,
    "week02": 18.52,
    "week03": 16.94,
    "week04": 9.3,
    "week05": 23.0,
    "week06": 13.16,
    "week07": "DNP",
    "week08": 9.5,
    "week09": 16.72,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.64, 18.52, 16.94, 9.3, 23.0, 13.16, 'DNP', 9.5, 16.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 16.8, 16.3, 19.5, 14.6, 12.8, 'DNP', 17.2, 15.5, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 9.4, 16.2, 17.9, 13.2, 14.6, 'DNP', 11.8, 13.1, 12.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 24.9, 20.7, 23.1, 21.2, 20.8, 'DNP', 18.4, 20.2, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051381.png",
    "name": "Mike White",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 12.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 15.33,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.4,
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
    "headlineNews": "Zach Wilson said his \"style of plays needs to get more like\" Mike White.\u00a0\n",
    "report": "",
    "analysis": "Wilson said White is his best friend on the team and that he would try to emulate White's patience and willingness to check down to the open man once he returns to the Jets' starting lineup. Jets players reportedly chant \"Mike White\" every time the quarterback enters the team's locker room; they've yet to chant \"Zach Wilson\" when the No. 2 overall pick in the 2021 NFL Draft strolls through the locker room. It's an undeniably awkward situation for Wilson, White, and the Jets decision makers. White could make it even more awkward if he fares well against the tough Buffalo defense this Sunday.\u00a0\n",
    "timestamp": "2021-11-12 01:27 PM",
    "source": "ESPN.com ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 10.08,
    "week08": 28.1,
    "week09": 7.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 10.08, 28.1, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.5, 12.4, 15.5, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 6.8, 7.9, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 8.6, 18.2, 20.9, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051308.png",
    "name": "P.J. Walker",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 12.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 15.4,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "CBS Sports' Jonathan Jones reports Cam Newton could be active in Week 10 against the Cardinals \"as either an emergency player or subbing in for some special packages.\"\n",
    "report": "",
    "analysis": "Jones said Newton, who rejoined the Panthers Thursday with Sam Darnold (shoulder) out for up to a month, will start in Week 11 against Washington. He could see some playing time this week against Arizona, though P.J. Walker will draw the start. That means Newton could see usage in short yardage situations or at the goal line, which would ding Walker's upside and maybe dig into Christian McCaffrey's touchdown equity. Newton should be rostered in all superflex formats for an excellent Week 11 matchup against the Football Team.\u00a0\n",
    "timestamp": "2021-11-12 01:58 PM",
    "source": "CBSSports.com",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.5]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241457.png",
    "name": "Najee Harris",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 21.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 28,
    "avg_fp2": 17.38,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 28.05,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Najee Harris (foot) does not carry an injury designation for Week 10 against the Lions.\n",
    "report": "",
    "analysis": "Harris leads all running backs in Pro Football Focus' expected points metric, but he has dramatically underperformed his workload this season. The Lions offer him an opportunity to add efficiency on top of his elite workload because they are very bad at everything. Harris popped up on the injury report Friday with a foot injury, but with no designation on the final report, the rookie has an ideal setup against the Lions.\n",
    "timestamp": "2021-11-12 09:23 PM",
    "source": "Brian Batko on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 16.6, 21.2, 18.1, 21.2, 21.7, 'BYE', 19.5, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 11.7, 12.5, 14.9, 12.7, 19.4, 'BYE', 13.7, 19.1, 21.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 4.6, 4.7, 6.4, 4.3, 9.1, 'BYE', 19.3, 19.1, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.4, 16.8, 17.9, 14.2, 26.5, 'BYE', 22.1, 21.8, 22.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 18.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 10,
    "avg_fp2": 17.75,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.48,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints declared Alvin Kamara (knee) out for Week 10 against the Titans.\n",
    "report": "",
    "analysis": "Mark Ingram had a 13% target share in Week 9, with Kamara still heavily involved as a receiver with an 18% target share. Trevor Siemian isn't likely to be very productive on Sunday, but he does look likely to check down frequently to Ingram. Since reuniting with Sean Payton in Week 8, Ingram has averaged 11 touches per game.\u00a0 He will carry the load as a touch-based RB1 opposite Tennessee on Sunday. Kamara will look to make his return against the Eagles' run funnel defense in Week 11.\n",
    "timestamp": "2021-11-12 09:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.6,
    "week02": 5.0,
    "week03": 19.3,
    "week04": 12.0,
    "week05": 26.7,
    "week06": "BYE",
    "week07": 28.9,
    "week08": 15.1,
    "week09": 18.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.6, 5.0, 19.3, 12.0, 26.7, 'BYE', 28.9, 15.1, 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.0, 12.7, 10.3, 15.3, 11.8, 'BYE', 19.3, 15.2, 18.0, 18.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 9.0, 1.9, 13.3, 10.6, 'BYE', 14.4, 14.7, 11.0, 16.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.5, 31.1, 17.9, 20.3, 23.3, 'BYE', 24.6, 26.3, 21.0, 23.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 17.8,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 14.64,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 26.16,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "AJ Dillon had eight rushes for 46 yards in the Packers' Week 9 loss to the Chiefs, adding four receptions for 44 yards.\u00a0\n",
    "report": "",
    "analysis": "It's the four catches on four targets that should prove concerning for Aaron Jones drafters. Coming into Week 9, Jones' 15 percent target share dwarfed Dillon's 5 percent share. Whether their usage against Kansas City -- with Aaron Rodgers (COVID) sidelined -- is a blip or the start of a trend remains to be seen, but is well worth monitoring. Dillon shined with a 21-yard catch and a 15-yard rush in an otherwise stagnant Green Bay offense. He has every chance to emerge as a low-end RB2 play while severely capping Jones' weekly upside. Dillon is certainly in play as a flex option next week against the run-funnel Vegas defense.\u00a0\n",
    "timestamp": "2021-11-08 01:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 38.5,
    "week03": 16.6,
    "week04": 9.4,
    "week05": 12.9,
    "week06": 19.0,
    "week07": 6.4,
    "week08": 20.5,
    "week09": 5.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 38.5, 16.6, 9.4, 12.9, 19.0, 6.4, 20.5, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 7.8, 14.9, 13.4, 12.9, 11.9, 14.1, 11.1, 15.8, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 5.6, 13.2, 5.6, 8.0, 9.0, 9.6, 0.4, 10.1, 11.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 26.6, 27.1, 21.9, 23.0, 21.2, 20.5, 16.8, 17.9, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 17.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 18.3,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.74,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Austin Ekeler rushed 17 times for 59 yards, hauling in all three of his targets for 23 yards in Los Angeles' Week 9 win over the Eagles.\n",
    "report": "",
    "analysis": "Ekeler handled 20-of-25 backfield touches, out-carrying Josh Kelley 17-3 in a tight game throughout. He did extend his streak of three receptions in every game this year, failing to total 100 yards from scrimmage for only the second time this season. Expect a similar workload if Justin Jackson remains sidelined in Week 10 against the Vikings.\n",
    "timestamp": "2021-11-08 06:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.7,
    "week02": 18.0,
    "week03": 19.7,
    "week04": 28.0,
    "week05": 30.4,
    "week06": 7.5,
    "week07": "BYE",
    "week08": 21.4,
    "week09": 9.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 18.0, 19.7, 28.0, 30.4, 7.5, 'BYE', 21.4, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 11.6, 17.7, 16.7, 12.7, 17.2, 'BYE', 15.8, 16.2, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 4.2, 18.9, 12.0, 3.4, 7.6, 'BYE', 6.1, 7.5, 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 18.5, 24.0, 17.5, 9.8, 16.6, 'BYE', 16.2, 17.5, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 16.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 5,
    "avg_fp2": 19.43,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 21.01,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jonathan Taylor rushed 19 times for 172 yards and two touchdowns in the Colts' Week 9 win over the Jets, adding two receptions for 28 additional yards.\u00a0\n",
    "report": "",
    "analysis": "The 172 yards rushing were the second most of Taylor's career, and buoyed by a 78-yard touchdown midway through the third quarter. Back on the field after a Jets three-and-out, Taylor faced a loaded box on 1st-and-10 from the Colts' own 22-yard line, got skinny through the hole and was off to the races for the top speed by any ball carrier all year, via Next Gen Stats. If you can believe it, Taylor actually left some meat on the bone this evening, getting stymied on some goal-line touches. That included a fourth down run from the Jets' two-yard line in the third quarter. Taylor was stopped for a one-yard gain. There was a scary moment late in the first half where Taylor took a helmet to his knee on a different failed goal-line run, but he was thankfully able to shake it off after a drive or two. Coach Frank Reich said it was a cut. On an absolute heater \u2014 he has reached 100 yards on the ground in four of his past six games \u2014 Taylor has a mouthwatering Week 10 matchup in the pathetic Jaguars.\u00a0 \u00a0\n",
    "timestamp": "2021-11-05 04:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.6,
    "week02": 5.8,
    "week03": 7.7,
    "week04": 18.9,
    "week05": 30.4,
    "week06": 28.3,
    "week07": 16.5,
    "week08": 19.7,
    "week09": 33.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 5.8, 7.7, 18.9, 30.4, 28.3, 16.5, 19.7, 33.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 18.0, 12.1, 10.6, 11.4, 16.4, 15.0, 15.8, 19.6, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 27.3, 15.4, 1.9, 3.2, 5.8, 6.2, 6.7, 11.8, 24.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 35.2, 31.9, 11.2, 13.1, 23.6, 13.6, 18.5, 22.9, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 16.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 10.13,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 34.69,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills listed Zack Moss (concussion) as questionable for Week 10 against the Jets.\n",
    "report": "",
    "analysis": "Moss is still in the concussion protocol, but he was not in a non-contact Jersey in Friday's practice, so he has a good chance of playing Sunday. Moss will likely be in a near-even split with Devin Singletary. If the Bills are back to their pre-Jaguars form however, there could be plenty of rushing work to go around. Moss shapes up as a low-floor RB2 play if he is able to play this week.\n",
    "timestamp": "2021-11-12 08:03 PM",
    "source": "Joe Buscaglia on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 14.4, 16.6, 12.1, 10.7, 4.9, 'BYE', 8.8, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.3, 7.3, 17.2, 15.7, 15.7, 'BYE', 15.2, 13.6, 16.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 3.6, 8.7, 10.9, 8.4, 'BYE', 9.6, 7.5, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 4.9, 9.7, 21.8, 12.0, 'BYE', 12.7, 11.8, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 15.9,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 24,
    "avg_fp2": 15.24,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.23,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jamaal Williams (thigh) won't play in Week 10 against the Steelers.\n",
    "report": "",
    "analysis": "It's a terrible sign that Williams failed to log a single practice after receiving extensive rest through Detroit's bye. D'Andre Swift notably out-touched Jermar Jefferson and Godwin Igwebuike 17-5 until the Eagles took a 38-0 fourth-quarter lead in Week 8, cementing Swift in the exact same (juicy) spot as long as the Lions keep competitive. He's considered a low-end RB1 opposite Pittsburgh's front-seven.\n",
    "timestamp": "2021-11-12 08:36 PM",
    "source": "Detroit Lions on Twitter",
    "game_day_logo": "",
    "week01": 20.4,
    "week02": 9.8,
    "week03": 20.2,
    "week04": 6.9,
    "week05": 19.4,
    "week06": 15.2,
    "week07": 24.4,
    "week08": 5.6,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.4, 9.8, 20.2, 6.9, 19.4, 15.2, 24.4, 5.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 17.6, 16.7, 15.1, 13.7, 17.7, 15.3, 19.4, 'BYE', 15.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.7, 17.7, 5.0, 17.7, 11.6, 14.9, 14.7, 'BYE', 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 20.7, 19.6, 12.4, 21.5, 13.8, 23.4, 15.9, 'BYE', 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 15.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 3,
    "avg_fp2": 15.88,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.21,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Ezekiel Elliott (knee) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Elliott was in and out of the game against the Broncos last week but was out there on meaningless fourth-quarter drives, suggesting he's fine. He has a bounce-back spot this week against the Falcons.\n",
    "timestamp": "2021-11-10 09:22 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 16.7, 25.1, 20.3, 24.2, 15.4, 'BYE', 9.3, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 9.6, 10.6, 9.0, 16.1, 13.3, 'BYE', 15.7, 15.0, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.8, 10.1, 19.9, 18.4, 23.7, 14.8, 'BYE', 19.3, 20.0, 17.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 25.3, 25.0, 23.0, 31.9, 19.7, 'BYE', 24.8, 26.1, 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 15.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 9,
    "avg_fp2": 13.57,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.27,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Dalvin Cook told reporters he has not been in contact with the NFL and will play in Week 10 against the Chargers.\n",
    "report": "",
    "analysis": "Cook's long-term outlook remains highly questionable but all signs point to the league holding off on taking action in this matter until the situation becomes more clear. They are looking into the matter but have not released any further comments. Cook has been accused of physical and emotional abuse in a lawsuit filed by his ex-girlfriend. He, on the other hand, claims to be the\u00a0victim of domestic abuse and extortion.\u00a0\n",
    "timestamp": "2021-11-10 07:26 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": 17.4,
    "week02": 15.8,
    "week03": "DNP",
    "week04": 5.4,
    "week05": "DNP",
    "week06": 21.3,
    "week07": "BYE",
    "week08": 7.8,
    "week09": 13.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.4, 15.8, 'DNP', 5.4, 'DNP', 21.3, 'BYE', 7.8, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 16.4, 'DNP', 12.3, 'DNP', 12.9, 'BYE', 15.6, 13.9, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.6, 7.7, 'DNP', 4.7, 'DNP', 7.2, 'BYE', 14.8, 8.1, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.5, 'DNP', 11.9, 'DNP', 12.8, 'BYE', 18.3, 16.0, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 14.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 17,
    "avg_fp2": 15.75,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.44,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Christian McCaffrey (hamstring) does not carry an injury designation for Week 10 against the Cardinals.\n",
    "report": "",
    "analysis": "",
    "timestamp": "2021-11-12 08:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.2,
    "week02": 22.2,
    "week03": 5.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 12.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.2, 22.2, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.9, 17.3, 20.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.2, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.8, 14.1, 24.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.4, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.8, 34.5, 29.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 28.0, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 14.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 27,
    "avg_fp2": 13.32,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.29,
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
    "headlineNews": "Josh Jacobs rushed 13 times for 76 yards in the Raiders' Week 9 loss to the Giants, adding four catches for 19 yards.\u00a0\n",
    "report": "",
    "analysis": "Jacobs briefly exited with a limp but wasn't gone for long before returning. He didn't appear to be limping at the end of the game so we'll assume it was a cramp or some minor soreness until further notice. Jacobs was explosive with the ball in his hands and functioned as a meaningful piece of the passing game once again. He has now seen at least three targets in 4-of-6 games this year. Jacobs also ceded just four carries to Kenyan Drake. He'll be a high-upside RB2 in a potential shootout with the Chiefs next week.\n",
    "timestamp": "2021-11-07 10:55 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 16.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 8.2,
    "week05": 14.7,
    "week06": 14.7,
    "week07": 14.3,
    "week08": "BYE",
    "week09": 11.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 'DNP', 'DNP', 8.2, 14.7, 14.7, 14.3, 'BYE', 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 'DNP', 'DNP', 13.9, 12.5, 11.4, 15.6, 'BYE', 13.2, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 'DNP', 'DNP', 13.8, 18.8, 19.5, 17.1, 'BYE', 16.5, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 'DNP', 'DNP', 17.1, 23.7, 23.2, 19.6, 'BYE', 21.3, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 14.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 20,
    "avg_fp2": 15.26,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 22.59,
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
    "headlineNews": "Darrell Henderson rushed 11 times for 55 yards, adding three yards on three catches in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "Henderson briefly left with an ankle injury in the second quarter but quickly returned to the game. Still, it wasn't a great script for him, as the Rams were trailing the entire game and he was able to muster just 11 carries. Henderson is still the clear RB1 ahead of Sony Michel and should be started in all formats next week despite his disappointing performance on Sunday Night Football. Don't panic.\n",
    "timestamp": "2021-11-08 04:48 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 15.2,
    "week02": 15.7,
    "week03": "DNP",
    "week04": 14.1,
    "week05": 16.4,
    "week06": 23.7,
    "week07": 7.9,
    "week08": 21.8,
    "week09": 7.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.2, 15.7, 'DNP', 14.1, 16.4, 23.7, 7.9, 21.8, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.3, 'DNP', 15.2, 17.2, 14.7, 18.3, 16.3, 15.3, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 5.7, 3.1, 7.7, 7.3, 9.1, 4.6, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 12.8, 'DNP', 15.3, 13.8, 18.2, 13.7, 21.7, 13.8, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241555.png",
    "name": "Elijah Mitchell",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.3,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 14,
    "avg_fp2": 12.78,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.23,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Elijah Mitchell (ribs) remained limited in Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "For what it's worth, Mitchell was listed as the likely RB1 by Kyle Shanahan in his presser today (linked below), so this designation is probably not anything to worry about. Mitchell has not had a full practice over the last two weeks yet, but he did play through the injury successfully last week. Mitchell is RotoPat's RB15 this week against the Rams.\u00a0\n",
    "timestamp": "2021-11-11 09:52 PM",
    "source": "Cam Inman on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": 6.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "BYE",
    "week07": 16.7,
    "week08": 19.7,
    "week09": 10.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.3, 'DNP', 'DNP', 7.2, 'BYE', 16.7, 19.7, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 'DNP', 'DNP', 7.3, 'BYE', 14.7, 13.0, 14.5, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.1, 'DNP', 'DNP', 1.4, 'BYE', 5.1, 4.9, 5.7, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 22.1, 'DNP', 'DNP', 10.6, 'BYE', 15.9, 18.1, 17.9, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 13.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 13,
    "avg_fp2": 12.0,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.28,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 19.3,
    "week02": 7.9,
    "week03": 14.6,
    "week04": 7.7,
    "week05": 5.3,
    "week06": 8.8,
    "week07": 10.2,
    "week08": 17.7,
    "week09": 16.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 7.9, 14.6, 7.7, 5.3, 8.8, 10.2, 17.7, 16.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 12.9, 13.5, 13.1, 10.3, 12.6, 8.5, 12.8, 9.4, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.8, 12.9, 9.7, 17.0, 12.2, 9.0, 12.1, 5.1, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 22.5, 15.9, 13.3, 21.5, 18.2, 14.4, 19.8, 11.4, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 13.6,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 32,
    "avg_fp2": 10.07,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.77,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Myles Gaskin rushed 14 times for 31 yards in the Dolphins' Week 10 win over the Ravens, adding a 14-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Gaskin now has 101 yards on 46 carries over his past three games, which checks out to 2.2 yards per carry. He hasn't compensated with passing-game prowess, turning 10 receptions into 56 yards. The Dolphins might be in for another backfield shakeup, but if it remains Gaskin in the lead for Week 11, it will be vs. the pathetic Jets. Fantasy managers can still hold out back-end PPR RB2 hope for that one.\u00a0\n",
    "timestamp": "2021-11-12 05:43 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 10.1,
    "week02": 6.6,
    "week03": 8.9,
    "week04": 0.3,
    "week05": 26.9,
    "week06": 2.4,
    "week07": 15.7,
    "week08": 7.0,
    "week09": 12.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 6.6, 8.9, 0.3, 26.9, 2.4, 15.7, 7.0, 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 10.0, 12.7, 11.1, 6.1, 12.4, 11.5, 10.5, 14.9, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 2.1, 8.7, 8.6, 2.7, 1.9, 8.1, 9.5, 11.4, 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 9.7, 9.7, 9.6, 4.9, 12.9, 11.4, 11.6, 13.1, 13.4]
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
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 11.28,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.61,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Neck",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks RB Chris Carson (neck) is a game-time decision for Week 10 against the Packers.\n",
    "report": "",
    "analysis": "Seattle could choose to hold Carson out for one more week if he's drastically sore and not yet ready to go on Saturday afternoon, the deadline to activate him from injured reserve. Although coach Pete Carroll has been optimistic regarding Carson's status, fantasy managers should not trust the latter as anything more than a risky RB3 in Week 10 if active.\n",
    "timestamp": "2021-11-12 08:47 PM",
    "source": "Corbin Smith on Twitter",
    "game_day_logo": "",
    "week01": 11.2,
    "week02": 15.1,
    "week03": 15.2,
    "week04": 3.6,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 15.1, 15.2, 3.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.0, 15.5, 13.1, 12.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.8, 6.8, 8.5, 11.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 19.2, 13.2, 16.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 13.4,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 23,
    "avg_fp2": 13.34,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.35,
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
    "headlineNews": "Leonard Fournette rushed eight times for 26 yards in Tampa's Week 8 loss to the Saints, adding three receptions for 17 additional yards.\u00a0\n",
    "report": "",
    "analysis": "New Orleans' fully healthy run defense feasted on Fournette, and a 23-7 lead game-scripted him out. He was still involved quite a bit in the actual game plan with five targets and eight of the 13 total running back carries, but Fournette was fighting uphill to provide meaningful fantasy value in this one. He'll take a bye in Week 9 with the Football Team on tap for Week 10.\u00a0\n",
    "timestamp": "2021-11-01 12:22 AM",
    "source": null,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 9.6, 4.9, 15.3, 19.0, 27.7, 16.0, 5.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 9.3, 10.6, 9.3, 12.3, 12.5, 14.0, 13.2, 'BYE', 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 8.8, 7.7, 7.4, 8.3, 12.0, 9.3, 'BYE', 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.7, 15.8, 17.3, 13.0, 15.4, 20.8, 16.6, 'BYE', 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 12.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 8,
    "avg_fp2": 14.17,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.08,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Eno Benjamin is expected to see more playing time and touches with Chase Edmonds (ankle) sidelined.\u00a0\n",
    "report": "",
    "analysis": "Impressive athletically coming out of Arizona State in 2020, Benjamin had just two carries headed into Week 9. Edmonds went down with what appears to be a multi-week ankle injury and Benjamin saw nine carries -- one of which he took 21 yards for a touchdown. The explosive second year back has drawn praise from Cardinals head coach Kliff Kingsbury. \"Last year, he was trying to figure it out and I truly didn't know if he would make it,\" Kingsbury said of Benjamin. \"This year he's like a different person, the work ethic, the focus. Any time he touches the ball he has a chance to do something special.\" Benjamin can be penciled in for eight to ten touches -- depending on game script -- while James Conner leads the Arizona backfield in the coming weeks. He should be picked up in all 12-team leagues. Benjamin would become an instant RB2 if Conner were to miss time.\u00a0\n",
    "timestamp": "2021-11-09 05:40 PM",
    "source": "AZCardinals.com ",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 2.6, 17.8, 19.6, 10.2, 7.6, 12.4, 14.2, 37.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 12.7, 5.9, 9.1, 8.9, 6.3, 13.9, 6.9, 8.2, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 2.0, 11.3, 10.2, 8.6, 10.6, 1.8, 4.0, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 19.9, 11.6, 18.0, 16.8, 17.2, 17.5, 9.2, 10.4, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 12.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 19,
    "avg_fp2": 11.63,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.6,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Damien Harris (concussion) is questionable for Week 10 against the Browns.\n",
    "report": "",
    "analysis": "Rhamondre Stevenson (concussion) and Harris were sidelined for every practice ahead of Week 10. It's possible both clear the concussion protocol on Saturday, but managers should already have Brandon Bolden in their sights just in case.\u00a0He's the more interesting option over J.J. Taylor since it's Bolden who has registered a backfield-high 20 targets in place of James White since Week 4.\n",
    "timestamp": "2021-11-12 08:57 PM",
    "source": "Alex Barth on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 12.9, 2.1, 3.8, 9.8, 17.3, 24.3, 14.0, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 13.8, 12.6, 9.5, 10.6, 9.6, 14.0, 14.2, 10.9, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.5, 5.6, 1.8, 4.7, 2.1, 1.9, 7.4, 2.5, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.0, 8.8, 11.0, 13.7, 8.6, 7.6, 12.3, 11.7, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 12.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 10.89,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.62,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (shin) remained limited in practice on Thursday.\n",
    "report": "",
    "analysis": "Antonio Gibson's shin and D'Andre Swift's groin are in a fierce battle to see which injury can last longest on the report but not cost any real games or even remotely threaten Sunday status. At this point, maintenance rest on Gibson's shin injury is the normal and he can be expected to play a normal slate of touches until further notice. \"Normal,\" of course, being relative given the state of the Football Team's game scripts.\u00a0\n",
    "timestamp": "2021-11-11 06:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.3,
    "week02": 8.3,
    "week03": 16.9,
    "week04": 14.5,
    "week05": 20.2,
    "week06": 3.4,
    "week07": 6.6,
    "week08": 6.9,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 8.3, 16.9, 14.5, 20.2, 3.4, 6.6, 6.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 16.3, 8.7, 11.1, 11.6, 16.6, 11.6, 12.9, 'BYE', 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 5.5, 2.8, 5.1, 6.1, 6.7, 10.7, 8.6, 'BYE', 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.6, 20.6, 13.2, 18.1, 19.0, 20.5, 20.1, 13.5, 'BYE', 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4052042.png",
    "name": "James Robinson",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 12.4,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 16,
    "avg_fp2": 14.36,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.18,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Heel",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "James Robinson (heel) is listed as questionable for Week 10 against the Colts.\n",
    "report": "",
    "analysis": "",
    "timestamp": "2021-11-12 08:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.9,
    "week02": 7.9,
    "week03": 22.4,
    "week04": 20.1,
    "week05": 21.2,
    "week06": 17.6,
    "week07": "BYE",
    "week08": 4.4,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.9, 7.9, 22.4, 20.1, 21.2, 17.6, 'BYE', 4.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 10.2, 10.1, 12.0, 13.4, 17.2, 'BYE', 17.1, 'DNP', 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.9, 9.2, 9.6, 11.3, 16.5, 15.0, 'BYE', 12.8, 'DNP', 14.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.7, 25.4, 16.9, 21.9, 28.3, 22.0, 'BYE', 25.2, 'DNP', 26.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240657.png",
    "name": "Michael Carter",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 11.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 30,
    "avg_fp2": 12.72,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.01,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Michael Carter rushed 13 times for 49 yards in the Jets' Week 9 loss to the Colts, adding a 37-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Carter drew only two passing-game targets four days after he paced the Jets with 14. That probably had something to do with fill-in QB Mike White (forearm) lasting just two drives before giving way to Josh Johnson. Johnson played well but evidently doesn't have the same chemistry with his running back. Carter out-touched No. 2 Ty Johnson 14-6, though Johnson found the end on a 22-yard reception. This backfield is still big enough for the two of them with Tevin Coleman fading away, as usual. The elite Bills are on tap for Week 10, but that isn't necessarily a bad thing for Carter, who can hopefully make receiving hay in negative game script. It will probably be White or Zach Wilson under center. Carter will be in the low-end RB2 mix for that one.\u00a0\n",
    "timestamp": "2021-11-05 04:13 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.9,
    "week04": 9.9,
    "week05": 13.3,
    "week06": "BYE",
    "week07": 12.4,
    "week08": 27.7,
    "week09": 9.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.9, 9.9, 13.3, 'BYE', 12.4, 27.7, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.0, 9.1, 9.7, 'BYE', 10.0, 13.5, 11.3, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 2.7, 4.6, 4.2, 'BYE', 4.3, 6.0, 5.4, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 11.4, 14.7, 17.1, 'BYE', 15.7, 18.6, 15.9, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 11.4,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 15,
    "avg_fp2": 9.11,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.49,
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
    "headlineNews": "Chiefs coach Andy Reid said it is \"probably a stretch\" for Clyde Edwards-Helaire (knee, IR) to return for Week 10 against the Raiders.\n",
    "report": "",
    "analysis": "When asked if CEH would return Sunday night, Reid transparently responded that Edwards-Helaire \"worked all week\" but \"it's probably a stretch.\" Darrel Williams has averaged 18.2 touches in his last four games sans the first-rounder and will continue being used as a workhorse RB2 ahead of Derrick Gore for as long as CEH remains sidelined.\n",
    "timestamp": "2021-11-12 07:17 PM",
    "source": "Nate Taylor on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 0.4,
    "week02": 5.8,
    "week03": 4.9,
    "week04": 12.8,
    "week05": 6.0,
    "week06": 22.4,
    "week07": 6.5,
    "week08": 14.0,
    "week09": 9.2,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.8, 4.9, 12.8, 6.0, 22.4, 6.5, 14.0, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2, 11.8, 12.1, 12.5, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2, 10.3, 1.0, 9.1, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3, 17.2, 8.5, 13.2, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 10.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 6.73,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.77,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Devonta Freeman rushed 10 times for 35 yards in the Ravens' Week 10 loss to the Dolphins, adding three receptions for 23 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Freeman out-touched Le'Veon Bell 13-3, but it didn't amount to much on an evening where neither the Ravens' running game nor pass catchers could sustain drives. There was also a carry or two where 29-year-old Freeman vividly failed to get the edge. Freeman is running on fumes, but most weeks should be better in this usually-lethal offense. That being said, Freeman's workload cannot be taken for granted if Latavius Murray (ankle) returns for Week 10 against the Bears.\u00a0\n",
    "timestamp": "2021-11-12 05:39 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": 2.9,
    "week03": 0.8,
    "week04": "DNP",
    "week05": 5.0,
    "week06": 11.3,
    "week07": 11.4,
    "week08": "BYE",
    "week09": 15.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 2.9, 0.8, 'DNP', 5.0, 11.3, 11.4, 'BYE', 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.7, 2.4, 'DNP', 3.1, 3.5, 2.9, 'BYE', 9.9, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 3.7, 'DNP', 3.2, 2.5, 2.5, 'BYE', 2.9, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 23.1, 19.8, 'DNP', 9.3, 9.9, 10.6, 'BYE', 7.4, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15807.png",
    "name": "Cordarrelle Patterson",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 10.2,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 18.14,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.11,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Cordarrelle Patterson caught 6-of-6 targets for 126 yards in the Falcons' Week 9 win over the Saints, adding nine rushes for 10 additional yards.\u00a0\n",
    "report": "",
    "analysis": "With the Falcons staring down the barrel of another one of their storied hysterical chokes, Patterson came to the rescue with a 64-yard reception down the right sideline with the Falcons trailing 25-24 with 1:01 remaining. Clearly underestimated by CB\u00a0Paulson Adebo \u2014 he must not play much fantasy football \u2014 C-Patt simply ran by the third-round rookie. In addition to setting up the game-winning field goal, C-Patt's grab gave him his most receiving yards in a game since 2013, and his most yards from scrimmage of 2021. He has been the platonic ideal of a position-less \"offensive weapon\" this season. He will remain in the low-end RB1 mix for Week 10 vs. Dallas.\u00a0\u00a0\n",
    "timestamp": "2021-11-07 10:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 13.2,
    "week04": 32.1,
    "week05": 14.9,
    "week06": "BYE",
    "week07": 13.1,
    "week08": 15.7,
    "week09": 16.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 13.2, 32.1, 14.9, 'BYE', 13.1, 15.7, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.0, 10.1, 11.8, 'BYE', 10.8, 9.7, 8.9, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 5.9, 3.2, 5.1, 'BYE', 6.6, 2.7, 11.3, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 21.1, 14.5, 19.6, 'BYE', 20.3, 13.3, 26.4, 25.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 9.8,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 4,
    "avg_fp2": 9.1,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.85,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Adrian Peterson rushed 10 times for 21 yards and a touchdown in the Titans' Week 9 win over the Rams.\n",
    "report": "",
    "analysis": "Peterson led the Titans in carries, but he was unable to get much going against a stingy Rams front. Still, it's encouraging that he walked into Tennessee less than a week after being signed and led the team in carries. He'll be a touchdown-dependent flex option with a one-dimensional workload moving forward. Leave him on the bench in Week 10 against the Saints.\n",
    "timestamp": "2021-11-08 05:22 AM",
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
    "week09": 9.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.4, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.6, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.8, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3025433.png",
    "name": "Mike Davis",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 9.5,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 7.58,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.11,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Mike Davis rushed nine times for 13 yards in the Falcons' Week 9 win over the Saints, adding a five-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Davis also put the ball on the ground in the dying moments of the game with the Falcons trying to set up a game-winning field goal attempt. It was extremely sloppy ball security. Mercifully, Atlanta recovered. Davis and Cordarrelle Patterson were equally ineffective on the ground, but C-Patt blew Davis away through the air, going 6/126 on only six targets. Even with Calvin Ridley sidelined and the Falcons' skill corps depleted, neither Davis' role nor workload are making for any sort of fantasy upside. You can do better for Week 10 against the Cowboys.\u00a0\n",
    "timestamp": "2021-11-08 01:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.7,
    "week02": 9.8,
    "week03": 9.0,
    "week04": 9.6,
    "week05": 11.1,
    "week06": "BYE",
    "week07": 1.0,
    "week08": 9.1,
    "week09": 2.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 9.8, 9.0, 9.6, 11.1, 'BYE', 1.0, 9.1, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 10.2, 12.7, 11.8, 14.3, 'BYE', 12.4, 11.0, 10.4, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.0, 2.5, 4.6, 4.8, 'BYE', 8.8, 8.1, 5.1, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 11.4, 6.7, 11.0, 8.9, 'BYE', 13.7, 10.2, 7.9, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 8.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 7.53,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 34.69,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 16.1, 3.1, 9.1, 2.8, 6.8, 'BYE', 3.4, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.1, 14.3, 9.9, 9.8, 7.8, 'BYE', 9.0, 8.8, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 11.5, 7.4, 5.0, 9.7, 'BYE', 5.1, 7.5, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.9, 16.6, 13.7, 9.0, 15.7, 'BYE', 9.8, 11.7, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139602.png",
    "name": "D'Ernest Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 8.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 4.12,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 21.21,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nick Chubb\u00a0(COVID-19) is out for Week 10 against the Patriots.\n",
    "report": "",
    "analysis": "D'Ernest Johnson will start for the Browns Sunday and could handle every snap, literally. It's unclear at this point who will even be backup Johnson up, with Demetric Felton and John Kelly also out with Covid this week. Johnson is a clear-cut RB1, facing a run funnel Patriots defense, and whether to play Johnson now looks key decision point of the DFS main slate. Chubb is vaccinated and therefore, likely to be active for Week 11. He will be an elite RB1 play in his expected return, facing the lowly Lions.\u00a0\n",
    "timestamp": "2021-11-12 07:56 PM",
    "source": "Nate Ulrich on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 1.4,
    "week07": 23.8,
    "week08": 9.4,
    "week09": 1.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 1.4, 23.8, 9.4, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 3.3, 'DNP', 'DNP', 'DNP', 2.9, 6.9, 4.8, 5.0, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 5.1, 'DNP', 'DNP', 'DNP', 2.9, 1.4, 3.0, 5.8, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Backup: RB-2",
    "team": "Las Vegas Raiders",
    "projected": 7.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 27,
    "avg_fp2": 9.34,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.29,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Kenyan Drake rushed four times for 30 yards in the Raiders' Week 9 loss to the Giants, adding six catches for 70 yards.\n",
    "report": "",
    "analysis": "Josh Jacobs caught four balls but Kenyan Drake was still the team's first choice on the two-minute drill and obvious passing downs. His 100 yards from scrimmage today were the most he's achieved as a Raider. Las Vegas should be underdogs versus the Chiefs next week which will give Drake a shot at another eight-target game. He can be played as an RB3/4 in PPR leagues.\u00a0\n",
    "timestamp": "2021-11-07 11:54 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 9.5,
    "week02": 8.0,
    "week03": 7.2,
    "week04": 0.2,
    "week05": 1.1,
    "week06": 20.3,
    "week07": 15.4,
    "week08": "BYE",
    "week09": 13.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 8.0, 7.2, 0.2, 1.1, 20.3, 15.4, 'BYE', 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 10.1, 14.2, 10.8, 8.2, 5.3, 6.8, 'BYE', 6.2, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.0, 19.1, 14.8, 7.7, 5.7, 12.6, 'BYE', 10.1, 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 22.8, 24.2, 19.9, 13.3, 9.1, 19.3, 'BYE', 16.1, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 7.8,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 3,
    "avg_fp2": 8.7,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.21,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Tony Pollard rushed four times for 11 yards and caught 1-of-2 targets for 32 yards in the Cowboys' Week 9 loss to the Broncos.\n",
    "report": "",
    "analysis": "With the Cowboys getting obliterated 30-0 on the scoreboard in the second half, Pollard only handled five touches to Ezekiel Elliott's 13. They were never allowed to establish anything on the ground with the offense failing time and again to move the chains. Pollard will be a FLEX option next week at home against the Falcons in a bounce-back spot for Dallas.\n",
    "timestamp": "2021-11-07 10:09 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.3, 21.5, 7.0, 6.7, 12.3, 7.8, 'BYE', 3.2, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 5.9, 7.9, 6.1, 9.2, 7.6, 'BYE', 8.3, 7.8, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.0, 0.0, 0.5, 0.1, 'BYE', 5.2, 2.1, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.5, 11.4, 13.0, 6.1, 8.9, 6.6, 'BYE', 12.1, 10.4, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122976.png",
    "name": "Jeff Wilson",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 7.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 14,
    "avg_fp2": 12.37,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.23,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "JaMycal Hasty (ankle) did not participate in Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "49ers coach Kyle Shanahan told reporters that he does not expect Hasty to play on Monday night. That would pencil in Jeff Wilson as the third-down back behind Eli Mitchell assuming the health of each holds up for a couple of more practices. Hasty has not returned much fantasy value as the third-down back thus far and Wilson probably won't either unless he breaks a couple of tackles in a row against the Rams.\u00a0\n",
    "timestamp": "2021-11-11 09:57 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 7.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 5,
    "avg_fp2": 6.64,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 21.01,
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
    "headlineNews": "Nyheim Hines rushed six times for 74 yards and a touchdown in the Colts' Week 9 win over the Jets, adding four receptions for 34 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Hines' 108 yards from scrimmage were by far his most of the season, bettering his Week 1 total of 82 by 26. His 10 touches were his most since Week 3, and came as No. 3 running back Marlon Mack was a surprising healthy scratch. The Colts went with only two runners this evening. Hines' score was a 34-yard reception where he took advantage of jaw-dropping push from the Colts' offensive line to get upfield before bouncing outside and finding the edge. Hines also got an extra touch or two after Jonathan Taylor missed a few plays with a knee issue. Hines has a plus Week 10 matchup in the Jaguars before a foreboding Week 11 date with the Bills.\u00a0\n",
    "timestamp": "2021-11-05 04:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.2,
    "week02": 2.7,
    "week03": 16.4,
    "week04": 0.1,
    "week05": 1.8,
    "week06": 2.7,
    "week07": 1.7,
    "week08": 4.4,
    "week09": 18.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 2.7, 16.4, 0.1, 1.8, 2.7, 1.7, 4.4, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 10.2, 6.7, 8.9, 6.8, 6.9, 5.6, 5.6, 7.7, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 4.7, 14.0, 6.2, 7.2, 4.0, 9.9, 5.7, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.3, 13.2, 16.7, 11.6, 11.5, 9.2, 14.2, 11.8, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361579.png",
    "name": "Javonte Williams",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 7.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 13,
    "avg_fp2": 9.01,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.28,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 4.6,
    "week02": 7.9,
    "week03": 11.7,
    "week04": 7.4,
    "week05": 10.1,
    "week06": 8.3,
    "week07": 14.2,
    "week08": 5.8,
    "week09": 11.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 7.9, 11.7, 7.4, 10.1, 8.3, 14.2, 5.8, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 5.7, 7.0, 7.2, 5.5, 7.5, 5.8, 8.4, 6.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 2.9, 1.5, 1.1, 7.6, 7.8, 5.4, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 10.0, 12.8, 15.1, 11.0, 10.5, 10.8, 12.7, 12.1, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051439.png",
    "name": "Boston Scott",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 6.9,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 6,
    "avg_fp2": 3.66,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.17,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "NBC Sports' Rueben Frank said Eagles head coach Nick Sirianni \"has to make [Jordan] Howard a permanent part of the offense even after Miles Sanders gets back.\"\n",
    "report": "",
    "analysis": "Toiling on the Philadelphia practice squad just a few weeks ago, Howard is now the Eagles' de facto lead back after seeing 17 carries to Boston Scott's ten attempts in Week 9 against the Chargers. Howard has now rushed 29 times for 128 yards and three touchdowns over two games in his early-down banger role. Philadelphia's newfound commitment to establishing the run is a major boon for Howard's fantasy usefulness, and his showing over the past two weeks could further muddy the Eagles' backfield when Miles Sanders returns from his ankle injury. Howard should be added in all leagues this week and will shape up as a low-end RB2 in Week 10 against Denver.\u00a0\n",
    "timestamp": "2021-11-08 01:20 PM",
    "source": "NBCSports.com ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 1.5,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 9.4,
    "week08": 18.0,
    "week09": 4.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 1.5, 0.0, 0.0, 0.0, 9.4, 18.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 3.0, 1.6, 2.8, 1.2, 2.4, 1.4, 3.8, 10.1, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 16.7, 1.0, 17.4, 0.5, 0.9, 10.6, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 23.3, 1.7, 30.6, 3.6, 19.5, 2.3, 7.8, 17.9, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.7,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 6,
    "avg_fp2": 15.4,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.17,
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
    "headlineNews": "NBC Sports' Rueben Frank said Eagles head coach Nick Sirianni \"has to make [Jordan] Howard a permanent part of the offense even after Miles Sanders gets back.\"\n",
    "report": "",
    "analysis": "Toiling on the Philadelphia practice squad just a few weeks ago, Howard is now the Eagles' de facto lead back after seeing 17 carries to Boston Scott's ten attempts in Week 9 against the Chargers. Howard has now rushed 29 times for 128 yards and three touchdowns over two games in his early-down banger role. Philadelphia's newfound commitment to establishing the run is a major boon for Howard's fantasy usefulness, and his showing over the past two weeks could further muddy the Eagles' backfield when Miles Sanders returns from his ankle injury. Howard should be added in all leagues this week and will shape up as a low-end RB2 in Week 10 against Denver.\u00a0\n",
    "timestamp": "2021-11-08 01:20 PM",
    "source": "NBCSports.com ",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.7, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.6, 6.2, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 11.8, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.4, 19.1, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 6.7,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 20,
    "avg_fp2": 5.01,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 22.59,
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
    "headlineNews": "Sony Michel rushed seven times for 20 yards, adding two catches for six yards in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "As usual, Michel filled in behind Darrell Henderson as the Rams' RB2. The split has been more even in recent weeks, but Henderson still has a clear advantage. Consider Michel a valuable insurance policy with little standalone value for Week 10 and as long as Henderson remains healthy.\n",
    "timestamp": "2021-11-08 05:01 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.2,
    "week02": 4.6,
    "week03": 9.4,
    "week04": -0.9,
    "week05": 11.0,
    "week06": 4.2,
    "week07": 0.4,
    "week08": 6.6,
    "week09": 9.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2, 0.4, 6.6, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5, 5.8, 5.0, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8, 3.7, 4.2, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4, 12.8, 9.8, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239934.png",
    "name": "A.J. Dillon",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 6.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 6.66,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 26.16,
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
    "headlineNews": "AJ Dillon had eight rushes for 46 yards in the Packers' Week 9 loss to the Chiefs, adding four receptions for 44 yards.\u00a0\n",
    "report": "",
    "analysis": "It's the four catches on four targets that should prove concerning for Aaron Jones drafters. Coming into Week 9, Jones' 15 percent target share dwarfed Dillon's 5 percent share. Whether their usage against Kansas City -- with Aaron Rodgers (COVID) sidelined -- is a blip or the start of a trend remains to be seen, but is well worth monitoring. Dillon shined with a 21-yard catch and a 15-yard rush in an otherwise stagnant Green Bay offense. He has every chance to emerge as a low-end RB2 play while severely capping Jones' weekly upside. Dillon is certainly in play as a flex option next week against the run-funnel Vegas defense.\u00a0\n",
    "timestamp": "2021-11-08 01:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.1,
    "week03": 3.6,
    "week04": 10.2,
    "week05": 15.9,
    "week06": 5.9,
    "week07": -0.7,
    "week08": 7.8,
    "week09": 11.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.1, 3.6, 10.2, 15.9, 5.9, -0.7, 7.8, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 4.4, 6.2, 4.9, 3.9, 5.4, 6.1, 4.5, 6.9, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.0, 22.1, 0.3, 3.7, 7.5, 14.9, 0.4, 1.9, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.0, 2.6, 28.0, 5.4, 8.1, 13.4, 30.2, 5.5, 10.5, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048244.png",
    "name": "Alexander Mattison",
    "depthchart": "Backup: RB-2",
    "team": "Minnesota Vikings",
    "projected": 6.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 9,
    "avg_fp2": 6.51,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.27,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Alexander Mattison rushed three times for 10 yards in Minnesota's Week 6 overtime win against the Panthers.\n",
    "report": "",
    "analysis": "Only one week after replacing Dalvin Cook for 32 touches and 153 yards, Mattison returned to his usual backup role with three carries all game. A league-winning contingency piece for fantasy if Cook goes down again, Mattison should simply be stashed in both 10- and 12-team leagues. He's unplayable for as along as Cook is healthy.\n",
    "timestamp": "2021-10-17 11:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.1,
    "week02": 3.3,
    "week03": 20.1,
    "week04": 2.0,
    "week05": 22.8,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 1.0,
    "week09": 0.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.3, 20.1, 2.0, 22.8, 1.0, 'BYE', 1.0, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 3.0, 7.4, 3.7, 10.0, 4.7, 'BYE', 5.9, 6.9, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 0.1, 15.6, 0.0, 1.8, 0.0, 'BYE', 3.5, 1.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 8.3, 23.0, 4.0, 6.3, 3.5, 'BYE', 5.0, 4.1, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046409.png",
    "name": "Alex Collins",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 6.5,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 7.41,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.61,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Alex Collins rushed 10 times for 44 yards in the Seahawks' Week 8 win over the Jaguars.\n",
    "report": "",
    "analysis": "The game was a slow-paced mess that saw the Seahawks run just 59 plays despite wrecking the Jaguars. Geno Smith plundered a short-yardage touchdown from Collins one play after he was stuffed at the goal line and the rest of the touchdowns came through the air. With Collins seeing zero targets, the stolen touchdown was enough to end any hopes of him having a successful fantasy outing. Rashaad Penny earned seven carries, six of which came in the first three quarters. Collins remains the team's lead back but Penny appears to have earned a split of the rushing volume. If that continues beyond Seattle's Week 9 bye, Collins will drop into the RB3 range.\n",
    "timestamp": "2021-11-01 02:01 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.8,
    "week04": 14.8,
    "week05": 8.2,
    "week06": 16.3,
    "week07": 4.9,
    "week08": 4.4,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.8, 14.8, 8.2, 16.3, 4.9, 4.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.0, 4.0, 8.4, 6.7, 11.6, 12.2, 'BYE', 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.7, 4.6, 9.3, 7.7, 13.0, 9.7, 'BYE', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.4, 6.9, 13.0, 12.0, 16.2, 15.6, 'BYE', 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.2,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 23,
    "avg_fp2": 6.29,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.35,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Giovani Bernard rushed two times for 30 yards in Tampa's Week 8 loss to New Orleans, adding a seven-yard touchdown catch on his only target.\n",
    "report": "",
    "analysis": "Bernard's 24-yard run was of the surprise two-minute drill variety. He caught his touchdown on an empty set. Week 9 is Tampa's bye and Bernard isn't a fantasy commodity at his current workload, though he might develop some more intrigue if Rob Gronkowski and Antonio Brown can't come back from the bye healthy.\u00a0\n",
    "timestamp": "2021-11-01 12:29 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 2.6,
    "week03": 15.6,
    "week04": "DNP",
    "week05": 10.5,
    "week06": 1.4,
    "week07": 1.5,
    "week08": 10.2,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 2.6, 15.6, 'DNP', 10.5, 1.4, 1.5, 10.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 2.8, 2.4, 'DNP', 5.1, 6.6, 3.8, 3.4, 'BYE', 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 3.5, 6.3, 'DNP', 12.4, 8.4, 5.4, 6.4, 'BYE', 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.5, 10.6, 'DNP', 20.9, 15.9, 11.7, 10.6, 'BYE', 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "JD McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 5.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 12,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.62,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "J.D. McKissic rushed three times for 10 yards, catching all eight of his targets for 83 yards in Washington's Week 8 loss to Denver.\n",
    "report": "",
    "analysis": "While Jaret Patterson surprisingly mixed in for a team-high 11 carries and a handful of Antonio Gibson's early-down snaps, McKissic's role held strong with 8-of-12 backfield targets and a double-digit target share (20.5%) for the fifth consecutive game. McKissic has also seen at least four targets in five consecutive outings. A strong PPR RB2 to this point given Washington's plethora of injuries among their skill players, McKissic's usage will be worth monitoring if the team returns from their Week 9 bye at full health. He'll still be a strong game-specific option for PPR leagues in Week 10 against Tampa Bay.\n",
    "timestamp": "2021-11-01 03:58 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 5.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 5.15,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.77,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Le'Veon Bell rushed three times for one yard in the Ravens' Week 10 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Bell was not targeted in the passing game. Egads. Bell has not put pressure on Devonta Freeman during Latavius Murray's (ankle) absence, and now Murray seems likely to return for Week 11 against the Bears. Bell can return to waiver wires in 12-team leagues.\u00a0\n",
    "timestamp": "2021-11-12 05:47 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 1.1,
    "week05": "DNP",
    "week06": 7.8,
    "week07": 0.9,
    "week08": "BYE",
    "week09": 10.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 1.1, 'DNP', 7.8, 0.9, 'BYE', 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.9, 'DNP', 4.6, 5.0, 'BYE', 6.4, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.5, 'DNP', 5.8, 3.5, 'BYE', 5.3, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 11.8, 'DNP', 8.7, 9.4, 'BYE', 12.0, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116136.png",
    "name": "Justin Jackson",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 5.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.74,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Justin Jackson (quad) has yet to resume practicing.\u00a0\n",
    "report": "",
    "analysis": "Jackson hasn't taken a single rep since first popping up with his quad issue last Wednesday. In his Week 9 absence, Joshua Kelley and Larry Rountree mixed in for five ineffective touches behind Austin Ekeler. The Bolts are one Ekeler muscle pull away from having far and away the worst backfield in the NFL.\u00a0\n",
    "timestamp": "2021-11-11 11:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 3.4,
    "week03": 0.0,
    "week04": 3.3,
    "week05": "DNP",
    "week06": 1.2,
    "week07": "BYE",
    "week08": 7.9,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.4, 0.0, 3.3, 'DNP', 1.2, 'BYE', 7.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.7, 7.6, 1.6, 'DNP', 3.9, 'BYE', 2.6, 'DNP', 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 2.2, 4.7, 4.4, 'DNP', 1.8, 'BYE', 1.1, 'DNP', 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.6, 6.7, 6.2, 'DNP', 5.9, 'BYE', 4.1, 'DNP', 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915411.png",
    "name": "Ty Johnson",
    "depthchart": "Backup: RB-2",
    "team": "New York Jets",
    "projected": 5.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 30,
    "avg_fp2": 7.74,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.01,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Ty Johnson caught 2-of-3 targets for 40 yards and a touchdown in the Jets' Week 9 loss to the Colts, adding four carries for 21 additional yards.\n",
    "report": "",
    "analysis": "Johnson also lost a fumble that was punched out in comically violent fashion by Colts All-Pro Darius Leonard. There wasn't much the running back could do about Leonard's ludicrous strength. Johnson's 22-yard touchdown came later. He showed ridiculous balance as he was tripped up on his way to the end zone. Johnson got out-touched 14-6 by Michael Carter, but he continues to see just enough touches to put himself on the desperation PPR FLEX map. The Bills are going to create tons of garbage time and running back target opportunities in Week 10.\u00a0\n",
    "timestamp": "2021-11-05 04:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 5.0,
    "week03": 2.8,
    "week04": 2.3,
    "week05": 10.4,
    "week06": "BYE",
    "week07": 10.1,
    "week08": 17.1,
    "week09": 11.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 5.0, 2.8, 2.3, 10.4, 'BYE', 10.1, 17.1, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 4.9, 2.0, 4.9, 3.8, 'BYE', 4.9, 4.8, 5.4, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.3, 4.2, 0.5, 2.1, 'BYE', 0.7, 2.8, 0.0, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 8.5, 7.8, 2.8, 4.7, 'BYE', 6.7, 10.9, 8.2, 10.6]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 17.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 3,
    "avg_fp2": 22.04,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.19,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp caught 11-of-13 targets for 95 yards in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "Kupp didn't find the end zone, but he was still super productive on a night in which Matthew Stafford struggled to get anything going. The Rams averaged only 6.1 yards per passing attempt for the game. Kupp still had a 27.1% target share, and he remains a top-flight WR1 for Week 10 against the 49ers. He has yet to record fewer than nine targets in a single game.\n",
    "timestamp": "2021-11-08 07:44 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 20.3,
    "week02": 32.3,
    "week03": 26.1,
    "week04": 8.9,
    "week05": 12.7,
    "week06": 29.5,
    "week07": 32.6,
    "week08": 21.0,
    "week09": 15.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4, 17.7, 21.1, 17.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2, 23.2, 16.5, 18.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6, 27.3, 21.2, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 15.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 13.51,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.02,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael Pittman caught 5-of-6 targets for 64 yards and a touchdown in the Colts' Week 9 win over the Jets.\u00a0\n",
    "report": "",
    "analysis": "Pittman's touchdown was his third in five days and fourth in three weeks. Pittman's 11-yard end zone grab was initially ruled an incomplete pass after Jets S Marcus Maye knocked the ball away, but further review revealed that Pittman had indeed #CompletedTheProcess. The six looks were a disappointment after Pittman drew 15 in Week 8, but frankly a good outcome as the Colts steamrolled the Jets for 260 yards on the ground. Pittman is running hot right now and has a golden opportunity to keep it up in Week 10 against the laughable Jaguars.\u00a0\n",
    "timestamp": "2021-11-05 04:20 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 16.3,
    "week03": 10.3,
    "week04": 8.9,
    "week05": 17.9,
    "week06": 4.8,
    "week07": 18.5,
    "week08": 25.6,
    "week09": 14.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 16.3, 10.3, 8.9, 17.9, 4.8, 18.5, 25.6, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 9.1, 13.5, 14.5, 6.6, 13.5, 9.3, 13.2, 15.6, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 0.6, 6.9, 7.2, 7.3, 4.4, 7.3, 7.1, 6.6, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 4.2, 14.0, 12.7, 10.8, 14.6, 12.1, 15.3, 14.7, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 15.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 6,
    "avg_fp2": 16.79,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 22.24,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill caught 4-of-11 targets for 37 yards in the Chiefs' Week 9 win against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Kansas City's offense has been reduced to Patrick Mahomes chucking it downfield to a double-covered Hill a half dozen times a game and otherwise hitting the speedster on short passes, hoping he breaks off a long run. Hill's game-sealing 13-yard reception -- ordinary in every way -- was the highlight of the Chiefs' day. On pace for 191 targets from Mahomes, Hill presumably has as much upside as any wideout in the league. The team's pass game struggles cast some doubt on whether that kind of volume can send Hill stratospheric. He'll be a no-doubt WR1 option in Week 10 against Vegas.\u00a0\n",
    "timestamp": "2021-11-08 01:46 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 31.6,
    "week02": 4.4,
    "week03": 7.2,
    "week04": 42.1,
    "week05": 11.3,
    "week06": 18.1,
    "week07": 9.7,
    "week08": 21.4,
    "week09": 5.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.6, 4.4, 7.2, 42.1, 11.3, 18.1, 9.7, 21.4, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5, 23.4, 15.6, 16.1, 15.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2, 14.5, 9.6, 10.6, 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7, 24.4, 22.7, 18.6, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 1,
    "avg_fp2": 15.24,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 35.36,
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
    "headlineNews": "Bucs head coach Bruce Arians said Chris\u00a0Godwin (foot) will be a game time decision in Week 10 against the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Tyler Johnson could see significant snaps as Tom Brady's primary slot receiver if Godwin joins Antonio Brown (ankle) on the sideline this week. Johnson would have intriguing PPR value. Mike Evans would certainly see a target bump with Godwin inactive. Scotty Millers is back from injured reserve and should see decent run against a shoddy Washington secondary if Godwin is held out.\u00a0\n",
    "timestamp": "2021-11-12 04:18 PM",
    "source": "Rick Stroud on Twitter ",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 22.0, 14.6, 11.0, 26.3, 3.7, 28.6, 11.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 9.9, 10.2, 17.8, 10.8, 11.2, 13.1, 12.4, 'BYE', 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.2, 5.9, 8.7, 9.2, 6.8, 6.2, 7.4, 'BYE', 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 21.9, 15.5, 19.3, 20.8, 14.1, 22.6, 26.9, 'BYE', 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 14.6,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 7,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.44,
    "fanduelSalary": "$7900",
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
    "week01": 11.4,
    "week02": 14.0,
    "week03": 9.2,
    "week04": 14.9,
    "week05": 7.9,
    "week06": 19.4,
    "week07": "BYE",
    "week08": 12.5,
    "week09": 11.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 14.0, 9.2, 14.9, 7.9, 19.4, 'BYE', 12.5, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.4, 15.2, 10.8, 12.2, 13.8, 'BYE', 14.0, 20.5, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.4, 6.4, 10.2, 7.8, 15.0, 'BYE', 14.7, 13.7, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 20.2, 14.7, 18.3, 17.6, 18.7, 'BYE', 21.2, 23.2, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 13.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 12.56,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.3,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Keenan Allen (knee) is questionable for Week 10 against the Vikings.\n",
    "report": "",
    "analysis": "Allen was limited for both Thursday's and Friday's practices and is fully expected to play. He's viewed as a low-end WR1 in a potential shootout against Minnesota's injury-riddled defense.\n",
    "timestamp": "2021-11-12 09:09 PM",
    "source": "Daniel Popper on Twitter",
    "game_day_logo": "",
    "week01": 14.5,
    "week02": 12.8,
    "week03": 15.0,
    "week04": 7.1,
    "week05": 10.5,
    "week06": 7.5,
    "week07": "BYE",
    "week08": 16.7,
    "week09": 16.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.5, 12.8, 15.0, 7.1, 10.5, 7.5, 'BYE', 16.7, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 12.2, 14.5, 11.4, 6.1, 10.2, 'BYE', 10.2, 9.0, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.2, 15.4, 7.2, 10.1, 9.9, 'BYE', 9.2, 6.2, 12.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 26.3, 21.2, 16.7, 13.5, 16.6, 'BYE', 14.6, 11.1, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 12.8,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 4,
    "avg_fp2": 12.9,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.44,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Amari Cooper (hamstring) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "It's the same issue that limited Cooper in practice last week. It's not going to keep him out of the lineup this week against the Falcons.\n",
    "timestamp": "2021-11-10 09:23 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [32.4, 3.9, 4.1, 14.4, 13.5, 8.0, 'BYE', 22.2, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 17.3, 10.4, 12.0, 9.3, 10.2, 'BYE', 9.4, 7.9, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 2.2, 0.2, 0.6, 1.9, 16.0, 'BYE', 10.0, 8.1, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 20.2, 5.4, 11.4, 13.1, 24.7, 'BYE', 15.6, 19.8, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 12.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 13.51,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.97,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals coach Kliff Kingsbury said DeAndre Hopkins (hamstring) is a game-time decision for Week 10 against the Panthers.\n",
    "report": "",
    "analysis": "Arizona's offense is an impossible one to sort out since Kyler Murray (ankle), Rondale Moore (neck, concussion), and Hopkins are all questionable and considered gameday calls. With A.J. Green activated from the team's COVID list, he and Christian Kirk are destined to lead the team in routes run no matter how the statuses around them shake out. James Conner remains the strongest play on the team whether Murray is under center or not.\n",
    "timestamp": "2021-11-12 08:50 PM",
    "source": "Darren Urban on Twitter",
    "game_day_logo": "",
    "week01": 23.3,
    "week02": 13.4,
    "week03": 3.6,
    "week04": 8.7,
    "week05": 17.7,
    "week06": 19.0,
    "week07": 14.8,
    "week08": 7.6,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 13.4, 3.6, 8.7, 17.7, 19.0, 14.8, 7.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 16.9, 19.7, 14.4, 11.1, 7.2, 7.0, 16.5, 'DNP', 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 11.7, 6.1, 8.0, 9.0, 7.6, 11.6, 'DNP', 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.7, 19.8, 11.1, 15.4, 14.8, 13.0, 19.8, 'DNP', 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 12.8,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 11.68,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.83,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "A.J. Brown (knee) was upgraded to a full practice participant on Thursday.\n",
    "report": "",
    "analysis": "That's very encouraging as the knee was a new addition to the injury report last Friday. Brown should at worst exit Friday on the optimistic side of questionable. With Julio Jones (hamstring) a surprise addition to the injury report, Brown should continue to draw a monster share of the targets.\u00a0\n",
    "timestamp": "2021-11-11 09:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.9,
    "week02": 5.8,
    "week03": 0.3,
    "week04": "DNP",
    "week05": 5.3,
    "week06": 12.6,
    "week07": 23.3,
    "week08": 26.5,
    "week09": 6.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 5.8, 0.3, 'DNP', 5.3, 12.6, 23.3, 26.5, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 8.2, 9.9, 'DNP', 10.8, 7.7, 7.9, 13.0, 11.9, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 0.0, 20.6, 'DNP', 8.2, 0.0, 3.9, 9.3, 7.8, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 21.9, 29.1, 'DNP', 19.4, 9.4, 14.0, 26.0, 17.9, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 1,
    "avg_fp2": 14.9,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 35.36,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown (ankle) is out for Week 10.\u00a0\n",
    "report": "",
    "analysis": "Brown never had a shot to play this week. Tyler Johnson is expected to sub in as the Bucs' primary slot receiver if Chris Godwin (foot) is sidelined. Godwin is considered a game-time decision against Washington. Johnson would be an interesting WR3 option if Godwin doesn't go.\u00a0\n",
    "timestamp": "2021-11-12 05:32 PM",
    "source": "Greg Auman on Twitter ",
    "game_day_logo": "",
    "week01": 19.0,
    "week02": 14.2,
    "week03": 16.6,
    "week04": 7.0,
    "week05": 10.5,
    "week06": 6.8,
    "week07": 21.1,
    "week08": 24.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.0, 14.2, 16.6, 7.0, 10.5, 6.8, 21.1, 24.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 7.7, 10.7, 9.0, 5.4, 5.4, 8.5, 8.6, 'BYE', 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.3, 12.2, 12.1, 9.3, 7.9, 5.6, 7.9, 'BYE', 13.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 18.5, 16.7, 15.1, 17.5, 16.2, 13.3, 15.9, 'BYE', 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 12.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.24,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin caught 3-of-7 targets for 23 yards in Washington's Week 8 loss to Denver.\n",
    "report": "",
    "analysis": "McLaurin's season-low 23 receiving yards were the product of a lifeless effort from Washington and Taylor Heinicke, who completed 24 passes and dragged the team's offense inside Denver's 30-yard line for 19 plays totaling 17 yards. Sporadically on and off Washington's injury report over the last month, the bye week arrives at the perfect time for McLaurin to heal and return good as new as a fringe WR1 in Week 10 against the Bucs.\n",
    "timestamp": "2021-11-01 03:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.2,
    "week02": 22.2,
    "week03": 8.2,
    "week04": 27.3,
    "week05": 6.6,
    "week06": 4.8,
    "week07": 21.7,
    "week08": 5.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 22.2, 8.2, 27.3, 6.6, 4.8, 21.7, 5.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 14.5, 7.8, 10.2, 16.2, 11.7, 17.8, 10.2, 'BYE', 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 5.3, 5.7, 14.2, 12.8, 12.2, 1.5, 6.6, 'BYE', 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.2, 18.5, 10.4, 17.5, 16.7, 20.2, 11.5, 14.3, 'BYE', 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 12.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 8,
    "avg_fp2": 15.96,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 34.86,
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
    "headlineNews": "Marquise Brown caught 6-of-13 targets for 37 yards in the Ravens' Week 10 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Singled up nearly all evening by an aggressive Dolphins defense, Brown drew his second most targets of the season but posted his second fewest yards. It was just that kind of night for a discombobulated passing attack, one Brown couldn't bail out with any big plays. He came close on what would have been a 40-plus yard grab near the goal line early in the third quarter but could not come down with a well-covered deep ball. Brown's bounty of targets came even as Sammy Watkins was active for the first time since Week 5, and rookie Rashod Bateman continued to look impressive. We wouldn't worry about the Ravens' WR1 as a top-18 fantasy option anymore. The Bears are on tap for Week 11.\u00a0\n",
    "timestamp": "2021-11-12 05:18 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 16.4,
    "week02": 20.3,
    "week03": 6.8,
    "week04": 17.1,
    "week05": 29.0,
    "week06": 5.5,
    "week07": 16.5,
    "week08": "BYE",
    "week09": 16.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.4, 20.3, 6.8, 17.1, 29.0, 5.5, 16.5, 'BYE', 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 8.9, 16.9, 5.8, 12.0, 7.1, 10.9, 'BYE', 14.5, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.6, 2.6, 4.7, 4.2, 4.2, 7.1, 'BYE', 6.7, 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 16.3, 8.2, 9.4, 8.2, 6.2, 12.3, 'BYE', 11.5, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 11.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 15.7,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.91,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Davante Adams caught 6-of-14 targets for 42 yards in the Packers' Week 9 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Adams commanded a whopping 41.2 percent target share from Jordan Love, who forced the ball to Adams again and again in the second half. A few of Adams' targets were nothing but wishful lobs from a flummoxed and overmatched Love. If drawing targets is a skill, Adams has it -- that much is for certain. Adams will be a top-flight fantasy option if Aaron Rodgers (COVID-19) is able to return in Week 10 against a weak Seahawks secondary.\u00a0\n",
    "timestamp": "2021-11-08 02:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 16.1,
    "week03": 25.2,
    "week04": 9.4,
    "week05": 32.1,
    "week06": 10.9,
    "week07": 16.6,
    "week08": "DNP",
    "week09": 7.2,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 16.1, 25.2, 9.4, 32.1, 10.9, 16.6, 'DNP', 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 12.4, 7.0, 10.3, 9.1, 12.9, 21.6, 'DNP', 11.7, 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.7, 12.2, 15.1, 14.7, 18.2, 19.5, 'DNP', 11.6, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.2, 30.0, 17.6, 21.5, 20.9, 25.2, 24.5, 'DNP', 17.3, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 11.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 11,
    "avg_fp2": 13.72,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.29,
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
    "headlineNews": "Speaking Thursday, Vikings OC Klint Kubiak said that Justin Jefferson deserved more targets.\u00a0\n",
    "report": "",
    "analysis": "\"You don't want to come out of games where Justin has those kinds of targets, he's well deserving of getting the ball more ... he helps us win games.\" Kubiak said. Jefferson has just nine targets in the last two games. Jefferson did come up with a score in Week 9, but the Vikings have had problems getting their dangerous playmaker the amount of targets he deserves. This is a possible squeaky wheel narrative heading into Week 10's game against the Chargers.\n",
    "timestamp": "2021-11-11 07:25 PM",
    "source": "Chris Tomasson on Twitter",
    "game_day_logo": "",
    "week01": 10.04,
    "week02": 15.5,
    "week03": 22.3,
    "week04": 17.4,
    "week05": 15.9,
    "week06": 10.0,
    "week07": "BYE",
    "week08": 3.1,
    "week09": 15.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.04, 15.5, 22.3, 17.4, 15.9, 10.0, 'BYE', 3.1, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 12.8, 8.2, 13.8, 9.9, 13.9, 'BYE', 12.0, 7.5, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 7.9, 15.5, 8.6, 9.9, 6.8, 'BYE', 7.1, 5.2, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 20.2, 19.7, 20.1, 20.2, 19.3, 'BYE', 16.5, 20.3, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035170.png",
    "name": "Marquez Callaway",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 10.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 31,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 38.69,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Marquez Callaway caught 3-of-6 targets for 25 yards and a touchdown in the Saints' Week 9 loss to the Falcons.\u00a0\n",
    "report": "",
    "analysis": "Callaway's score was a five-yarder in the back right corner of the end zone midway through the fourth quarter. He slipped behind A.J. Terrell to get wide open. It was nice to see deep threat Callaway draw a legitimate red zone look, though the overall volume obviously remained nothing to call home about. Callaway is going to have to continue to live off big plays, and those will be a possibility in Week 10 vs. Tennessee.\u00a0\n",
    "timestamp": "2021-11-08 01:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 1.8,
    "week03": 12.1,
    "week04": 8.4,
    "week05": 22.5,
    "week06": "BYE",
    "week07": 4.7,
    "week08": 4.5,
    "week09": 10.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 1.8, 12.1, 8.4, 22.5, 'BYE', 4.7, 4.5, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 9.2, 5.0, 5.6, 9.1, 'BYE', 10.4, 7.8, 10.5, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 10.8, 5.0, 8.7, 'BYE', 6.1, 3.1, 0.0, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.2, 4.1, 11.2, 5.9, 9.8, 'BYE', 17.9, 9.3, 7.4, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 10.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 13,
    "avg_fp2": 17.61,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.19,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Deebo Samuel is absent from the 49ers' Week 10 injury report.\u00a0\n",
    "report": "",
    "analysis": "Samuel was touch and go with his calf the past two weeks, but he never missed game action. He avoided setbacks in Week 9 and is now ready to rock for a season-on-the-line Monday evening game for the 49ers against the Rams. Jalen Ramsey isn't shadowing receivers this season, but he will undoubtedly see a heavy dose of Samuel. Even with Ramsey looming, Brandon Aiyuk getting more involved and George Kittle back in action, Samuel remains a WR1.\u00a0\n",
    "timestamp": "2021-11-11 11:58 PM",
    "source": "Nick Wagoner on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 27.4,
    "week02": 13.1,
    "week03": 7.7,
    "week04": 31.7,
    "week05": 14.6,
    "week06": "BYE",
    "week07": 17.5,
    "week08": 20.1,
    "week09": 8.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.4, 13.1, 7.7, 31.7, 14.6, 'BYE', 17.5, 20.1, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 14.5, 12.9, 9.5, 19.4, 'BYE', 19.7, 10.7, 14.4, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.3, 2.4, 9.5, 11.1, 'BYE', 7.4, 8.4, 9.6, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.0, 8.7, 15.9, 17.1, 'BYE', 13.2, 18.0, 19.5, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 9.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 11.9,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.09,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "D.J. Moore caught 3-of-7 targets for 32 yards in the Panthers' Week 9 loss to the Patriots, adding two carries for 14 additional yards.\u00a0\n",
    "report": "",
    "analysis": "The receiving yards were a new season-low for Carolina's would-be superstar wideout, who is simply being killed by Sam Darnold's awful play. There was also a scary moment in the second half where Darnold led Moore directly into a brutal ribs shot. Thankfully Moore was able to shake it off and return without an injury designation. Moore is now averaging 56 yards over his past five contests, a span in which Darnold has accounted for zero touchdowns and a gaggle of turnovers. We aren't sure what Moore is supposed to do when Darnold is doing things like tossing the ball directly to linebackers. The Cardinals' feisty pass defense is on tap for Week 10, rendering Moore a borderline WR2/3 as fantasy managers wait for Carolina to make the switch from Darnold to P.J. Walker.\u00a0\n",
    "timestamp": "2021-11-07 09:53 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258195.png",
    "name": "Donovan Peoples-Jones",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 9.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 7.84,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.94,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Donovan Peoples-Jones (non-injury related) did not practice on Thursday.\n",
    "report": "",
    "analysis": "Peoples-Jones is coming off three-straight 70-yard plus games with three touchdowns over that span, so it would be a big blow to the Browns if this was a prolonged absence. It's hard to say what the issue could be without speculating, but if it persists through Friday's practice, fantasy managers should look into pivot options.\u00a0\n",
    "timestamp": "2021-11-11 07:39 PM",
    "source": "Nate Ulrich on Twitter",
    "game_day_logo": "",
    "week01": 0.9,
    "week02": -0.1,
    "week03": 4.9,
    "week04": 0.0,
    "week05": 9.5,
    "week06": 24.1,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 15.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.9, -0.1, 4.9, 0.0, 9.5, 24.1, 'DNP', 'DNP', 15.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 5.6, 6.5, 4.0, 3.7, 2.3, 'DNP', 'DNP', 7.5, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.9, 0.0, 0.0, 'DNP', 'DNP', 0.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.0, 9.3, 10.3, 9.2, 8.1, 7.8, 'DNP', 'DNP', 5.5, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 9.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 7,
    "avg_fp2": 10.81,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.44,
    "fanduelSalary": "$6300",
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
    "week01": 7.2,
    "week02": 5.8,
    "week03": 23.9,
    "week04": 10.6,
    "week05": 18.9,
    "week06": 11.6,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 8.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 5.8, 23.9, 10.6, 18.9, 11.6, 'BYE', 0.0, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.8, 11.2, 4.8, 7.5, 7.3, 'BYE', 8.6, 10.9, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 3.6, 3.4, 7.9, 15.8, 15.7, 'BYE', 9.8, 9.1, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 17.7, 8.7, 13.9, 22.3, 23.1, 'BYE', 14.6, 16.6, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 9.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 14.25,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.3,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Mike Williams caught 2-of-5 targets for 58 yards in Los Angeles' Week 9 win over the Eagles.\n",
    "report": "",
    "analysis": "Most of Williams' production came on a 49-yard catch over Darius Slay's shadow coverage mid-third quarter. It's still the third game in a row that Williams registered two receptions and fewer than 60 yards receiving. Week 10's matchup against the Vikings presents a softer test with no cornerbacks worthy of shadowing Williams, who should be treated as a low-end WR1.\n",
    "timestamp": "2021-11-08 05:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.2,
    "week02": 18.6,
    "week03": 29.7,
    "week04": 1.6,
    "week05": 32.5,
    "week06": 3.7,
    "week07": "BYE",
    "week08": 2.9,
    "week09": 6.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.2, 18.6, 29.7, 1.6, 32.5, 3.7, 'BYE', 2.9, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 8.9, 10.8, 16.9, 10.9, 17.4, 'BYE', 8.2, 6.9, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 6.4, 12.0, 6.6, 5.3, 10.7, 'BYE', 4.0, 3.1, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 16.1, 18.2, 11.6, 9.8, 17.3, 'BYE', 10.5, 9.1, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 9.4,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 4,
    "avg_fp2": 13.69,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.44,
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
    "headlineNews": "CeeDee Lamb caught 2-of-9 targets for 23 yards in the Cowboys' Week 9 loss to the Broncos.\n",
    "report": "",
    "analysis": "Lamb's nine targets easily led the team, and his ankle didn't seem to pose a problem. Dak Prescott just missed him on some throws downfield, and the Cowboys as a whole simply laid an egg and appeared to gloss over the Broncos. Lamb will try to rebound next week as a WR1 next week against the Falcons.\n",
    "timestamp": "2021-11-07 10:03 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.9, 13.4, 8.0, 2.3, 16.8, 31.6, 'BYE', 14.2, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.4, 7.3, 7.1, 5.9, 12.3, 'BYE', 12.9, 11.5, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 7.7, 0.0, 3.6, 2.6, 8.2, 'BYE', 19.2, 13.5, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 21.8, 10.6, 12.6, 14.3, 14.0, 'BYE', 25.0, 17.8, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 9.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 24,
    "avg_fp2": 9.49,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.22,
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
    "headlineNews": "Marvin Jones caught 3-of-5 targets for 21 yards in the Jaguars' Week 9 win over the Bills.\n",
    "report": "",
    "analysis": "Trevor Lawrence missed Marvin Jones down the sideline for what would have been a game sealing TD if the ball had been anywhere near the wide open receiver. Jones only managed an 18% target share, which is why a single play had such an impact on his fantasy day. Jones' deep threat usage gives him more upside than the other Jaguars wide receivers, but it also creates risk of dud weeks. His quarterback compounds that risk by missing throws and generally struggling to move the offense. Jones looks like a WR4 against the Colts.\n",
    "timestamp": "2021-11-08 12:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.2,
    "week02": 14.5,
    "week03": 9.2,
    "week04": 3.9,
    "week05": 3.0,
    "week06": 19.5,
    "week07": "BYE",
    "week08": 6.0,
    "week09": 3.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 14.5, 9.2, 3.9, 3.0, 19.5, 'BYE', 6.0, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 13.4, 11.1, 10.7, 11.4, 12.7, 'BYE', 10.9, 9.6, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 2.9, 5.2, 12.7, 14.9, 6.8, 'BYE', 3.7, 6.0, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 16.7, 12.5, 18.4, 21.2, 11.5, 'BYE', 10.6, 12.3, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 9.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 7,
    "avg_fp2": 9.51,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.44,
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
    "headlineNews": "Cole Beasley (ribs) does not carry an injury designation for Week 10 against the Jets.\n",
    "report": "",
    "analysis": "Beasley was banged up with a ribs injury in the second half of the Bills' Week 9 loss to the Jaguars. He was limited in practice all week but should be at or near full health for Week 10. Beasley, along with the return of Dawson Knox, should help prevent a repeat of the Bills' disastrous offensive outing against the Jaguars. The slot wide receiver can eat up yards underneath if the Jets follow a similar game plan of taking away Allen's deep options. He shaps up as a solid WR3 option.\n",
    "timestamp": "2021-11-12 08:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 5.6,
    "week03": 15.3,
    "week04": 2.6,
    "week05": 1.0,
    "week06": 18.3,
    "week07": "BYE",
    "week08": 16.0,
    "week09": 7.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.6, 15.3, 2.6, 1.0, 18.3, 'BYE', 16.0, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 6.2, 8.6, 5.2, 6.7, 5.0, 'BYE', 6.8, 9.3, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 7.2, 6.6, 10.6, 7.7, 'BYE', 7.1, 2.7, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.5, 11.5, 10.6, 15.4, 13.2, 'BYE', 8.9, 10.6, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 9.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.16,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets head coach Robert Saleh said\u00a0Corey Davis (hip) will play in Week 10 against the Bills.\u00a0\n",
    "report": "",
    "analysis": "Davis has missed the Jets' past two games with a lingering hip issue. He was able to practice enough this week to suit up against Buffalo's shutdown secondary. His downfield prowess doesn't fit QB Mike White's penchant for checking down, limiting Davis' fantasy floor in a difficult matchup. He should be treated as a low-end WR3 in Week 10.\n",
    "timestamp": "2021-11-12 04:16 PM",
    "source": "Rich Cimini on Twitter",
    "game_day_logo": "",
    "week01": 24.2,
    "week02": 1.8,
    "week03": 6.6,
    "week04": 19.1,
    "week05": 6.5,
    "week06": "BYE",
    "week07": 12.7,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.2, 1.8, 6.6, 19.1, 6.5, 'BYE', 12.7, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 17.0, 3.8, 12.2, 13.7, 'BYE', 12.2, 'DNP', 'DNP', 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.2, 11.1, 16.6, 4.9, 'BYE', 3.8, 'DNP', 'DNP', 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 15.1, 23.0, 25.9, 13.8, 'BYE', 10.6, 'DNP', 'DNP', 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 8.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 10.66,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.33,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Hunter Renfrow (ankle) was upgraded to a full practice on Thursday.\n",
    "report": "",
    "analysis": "Renfrow had nine targets last week and figures to be the second-most targeted Raider after Darren Waller going forward. Even despite Kansas City's better defensive effort last week against Jordan Love (in his first start), Renfrow has quite a tasty matchup against the Chiefs.\u00a0\n",
    "timestamp": "2021-11-11 10:08 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 10.0,
    "week02": 8.2,
    "week03": 16.2,
    "week04": 13.5,
    "week05": 8.6,
    "week06": 5.1,
    "week07": 9.3,
    "week08": "BYE",
    "week09": 14.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 8.2, 16.2, 13.5, 8.6, 5.1, 9.3, 'BYE', 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 5.6, 5.9, 4.6, 8.7, 5.2, 4.1, 'BYE', 8.6, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.7, 1.1, 5.1, 9.0, 8.6, 5.0, 'BYE', 5.4, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.4, 10.8, 14.4, 13.2, 14.8, 12.1, 'BYE', 9.5, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 8.3,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 27,
    "avg_fp2": 15.69,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.29,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "DK Metcalf caught all six of his targets for 43 yards and two touchdowns in the Seahawks' Week 8 win over the Jaguars.\n",
    "report": "",
    "analysis": "Metcalf was out-targeted 13-6 by Tyler Lockett but still posted a solid fantasy outing on the back of two red zone scores. Touchdowns have been Metcalf's backstop recently as he hasn't topped 100 yards since Week 3 but still has six scores since then. He also has a trio of games over 90 yards in that span. The Seahawks get their bye in Week 9 and then Russell Wilson is slated to return. With Wilson under center, Metcalf will go from a risky WR2 to a low-end WR1. Seattle will face off against the Packers in a must-win game when they return from the bye.\u00a0\n",
    "timestamp": "2021-10-31 11:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 8.3,
    "week03": 19.7,
    "week04": 14.5,
    "week05": 24.3,
    "week06": 8.8,
    "week07": 16.6,
    "week08": 19.3,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 8.3, 19.7, 14.5, 24.3, 8.8, 16.6, 19.3, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 15.3, 10.1, 8.5, 12.7, 16.8, 6.0, 10.3, 'BYE', 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 4.9, 7.6, 2.5, 9.7, 5.9, 3.0, 10.3, 'BYE', 12.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 20.5, 14.0, 13.4, 14.1, 18.1, 12.4, 18.6, 'BYE', 25.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 8.2,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 3,
    "avg_fp2": 12.74,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.19,
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
    "headlineNews": "Robert Woods caught 7-of-10 targets for 98 yards in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "Woods was a bright spot in an otherwise uninspiring offensive performance for the Rams. In fact, he actually had more yards than Cooper Kupp, notable considering the historic season Kupp is having. Woods hasn't quite lived up to expectations fantasy managers had for him in August, but he's still generally been a solid option. Consider him a WR2 or flex option in Week 10 against the 49ers.\n",
    "timestamp": "2021-11-08 04:51 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 10.9,
    "week02": 9.5,
    "week03": 5.3,
    "week04": 12.8,
    "week05": 21.0,
    "week06": 10.1,
    "week07": 12.0,
    "week08": 19.2,
    "week09": 13.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 9.5, 5.3, 12.8, 21.0, 10.1, 12.0, 19.2, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 9.9, 9.4, 8.2, 9.2, 7.8, 5.8, 7.7, 10.5, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 7.0, 8.7, 7.0, 6.4, 11.6, 5.0, 13.3, 8.5, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.4, 18.4, 16.3, 14.9, 13.0, 20.8, 13.8, 24.3, 15.7, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115378.png",
    "name": "Russell Gage",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 7.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 5.98,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 33.5,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Russell Gage caught 7-of-8 targets for 64 yards in the Falcons' Week 9 win over the Saints.\n",
    "report": "",
    "analysis": "With Marshon Lattimore occupied by Kyle Pitts, Gage finally stacked up some cheap PPR points as he doubled his previous 2021 production. It never made sense that Gage was getting out-produced by Tajae Sharpe, but don't expect any re-draft miracles going forward. Even for plus matchups like Week 10's date with the Cowboys, Gage will be a low floor on a fruitless search for ceiling. He's a WR5, at best, even in PPR formats.\u00a0\n",
    "timestamp": "2021-11-08 12:59 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 5.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 14.7,
    "week08": 0.0,
    "week09": 9.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 'DNP', 'DNP', 'DNP', 'BYE', 14.7, 0.0, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.1, 'DNP', 'DNP', 'DNP', 'BYE', 9.5, 5.9, 6.0, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 8.0, 4.1, 4.8, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 10.2, 'DNP', 'DNP', 'DNP', 'BYE', 11.5, 9.9, 10.2, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 7.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 17,
    "avg_fp2": 13.87,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 28.51,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Chase Claypool (toe) is considered \"week-to-week.\"\n",
    "report": "",
    "analysis": "The initial fear was that Claypool's season was over but Rapoport noted that he avoided the worst and will return at some point this year. With the young receiver likely out multiple weeks, the Pittsburgh offense will flow through Diontae Johnson and Najee Harris. Johnson is already averaging 9.9 targets per game and that number should hit double-digits going forward. Pat Freiermuth has emerged as a contributor lately and Claypool's absence will ensure he remains on the field even after Eric Ebron returns. James Washington will start and act as the Steelers' primary deep threat until Claypool returns.\n",
    "timestamp": "2021-11-11 04:15 PM",
    "source": "Ian Rapoport on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 15.0, 'DNP', 19.7, 14.2, 14.1, 'BYE', 12.8, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 12.8, 'DNP', 13.6, 12.1, 14.7, 'BYE', 9.8, 15.9, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 3.3, 'DNP', 5.3, 10.0, 7.6, 'BYE', 13.4, 7.0, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 17.4, 'DNP', 9.9, 14.6, 13.5, 'BYE', 20.3, 14.1, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 7.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 4,
    "avg_fp2": 5.6,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.44,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Calf",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "The Dallas Morning News' Michael Gehlken reports Michael Gallup (calf, IR) is expected to play in Week 10 against the Falcons.\n",
    "report": "",
    "analysis": "Gallup has been sidelined since Week 1 after suffering a calf strain that landed him on injured reserve. He had a chance to suit up last week but the Cowboys ultimately chose to sit him one more week. His return will send Malik Turner and Cedrick Wilson, who have combined for three touchdowns in the previous two weeks, back to the bench. Gallup will slot in as a WR4 until his role within the Dallas offense becomes more clear.\n",
    "timestamp": "2021-11-10 03:11 PM",
    "source": "Michael Gehlken on Twitter",
    "game_day_logo": "",
    "week01": 5.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 20.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 7.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 7.01,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.94,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jarvis Landry (knee) returned to Browns practice on Thursday.\u00a0\n",
    "report": "",
    "analysis": "It is the same routine Landry followed last week before ultimately suiting up and catching three balls for 11 yards against the Bengals. Landry seems nowhere close to 100 percent healthy, but with Nick Chubb (COVID-19) likely to miss Sunday's game against the Patriots, Landry is going to be needed for cheap looks. He is a desperation WR3 play in PPR leagues.\u00a0\n",
    "timestamp": "2021-11-11 06:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.34,
    "week02": 1.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 6.2,
    "week08": 7.5,
    "week09": 2.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.34, 1.4, 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 7.5, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 6.8, 'DNP', 'DNP', 'DNP', 'DNP', 2.9, 3.3, 5.9, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 4.2, 'DNP', 'DNP', 'DNP', 'DNP', 6.9, 5.3, 7.3, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.9, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 15.7, 13.7, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png",
    "name": "Jerry Jeudy",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 7.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.68,
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
    "headlineNews": "The Denver Post's Ryan O'Halloran reports Broncos offensive coordinator Pat Shurmur in Week 9 used \"pre-snap motion and tunnel/bubble screens\" to get the ball into Jerry Jeudy's hands.\u00a0\n",
    "report": "",
    "analysis": "Jeudy's Week 9 usage against Dallas was markedly different than his usage in Week 1 against the Giants and Week 8 against Washington. Jeudy had an 8.5 air yards per reception in his first two games of the season; against the Cowboys, that number dropped to 3.5. Four of Jeudy\u2019s team-leading six catches were caught one yard beyond the line of scrimmage or behind the line. O'Halloran suggested Jeudy's Week 9 usage could have been opponent specific, but Shurmur's effort to put the ball in Jeudy's hands is good news for his rest-of-season prospects. He would be a more consistent PPR producer while Courtland Sutton would be a more volatile weekly option. Sutton has drawn a target on a meager 10.7 percent of his routes since Jeudy's return. Tim Patrick has out-targeted Sutton over the past two weeks and leads the Broncos with 149 receiving yards over that stretch.\u00a0\n",
    "timestamp": "2021-11-09 06:19 PM",
    "source": "DenverPost.com ",
    "game_day_logo": "",
    "week01": 10.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 5.9,
    "week09": 9.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.9, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 5.0, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.7, 4.2, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.0, 8.9, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2973405.png",
    "name": "Kalif Raymond",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 7.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 22,
    "avg_fp2": 7.43,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 30.94,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions waived WR Tyrell Williams.\n",
    "report": "",
    "analysis": "Signed to a one-year contract in free agency, Williams' tenure with the Lions comes to an end with 39 snaps and 2/14 receiving. Presumably cleared from the concussion protocol he's been recovering from since September, Williams might land on a practice squad somewhere if healthy. Kalif Raymond and Amon-Ra St. Brown will continue starting in his place.\n",
    "timestamp": "2021-11-05 08:09 PM",
    "source": "Detroit Lions on Twitter",
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 2.8,
    "week03": 9.8,
    "week04": 18.1,
    "week05": 0.0,
    "week06": 6.7,
    "week07": 14.6,
    "week08": 0.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 2.8, 9.8, 18.1, 0.0, 6.7, 14.6, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 8.4, 7.0, 6.7, 5.6, 8.3, 8.5, 5.8, 'BYE', 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 3.5, 0.4, 0.0, 0.8, 3.2, 3.8, 'BYE', 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 5.8, 5.9, 6.2, 6.3, 1.6, 7.4, 9.7, 'BYE', 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2982828.png",
    "name": "Tajae Sharpe",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 7.1,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 3.12,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 33.5,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Tajae Sharpe caught a 12-yard pass in the Falcons' Week 9 win over the Saints.\u00a0\n",
    "report": "",
    "analysis": "Order returned to the Falcons' receiver corps today, with Sharpe tumbling behind Russell Gage and Olamide Zaccheaus in the targets battle. Even in deeper 14-team leagues, it is difficult to make an argument for rostering the 26-year-old journeyman.\u00a0\n",
    "timestamp": "2021-11-08 01:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.3,
    "week03": 1.1,
    "week04": 2.5,
    "week05": 7.3,
    "week06": "BYE",
    "week07": 2.8,
    "week08": 8.3,
    "week09": 1.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.3, 1.1, 2.5, 7.3, 'BYE', 2.8, 8.3, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.2, 0.6, 0.7, 6.9, 5.8, 'BYE', 4.5, 2.3, 3.9, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 0.6, 2.3, 1.2, 0.9, 'BYE', 2.2, 1.6, 7.8, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.7, 11.3, 5.9, 3.4, 3.2, 'BYE', 5.7, 3.4, 12.1, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 7.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 10.37,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.68,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "The Denver Post's Ryan O'Halloran reports Broncos offensive coordinator Pat Shurmur in Week 9 used \"pre-snap motion and tunnel/bubble screens\" to get the ball into Jerry Jeudy's hands.\u00a0\n",
    "report": "",
    "analysis": "Jeudy's Week 9 usage against Dallas was markedly different than his usage in Week 1 against the Giants and Week 8 against Washington. Jeudy had an 8.5 air yards per reception in his first two games of the season; against the Cowboys, that number dropped to 3.5. Four of Jeudy\u2019s team-leading six catches were caught one yard beyond the line of scrimmage or behind the line. O'Halloran suggested Jeudy's Week 9 usage could have been opponent specific, but Shurmur's effort to put the ball in Jeudy's hands is good news for his rest-of-season prospects. He would be a more consistent PPR producer while Courtland Sutton would be a more volatile weekly option. Sutton has drawn a target on a meager 10.7 percent of his routes since Jeudy's return. Tim Patrick has out-targeted Sutton over the past two weeks and leads the Broncos with 149 receiving yards over that stretch.\u00a0\n",
    "timestamp": "2021-11-09 06:19 PM",
    "source": "DenverPost.com ",
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 20.4,
    "week03": 6.2,
    "week04": 6.2,
    "week05": 21.5,
    "week06": 19.4,
    "week07": 9.3,
    "week08": 5.0,
    "week09": 3.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 20.4, 6.2, 6.2, 21.5, 19.4, 9.3, 5.0, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.2, 9.9, 6.4, 8.3, 8.9, 13.0, 15.7, 8.0, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 4.2, 6.1, 6.0, 4.4, 4.9, 4.3, 6.7, 6.4, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 13.1, 11.1, 9.9, 10.2, 11.7, 12.6, 13.9, 9.1, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 6.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 6.3,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.02,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "T.Y. Hilton cleared the league's concussion protocol and will start in Week 10 against the Jaguars.\n",
    "report": "",
    "analysis": "Hilton has played in two games this year and has not been able to finish either of them due to injury. Although he saw at least four targets in both outings, the 31-year-old cannot be considered anything more than a risky WR3/4 versus the Jags.\n",
    "timestamp": "2021-11-12 07:27 PM",
    "source": "Mike Wells on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 10.0,
    "week07": "DNP",
    "week08": 2.6,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.0, 'DNP', 2.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 'DNP', 6.4, 'DNP', 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.1, 'DNP', 9.4, 'DNP', 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.4, 'DNP', 16.3, 'DNP', 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13983.png",
    "name": "A.J. Green",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 6.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 9.76,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.97,
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
    "headlineNews": "Cardinals activated A.J. Green on the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Green will be limited in Thursday's practice but is expected to return against the Panthers. Christian Kirk, Rondale Moore, and Antoine Wesley filled in without either DeAndre Hopkins (hamstring) or Green in Week 9 but the latter will resume his role on the outside whether Hopkins returns against the Panthers or not. Green's outlook depends entirely on Kyler Murray's (ankle) pending status for Sunday.\n",
    "timestamp": "2021-11-11 08:42 PM",
    "source": "Darren Urban on Twitter",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 11.9, 13.7, 15.2, 1.8, 16.4, 8.1, 7.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 5.5, 5.1, 10.8, 7.1, 3.2, 4.4, 12.8, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.7, 4.1, 13.4, 8.6, 7.9, 5.5, 11.1, 'DNP', 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 20.0, 15.3, 19.6, 15.3, 12.7, 13.1, 15.2, 'DNP', 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372016.png",
    "name": "Jaylen Waddle",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 6.6,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 23,
    "avg_fp2": 10.42,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.7,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Jaylen Waddle caught 4-of-6 targets for 61 yards in the Dolphins' Week 10 win over the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Waddle also drew and end zone DPI on an under-thrown pass to set the Dolphins up at the one-yard line in the fourth quarter. The targets were Waddle's fewest in five games, though he has now caught at least four balls in five straight contests. The highlight was a 35-yard reception late in the third quarter where Waddle knew he was going to take punishment from CB Brandon Stephens. He held onto the ball and helped set the Dolphins up for a field goal. Fantasy managers should rightfully expect more in this targets-bereft offense, and will likely get it against the defense-less Jets in Week 11.\u00a0\n",
    "timestamp": "2021-11-12 05:35 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 14.1,
    "week02": 5.8,
    "week03": 11.8,
    "week04": 4.8,
    "week05": 4.3,
    "week06": 24.0,
    "week07": 11.8,
    "week08": 4.9,
    "week09": 12.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 5.8, 11.8, 4.8, 4.3, 24.0, 11.8, 4.9, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.0, 6.3, 8.0, 9.8, 9.9, 5.9, 7.9, 13.5, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 3.1, 1.8, 1.5, 4.4, 4.4, 3.2, 4.0, 4.7, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 15.9, 11.7, 12.4, 16.6, 15.9, 18.7, 18.8, 12.7, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576491.png",
    "name": "Adam Humphries",
    "depthchart": "Backup: WR-2",
    "team": "Washington Football Team",
    "projected": 6.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.24,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Dyami Brown (knee) is questionable for Week 10.\u00a0\n",
    "report": "",
    "analysis": "That Brown isn't a sure thing to suit up against the Bucs is something of a surprise following the Football Team's Week 9 bye. Brown missed Week 8 against the Packers, when Adam Humphries and DeAndre Carter operated as Washington's starting wideouts alongside Terry McLaurin. Humphries and Carter would be WR4/5 plays if Brown is sidelined against Tampa.\u00a0\n",
    "timestamp": "2021-11-12 05:54 PM",
    "source": "Nicki Jhabvala on Twitter",
    "game_day_logo": "",
    "week01": 2.0,
    "week02": 7.9,
    "week03": 1.2,
    "week04": 2.4,
    "week05": 8.8,
    "week06": 0.1,
    "week07": 5.1,
    "week08": 4.5,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.9, 1.2, 2.4, 8.8, 0.1, 5.1, 4.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 4.9, 2.1, 0.5, 9.0, 6.1, 4.5, 5.7, 'BYE', 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 6.3, 4.1, 3.9, 7.1, 2.6, 4.2, 'BYE', 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 10.8, 8.7, 8.1, 10.9, 12.2, 4.9, 6.8, 'BYE', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 6.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 31,
    "avg_fp2": 6.4,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 38.69,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Tre'Quan Smith caught 3-of-4 targets for 53 yards in the Saints' Week 9 loss to the Falcons.\u00a0\n",
    "report": "",
    "analysis": "This was Smith's most productive and highest-targeted game since making his 2021 debut in Week 7. Baby steps that are unlikely to become leaps and bounds in this hard-capped offense. Smith will be a low-floor, low-ceiling WR5 bet for next weekend's date with the Titans.\u00a0\n",
    "timestamp": "2021-11-08 01:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 1.6,
    "week08": 10.8,
    "week09": 6.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.6, 10.8, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.5, 4.0, 3.5, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.2, 0.0, 2.5, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.7, 9.4, 10.7, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.3,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 7.35,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.83,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Julio Jones (hamstring) was added to the injury report as a limited practice participant on Thursday.\n",
    "report": "",
    "analysis": "Jones appeared to tweak his hamstring in a rep captured by Turron Davenport (linked in source) and sat out the remainder of open practice. This is a serious threat to him playing on Sunday against the Saints. Jones' fantasy managers, at this point, at least have plenty of experience pivoting off of him. They should be ready to do so again this week.\u00a0\n",
    "timestamp": "2021-11-11 09:05 PM",
    "source": "Turron Davenport on Twitter",
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 15.8,
    "week03": 6.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 7.4,
    "week07": 4.8,
    "week08": "DNP",
    "week09": 5.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 15.8, 6.2, 'DNP', 'DNP', 7.4, 4.8, 'DNP', 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 3.9, 8.0, 'DNP', 'DNP', 6.7, 4.8, 'DNP', 6.8, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 6.4, 9.9, 'DNP', 'DNP', 8.0, 11.8, 'DNP', 6.9, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.9, 24.5, 21.8, 'DNP', 'DNP', 18.0, 18.2, 'DNP', 17.2, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372414.png",
    "name": "Elijah Moore",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 6.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 7.76,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.16,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Elijah Moore caught 7-of-8 targets for 84 yards and two touchdowns in the Jets' Week 9 loss to the Colts.\u00a0\n",
    "report": "",
    "analysis": "The catches and yards were new season highs, while the scores were the first of Moore's career. His eight targets matched a personal best. All this with No. 2 and 3 quarterbacks Mike White and Josh Johnson. Score No. 1 was a 19-yard strike from White where Moore took advantage of a coverage bust from Xavier Rhodes. He was all alone in the end zone. White was hurt on the play and Johnson checked in, eventually finding Moore for another 19-yard score in the third quarter. Freed by play-action, Moore got loose near the goal line and made a nice catch in stride. Moore certainly looked dangerous this evening after struggling for consistent looks in Weeks 1-8. The question for Week 10 vs. the mighty Bills will be who is under center. Zach Wilson (knee) could return while White's (forearm) status is up in the air. Regardless of who is at quarterback, Moore will be a WR4 vs. an elite defense.\u00a0\n",
    "timestamp": "2021-11-05 03:54 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.2,
    "week02": 6.7,
    "week03": 3.7,
    "week04": "DNP",
    "week05": 0.0,
    "week06": "BYE",
    "week07": 9.7,
    "week08": 10.1,
    "week09": 23.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 6.7, 3.7, 'DNP', 0.0, 'BYE', 9.7, 10.1, 23.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 2.1, 3.0, 'DNP', 6.9, 'BYE', 2.7, 7.8, 1.5, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 2.5, 'DNP', 0.7, 'BYE', 0.0, 3.3, 1.6, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.5, 4.1, 12.3, 'DNP', 10.0, 'BYE', 6.5, 15.3, 10.1, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 5.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 11,
    "avg_fp2": 14.05,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.29,
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
    "headlineNews": "Adam Thielen caught 2-of-7 targets for six yards and a touchdown in the Vikings' Week 9 loss to the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Thielen was tied for the team lead in targets, managing to salvage his fantasy day with a game-tying fourth quarter touchdown. Fantasy managers facing Thielen, meanwhile, are slowly turning into the \"he can't keep getting away with this\" meme. But as long as Thielen functions as Kirk Cousins' primary red zone target, he's going to have weekly touchdown upside. Thielen has been incredibly efficient with high-value targets, turning six inside-the-10 targets into four touchdowns this season. Thielen will be a mid-range WR2 in Week 10 against the Chargers.\u00a0\n",
    "timestamp": "2021-11-07 10:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.7,
    "week02": 12.9,
    "week03": 14.0,
    "week04": 6.1,
    "week05": 5.0,
    "week06": 24.3,
    "week07": "BYE",
    "week08": 16.8,
    "week09": 7.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.7, 12.9, 14.0, 6.1, 5.0, 24.3, 'BYE', 16.8, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 10.9, 7.1, 6.7, 10.2, 6.5, 'BYE', 7.2, 6.9, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 3.9, 9.5, 9.8, 8.4, 7.6, 'BYE', 10.1, 8.3, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 18.4, 14.6, 16.8, 15.2, 16.1, 'BYE', 14.1, 13.7, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 5.8,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 8.03,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.03,
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
    "headlineNews": "Jakobi Meyers caught 1-of-4 targets for eight yards in the Patriots' Week 9 win over the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Meyers was also the target on Mac Jones' second quarter interception, getting his route run for him by ex-teammate Stephon Gilmore. With Jones completing only 12 passes in a lopsided, run-dominated Patriots victory, Meyers caught fewer than four balls for the first time all year. Today was also the first time he posted fewer than 36 yards, though that 36-yard effort came in Week 8. Bereft of ceiling, Meyers' floor is unappealing because of his famed aversion to touchdowns. He will remain an empty-calorie WR4 for Week 10 vs. Cleveland.\u00a0\n",
    "timestamp": "2021-11-08 01:31 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 5.8, 13.9, 12.8, 7.6, 8.9, 6.9, 7.7, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.0, 6.5, 11.0, 11.6, 15.1, 9.3, 6.2, 6.8, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.1, 4.2, 7.2, 10.9, 9.0, 6.1, 4.0, 4.2, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 13.4, 10.0, 10.4, 14.7, 14.1, 9.5, 6.4, 7.4, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 5.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 11.21,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.97,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Christian Kirk caught all six of his targets for 91 yards in the Cardinals' Week 9 win over the 49ers.\n",
    "report": "",
    "analysis": "Kirk added 33 passing yards on a trick play that nearly resulted in him getting the first passing touchdown of his career. Instead, Antoine Wesely was ruled out at the one-yard line and James Conner punched it in for six on the next play. The Cardinals weren't forced to pass much with Conner thrashing the 49ers by himself but Kirk made the most of his team-high 23 percent target share. He projects to be the team's top receiver on the rare occasion that DeAndre Hopkins and A.J. Green are both out. The receiving duo should be back next week, pushing Kirk back into WR4 territory versus the Panthers.\n",
    "timestamp": "2021-11-08 02:01 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 8.0, 13.9, 1.0, 7.5, 16.0, 13.0, 6.6, 13.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 10.8, 13.0, 8.7, 6.7, 2.9, 3.5, 7.6, 10.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 6.6, 5.6, 8.0, 6.8, 7.5, 4.9, 7.2, 8.4, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 14.4, 10.8, 13.6, 12.3, 13.5, 9.7, 12.3, 13.2, 12.3]
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
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 6.33,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.03,
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
    "headlineNews": "Nelson Agholor did not see a target in the Patriots' Week 9 win against the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Agholor posted a zero one week after leading the Patriots with three catches for 60 yards against the Chargers. He got plenty of playing time -- 87 percent of New England's offensive snaps, in fact -- but Mac Jones didn't look Agholor's way once against Carolina. He'll be a WR4 option in Week 10 against Cleveland.\u00a0\n",
    "timestamp": "2021-11-08 04:14 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 3.6, 2.7, 7.4, 4.7, 3.3, 12.1, 7.5, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.5, 4.8, 7.6, 5.8, 9.9, 8.7, 5.4, 4.2, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.2, 1.1, 0.0, 7.5, 1.1, 1.4, 5.3, 2.8, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 12.3, 5.2, 4.4, 12.3, 6.5, 4.2, 8.5, 6.4, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360939.png",
    "name": "Rashod Bateman",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 5.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 8,
    "avg_fp2": 7.37,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 34.86,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Rashod Bateman caught 6-of-7 targets for 80 yards in the Ravens' Week 10 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "On a night where Sammy Watkins returned from a five-week absence, Bateman led the Ravens in receiving, though Marquise Brown and Mark Andrews both caught as many passes. Amazingly, Bateman was also on the field for fewer snaps than Devin Duvernay, with Pro Football Focus' Nathan Jahnke charting Duvernay with a 44-40 advantage. Bateman nevertheless made his presence felt, recovering a first quarter Brown fumble, extending into traffic for a critical third down catch in the third quarter, and hauling in an under-thrown deep ball for a 30-yard gain in what amounted to garbage time. He also comfortably out-snapped Watkins, but it's possible Watkins' snap counts will grow. It's also possible that won't happen after Watkins made two massive mistakes, losing a touchdown in the air and committing a fumble six. Bateman will be a high-end WR4 for Week 11 vs. the Bears.\u00a0\n",
    "timestamp": "2021-11-12 05:23 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 4.9,
    "week07": 9.5,
    "week08": "BYE",
    "week09": 7.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.9, 9.5, 'BYE', 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 4.8, 'BYE', 9.9, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 1.6, 'BYE', 3.4, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.8, 12.1, 'BYE', 14.6, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929785.png",
    "name": "Nick Westbrook-Ikhine",
    "depthchart": "Reserve: WR-3",
    "team": "Tennessee Titans",
    "projected": 5.4,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 4.12,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.83,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Nick Westbrook-Ikhine caught 2-of-3 targets for 16 yards and a touchdown in the Titans' Week 8 overtime win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "With Julio Jones (hamstring) back on the shelf, NWI was back in the mix, scoring his second touchdown of the season. Essentially, NWI has been alternating 3-4 catches when Julio sits and being completely invisible when he plays. We have no idea if Jones will be ready to go for Week 9 vs. the Rams, but regardless, Westbrook-Ikhine will not have WR4 value in Los Angeles.\u00a0\n",
    "timestamp": "2021-10-31 10:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 1.1,
    "week03": 11.3,
    "week04": 4.4,
    "week05": "DNP",
    "week06": 4.2,
    "week07": 0.0,
    "week08": 8.6,
    "week09": 1.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 11.3, 4.4, 'DNP', 4.2, 0.0, 8.6, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', -0.7, 0.6, 5.4, 'DNP', 3.6, 2.5, 0.4, 2.0, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 2.0, 'DNP', 0.0, 0.0, 0.2, 1.9, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 4.4, 2.4, 13.2, 'DNP', 6.6, 6.5, 8.6, 9.8, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 5.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 4.71,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.09,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Robby Anderson caught 1-of-3 targets for two yards in the Panthers' Week 9 loss to the Patriots.\u00a0\n",
    "report": "",
    "analysis": "As feared, Sam Darnold was erased by the Pats, rendering Anderson a box score afterthought. The only notable moment was when CBS' cameras caught Anderson laying into Darnold on the sideline. The wideout claimed after the game everything was good between the two, but something is definitely rotten in the state of Denmark in this offense. We don't know how much longer coach Matt Rhule can stick with Darnold's unspeakably bad performances. Anderson will not be a viable WR4 for however long Darnold remains the starter.\u00a0\n",
    "timestamp": "2021-11-08 12:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 5.3,
    "week03": 1.3,
    "week04": 7.4,
    "week05": 4.0,
    "week06": 8.6,
    "week07": 2.9,
    "week08": 0.0,
    "week09": 0.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.3, 1.3, 7.4, 4.0, 8.6, 2.9, 0.0, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 4.9, 5.4, 7.6, 4.7, 6.0, 7.1, 6.4, 4.8, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 2.8, 12.3, 2.1, 13.1, 4.0, 5.3, 8.7, 1.3, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 16.9, 15.4, 8.5, 16.6, 7.5, 9.6, 12.4, 10.7, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Reserve: WR-3",
    "team": "Indianapolis Colts",
    "projected": 5.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 7.14,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.02,
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
    "headlineNews": "Zach Pascal caught 4-of-7 targets for 58 yards in the Colts' Week 9 win over the Jets.\u00a0\n",
    "report": "",
    "analysis": "With T.Y. Hilton sidelined, Pascal's seven targets actually led the team on an evening where the Colts rang up 260 yards rushing. Pascal has posted at least six looks in three straight contests but has only 115 yards to show for it. He will nevertheless have some WR4 appeal for a Week 10 date with the Jaguars' expansion-level pass defense.\u00a0\n",
    "timestamp": "2021-11-05 04:27 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.3,
    "week02": 11.62,
    "week03": 4.1,
    "week04": 6.4,
    "week05": 6.3,
    "week06": 0.0,
    "week07": 2.9,
    "week08": 6.8,
    "week09": 7.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.3, 11.62, 4.1, 6.4, 6.3, 0.0, 2.9, 6.8, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 5.7, 6.8, 8.3, 4.0, 1.4, 5.4, 5.6, 8.2, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 2.0, 0.0, 2.4, 6.1, 5.8, 10.2, 2.7, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 10.2, 7.5, 3.8, 10.7, 8.7, 8.4, 13.5, 5.9, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 5.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 13,
    "avg_fp2": 5.67,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.19,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Brandon Aiyuk caught 6-of-8 targets for 89 yards and a touchdown in the 49ers' Week 9 loss to the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Aiyuk fumbled the ball away early in the second quarter on a play that would normally have gotten him banished for the remainder of the game by Kyle Shanahan. However, Aiyuk remained on the field throughout the contest and rewarded his coach with the best receiving numbers of his 2021 season. Aiyuk hadn't topped 45 yards in a game yet and only had one score on the year. His eight targets were tied for second on the team, one behind Deebo Samuel. Aiyuk's two biggest games have come in back-to-back weeks, pointing to a midseason awakening from him. He remains a risky bet for now but Aiyuk is at least a usable fantasy option after disappearing early in the season.\n",
    "timestamp": "2021-11-08 01:14 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.0,
    "week02": 1.1,
    "week03": 12.5,
    "week04": 2.0,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.4,
    "week08": 8.5,
    "week09": 15.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.1, 12.5, 2.0, 4.2, 'BYE', 1.4, 8.5, 15.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 1.6, 3.5, 4.0, 9.2, 'BYE', 3.2, 2.5, 2.9, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 6.9, 9.0, 12.6, 6.2, 'BYE', 1.8, 5.2, 8.2, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.4, 18.9, 14.4, 10.0, 'BYE', 7.9, 18.2, 19.0, 11.1]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 14.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 6,
    "avg_fp2": 13.09,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 13.88,
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
    "headlineNews": "Travis Kelce caught 5-of-8 targets for 68 yards and a touchdown in the Chiefs' Week 9 win against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Kelce bounced back from last week's catastrophic 27-yard performance against the Giants. He scored the team's only touchdown on a short first quarter throw and was the lone bright spot on another down day for the formerly great Kanas City passing offense. With at least eight targets in six of nine games this year, he's still seeing decent volume -- enough to give Kelce drafters hope that he can inoculate himself from Patrick Mahomes' immense struggles. Kelce gets the Raiders in Week 10.\u00a0\n",
    "timestamp": "2021-11-08 01:16 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 22.6,
    "week02": 20.4,
    "week03": 13.9,
    "week04": 4.3,
    "week05": 14.7,
    "week06": 13.9,
    "week07": 10.0,
    "week08": 2.7,
    "week09": 15.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 20.4, 13.9, 4.3, 14.7, 13.9, 10.0, 2.7, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3, 10.4, 12.0, 10.3, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4, 8.4, 10.5, 4.7, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3, 14.5, 18.6, 15.6, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 12.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 8.56,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 15.91,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos activated TE Noah Fant from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Fant missed Week 9 but has now been cleared to return for this week's date with the Eagles. Albert Okwuegbunam (knee) was absent from Wednesday's practice.\n",
    "timestamp": "2021-11-10 09:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 11.3,
    "week03": 2.5,
    "week04": 13.6,
    "week05": 3.5,
    "week06": 20.2,
    "week07": 6.4,
    "week08": 1.8,
    "week09": "DNP",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 11.3, 2.5, 13.6, 3.5, 20.2, 6.4, 1.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 7.9, 6.3, 7.4, 6.5, 11.1, 11.0, 9.6, 'DNP', 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 1.6, 4.8, 5.7, 6.9, 2.5, 4.5, 4.2, 'DNP', 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 10.4, 6.8, 12.0, 9.9, 5.9, 9.0, 10.0, 'DNP', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 11.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 11.29,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 13.52,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Darren Waller caught 7-of-11 targets for 92 yards in the Raiders' Week 9 loss to the Giants.\n",
    "report": "",
    "analysis": "Waller led the Raiders in targets and tied Hunter Renfrow for a team-high in receptions. This was Waller's first game with more than 65 yards since his 105-yard explosion in Week 1. The return to form is a welcome change by fantasy managers after Waller's five-game streak of being held under 15 fantasy points. This was also Waller's first game back from a one-week absence due to an ankle injury. Past the injury and his early-season slump, Waller will slot in as a top-three tight end versus the Chiefs next week.\n",
    "timestamp": "2021-11-07 11:01 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 21.5,
    "week02": 9.0,
    "week03": 7.9,
    "week04": 13.0,
    "week05": 6.5,
    "week06": 8.4,
    "week07": "DNP",
    "week08": "BYE",
    "week09": 12.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 9.0, 7.9, 13.0, 6.5, 8.4, 'DNP', 'BYE', 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 15.8, 17.8, 8.8, 7.8, 5.4, 'DNP', 'BYE', 7.8, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 2.6, 8.3, 9.3, 4.2, 3.1, 'DNP', 'BYE', 6.7, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.6, 17.0, 17.0, 12.0, 11.6, 'DNP', 'BYE', 15.1, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 11.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 23,
    "avg_fp2": 9.88,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 14.99,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Mike Gesicki was held without a catch on seven targets in the Dolphins' Week 10 win over the Ravens.\u00a0\n",
    "report": "",
    "analysis": "This one stings. Gesicki's goose egg \u2014 his first since Week 1 \u2014 came on a night where Adam Shaheen and Durham Smythe combined for four catches. It was also vs. a Ravens defense that has spent the season bleeding fantasy points up the seam. So it goes. Gesicki has a perfect Week 11 bounce-back spot against a Jets D that can't stop any position.\u00a0\n",
    "timestamp": "2021-11-12 05:31 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.0,
    "week02": 5.6,
    "week03": 13.6,
    "week04": 14.2,
    "week05": 6.3,
    "week06": 15.5,
    "week07": 18.0,
    "week08": 8.3,
    "week09": 7.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.6, 13.6, 14.2, 6.3, 15.5, 18.0, 8.3, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 2.8, 4.6, 3.2, 10.7, 8.7, 4.3, 5.2, 8.3, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.9, 0.0, 9.8, 11.1, 4.7, 8.9, 4.6, 2.0, 10.9, 13.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 12.9, 12.2, 17.3, 10.9, 15.3, 6.1, 6.7, 17.3, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 11.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 13,
    "avg_fp2": 10.04,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.48,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "George Kittle (calf) was \"limited\" on Thursday.\n",
    "report": "",
    "analysis": "As far as we know, Kittle made it through last week's return without setbacks. We would have to assume this is just rep management ahead of Monday night's game against the Rams. Kittle is back in the top four at tight end.\u00a0\n",
    "timestamp": "2021-11-12 12:25 AM",
    "source": "Matt Maiocco on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 9.8,
    "week02": 3.7,
    "week03": 13.6,
    "week04": 6.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 17.1,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 3.7, 13.6, 6.0, 'DNP', 'BYE', 'DNP', 'DNP', 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.4, 8.1, 8.2, 12.3, 'DNP', 'BYE', 'DNP', 'DNP', 4.6, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 3.3, 7.7, 10.4, 'DNP', 'BYE', 'DNP', 'DNP', 4.1, 16.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.7, 19.2, 17.5, 14.8, 'DNP', 'BYE', 'DNP', 'DNP', 11.6, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 10.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 8,
    "avg_fp2": 12.38,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 11.07,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Andrews caught 6-of-8 targets for 63 yards and a touchdown in the Ravens' Week 10 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Andrews' five-yard score with 4:12 remaining was the Ravens' first \u2014 and only \u2014 touchdown of the evening. Mysteriously, Dolphins DB Eric Rowe simply gave up on the ball in the end zone, leaving Andrews all alone. The score was his fourth in five games, and a good outcome for fantasy managers on a night where the Ravens' offense was never in sync. For Week 11, Andrews gets a Bears defense that is so far bottom five in tight end fantasy points surrendered.\u00a0\u00a0\n",
    "timestamp": "2021-11-12 05:27 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 3.5,
    "week02": 8.2,
    "week03": 13.4,
    "week04": 9.2,
    "week05": 36.2,
    "week06": 15.3,
    "week07": 6.3,
    "week08": "BYE",
    "week09": 6.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 8.2, 13.4, 9.2, 36.2, 15.3, 6.3, 'BYE', 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.0, 10.0, 2.9, 8.1, 13.6, 9.4, 'BYE', 9.9, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.4, 6.6, 1.6, 8.9, 5.3, 4.7, 'BYE', 6.4, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 14.2, 13.6, 5.1, 13.7, 9.0, 12.0, 'BYE', 12.4, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 9.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 9,
    "avg_fp2": 7.2,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 9.14,
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
    "headlineNews": "Zach Ertz caught 3-of-5 targets for 27 yards in the Cardinals' Week 9 win over the 49ers.\n",
    "report": "",
    "analysis": "Colt McCoy, in place of an injured Kyler Murray, only attempted 26 passes, so Ertz's 19 percent target share looks a bit better than his stat line indicates. He tied Rondale Moore and James Conner for the second-most targets on Arizona this week. With Murray likely on track to return from his ankle injury in Week 11, the passing game should rebound and bring Ertz along with it. Ertz has at least three catches in every game he has played with the Cardinals and registers as a low-end TE1 versus the Panthers next week.\n",
    "timestamp": "2021-11-08 02:10 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 1.1, 13.3, 9.0, 1.2, 10.9, 14.5, 6.2, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 5.4, 4.4, 3.0, 2.3, 7.5, 11.6, 5.8, 3.3, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.6, 4.1, 4.1, 5.8, 5.3, 8.3, 1.9, 6.5, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 17.3, 10.7, 7.8, 11.2, 12.2, 11.9, 12.0, 11.1, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 9.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 22,
    "avg_fp2": 10.35,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.55,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson caught 10-of-11 targets for 89 yards in Week 8 against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "With Jared Goff under constant pressures,\u00a0Hockenson led the Lions in receiving and targets. The yards were his most since Week 1. Hockenson has rebounded the last three games after\u00a0being held to eight catches between Weeks 3-5. Detroit is on their bye this week, but Hockenson\u00a0will remain a locked-in TE1 when the Lions play the Steelers in Week 10.\u00a0\n",
    "timestamp": "2021-10-31 10:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.7,
    "week02": 16.6,
    "week03": 2.0,
    "week04": 6.2,
    "week05": 3.2,
    "week06": 11.4,
    "week07": 7.8,
    "week08": 13.9,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.7, 16.6, 2.0, 6.2, 3.2, 11.4, 7.8, 13.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.1, 15.3, 8.6, 6.7, 5.3, 9.0, 15.4, 'BYE', 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 1.9, 4.2, 2.9, 3.3, 2.3, 2.8, 3.7, 'BYE', 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 12.2, 14.7, 11.8, 11.0, 11.5, 9.6, 11.3, 'BYE', 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 9.1,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 7,
    "avg_fp2": 11.85,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 12.81,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox (hand) does not carry an injury designation for Week 10 against the Jets.\n",
    "report": "",
    "analysis": "Knox is a surprisingly important piece for the Bills offense and should help prevent the Jets from succeeding on defense in the same way that the Jaguars did. Jacksonville was able to limit Josh Allen by forcing him to take underneath throws, with not much there for the taking. The Bills were also hurt by their inability to run effectively. Knox should help out as both a short area receiving option and a run blocker. With a full array of weapons, Allen could get rolling against the Jets in a big way. Knox practiced in full on Thursday and Friday and can be trusted as a TE1 play this week.\n",
    "timestamp": "2021-11-12 07:37 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 8.7, 12.9, 18.2, 19.2, 6.0, 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 4.5, 7.2, 5.3, 10.6, 12.9, 'BYE', 'DNP', 'DNP', 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.8, 4.2, 0.1, 11.7, 8.7, 'BYE', 'DNP', 'DNP', 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 7.7, 5.5, 4.7, 18.1, 17.1, 'BYE', 'DNP', 'DNP', 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 8.5,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 8.34,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.0,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Hunter Henry caught 2-of-3 targets for 19 yards and a touchdown in the Patriots' Week 9 win over the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Henry's score was a seven-yarder against tight coverage in the end zone. His fifth touchdown of the season was his fifth in six weeks. That has been keeping Henry afloat in the TE2 ranks, but he continues to display zero ceiling, failing to top 40 yards in any of his past four contests. As usual, it will be touchdown or bust if you trot Henry out for Week 10 against the Browns.\u00a0\n",
    "timestamp": "2021-11-08 01:34 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 5.2, 6.1, 11.2, 16.5, 9.5, 9.3, 3.8, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 1.7, 3.3, 7.2, 7.0, 9.0, 10.2, 10.2, 7.2, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 3.8, 4.4, 7.8, 9.0, 19.1, 3.1, 6.6, 6.6, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.7, 8.4, 11.3, 11.1, 21.7, 6.0, 11.7, 10.1, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360248.png",
    "name": "Kyle Pitts",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 7.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 9.82,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 11.45,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Kyle Pitts caught 3-of-7 targets for 62 yards in the Falcons' Week 9 win over the Saints.\u00a0\n",
    "report": "",
    "analysis": "Facing a heavy dose of Marshon Lattimore, Pitts could have had a bigger statistical output, but he dropped an early down-field target after smoking Lattimore down the left sideline. He got Lattimore for a 39-yard gain not too long after, but the Saints largely held the Falcons' fearsome rookie weapon in check. Pitts has had back-to-back quiet days since Calvin Ridley stepped away from the team to focus on his mental health. It's fair to say Pitts probably misses Ridley drawing defensive heat. Pitts can hopefully bounce back against the Cowboys in what will could be a faster-paced, higher-scoring Week 10 affair.\u00a0\n",
    "timestamp": "2021-11-08 12:01 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 9.8,
    "week03": 4.5,
    "week04": 7.0,
    "week05": 22.4,
    "week06": "BYE",
    "week07": 19.8,
    "week08": 2.3,
    "week09": 7.7,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 9.8, 4.5, 7.0, 22.4, 'BYE', 19.8, 2.3, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 8.3, 8.2, 4.3, 7.2, 'BYE', 8.6, 13.0, 7.9, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 2.7, 4.1, 2.5, 3.6, 'BYE', 4.7, 5.7, 2.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 14.1, 17.6, 13.6, 12.1, 'BYE', 16.1, 21.0, 18.6, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 1,
    "avg_fp2": 2.38,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob\u00a0Gronkowski (back) is out for Week 10.\u00a0\n",
    "report": "",
    "analysis": "Gronk probably won't be back to full health for another week or two, according to head coach Bruce Arians. O.J. Howard and Cameron Brate are borderline fantasy options this week against the Football Team with Gronkowski sidelined. Brate ran 28 pass routes to Howard's 16 in Week 8 against the Saints after Gronk exited early with back spasms. It's slightly easier to trust Howard, who has drawn a target on 19.4 percent of his routes this season. Brate has a meager 11.3 percent target per route rate.\u00a0\n",
    "timestamp": "2021-11-12 05:29 PM",
    "source": "Greg Auman on Twitter ",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.3, 5.5, 3.9, 1.7, 4.1, 0.0, 2.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 2.4, 2.9, 0.2, 5.6, 2.1, 1.4, 2.5, 'BYE', 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.4, 4.5, 8.3, 5.0, 3.4, 2.6, 6.0, 'BYE', 8.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 11.4, 7.8, 11.5, 8.6, 6.4, 6.2, 11.7, 'BYE', 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 6.4,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 8.45,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 6.02,
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
    "headlineNews": "Dallas Goedert caught 3-of-6 targets for 43 yards in Philadelphia's Week 9 loss to the Chargers.\n",
    "report": "",
    "analysis": "Jalen Hurts also missed Goedert streaking wide open downfield for what would have resulted in a long gain. He still tied DeVonta Smith with an absurd 37.5% target share for the team lead, averaging an increased 32.5% target share since Zach Ertz was traded. Goedert will again rank as a strong usage-based TE1 in Week 10 against the Broncos.\n",
    "timestamp": "2021-11-08 05:50 AM",
    "source": null,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 3.4, 7.6, 14.1, 3.8, 'DNP', 10.5, 10.2, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 11.8, 12.4, 9.5, 6.7, 'DNP', 7.7, 10.8, 9.6, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 2.1, 4.0, 5.1, 6.0, 'DNP', 13.0, 2.2, 6.6, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.4, 9.7, 8.5, 12.4, 'DNP', 16.0, 4.7, 11.4, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 6.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 4,
    "avg_fp2": 9.86,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.46,
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
    "headlineNews": "Dalton Schultz caught 4-of-5 targets for 54 yards in the Cowboys' Week 9 loss to the Broncos.\n",
    "report": "",
    "analysis": "Schultz's five targets tied for third on the team, but the 54 yards led the Cowboys on a day Dak Prescott was 19-of-39 for just 232 yards. Dallas fell in a 30-0 second-half hole. With Blake Jarwin (hip) on I.R., Schultz has one of the safest floors among fantasy tight ends. He'll be a TE1 next week against the Falcons.\n",
    "timestamp": "2021-11-07 09:48 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 2.8, 23.0, 14.8, 10.9, 10.4, 'BYE', 2.1, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 7.5, 4.1, 6.2, 8.4, 9.0, 'BYE', 6.3, 6.7, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.7, 7.5, 3.9, 1.9, 4.8, 'BYE', 7.7, 5.6, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 5.7, 8.4, 6.5, 11.9, 8.7, 'BYE', 9.1, 8.2, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 5.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 24,
    "avg_fp2": 5.71,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 13.54,
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
    "headlineNews": "Dan Arnold caught 4-of-7 targets for 60 yards in the Jaguars' Week 9 win over the Bills.\n",
    "report": "",
    "analysis": "Arnold had a very nice catch along the sideline, although the throw actually came from C.J. Beathard, not Trevor Lawrence. Beathard's throw was a bizarre looking floater, so it's not like Beathard and Arnold showed a strong connection. Lawrence should have more success against the Colts in Week 10, which will make Arnold interesting as a low-end TE1 option. Arnold has led the Jaguars in receiving yards for two consecutive weeks.\n",
    "timestamp": "2021-11-08 12:20 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.6,
    "week02": 7.0,
    "week03": 3.3,
    "week04": 3.9,
    "week05": 7.4,
    "week06": 3.7,
    "week07": "BYE",
    "week08": 10.8,
    "week09": 8.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.6, 7.0, 3.3, 3.9, 7.4, 3.7, 'BYE', 10.8, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 2.7, 3.6, 4.4, 1.2, 4.9, 'BYE', 4.0, 4.2, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.0, 0.4, 3.7, 4.4, 3.2, 'BYE', 0.3, 7.5, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.0, 9.2, 2.8, 6.0, 7.3, 7.3, 'BYE', 5.4, 10.9, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 5.3,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 27,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.82,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Gerald Everett caught all three of his targets for 11 yards in the Seahawks' Week 7 loss to the Saints.\n",
    "report": "",
    "analysis": "He added 12 rushing yards on one attempt. It's clear Everett isn't a fantasy option outside of the deepest of tight end-premium fantasy leagues ahead of a Week 8 date with the Jaguars, especially with Geno Smith under center.\n",
    "timestamp": "2021-10-26 04:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.0,
    "week02": 0.8,
    "week03": 7.9,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.0,
    "week07": 3.8,
    "week08": 0.7,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.8, 7.9, 'DNP', 'DNP', 5.0, 3.8, 0.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 5.2, 'DNP', 'DNP', 3.8, 0.3, 6.0, 'BYE', 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.5, 1.4, 'DNP', 'DNP', 2.0, 1.7, 2.9, 'BYE', 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 9.5, 4.3, 'DNP', 'DNP', 6.0, 4.9, 5.3, 'BYE', 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2514206.png",
    "name": "Blake Bell",
    "depthchart": "Backup: TE-2",
    "team": "Kansas City Chiefs",
    "projected": 5.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 6,
    "avg_fp2": 0.69,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 13.88,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs signed TE Blake Bell, formerly of the Cowboys, to a one-year contract.\n",
    "report": "",
    "analysis": "The 'Belldozer' participated in Kansas City's Super Bowl LIV win over San Francisco before leaving to become\u00a0Dallas' primary blocking tight end. He made a career-high 15 appearances with the Cowboys, totaling 11 catches for 110 yards and seven first-down receptions.\n",
    "timestamp": "2021-03-18 04:11 PM",
    "source": "Gabe Ikard on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 1.0,
    "week02": 2.5,
    "week03": 1.1,
    "week04": 0.0,
    "week05": 0.9,
    "week06": "DNP",
    "week07": 0.0,
    "week08": 0.0,
    "week09": 0.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 2.5, 1.1, 0.0, 0.9, 'DNP', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 2.9, 1.6, 3.8, 4.5, 'DNP', 3.2, 1.6, 0.8, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.4, 0.0, 'DNP', 0.0, 0.0, 0.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.1, 4.9, 0.7, 1.5, 0.8, 'DNP', 1.8, 2.3, 1.9, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Las Vegas Raiders",
    "projected": 5.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 3.54,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 13.52,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Foster Moreau caught all six of his targets for 60 yards and a touchdown in the Raiders' Week 7 win over the Eagles.\n",
    "report": "",
    "analysis": "Moreau started for the Raiders with Darren Waller picking up an ankle injury late in the week. The third-year tight end picked up his ninth career touchdown on a red zone strike from Derek Carr. Despite being phased out of the offense after his rookie season, Moreau has popped up with the random red zone score four times over the past two years. He'll return to his limited role once Waller is back on the field but should provide serviceable TE2 production until then.\u00a0\n",
    "timestamp": "2021-10-24 11:29 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 0.0,
    "week02": 10.4,
    "week03": 1.3,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 1.6,
    "week07": 15.0,
    "week08": "BYE",
    "week09": 0.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.4, 1.3, 0.0, 0.0, 1.6, 15.0, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 1.9, 3.5, 2.7, 1.2, 0.9, 3.2, 'BYE', 2.0, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.8, 1.2, 1.4, 5.9, 0.3, 2.7, 'BYE', 1.4, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 9.1, 5.0, 4.4, 9.7, 4.5, 6.6, 'BYE', 4.0, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035115.png",
    "name": "Albert Okwuegbunam",
    "depthchart": "Backup: TE-2",
    "team": "Denver Broncos",
    "projected": 4.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 3.93,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 15.91,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Albert Okwuegbunam (knee) returned to Broncos practice on Thursday.\u00a0\n",
    "report": "",
    "analysis": "Noah Fant is returning from the COVID-19 list for Sunday's game against the Eagles, so Albert O will be an afterthought if he's active. It's still great news after\u00a0Okwuegbunam couldn't finish out Sunday's stunner over the Cowboys. Even when Fant is active,\u00a0Okwuegbunam sees a few high-value targets per week.\u00a0\n",
    "timestamp": "2021-11-11 08:03 PM",
    "source": "Ryan O'Halloran on Twitter ",
    "game_day_logo": "",
    "week01": 7.1,
    "week02": 4.4,
    "week03": 1.1,
    "week04": 1.6,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 4.9,
    "week09": 4.5,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.1, 4.4, 1.1, 1.6, 'DNP', 'DNP', 'DNP', 4.9, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 3.3, 1.0, 3.9, 'DNP', 'DNP', 'DNP', 3.6, 4.1, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 6.6, 1.1, 'DNP', 'DNP', 'DNP', 0.0, 1.4, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 7.9, 7.1, 1.2, 'DNP', 'DNP', 'DNP', 4.2, 4.4, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361411.png",
    "name": "Pat Freiermuth",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 4.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 17,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.66,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Pat Freiermuth caught 5-of-6 targets for 43 yards and two touchdowns in the Steelers' Week 9 win over the Bears.\n",
    "report": "",
    "analysis": "With Eric Ebron (hamstring) missing a second straight game, Freiermuth handled TE1 duties and caught both of Ben Roethlisberger's touchdowns via four- and 10-yard scores. Over the last two weeks, Freiermuth has nine catches for 77 yards and three touchdowns with Ebron out. Freiermuth deserves to keep the starting job even when Ebron returns to health. The Steelers host the lowly Lions in Week 10.\n",
    "timestamp": "2021-11-09 03:25 PM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 5.6, 9.7, 1.6, 1.7, 9.3, 'BYE', 12.4, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.3, 2.1, 2.8, 3.9, 2.6, 3.3, 'BYE', 2.7, 4.9, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.9, 0.0, 0.4, 'BYE', 2.0, 9.2, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 5.6, 6.6, 8.2, 4.5, 9.9, 'BYE', 9.7, 12.1, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 1,
    "avg_fp2": 3.12,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 11.2,
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
    "headlineNews": "Rob\u00a0Gronkowski (back) is out for Week 10.\u00a0\n",
    "report": "",
    "analysis": "Gronk probably won't be back to full health for another week or two, according to head coach Bruce Arians. O.J. Howard and Cameron Brate are borderline fantasy options this week against the Football Team with Gronkowski sidelined. Brate ran 28 pass routes to Howard's 16 in Week 8 against the Saints after Gronk exited early with back spasms. It's slightly easier to trust Howard, who has drawn a target on 19.4 percent of his routes this season. Brate has a meager 11.3 percent target per route rate.\u00a0\n",
    "timestamp": "2021-11-12 05:29 PM",
    "source": "Greg Auman on Twitter ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.6,
    "week03": 1.6,
    "week04": 0.0,
    "week05": 2.9,
    "week06": 13.9,
    "week07": 1.4,
    "week08": 2.6,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.6, 1.6, 0.0, 2.9, 13.9, 1.4, 2.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 1.8, 2.2, 0.5, 3.8, 3.7, 2.1, 1.1, 'BYE', 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.3, 13.6, 2.0, 10.2, 1.5, 3.1, 0.0, 'BYE', 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.9, 23.1, 8.3, 16.7, 8.2, 7.1, 6.7, 'BYE', 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 4.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 7.29,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 6.85,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Donald Parham caught all three of his targets for 39 yards in the Chargers' Week 9 win against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Parham ran a pass route on 34.8 percent of Justin Herbert's drop backs against Philadelphia. Jared Cook, meanwhile, ran a route on 53.4 percent of Herbert's drop backs and caught all four of his targets for 48 yards. The hyper-athletic Parham continues to play behind Cook. He hasn't seen more than three targets in a game this season.\u00a0\n",
    "timestamp": "2021-11-08 04:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 4.3,
    "week03": 3.7,
    "week04": 16.0,
    "week05": 3.4,
    "week06": 10.5,
    "week07": "BYE",
    "week08": 3.5,
    "week09": 8.8,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 4.3, 3.7, 16.0, 3.4, 10.5, 'BYE', 3.5, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 9.0, 6.9, 9.6, 7.0, 6.6, 'BYE', 6.4, 13.7, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 1.2, 8.4, 4.1, 4.2, 8.0, 'BYE', 4.5, 7.2, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 10.3, 13.3, 10.4, 10.7, 16.2, 'BYE', 11.4, 13.8, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915486.png",
    "name": "Tyler Conklin",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 4.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 11,
    "avg_fp2": 7.03,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 13.69,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Tyler\u00a0Conklin caught 5-of-7 targets for 45 yards in the Vikings' Week 9 loss to the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Conklin, a popular Week 9 streaming option, tied Adam Thielen for the team lead in targets and led the Vikings in receptions. Kirk Cousins tried to jam one into Conklin near the goal line in the second half but the ball was batted away by a Baltimore defender. Running plenty of pass routes and serving as the No. 3 option in the team's passing offense, Conklin will once again be a solid start in Week 10 against a Chargers defense that's been generous to enemy tight ends.\u00a0\n",
    "timestamp": "2021-11-07 09:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.1,
    "week02": 2.5,
    "week03": 16.5,
    "week04": 3.8,
    "week05": 3.5,
    "week06": 8.6,
    "week07": "BYE",
    "week08": 8.2,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 2.5, 16.5, 3.8, 3.5, 8.6, 'BYE', 8.2, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 3.2, 9.6, 8.2, 11.4, 5.6, 'BYE', 7.4, 4.8, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.2, 3.7, 3.2, 1.2, 0.8, 'BYE', 5.5, 5.3, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.9, 5.2, 5.2, 6.3, 2.5, 2.9, 'BYE', 10.0, 14.5, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 4.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 3.84,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.54,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jack Doyle caught a one-yard touchdown in the Colts' Week 9 win over the Jets.\u00a0\n",
    "report": "",
    "analysis": "Doyle's second quarter shovel pass score was one of two looks on the evening. He now has two touchdowns in five days after previously posting zero in 2021, but the scoring has come on four targets as Doyle has totaled 13 yards. He is further than ever from fantasy relevance heading into next week's divisional tilt with the Jaguars.\u00a0\n",
    "timestamp": "2021-11-05 04:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.6,
    "week02": 10.9,
    "week03": 1.5,
    "week04": 2.9,
    "week05": 0.9,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 8.2,
    "week09": 6.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 10.9, 1.5, 2.9, 0.9, 0.0, 0.0, 8.2, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 6.7, 5.3, 5.4, 4.1, 4.1, 2.0, 3.3, 5.8, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.1, 6.4, 3.1, 1.3, 1.5, 1.8, 0.0, 2.7, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.9, 12.2, 11.6, 4.0, 4.2, 4.9, 2.3, 8.3, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9614.png",
    "name": "Marcedes Lewis",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 4.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 1.74,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.78,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Marcedes Lewis caught his lone target for -1 yard in the Packers' Week 9 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Lewis won't have fantasy relevance in the Packers' post-Robert Tonyan offense. He can be left on waiver wires in all formats.\u00a0\n",
    "timestamp": "2021-11-08 03:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.4,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 1.2,
    "week05": 4.4,
    "week06": 2.7,
    "week07": 4.6,
    "week08": 0.0,
    "week09": 0.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 0.0, 0.0, 1.2, 4.4, 2.7, 4.6, 0.0, 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 1.2, 1.2, -0.0, 1.7, -0.5, 1.3, 1.3, 4.7, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.3, 4.1, 1.9, 1.0, 0.6, 0.9, 0.6, 2.6, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 8.7, 7.6, 4.3, 3.7, 4.0, 4.0, 4.9, 6.7, 4.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242392.png",
    "name": "Brock Wright",
    "depthchart": "Backup: TE-2",
    "team": "Detroit Lions",
    "projected": 4.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 22,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.55,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
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
    "week08": 0.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.0, 'BYE', 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.8, 'BYE', 4.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4198676.png",
    "name": "Adam Shaheen",
    "depthchart": "Backup: TE-2",
    "team": "Miami Dolphins",
    "projected": 4.2,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 23,
    "avg_fp2": 1.39,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 14.99,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins TE Adam Shaheen (COVID-19) is practicing in full for Week 2 against the Bills.\u00a0\n",
    "report": "",
    "analysis": "The Dolphins opened Week 1 in a 2TE set, but that did not include Mike Gesicki. Instead Durham Smythe (38 snaps) and Hunter Long (18 snaps) started the game. Gesicki managed just 21 snaps, one less than Albert Wilson. Shaheen will likely rotate in with Hunter Long as a secondary blocking tight end, but his presence is not good new for Gesicki, whose fantasy value already looked suspect.\u00a0\n",
    "timestamp": "2021-09-16 11:20 PM",
    "source": "Barry Jackson on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 2.5,
    "week06": "DNP",
    "week07": "DNP",
    "week08": 1.3,
    "week09": 1.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.0, 0.0, 2.5, 'DNP', 'DNP', 1.3, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.9, 1.4, -0.3, 2.9, 'DNP', 'DNP', 2.2, 1.5, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.4, 5.6, 0.0, 0.0, 'DNP', 'DNP', 4.4, 1.0, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.6, 7.9, 2.8, 3.3, 'DNP', 'DNP', 8.9, 5.0, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2511973.png",
    "name": "Eric Tomlinson",
    "depthchart": "Backup: TE-2",
    "team": "Baltimore Ravens",
    "projected": 4.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 8,
    "avg_fp2": 0.15,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 11.07,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens released TE Eric Tomlinson.\n",
    "report": "",
    "analysis": "Tomlinson was released by the Giants midway through the season but Baltimore quickly scooped him up to backfill their injured tight end room. He appeared in six games for them and earned two starts. The Ravens also waived/released\u00a0CB Davontae Harris, OLB Aaron Adeoye, TE Eli Wolf, P Johnny Townsend, DB Jordan Richards, OL Andre Smith, WR Michael Dereus, QB Kenji Bahar, WR Devin Gray, WR Siaosi Mariner, OL Michael Schofield, FB/TE Ben Mason, WR Deon Cain, TE Tony Poljan, DT Justin Ellis, DB Nigel Warrior, DE Chris Smith, K Jake Verity, RB Nate McCrary, QB Trace McSorley, DB Anthony Levine Sr., OLB Pernell McPhee, OL Adrian Ealy, OL Foster Sarell, WR Jaylon Moore, WR Binjimen Victor, DT Aaron Crawford, DT Jovan Swann, and ILB Otaro Alaka.\n",
    "timestamp": "2021-09-01 12:25 AM",
    "source": "Melissa Y. Kim on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 0.0,
    "week08": "BYE",
    "week09": 1.2,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 2.7, 1.2, 0.9, 3.0, 5.1, 2.9, 'BYE', 1.5, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.0, 0.0, 1.9, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.6, 3.1, 1.2, 3.3, 1.0, 1.2, 0.9, 'BYE', 0.8, 0.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2531358.png",
    "name": "Chris Manhertz",
    "depthchart": "Backup: TE-2",
    "team": "Jacksonville Jaguars",
    "projected": 4.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 24,
    "avg_fp2": 1.61,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 13.54,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars TE Luke Farrell caught 1-of-2 targets for six yards in the Jaguars' Week 2 loss to Denver.\u00a0\n",
    "report": "",
    "analysis": "It was Farrell -- a rookie out of Ohio State -- who replaced James\u00a0O'Shaughnessy (ankle) as Jacksonville's primary pass-catching tight end against the Broncos. Farrell ran 20 pass routes while fellow TE Chris Manhertz ran 11. At Ohio State, Farrell was used as a blocking tight end, managing just 12 receptions in his final 22 collegiate games. He could find himself on the field, running a bunch of routes in a Jags offense that will continually be forced into pass-heavy game scripts.\u00a0\n",
    "timestamp": "2021-09-20 01:01 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.7,
    "week02": 0.0,
    "week03": 0.0,
    "week04": "DNP",
    "week05": 0.0,
    "week06": 1.6,
    "week07": "BYE",
    "week08": "DNP",
    "week09": 1.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 0.0, 0.0, 'DNP', 0.0, 1.6, 'BYE', 'DNP', 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 0.8, 1.9, 'DNP', 0.4, 3.5, 'BYE', 'DNP', 2.8, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 5.8, 10.1, 'DNP', 0.5, 0.0, 'BYE', 'DNP', 6.2, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.5, 9.0, 11.7, 'DNP', 2.2, 0.9, 'BYE', 'DNP', 9.1, 1.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 4.1,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 3,
    "avg_fp2": 6.88,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 7.78,
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
    "headlineNews": "Tyler Higbee caught 5-of-10 targets for 51 yards in the Rams' Week 9 loss to the Titans.\n",
    "report": "",
    "analysis": "Higbee has had elite snap and route numbers this year, and he's had solid target totals too considering the state of the tight end position. Still, he hasn't put it together yet, which was the case again in Week 9. Higbee had the second-most targets on the team with 10, but he only turned that into five catches for 51 yards. The volume has mostly been there, but the production has not. Higbee is a low-end TE1 for Week 10 against San Francisco.\n",
    "timestamp": "2021-11-08 04:53 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 9.3,
    "week02": 1.3,
    "week03": 12.5,
    "week04": 5.6,
    "week05": 8.4,
    "week06": 6.1,
    "week07": 7.1,
    "week08": 4.0,
    "week09": 7.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4, 6.1, 7.1, 4.0, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0, 8.1, 17.4, 7.3, 4.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5, 1.4, 4.0, 1.2, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8, 11.3, 7.5, 9.7, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912092.png",
    "name": "Donald Parham",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Chargers",
    "projected": 3.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 4.55,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 6.85,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Donald Parham caught all three of his targets for 39 yards in the Chargers' Week 9 win against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Parham ran a pass route on 34.8 percent of Justin Herbert's drop backs against Philadelphia. Jared Cook, meanwhile, ran a route on 53.4 percent of Herbert's drop backs and caught all four of his targets for 48 yards. The hyper-athletic Parham continues to play behind Cook. He hasn't seen more than three targets in a game this season.\u00a0\n",
    "timestamp": "2021-11-08 04:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 2.4,
    "week04": 8.7,
    "week05": 11.9,
    "week06": 2.0,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 11.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 2.4, 8.7, 11.9, 2.0, 'BYE', 0.0, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 2.1, 1.3, 3.4, 2.9, 3.8, 'BYE', 3.1, 2.7, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 2.1, 1.2, 1.5, 0.0, 'BYE', 3.0, 6.5, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.8, 4.5, 8.6, 2.8, 3.5, 7.8, 'BYE', 8.9, 9.9, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2998565.png",
    "name": "Mo Alie-Cox",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 3.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 18,
    "avg_fp2": 5.72,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.54,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Mo Alie-Cox caught a 28-yard pass in the Colts' Week 9 win over the Jets.\u00a0\n",
    "report": "",
    "analysis": "Alie-Cox's fourth quarter catch and run on a Carson Wentz play fake was his only target of the evening. Alie-Cox now has one grab on five looks over his past two contests. The mountainous seam stretcher looks dangerous every time he touches the ball, but he has posted north of 30 yards two times in 2021. Alie-Cox's TE2 light is flickering ahead of next week's admittedly-appetizing date with the Jaguars.\u00a0\n",
    "timestamp": "2021-11-05 04:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.3,
    "week03": 2.4,
    "week04": 17.7,
    "week05": 6.5,
    "week06": 9.3,
    "week07": 10.0,
    "week08": 0.0,
    "week09": 3.3,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.3, 2.4, 17.7, 6.5, 9.3, 10.0, 0.0, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.9, 1.8, 1.2, 5.4, 6.6, 2.4, 5.6, 2.6, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.1, 2.3, 4.8, 4.4, 0.7, 2.2, 0.7, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 6.5, 2.4, 6.2, 7.4, 7.2, 3.8, 6.4, 4.5, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 3.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 4.2,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.0,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "NESN's Zack Cox said Jonnu Smith could be used as a running back in Week 10 against the Browns if\u00a0Rhamondre Stevenson (concussion) and Damien Harris (concussion) are inactive.\u00a0\n",
    "report": "",
    "analysis": "Cox suggested Smith -- who has ten rushing attempts with the Titans from 2018 to 2020 -- could get some backfield action if the Patriots are shorthanded against Cleveland. He's been used on a few jets sweeps in the Patriots offense through nine weeks -- none of which resulted in a gain of more than six yards. The Patriots are prone to backfield creativity as we saw in 2018 when Cordarrelle Patterson transitioned to running back for a few games while Sony Michel was sidelined with an injury. A few carries might make Smith fantasy viable in deep formats if Stevenson and Harris are out against the Browns. Stevenson is expected to practice Friday.\u00a0\n",
    "timestamp": "2021-11-12 02:13 PM",
    "source": "NESN.com",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.8, 0.9, 8.9, 4.2, 1.4, 6.7, 2.3, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 5.4, 4.7, 5.1, 5.1, 4.0, 4.8, 4.1, 3.2, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.8, 7.2, 3.6, 8.4, 0.1, 2.5, 0.9, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 8.6, 5.2, 13.6, 6.8, 13.5, 4.3, 6.4, 5.4, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 3.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 2.21,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 5.96,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Ian Thomas caught 1-of-2 targets for 41 yards in the Panthers' Week 6 loss to the Vikings.\u00a0\n",
    "report": "",
    "analysis": "Thomas has now topped 40 yards in back-to-back games, but there is little reason to chase this production, especially with\u00a0Tommy Tremble also garnering looks. D.J. Moore and Robby Anderson are the only fantasy-worthy pass catchers on this roster.\u00a0\n",
    "timestamp": "2021-10-18 03:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 1.2,
    "week03": 0.0,
    "week04": 3.0,
    "week05": 6.0,
    "week06": 4.6,
    "week07": 0.0,
    "week08": 1.5,
    "week09": 1.4,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 1.2, 0.0, 3.0, 6.0, 4.6, 0.0, 1.5, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.6, 4.8, 4.9, 4.4, 3.6, 4.8, 5.8, 1.2, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.4, 0.9, 4.9, 2.2, 1.6, 5.1, 2.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 7.5, 7.0, 6.5, 9.8, 3.5, 3.1, 9.5, 3.8, 3.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3914151.png",
    "name": "Josiah Deguara",
    "depthchart": "Backup: TE-2",
    "team": "Green Bay Packers",
    "projected": 3.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 22,
    "avg_fp2": 0.93,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.78,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Josiah Deguara caught both his targets for 16 yards in the Packers' Week 9 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Deguara figures to function as the team's primary pass-catching tight end after Robert Tonyan (knee) was lost for the season. It wasn't exactly a fair measurement of\u00a0Deguara's fantasy usefulness with Aaron Rodgers (COVID-19) sidelined.\u00a0Deguara could have some streaming appeal in Week 10 against Seattle.\u00a0\n",
    "timestamp": "2021-11-08 03:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.9,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.9,
    "week07": 0.0,
    "week08": 3.0,
    "week09": 2.6,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.9, 0.0, 0.0, 0.9, 0.0, 3.0, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, -0.3, 1.0, -0.8, 0.4, 0.5, 4.6, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 0.3, 0.0, 0.5, 1.1, 0.0, 0.2, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 4.2, 1.7, 1.5, 1.3, 1.1, 0.3, 2.3, 2.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051806.png",
    "name": "Ricky Seals-Jones",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 3.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 5.25,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.89,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "NFL Network's Tom Pelissero reports Washington TE Logan Thomas (hamstring) will return to practice after the team's Week 9 bye.\n",
    "report": "",
    "analysis": "Thomas' four-week timeline aligns perfectly for his activation in Week 10 against the Bucs. With Ricky Seals-Jones logging 100% of snaps over Washington's last three games, it's possible OC Scott Turner opts for more 12 personnel with Thomas rather than attempting to find a third viable receiver among the team's group of non-impact players. Thomas returns as a fringe-TE1 the moment he's activated.\n",
    "timestamp": "2021-11-02 08:57 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 8.4,
    "week03": 0.0,
    "week04": 2.9,
    "week05": 6.6,
    "week06": 13.8,
    "week07": 8.1,
    "week08": 2.2,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.4, 0.0, 2.9, 6.6, 13.8, 8.1, 2.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 2.4, 1.0, 1.3, 3.0, 9.2, 1.6, 4.4, 'BYE', 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.3, 0.0, 0.8, 1.7, 5.9, 6.0, 0.0, 0.0, 'BYE', 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 9.6, 4.0, 4.6, 13.7, 13.2, 3.4, 3.6, 'BYE', 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046704.png",
    "name": "Geoff Swaim",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 3.2,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 3.33,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.69,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Geoff Swaim caught 4-of-5 targets for 23 yards and a touchdown in the Titans' Week 8 overtime win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "Both Swaim and MyCole Pruitt out-produced Anthony Firkser, who has been DOA in fantasy this year. Of course, coming into this afternoon, Swaim had seven catches all year. This tight end group is not going to produce value, re-draft, DFS, or otherwise.\u00a0\n",
    "timestamp": "2021-10-31 10:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.0,
    "week03": 4.2,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 1.3,
    "week07": 1.3,
    "week08": 10.3,
    "week09": 10.9,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 4.2, 0.0, 0.0, 1.3, 1.3, 10.3, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.5, 2.2, 2.2, 1.5, 1.6, 1.0, 2.0, 5.9, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 5.3, 5.4, 0.4, 1.7, 1.2, 0.5, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.3, 5.2, 0.8, 8.7, 6.9, 3.2, 3.8, 2.7, 2.4, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049698.png",
    "name": "Anthony Firkser",
    "depthchart": "Backup: TE-2",
    "team": "Tennessee Titans",
    "projected": 3.0,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 26,
    "avg_fp2": 2.5,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.69,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Anthony Firkser caught his only target for nine yards in the Titans' Week 7 win over the Chiefs.\n",
    "report": "",
    "analysis": "Firkser has 11 catches on the season and isn't a fantasy option despite the offseason hype. He's splitting reps with Geoff Swaim and MyCole Pruitt, who caught a five-yard score in this one.\n",
    "timestamp": "2021-10-24 08:30 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.8,
    "week05": 4.8,
    "week06": 1.6,
    "week07": 1.4,
    "week08": 1.3,
    "week09": 1.2,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 'DNP', 'DNP', 3.8, 4.8, 1.6, 1.4, 1.3, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 'DNP', 'DNP', 6.4, 9.3, 9.0, 10.4, 4.8, 1.8, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 2.9, 3.8, 0.2, 0.0, 4.8, 6.1, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 'DNP', 'DNP', 4.6, 4.8, 6.9, 7.5, 6.7, 8.7, 4.3]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917232.png",
    "name": "Tyler Bass",
    "depthchart": "Starter: K-1",
    "team": "Buffalo Bills",
    "projected": 11.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Pos": 2,
    "avg_fp2": 10.5,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 12.0,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 5.0, 14.0, 16.0, 8.0, 13.0, 'BYE', 10.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.8, 12.5, 8.1, 8.9, 8.7, 'BYE', 10.9, 10.2, 11.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 8.1, 9.0, 7.1, 3.5, 9.2, 'BYE', 9.4, 12.4, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.0, 11.0, 12.1, 13.6, 13.6, 'BYE', 15.1, 17.6, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15683.png",
    "name": "Justin Tucker",
    "depthchart": "Starter: K-1",
    "team": "Baltimore Ravens",
    "projected": 10.6,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Pos": 6,
    "avg_fp2": 9.88,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 10.78,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Justin Tucker made four of five field goals in the Ravens' Week 3 win against the Lions, including a record-setting 66-yard field goal.\u00a0\n",
    "report": "",
    "analysis": "Tucker crushed the 66-yarder as time expired -- the ball bounced off the crossbar and fell through for the win. Tucker's heroics saved the Ravens on a day that saw Marquise Brown drop three touchdowns and Baltimore struggle to get anything going on the ground against a middling Detroit front seven. Tucker has made all 16 of his field goal tries in the final minute of the game over his nine seasons in Baltimore. Tucker doesn't have the fantasy upside he had with the Flacco-era Ravens, but he's still an every-week play in 12-team formats.\u00a0\n",
    "timestamp": "2021-09-26 08:23 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 11.0,
    "week02": 7.0,
    "week03": 17.0,
    "week04": 13.0,
    "week05": 3.0,
    "week06": 12.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": 10.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 17.0, 13.0, 3.0, 12.0, 6.0, 'BYE', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 9.1, 8.6, 6.0, 8.6, 9.5, 8.4, 'BYE', 9.8, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.2, 9.0, 2.3, 5.0, 6.9, 7.1, 'BYE', 10.0, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.2, 14.9, 7.1, 12.4, 9.9, 11.7, 'BYE', 14.4, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3975763.png",
    "name": "Greg Joseph",
    "depthchart": "Starter: K-1",
    "team": "Minnesota Vikings",
    "projected": 9.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Pos": 3,
    "avg_fp2": 10.12,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 9.12,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings signed K\u00a0Greg Joseph.\u00a0\n",
    "report": "",
    "analysis": "Waived by the Titans in September, Joseph spent most of the year on the Super Bowl champion Bucs' practice squad. It is conceivable he will challenge/replace Dan Bailey, who has been the bane of coach Mike Zimmer's existence since arriving in Minnesota. Bailey has converted under 80 percent of his field goal attempts since arriving in Minneapolis after he was near 90 in Dallas.\u00a0\n",
    "timestamp": "2021-02-09 09:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.0,
    "week02": 13.0,
    "week03": 13.0,
    "week04": 1.0,
    "week05": 17.0,
    "week06": 10.0,
    "week07": "BYE",
    "week08": 12.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 13.0, 1.0, 17.0, 10.0, 'BYE', 12.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 8.0, 10.0, 7.5, 9.7, 6.0, 'BYE', 7.7, 8.2, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 6.0, 7.1, 9.6, 4.9, 7.2, 'BYE', 3.2, 4.4, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 8.7, 8.2, 14.2, 8.9, 15.5, 'BYE', 9.7, 11.4, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17372.png",
    "name": "Chris Boswell",
    "depthchart": "Starter: K-1",
    "team": "Pittsburgh Steelers",
    "projected": 9.5,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 9,
    "avg_fp2": 9.12,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.88,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 7.0, 4.0, 7.0, 11.0, 13.0, 'BYE', 3.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.2, 8.1, 7.4, 5.2, 9.2, 'BYE', 6.3, 9.3, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 8.5, 5.5, 7.5, 6.7, 'BYE', 7.6, 9.2, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 13.1, 11.3, 8.4, 10.9, 11.2, 'BYE', 11.2, 12.3, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123052.png",
    "name": "Michael Badgley",
    "depthchart": "Starter: K-1",
    "team": "Indianapolis Colts",
    "projected": 9.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 14,
    "avg_fp2": 8.07,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 8.62,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts signed K Mike Badgley to the practice squad.\n",
    "report": "",
    "analysis": "Badgley is insurance should Rodrigo Blankenship need to miss this week's game against the Texans with his hip injury that clearly hampered him this past Monday night against the Ravens.\n",
    "timestamp": "2021-10-14 04:42 AM",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15965.png",
    "name": "Dustin Hopkins",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Chargers",
    "projected": 9.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 25,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 9.75,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers signed K Dustin Hopkins.\n",
    "report": "",
    "analysis": "The Chargers\u2019 kicking woes this season have been evident, most notably when they forwent a potential game-winning field goal attempt against the Chiefs to go for it on 4th-and-8. Hopkins looks to solve that problem. The veteran kicker converted 12-of-14 field goals and 10-of-12 extra points across six games for Washington this season. Los Angeles waived K Tristan Vizcaino in a corresponding move.\n",
    "timestamp": "2021-10-26 10:37 PM",
    "source": "Los Angeles Chargers on Twitter",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 14.0,
    "week03": 3.0,
    "week04": 4.0,
    "week05": 11.0,
    "week06": 10.0,
    "week07": "BYE",
    "week08": 7.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 14.0, 3.0, 4.0, 11.0, 10.0, 'BYE', 7.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 9.0, 8.6, 7.7, 7.9, 8.1, 'BYE', 7.9, 6.6, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 4.6, 6.2, 4.5, 6.5, 6.0, 'BYE', 5.5, 4.1, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 12.4, 9.3, 6.5, 9.7, 8.8, 'BYE', 7.6, 7.3, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    "name": "Nick Folk",
    "depthchart": "Starter: K-1",
    "team": "New England Patriots",
    "projected": 9.1,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 10.44,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.33,
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
    "headlineNews": "Nick Folk (knee) was limited at Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "Folk, third in the league in field goal attempts through six weeks, was listed on New England's injury report with a left knee issue. His status is worth monitoring ahead of a superb Week 7 matchup against the Jets, who have allowed 3.2 field goal tries per game this season.\u00a0\n",
    "timestamp": "2021-10-21 01:05 AM",
    "source": "Patriots.com ",
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 15.0, 8.0, 5.0, 17.0, 3.0, 14.0, 15.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 9.8, 9.8, 11.1, 9.3, 9.0, 12.5, 10.1, 9.5, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.2, 6.4, 5.9, 7.7, 6.3, 4.0, 5.8, 8.1, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 12.1, 10.4, 8.8, 13.9, 9.1, 9.8, 9.7, 12.3, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051909.png",
    "name": "Daniel Carlson",
    "depthchart": "Starter: K-1",
    "team": "Las Vegas Raiders",
    "projected": 8.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 3,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.78,
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
    "headlineNews": "Raiders re-signed K\u00a0Daniel Carlson to a one-year, $3.384 million contract.\u00a0\n",
    "report": "",
    "analysis": "This is Carlson officially signing his second round restricted free agent tender. Carlson converted 94.3 percent of his 2020 field goal attempts after he was a far worse 73.1 percent in 2019. Carlson was 4-of-4 beyond 50 yards last season as he quietly finished as fantasy's fourth highest scoring kicker thanks largely to the NFL's seventh most attempts. He'll likely be overdrafted in seasonal leagues this season. Coach Jon Gruden evidently believes the 26-year-old is his \"kicker of the future.\"\u00a0\n",
    "timestamp": "2021-04-29 09:40 PM",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 11.0,
    "week02": 17.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 3.0,
    "week06": 12.0,
    "week07": 9.0,
    "week08": "BYE",
    "week09": 10.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 17.0, 13.0, 2.0, 3.0, 12.0, 9.0, 'BYE', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.2, 10.6, 11.7, 11.1, 7.4, 8.4, 'BYE', 8.7, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 11.7, 9.4, 10.2, 6.0, 9.7, 'BYE', 6.8, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 10.8, 13.2, 12.6, 12.6, 8.5, 12.0, 'BYE', 9.4, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10636.png",
    "name": "Mason Crosby",
    "depthchart": "Starter: K-1",
    "team": "Green Bay Packers",
    "projected": 8.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 16,
    "avg_fp2": 7.56,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.86,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers head coach Matt\u00a0LaFleur said he's not sure if Mason Crosby will play this week against the Vikings.\u00a0\n",
    "report": "",
    "analysis": "Crosby, who missed practice on Wednesday and Thursday, did some kicking indoors Friday. Fantasy managers should look elsewhere for a Week 8 kicker option.\u00a0\n",
    "timestamp": "2020-10-30 06:56 PM",
    "source": "Matt Schneidman on Twitter ",
    "game_day_logo": "",
    "week01": 3.0,
    "week02": 5.0,
    "week03": 16.0,
    "week04": 9.0,
    "week05": 16.0,
    "week06": 6.0,
    "week07": 6.0,
    "week08": 6.0,
    "week09": 1.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 16.0, 9.0, 16.0, 6.0, 6.0, 6.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.0, 5.0, 11.3, 7.1, 9.0, 10.8, 7.2, 8.0, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 4.6, 6.2, 10.8, 6.1, 8.2, 7.5, 5.6, 6.8, 7.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.8, 10.4, 13.4, 10.3, 12.3, 11.6, 9.9, 9.7, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11122.png",
    "name": "Matt Prater",
    "depthchart": "Starter: K-1",
    "team": "Arizona Cardinals",
    "projected": 8.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 16,
    "avg_fp2": 8.78,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 6.89,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.0, 7.0, 15.0, 5.0, 15.0, 7.0, 3.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.1, 10.8, 7.5, 9.1, 6.6, 10.5, 7.7, 7.8, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 10.4, 6.8, 7.1, 6.9, 8.2, 5.8, 7.2, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 12.8, 13.3, 10.8, 11.7, 10.7, 15.4, 11.3, 11.8, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3150744.png",
    "name": "Chase McLaughlin",
    "depthchart": "Starter: K-1",
    "team": "Cleveland Browns",
    "projected": 8.3,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 8.0,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 7.0,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns K Chase McLaughlin (hamstring) is questionable for Week 1 against the Chiefs.\n",
    "report": "",
    "analysis": "McLaughlin practiced in full on Friday but still made Cleveland's injury report as a last-minute add. As it stands,\u00a0Chris Naggar is the only other available option for the team on\u00a0their\u00a0practice squad.\u00a0McLaughlin is expected to play but should still be monitored by managers up to kick-off.\n",
    "timestamp": "2021-09-10 07:21 PM",
    "source": "Scott Petrak on Twitter",
    "game_day_logo": "",
    "week01": 3.0,
    "week02": 7.0,
    "week03": 19.0,
    "week04": 9.0,
    "week05": 10.0,
    "week06": 2.0,
    "week07": 7.0,
    "week08": 4.0,
    "week09": 11.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 7.0, 19.0, 9.0, 10.0, 2.0, 7.0, 4.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.0, 8.1, 9.2, 8.5, 8.3, 7.7, 9.5, 8.2, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 5.1, 5.6, 5.2, 4.4, 7.9, 6.5, 5.9, 3.8, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 11.9, 11.5, 11.2, 9.6, 8.9, 12.0, 9.6, 10.7, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15091.png",
    "name": "Randy Bullock",
    "depthchart": "Starter: K-1",
    "team": "Tennessee Titans",
    "projected": 8.2,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 14,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 7.12,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans promoted K\u00a0Randy Bullock to the active roster.\n",
    "report": "",
    "analysis": "Tennessee cut Marvin Badgley after he missed 1-of-2 extra points and his only field goal in Week 1. They'll turn to Bullock as their starting kicker for the foreseeable future. The 31-year-old played 12 games for the Bengals last season and made 21-of-26 field goals and 24-of-25 extra points. The Titans' offense looked dreadful in Week 1, but they have another projected shootout coming up against Seattle.\n",
    "timestamp": "2021-09-14 10:58 PM",
    "source": "John Glennon on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 15.0,
    "week03": 5.0,
    "week04": 12.0,
    "week05": 7.0,
    "week06": 11.0,
    "week07": 11.0,
    "week08": 12.0,
    "week09": 4.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 15.0, 5.0, 12.0, 7.0, 11.0, 11.0, 12.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.8, 8.0, 12.8, 10.2, 7.3, 9.2, 7.6, 8.5, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.3, 3.3, 8.3, 9.2, 6.9, 3.7, 4.1, 7.2, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.7, 7.3, 10.4, 12.7, 10.9, 7.3, 8.3, 10.7, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049899.png",
    "name": "Younghoe Koo",
    "depthchart": "Starter: K-1",
    "team": "Atlanta Falcons",
    "projected": 8.1,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 11,
    "avg_fp2": 8.12,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.0,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons released K\u00a0Elliott Fry.\u00a0\n",
    "report": "",
    "analysis": "That leaves Younghoe Koo, everyone's favorite fantasy kicker, as the only kicker on Atlanta's roster. Fry played one game for the Falcons and spent the entire 2020 season on the team's practice squad.\u00a0\n",
    "timestamp": "2021-05-11 03:32 PM",
    "source": "ProFootballTalk.com ",
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": 11.0,
    "week06": "BYE",
    "week07": 12.0,
    "week08": 10.0,
    "week09": 9.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 5.0, 6.0, 6.0, 11.0, 'BYE', 12.0, 10.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 7.4, 10.1, 11.8, 9.8, 'BYE', 8.5, 8.4, 7.7, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 4.5, 2.0, 7.1, 3.9, 'BYE', 3.6, 4.3, 10.1, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.7, 3.5, 10.8, 7.7, 'BYE', 7.8, 9.4, 15.9, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 8.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 7,
    "avg_fp2": 9.67,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 7.5,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 12.0,
    "week02": 9.0,
    "week03": 11.0,
    "week04": 9.0,
    "week05": 9.0,
    "week06": 8.0,
    "week07": 9.0,
    "week08": 8.0,
    "week09": 12.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0, 9.0, 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5, 9.8, 9.2, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3, 7.9, 9.1, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5, 10.0, 11.7, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3055899.png",
    "name": "Harrison Butker",
    "depthchart": "Starter: K-1",
    "team": "Kansas City Chiefs",
    "projected": 7.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 22,
    "avg_fp2": 7.44,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 7.75,
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
    "headlineNews": "Chiefs signed K Harrison Butker to a five-year contract.\n",
    "report": "",
    "analysis": "Per NFL.com's Ian Rapoport, the deal is worth \"roughly\" $20 million. Butker had been set to play on his exclusive rights free agent tag. Plucked off the Panthers' practice squad in Sept. 2017, Butker has made 90 percent of his field-goal attempts for the Chiefs. He has also drained 6-of-9 attempts from 50-plus yards.\n",
    "timestamp": "2019-06-13 11:29 PM",
    "source": "Field Yates on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 10.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": 10.0,
    "week06": 9.0,
    "week07": 4.0,
    "week08": 8.0,
    "week09": 9.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0, 10.0, 9.0, 4.0, 8.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7, 7.9, 8.0, 6.1, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2, 6.0, 6.9, 6.8, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9, 8.4, 11.3, 8.8, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124084.png",
    "name": "Joey Slye",
    "depthchart": "Starter: K-1",
    "team": "Washington Football Team",
    "projected": 7.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 8,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.88,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington signed K\u00a0Joey Slye.\u00a0\n",
    "report": "",
    "analysis": "Slye's 2021 world tour will continue in Washington. Waived by Carolina in August, Slye caught on with he Texans in September and played for the 49ers in October, filling in for injured starters at both stops. The Football Team released Chris Blewitt and will roll with Slye -- for now. Slye, who's hit seven of eight field goal attempts and two of four extra points, won't have much fantasy value on a bad Football Team.\u00a0\n",
    "timestamp": "2021-11-09 02:40 PM",
    "source": "Ben Standig on Twitter ",
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 3.0,
    "week03": 5.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 8.0,
    "week08": 16.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 3.0, 5.0, 'DNP', 'DNP', 'DNP', 8.0, 16.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.6, 5.3, 'DNP', 'DNP', 'DNP', 5.7, 6.5, 'BYE', 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.3, 7.2, 'DNP', 'DNP', 'DNP', 4.4, 5.5, 'BYE', 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.3, 10.7, 'DNP', 'DNP', 'DNP', 9.4, 10.2, 'BYE', 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 24,
    "avg_fp2": 7.38,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 9.25,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 6.0, 6.0, 15.0, 10.0, 4.0, 8.0, 3.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 8.6, 6.5, 6.7, 10.1, 8.8, 8.1, 8.2, 'BYE', 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 3.9, 3.8, 7.9, 5.4, 6.5, 6.2, 7.5, 'BYE', 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.1, 7.5, 11.0, 8.7, 9.8, 9.9, 12.3, 'BYE', 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046184.png",
    "name": "Brian Johnson",
    "depthchart": "Starter: K-1",
    "team": "New Orleans Saints",
    "projected": 7.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 28,
    "avg_fp2": 9.33,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 7.89,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints K\u00a0Wil Lutz (groin) said he had a setback in his rehab and will miss the rest of the 2021 season.\u00a0\n",
    "report": "",
    "analysis": "Lutz made the announcement Tuesday morning on Twitter. The veteran was designated to return from a groin injury that had kept him sidelined for the season's first six weeks, but wasn't able to suit up Monday night against the Seahawks. Brian Johnson -- who is, for now, the Saints' kicker -- made both of his field goal tries and an extra point in New Orleans' win over Seattle. The Saints have the fewest field goal attempts of any team (6) through Week 7.\u00a0A top fantasy option for much of the Drew Brees era in New Orleans, Lutz won't kick again until 2022.\u00a0\n",
    "timestamp": "2021-10-26 03:01 PM",
    "source": "Wil Lutz on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 12.0,
    "week09": 9.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 12.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 6.5, 7.4, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 3.3, 3.5, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 9.8, 9.7, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png",
    "name": "Matt Ammendola",
    "depthchart": "Starter: K-1",
    "team": "New York Jets",
    "projected": 7.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neg": 25,
    "avg_fp2": 4.62,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.5,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 6.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 7.0,
    "week06": "BYE",
    "week07": 1.0,
    "week08": 8.0,
    "week09": 6.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 6.0, 0.0, 9.0, 7.0, 'BYE', 1.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.7, 2.6, 6.6, 4.9, 'BYE', 6.9, 6.6, 6.2, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 0.0, 1.1, 1.8, 2.7, 'BYE', 3.8, 0.7, 0.0, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 4.0, 6.6, 5.9, 8.6, 'BYE', 10.8, 8.2, 5.8, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043234.png",
    "name": "Zane Gonzalez",
    "depthchart": "Starter: K-1",
    "team": "Carolina Panthers",
    "projected": 7.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 7,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 5.22,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers signed K Zane Gonzalez.\n",
    "report": "",
    "analysis": "Gonzalez most recently reverted to Detroit's practice squad after losing the team's competition with Randy Bullock; 'with', not 'to' since Detroit cut them both. Gonzalez converted 16-of-22 field goals for the Cardinals last year before suffering a season-ending\u00a0back injury.\n",
    "timestamp": "2021-09-14 06:17 PM",
    "source": "David Newton on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 9.0,
    "week03": 6.0,
    "week04": 4.0,
    "week05": 14.0,
    "week06": 9.0,
    "week07": 4.0,
    "week08": 17.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 6.0, 4.0, 14.0, 9.0, 4.0, 17.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.8, 6.7, 7.6, 7.4, 8.8, 8.3, 7.0, 8.0, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.4, 3.7, 6.5, 4.0, 9.8, 6.3, 5.4, 5.8, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.6, 7.9, 10.8, 8.0, 13.6, 9.3, 8.9, 8.5, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9354.png",
    "name": "Robbie Gould",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 7.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 7.25,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 7.11,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 14.0,
    "week02": 6.0,
    "week03": 4.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 5.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 4.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 11.0, 8.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.2, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.0, 6.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.6, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 9.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.1, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16339.png",
    "name": "Brandon McManus",
    "depthchart": "Starter: K-1",
    "team": "Denver Broncos",
    "projected": 6.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 10,
    "avg_fp2": 8.11,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 6.33,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos activated K Brandon McManus from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "McManus is back with the team after sitting out Week 15. With\u00a0McManus cleared,\u00a0Taylor Russolino will revert to the practice squad.\u00a0\n",
    "timestamp": "2020-12-23 03:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.0,
    "week02": 13.0,
    "week03": 16.0,
    "week04": 1.0,
    "week05": 7.0,
    "week06": 6.0,
    "week07": 2.0,
    "week08": 6.0,
    "week09": 13.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 13.0, 16.0, 1.0, 7.0, 6.0, 2.0, 6.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.4, 13.4, 9.8, 10.4, 9.7, 6.8, 7.4, 7.5, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 4.4, 7.8, 9.4, 7.2, 4.4, 4.1, 7.3, 8.1, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.3, 9.1, 11.3, 10.7, 7.1, 8.0, 10.9, 10.8, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050478.png",
    "name": "Jake Elliott",
    "depthchart": "Starter: K-1",
    "team": "Philadelphia Eagles",
    "projected": 6.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 22,
    "avg_fp2": 6.78,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.67,
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
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 4.0, 3.0, 12.0, 9.0, 2.0, 2.0, 16.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 9.5, 7.5, 5.7, 6.2, 8.4, 8.0, 9.4, 9.4, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 3.9, 4.8, 7.6, 6.6, 4.5, 5.9, 6.0, 1.8, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 10.6, 6.2, 10.2, 8.8, 6.8, 9.5, 9.4, 6.5, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128444.png",
    "name": "Matthew Wright",
    "depthchart": "Starter: K-1",
    "team": "Jacksonville Jaguars",
    "projected": 5.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 6.4,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 6.11,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars released K Josh Lambo.\u00a0\n",
    "report": "",
    "analysis": "The Jaguars had little choice but to cut ties with their kicker of five seasons. Lambo had whiffed on all three of his field goal attempts and two extra points this season. He was inactive in Week 5 against the Dolphins and backup kicker Matthew Wright drilled all three of his field goal tries, including a game-winning kick that temporarily relieved Urban Meyer's suffering. Lambo was once among the league's most accurate kickers, making 71 of his 75 field goal tries (94.6 percent) from 2017 to 2019. Wright shouldn't be considered a reliable fantasy option on a Jacksonville team that generates almost no positive game script. Lambo, meanwhile, has a good shot of landing on another team as a fill-in kicker.\u00a0\n",
    "timestamp": "2021-10-19 02:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.0,
    "week05": "DNP",
    "week06": 16.0,
    "week07": "BYE",
    "week08": 1.0,
    "week09": 11.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.0, 'DNP', 16.0, 'BYE', 1.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.9, 'DNP', 6.1, 'BYE', 7.2, 5.8, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 'DNP', 5.1, 'BYE', 13.7, 4.0, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 8.7, 'DNP', 5.1, 'BYE', 13.7, 15.4, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2473037.png",
    "name": "Jason Myers",
    "depthchart": "Starter: K-1",
    "team": "Seattle Seahawks",
    "projected": 5.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 27,
    "avg_fp2": 6.12,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 5.22,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks agreed to terms with K Jason Myers, formerly of the Jets, on a four-year contract.\n",
    "report": "",
    "analysis": "Myers spent last summer with the Seahawks before being cut in August.  He latched on with the Jets and beat out Taylor Bertolet for the job.  Myers went on to hit 33-of-36 field goals and 30-of-33 extra points en route to a Pro Bowl selection.  His 91.7% success rate on field goals is nearly seven percentage points higher than his career average.  Myers will replaces Sebastian Janikowski in Seattle and be paid as one of the league's premier kickers.\n",
    "timestamp": "2019-03-13 09:52 PM",
    "source": "Dianna Russini",
    "game_day_logo": "",
    "week01": 4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 4.0,
    "week05": 5.0,
    "week06": 10.0,
    "week07": 6.0,
    "week08": 7.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 6.0, 7.0, 4.0, 5.0, 10.0, 6.0, 7.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 8.7, 8.9, 7.2, 7.8, 7.8, 8.5, 7.4, 'BYE', 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 9.9, 8.8, 8.0, 7.4, 9.2, 7.5, 'BYE', 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.6, 11.9, 10.8, 10.5, 9.6, 12.0, 11.1, 'BYE', 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124679.png",
    "name": "Jason Sanders",
    "depthchart": "Starter: K-1",
    "team": "Miami Dolphins",
    "projected": 5.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 28,
    "avg_fp2": 5.56,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 6.43,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins signed kicker Jason Sanders to a five-year contract extension worth $22 million.\u00a0\n",
    "report": "",
    "analysis": "Fantasy football's No. 2 kicker in 2020 is cashing in on a profoundly efficient season in which he made 36 of 39 field goal attempts, banging through all 36 of his extra point tries. He established himself as one of the league's big-footed kickers by nailing eight of nine kickers over 50 yards. Sanders' extension includes a $10 million guarantee. His 2020 numbers stand in stark contrast to his 2019 stats, which include seven missed field goals on 30 attempts. Only the Cowboys and Falcons attempted more field goals than Miami in 2020, giving Sanders the opportunity necessary to become a waiver wire darling in fantasy. Sanders will probably be one of the most over-drafted kickers in fantasy football next season.\u00a0\n",
    "timestamp": "2021-02-16 05:06 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 6.0,
    "week02": 0.0,
    "week03": 11.0,
    "week04": 5.0,
    "week05": 5.0,
    "week06": 8.0,
    "week07": 4.0,
    "week08": 5.0,
    "week09": 6.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 11.0, 5.0, 5.0, 8.0, 4.0, 5.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.1, 6.3, 5.1, 7.5, 7.0, 5.6, 5.3, 7.5, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.8, 4.5, 4.6, 6.3, 5.7, 8.2, 13.5, 7.1, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.5, 8.9, 6.3, 8.9, 8.3, 10.0, 15.4, 10.9, 11.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 9.9,
    "opponent": "New York Jets",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 13.75,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.38,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.12,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills declared\u00a0RB Matt Breida, LB Matt Milano, OT Tommy Doyle, DT Vernon Butler, and DT Harrison Phillips inactive against the Chiefs.\n",
    "report": "",
    "analysis": "Most teams struggle to contain Travis Kelce, but it'll be an especially tall task for the Bills without one of their starting linebackers. This one looks like it's going to be an absolute shootout between two of the league's best offenses.\n",
    "timestamp": "",
    "source": "Matt McMullen on Twitter",
    "game_day_logo": "",
    "avg_fp2": 10.62,
    "week01": 3.0,
    "week02": 22.0,
    "week03": 7.0,
    "week04": 23.0,
    "week05": 11.0,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 8.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 22.0, 7.0, 23.0, 11.0, 1.0, 'BYE', 10.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.7, 6.3, 5.9, 4.2, 8.5, 'BYE', 9.6, 7.6, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 3.1, 5.0, 5.5, 'BYE', 5.8, 3.4, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.2, 11.9, 10.4, 14.0, 12.8, 'BYE', 12.7, 11.1, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 8.8,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 28,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 23.12,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.88,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens CB Tavon Young was forced from Baltimore's Week 10 loss to the Dolphins with a foot injury.\u00a0\n",
    "report": "",
    "analysis": "Not good news for a player who missed most of 2020 with a torn ACL. Young has been far from a dynamo in the slot this season, but the Ravens' struggling pass defense is hurting for depth in the secondary. Young will presumably undergo an MRI on Friday.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 4.62,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 3.0,
    "week04": 11.0,
    "week05": 6.0,
    "week06": 11.0,
    "week07": -1.0,
    "week08": "BYE",
    "week09": 0.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 3.0, 11.0, 6.0, 11.0, -1.0, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 4.8, 3.4, 1.8, 4.6, 4.6, 6.5, 'BYE', 3.8, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 1.9, 0.0, 1.5, 4.6, 1.7, 1.8, 'BYE', 1.9, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.5, 7.4, 10.2, 12.3, 8.2, 9.1, 'BYE', 9.8, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 7.8,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 26,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 15.89,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.89,
    "opp_ranked_giveaways": 26,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals placed DL J.J. Watt on injured reserve with a shoulder injury.\n",
    "report": "",
    "analysis": "ESPN's Adam Schefter initially reported that Watt would need season-ending shoulder surgery, but Cardinals general manager Steve Keim later clarified that Watt has a chance to return later in the year. Regardless, this looks like a lengthy absence for the star edge rusher. League rules mandate Watt misses at least three weeks after getting placed on injured reserve, but he's expected to miss longer than that.\n",
    "timestamp": "",
    "source": "Darren Urban on Twitter",
    "game_day_logo": "",
    "avg_fp2": 9.0,
    "week01": 16.0,
    "week02": 1.0,
    "week03": 15.0,
    "week04": 5.0,
    "week05": 8.0,
    "week06": 12.0,
    "week07": 11.0,
    "week08": 1.0,
    "week09": 12.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 1.0, 15.0, 5.0, 8.0, 12.0, 11.0, 1.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 6.4, 9.9, 4.8, 8.7, 5.2, 9.8, 6.4, 6.5, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.0, 7.0, 2.8, 6.0, 5.1, 5.6, 5.3, 2.9, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 13.8, 11.9, 12.1, 14.5, 12.0, 14.0, 13.7, 10.2, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 7.6,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 20.38,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers LB T.J. Watt (groin) was upgraded to a full participant in Thursday's practice.\n",
    "report": "",
    "analysis": "Terrific news for a Steelers defense that has had some troubles with the deep pass so far. Watt's Steelers will take on the Packers on Sunday in his return from missing about a game-and-a-half with the groin injury. Pittsburgh have been knocked down the D/ST rankings pretty heavily as it's a tough matchup, but Watt's extra pressure could add a little spice to the proceedings.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.62,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": 5.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 2.0, 5.0, 5.0, 8.0, 'BYE', 10.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.5, 6.5, 2.9, 6.1, 4.0, 'BYE', 2.4, 6.8, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.8, 6.0, 1.1, 1.6, 1.9, 'BYE', 3.1, 5.1, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.9, 10.3, 9.2, 7.4, 7.1, 'BYE', 8.2, 10.9, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 7.4,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 31,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 23.11,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.22,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts promoted S Josh Jones from the practice squad.\n",
    "report": "",
    "analysis": "Starting safety\u00a0Khari Willis suffered a calf injury versus the Titans so the Colts are running thin on secondary depth. Jones was brought up from the practice squad in each of the past two games but he'll now be a permanent member of the 53-man roster. He previously started 13 games for the Jaguars in 2020.\n",
    "timestamp": "",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.22,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 3.0,
    "week06": 15.0,
    "week07": 11.0,
    "week08": 7.0,
    "week09": 5.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 7.0, 8.0, 3.0, 15.0, 11.0, 7.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 4.4, 1.9, 5.3, 1.2, 5.8, 5.3, 4.8, 9.0, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.6, 3.8, 4.9, 2.5, 3.1, 2.5, 3.1, 6.2, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.5, 9.4, 10.4, 8.1, 8.9, 10.1, 9.7, 12.9, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 6.9,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 19.89,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams declared QB Bryce Perkins, LB Von Miller, LB Chris Garrett, OL Alaric Jackson, and TE Brycen Hopkins\u00a0inactive against the Titans.\n",
    "report": "",
    "analysis": "Much to the relief of the Titans\u2019 offensive line, Miller will have to wait a week to make his Rams debut. Once he\u2019s up to speed in the new system, Miller will team up with Aaron Donald to form one of the most fearsome pass rushing duos in the league.\n",
    "timestamp": "",
    "source": "Gary Klein on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 6.67,
    "week01": 8.0,
    "week02": 8.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 7.0,
    "week06": 16.0,
    "week07": 7.0,
    "week08": 7.0,
    "week09": 5.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0, 7.0, 7.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6, 6.6, 4.7, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8, 4.4, 2.7, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0, 13.6, 12.9, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 6.0,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 19.89,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers declared\u00a0DL Kingsley Keke, LB Isaiah McDuffie, S Vernon Scott, and OLB La'Darius Hamilton inactive for Week 9 against the Chiefs.\n",
    "report": "",
    "analysis": "No surprises here. Marquez Valdes-Scantling is available upon being activated from injured reserve.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.33,
    "week01": -4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 7.0,
    "week05": 7.0,
    "week06": 7.0,
    "week07": 14.0,
    "week08": 8.0,
    "week09": 5.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 6.0, 7.0, 7.0, 7.0, 7.0, 14.0, 8.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 6.0, 2.7, 4.7, 3.8, 5.7, 6.7, 2.2, 5.3, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.9, 1.3, 6.1, 3.7, 6.4, 2.7, 0.0, 2.6, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 10.6, 6.9, 12.7, 9.5, 12.5, 10.4, 4.8, 10.2, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 5.6,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 23,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 28.62,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 0.88,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmTextLite": "#0076B6",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Lions DE\u00a0Romeo Okwara (Achilles) is out for the season.\u00a0\n",
    "report": "",
    "analysis": "Okwara signed a three-year, $39 million deal with the Lions in March following his 10-sack 2020 campaign. Okwara had the fifth most QB pressures among EDGE rushers last season, and was graded as Pro Football Focus' sixth best EDGE rusher through Week 3. His absence will make Detroit's defense even more toothless than it has been in the early going.\u00a0\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 2.38,
    "week01": 4.0,
    "week02": -1.0,
    "week03": 7.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": 3.0,
    "week07": 0.0,
    "week08": -4.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, -1.0, 7.0, 3.0, 7.0, 3.0, 0.0, -4.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 5.3, 1.4, 4.5, 2.8, 3.4, 2.2, 2.6, 'BYE', 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.2, 1.4, 2.2, 1.9, 0.0, 0.9, 0.0, 'BYE', 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.7, 8.7, 8.3, 5.7, 5.5, 6.7, 5.4, 'BYE', 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.3,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 22,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 22.0,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmTextLite": "#A31D2F",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Bucs LB\u00a0Lavonte David (ankle) practiced on a limited basis Thursday.\n",
    "report": "",
    "analysis": "He was also able to get in limited work on Wednesday. Two limited sessions to start the week is a good indication David will be ready to make his first appearance since suffering an ankle injury Week 5 against the Dolphins. It is a boost for a Bucs defense that also appears likely to get Richard Sherman (hamstring) back this week.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.38,
    "week01": 2.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 8.0,
    "week06": 4.0,
    "week07": 21.0,
    "week08": 0.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.0, 0.0, 9.0, 8.0, 4.0, 21.0, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.9, 4.1, 3.3, 9.2, 4.8, 5.2, 3.7, 'BYE', 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.3, 2.5, 3.6, 3.4, 2.7, 2.2, 'BYE', 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 11.6, 5.8, 5.5, 8.8, 8.2, 9.0, 7.2, 'BYE', 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 5.2,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 11,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 16.22,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.78,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos placed CB\u00a0Bryce Callahan on injured reserve with a knee injury.\n",
    "report": "",
    "analysis": "Denver specified that Callahan will not require surgery for the knee injury he suffered in Week 8, but he is expected to miss a significant amount of time. League rules mandate that he misses at least the next three games after being placed on injured reserve. It's a minor hit to the Broncos' secondary.\n",
    "timestamp": "",
    "source": "ProFootballTalk",
    "game_day_logo": "",
    "avg_fp2": 7.89,
    "week01": 8.0,
    "week02": 9.0,
    "week03": 19.0,
    "week04": 3.0,
    "week05": 3.0,
    "week06": 1.0,
    "week07": 4.0,
    "week08": 17.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 9.0, 19.0, 3.0, 3.0, 1.0, 4.0, 17.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.9, 13.3, 6.4, 7.0, 5.5, 3.9, 6.3, 2.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.0, 6.7, 8.0, 4.1, 2.8, 1.1, 2.0, 0.0, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 9.6, 13.7, 13.3, 11.1, 9.9, 7.5, 8.6, 6.4, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 19.75,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints DL David Onyemata will return from a six game suspension in Week 8 against the Buccaneers.\n",
    "report": "",
    "analysis": "Onyemata tested positive for a banned substance this summer, and has now served his six game suspension.\u00a0Onyemata recorded seven sacks and 29 quarterback hurries in 2020, and will help sustain the Saints' early season success on defense. His return couldn't come at a better time, with the Saints taking on Tom Brady and the Buccaneers in Week 8.\n",
    "timestamp": "",
    "source": "Nick Underhill on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.62,
    "week01": 15.0,
    "week02": 6.0,
    "week03": 12.0,
    "week04": 2.0,
    "week05": 6.0,
    "week06": "BYE",
    "week07": 9.0,
    "week08": 9.0,
    "week09": 2.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 6.0, 12.0, 2.0, 6.0, 'BYE', 9.0, 9.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 6.4, 4.4, 6.9, 5.3, 'BYE', 4.0, 3.3, 6.5, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 2.5, 5.2, 4.0, 5.8, 'BYE', 3.1, 3.0, 2.4, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.1, 13.0, 13.0, 12.3, 'BYE', 9.8, 9.1, 12.4, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 5.1,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.89,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.78,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.89,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots CB\u00a0Jonathan Jones will have surgery on his injured shoulder and is out for the season.\u00a0\n",
    "report": "",
    "analysis": "Jones, the team's primary slot corner, is a significant loss for the Patriots defense. Jones played 54 percent of defensive snaps for New England, posting 18 tackles, three pass breakups, and an interception in six games this season. The Patriots could have issues covering slot receivers with Jones sidelined. Jets slot WR Jamison Crowder caught four of six targets for 34 yards against New England in Week 7.\u00a0\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.78,
    "week01": 5.0,
    "week02": 19.0,
    "week03": 3.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 12.0,
    "week08": 7.0,
    "week09": 14.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.0, 3.0, 2.0, 5.0, 3.0, 12.0, 7.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.1, 6.8, 4.0, 6.3, 2.8, 8.5, 3.8, 6.7, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.1, 6.2, 8.2, 2.9, 0.0, 4.6, 10.5, 1.9, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 14.5, 17.5, 14.0, 14.6, 6.4, 12.0, 23.4, 9.1, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.0,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 12,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 23.67,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.88,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans OLB Harold Landry (hamstring) did not practice Wednesday.\n",
    "report": "",
    "analysis": "With nine sacks in as many games, Landry is in the midst of a breakout campaign. He's only a half of a sack away from his career-high over the course of a season. His status warrants monitoring throughout the week. Bud Dupree was also absent from practice due to a knee issue.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.78,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 3.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": 17.0,
    "week08": 6.0,
    "week09": 10.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 3.0, 3.0, 7.0, 4.0, 17.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 3.8, 2.3, 6.5, 7.7, 3.0, 3.7, 2.9, 2.7, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.8, 3.0, 6.4, 4.2, 0.0, 0.7, 0.0, 0.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.3, 8.0, 14.9, 9.4, 4.6, 7.2, 6.5, 5.9, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 4.7,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 22,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 23.56,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 0.89,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles acquired CB Kary Vincent from the Broncos in exchange for a 2022 sixth-round pick.\n",
    "report": "",
    "analysis": "This move encapsulates the dud that was the 2021 NFL trade deadline.\u00a0Vincent, Denver's seventh-round selection this year, was inactive for every game this season.\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.67,
    "week01": 10.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": -1.0,
    "week05": 10.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 15.0,
    "week09": 0.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 1.0, 5.0, -1.0, 10.0, 1.0, 1.0, 15.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.5, 4.6, 3.8, 2.5, 2.7, 0.5, 3.9, 3.2, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.1, 3.1, 4.1, 2.9, 1.6, 0.0, 1.4, 2.9, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.0, 7.7, 10.2, 8.9, 7.0, 6.9, 9.2, 8.4, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 4.7,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 7,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 26.89,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins declared OL Greg Little, WR Preston Williams, DB Trill Williams, TE Hunter Long, DL John Jenkins, LB Jerome Baker, and S Sheldrick Redwine inactive for Week 8 against the Bills.\n",
    "report": "",
    "analysis": "Miami's defense will be depleted against the division rival Bills in Week 8. The good news is that the receiving corps is finally getting a little bit healthier for Tua Tagovailoa, with the exception of Preston Williams.\n",
    "timestamp": "",
    "source": "Marcel Louis-Jacques on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 4.22,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 4.0,
    "week04": 4.0,
    "week05": -2.0,
    "week06": 4.0,
    "week07": 4.0,
    "week08": 0.0,
    "week09": 17.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 4.0, 4.0, -2.0, 4.0, 4.0, 0.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 7.6, 1.5, 5.4, 3.2, 5.4, 4.0, 1.1, 6.1, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.9, 1.2, 1.5, 3.8, 1.9, 1.7, 0.0, 1.4, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 14.0, 6.4, 9.1, 8.8, 8.9, 6.6, 4.5, 9.0, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 4.7,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 20,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 21.38,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.89,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks declared\u00a0DL L.J. Collier, DB Marquise Blair, TE Tyler Mabry, OL Stone Forsythe and Ol Dakoda Shepley inactive for Week 8 against the Jaguars.\n",
    "report": "",
    "analysis": "Collier started all 16 games for the Seahawks last year and earned three sacks. He has only been active for two games this year. The former first-round pick has been completed removed from the team's defensive game-plan.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.38,
    "week01": 6.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": 3.0,
    "week07": 8.0,
    "week08": 13.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 4.0, 0.0, 6.0, 3.0, 3.0, 8.0, 13.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 2.0, 4.1, 2.7, 5.2, 4.0, 5.8, 'BYE', 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 4.6, 2.9, 4.8, 5.3, 4.3, 2.0, 3.1, 'BYE', 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 12.4, 5.9, 9.6, 8.4, 7.7, 6.2, 8.5, 'BYE', 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 4.5,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 15,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 21.62,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.11,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders signed DB Desmond Trufant.\n",
    "report": "",
    "analysis": "Trufant was cut by the Saints one week ago and quickly found a new home in Las Vegas. The veteran corner played 57 snaps for the Saints across two games, notching two tackles. Trufant will look to add depth to a shoddy Raiders secondary.\n",
    "timestamp": "",
    "source": "ProFootballTalk",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 5.62,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 3.0,
    "week06": 13.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": 6.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 4.0, 1.0, 3.0, 13.0, 6.0, 'BYE', 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 3.9, 8.0, 5.9, 5.2, 4.1, 2.2, 'BYE', 3.3, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 5.1, 2.8, 1.4, 2.5, 0.4, 'BYE', 1.9, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.1, 11.4, 6.6, 7.6, 7.2, 6.4, 'BYE', 8.1, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 4.0,
    "opponent": "New England Patriots",
    "opp_rank_pts": 10,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 22.44,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 0.89,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Myles Garrett\u00a0(foot) returned to practice Friday.\n",
    "report": "",
    "analysis": "Nothing to see here. Garrett might be slightly banged up, causing him to miss Wednesday's and Thursday's practices, but is not expected to sit out Sunday's tilt against New England. He'll suit up and wreak havoc, per usual.\n",
    "timestamp": "",
    "source": "Mike Giardi on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.33,
    "week01": 1.0,
    "week02": 5.0,
    "week03": 16.0,
    "week04": 8.0,
    "week05": 0.0,
    "week06": -2.0,
    "week07": 5.0,
    "week08": 3.0,
    "week09": 12.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 5.0, 16.0, 8.0, 0.0, -2.0, 5.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 4.1, 6.5, 1.6, 4.5, 4.8, 6.1, 4.5, 2.8, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.1, 2.5, 2.5, 2.0, 0.0, 2.5, 1.8, 1.1, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 12.3, 7.0, 5.7, 7.4, 6.2, 8.3, 7.5, 6.4, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 3.9,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 14,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 22.62,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings LB\u00a0Anthony Barr (knee) did not practice Thursday.\n",
    "report": "",
    "analysis": "Barr also sat out Wednesday's session. It is possible Minnesota is just resting their star linebacker following a 98-snap effort in Week 9, but he is looking questionable heading into Friday's session. Barr has a fumble recovery and interception in just four games so far this year.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.12,
    "week01": 5.0,
    "week02": 6.0,
    "week03": 3.0,
    "week04": 4.0,
    "week05": 9.0,
    "week06": 10.0,
    "week07": "BYE",
    "week08": 8.0,
    "week09": 12.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 4.0, 9.0, 10.0, 'BYE', 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 4.3, 1.7, 2.3, 6.8, 6.0, 'BYE', 4.5, 3.3, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 1.1, 1.9, 1.6, 1.5, 'BYE', 0.2, 0.6, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 14.1, 5.9, 6.0, 9.0, 7.9, 'BYE', 6.4, 6.3, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 3.5,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 8,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 23.62,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.62,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Josh Allen sacked, intercepted and recovered a fumble from Josh Allen.\n",
    "report": "",
    "analysis": "Allen, who does not have a middle name, made his claim as the true \"Josh Allen\", as he continually disrupted Joshua Patrick Allen's snaps at quarterback. Allen became the first player in NFL history to sack a player of the same name. He added the interception and fumble recovery just to pad his section in the history books. The two Allens are unlikely to play again for several years, so the Bills quarterback looks like a good buy low.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.25,
    "week01": -3.0,
    "week02": 9.0,
    "week03": 2.0,
    "week04": 1.0,
    "week05": 2.0,
    "week06": 3.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 17.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 9.0, 2.0, 1.0, 2.0, 3.0, 'BYE', 3.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 4.1, 0.8, 1.7, 5.4, 3.9, 'BYE', 2.5, 0.9, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.6, 0.4, 2.2, 1.6, 3.1, 'BYE', 0.6, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.8, 7.0, 8.6, 6.1, 7.5, 'BYE', 7.7, 6.2, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 3.4,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 22.88,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys coach Mike McCarthy said\u00a0DE Randy Gregory (calf) is expected to miss \"multiple weeks.\"\n",
    "report": "",
    "analysis": "The team will likely place him on short-term injured reserve in the coming days. In the midst of a breakout year, Gregory was only one sack shy of matching his previous career-high of six through seven appearances. It's an upgrade for Matt Ryan in the immediate future and for Dallas' upcoming opponents as the team is scheduled for four games over the next 18 days.\n",
    "timestamp": "",
    "source": "Todd Archer on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.62,
    "week01": 7.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 5.0,
    "week06": 6.0,
    "week07": "BYE",
    "week08": 2.0,
    "week09": 3.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 7.0, 7.0, 8.0, 5.0, 6.0, 'BYE', 2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 4.1, 3.7, 4.3, 4.3, 5.9, 'BYE', 6.4, 4.9, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 0.4, 3.1, 2.3, 3.2, 5.9, 'BYE', 1.8, 4.3, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.2, 7.6, 7.2, 7.2, 12.0, 'BYE', 7.8, 10.2, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 3.2,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 19.89,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers DE Brian Burns suffered an ankle injury Week 9 against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Burns was initially injured when Mac Jones appeared to grab his ankle and twist it following a strip-sack. He returned to the game before leaving for good in the fourth quarter. \u201cBrian had an ankle sprain. I\u2019m not sure yet where that\u2019ll be,\u201d coach Matt Rhule said. \u201cHe was getting an MRI as well. So the extent of that ankle sprain? We\u2019ll have to wait and see.\u201d Burns is second on the team with 5.5 sacks this season.\u00a0\n",
    "timestamp": "",
    "source": "Charlotte Observer",
    "game_day_logo": "",
    "avg_fp2": 6.0,
    "week01": 9.0,
    "week02": 12.0,
    "week03": 8.0,
    "week04": -4.0,
    "week05": 8.0,
    "week06": 1.0,
    "week07": 2.0,
    "week08": 11.0,
    "week09": 7.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 12.0, 8.0, -4.0, 8.0, 1.0, 2.0, 11.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.5, 4.2, 4.0, 7.2, 6.7, 4.5, 4.1, 5.1, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.0, 0.8, 2.0, 1.7, 2.4, 3.2, 0.4, 2.9, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 14.1, 8.0, 8.2, 8.4, 9.7, 9.9, 8.6, 10.3, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 3.2,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 17,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.62,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers DE\u00a0Joey Bosa (ankle) is questionable for Week 10 against the Vikings.\n",
    "report": "",
    "analysis": "The good news is\u00a0CB Asante Samuel Jr. was cleared from the concussion protocol and will return on Sunday. Bosa did not participate in practice on Friday, which does keep his status shakier than usual. It's one to keep an eye on as his absence would be a massive upgrade for Kirk Cousins and Minnesota's passing attack.\n",
    "timestamp": "",
    "source": "Fernando Ramirez on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.25,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 10.0,
    "week04": 7.0,
    "week05": -3.0,
    "week06": 6.0,
    "week07": "BYE",
    "week08": 4.0,
    "week09": 1.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 10.0, 7.0, -3.0, 6.0, 'BYE', 4.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 5.1, 4.1, 4.5, 4.7, 3.4, 'BYE', 3.6, 3.8, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 1.4, 0.0, 0.4, 1.7, 1.0, 'BYE', 1.3, 1.3, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 13.2, 3.5, 6.3, 7.6, 6.7, 'BYE', 7.1, 6.2, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 2.8,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 16,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 23.89,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs declared\u00a0CB DeAndre Baker, OT Prince Tega-Wanogho, OT Mike Remmers, TE Dan Brown, and DT Khalen Saunders inactive for Week 9 against the Packers.\n",
    "report": "",
    "analysis": "It's the second consecutive healthy-scratch for Baker. Brown was unable to turn around for Sunday after being acquired at the trade deadline.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 3.89,
    "week01": 5.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": -1.0,
    "week06": 8.0,
    "week07": 3.0,
    "week08": 6.0,
    "week09": 11.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 1.0, 0.0, 2.0, -1.0, 8.0, 3.0, 6.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2, 2.1, 2.3, 3.7, 2.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6, 0.6, 0.7, 0.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2, 7.9, 8.9, 7.0, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 2.4,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.62,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.62,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets S Marcus Maye has a torn Achilles and will miss the remainder of the season.\n",
    "report": "",
    "analysis": "This is a brutal blow for any player, but it's especially rough for one playing on the franchise tag. Maye will likely have to settle for one-year prove-it offers this offseason. The Jets will roll on with Ashtyn Davis and Sharrod Neasman at safety for the remainder of the season.\u00a0\n",
    "timestamp": "",
    "source": "Brian Costello on Twitter",
    "game_day_logo": "",
    "avg_fp2": 2.5,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 4.0,
    "week04": 7.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": -3.0,
    "week08": 4.0,
    "week09": -3.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 4.0, 7.0, 4.0, 'BYE', -3.0, 4.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.5, 2.9, 3.9, 2.6, 'BYE', 3.1, 2.2, 2.2, 2.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.9, 0.1, 1.4, 2.8, 'BYE', 3.3, 0.0, 0.0, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.8, 6.6, 7.2, 9.7, 'BYE', 8.1, 6.1, 5.3, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 2.3,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 28.88,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Washington DE Montez Sweat suffered a\u00a0jaw fracture and will be forced to avoid physical contact for the next month.\n",
    "report": "",
    "analysis": "That means Sweat will be out for well over a month after accounting for a reasonable ramp-up period in practice. He will also be forced to alter his diet because of the injury although it will not require surgery. Sweat already had four sacks this year on top of 12 QB hits. It's a brutal injury for the third-year defensive lineman and for a Washington defense that hasn't lived up to expectations in 2021. Expect the Football Team to continue underperforming on defense after losing Sweat.\u00a0\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.62,
    "week01": 5.0,
    "week02": 3.0,
    "week03": -4.0,
    "week04": 6.0,
    "week05": 5.0,
    "week06": 8.0,
    "week07": 7.0,
    "week08": 7.0,
    "week09": "BYE",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 3.0, -4.0, 6.0, 5.0, 8.0, 7.0, 7.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 4.7, 1.9, 3.5, 4.0, 3.8, 0.9, 4.6, 'BYE', 2.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 2.0, 0.5, 1.0, 0.4, 0.8, 0.0, 1.9, 'BYE', 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.0, 5.0, 7.3, 4.3, 7.2, 5.9, 8.3, 'BYE', 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 2.0,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 25.12,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.62,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "NFL insider Josina Anderson reports that 49ers CB Josh Norman is dealing with fractured ribs.\n",
    "report": "",
    "analysis": "Norman is reportedly going to tough it out through the injury and avoid missing any games. The veteran corner, once renowned as one of the best in the business, is mostly a depth option in the San Francisco secondary at this stage of his career.\n",
    "timestamp": "",
    "source": "Josina Anderson on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 3.75,
    "week01": 4.0,
    "week02": 8.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 4.0,
    "week08": 6.0,
    "week09": 1.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 8.0, 0.0, 2.0, 5.0, 'BYE', 4.0, 6.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.2, 4.6, 2.2, 0.8, 'BYE', 2.9, 4.7, 1.8, 2.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 3.1, 0.0, 0.0, 'BYE', 1.1, 4.5, 0.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 11.1, 7.1, 3.7, 4.0, 'BYE', 7.7, 10.3, 5.7, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 1.8,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 25.5,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.88,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons DL\u00a0Steven Means suffered a knee injury in Atlanta's Week 9 game against the Saints and will not return.\u00a0\n",
    "report": "",
    "analysis": "In the process of nearly housing a fumble for a touchdown, Means got tricked up awkwardly near the goal line and collapsed in a heap of pain. He did somehow eventually walk off the field under his own power, but he was quickly ruled out for the remainder of the game. That is never a good sign. Means has been gobbling up snaps since re-signing in April, though he has been a liability in just about every phase.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 2.88,
    "week01": 0.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": 0.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 3.0,
    "week09": 3.0,
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 5.0, 0.0, 5.0, 'BYE', 6.0, 3.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.1, 2.4, 4.2, 7.0, 'BYE', 4.2, 3.5, 2.7, 1.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.0, 0.2, 0.8, 6.5, 'BYE', 1.7, 2.4, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 14.9, 4.1, 6.9, 12.2, 'BYE', 8.9, 8.8, 5.4, 7.6]
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