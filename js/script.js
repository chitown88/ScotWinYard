var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 16 October 2021 06:43 AM (central time)"};
$scope.week = {"nflWeek": "6"};
$scope.playoffLogo = {"src": ""}

$scope.qbStartSit = {"one": "Patrick Mahomes", "two": "Jalen Hurts", "three": "Taylor Heinicke", "four": "Mac Jones", "five": "Josh Allen", "six": "Ryan Tannehill", "seven": "Derek Carr", "eight": "Teddy Bridgewater", "nine": "Dak Prescott", "ten": "Justin Fields"};
$scope.rbStartSit = {"one": "Najee Harris", "two": "James Robinson", "three": "Darrell Henderson", "four": "Antonio Gibson", "five": "Joe Mixon", "six": "Damien Harris", "seven": "Chase Edmonds", "eight": "Alex Collins", "nine": "Miles Sanders", "ten": "Josh Jacobs"};
$scope.wrStartSit = {"one": "Tyreek Hill", "two": "DeVonta Smith", "three": "Diontae Johnson", "four": "Jakobi Meyers", "five": "D.K. Metcalf", "six": "A.J. Brown", "seven": "Courtland Sutton", "eight": "Justin Jefferson", "nine": "CeeDee Lamb", "ten": "Mike Evans"};
$scope.teStartSit = {"one": "Jared Cook", "two": "Zach Ertz", "three": "Hunter Henry", "four": "Ricky Seals-Jones", "five": "Travis Kelce", "six": "Anthony Firkser", "seven": "David Njoku", "eight": "Dalton Schultz", "nine": "Tyler Conklin", "ten": "Darren Waller"};
$scope.kStartSit = {"one": "Evan McPherson", "two": "Harrison Butker", "three": "Jason Myers", "four": "Chris Boswell", "five": "Zane Gonzalez", "six": "Anthony Firkser", "seven": "David Njoku", "eight": "Dalton Schultz", "nine": "Tyler Conklin", "ten": "Darren Waller"};
$scope.dstStartSit = {"one": "Buffalo Bills", "two": "Dallas Cowboys", "three": "Indianapolis Colts", "four": "Miami Dolphins", "five": "Washington Football Team", "six": "Pittsburgh Steelers", "seven": "Las Vegas Raiders", "eight": "Tennessee Titans", "nine": "Cleveland Browns", "ten": "Carolina Panthers"};

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
    "projected": 25.2,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 27.38,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.14,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Patrick Mahomes completed 33-of-54 passes for 272 yards, two touchdowns, and two interceptions in the Chiefs' Week 5 loss to the Bills.\n",
    "report": "",
    "analysis": "Mahomes made a few questionable decisions that led to turnovers and generally had a tough time against a stingy Bills defense. It was an uncharacteristically poor performance for arguably the best player in football, who will look to return to form in Week 6 against a Washington defense that has been gashed through the air all season. Mahomes remains a high-end QB1.\n",
    "timestamp": "2021-10-11 06:47 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.28,
    "week02": 25.02,
    "week03": 24.9,
    "week04": 32.72,
    "week05": 20.98,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.28, 25.02, 24.9, 32.72, 20.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 24.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 25.04,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 22.23,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Hurts completed 12-of-26 passes for 115 yards, one touchdown and an interception in the Eagles' 28-22, Week 6 loss to the Bucs, adding 10 carries for 44 yards and two additional scores.\u00a0\n",
    "report": "",
    "analysis": "In a repeat of Week 5, Hurts was drawing dead from a fantasy perspective until scoring a pair of rushing touchdowns in the game's final 18 minutes. Unlike Week 5, he couldn't complete a comeback this evening, though the Eagles did draw to within 28-22 with 5:56 remaining after being down 28-7. They might have gotten a shot at the lead if not for a dubious taunting penalty. Hurts' best passing tactic was underthrown deep balls, as he managed to rack up an astounding 95 yards in defensive pass interference penalties. The Bucs had more penalty yards called on them than any team all season. Hurts flat out missed too many throws, though he also kept plays alive with his legs time and again. It's a tradeoff that has made for some hard to watch football, a few Houdini wins and a lot of fantasy points. The man is simply incapable of finishing outside the top 12 at quarterback. We aren't sure how long he can keep up the high-wire act, but the Raiders are unlikely to slow him in Week 7.\u00a0\n",
    "timestamp": "2021-10-15 04:39 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 28.76,
    "week02": 21.8,
    "week03": 22.54,
    "week04": 28.18,
    "week05": 23.92,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.76, 21.8, 22.54, 28.18, 23.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 22.6, 25.0, 23.7, 20.4, 24.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 17.8, 27.3, 18.8, 22.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 30.2, 31.7, 31.2, 27.6, 25.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 24.1,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 25.92,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.41,
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
    "headlineNews": "Josh Allen completed 15-of-26 passes for 315 yards and three touchdowns, adding 59 yards and a touchdown on 11 carries in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Allen was masterful, requiring only 15 completions to top the 300-yard mark. Buffalo looks like the new favorite in the AFC after upsetting Kansas City on the road, and Allen has inserted himself into the MVP conversation once again after finishing second to Aaron Rodgers last year. The Bills square off against the Titans' forgiving secondary in Week 6, making Allen one of the best quarterbacks in fantasy as usual.\n",
    "timestamp": "2021-10-11 04:40 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 17.2,
    "week02": 17.66,
    "week03": 37.22,
    "week04": 21.02,
    "week05": 36.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.2, 17.66, 37.22, 21.02, 36.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 16.4, 20.0, 19.4, 23.0, 24.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 11.4, 20.9, 24.1, 27.7, 22.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 30.3, 24.4, 33.3, 34.3, 28.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 22.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 6,
    "avg_fp2": 26.77,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 16.62,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson (illness) practiced in full Friday and was not listed on the Ravens' injury report.\n",
    "report": "",
    "analysis": "Jackson is good to go for Week 6 against the Chargers, in what should be an exciting matchup. The Ravens have shown a surprising willingness to pass over recent week, and now get Rashod Bateman back from from his groin injury. However, the Chargers offense is a clear run funnel, and the Ravens could get back to basics this week. In either case, Jackson should be heavily involved. Jackson is several tiers above his current running backs as a rusher, and offers passing upside for another big week despite a difficult matchup.\n",
    "timestamp": "2021-10-15 09:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.0,
    "week02": 34.26,
    "week03": 20.28,
    "week04": 19.44,
    "week05": 41.88,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 34.26, 20.28, 19.44, 41.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 27.9, 17.4, 23.0, 22.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 17.6, 29.3, 17.1, 16.4, 20.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.5, 32.3, 38.8, 26.2, 24.1, 28.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360310.png",
    "name": "Trevor Lawrence",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 21.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 16.17,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 22.43,
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
    "headlineNews": "Trevor Lawrence completed 23-of-33 passes for 273 yards with a touchdown and an interception in the Jaguars' Week 5 loss to the Titans.\n",
    "report": "",
    "analysis": "Lawrence made his biggest impact\u00a0in the run game, scoring on a designed run and getting another TD overturned. Lawrence's second-half play\u00a0was closer to what he showed in Week 3, with the Jacksonville offense failing to convert red-zone chances and Lawrence forcing throws into coverage. The Jaguars' playcalling has centered around Lawrence, who has 21 carries over the last three weeks, and constant negative game scripts under Urban Meyer give him a high passing floor.\u00a0Lawrence has a streamable Week 6 matchup against a Dolphins secondary that's coming off a five touchdown game to Tom Brady.\n",
    "timestamp": "2021-10-10 09:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.08,
    "week02": 8.82,
    "week03": 9.46,
    "week04": 17.76,
    "week05": 22.72,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.08, 8.82, 9.46, 17.76, 22.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 19.4, 17.3, 14.6, 17.1, 21.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 10.4, 12.1, 8.1, 11.2, 12.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 24.2, 25.1, 20.7, 22.7, 27.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 21.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 3,
    "avg_fp2": 25.21,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.38,
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
    "headlineNews": "Justin Herbert completed 26-of-43 passes for 398 yards and four touchdowns in the Chargers' 47-42, Week 5 win over the Browns, adding three carries for 30 rushing yards and a fifth touchdown.\n",
    "report": "",
    "analysis": "The two teams combined for over 1,000 yards and 66 second-half points. After a slow start to the fantasy season despite strong real-life football, Herbert\u2019s been on an absolute tear with 12 touchdowns over the last three weeks. His touchdowns in this one were a 22-yarder to Donald Parham, two long balls to Mike Williams, and then a 19-yard hookup with Austin Ekeler. They were sandwiched around a nine-yard rushing score for Herbert. An every-week QB1, Herbert gets the Ravens in Week 6. Herbert has been even better than he was last season when he won Rookie of the Year honors.\n",
    "timestamp": "2021-10-11 03:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.38,
    "week02": 16.72,
    "week03": 30.84,
    "week04": 21.28,
    "week05": 42.82,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.38, 16.72, 30.84, 21.28, 42.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.9, 19.4, 17.2, 20.9, 21.3, 21.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.0, 13.8, 14.2, 18.4, 12.6, 18.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.8, 30.3, 22.3, 28.4, 22.5, 29.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 21.1,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 2,
    "avg_fp2": 21.98,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.92,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Matthew Stafford completed 25-of-37 passes for 365 yards, one touchdown and an interception in the Rams' 26-17, Week 5 win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "For the second time in five days, Stafford appeared highly inaccurate early, consistently sailing passes. FOX television cameras found Stafford's throwing hand being examined and taped up on the sideline near the end of the first half. He then went into overdrive after the break, piling up 234 yards and his score, a 13-yard strike to Tyler Higbee. Higbee easily destroyed S Jamal Adams in coverage, and Stafford dropped in a layup. Stafford's first half pick was a truly horrendous end zone attempt where he was trying to throw the ball away. The biggest storyline of the evening was Stafford finally striking up a connection with Robert Woods, whom he found for 12 grabs and 150 yards. Stafford thankfully has 10 days to get his throwing hand right for a Week 6 matchup with the Giants.\u00a0\n",
    "timestamp": "2021-10-08 03:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.34,
    "week02": 18.22,
    "week03": 29.52,
    "week04": 20.3,
    "week05": 17.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 21.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 27.26,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 17.77,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 34-of-42 passes for 297 yards, two touchdowns and an interception in the Bucs' 28-22, Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Brady set a breakneck early tone on the opening drive, finding each of his big three wideouts for first-down conversions as the Bucs marched down the field in five minutes for a touchdown. Proving that his thumb injury was not an issue, Brady ended the opening frame 11-of-12 for 121 yards and two scores. He was quieter the rest of the night as a sort of bizarre equilibrium settled in between the two teams where the Eagles failed to threaten with the Bucs nevertheless failing to put the game away. The script was flipped in the fourth quarter with the Eagles finally coming alive and drawing to 28-22 after falling behind 28-7. Brady then, as he always does, easily iced the game with a march deep into Eagles territory. Brady ended up sailing a throw or two, but it was stunning how accurate he appeared as he played through a sprained throwing hand ligament. He has 10 days to rest up for a Week 7 home matchup with the Bears.\u00a0\u00a0\n",
    "timestamp": "2021-10-15 03:37 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 29.16,
    "week02": 29.64,
    "week03": 28.68,
    "week04": 11.06,
    "week05": 37.74,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.16, 29.64, 28.68, 11.06, 37.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 23.1, 19.5, 19.0, 21.0, 21.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.6, 12.1, 10.4, 13.4, 16.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.8, 27.5, 19.8, 19.2, 20.7, 26.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2565969.png",
    "name": "Taylor Heinicke",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 20.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 21,
    "avg_fp2": 18.86,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.68,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "CBS Sports' Jason La Canfora reports Ryan\u00a0Fitzpatrick (hip) could be cleared to play by Week 7.\u00a0\n",
    "report": "",
    "analysis": "Whether Fitzpatrick gets the team's starting job back is another question entirely. La Canfora said Washington coaches are \"eager to get him back, but that could prove to be more about depth than anything else. Some in the organization preferred [Taylor] Heinicke, who is spry and plays the game with a high-energy style.\" Many in the organization, per La Canfora, believed Heinicke \"was the better quarterback in the summer, and they believe he may be a better fit moving forward as well.\" Some big plays and Heinicke's penchant for taking off from the pocket -- he has 22 rushing attempts in four starts this season -- has kept him fantasy relevant, though his mistakes are starting to pile up. He tossed two picks in the Football Team's Week 5 loss to the Saints, and New Orleans defenders dropped at least two other interceptions. Continued struggles from Heinicke could leave Ron Rivera no choice but to put Fitzpatrick back under center.\u00a0\n",
    "timestamp": "2021-10-11 02:43 PM",
    "source": "CBSSports.com",
    "game_day_logo": "",
    "week01": 10.58,
    "week02": 21.04,
    "week03": 22.88,
    "week04": 27.9,
    "week05": 11.92,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.58, 21.04, 22.88, 27.9, 11.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 14.6, 11.7, 20.0, 18.0, 20.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 16.4, 15.0, 0.0, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 12.5, 23.5, 22.6, 2.3, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 20.1,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 15,
    "avg_fp2": 17.04,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.35,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Carson Wentz completed 25-of-35 passes for 402 yards and two touchdowns in the Colts' 31-25, Week 5 loss to the Ravens Monday night.\n",
    "report": "",
    "analysis": "Wentz turned back the clock to his pre-injury form in this one, as this was arguably his best performance from him in recent memory. His two touchdowns were 76- and 42-yard hookups to Jonathan Taylor on a screen and Michael Pittman on a deep shot where Pittman manhandled the defensive back for the ball. Wentz came into this one with just one 250-yard passing game on the season, so this obviously marks his best single-game output of the year. The Colts jumped out to a 22-3 lead in the third quarter but then sat on the ball and played scared, allowing the Ravens to devour them. Wentz has three multi-touchdown games and will be a mid-range QB2 in a plus draw against the Texans in Week 6.\n",
    "timestamp": "2021-10-12 03:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.34,
    "week02": 18.58,
    "week03": 7.76,
    "week04": 17.92,
    "week05": 22.58,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.34, 18.58, 7.76, 17.92, 22.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.9, 21.5, 16.4, 16.6, 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 11.2, 12.4, 12.2, 11.9, 12.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.2, 24.5, 16.4, 18.8, 18.8, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 19.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 8,
    "avg_fp2": 20.0,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.71,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Daniel Jones (concussion) was cleared by an independent neurologist and will play against the Rams.\n",
    "report": "",
    "analysis": "Jones carries no injury designation into Sunday, and will start against the Rams. Jones will have Sterling Shepard back from his hamstring injury this week. He'll likely also have Kadarius Toney, who's dealing with a minor ankle injury. Darius Slayton is questionable with a hamstring injury and Kenny Golladay is out this week with a knee injury. Even assuming Jones has Shepard, Toney and Slayton to throw to, he looks like a QB2 in a tough matchup with the Rams.\n",
    "timestamp": "2021-10-15 08:46 PM",
    "source": "Art Stapelton on Twitter",
    "game_day_logo": "",
    "week01": 21.38,
    "week02": 29.46,
    "week03": 16.54,
    "week04": 27.78,
    "week05": 4.82,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.38, 29.46, 16.54, 27.78, 4.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 15.9, 23.8, 16.2, 23.7, 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.9, 7.5, 8.6, 6.7, 13.8, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.7, 24.6, 22.0, 18.3, 24.6, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 19.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 21.14,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.47,
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
    "headlineNews": "Dak Prescott completed 14-of-22 passes for 188 yards and four touchdowns in Dallas' 36-28 Week 4 win over the Panthers.\n",
    "report": "",
    "analysis": "Touted as the league's best defense despite opening against a cupcake schedule in their first three games, Prescott and Dallas' offense silenced Carolina's defense with 433 yards and 7.7 yards per play, finishing with a squeaky clean box score with zero sacks taken and no turnovers. The Cowboys moved the ball at will without CeeDee Lamb (2/13) making a significant impact, calling manufactured plays for Dalton Schultz (5/50/1) while getting 204 combined rushing yards from Ezekiel Elliott (19/142/1) and Tony Pollard (9/62). Amari Cooper also beat C.J. Henderson one-on-one for a 35-yard touchdown following a perfectly placed ball dime Prescott in the third. The only downside to Dallas' passing offense at this time is the fact Prescott hasn't been asked or needed to throw more than 27 attempts in three consecutive games. Even so, he'll stay a top-five option in next week's soft matchup against the Giants.\n",
    "timestamp": "2021-10-03 08:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 28.42,
    "week02": 8.48,
    "week03": 20.12,
    "week04": 27.02,
    "week05": 21.68,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.42, 8.48, 20.12, 27.02, 21.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 20.3, 17.2, 18.3, 24.0, 19.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.9, 17.8, 12.4, 18.7, 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.6, 28.7, 27.3, 23.6, 26.7, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 19.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 13,
    "avg_fp2": 21.35,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.36,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Sam Darnold completed 21-of-37 passes for 177 yards, a touchdown, and three interceptions in the Panthers' 18-21, Week 5 loss to the Eagles.\n",
    "report": "",
    "analysis": "Darnold added two carries for 10 yards, failing to recreate his rushing magic from the previous two weeks. The Eagles' defensive line harassed Darnold throughout the game. He was consistently forced from the pocket and often found himself throwing the ball away to avoid taking a sack. For his part, Darnold was less accurate in this game than he had been through four weeks. He notably underthrew Robby Anderson on what would have been a monstrous touchdown completion in the first half. The poor outing also ended Darnold's streak of 300-yard games at three. After showing his low floor in this game, Darnold remains in the QB2 range for his Week 6 matchup with the Vikings.\n",
    "timestamp": "2021-10-10 08:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.96,
    "week02": 19.9,
    "week03": 25.26,
    "week04": 33.54,
    "week05": 9.08,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.96, 19.9, 25.26, 33.54, 9.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 16.0, 20.0, 22.0, 20.6, 19.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 2.6, 9.5, 4.1, 16.2, 12.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 19.9, 13.6, 14.6, 21.8, 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 18.3,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 24,
    "avg_fp2": 18.63,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.72,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals did not list QB Joe Burrow (throat) on their final injury report for Week 6 against the Lions.\n",
    "report": "",
    "analysis": "Burrow's trip to the hospital on Sunday was reportedly precautionary, and Burrow heads into his matchup with Detroit without an injury designation. Facing an extremely exploitable Lions defense with all three of his top wide receivers healthy and Ja'Marr Chase in the midst of a massive breakout, Burrow looks primed for a huge week. The primary concern for fantasy is that the Bengals may not fully commit to the passing game, in a matchup they can likely win on the ground, if they prefer.\n",
    "timestamp": "2021-10-15 07:24 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.64,
    "week02": 13.28,
    "week03": 18.58,
    "week04": 22.32,
    "week05": 20.34,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 17.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 7,
    "avg_fp2": 25.1,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 22.92,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 34.56,
    "week02": 35.1,
    "week03": 19.54,
    "week04": 22.62,
    "week05": 13.66,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.56, 35.1, 19.54, 22.62, 13.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 20.6, 27.2, 22.9, 25.3, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.7, 14.5, 25.9, 21.2, 21.9, 18.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 31.0, 33.3, 29.1, 29.3, 27.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 17.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 23,
    "avg_fp2": 16.46,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 17.8,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jared Goff completed 21-of-35 passes for 203 yards, zero touchdowns and an interception in the Lions' 19-17, Week 5 loss to the Vikings.\u00a0\n",
    "report": "",
    "analysis": "Goff threw a mind-numbing interception where he didn't see LB Eric Kendricks dropping, but his statline was frankly as good as could have been expected considering the Lions' talent deficiency at receiver, one that grew even worse when Quintez Cephus injured his shoulder late in the first half. Although Detroit's game flow will remain pass happy all season, the streamer moment is never going to be right for Goff with so little to work with at pass catcher. That includes Week 6 against the Bengals.\u00a0\u00a0\u00a0\n",
    "timestamp": "2021-10-10 09:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.92,
    "week02": 19.44,
    "week03": 9.08,
    "week04": 16.76,
    "week05": 7.12,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.92, 19.44, 9.08, 16.76, 7.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 21.2, 27.4, 15.9, 17.2, 17.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 9.6, 13.5, 16.3, 13.3, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 24.0, 20.2, 21.4, 17.9, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242546.png",
    "name": "Davis Mills",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 17.1,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 10.52,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.08,
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
    "headlineNews": "Davis Mills completed 21-of-29 passes for 312 yards and three touchdowns in Houston's 25-22 Week 5 loss to New England.\u00a0\n",
    "report": "",
    "analysis": "This was a beautiful smoke-and-mirrors game from Texans OC Tim Kelly, who doctored up a flea flicker touchdown and an opening drive that lasted 18 plays before Mills spotted Antony Auclair running free in the end zone. Mills' longest pass play was a 67-yard touchdown pass to Chris Moore, who simply out-leaped J.C. Jackson for the ball despite being well-covered. Well, you probably shouldn't expect this kind of outburst often, but it was fun and Mills did (mostly) stop himself from throwing the risky balls that defined his first two starts. Mills will be a bye-week QB2 fill-in at best for Week 6's game against the Colts.\u00a0\n",
    "timestamp": "2021-10-10 10:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.98,
    "week03": 10.72,
    "week04": -0.32,
    "week05": 24.68,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.98, 10.72, -0.32, 24.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.6, 16.5, 9.1, 11.2, 17.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 9.7, 8.1, 4.6, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.7, 22.5, 19.6, 16.4, 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 16.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 15.98,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 16.71,
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
    "headlineNews": "Teddy Bridgewater completed 24-of-38 passes for 288 yards, two touchdowns, and one interception in the Broncos' 27-19, Week 5 loss to the Steelers.\n",
    "report": "",
    "analysis": "Bridgewater had trouble getting going early in the game but was able to connect with Courtland Sutton late, including for a 39 yard TD. Down by eight, the Broncos were able to drive down the filed on their final series, but Bridgwater threw an interception in the back corner of the end zone to seal the loss. Bridgwater will be a low end QB2 in a tough Week 6 matchup against the Raiders.\u00a0\n",
    "timestamp": "2021-10-10 09:18 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.46,
    "week02": 21.22,
    "week03": 11.8,
    "week04": 6.8,
    "week05": 19.62,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.46, 21.22, 11.8, 6.8, 19.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 20.0, 18.0, 20.4, 17.9, 16.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 7.0, 17.9, 12.0, 10.0, 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 17.1, 22.1, 16.7, 19.0, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 16.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 19.59,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 18.58,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Kirk Cousins completed 25-of-34 passes for 275 yards, one touchdown and an interception in the Vikings' 19-17, Week 5 win over the Lions.\u00a0\n",
    "report": "",
    "analysis": "The one-score effort was Cousins' second straight after he posted eight touchdowns across his first three starts. Although it was not an amazing fantasy day, Cousins did get the Vikings in position for the game-winning field goal with just two timeouts and 0:37 remaining. His touchdown was a 15-yard strike to Alexander Mattison where the back did most of the work. His interception was forced into a tight window and popped up into the air. Cousins continued to pepper Justin Jefferson with targets as he struggled to get on the same page with Adam Thielen. He gets the Panthers' decent defense in Week 6 before heading on bye.\u00a0\n",
    "timestamp": "2021-10-10 10:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.04,
    "week02": 25.26,
    "week03": 25.12,
    "week04": 11.12,
    "week05": 14.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.04, 25.26, 25.12, 11.12, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.7, 17.5, 20.1, 21.9, 18.4, 16.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.7, 11.1, 20.0, 20.8, 12.5, 18.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.3, 26.0, 24.0, 26.6, 22.7, 26.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png",
    "name": "Mac Jones",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 16.8,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 13.54,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 23.36,
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
    "headlineNews": "Mac Jones completed 23-of-30 passes for 231 yards with a touchdown and an interception in New England's 25-22 Week 5 win over the Texans.\n",
    "report": "",
    "analysis": "Jones didn't complete any passes beyond 20 yards as the backup offensive linemen helped force the Patriots into a quick passing game. They found the most success over the middle, with 142 of Jones' 231 yards picked up there. Jones won't be a recommended start against a Cowboys pass defense that has been extremely stingy so far this year.\u00a0\n",
    "timestamp": "2021-10-10 09:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.24,
    "week02": 7.44,
    "week03": 14.6,
    "week04": 17.9,
    "week05": 12.54,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.24, 7.44, 14.6, 17.9, 12.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 15.1, 11.0, 18.5, 15.8, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.8, 5.6, 8.8, 10.2, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 22.2, 16.5, 20.8, 22.3, 21.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 16.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 4,
    "avg_fp2": 19.02,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 14.05,
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
    "headlineNews": "Derek Carr completed 22-of-35 passes for 206 yards and one pick in Las Vegas' laughable 20-9 Week 5 loss to the Bears.\n",
    "report": "",
    "analysis": "It's the second straight loss for Vegas, which performed abysmally in trailing Chicago 14-3 with six penalties at the half and leading Carr to force the ball downfield to Zay Jones for his only turnover of the day to try and get anything going after the intermission. The Raiders' only scoring drive was a 16-play, 74-yard marathon that milked 8:19 off the clock as the offense could only muster 259 total yards for 4.3 yards per play. After a hot opening stretch with 380 yards and multiple touchdowns in each of Las Vegas' first three games, Carr has crashed back to Earth with fewer than 210 yards and at least one turnover in both of his last two starts. At this point, Carr can't even be trusted as a high-end QB2 in Week 6 against Denver's secondary (and formidable pass rush).\n",
    "timestamp": "2021-10-11 12:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 24.18,
    "week03": 22.24,
    "week04": 15.44,
    "week05": 8.24,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 24.18, 22.24, 15.44, 8.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 21.2, 23.3, 21.6, 22.5, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.4, 8.4, 16.2, 13.3, 12.7, 14.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 23.2, 23.6, 21.1, 20.3, 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15864.png",
    "name": "Geno Smith",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 16.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 5.27,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.74,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Russell Wilson is undergoing an MRI on his injured finger.\u00a0\n",
    "report": "",
    "analysis": "Surgery, per Rapoport, is a possibility -- a nightmare scenario for the Seahawks. Wilson exited Seattle's Week 5 loss to the Rams after spraining his finger on Aaron Donald's hand in the second half. Seahawks head coach Pete Carroll described Wilson's injury as a \"bad sprain\" after the game, and Rapoport said the team believes Wilson could have \"mallet finger,\" \"essentially a sprained joint that makes it hard to flex a finger.\" All signs point to Wilson missing next week's game against the Steelers, putting Geno Smith under center for Seattle. Smith was impressive Thursday against LA, running the offense like a starter and delivering a handful of confident throws, including a fourth quarter touchdown to DK Metcalf. Tyler Lockett and Metcalf are still very much startable if Smith has to take over in Week 6.\u00a0\n",
    "timestamp": "2021-10-08 02:46 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 10.54,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 10.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 'DNP', 'DNP', 'DNP', 4.0, 16.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 0.0, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.1, 'DNP', 'DNP', 'DNP', 1.5, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    "name": "Tua Tagovailoa",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 16.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 30,
    "avg_fp2": 8.85,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.54,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Ribs",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins did not list QB Tua Tagovailoa on their final injury report.\n",
    "report": "",
    "analysis": "Tagovailoa will make his first start since Week 2 in London, and will get a warm welcome from a Jaguars defense that enjoys being passed on efficiently.\u00a0Tagovailoa will unfortunately be without DeVante Parker, who has been ruled out for Week 6, and well as Will Fuller, who is on injured reserve.\u00a0Tagovailoa provides additional upside for Jaylen Waddle and puts deep threat Preston Williams in play as a true dart throw FLEX play.\n",
    "timestamp": "2021-10-15 05:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.18,
    "week02": 0.52,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.18, 0.52, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 13.2, 'DNP', 'DNP', 'DNP', 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 7.9, 'DNP', 'DNP', 'DNP', 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 21.7, 'DNP', 'DNP', 'DNP', 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.0,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 13.67,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.1,
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
    "headlineNews": "Ben Roethlisberger completed 15-of-25 passes for 253 yards, two touchdowns, and zero interceptions in the Steelers' 27-19, Week 5 win over the Broncos.\u00a0\n",
    "report": "",
    "analysis": "Roethlisberger battled minor injuries throughout the game, working with trainers on the sidelines at times between series. He returned for each drive, however. Roethlisberger looked better than he has in recent weeks, hitting Diontae Johnson in stride for a long TD. He also connected repeatedly with Chase Claypool, including for a 59-yard reception and an 18-yard TD. The Steelers will look to repeat this week's formula of a strong rushing attack paired with a low volume, high-efficiency passing game against the Seahawks in Week 6.\u00a0\n",
    "timestamp": "2021-10-12 03:01 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 12.02,
    "week02": 14.8,
    "week03": 15.22,
    "week04": 10.28,
    "week05": 16.02,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.02, 14.8, 15.22, 10.28, 16.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 16.3, 15.5, 14.2, 13.7, 16.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.1, 9.9, 12.7, 15.0, 7.4, 14.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 23.6, 20.1, 25.3, 16.8, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 15.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 17.21,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.53,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill completed 14-of-22 passes for 197 yards and a touchdown in the Titans' Week 5 win over the Jaguars.\n",
    "report": "",
    "analysis": "The Titans rode Derrick Henry for 29 carries and three of their touchdowns, leading to a floor game for Tannehill.\u00a0A.J. Brown played the majority of snaps in his return, with Tannehill completing three of his 14 passes and 38 of his yards to Brown on a team-high six targets. Tannehill has averaged just 230 yards over the past three games, but has six touchdowns over that span. The Titans should get one of Julio Jones or Nick Westbrook-Ikhine\u00a0back for their Week 6 matchup with Buffalo on Monday night.\n",
    "timestamp": "2021-10-10 10:30 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 15.18,
    "week02": 14.58,
    "week03": 23.48,
    "week04": 18.82,
    "week05": 13.98,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.18, 14.58, 23.48, 18.82, 13.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 12.3, 18.6, 16.1, 18.0, 15.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 12.0, 11.5, 11.9, 16.7, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 21.4, 22.0, 20.6, 23.4, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 14.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 16,
    "avg_fp2": 18.71,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.95,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Rodgers completed 27-of-39 passes for 344 yards, two touchdowns, and one interception in Green Bay's 25-22 Week 5 win over Cincinnati.\n",
    "report": "",
    "analysis": "In a wild overtime win that saw Mason Crosby whiff three straight game-winning field goal tries before sinking a 49-yarder to end the game, Sunday\u2019s tilt between the Packers and Bengals was the first since the 1970 AFL-NFL merger with five missed field goals in the final three minutes of regulation or overtime. Rodgers eclipsed 300 yards with ease, connecting with Davante Adams on 11 of his 27 completions for 206 yards (!) including a 59-yard shot in the fourth quarter, and eventually icing the game in extra time with a 15-yard pass threading the needle to Randall Cobb (2/30). Although the veteran's performance was proof he can still offer QB1 production when needed, there's little chance Chicago forces the Packers into a shootout in Week 6. Rodgers remains a fringe QB1 with no rushing upside best reserved for 2-QB leagues.\u00a0\n",
    "timestamp": "2021-10-11 05:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.32,
    "week02": 26.8,
    "week03": 18.54,
    "week04": 24.12,
    "week05": 20.76,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.32, 26.8, 18.54, 24.12, 20.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 15.5, 16.0, 14.5, 16.6, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 15.5, 22.0, 24.3, 17.3, 16.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.3, 28.3, 29.2, 28.6, 22.2, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 12.8,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 16.28,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.16,
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
    "headlineNews": "Baker Mayfield completed 23-of-32 passes for 305 yards and two touchdowns in the Browns' 47-42, Week 5 loss to the Chargers.\n",
    "report": "",
    "analysis": "It was Mayfield's first multi-touchdown passing game of the season after he entered the day with two touchdowns through four games. This was easily his best game of the young year on the stat sheet. Mayfield's two touchdowns went to Rashard Higgins from seven yards out and then David Njoku on a 71-yarder. Mayfield won't be a recommended fantasy option in Week 6 against the Cardinals.\n",
    "timestamp": "2021-10-11 12:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.64,
    "week02": 18.52,
    "week03": 16.94,
    "week04": 9.3,
    "week05": 23.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.64, 18.52, 16.94, 9.3, 23.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 16.8, 16.3, 19.5, 14.6, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 9.4, 16.2, 17.9, 13.2, 14.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 24.9, 20.7, 23.1, 21.2, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362887.png",
    "name": "Justin Fields",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 10.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 32,
    "avg_fp2": 6.44,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.34,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "NFL Network's Tom Pelissero reports that Justin Fields (knee) \"should be good to go\" for Chicago's Week 6 game against the Packers.\n",
    "report": "",
    "analysis": "The Bears have been run-heavy enough under Bill Lazor that Fields probably won't get to do a lot unless they meet their match on defense ... which could very well happen against the Packers on Sunday. Fields will remain a bit of a fantasy disappointment until he is unchained and given more carries.\u00a0\n",
    "timestamp": "2021-10-11 08:57 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 4.5,
    "week03": 3.92,
    "week04": 8.26,
    "week05": 8.84,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 4.5, 3.92, 8.26, 8.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 3.6, 15.0, 13.4, 11.6, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.2, 6.8, 6.4, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.6, 9.8, 22.9, 18.4, 17.4, 20.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 20.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 16.98,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.24,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Wrist",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Kareem Hunt (wrist, knee) is questionable for Week 6 against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Hunt finally got in a \"limited\" practice on Friday after Wednesday/Thursday DNPs, but he seems ready to carry the load in Nick Chubb's absence, who was officially declared out Friday. Hunt was already flirting with RB1 value, and will now be a locked-in RB1 vs. a Cardinals defense that hemorrhages production on the ground. Potential bad weather could also make for a run-friendly environment. The concern, of course, is Hunt's health. He was not on the Week 5 injury report, so this isn't something he had previously been playing through. Hybrid rookie slasher\u00a0Demetric Felton and veteran third-down back D'Ernest Johnson will be the next men up behind Hunt. Neither are a particularly compelling FLEX play even with Hunt's injury issues.\u00a0\n",
    "timestamp": "2021-10-15 09:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.6,
    "week02": 5.8,
    "week03": 24.5,
    "week04": 15.6,
    "week05": 23.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 5.8, 24.5, 15.6, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 9.4, 7.3, 9.1, 10.5, 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 7.4, 8.5, 17.9, 15.0, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 24.8, 13.0, 23.1, 23.8, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241457.png",
    "name": "Najee Harris",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 19.4,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 31,
    "avg_fp2": 16.5,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 27.84,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Najee Harris rushed 23 times for 122 yards and a touchdown in the Steelers' Week 5 win over the Broncos, adding two receptions for 20 yards on five targets.\n",
    "report": "",
    "analysis": "Harris dealt with cramps throughout the second half and did not play on the Steelers' final drive. Fantasy managers should keep a close eye on his practice reports this week. Harris was a key factor in the Steelers victory and will continued to be leaned on as a true bellcow back if healthy. His Week 6 matchup against the Seahawks sets him up to be a high end RB1.\n",
    "timestamp": "2021-10-10 08:09 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 5.4,
    "week02": 16.6,
    "week03": 21.2,
    "week04": 18.1,
    "week05": 21.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 16.6, 21.2, 18.1, 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 11.7, 12.5, 14.9, 12.7, 19.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 4.6, 4.7, 6.4, 4.3, 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.4, 16.8, 17.9, 14.2, 26.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 18.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 3,
    "avg_fp2": 25.5,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 11.78,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Derrick Henry rushed 29 times for 130 yards and three touchdowns in the Titans' Week 6 win over Jacksonville.\n",
    "report": "",
    "analysis": "The Jaguars turned it over on their opening drive, giving the Titans an early lead they never gave up. Henry scored all three of his touchdowns in the red-zone, with the longest coming from 10 yards out. Massive workloads have been there all season for Henry, who has at least 28 carries in 4-of-5 weeks, though he wasn't involved as a pass catcher despite Julio Jones being sidelined.\u00a0Henry is averaging 128 rushing yards per game and has at least 100 yards in four straight. The Titans play Buffalo on Monday night in Week 6.\n",
    "timestamp": "2021-10-10 09:41 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 9.2,
    "week02": 44.7,
    "week03": 17.9,
    "week04": 24.7,
    "week05": 31.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 44.7, 17.9, 24.7, 31.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 13.6, 21.3, 21.5, 17.4, 18.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.0, 15.4, 23.7, 18.9, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.8, 15.8, 27.1, 30.6, 24.2, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 17.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 20,
    "avg_fp2": 15.34,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 21.26,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "D'Andre Swift (groin) is questionable for Week 6 against the Bengals.\n",
    "report": "",
    "analysis": "T.J. Hockenson (knee), Jamaal Williams (hip, illness) and Swift were all limited participants at Friday's practice and are fully expected to play. Despite fighting through a nagging groin injury throughout the year, Swift has recently seen his snap rate jump to season-high marks in back-to-back games (73% < 74%). Swift remains a PPR RB1 against Cincinnati, which has allowed a league-high 41 receptions to opposing running backs.\n",
    "timestamp": "2021-10-15 07:12 PM",
    "source": "Kyle Meinke on Twitter",
    "game_day_logo": "",
    "week01": 20.4,
    "week02": 9.8,
    "week03": 20.2,
    "week04": 6.9,
    "week05": 19.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.4, 9.8, 20.2, 6.9, 19.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 17.6, 16.7, 15.1, 13.7, 17.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.7, 17.7, 5.0, 17.7, 11.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 20.7, 19.6, 12.4, 21.5, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 17.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 17,
    "avg_fp2": 21.56,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 25.84,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Austin Ekeler rushed 17 times for 66 yards and two touchdowns in the Chargers' Week 5 win over the Browns, adding five catches for 53 yards and a third touchdown on five targets.\n",
    "report": "",
    "analysis": "Ekeler now has five touchdowns in his last two games, six in his last three, and seven on the season. He scored three touchdowns all of last season. Ekeler is getting all of the red zone and goal-line looks under new OC Joe Lombardi as a legit every-down, do-it-all back. He's as locked in of a fantasy RB1 as there is ahead of a Week 6 date with the Ravens. Ekeler's three scores in this one all came in a wild fourth quarter, with four- and three-yard rushing touchdowns sandwiched around a 19-yard receiving one.\n",
    "timestamp": "2021-10-10 11:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.7,
    "week02": 18.0,
    "week03": 19.7,
    "week04": 28.0,
    "week05": 30.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 18.0, 19.7, 28.0, 30.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 11.6, 17.7, 16.7, 12.7, 17.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 4.2, 18.9, 12.0, 3.4, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 18.5, 24.0, 17.5, 9.8, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4052042.png",
    "name": "James Robinson",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 17.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 6,
    "avg_fp2": 15.7,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.3,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "James Robinson had 18 carries for 149 yards and a touchdown in Week 5 against the Titans.\n",
    "report": "",
    "analysis": "Robinson got the Jacksonville offense going early, ripping off a 58-yard run after a Dan Arnold fumble ended their opening drive. The Jags continued to use Robinson at the goal-line, with Robinson scoring his TD from one-yard out. Robinson likely could have had another touchdown, but the Jags gave Carlos Hyde a series in the second half and left Robinson on the sidelines for a game-changing drive that ended with Hyde getting stuffed on fourth down. The Jaguars should continue to feature Robinson, who has at least 75 yards and a touchdown in three straight games, for a Week 6 matchup with Miami.\u00a0\n",
    "timestamp": "2021-10-10 10:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.9,
    "week02": 7.9,
    "week03": 22.4,
    "week04": 20.1,
    "week05": 21.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.9, 7.9, 22.4, 20.1, 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 10.2, 10.1, 12.0, 13.4, 17.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.9, 9.2, 9.6, 11.3, 16.5, 15.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.7, 25.4, 16.9, 21.9, 28.3, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 16.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 16,
    "avg_fp2": 14.04,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.86,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shin",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (shin) is questionable for Week 6 against the Chiefs.\n",
    "report": "",
    "analysis": "Gibson was a late add to Washington's injury report, practicing on a limited basis for both Thursday and Friday. OC\u00a0Scott Turner noted that Gibson is not actually limited in what he can do, but it's still a slightly concerning status to carry week-to-week. Gibson is expected to play as a matchup-based RB1 with J.D. McKissic still working alongside him on passing downs.\n",
    "timestamp": "2021-10-15 05:48 PM",
    "source": "Nicki Jhabvala on Twitter",
    "game_day_logo": "",
    "week01": 10.3,
    "week02": 8.3,
    "week03": 16.9,
    "week04": 14.5,
    "week05": 20.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 8.3, 16.9, 14.5, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 16.3, 8.7, 11.1, 11.6, 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 5.5, 2.8, 5.1, 6.1, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.6, 20.6, 13.2, 18.1, 19.0, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 16.4,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 14,
    "avg_fp2": 15.48,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 22.22,
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
    "headlineNews": "Jonathan Taylor rushed 15 times for 53 yards and one touchdown in the Colts' Week 5 loss to the Ravens, adding three catches for 116 yards and a second touchdown on four targets.\n",
    "report": "",
    "analysis": "Taylor got the scoring started by catching a simple screen pass to the left on 3rd-and-15 and taking it 76 yards to the house on the opening drive. The Ravens really didn't have an answer for Taylor in the passing game, as he out-targeted backfield mate Nyheim Hines 4-1 in this one. Taylor's rushing score came from four yards out in the third quarter to give the Colts a 22-3 lead, one they would blow. Taylor now has three touchdowns over his last two games and is settling in as an every-week RB1/2 after a slow start. He gets a date with the lowly Texans in Week 6.\n",
    "timestamp": "2021-10-12 02:51 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.6,
    "week02": 5.8,
    "week03": 7.7,
    "week04": 18.9,
    "week05": 30.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 5.8, 7.7, 18.9, 30.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 18.0, 12.1, 10.6, 11.4, 16.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 27.3, 15.4, 1.9, 3.2, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 35.2, 31.9, 11.2, 13.1, 23.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 15.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 8,
    "avg_fp2": 10.48,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 15.04,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Chase Edmonds (shoulder) is questionable for Week 6 against the Browns.\n",
    "report": "",
    "analysis": "Edmonds is expected to play despite being limited throughout the week. He was notably out-touched by James Conner 11-9 in Week 5 but still garnered a 12.9% target share underneath. Edmonds remains a high-floor RB3 for PPR leagues.\n",
    "timestamp": "2021-10-15 09:21 PM",
    "source": "Josh Weinfuss on Twitter",
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 10.0,
    "week03": 11.0,
    "week04": 15.9,
    "week05": 2.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 10.0, 11.0, 15.9, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 8.9, 11.9, 9.3, 16.3, 15.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.4, 12.5, 7.9, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 10.2, 13.6, 15.7, 13.9, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 15.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 13.45,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.64,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Zack Moss rushed 11 times for 37 yards, adding 55 yards on three receptions in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Devin Singletary got the start, but Moss finished with more carries and targets again. His season got off to a shaky start \u2013 he was a healthy scratch in Week 1 \u2013 but it seems like the second-year pro has asserted himself as Buffalo's RB1. As the lead back in a high-octane offense, he's a viable starter for RB-needy teams. The Bills play a soft Titans defense in Week 6, so Moss is on the flex radar.\n",
    "timestamp": "2021-10-11 04:42 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": 14.4,
    "week03": 16.6,
    "week04": 12.1,
    "week05": 10.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 14.4, 16.6, 12.1, 10.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.3, 7.3, 17.2, 15.7, 15.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 3.6, 8.7, 10.9, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 4.9, 9.7, 21.8, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 14.7,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 23,
    "avg_fp2": 15.35,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 25.98,
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
    "headlineNews": "Darrell Henderson rushed 17 times for 82 yards and a touchdown in the Rams' Week 5 win over the Seahawks, adding a 17-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Henderson came out and dominated first quarter work before giving the Rams and fantasy managers a scare when he seemed to injure his left arm. Sony Michel dominated touches the remainder of the half, but Henderson was never officially announced with an injury and thankfully resurfaced looking no worse for the wear after the break. His five-yard touchdown rumble came on a stretch play cutback early in the third quarter. Henderson has looked laterally explosive since returning from his ribs issue, but he continues to give the Rams reason to doubt his ability to hold up on big workloads. He will nevertheless remain a high-end RB2 for Week 6 against the Giants.\u00a0\n",
    "timestamp": "2021-10-08 03:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.2,
    "week02": 15.7,
    "week03": "DNP",
    "week04": 14.1,
    "week05": 16.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.2, 15.7, 'DNP', 14.1, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.3, 'DNP', 15.2, 17.2, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 5.7, 3.1, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 12.8, 'DNP', 15.3, 13.8, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241416.png",
    "name": "Chuba Hubbard",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 14.3,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 18,
    "avg_fp2": 7.16,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 23.8,
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
    "headlineNews": "Christian McCaffrey (hamstring) won't play in Week 6 against the Vikings.\n",
    "report": "",
    "analysis": "For what it's worth, coach Matt Rhule didn't label McCaffrey's mid-week downgrade a setback \u2014 he just said he \"was not where he needed to be.\" The team is \"hoping\" to have him back at practice prior to Week 7. With Rodney Smith waived earlier in the week, Chuba Hubbard can again be considered a confident RB2 after handling 29-of-33 backfield touches in his last spot-start against the Eagles.\n",
    "timestamp": "2021-10-15 08:11 PM",
    "source": "Joe Person on Twitter",
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 1.0,
    "week03": 9.4,
    "week04": 8.1,
    "week05": 15.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 1.0, 9.4, 8.1, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 2.5, 4.4, 7.5, 12.4, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 4.1, 4.9, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 6.7, 8.5, 14.4, 19.0, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 14.0,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 22,
    "avg_fp2": 12.74,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 27.68,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals listed RB Joe Mixon as questionable for Week 6 against the Lions.\n",
    "report": "",
    "analysis": "Mixon is not only expected to play but HC Zach Taylor indicated earlier on Friday the running back should get a full workload. Mixon's matchup with the Lions comes with high-end upside, although it's possible that the Bengals win through the air instead. With Joe Burrow fully healthy, the Bengals' most efficient path to points will be through the air. Still, if Mixon returns to his pre-injury receiving role, it's hard to see how he doesn't hit RB2 value against Detroit.\n",
    "timestamp": "2021-10-15 07:34 PM",
    "source": "Ben Baby on Twitter",
    "game_day_logo": "",
    "week01": 23.0,
    "week02": 7.6,
    "week03": 9.9,
    "week04": 13.2,
    "week05": 10.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 13.3,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 2,
    "avg_fp2": 18.24,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.62,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Ezekiel Elliott (ribs) is questionable for Week 6 against the Patriots.\n",
    "report": "",
    "analysis": "Dallas labeled a season-high six players as 'questionable' including\u00a0LT Tyron Smith (neck), CB Trevon Diggs (ankle) and Elliott. The latter has been held out from practices mid-week to stay fresh for the entire season and is fully expected to play upon doing so again. Elliott should continue to be trusted as a top-four running back, no questions asked, for however long he's at full health.\n",
    "timestamp": "2021-10-15 08:25 PM",
    "source": "Michael Gehlken on Twitter",
    "game_day_logo": "",
    "week01": 4.9,
    "week02": 16.7,
    "week03": 25.1,
    "week04": 20.3,
    "week05": 24.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 16.7, 25.1, 20.3, 24.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 9.6, 10.6, 9.0, 16.1, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.8, 10.1, 19.9, 18.4, 23.7, 14.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 25.3, 25.0, 23.0, 31.9, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 12.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 12.87,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 11.42,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Dalvin Cook (ankle) was removed from Minnesota's final injury report.\n",
    "report": "",
    "analysis": "As was Justin Jefferson (ankle) and Adam Thielen (foot) as all are expected to be at full strength ahead of the team's Week 7 bye. Cook attempted to return too early in Week 4, inevitably reaggravating his ankle injury, but should be viewed as a top-two option for Sunday since he was a full participant in Thursday's and Friday's practices.\u00a0 Alexander Mattison will likely return to a direct backup role with exclusive contingency value.\n",
    "timestamp": "2021-10-15 05:21 PM",
    "source": "Field Yates on Twitter",
    "game_day_logo": "",
    "week01": 17.4,
    "week02": 15.8,
    "week03": "DNP",
    "week04": 5.4,
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.4, 15.8, 'DNP', 5.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 16.4, 'DNP', 12.3, 'DNP', 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.6, 7.7, 'DNP', 4.7, 'DNP', 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.5, 'DNP', 11.9, 'DNP', 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 12.6,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 10.96,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 22.38,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Melvin Gordon (hip) is questionable for Week 6 against the Raiders.\n",
    "report": "",
    "analysis": "Like the previous two weeks, Gordon was limited in practice on Thursday and Friday and is expected to play despite being labeled a game-time call. Suddenly battling a hip issue on top of his lower leg injury, it's still possible rookie Javonte Williams is eventually asked to carry the load if Gordon's ailments eventually hold him back. The two will continue splitting carries as co-RB3s until that point.\n",
    "timestamp": "2021-10-15 07:38 PM",
    "source": "Mike Klis on Twitter",
    "game_day_logo": "",
    "week01": 19.3,
    "week02": 7.9,
    "week03": 14.6,
    "week04": 7.7,
    "week05": 5.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 7.9, 14.6, 7.7, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 12.9, 13.5, 13.1, 10.3, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.8, 12.9, 9.7, 17.0, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 22.5, 15.9, 13.3, 21.5, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 26,
    "avg_fp2": 11.44,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 22.4,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Leonard Fournette rushed 22 times for 81 yards and two touchdowns in the Bucs' Week 6 win over the Eagles, adding six receptions for 46 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Both the carries and receptions were new season highs, while the two-score effort was his first of 2021. The totes were his most ever as a Buc, with the catches tying last year's high-water mark. Fournette both served as a battering ram and open-field tackle breaker. He hasn't made many mistakes in recent weeks as he has seized control of the Bucs' backfield away from Ronald Jones on early downs and made it difficult for Giovani Bernard to emerge in passing situations. He is a high-end RB2 who could flirt with RB1 value if this usage keeps up. This is the running back performance the Bucs so desperately wanted in 2020. The Bears are on deck for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 05:08 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 8.4,
    "week02": 9.6,
    "week03": 4.9,
    "week04": 15.3,
    "week05": 19.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 9.6, 4.9, 15.3, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 9.3, 10.6, 9.3, 12.3, 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 8.8, 7.7, 7.4, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.7, 15.8, 17.3, 13.0, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 12.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 32,
    "avg_fp2": 10.56,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 26.08,
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
    "headlineNews": "Myles Gaskin rushed five times for 25 yards and caught all 10 of his targets for 74 yards and two touchdowns in the Dolphins' Week 5 loss to the Bucs.\n",
    "report": "",
    "analysis": "A week after getting just two carries and seeing zero targets in the passing game, Gaskin handled 5-of-7 backfield carries and led Miami in receiving. He beat Jason Pierre-Paul for a 24-yard touchdown catch in the first half and then caught a one-yarder after the break to account for the Dolphins' only touchdowns. Gaskin was Jacoby Brissett's safety valve a number of times under intense pressure. Malcolm Brown didn't record a touch in this one, pointing to Miami possibly leaning back in Gaskin's direction as the backfield leader. Gaskin how has 22 catches on the year and gets a date with the Jaguars in Week 6.\n",
    "timestamp": "2021-10-10 08:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 6.6,
    "week03": 8.9,
    "week04": 0.3,
    "week05": 26.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 6.6, 8.9, 0.3, 26.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 10.0, 12.7, 11.1, 6.1, 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 2.1, 8.7, 8.6, 2.7, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 9.7, 9.7, 9.6, 4.9, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 11.9,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 21,
    "avg_fp2": 16.12,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.24,
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
    "headlineNews": "Aaron Jones (ankle) was limited in Thursday's practice.\n",
    "report": "",
    "analysis": "He's been managed in practices for most of the last three weeks, this shouldn't be a real concern for his status on Sunday against the Bears.\u00a0\n",
    "timestamp": "2021-10-14 08:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 38.5,
    "week03": 16.6,
    "week04": 9.4,
    "week05": 12.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 38.5, 16.6, 9.4, 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 7.8, 14.9, 13.4, 12.9, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 5.6, 13.2, 5.6, 8.0, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 26.6, 27.1, 21.9, 23.0, 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 11.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Pos": 4,
    "avg_fp2": 7.07,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 25.26,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Latavius Murray rushed six times for 17 yards in the Ravens' Week 5 win over the Colts.\n",
    "report": "",
    "analysis": "Murray caught 2-of-3 targets for 13 yards in the passing game, with his one missed connection being a bad drop. He got the start and out-carried Ty'Son Williams 6-4 with Le'Veon Bell inactive. The Ravens fell in a 22-3 hole and had to abandon the run game aside from Lamar Jackson keeping it when he didn't find anyone to throw to, rushing for a team-high 62 yards on 14 carries. Murray looks gassed and running on empty at 31 years old. But the Ravens seem committed to him atop the depth chart on early downs. He's still seeing the goal-line looks. Murray will be an RB3 next week against the Chargers.\n",
    "timestamp": "2021-10-12 04:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 9.6,
    "week03": 2.8,
    "week04": 11.9,
    "week05": 4.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.6, 2.8, 11.9, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.8, 6.6, 4.4, 10.6, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.3, 3.3, 0.9, 7.8, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.1, 8.9, 6.4, 14.1, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 11.4,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 13.13,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 11.78,
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
    "headlineNews": "Josh Jacobs (illness) was removed from Las Vegas' final injury report.\n",
    "report": "",
    "analysis": "As was Peyton Barber (turf toe), who was a full participant in practice throughout the week. Jacobs has handled\u00a028-of-32 running back carries in Las Vegas' last two games but a new interim coach, not to mention Barber's presence, threatens his floor-ceiling combo. He should still be trusted as a usage-based RB2 until coach\u00a0Rich Bisaccia proves otherwise, which could be as early as Sunday.\n",
    "timestamp": "2021-10-15 09:03 PM",
    "source": "Paul Gutierrez on Twitter",
    "game_day_logo": "",
    "week01": 16.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 8.2,
    "week05": 14.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 'DNP', 'DNP', 8.2, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 'DNP', 'DNP', 13.9, 12.5, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 'DNP', 'DNP', 13.8, 18.8, 19.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 'DNP', 'DNP', 17.1, 23.7, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 9.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 13,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.62,
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
    "headlineNews": "Kenneth Gainwell played 23 percent of the Eagles' offensive snaps Thursday night against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Gainwell's takeover of the Philadelphia backfield has been put on hold, maybe permanently, as Miles Sanders played 83 percent of the team's snaps against Tampa. Over the past two weeks, Gainwell hasn't even been deployed as a pass-catching back when the Eagles are trailing. His usage has gone from unpredictable to nonexistent. Seemingly his only path to consistent touches would be a Sanders injury. Gainwell is a hold in leagues with deeper benches.\u00a0\n",
    "timestamp": "2021-10-15 12:46 PM",
    "source": "Jeff McLane on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 15.3,
    "week02": 6.4,
    "week03": 7.0,
    "week04": 6.2,
    "week05": 7.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.3, 6.4, 7.0, 6.2, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 16.5, 11.1, 16.7, 7.8, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 6.2, 5.3, 9.1, 3.5, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 21.1, 10.8, 14.0, 11.1, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 9.6,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 27,
    "avg_fp2": 7.86,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.0,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Damien Harris (ribs) is questionable for Week 6 against the Cowboys.\n",
    "report": "",
    "analysis": "Even if active, Harris lacks an enticing three-down ceiling after he combined with Rhamondre Stevenson for seven routes to Brandon Bolden's 19 in Week 5. There's also a chance Stevenson is integrated more on early downs after Harris coughed up the football on Houston's one-yard line in that game. Consider Harris a touchdown-or-bust RB3 against Dallas.\n",
    "timestamp": "2021-10-15 08:34 PM",
    "source": "Doug Kyed on Twitter",
    "game_day_logo": "",
    "week01": 10.7,
    "week02": 12.9,
    "week03": 2.1,
    "week04": 3.8,
    "week05": 9.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 12.9, 2.1, 3.8, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 13.8, 12.6, 9.5, 10.6, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.5, 5.6, 1.8, 4.7, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.0, 8.8, 11.0, 13.7, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 9.2,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 7,
    "avg_fp2": 5.98,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 23.4,
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
    "headlineNews": "ESPN's Jeremy Fowler reports the Chiefs have \"looked into\" Colts RB Marlon Mack ahead of the NFL's November 2 trade deadline.\u00a0\n",
    "report": "",
    "analysis": "Mack is reportedly on the trading block and Kansas City is needy in the backfield with Clyde Edwards-Helaire (MCL sprain) sidelined for at least a few weeks. Mack impressed in limited duty Monday night against Baltimore, gaining 47 yards on five rushes and catching a pass for seven yards, appearing explosive on a few runs a year after tearing his Achilles. Mack could instantly become the Chiefs' No. 1 running back once he's acclimated with the team's playbook, as CEH has done nothing to show he's an every-down NFL back. Fantasy managers in need of running back help should pick up Mack as soon as possible on the chance KC makes a deal with the Colts in the next few weeks.\u00a0\n",
    "timestamp": "2021-10-12 03:02 PM",
    "source": "Mike Clay on Twitter ",
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.8,
    "week03": 4.9,
    "week04": 12.8,
    "week05": 6.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.8, 4.9, 12.8, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895827.png",
    "name": "Ty'Son Williams",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 8.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Pos": 4,
    "avg_fp2": 8.12,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 25.26,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ty'Son Williams rushed four times for six yards in the Ravens' Week 5 win over the Colts.\n",
    "report": "",
    "analysis": "Williams was active again after being a healthy scratch last week in Denver. His four carries were second on the team to Latavius Murray's six, who turned his into 17 yards. Williams was playing some third downs early, but it was Devonta Freeman in hurry-up mode late in the comeback win. Williams remains off the fantasy radar; the coaches just don't seem to trust him.\n",
    "timestamp": "2021-10-12 04:21 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.9,
    "week02": 10.3,
    "week03": 2.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.9, 10.3, 2.2, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 17.0, 18.4, 'DNP', 'DNP', 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.0, 10.7, 'DNP', 'DNP', 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 26.0, 30.8, 'DNP', 'DNP', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 8.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 16,
    "avg_fp2": 7.8,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.86,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "J.D.\u00a0McKissic has two rushes for -1 yards in Washington's Week 5 loss to the Saints, adding one reception for eight yards.\u00a0\n",
    "report": "",
    "analysis": "McKissic played his usual role in the Football Team's two minute offense and on most third downs. He was targeted four times, twice more than Antonio Gibson. McKissic's weekly fortunes will be nearly impossible for predict, as is the case for most pass-catching specialists. He has a shot to see extended run next week against the Chiefs, who should put Washington in points-chasing mode early.\u00a0\n",
    "timestamp": "2021-10-10 09:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.8,
    "week02": 17.8,
    "week03": 4.8,
    "week04": 14.4,
    "week05": 1.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 17.8, 4.8, 14.4, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 4.5, 4.2, 4.9, 5.6, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.3, 0.1, 0.7, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 7.4, 8.2, 8.9, 9.6, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035886.png",
    "name": "Khalil Herbert",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 8.1,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 9,
    "avg_fp2": 1.64,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.76,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Khalil Herbert rushed 18 times for 75 yards in Chicago's Week 5 win over the Raiders.\n",
    "report": "",
    "analysis": "Herbert, who averaged a career 6.1 yards per carry in college behind teammate and UDFA Pooka Williams, out-carried Damien Williams 18-16 in the duo's first co-spot start without David Montgomery (knee). Williams did register all three of Chicago's backfield targets and out-carry Herbert 3-1 inside the 10, but the latter's timeshare was still unexpected for an offense that called 34 runs to 21 pass attempts. That usage in a concerted run-first attack makes Herbert a coveted addition off waiver wires ahead of Week 6.\n",
    "timestamp": "2021-10-11 01:04 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.7,
    "week05": 7.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.7, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.9, 1.6, 0.7, 1.0, 2.2, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.9, 3.8, 3.4, 3.6, 4.6, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122866.png",
    "name": "Devontae Booker",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 8.1,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 6.1,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.38,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Saquon\u00a0Barkley suffered a \"low\" left ankle sprain in Week 5 and is \"likely\" to miss the Giants' Week 6 game against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Barkley is \"week to week,\" per Rapoport, and hopes to only miss Week 6. Fantasy managers can safely assume Barkley will miss next week's matchup against the Rams, setting up Devontae Booker as the team's primary back. Booker saw 19 touches and scored two touchdowns in relief of Barkley against the Cowboys. His pass game involvement should give Booker a nice weekly floor for as long as Barkley is sidelined. He should be prioritized by any fantasy player in need of running back help.\u00a0\n",
    "timestamp": "2021-10-12 02:53 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 1.8,
    "week02": 1.6,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 19.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 1.6, 'DNP', 'DNP', 19.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.4, 'DNP', 'DNP', 3.8, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 'DNP', 'DNP', 2.7, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 24.1, 'DNP', 'DNP', 5.5, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 5,
    "avg_fp2": 8.12,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.64,
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
    "headlineNews": "Devin Singletary rushed six times for 25 yards, adding one reception on two targets for -2 yards in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Singletary got the start, but it was Zack Moss who operated as Buffalo's lead running back for most of the night. After a strong start to the year, Singletary has taken a backseat to his backfield counterpart, making him difficult to trust for fantasy purposes. He's worth holding onto because he still has some role and would become relevant if anything happens to Moss, but Singletary looks like the RB2 for the Bills right now. Leave him on your bench in Week 6.\n",
    "timestamp": "2021-10-11 06:50 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 9.5,
    "week02": 16.1,
    "week03": 3.1,
    "week04": 9.1,
    "week05": 2.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 16.1, 3.1, 9.1, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.1, 14.3, 9.9, 9.8, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 11.5, 7.4, 5.0, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.9, 16.6, 13.7, 9.0, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 7.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 2,
    "avg_fp2": 10.76,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.62,
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
    "headlineNews": "Tony Pollard had 14 rushes for 75 yards in the Cowboys' Week 5 win against the Giants, adding four receptions for 28 yards.\u00a0\n",
    "report": "",
    "analysis": "Pollard once again didn't find the end zone -- he's scored once this season -- but his usage was encouraging in positive game script. Ezekiel Elliott had seven more rushing attempts than Pollard, while Pollard saw four targets to Zeke's three. Both Dallas backs are usable for fantasy purposes when the Cowboys play with a lead, as they have for the past four games. Pollard will be a less reliable option if or when the Cowboys face a deficit. Against New England in Week 6, they should again have game script on their side, making Pollard a candidate for a dozen touches.\u00a0\n",
    "timestamp": "2021-10-11 12:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.3,
    "week02": 21.5,
    "week03": 7.0,
    "week04": 6.7,
    "week05": 12.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.3, 21.5, 7.0, 6.7, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 5.9, 7.9, 6.1, 9.2, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.0, 0.0, 0.5, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.5, 11.4, 13.0, 6.1, 8.9, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361579.png",
    "name": "Javonte Williams",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 7.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 12,
    "avg_fp2": 8.34,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 22.38,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Melvin Gordon rushed nine times for 34 yards in the Broncos' Week 5 loss to the Steelers, adding two receptions for 9 yards on two targets.\n",
    "report": "",
    "analysis": "Gordon was badly outplayed by Javonte Williams, with the rookie totaling twice as many yards on the same number of opportunities. Gordon will again be a low upside FLEX option when the Broncos take on the Raiders in Week 6. He should remain fantasy relevant for at least a few more weeks.\n",
    "timestamp": "2021-10-10 09:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.6,
    "week02": 7.9,
    "week03": 11.7,
    "week04": 7.4,
    "week05": 10.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 7.9, 11.7, 7.4, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 5.7, 7.0, 7.2, 5.5, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 2.9, 1.5, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 10.0, 12.8, 15.1, 11.0, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4371733.png",
    "name": "Kenneth Gainwell",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 7.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 13,
    "avg_fp2": 8.64,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.62,
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
    "headlineNews": "Kenneth Gainwell played 23 percent of the Eagles' offensive snaps Thursday night against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Gainwell's takeover of the Philadelphia backfield has been put on hold, maybe permanently, as Miles Sanders played 83 percent of the team's snaps against Tampa. Over the past two weeks, Gainwell hasn't even been deployed as a pass-catching back when the Eagles are trailing. His usage has gone from unpredictable to nonexistent. Seemingly his only path to consistent touches would be a Sanders injury. Gainwell is a hold in leagues with deeper benches.\u00a0\n",
    "timestamp": "2021-10-15 12:46 PM",
    "source": "Jeff McLane on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 11.3,
    "week02": 6.2,
    "week03": 4.9,
    "week04": 17.9,
    "week05": 2.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 6.2, 4.9, 17.9, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 9.8, 6.5, 8.5, 6.1, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.3, 2.1, 2.6, 1.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.7, 15.6, 10.7, 14.9, 9.4, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 6.9,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 23,
    "avg_fp2": 4.86,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 25.98,
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
    "headlineNews": "Sony Michel rushed 11 times for 37 yards and a touchdown in the Rams' Week 5 win over the Seahawks, adding an eight-yard reception.\u00a0\n",
    "report": "",
    "analysis": "Nearly all of Michel's work came on a second quarter drive where Darrell Henderson was on the sideline getting his left arm worked on. Likely to Michel's surprise, Henderson managed to return. Probably to Henderson's surprise, Michel resurfaced for a two-yard touchdown in the fourth quarter. Michel made a nice cutback. Henderson keeps giving the Rams' coaching staff reason to believe he can't stay on the field, but he has looked far superior to Michel when healthy, even if Michel has looked fine. The Giants are on tap for Week 6.\u00a0\n",
    "timestamp": "2021-10-08 04:25 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.2,
    "week02": 4.6,
    "week03": 9.4,
    "week04": -0.9,
    "week05": 11.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 6.9,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 14,
    "avg_fp2": 6.44,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 22.22,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Nyheim Hines rushed four times for 18 yards in the Colts' Week 5 loss to the Ravens.\n",
    "report": "",
    "analysis": "He failed to catch his lone target in the passing game. With the Colts dominating the Ravens much of the evening, jumping out to a 22-3 lead in the third quarter, Hines wasn't need in the passing game. He was actually out-targeted 4-1 by Jonathan Taylor, who turned his looks into 116 yards, including a 76-yard catch-and-run score on a screen. Hines has handled four-or-fewer touches in 3-of-5 games this season after signing a big extension before Week 1. His stat lines are impossible to predict ahead of a Week 6 date with the Texans in what will likely be another Taylor game.\n",
    "timestamp": "2021-10-12 04:15 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.2,
    "week02": 2.7,
    "week03": 16.4,
    "week04": 0.1,
    "week05": 1.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 2.7, 16.4, 0.1, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 10.2, 6.7, 8.9, 6.8, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 4.7, 14.0, 6.2, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.3, 13.2, 16.7, 11.6, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 6.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 20,
    "avg_fp2": 10.8,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 21.26,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jamaal Williams (hip, illness) is questionable for Week 6 against the Bengals.\n",
    "report": "",
    "analysis": "Like D'Andre Swift (groin) and T.J. Hockenson (knee), Williams is battling through injuries but participated in Friday's practice and is fully expected to play. Swift most recently played a season-high 74% of Detroit's offensive snaps but merely out-touched Williams 17-15. The latter remains a better bet for standard leagues and should be treated as a RB3/4 if active.\n",
    "timestamp": "2021-10-15 07:31 PM",
    "source": "Kyle Meinke on Twitter",
    "game_day_logo": "",
    "week01": 21.0,
    "week02": 5.2,
    "week03": 13.7,
    "week04": 6.6,
    "week05": 7.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 5.2, 13.7, 6.6, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 12.3, 10.3, 8.0, 7.6, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.0, 8.1, 7.3, 3.9, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 14.2, 12.3, 13.6, 6.4, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 6.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 5.6,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 15.58,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Mark Ingram rushed 16 times for 41 yards in Houston's Week 5 loss to New England.\u00a0\n",
    "report": "",
    "analysis": "There are three Ingram box score possibilities through five weeks: six carries, 12-14 carries, or 26 carries in the one game the Texans actually ran the ball well in. Even though the Texans produced 22 points, they were only able to hand Ingram one red zone carry, which he took for two yards on the 20. He remains a low-upside, TD-or-bust volume FLEX ahead of next week's game against the Colts.\u00a0\n",
    "timestamp": "2021-10-10 10:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.5,
    "week02": 4.5,
    "week03": 2.5,
    "week04": 2.4,
    "week05": 4.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.5, 4.5, 2.5, 2.4, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.8, 13.3, 8.3, 9.0, 7.7, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 4.3, 3.9, 9.3, 4.2, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 27.1, 7.8, 13.8, 8.9, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046409.png",
    "name": "Alex Collins",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 6.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 6.58,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.16,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Chris Carson (neck) remained sidelined at Seahawks practice on Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's extra bad news, as coach Pete Carroll had claimed Carson would return on Thursday. He is now looking doubtful for Sunday evening's game against the Steelers, though the Seahawks are the kind of team that will probably take this down to the wire. If Carson doesn't get in at least a \"limited\" session on Friday, however, it's hard to see him having any shot at suiting up. Alex Collins is the next man up with DeeJay Dallas seemingly the preferred third-down option over Travis Homer. Russell Wilson is sidelined and DK Metcalf (foot) isn't practicing, placing enormous pressure on Collins and the Seahawks' run game.\u00a0\n",
    "timestamp": "2021-10-14 11:16 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.8,
    "week04": 14.8,
    "week05": 8.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.8, 14.8, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.0, 4.0, 8.4, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.7, 4.6, 9.3, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.4, 6.9, 13.0, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 26,
    "avg_fp2": 7.72,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 22.4,
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
    "headlineNews": "Giovani Bernard caught two passes for four yards in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Bernard's two grabs were his lone targets. Rendered completely irrelevant by his own injury issues and Leonard Fournette's every-down competence, Bernard has eight touches in two games since returning from his knee ailment. Despite Bernard's nine-catch outburst in Week 3, there is little light at the end of the PPR FLEX tunnel.\u00a0\u00a0\n",
    "timestamp": "2021-10-15 05:14 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 2.2,
    "week02": 2.6,
    "week03": 15.6,
    "week04": "DNP",
    "week05": 10.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 2.6, 15.6, 'DNP', 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 2.8, 2.4, 'DNP', 5.1, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 3.5, 6.3, 'DNP', 12.4, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.5, 10.6, 'DNP', 20.9, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 6.3,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 8,
    "avg_fp2": 11.1,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 15.04,
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
    "headlineNews": "James Conner rushed 10 times for 29 yards and a touchdown in the Cardinals' Week 5 win over the 49ers, adding an eight-yard catch.\u00a0\n",
    "report": "",
    "analysis": "It was a typical day at the office for Conner, who punched in a one-yard rush in the first quarter after Rondale Moore did all the work to get down to the goal line. Conner's carries were his second fewest of the season as the Cardinals' offense was a bit discombobulated vs. a swarming Niners front. Conner has little in the way of upside, but his scoring-based floor has been bankable in this elite offense. Arizona ventures to Cleveland for Week 6.\u00a0\n",
    "timestamp": "2021-10-11 12:29 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 2.6,
    "week03": 17.8,
    "week04": 19.6,
    "week05": 10.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 2.6, 17.8, 19.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 12.7, 5.9, 9.1, 8.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 2.0, 11.3, 10.2, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 19.9, 11.6, 18.0, 16.8, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15478.png",
    "name": "Brandon Bolden",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.2,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 27,
    "avg_fp2": 3.48,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.0,
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
    "headlineNews": "Brandon Bolden rushed two times for 25 yards, adding six yards on four catches, in New England's Week 5 win over Houston.\u00a0\n",
    "report": "",
    "analysis": "24 of the yards came on one carry -- a sweep in the fourth quarter -- and the Patriots seem to be struggling to understand the notion that Bolden isn't James White. He is, however, a trusted member of this backfield. Bolden deserves PPR consideration in deeper leagues but doesn't appear to be a real threat to carries at this time.\u00a0\n",
    "timestamp": "2021-10-10 09:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.1, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.5, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Jacksonville Jaguars",
    "projected": 6.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 6,
    "avg_fp2": 3.3,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.3,
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
    "headlineNews": "Jaguars declared\u00a0RB Carlos Hyde (shoulder) inactive for Week 4 against the Bengals.\n",
    "report": "",
    "analysis": "Also inactive for the Jaguars are K Josh Lambo, DT Jay Tufele, CB Nevin Lawson, OLB Jordan Smith and DL Roy Robertson-Harris. Hyde has operated as James Robinson's backup for the past two weeks. He is reportedly dealing with a shoulder injury and didn't feel right before the game. Dare Ogunbowale will take on the backup duties for this game. Ogunbowale is a capable pass-catcher and contributes on special teams but doesn't figure to eat into Robinson's rushing role as much as Hyde would have. Hyde's absence solidifies Robinson as a top-20 fantasy back on the week.\n",
    "timestamp": "2021-10-01 04:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.8,
    "week02": 0.7,
    "week03": 4.4,
    "week04": "DNP",
    "week05": 1.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.8, 0.7, 4.4, 'DNP', 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 4.1, 4.9, 'DNP', 6.1, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.9, 3.8, 'DNP', 5.6, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 15.6, 10.1, 'DNP', 10.9, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243315.png",
    "name": "Salvon Ahmed",
    "depthchart": "Backup: RB-2",
    "team": "Miami Dolphins",
    "projected": 6.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 32,
    "avg_fp2": 2.18,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 26.08,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Myles Gaskin rushed two times for three yards in the Dolphins' Week 4 loss to the Colts.\n",
    "report": "",
    "analysis": "Gaskin watched from the sidelines as Malcolm Brown totaled eight carries and Salvon Ahmed earned three rushes. Ceding work to Brown has been the norm for Gaskin this year but he also failed to see a target after seeing 16 looks in the passing game in his first three outings of the year. Brown and Ahmed combined for three targets. Miami couldn't mount much of an offense but Gaskins' role is the bigger concern. If he isn't involved as a receiver going forward, he'll be dusted for fantasy purposes. He's an easy stay-away in a grueling matchup with the Bucs next week.\u00a0\n",
    "timestamp": "2021-10-03 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.8,
    "week02": 1.7,
    "week03": 0.0,
    "week04": 2.3,
    "week05": 3.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 1.7, 0.0, 2.3, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 1.5, 3.5, 1.9, 3.0, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 2.3, 0.2, 3.3, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 16.9, 7.9, 5.6, 7.0, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035826.png",
    "name": "Demetric Felton",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 5.9,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 4.15,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.24,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Kareem Hunt (wrist, knee) is questionable for Week 6 against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Hunt finally got in a \"limited\" practice on Friday after Wednesday/Thursday DNPs, but he seems ready to carry the load in Nick Chubb's absence, who was officially declared out Friday. Hunt was already flirting with RB1 value, and will now be a locked-in RB1 vs. a Cardinals defense that hemorrhages production on the ground. Potential bad weather could also make for a run-friendly environment. The concern, of course, is Hunt's health. He was not on the Week 5 injury report, so this isn't something he had previously been playing through. Hybrid rookie slasher\u00a0Demetric Felton and veteran third-down back D'Ernest Johnson will be the next men up behind Hunt. Neither are a particularly compelling FLEX play even with Hunt's injury issues.\u00a0\n",
    "timestamp": "2021-10-15 09:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 2.3,
    "week04": 2.2,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 2.3, 2.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 4.7, 4.6, 3.4, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.9, 0.9, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 8.8, 10.8, 6.5, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 5.9,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 6.2,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 15.58,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "David Johnson rushed two times for five yards in Houston's Week 5 loss to New England, adding five catches for 46 yards.\n",
    "report": "",
    "analysis": "Johnson was used out wide a lot more in this game than he had been in the past, with Houston not having a healthy slot receiver on the roster. He caught a quick slant on fourth down to convert early in the game, and had a linebacker beat on the outside if Davis Mills could throw a credible ball in that situation. Johnson has been the leader in total yards in three of the last four weeks for the Texans, and all three times he's been between 47 and 51 total yards. Assuming a healthy Danny Amendola return in Week 6, he's a FLEX option for the desperate against the Colts.\n",
    "timestamp": "2021-10-10 10:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.3,
    "week02": 5.7,
    "week03": 1.1,
    "week04": 6.3,
    "week05": 7.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 5.7, 1.1, 6.3, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 4.3, 4.4, 4.5, 5.4, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 5.2, 1.0, 6.5, 8.7, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 22.7, 11.3, 16.7, 12.4, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Carolina Panthers",
    "projected": 5.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 18,
    "avg_fp2": 1.83,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 23.8,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Chuba Hubbard rushed 24 times for 101 yards in the Panthers' Week 5 loss to the Eagles, adding five receptions for 33 yards.\n",
    "report": "",
    "analysis": "After giving up receiving duties to Rodney Smith last week, Hubbard dominated the backfield work for Carolina this time around. Smith did not earn a touch while Royce Freeman totaled four yards on four touches. Hubbard tied Robby Anderson for second on the team in targets. Despite Hubbard failing to find the end zone, this was the performance he needed to have to be worth stashing as Christian McCaffrey's backup. McCaffrey is expected to return next week so Hubbard can be put back on the fantasy bench. Still, with 29 touches in a losing effort, Hubbard is clearly the workhorse fantasy managers hoped he would be in the event of a McCaffrey injury.\u00a0\n",
    "timestamp": "2021-10-10 08:32 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.0,
    "week04": 1.2,
    "week05": 1.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.0, 1.2, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.9, 4.3, 6.3, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.4, 3.8, 3.6, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 3.4, 6.2, 5.0, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127586.png",
    "name": "Jeremy McNichols",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 5.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 3,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 11.78,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Jeremy McNichols caught 8-of-12 targets for 74 yards, adding 11 yards on one carry in the Titans' Week 4 loss to the Jets.\n",
    "report": "",
    "analysis": "McNichols is the pass-catching back alongside Derrick Henry, and he saw increased usage with the Titans operating in negative script for part of the game and A.J. Brown and Julio Jones out. He'll likely have a few usable weeks, but McNichols is certainly not going to be a dependable option on a weekly basis.\n",
    "timestamp": "2021-10-04 05:18 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 4.8,
    "week02": 4.4,
    "week03": 8.1,
    "week04": 12.5,
    "week05": 4.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.4, 8.1, 12.5, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.8, 6.8, 6.9, 8.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 3.0, 6.1, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.6, 5.0, 3.4, 6.1, 7.9, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16782.png",
    "name": "Jerick McKinnon",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 7,
    "avg_fp2": 0.88,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 23.4,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs placed\u00a0RB\u00a0Clyde Edwards-Helaire (knee) on injured reserve.\n",
    "report": "",
    "analysis": "This was expected after Edwards-Helaire was said to miss \"a few weeks\" for recovery. Darrel 'The Mentor' Williams closed Sunday night's blowout with five touches (and four targets) to Jerick McKinnon\u2019s one after Edwards-Helaire was helped off the field in the third quarter, suggesting Williams will be treated as a workhorse without CEH for the team's soft upcoming schedule against The Football Team, Titans, Giants, Packers, Raiders, and Cowboys. McKinnon has also handled just one carry all year. The team additionally signed RB Derrick Gore from the practice squad as insurance.\n",
    "timestamp": "2021-10-12 06:48 PM",
    "source": "Kansas City Chiefs on Twitter",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.9,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 2.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.9, 0.0, 0.0, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 1.8, 2.7, 1.4, 1.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.4, 2.0, 5.1, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 14.0, 5.1, 9.3, 1.3, 3.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239934.png",
    "name": "A.J. Dillon",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 5.4,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 21,
    "avg_fp2": 7.18,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.24,
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
    "headlineNews": "Speaking Monday, Packers coach Matt LaFleur said he wished he had gotten AJ Dillon more than 12 touches in Sunday's overtime win over the Bengals, and that the team is \"confident\" in Dillon's receiving skills.\u00a0\n",
    "report": "",
    "analysis": "The Milwaukee Journal-Sentinel's Tom Silverstein paraphrased\u00a0LaFleur as saying that Dillon's receiving talent has been evident and that the team feels confident in his skills in that aspect of the game. Dillon caught a career-high four passes in Cincy, nearly doubling his previous season total and literally doubling his 2020 total. Dillon caught only 21 balls in three years at Boston College. If the Pack actually trust Dillon in the passing game, it could make for much more of a 1A/1B situation with Aaron Jones, more like they had when Jamaal Williams was still in town. Dillon has 28 total touches over the past two weeks, with one of those games being a comfortable win and the other yesterday's see-saw affair. Dillion has stabilized his FLEX floor and is pushing for more.\u00a0\n",
    "timestamp": "2021-10-11 09:11 PM",
    "source": "Tom Silverstein on Twitter ",
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.1,
    "week03": 3.6,
    "week04": 10.2,
    "week05": 15.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.1, 3.6, 10.2, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 4.4, 6.2, 4.9, 3.9, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.0, 22.1, 0.3, 3.7, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.0, 2.6, 28.0, 5.4, 8.1, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925346.png",
    "name": "Derrick Gore",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 5.4,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 7,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 23.4,
    "fanduelSalary": "$1",
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
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Backup: RB-2",
    "team": "Las Vegas Raiders",
    "projected": 5.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 5.2,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 11.78,
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
    "headlineNews": "Kenyan Drake totaled two carries for 11 yards in Las Vegas' Week 5 loss to Chicago.\n",
    "report": "",
    "analysis": "Even with Peyton Barber battling a turf toe and being unavailable the past two games, Drake has totaled three touches behind Josh Jacobs' 37 in that span. Drake, the league's highest-paid backup, is clearly in coach Jon Gruden's doghouse after blowing a blitz pickup in the fourth quarter of Las Vegas' Week 3 overtime win. He can be universally dropped across all formats.\n",
    "timestamp": "2021-10-11 03:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 8.0,
    "week03": 7.2,
    "week04": 0.2,
    "week05": 1.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 8.0, 7.2, 0.2, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 10.1, 14.2, 10.8, 8.2, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.0, 19.1, 14.8, 7.7, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 22.8, 24.2, 19.9, 13.3, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3910544.png",
    "name": "Joshua Kelley",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 5.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 17,
    "avg_fp2": 1.7,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 25.84,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers RB Justin Jackson (groin) is doubtful for Week 5 against the Browns.\n",
    "report": "",
    "analysis": "If Jackson can't go, it should open the door for Joshua Kelley to see his first snap of the season. There should theoretically be value behind Austin Ekeler in this backfield, but Jackson and Larry Rountree have been uninspiring this season. Kelley didn't show much in college, or as a rookie, or in the preseason, but perhaps Sunday is his day.\n",
    "timestamp": "2021-10-08 08:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 1.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.7, 13.1]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 23.5,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 19.32,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 36.8,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill (quad) remained sidelined for Thursday's practice.\n",
    "report": "",
    "analysis": "Battling a quad contusion suffered in Sunday night's blowout loss, Hill's status is truly up in the air given his back-to-back DNPs mid-week. Mecole Hardman, originally drafted as insurance for Hill, would naturally slide into the latter's role on the boundary if Hill can't go. Demarcus Robinson, Byron Pringle, and Josh Gordon are less confident re-draft fliers and thin DFS darts in that scenario.\n",
    "timestamp": "2021-10-14 04:56 PM",
    "source": "Sam McDowell on Twitter",
    "game_day_logo": "",
    "week01": 31.6,
    "week02": 4.4,
    "week03": 7.2,
    "week04": 42.1,
    "week05": 11.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.6, 4.4, 7.2, 42.1, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 17.4,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 3,
    "avg_fp2": 20.12,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.16,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Mike Williams (knee) is questionable for Week 6 against the Ravens.\n",
    "report": "",
    "analysis": "Williams didn't practice at all throughout the week but is still considered a game-time call. With two more targets than Big Mike (53-51) on the entire year, Keenan Allen is the obvious pivot as a target hog if the former is eventually ruled out. If active, Williams should still be entrusted in starting lineups as a (potentially limited) high-floor WR2 given his involvement from Justin Herbert in the week's fifth-highest total.\n",
    "timestamp": "2021-10-15 08:31 PM",
    "source": "Daniel Popper on Twitter",
    "game_day_logo": "",
    "week01": 18.2,
    "week02": 18.6,
    "week03": 29.7,
    "week04": 1.6,
    "week05": 32.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.2, 18.6, 29.7, 1.6, 32.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 8.9, 10.8, 16.9, 10.9, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 6.4, 12.0, 6.6, 5.3, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 16.1, 18.2, 11.6, 9.8, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 16.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 16.16,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 37.48,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "DK Metcalf (foot) was removed from Seattle's final injury report.\n",
    "report": "",
    "analysis": "Metcalf was actually limited for Friday's practice but was still removed from the final injury report altogether. His ceiling with Geno Smith is more concerning than his availability for Sunday night. Metcalf should still be trusted as a low-end WR1 unless/until Geno proves otherwise.\n",
    "timestamp": "2021-10-15 09:19 PM",
    "source": "Mike Dugar on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 14.0,
    "week02": 8.3,
    "week03": 19.7,
    "week04": 14.5,
    "week05": 24.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 8.3, 19.7, 14.5, 24.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 15.3, 10.1, 8.5, 12.7, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 4.9, 7.6, 2.5, 9.7, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 20.5, 14.0, 13.4, 14.1, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 15.5,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 12.24,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 35.14,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Brandin Cooks caught 3-of-5 targets for 23 yards in Houston's Week 5 loss to New England.\u00a0\n",
    "report": "",
    "analysis": "The Patriots have had a past tendency to zoom the focus in on one target when they perceive that target is important, and they did just that to Cooks. Don't worry about it too much, Cooks was still heavily involved in the passing script. Davis Mills did a better job of not throwing him bad balls and that led to more targets for the rest of the Texans. Cooks remains a WR2 with a rough floor in Houston's bad games as they head in to a Week 6 divisional matchup against the Colts.\u00a0\n",
    "timestamp": "2021-10-10 10:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 18.3,
    "week03": 16.2,
    "week04": 7.2,
    "week05": 3.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 18.3, 16.2, 7.2, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 12.4, 13.2, 8.2, 11.6, 15.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 4.1, 11.9, 10.4, 7.5, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.3, 19.3, 19.2, 22.1, 13.9, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 15.1,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 36.9,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jakobi Meyers caught 4-of-5 targets for 56 yards in New England's Week 5 win over Houston.\u00a0\n",
    "report": "",
    "analysis": "He dropped a deep shot that would have gone for about 20 yards in the two-minute drill to end the half, but remains the most-targeted Patriots wideout. He came up one yard short on second-and-goal from the 7, meaning it remains impossible for Meyers to actually score a touchdown. He'll face a much tougher matchup against the Cowboys in Week 6.\u00a0\n",
    "timestamp": "2021-10-10 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 5.8,
    "week03": 13.9,
    "week04": 12.8,
    "week05": 7.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 5.8, 13.9, 12.8, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.0, 6.5, 11.0, 11.6, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.1, 4.2, 7.2, 10.9, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 13.4, 10.0, 10.4, 14.7, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 14.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 15.25,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 35.84,
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
    "headlineNews": "Diontae Johnson caught 2-of-2 target for 72 yards and one touchdown in the Steelers' Week 5 win over the Broncos.\n",
    "report": "",
    "analysis": "It was an odd game for Johnson. Usually peppered with targets, Johnson saw just two on the day. Luckily, one of those two was a 50-yard TD where Ben Roethlisberger hit him in stride deep down the sideline. It was not his typical high volume, low aDOT role. The Steelers leaned heavily on the run game against the Broncos and limited\u00a0Roethlisberger's attempts. They could opt to do so again next week. Johnson looks like a low-end WR2 in Week 6 against the Seahawks.\n",
    "timestamp": "2021-10-12 03:00 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 12.1,
    "week02": 15.0,
    "week03": "DNP",
    "week04": 19.7,
    "week05": 14.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 15.0, 'DNP', 19.7, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 12.8, 'DNP', 13.6, 12.1, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 3.3, 'DNP', 5.3, 10.0, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 17.4, 'DNP', 9.9, 14.6, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 13.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 16.23,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.88,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Justin Jefferson (ankle) was removed from Minnesota's final injury report.\n",
    "report": "",
    "analysis": "Nothing to see here. Jefferson was absent from practice throughout the week but, with Minnesota's bye just around the corner in Week 7, is presumably at full health; he'd likely be held out if not. Dalvin Cook and Adam Thielen were also notably cleared from the team's final injury report. Jefferson can continue to be considered a confident WR1 given his lead in nearly every receiving metric over Thielen this year.\n",
    "timestamp": "2021-10-15 06:24 PM",
    "source": "Field Yates on Twitter",
    "game_day_logo": "",
    "week01": 10.04,
    "week02": 15.5,
    "week03": 22.3,
    "week04": 17.4,
    "week05": 15.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.04, 15.5, 22.3, 17.4, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 12.8, 8.2, 13.8, 9.9, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 7.9, 15.5, 8.6, 9.9, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 20.2, 19.7, 20.1, 20.2, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 13.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 11.48,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 39.96,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stefon Diggs has the fifth most downfield targets among wide receivers through Week 5.\u00a0\n",
    "report": "",
    "analysis": "His 11 targets of more than 20 yards trails only Courtland Sutton, Marquise Brown, Tyler Lockett, and Ja'Marr Chase, each of whom has 14 deep targets. Diggs' high-value looks are certainly there, even as he's converted just four of those downfield looks for 170 yards. Diggs leads Buffalo in target share (27 percent) and air yards share (36 percent). While teammate Emmanuel Sanders has made the most of his nine downfield targets -- two of which resulted in long touchdowns -- Diggs is getting his opportunities. He has a good chance of breaking out this week against a Tennessee defense allowing 12.5 yards per completion, the league's fourth highest rate.\u00a0\n",
    "timestamp": "2021-10-15 03:05 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 11.4,
    "week02": 14.0,
    "week03": 9.2,
    "week04": 14.9,
    "week05": 7.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 14.0, 9.2, 14.9, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.4, 15.2, 10.8, 12.2, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.4, 6.4, 10.2, 7.8, 15.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 20.2, 14.7, 18.3, 17.6, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 13.7,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 7.96,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 36.8,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Mecole Hardman caught 9-of-12 targets for 76 yards in the Chiefs' Week 5 loss to the Bills.\n",
    "report": "",
    "analysis": "Hardman led Kansas City with only 76 receiving yards. Tyreek Hill and Travis Kelce both had double-digit targets as well, but they were blanketed by the Bills' defense all night long. Hardman figures to have a few good games this year, but he's the tertiary option in a fairly concentrated passing attack. He's better left on your bench in Week 6, even against a struggling Washington secondary.\n",
    "timestamp": "2021-10-11 06:45 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": 8.2,
    "week03": 11.0,
    "week04": 5.1,
    "week05": 12.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 8.2, 11.0, 5.1, 12.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 6.3, 5.3, 4.7, 7.6, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.2, 2.8, 4.0, 6.2, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 10.9, 9.3, 10.5, 12.7, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 13.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 2,
    "avg_fp2": 20.06,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp caught 7-of-10 targets for 92 yards in the Rams' Week 5 win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Although somewhat quiet by Kupp's 2021 standards, tonight was another promising evening for the Rams' clear-cut No. 1 wideout, as his production came despite a 14-target Robert Woods onslaught. Kupp also managed to draw double-digit looks for the fifth time in as many 2021 appearances. There is no question who Matthew Stafford's first read is. Kupp will maintain top-five WR1 upside for Week 6 against the Giants.\u00a0\n",
    "timestamp": "2021-10-08 04:10 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 32.3,
    "week03": 26.1,
    "week04": 8.9,
    "week05": 12.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 13.5,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 15,
    "avg_fp2": 11.56,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.5,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael Pittman caught 6-of-7 targets for 89 yards and one touchdown in the Colts' Week 5 loss to the Ravens.\n",
    "report": "",
    "analysis": "Pittman once again paced the team in targets and catches, though he was out-gained 116-89 by Jonathan Taylor in large part due to Taylor's 76-yard catch-and-run score on a screen in the first quarter. Pittman's 42-yard touchdown grab was a grown-man catch where Pittman simply took the ball off DB Anthony Averett's helmet and left him in the dust. It was Pittman's first score of the season after seeing 36 targets across the first four weeks. Pittman is seeing volume and air yards and should be treated as an every-week WR2/3 ahead of a cake Week 6 date with the Texans.\n",
    "timestamp": "2021-10-12 04:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 16.3,
    "week03": 10.3,
    "week04": 8.9,
    "week05": 17.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 16.3, 10.3, 8.9, 17.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 9.1, 13.5, 14.5, 6.6, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 0.6, 6.9, 7.2, 7.3, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 4.2, 14.0, 12.7, 10.8, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 12.9,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 16,
    "avg_fp2": 18.18,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 33.54,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Davante Adams caught 11-of-16 targets for 206 yards and one score in Green Bay's Week 5 win over the Bengals.\n",
    "report": "",
    "analysis": "Adams was unstoppable on Sunday, recording six catches for 117 yards and a touchdown in the first half including his 17- and 34-yard receptions to set up A.J. Dillon's 12-yard touchdown catch to cap the first quarter. Adams also caught a 59-yard bomb to put the Packers in position for a field goal late in the second half, slicing through the defense with ease. Performances like Sunday's are suddenly becoming common for the 28-year-old, who has averaged 13.5 targets and a 39.8% target share from Aaron Rodgers since Week 2. Adams will again rank as the overall WR1/2 alongside Tyreek Hill in Week 6 against the Bears.\n",
    "timestamp": "2021-10-10 09:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 16.1,
    "week03": 25.2,
    "week04": 9.4,
    "week05": 32.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 16.1, 25.2, 9.4, 32.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 12.4, 7.0, 10.3, 9.1, 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.7, 12.2, 15.1, 14.7, 18.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.2, 30.0, 17.6, 21.5, 20.9, 25.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 12.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 9.36,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 36.3,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Marvin Jones caught 1-of-5 targets for 25 yards in Week 5 against the Titans.\n",
    "report": "",
    "analysis": "Jones set season lows despite D.J. Chark going on IR this week. With Trevor Lawrence taking fewer deep shots, he\u00a0took a backseat to Tavon Austin and Laviska Shenault, and\u00a0finished behind both Dan Arnold (8) and Jamal Agnew (8) in targets.\u00a0Jones could be headed for another floor game with likely shadow coverage from Dolphins CB Xavien Howard in Week 6.\n",
    "timestamp": "2021-10-10 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.2,
    "week02": 14.5,
    "week03": 9.2,
    "week04": 3.9,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 14.5, 9.2, 3.9, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 13.4, 11.1, 10.7, 11.4, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 2.9, 5.2, 12.7, 14.9, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 16.7, 12.5, 18.4, 21.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 12.3,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 12.08,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 26.26,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "CeeDee Lamb caught four of six targets for 84 yards and a touchdown in the Cowboys' Week 5 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Lamb got his before the game got out of hand and Dallas starters were slowly phased out of the lineup. Dak Prescott hit Lamb down the sideline for a 49-yard score in the first half -- a welcomed sight for Lamb drafters who has tried not to panic over the past couple (slow) weeks. The dream of massive target volume for Lamb is probably dead in a Dallas offense that has been willing to establish the run when it can. Lamb's usage as an outside receiver -- very different than his slot-only usage in 2020 -- gives him a high weekly ceiling but could make him a slightly more volatile fantasy option than fantasy managers had expected. Lamb will be a WR2 play in Week 6 against New England.\u00a0\n",
    "timestamp": "2021-10-10 11:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.9,
    "week02": 13.4,
    "week03": 8.0,
    "week04": 2.3,
    "week05": 16.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.9, 13.4, 8.0, 2.3, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.4, 7.3, 7.1, 5.9, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 7.7, 0.0, 3.6, 2.6, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 21.8, 10.6, 12.6, 14.3, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 12.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 13.9,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 37.48,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Tyler Lockett caught 5-of-10 targets for 57 yards in the Seahawks' Week 5 loss to the Rams.\u00a0\n",
    "report": "",
    "analysis": "Lockett also drew a 47-yard DPI. In true Lockett fashion, he has been held to 112 total yards over his past three games after posing 278 across Weeks 1-2. That does not tell the whole story of his Week 5, however, as his 10 looks were his second most of the season and he was inches away from a much bigger night. The biggest what if? was a should-have-been 69-yard touchdown in the third quarter. Lockett was all alone but a pressured Russell Wilson barely missed his No. 2 wideout. The quarterback was hurt in the process, spraining his finger and giving way to Geno Smith. Lockett was the intended target on Smith's game-sealing interception, falling down and giving the defense an easy grab. Even if it is Smith for Week 6 against the Steelers, Lockett will be impossible to fade out of the top 24.\u00a0\n",
    "timestamp": "2021-10-08 04:41 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 24.0,
    "week02": 27.8,
    "week03": 5.1,
    "week04": 4.4,
    "week05": 8.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.0, 27.8, 5.1, 4.4, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 12.5, 16.4, 6.8, 9.1, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 1.6, 10.0, 3.7, 8.1, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.6, 20.6, 12.3, 12.3, 14.0, 10.6]
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
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 24,
    "avg_fp2": 17.38,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 27.56,
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
    "headlineNews": "Ja'Marr Chase caught 6-of-10 targets for 159 yards and one score in Cincinnati's Week 5 loss to the Packers.\n",
    "report": "",
    "analysis": "With his 70-yard touchdown \u2014 his fifth of the year, four of which have come from 30-plus yards out \u2014 to cap the first half, Chase became the third rookie to record five receiving scores within a team\u2019s first five games of a season since 1990, joining Calvin Ridley (6) and Randy Moss (6). He led the team in targets (10, 26.3%) even with Tee Higgins (5/32) back in the lineup Sunday, physically dominating any corner he was matched against while showing his agility by, at one point, walking a tightrope along the sideline for a toe-tapping reception to move the chains in OT. A big play waiting to happen with the utmost confidence from his quarterback, Chase will again rank as a fringe WR1/2 in next week's friendly matchup against the Lions.\n",
    "timestamp": "2021-10-11 12:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 12.4,
    "week03": 20.5,
    "week04": 10.7,
    "week05": 24.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 11.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 21,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 32.21,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington remains optimistic that Terry McLaurin (hamstring) will play Sunday.\n",
    "report": "",
    "analysis": "Ron Rivera called McLaurin out of practice \"an abundance of caution\" and he's listed questionable for Sunday. Follow up reporting by The Athletic indicates that Washington does in fact believe that McLaurin will be able to play against the Chiefs. McLaurin has a 31% target share and a 44% air yard share this season. Hs presence is absolutely critical in Washington fielding a competitive response to Patrick Mahomes. Fantasy mangers should have a backup option ready in case McLaurin is ruled out.\u00a0\n",
    "timestamp": "2021-10-15 09:14 PM",
    "source": "The Athletic",
    "game_day_logo": "",
    "week01": 8.2,
    "week02": 22.2,
    "week03": 8.2,
    "week04": 27.3,
    "week05": 6.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 22.2, 8.2, 27.3, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 14.5, 7.8, 10.2, 16.2, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 5.3, 5.7, 14.2, 12.8, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.2, 18.5, 10.4, 17.5, 16.7, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 15.56,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 25.0,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans caught 2-of-4 targets for 27 yards in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Drawing a heavy dose of Darius Slay, Evans had his quietest night since his 3/24 Week 1. The dud snapped a string of four-straight 75-yard performances. That's life with Slay on you, and life in a receiver corps where the GOAT quarterback can throw to Chris Godwin and Antonio Brown if you're dealing with tight coverage. The Bears are a middle-of-the-road matchup for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 04:00 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 3.9,
    "week02": 22.0,
    "week03": 14.6,
    "week04": 11.0,
    "week05": 26.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 22.0, 14.6, 11.0, 26.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 9.9, 10.2, 17.8, 10.8, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.2, 5.9, 8.7, 9.2, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 21.9, 15.5, 19.3, 20.8, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 10.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 4,
    "avg_fp2": 10.04,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 31.34,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Henry Ruggs caught all three of his targets for 51 yards in Las Vegas' Week 5 loss to Chicago.\n",
    "report": "",
    "analysis": "A majority of his production came on a 29-yard catch in the second quarter. It was Ruggs' lowest target count and share (8.5%) since his five-target outing (8.9%) in Week 1, having strung together three consecutive games with at least six targets prior to Sunday. Derek Carr hasn't eclipsed 210 yards in back-to-back starts but Ruggs at the very least has stayed involved ahead of Bryan Edwards as the stronger option between the two in that stint. Even so, that merely qualifies Ruggs as the third receiving option on his own team and a boom-or-bust WR4 for fantasy moving forward.\n",
    "timestamp": "2021-10-11 03:19 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.6,
    "week02": 20.0,
    "week03": 10.5,
    "week04": 7.5,
    "week05": 6.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 20.0, 10.5, 7.5, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.5, 12.8, 8.2, 14.1, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.0, 0.0, 0.0, 2.3, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 11.1, 10.0, 7.7, 7.9, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 10.2,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 13.66,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 26.26,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Amari Cooper caught 3-of-6 targets for 60 yards and a touchdown in the Cowboys' Week 5 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Cooper gutted it out to play through a clearly painful hamstring injury that had limited him at practice last week. He nabbed his fourth touchdown of the season and continued to break out of the mini-funk that followed his gratuitous Week 1 stat line against Tampa. Cooper has proven the more reliable fantasy option to CeeDee Lamb, who also caught a touchdown in Week 5. Cooper is a set-it-and-forget-it WR2 play against the Patriots next week.\u00a0\n",
    "timestamp": "2021-10-11 12:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 32.4,
    "week02": 3.9,
    "week03": 4.1,
    "week04": 14.4,
    "week05": 13.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [32.4, 3.9, 4.1, 14.4, 13.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 17.3, 10.4, 12.0, 9.3, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 2.2, 0.2, 0.6, 1.9, 16.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 20.2, 5.4, 11.4, 13.1, 24.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 10.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 3,
    "avg_fp2": 11.98,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.16,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Keenan Allen caught 6-of-9 targets for 75 yards in the Chargers' Week 5 win over the Browns.\n",
    "report": "",
    "analysis": "Allen had two catches for three yards about midway through this one and also had a bad drop, but the veteran wideout made a couple big plays in a wild second half where the two teams combined for 66 points. Allen's big catch was a 4th-and-7 conversion. Allen has just one touchdown on the year despite Justin Herbert throwing 11 over the last three weeks. Allen will be a WR2 next week against the Ravens.\n",
    "timestamp": "2021-10-11 12:10 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.5,
    "week02": 12.8,
    "week03": 15.0,
    "week04": 7.1,
    "week05": 10.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.5, 12.8, 15.0, 7.1, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 12.2, 14.5, 11.4, 6.1, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.2, 15.4, 7.2, 10.1, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 26.3, 21.2, 16.7, 13.5, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 10.2,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 13.07,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 35.84,
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
    "headlineNews": "Steelers did not list Chase Claypool (hamstring) on their final injury report.\n",
    "report": "",
    "analysis": "Chase is good to go for Week 6 against the Seahawks. With Juju Smith-Schuster out of the lineup, Claypool has a chance to see his role grow. It's possible however, that James Washington, who was also not listed on the final injury report, soaks up the available snaps. In either case, Claypool has been heavily targeted when on the field, and he is in line to run a route on 80-95% of dropbacks this week, which should lock him in as a WR3 with WR2 upside.\u00a0\n",
    "timestamp": "2021-10-15 08:18 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 8.5,
    "week02": 8.2,
    "week03": 14.1,
    "week04": "DNP",
    "week05": 21.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 8.2, 14.1, 'DNP', 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 6.7, 10.9, 'DNP', 9.0, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.6, 8.0, 'DNP', 4.5, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.8, 22.9, 11.2, 'DNP', 8.8, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 10.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 13,
    "avg_fp2": 11.9,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 30.32,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "D.J. Moore caught 5-of-7 targets for 42 yards in the Panthers' Week 5 loss to the Eagles.\n",
    "report": "",
    "analysis": "Sam Darnold struggled while constantly under pressure in this game and threw for just 177 yards. Moore\u2019s 42 receiving yards were still a team-high despite being his worst mark of the year. He and Robby Anderson led the Panthers with seven targets each. The return of Christian McCaffrey could limit Moore\u2019s upside next week but he\u2019ll be matched up with a beatable Minnesota secondary. He should continue to push for WR1 numbers in Week 6. \n",
    "timestamp": "2021-10-10 11:16 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372016.png",
    "name": "Jaylen Waddle",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 9.9,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 30,
    "avg_fp2": 8.16,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.38,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Jaylen Waddle caught 2-of-6 targets for 31 yards in the Dolphins' Week 5 loss to the Bucs.\n",
    "report": "",
    "analysis": "Waddle added a two-yard rush but has now posted back-to-back down games after going 3-33 last week. His six targets in this one were third on the team behind Myles Gaskin (10) and Mike Gesicki (7), and Waddle's drop led to Jacoby Brissett's lone interception. Waddle will look to rebound next week in a road date with the Jaguars. With Jakeem Grant traded last week, Waddle is now handling kickoff and punt returns, as well.\n",
    "timestamp": "2021-10-10 09:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 5.8,
    "week03": 11.8,
    "week04": 4.8,
    "week05": 4.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 5.8, 11.8, 4.8, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.0, 6.3, 8.0, 9.8, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 3.1, 1.8, 1.5, 4.4, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 15.9, 11.7, 12.4, 16.6, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 9.9,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 6.82,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 36.9,
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
    "headlineNews": "Nelson Agholor caught 3-of-4 targets for 32 yards in New England's Week 5 win over the Texans.\n",
    "report": "",
    "analysis": "Agholor has been kept out of the end zone for a month and hasn't caught more than three balls since Week 1. The target share has mostly stabilized with him being behind Jakobi Meyers thus far, though it was fairly obvious New England wasn't going to be going deep all that often with four backups on the offensive line. Things won't get easier next week with a tough matchup against Dallas. Agholor will be a deep-league FLEX consideration until he and Jones get on the same page attacking down the field.\u00a0\n",
    "timestamp": "2021-10-10 10:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 3.6,
    "week03": 2.7,
    "week04": 7.4,
    "week05": 4.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 3.6, 2.7, 7.4, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.5, 4.8, 7.6, 5.8, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.2, 1.1, 0.0, 7.5, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 12.3, 5.2, 4.4, 12.3, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png",
    "name": "DeVonta Smith",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 9.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 9.98,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 38.12,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "DeVonta Smith caught 2-of-4 targets for 31 yards in the Eagles' Week 6 loss to the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Coming off a two-game stretch where he caught 14 passes for 199 yards, Smith disappeared for his quietest game since Week 2 even as the Bucs' injury-ruined secondary lost desperation starter Richard Sherman to an early hamstring injury. There just wasn't much for Smith to do as Jalen Hurts completed 12 total passes and struggled to sustain drives outside of jump ball DPI penalties. Smith has cleared 71 yards in 3-of-6 appearances, confirming his upside. The downside is just all too apparent in this limited attack. Smith will remain a boom/bust WR3 for Week 7 vs. the Raiders.\u00a0\n",
    "timestamp": "2021-10-15 05:11 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 16.1,
    "week02": 2.6,
    "week03": 4.3,
    "week04": 15.7,
    "week05": 11.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.1, 2.6, 4.3, 15.7, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 15.0, 12.4, 9.0, 11.2, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 5.8, 4.1, 2.4, 4.6, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 23.8, 19.5, 15.3, 19.2, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243160.png",
    "name": "Laviska Shenault",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 9.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 7.44,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 36.3,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Laviska Shenault caught 1-of-3 targets for 58 yards in Week 5 against the Titans.\n",
    "report": "",
    "analysis": "Shenault wasn't targeted until deep in the third quarter. There was hope for a bigger\u00a0role with\u00a0D.J. Chark out, but the Jaguars featured TE Dan Arnold and RB Jamal Agnew in the short pass game, with both finishing with a team-high eight targets. Shenault flashed on his only reception, picking up yards after the catch and\u00a0breaking multiple tackles. Marvin Jones likely drawing CB Xavien Howard in coverage should get Shenault a few more targets in Week 6 against Miami.\u00a0\n",
    "timestamp": "2021-10-10 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.4,
    "week02": 0.7,
    "week03": 6.8,
    "week04": 14.0,
    "week05": 6.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 0.7, 6.8, 14.0, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 9.2, 7.6, 4.4, 8.1, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.2, 4.5, 6.6, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 16.2, 4.9, 9.6, 14.7, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 8.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 11.24,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.56,
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
    "headlineNews": "Courtland Sutton has the second most air yards in the NFL through Week 5.\u00a0\n",
    "report": "",
    "analysis": "Sutton's 644 air yards is second only to Devante Adams (728) thanks to Teddy Bridgewater consistently throwing downfield in what was expected to be a conservative Denver offense. Only four QBs have more pass attempts (25) of more than 20 yards than Bridgewater, and Sutton has 13 of those targets, leading all wide receivers through five games. A target hog in the early season, Sutton's weekly ceiling is as high as anyone's. He gets the Raiders in Week 6.\u00a0\n",
    "timestamp": "2021-10-12 04:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 20.4,
    "week03": 6.2,
    "week04": 6.2,
    "week05": 21.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 20.4, 6.2, 6.2, 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.2, 9.9, 6.4, 8.3, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 4.2, 6.1, 6.0, 4.4, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 13.1, 11.1, 9.9, 10.2, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 8.7,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 24,
    "avg_fp2": 11.5,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 27.56,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins caught 5-of-7 targets for 32 yards in Cincinnati's Week 5 loss to Green Bay.\n",
    "report": "",
    "analysis": "In his first game back since Week 2, Higgins was clearly at full strength in accounting for 22% of Cincinnati's targets while running a route on 82% of Joe Burrow's dropbacks. He topped Tyler Boyd (4/24) as the team's No. 2 receiver behind Ja'Marr Chase (6/159/1), accruing seven targets to Chase's team-high mark (10) and Boyd's five. Higgins' two-point conversion in the fourth quarter also tied the game to eventually send Cincinnati into overtime. An immense talent and downfield threat in his own right, Higgins is more than capable of out-producing Chase as a high-end WR3 in next week's soft matchup against Detroit.\n",
    "timestamp": "2021-10-10 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240600.png",
    "name": "Kadarius Toney",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 8.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 8,
    "avg_fp2": 7.78,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 33.04,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants listed WR Kadarius Toney (ankle) as questionable for Week 6 against the Rams.\n",
    "report": "",
    "analysis": "Toney is expected to play Sunday, and his ankle injury appears to be minor. Toney was targeted on 50% of his routes in Week 5. Only Davante Adams has a stronger showing this season in targets per route run. Toney also showed versatility, playing on the outside and in the slot. With slot receiver Sterling Shepard back this week, that versatility could be key. Toney shapes up as a WR3 in a game that could have a lot of passing volume.\n",
    "timestamp": "2021-10-15 08:55 PM",
    "source": "Ralph Vacchiano on Twitter",
    "game_day_logo": "",
    "week01": 0.8,
    "week02": 0.0,
    "week03": 2.6,
    "week04": 10.9,
    "week05": 24.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 0.0, 2.6, 10.9, 24.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 2.7, 2.0, 4.4, 9.1, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.5, 2.3, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.1, 4.5, 3.5, 7.0, 13.3, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 8.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 8,
    "avg_fp2": 12.13,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 33.04,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 20.8,
    "week02": 13.0,
    "week03": 2.6,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 13.0, 2.6, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 8.9, 8.4, 'DNP', 'DNP', 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 4.2, 10.1, 'DNP', 'DNP', 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 16.9, 13.5, 'DNP', 'DNP', 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2973405.png",
    "name": "Kalif Raymond",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 8.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 23,
    "avg_fp2": 7.62,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 31.31,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Kalif Raymond caught 3-of-6 targets for 46 yards and two touchdowns in the Lions Week 4 loss to the Bears.\n",
    "report": "",
    "analysis": "Raymond's two touchdowns were Detroit's only two scores on the day, and both game in the second half with Lions down three scores. Raymond has been a surprisingly important component of the Lions' offense, but he'll be difficult to trust even as a FLEX play in Week 5 against the Vikings.\n",
    "timestamp": "2021-10-03 10:08 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 2.8,
    "week03": 9.8,
    "week04": 18.1,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 2.8, 9.8, 18.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 8.4, 7.0, 6.7, 5.6, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 3.5, 0.4, 0.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 5.8, 5.9, 6.2, 6.3, 1.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 15.28,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 25.0,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown caught 9-of-13 targets for 93 yards and a touchdown in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Brown led the Bucs' loaded receiver corps in catches and yards for the second time in five days. Brown's biggest grab was a 23-yard touchdown in the second quarter where he got loose near the goal line as Tom Brady bought time his legs. Brown also helped ice the game with a 27-yard grab late in the fourth quarter where he adjusted to an ever-so-slightly off-target pass. Looking ridiculously springy for a 33-year-old wideout who didn't log full seasons in either 2019-20, Brown has solidified himself as a top-24 receiver in this lethal offense and has left very little separation between himself and Mike Evans/Chris Godwin. The Bears are on tap for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 03:52 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 21.2,
    "week02": 2.2,
    "week03": "DNP",
    "week04": 9.8,
    "week05": 27.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.2, 2.2, 'DNP', 9.8, 27.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 9.4, 'DNP', 11.8, 5.7, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 9.1, 'DNP', 12.4, 10.9, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 23.3, 'DNP', 17.4, 15.7, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 7.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 2,
    "avg_fp2": 11.9,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Robert Woods caught 12-of-14 targets for 150 yards in the Rams' Week 5 win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Visibly frustrated in Week 4 as he remained an afterthought to Cooper Kupp's voluminous workloads, Woods' squeaky wheel finally got the grease this evening as Mr. Bobby Trees nearly doubled his previous 2021 production. Woods was getting open at will over the middle of the field, ripping one hole after another in the Seahawks' unimposing defense. His big night came even as Kupp still managed a healthy 7/92. The Rams are going to need both wideouts cooking at once, not simply trading off. Now having more than stabilized his WR3 floor, Woods can hopefully resume his drive for weekly WR2 status in Week 6 vs. the Giants.\u00a0\n",
    "timestamp": "2021-10-08 03:40 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.9,
    "week02": 9.5,
    "week03": 5.3,
    "week04": 12.8,
    "week05": 21.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 9.5, 5.3, 12.8, 21.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 9.9, 9.4, 8.2, 9.2, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 7.0, 8.7, 7.0, 6.4, 11.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.4, 18.4, 16.3, 14.9, 13.0, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 7.7,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 6.07,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.52,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "A.J. Brown (hamstring) was a full participant in Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "It's a great sign for how he came out of last Sunday's game, where the Titans didn't really need to throw the ball as they crockpotted the Jaguars. Monday night against the Bills will be a game script that leads to more throws for Brown, and his managers are definitely going to be hoping for a blowup after a slow start.\u00a0\n",
    "timestamp": "2021-10-14 08:35 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 12.9,
    "week02": 5.8,
    "week03": 0.3,
    "week04": "DNP",
    "week05": 5.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 5.8, 0.3, 'DNP', 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 8.2, 9.9, 'DNP', 10.8, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 0.0, 20.6, 'DNP', 8.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 21.9, 29.1, 'DNP', 19.4, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4034950.png",
    "name": "Freddie Swain",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 7.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 6.5,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 37.48,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Freddie Swain caught 3-of-4 targets for 20 yards and a touchdown in the Seahawks' Week 4 win over the 49ers.\n",
    "report": "",
    "analysis": "The score was Swain's second touchdown of the year but he has yet to see more than five targets in a game. He has been filling in for the injured D'Wayne Eskridge to start the year and may get the chance to do so again in Week 5. The Seahawks play the Rams on Thursday, giving them a shortened week of practice. Swain will be in play for single-game DFS contests if Eskridge is ruled out again.\u00a0\n",
    "timestamp": "2021-10-04 01:56 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 0.5,
    "week02": 18.5,
    "week03": 2.6,
    "week04": 9.5,
    "week05": 1.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.5, 18.5, 2.6, 9.5, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.3, 5.3, 7.5, 4.2, 5.9, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 2.1, 0.0, 0.4, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.1, 4.9, 3.2, 3.2, 3.5, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043116.png",
    "name": "Demarcus Robinson",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 7.4,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 3.5,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 36.8,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Demarcus Robinson caught 3-of-4 targets for 46 yards and a touchdown in Week 2 against the Ravens.\n",
    "report": "",
    "analysis": "Robinson had a larger role than last week, where he had two targets in the season opener. He scored on a wide open pass in the middle of the end-zone from 33 yards out on Kansas City\u2019s first possession. Despite scoring this week, Robinson and Byron Pringle (2/63/1) shouldn't be rostered outside of deep leagues.\n",
    "timestamp": "2021-09-20 03:51 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 12.1,
    "week03": 2.7,
    "week04": 0.0,
    "week05": 1.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.1, 2.7, 0.0, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.5, 3.1, 2.3, 5.0, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.9, 7.9, 1.2, 0.2, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 8.5, 9.8, 7.8, 8.5, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 7.4,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 6.1,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 32.78,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Odell Beckham caught 2-of-3 targets for 20 yards in the Browns' Week 5 loss to the Chargers.\n",
    "report": "",
    "analysis": "The Browns scored 42 points in this one, and Baker Mayfield had 305 yards and two touchdowns on 32 attempts, but OBJ was once again silent. His lone missed connection was a dropped pass. Beckham's three targets were fifth on the team, as David Njoku went 7-149-1 on seven looks and Donovan Peoples-Jones popped up for 5-70 on six targets. Beckham has got to be getting tired of his lack of production in this Cleveland offense. Consider OBJ a low-floor WR3 for Week 6 against the Cardinals.\n",
    "timestamp": "2021-10-11 12:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.2,
    "week04": 4.1,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.3,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 39.96,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Emmanuel Sanders caught 3-of-5 targets for 54 yards and two touchdowns in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Sanders is experiencing a revival in his age-34 season as the Bills' WR2. He caught two more touchdowns on Sunday Night Football, bringing his season total to four. Sanders is an every-down player right now, lining up alongside Stefon Diggs as one of Josh Allen's outside receivers. He's a flex candidate in Week 6 against a bad Titans secondary.\n",
    "timestamp": "2021-10-11 04:48 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 7.2,
    "week02": 5.8,
    "week03": 23.9,
    "week04": 10.6,
    "week05": 18.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 5.8, 23.9, 10.6, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.8, 11.2, 4.8, 7.5, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 3.6, 3.4, 7.9, 15.8, 15.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 17.7, 8.7, 13.9, 22.3, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 7.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 7,
    "avg_fp2": 13.34,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 30.06,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "DeAndre Hopkins (illness) was a full participant for Friday's practice.\n",
    "report": "",
    "analysis": "Hopkins was absent mid-week but logged a full session on Friday and was promptly cleared from the team's final injury report. Fresh off a season-high 29% target share in Week 6, it's possible Hopkins hoards targets for one more week until Zach Ertz arrives. Consider Hopkins a low-end WR1 despite his tough on-paper matchup in Cleveland.\n",
    "timestamp": "2021-10-15 08:47 PM",
    "source": "Nate Ulrich on Twitter",
    "game_day_logo": "",
    "week01": 23.3,
    "week02": 13.4,
    "week03": 3.6,
    "week04": 8.7,
    "week05": 17.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 13.4, 3.6, 8.7, 17.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 16.9, 19.7, 14.4, 11.1, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 11.7, 6.1, 8.0, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.7, 19.8, 11.1, 15.4, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578533.png",
    "name": "Chris Conley",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 7.1,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 3.88,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 35.14,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Chris Conley caught 3-of-4 targets for 84 yards and a touchdown in Houston's Week 5 loss to New England.\u00a0\n",
    "report": "",
    "analysis": "Conley was the beneficiary of a flea flicker that he sold really well as a blocker, and he was wide open on his touchdown. He also caught a 40-yard pass out of structure on fourth-and-2 to get the Texans in position for a field goal. Those three catches tied his season total, as he's mostly been irrelevant. Perhaps he will get more involved with Anthony Miller released, but given the small amount of targets and the Davis Mills-led offense, it's a desperation bet for the time being. Conley will be hard to recommend against the Colts in Week 6.\u00a0\n",
    "timestamp": "2021-10-10 10:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.7,
    "week02": 1.8,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 13.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.8, 0.0, 0.0, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 5.1, 2.7, 3.8, 4.8, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 5.1, 2.3, 0.4, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.5, 10.4, 7.5, 4.8, 5.0, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 7.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 6,
    "avg_fp2": 17.92,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.88,
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
    "headlineNews": "Marquise Brown caught 9-of-10 targets for 125 yards and two touchdowns in the Ravens' Week 5 win over the Colts.\n",
    "report": "",
    "analysis": "With his 43- and five-yard touchdowns, the second coming in overtime to win the game and seal the comeback, Brown now has five touchdowns through five games with a pair of 100-yard outings. Brown took a lot of heat for his drops in Week 3 at Detroit, but he's answered back with 4-91-1 and 9-125-2 box scores. The 10 targets tied a season best for Brown, and they were second only to Mark Andrews' 13 in this one. Both Brown and Andrews caught all four of Lamar Jackson's touchdowns. The Colts simply were too banged up in the secondary and had no answers for the Baltimore passing attack in the second half. Brown will be a WR2 next week against the Chargers.\n",
    "timestamp": "2021-10-12 03:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.4,
    "week02": 20.3,
    "week03": 6.8,
    "week04": 17.1,
    "week05": 29.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.4, 20.3, 6.8, 17.1, 29.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 8.9, 16.9, 5.8, 12.0, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.6, 2.6, 4.7, 4.2, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 16.3, 8.2, 9.4, 8.2, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.7,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 8.8,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.52,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Julio Jones (hamstring) practiced in full on Friday.\n",
    "report": "",
    "analysis": "Jones is looking increasingly likely to play on Monday Night Football. Facing the Bills, the Titans could definitely use the passing game upgrade Jones will provide. The Bills lead the league in point differential by a large margin, and are likely to force the Titans to throw. Even in a difficult matchup, Jones looks like a WR3 option in his return from injury.\n",
    "timestamp": "2021-10-15 07:59 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 4.4,
    "week02": 15.8,
    "week03": 6.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 15.8, 6.2, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 3.9, 8.0, 'DNP', 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 6.4, 9.9, 'DNP', 'DNP', 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.9, 24.5, 21.8, 'DNP', 'DNP', 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png",
    "name": "Van Jefferson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 6.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 2,
    "avg_fp2": 8.64,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Van Jefferson caught 1-of-4 targets for 16 yards in the Rams' Week 5 win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "With Robert Woods finally revived for 14 targets behind Cooper Kupp's 10, there wasn't much work for Jefferson and DeSean Jackson to go around. It was D-Jax who made the Rams' big stretch play of the week, embarrassing Jamal Adams for a 68-yard grab before running out of gas on what might have been an 80-yard touchdown. Jefferson has cleared 80 yards twice in five contests and been held under 20 twice. There won't be much rhyme or reason to has WR5 success.\u00a0\n",
    "timestamp": "2021-10-08 04:34 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.0,
    "week02": 1.9,
    "week03": 6.2,
    "week04": 18.0,
    "week05": 2.1,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 1.9, 6.2, 18.0, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.4, 5.5, 5.6, 5.9, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 1.7, 1.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 11.8, 4.0, 5.4, 3.9, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 6.5,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 12.74,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.88,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Adam Thielen (foot) was removed from Minnesota's final injury report.\n",
    "report": "",
    "analysis": "Dalvin Cook (ankle) and Justin Jefferson (ankle) were also removed from Friday's injury report, suggesting all are at full strength for Sunday against the Panthers. Thielen's touchdown luck has run its course the past two games, totaling 86 yards with no scores on 11 targets in that stint, but he remains a re-draft WR3 in Sunday's reasonable matchup.\n",
    "timestamp": "2021-10-15 05:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.7,
    "week02": 12.9,
    "week03": 14.0,
    "week04": 6.1,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.7, 12.9, 14.0, 6.1, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 10.9, 7.1, 6.7, 10.2, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 3.9, 9.5, 9.8, 8.4, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 18.4, 14.6, 16.8, 15.2, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038818.png",
    "name": "Bryan Edwards",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 6.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 4,
    "avg_fp2": 6.02,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 31.34,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Bryan Edwards caught 2-of-5 targets for 22 yards in Las Vegas' Week 5 loss to Chicago.\n",
    "report": "",
    "analysis": "It's one more reception than Edwards totaled in last week's four-yard dud against the Chargers. If it weren't for his two long catches in overtime in Week 3, Edwards would be staring at three consecutive performances with 23 yards or less. He can remain buried on benches in dynasty leagues until his overall usage drastically changes.\n",
    "timestamp": "2021-10-11 03:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 5.5,
    "week03": 10.4,
    "week04": 0.9,
    "week05": 3.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 5.5, 10.4, 0.9, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 9.9, 6.8, 5.4, 8.7, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 5.3, 6.0, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.7, 6.1, 3.5, 10.5, 7.6, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576491.png",
    "name": "Adam Humphries",
    "depthchart": "Backup: WR-2",
    "team": "Washington Football Team",
    "projected": 6.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 21,
    "avg_fp2": 4.46,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 32.21,
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
    "headlineNews": "Terry McLaurin (hamstring) was downgraded to a DNP Friday and is considered questionable for Week 6.\u00a0\n",
    "report": "",
    "analysis": "A Friday downgrade is the worst possible scenario for any player dealing with an injury. However, Washington head coach Ron Rivera said McLaurin was sidelined out of \"an abundance of caution\" after feeling hamstring tightness. Despite that optimism, fantasy managers should make contingency plans for Week 6. His absence also would be a major blow to Taylor Heinicke's Week 6 streaming appeal. Dyami Brown, coming off a knee injury that kept him sidelined last week, could be a primary target if McLaurin and Curtis Samuel (groin) are out, and Adam Humphries could vacuum up a bunch of slot targets. Ricky Seals-Jones remains a solid streaming option against a KC defense allowing the most tight end yards and the seventh most tight end receptions this season.\u00a0\n",
    "timestamp": "2021-10-15 11:53 PM",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "",
    "week01": 2.0,
    "week02": 7.9,
    "week03": 1.2,
    "week04": 2.4,
    "week05": 8.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.9, 1.2, 2.4, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 4.9, 2.1, 0.5, 9.0, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 6.3, 4.1, 3.9, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 10.8, 8.7, 8.1, 10.9, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 6.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 13,
    "avg_fp2": 6.04,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 30.32,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Robby Anderson caught 2-of-7 targets for 30 yards in the Panthers' Week 5 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Anderson had the Philly secondary cooked for a would-be long touchdown in the first half but Sam Darnold left the pass short. Beyond that play, Anderson\u2019s Week 5 was uneventful. He and D.J. Moore paced the team with seven targets apiece. Anderson has 18 targets over the past two weeks but he\u2019s converted that into just 76 yards. He has caught a measly 41 percent of his passes this year and doesn't appear to be on the same page as Darnold. With Moore likely to lead the Panthers in targets most weeks and Christian McCaffrey set to return, Anderson can be viewed as a WR3/4 going forward. \n",
    "timestamp": "2021-10-10 11:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 5.3,
    "week03": 1.3,
    "week04": 7.4,
    "week05": 4.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.3, 1.3, 7.4, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 4.9, 5.4, 7.6, 4.7, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 2.8, 12.3, 2.1, 13.1, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 16.9, 15.4, 8.5, 16.6, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 5.8,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 16,
    "avg_fp2": 2.64,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 33.54,
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
    "headlineNews": "Allen Lazard caught both of his targets for six yards in Green Bay's Week 5 win over the Bengals.\n",
    "report": "",
    "analysis": "Lazard has run the second-most routes for Green Bay without Marquez Valdes-Scantling (hamstring, IR) the past two games but that usage has only resulted in four catches for 22 yards. He can stay stashed in dynasty leagues just in case another injury forces him into a larger role.\n",
    "timestamp": "2021-10-12 02:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.6,
    "week02": 0.0,
    "week03": 4.7,
    "week04": 4.3,
    "week05": 1.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 0.0, 4.7, 4.3, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.7, 6.2, 2.0, 4.9, 2.7, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.2, 5.0, 12.1, 2.2, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 14.4, 14.9, 15.6, 4.9, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3134353.png",
    "name": "Tim Patrick",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 5.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 10.64,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.56,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Tim Patrick caught 7-of-9 targets for 89 yards in the Broncos' Week 5 loss to the Steelers.\n",
    "report": "",
    "analysis": "Patrick finished with a strong 24% target share in a game where Bridgewater was forced to drop back 38 times. The Broncos could be forced into a pass heavy script once again when they face the Raiders in Week 6. Patrick will be a WR4 option.\n",
    "timestamp": "2021-10-10 10:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.9,
    "week02": 11.2,
    "week03": 12.3,
    "week04": 5.4,
    "week05": 12.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 11.2, 12.3, 5.4, 12.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.9, 8.0, 6.4, 6.9, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.6, 6.8, 4.6, 2.5, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 12.7, 11.0, 9.2, 6.1, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036335.png",
    "name": "Cedrick Wilson",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 5.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 3.32,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 26.26,
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
    "headlineNews": "Cedrick Wilson caught his only target for 35 yards in the Cowboys' Week 5 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Wilson, who made a marvelous sideline grab for his only reception of the game against New York, remains the fourth or fifth option in the Dallas passing attack with Michael Gallup sidelined. He's not fantasy viable outside of the deepest formats.\u00a0\n",
    "timestamp": "2021-10-10 11:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 5.5,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 32,
    "avg_fp2": 6.52,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 31.24,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Allen Robinson (ankle) is questionable for Week 6 against the Packers.\n",
    "report": "",
    "analysis": "Robinson is having a rough start to the season and now faces the prospect of playing at less than full health. If he can go, this is actually a decent setup for him. The Packers defense is not fearsome, and the Packers offense is likely to force the Bears out of their preferred run heavy script. Robinson only logged a limited practice on Friday however, so he's genuinely questionable to play. Robinson will be in FLEX consideration if he's able to suit up.\u00a0\n",
    "timestamp": "2021-10-15 06:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.5,
    "week02": 9.4,
    "week03": 3.7,
    "week04": 7.8,
    "week05": 5.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 9.4, 3.7, 7.8, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 8.8, 3.8, 9.8, 7.3, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 5.2, 7.1, 6.7, 5.9, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 19.4, 17.8, 14.3, 13.5, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 25.0,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Chris Godwin caught 5-of-5 targets for 43 yards in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Godwin found himself in between a quiet Mike Evans and percolating Antonio Brown. Godwin has been held below five catches only twice in six games, averaging six grabs, but he hasn't had the spiked weeks of Evans or Brown. He is serving as Tom Brady's most reliable chain mover as Evans dominates on the sideline and Brown gets loose down the field. Godwin has not scored since Week 2. His WR2/3 floor is intact, but WR1 is a pipe dream while even weekly WR2 production is not assured. This is a crowded offense full of Hall-of-Famers, another of whom should return in Week 7 when Rob Gronkowski (ribs) seems likely to suit up against the Bears.\u00a0\n",
    "timestamp": "2021-10-15 04:05 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 19.0,
    "week02": 14.2,
    "week03": 16.6,
    "week04": 7.0,
    "week05": 10.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.0, 14.2, 16.6, 7.0, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 7.7, 10.7, 9.0, 5.4, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.3, 12.2, 12.1, 9.3, 7.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 18.5, 16.7, 15.1, 17.5, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11674.png",
    "name": "Danny Amendola",
    "depthchart": "Reserve: WR-3",
    "team": "Houston Texans",
    "projected": 5.3,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 6.65,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 35.14,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thigh",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Danny Amendola (thigh) is listed as questionable for Week 6 against the Colts.\n",
    "report": "",
    "analysis": "Amendola was a surprise inactive after the Texans released Anthony Miller ahead of Week 5. He'll be another game-time decision coming off a week of limited practice.\u00a0Amendola will give Davis Mills a veteran presence in the slot if he returns against the Colts.\n",
    "timestamp": "2021-10-15 10:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 1.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.4, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 3.4, 'DNP', 'DNP', 'DNP', 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.2, 'DNP', 'DNP', 'DNP', 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.9, 'DNP', 'DNP', 'DNP', 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Las Vegas Raiders",
    "projected": 5.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 4,
    "avg_fp2": 11.3,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 31.34,
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
    "headlineNews": "Hunter Renfrow caught 6-of-8 targets for 56 yards in Las Vegas' Week 5 loss to the Bears.\n",
    "report": "",
    "analysis": "Renfrow has now registered at least five receptions in every game this year, ranking as the WR28 in average PPR points (14.1) since he's produced 56 yards and/or a receiving score in every start. His eight targets tied Darren Waller (4/45) for the team lead, totaling three more than Bryan Edwards (2/22) and five more than Henry Ruggs (3/51). Renfrow's floor should come in handy off benches to help patch any upcoming bye weeks.\n",
    "timestamp": "2021-10-11 02:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 8.2,
    "week03": 16.2,
    "week04": 13.5,
    "week05": 8.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 8.2, 16.2, 13.5, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 5.6, 5.9, 4.6, 8.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.7, 1.1, 5.1, 9.0, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.4, 10.8, 14.4, 13.2, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915399.png",
    "name": "Preston Williams",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 5.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 30,
    "avg_fp2": 4.45,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.38,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Preston Williams (core) is listed as questionable for Week 6 against Jacksonville.\n",
    "report": "",
    "analysis": "Williams was limited in practice Thursday and Friday. With DeVante Parker (hamstring) out last week, Williams\u00a0caught 3-of-5 targets for 60 yards while running 32 routes and playing 75% of snaps. Miami would be down to Jaylen Waddle, Albert Wilson, and Mack Hollins if Williams doesn't play this week.\n",
    "timestamp": "2021-10-15 10:18 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 8.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.7, 'DNP', 'DNP', 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.3, 'DNP', 'DNP', 4.0, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.2, 'DNP', 'DNP', 8.6, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 15.1, 'DNP', 'DNP', 19.1, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 5.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 24,
    "avg_fp2": 9.56,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 27.56,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tyler Boyd caught 4-of-5 targets for 24 yards in Cincinnati's Week 5 loss to Green Bay.\n",
    "report": "",
    "analysis": "It was an uninspiring performance from Boyd, who was treated as the low man on the totem pole between Ja'Marr Chase (10 targets) and Tee Higgins (7) in the latter's first game action since Week 2. Boyd flourished with a 33% target share sans Higgins in each of the Bengals' last two games but saw his share plummet to 13.1% on Sunday. Unfortunately, it's not a surprising outcome since one of the team's three receivers will undoubtedly fall by the wayside weekly until Cincinnati increases its pass play rate from neutral game script. Boyd should be considered a high-floor WR3/4 in Week 6 against the Lions.\n",
    "timestamp": "2021-10-10 11:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.7,
    "week02": 10.8,
    "week03": 11.6,
    "week04": 16.3,
    "week05": 4.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 10.8, 11.6, 16.3, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.2, 11.2, 7.1, 6.0, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.8, 13.8, 7.7, 13.0, 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.5, 16.3, 12.2, 22.2, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 5.0,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 6.9,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 39.96,
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
    "headlineNews": "Cole Beasley caught 1-of-2 targets for five yards in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Beasley recorded just two targets for the second straight game. He's still one of Josh Allen's favorite targets, but the Bills have enough weapons that Beasley may get the short end of the stick sometimes when Stefon Diggs, Emmanuel Sanders, and Dawson Knox are dominating targets as they did tonight. Beasley will have a shot at turning it around in Week 6 against the Titans.\n",
    "timestamp": "2021-10-11 04:54 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 10.0,
    "week02": 5.6,
    "week03": 15.3,
    "week04": 2.6,
    "week05": 1.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.6, 15.3, 2.6, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 6.2, 8.6, 5.2, 6.7, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 7.2, 6.6, 10.6, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.5, 11.5, 10.6, 15.4, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 5.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 8,
    "avg_fp2": 7.4,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 33.04,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants listed WR Darius Slayton (hamstring) as questionable for Week 6 against the Rams.\n",
    "report": "",
    "analysis": "Slayton is working back from the hamstring injury he suffered in Week 3 and appears to be genuinely questionable for Week 6. If Slayton plays he'll provide a critical deep element to the Giants passing attack that will be without Kenny Golladay. Slayton will be a dart throw tournament play, even if he suits up, but his presence would help open things up for Sterling Shepard and Kadarius Toney.\n",
    "timestamp": "2021-10-15 08:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.0,
    "week02": 12.9,
    "week03": 1.3,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.9, 1.3, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 10.4, 8.2, 'DNP', 'DNP', 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 1.0, 0.0, 'DNP', 'DNP', 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.2, 11.4, 'DNP', 'DNP', 13.5]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 13.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 6,
    "avg_fp2": 14.1,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 16.32,
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
    "headlineNews": "Mark Andrews caught 11-of-13 targets for 147 yards and two touchdowns in the Ravens' Week 5 win over the Colts.\n",
    "report": "",
    "analysis": "Andrews entered this one with zero red-zone targets on the season and was obviously due for a monster game in the very near future. The targets, catches, yards, and touchdowns were all new season-highs for the newly-minted tight end, who cashed in right before Week 1. Andrews was just picking apart the middle of the field against Indy's soft zone defense and scored touchdowns from five and four yards out in the fourth quarter, catching a pair of two-point conversions on top of it all. Andrews has a pair of 100-yard games in his last three contests and gets a Week 6 date with the Chargers, who allowed 7-149-1 to David Njoku in Week 5.\n",
    "timestamp": "2021-10-12 02:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.5,
    "week02": 8.2,
    "week03": 13.4,
    "week04": 9.2,
    "week05": 36.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 8.2, 13.4, 9.2, 36.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.0, 10.0, 2.9, 8.1, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.4, 6.6, 1.6, 8.9, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 14.2, 13.6, 5.1, 13.7, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 12.9,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 13.02,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 4.36,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox caught 3-of-4 targets for 117 yards and a touchdown in the Bills' Week 5 win over the Chiefs.\n",
    "report": "",
    "analysis": "Knox is scorching hot right now and extended his touchdown streak to four games. The subject of criticism in previous seasons, Knox looks like he has fixed his drop issues and evolved into a near-every-snap player. He is a top-12 tight end moving forward and should be rostered in almost every league. He's by no means elite, but he's turned into a weekly starter at fantasy's weakest position.\n",
    "timestamp": "2021-10-11 06:47 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 6.1,
    "week02": 8.7,
    "week03": 12.9,
    "week04": 18.2,
    "week05": 19.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 8.7, 12.9, 18.2, 19.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 4.5, 7.2, 5.3, 10.6, 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.8, 4.2, 0.1, 11.7, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 7.7, 5.5, 4.7, 18.1, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 11.1,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 8.02,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 12.24,
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
    "headlineNews": "Noah Fant caught 3-of-4 targets for 20 yards in the Broncos' Week 5 loss to the Steelers.\n",
    "report": "",
    "analysis": "Teddy Bridgwater had 38 attempts in this game, so Fant's four targets accounted for just an 11% target share. He managed just one more target than Kendall Hinton. It was a frustrating outing, but Fant plays a frustrating position. The tight end will look to rebound against the Raiders in Week 6. He remains locked in as a TE1.\n",
    "timestamp": "2021-10-10 09:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 11.3,
    "week03": 2.5,
    "week04": 13.6,
    "week05": 3.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 11.3, 2.5, 13.6, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 7.9, 6.3, 7.4, 6.5, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 1.6, 4.8, 5.7, 6.9, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 10.4, 6.8, 12.0, 9.9, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 10.3,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 15.18,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.38,
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
    "headlineNews": "Travis Kelce caught 6-of-10 targets for 57 yards and a touchdown in the Chiefs' Week 5 loss to the Bills.\n",
    "report": "",
    "analysis": "Kelce caught a short touchdown from Patrick Mahomes in the first half but didn't get much going besides that. He did have a scary moment late in the game when he got hit in the head while lunging for a pass, which resulted in a penalty on the offending Bills player. Chiefs coach Andy Reid remarked after the game that Kelce suffered a stinger, so it'll be worth monitoring injury news over the next few days to evaluate his likelihood of playing in Week 6. If he's healthy, Kelce is still the best tight end in fantasy football.\n",
    "timestamp": "2021-10-11 06:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.6,
    "week02": 20.4,
    "week03": 13.9,
    "week04": 4.3,
    "week05": 14.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 20.4, 13.9, 4.3, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051806.png",
    "name": "Ricky Seals-Jones",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 9.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 21,
    "avg_fp2": 3.58,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 14.82,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 8.4,
    "week03": 0.0,
    "week04": 2.9,
    "week05": 6.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.4, 0.0, 2.9, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 2.4, 1.0, 1.3, 3.0, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.3, 0.0, 0.8, 1.7, 5.9, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 9.6, 4.0, 4.6, 13.7, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 9.0,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 8.72,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.9,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Hunter Henry caught 6-of-8 targets for 75 yards and a touchdown in New England's win over the Texans.\n",
    "report": "",
    "analysis": "The Texans were amongst the league leaders in tight end targets allowed before the game and the game did nothing to change that. Henry peppered the middle of the field and got his touchdown on a corner route that Mac Jones deftly placed over the corner in the end zone. Henry will remain a borderline TE1/TE2 play against the Cowboys in Week 6.\u00a0\n",
    "timestamp": "2021-10-10 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.6,
    "week02": 5.2,
    "week03": 6.1,
    "week04": 11.2,
    "week05": 16.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 5.2, 6.1, 11.2, 16.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 1.7, 3.3, 7.2, 7.0, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 3.8, 4.4, 7.8, 9.0, 19.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.7, 8.4, 11.3, 11.1, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049698.png",
    "name": "Anthony Firkser",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 9.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 7.46,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Anthony Firkser caught 3-of-4 targets for 33 yards in Week 5 against the Jaguars.\n",
    "report": "",
    "analysis": "Firkser's role hasn't changed the past two weeks despite Julio Jones missing time. The Titans' run-heavy playcalling has him blocking at a higher rate. Firkser, who missed Weeks 2-3, has 17 targets in three games.\n",
    "timestamp": "2021-10-10 10:29 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 3.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.8,
    "week05": 4.8,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 'DNP', 'DNP', 3.8, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 'DNP', 'DNP', 6.4, 9.3, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 2.9, 3.8, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 'DNP', 'DNP', 4.6, 4.8, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 9.0,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 11.8,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 4.42,
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
    "headlineNews": "Dalton\u00a0Schultz caught 6-of-8 targets for 79 yards in the Cowboys' Week 5 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Fantasy's fourth highest scoring tight end entering Week 5, Schultz delivered again on the strength of a team-leading eight targets. His Week 5 highlight was a 30-yard first half reception down the middle of the field, where he's consistently beaten single coverage to become one of Dak Prescott's most trusted pass catchers. Blake Jarwin, meanwhile, did not record a catch against the Giants. With at least six targets in four of five 2021 games, Schultz is -- and has been -- an every-week option in 12-team leagues. He's an auto-start in Week 6 against the Patriots.\u00a0\n",
    "timestamp": "2021-10-11 12:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 2.8,
    "week03": 23.0,
    "week04": 14.8,
    "week05": 10.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 2.8, 23.0, 14.8, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 7.5, 4.1, 6.2, 8.4, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.7, 7.5, 3.9, 1.9, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 5.7, 8.4, 6.5, 11.9, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 8.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 30,
    "avg_fp2": 7.94,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.14,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Mike Gesicki caught 4-of-7 targets for 43 yards in the Dolphins' Week 5 loss to the Bucs.\n",
    "report": "",
    "analysis": "Gesicki's seven targets were his second-most of the season and second on the team in this one on a day Myles Gaskin paced Miami with 10 targets, catching all 10 and both of Jacoby Brissett's touchdowns. Gesicki has been a rock-solid TE1 over the last three weeks and will be one again next week at Jacksonville.\n",
    "timestamp": "2021-10-10 08:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 5.6,
    "week03": 13.6,
    "week04": 14.2,
    "week05": 6.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.6, 13.6, 14.2, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 2.8, 4.6, 3.2, 10.7, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.9, 0.0, 9.8, 11.1, 4.7, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 12.9, 12.2, 17.3, 10.9, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 7.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 5.8,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 13.6,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals acquired TE Zach Ertz from the Eagles in exchange for CB Tay Gowan and a 2022 fifth-round pick.\n",
    "report": "",
    "analysis": "ESPN's Adam Schefter said the Cardinals acquired the veteran tight end \"with the idea of making him a regular featured part of its offense and Ertz has told others in the past the Arizona appealed to him.\" This ends an excruciatingly awkward months-long dalliance between the Eagles and several teams interested in Ertz, 30. The move should be a boon for fantasy managers who drafted Dallas Goedert and those who have since rostered Ertz, who had a touchdown on four receptions Thursday night against Tampa with Goedert (COVID-19) sidelined. The Kliff Kingsbury-era Cardinals haven't typically used the tight end in its passing game, though Maxx Williams drew 16 targets from Kyler Murray between Week 2 and Week 4 this season. Williams suffered a season-ending knee injury last week against the 49ers -- an injury that likely led to Arizona's acquisition of Ertz. Ertz's first game as a Cardinal will likely be Week 7 against the Texans, one of the best tight end matchups in the NFL this year. Goedert, meanwhile, will probably see an increase in pass routes and targets in an Eagles offense continually forced into pass-heavy game scripts. In five games with Ertz sidelined over the past three years, Goedert has averaged 6.6 targets, 4.2 catches, 53 yards, and 0.4 touchdowns. He'll be less touchdown dependent with Ertz out of the picture.\u00a0\n",
    "timestamp": "2021-10-15 04:28 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 4.4,
    "week02": 1.1,
    "week03": 13.3,
    "week04": 9.0,
    "week05": 1.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 1.1, 13.3, 9.0, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 5.4, 4.4, 3.0, 2.3, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.6, 4.1, 4.1, 5.8, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 17.3, 10.7, 7.8, 11.2, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 7.1,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 8,
    "avg_fp2": 4.5,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 11.14,
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
    "headlineNews": "Evan\u00a0Engram caught 4-of-4 targets for 55 yards in the Giants' Week 5 loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Even with the Giants' receivers ravaged by injuries, Engram did not emerge as a top target in the New York offense. Instead, rookie Kadarius Toney transformed into the team's alpha pass catcher and Engram was left to take in underneath targets. Engram will be a streaming option at best next week against the Rams.\u00a0\n",
    "timestamp": "2021-10-10 11:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.1,
    "week04": 4.9,
    "week05": 7.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 1.1, 4.9, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 14.0, 3.8, 7.5, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.4, 11.0, 12.9, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 9.6, 15.4, 18.7, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 7.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 2,
    "avg_fp2": 7.42,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 13.26,
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
    "headlineNews": "Tyler Higbee caught 2-of-2 targets for 14 yards and a touchdown in the Rams' Week 5 win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "The receiving output was Higbee's second worst of the season, but the touchdown was his second in three games. Higbee humiliated Jamal Adams on his 13-yard scoring grab in the third quarter. There was a scary moment in the first half where Higbee ran off the field with his left arm dangling at his side. It is possible something was popped back into place on the sideline. Higbee rarely leaves the field, but he hasn't come close to commanding true TE1 targets behind Cooper Kupp and Robert Woods. He is probably best left on the TE1/2 borderline for Week 6 against the Giants.\u00a0\n",
    "timestamp": "2021-10-08 04:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 1.3,
    "week03": 12.5,
    "week04": 5.6,
    "week05": 8.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 6.6,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 3,
    "avg_fp2": 7.1,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 15.28,
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
    "headlineNews": "Jared Cook caught 1-of-3 targets for 29 yards in the Chargers' Week 5 win over the Browns.\n",
    "report": "",
    "analysis": "Cook's running mate at tight end, Donald Parham turned his two targets into 29 yards, including a 22-yard touchdown in the first quarter. Cook will be a streamable TE1 next week against the Ravens after Baltimore entered Week 5 allowing the most fantasy points to the position.\n",
    "timestamp": "2021-10-11 12:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 4.3,
    "week03": 3.7,
    "week04": 16.0,
    "week05": 3.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 4.3, 3.7, 16.0, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 9.0, 6.9, 9.6, 7.0, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 1.2, 8.4, 4.1, 4.2, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 10.3, 13.3, 10.4, 10.7, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2998565.png",
    "name": "Mo Alie-Cox",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 6.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 15,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 17.02,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Mo Alie-Cox caught 3-of-4 targets for 50 yards in the Colts' Week 5 loss to the Ravens.\n",
    "report": "",
    "analysis": "For the second straight week, Alie-Cox appeared to be running as the No. 1 tight end ahead of Jack Doyle and Kylen Granson. Alie-Cox's four targets were three more than Doyle. Alie-Cox has six catches for 92 yards and two touchdowns on nine targets over the last two weeks. He's starting to enter the streaming mix at tight end ahead of a Week 6 date with the Texans.\n",
    "timestamp": "2021-10-12 04:23 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.3,
    "week03": 2.4,
    "week04": 17.7,
    "week05": 6.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.3, 2.4, 17.7, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.9, 1.8, 1.2, 5.4, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.1, 2.3, 4.8, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 6.5, 2.4, 6.2, 7.4, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915486.png",
    "name": "Tyler Conklin",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 5.6,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 10,
    "avg_fp2": 6.48,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 8.78,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Tyler Conklin caught 2-of-3 targets for 25 yards in the Vikings' Week 5 win over the Lions.\u00a0\n",
    "report": "",
    "analysis": "Today was Conklin's second quietest game of the season, but he continues to look like the No. 4 weapon in the passing game behind Justin Jefferson, Adam Thielen and Dalvin Cook/Alexander Mattison. Week 6 opponent Carolina has been middle of the road when it comes to policing the seam.\u00a0\n",
    "timestamp": "2021-10-10 10:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.1,
    "week02": 2.5,
    "week03": 16.5,
    "week04": 3.8,
    "week05": 3.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 2.5, 16.5, 3.8, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 3.2, 9.6, 8.2, 11.4, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.2, 3.7, 3.2, 1.2, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.9, 5.2, 5.2, 6.3, 2.5, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 5.4,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 4,
    "avg_fp2": 11.58,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 4.74,
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
    "headlineNews": "Darren Waller caught 4-of-8 targets for 48 yards in Las Vegas' Week 5 loss to Chicago.\n",
    "report": "",
    "analysis": "Waller's 19-target outing in the regular-season opener set unrealistic expectations for his season-long outlook, but weekly target counts of 7, 7, 7, and 8 since Week 2 are encouraging marks among a Raiders offense that has failed to eclipse 210 passing yards in back-to-back games. There was some miscommunication between Derek Carr and Waller on a couple of throws, seeing a ball sail over Waller's head in the back of the end zone at one point, but the latter's 22.4% target share at a dreadful position for fantasy keeps Waller locked in as a top-three option for as long as Carr continues feeding him. That includes next week's less than stellar matchup against the Broncos.\n",
    "timestamp": "2021-10-11 03:47 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.5,
    "week02": 9.0,
    "week03": 7.9,
    "week04": 13.0,
    "week05": 6.5,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 9.0, 7.9, 13.0, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 15.8, 17.8, 8.8, 7.8, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 2.6, 8.3, 9.3, 4.2, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.6, 17.0, 17.0, 12.0, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 5.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 23,
    "avg_fp2": 9.94,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 5.86,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson (knee) is questionable for Week 6 against the Bengals.\n",
    "report": "",
    "analysis": "Hockenson is fully expected to play after participating in Thursday's and Friday's practices. Managers should continue starting him as a TE1 if only for his 82% snap involvement in Detroit's last three games. Fingers crossed his comical production from that span (8/74/0) increases as he continues to recover.\n",
    "timestamp": "2021-10-15 07:20 PM",
    "source": "Kyle Meinke on Twitter",
    "game_day_logo": "",
    "week01": 21.7,
    "week02": 16.6,
    "week03": 2.0,
    "week04": 6.2,
    "week05": 3.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.7, 16.6, 2.0, 6.2, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.1, 15.3, 8.6, 6.7, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 1.9, 4.2, 2.9, 3.3, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 12.2, 14.7, 11.8, 11.0, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2511973.png",
    "name": "Eric Tomlinson",
    "depthchart": "Backup: TE-2",
    "team": "Baltimore Ravens",
    "projected": 5.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 6,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 16.32,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 2.7, 1.2, 0.9, 3.0, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.0, 0.0, 1.9, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.6, 3.1, 1.2, 3.3, 1.0, 1.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 4.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 4.64,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 11.26,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Dan Arnold caught 6-of-8 targets for 64 yards in Week 5 against the Titans.\n",
    "report": "",
    "analysis": "Urban Meyer's prized tight end had a fumble returned for a touchdown on the opening drive of the game. Arnold ended up the leading receiver this week after getting held to two catches in his debut, but he's gotten off to a rough start in Jacksonville.\u00a0Arnold's target share has him in the TE2 mix for a matchup with Miami in Week 6.\n",
    "timestamp": "2021-10-10 10:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.6,
    "week02": 7.0,
    "week03": 3.3,
    "week04": 3.9,
    "week05": 7.4,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.6, 7.0, 3.3, 3.9, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 2.7, 3.6, 4.4, 1.2, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.0, 0.4, 3.7, 4.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.0, 9.2, 2.8, 6.0, 7.3, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975863.png",
    "name": "Eric Saubert",
    "depthchart": "Backup: TE-2",
    "team": "Denver Broncos",
    "projected": 4.4,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 0.48,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 12.24,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos signed TE Eric Saubert.\n",
    "report": "",
    "analysis": "Saubert appeared in eight games for the depleted Jaguars last season, registering three catches for 16 scoreless yards. He'll compete for a back-of-the-roster job behind Noah Fant.\n",
    "timestamp": "2021-05-03 10:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 1.2,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 1.2, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 2.1, -0.3, 2.0, 1.1, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.4, 0.7, 0.5, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [0.9, 1.5, 0.8, 1.0, 1.0, 1.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122818.png",
    "name": "Tommy Sweeney",
    "depthchart": "Backup: TE-2",
    "team": "Buffalo Bills",
    "projected": 4.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 9,
    "avg_fp2": 0.36,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 4.36,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills released TE\u00a0Jacob Hollister.\u00a0\n",
    "report": "",
    "analysis": "We've come a long way from Hollister potentially taking Dawson Knox's starting spot to Hollister failing to make Buffalo's 53-man roster. The Bills will roll with Knox and\u00a0Tommy Sweeney as their top-two tight ends entering the regular season. Hollister, who had intermittent fantasy relevance in two years with the Seahawks, will land on a roster. It's also possible, as noted by The Athletic's\u00a0Joe Buscaglia, that the vested veteran is re-signed by the Bills following final cuts. This move would help the Bills avoid season ending IR for an injured player. Hollister\u00a0had four catches for 53 yards in three preseason games this month.\n",
    "timestamp": "2021-08-31 03:46 PM",
    "source": "Tom Pelissero on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 1.2,
    "week04": 0.0,
    "week05": 0.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 1.2, 0.0, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 0.8, 2.9, 3.2, 6.9, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 4.0, 0.0, 0.2, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.5, 7.3, 5.0, 1.0, 1.5, 2.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 4.1,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 15,
    "avg_fp2": 3.96,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 17.02,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts declared Jack Doyle (back) questionable for Week 4 against the Dolphins.\n",
    "report": "",
    "analysis": "Jack Doyle got in a limited practice on Friday and seems more likely than not to play in Week 4. Doyle is off the fantasy radar outside of deep tight end premium dynasty leagues. But as we learned from the Week 4 C.J. Uzomah eruption, anything is possible at tight end.\u00a0\n",
    "timestamp": "2021-10-01 07:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.6,
    "week02": 10.9,
    "week03": 1.5,
    "week04": 2.9,
    "week05": 0.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 10.9, 1.5, 2.9, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 6.7, 5.3, 5.4, 4.1, 4.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.1, 6.4, 3.1, 1.3, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.9, 12.2, 11.6, 4.0, 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 4.0,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 5.22,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.9,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jonnu Smith caught 2-of-2 targets for 27 yards, adding five rushing yards, in New England's Week 5 win over Houston.\n",
    "report": "",
    "analysis": "Smith picked up both targets on New England's second dive, making a 23-yard catch off a post and then taking a quick route for four yards in the red zone. There's not a lot of residual hope here after Week 1's explosion. Smith has mostly become a red zone vulture threat, and thus will remain a touchdown-dependent TE2 in the near term.\u00a0\n",
    "timestamp": "2021-10-10 10:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": 4.8,
    "week03": 0.9,
    "week04": 8.9,
    "week05": 4.2,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.8, 0.9, 8.9, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 5.4, 4.7, 5.1, 5.1, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.8, 7.2, 3.6, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 8.6, 5.2, 13.6, 6.8, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128452.png",
    "name": "Jordan Akins",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 4.0,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 1.86,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 15.2,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Jordan Akins caught 2-of-2 balls for 17 yards in Houston's Week 5 loss to New England.\n",
    "report": "",
    "analysis": "The Texans tight ends are cannibalizing each other's progress, with Pharaoh Brown (2/22/3 targets) and Akins each averaging about 2.5 targets a game and Anthony Auclair (1/11/1 target) bogarting the touchdown in this one. They're matchup-dependent TE2 fliers in bye weeks at best.\u00a0\n",
    "timestamp": "2021-10-10 10:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.2,
    "week03": 5.2,
    "week04": -0.8,
    "week05": 2.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.2, 5.2, -0.8, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 4.0, 1.3, 1.4, 0.4, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 11.2, 0.4, 0.7, 0.7, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 22.1, 7.0, 7.6, 6.1, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991767.png",
    "name": "Blake Jarwin",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 3.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 3.88,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 4.42,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dalton\u00a0Schultz caught 6-of-8 targets for 79 yards in the Cowboys' Week 5 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Fantasy's fourth highest scoring tight end entering Week 5, Schultz delivered again on the strength of a team-leading eight targets. His Week 5 highlight was a 30-yard first half reception down the middle of the field, where he's consistently beaten single coverage to become one of Dak Prescott's most trusted pass catchers. Blake Jarwin, meanwhile, did not record a catch against the Giants. With at least six targets in four of five 2021 games, Schultz is -- and has been -- an every-week option in 12-team leagues. He's an auto-start in Week 6 against the Patriots.\u00a0\n",
    "timestamp": "2021-10-11 12:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.5,
    "week02": 5.2,
    "week03": 2.4,
    "week04": 8.3,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 5.2, 2.4, 8.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.1, 1.8, 2.4, 5.0, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.5, 1.6, 0.0, 3.2, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 10.8, 4.6, 10.3, 9.2, 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 3.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 5.9,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.86,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks activated TE Gerald Everett from reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Everett had just eight catches in three healthy games with Seattle before heading to the COVID list and will remain a touchdown-or-bust TE2 flier with Geno Smith under center in the near-term.\u00a0\n",
    "timestamp": "2021-10-11 08:36 PM",
    "source": "Aaron Wilson on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 9.0,
    "week02": 0.8,
    "week03": 7.9,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.8, 7.9, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 5.2, 'DNP', 'DNP', 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.5, 1.4, 'DNP', 'DNP', 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 9.5, 4.3, 'DNP', 'DNP', 6.0]
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
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 3,
    "avg_fp2": 4.6,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 15.28,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Donald Parham caught both of his targets for 29 yards and one touchdown in the Chargers' Week 5 win over the Browns.\n",
    "report": "",
    "analysis": "Parham caught a 22-yard touchdown to get the scoring started for the Chargers in the first quarter. He's now scored in back-to-back games as a red-zone dominator at 6-foot-8. Parham has five catches on the season, scoring on two of them. He's not yet playing enough to be a fantasy option.\n",
    "timestamp": "2021-10-11 12:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 2.4,
    "week04": 8.7,
    "week05": 11.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 2.4, 8.7, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 2.1, 1.3, 3.4, 2.9, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 2.1, 1.2, 1.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.8, 4.5, 8.6, 2.8, 3.5, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 1,
    "avg_fp2": 1.42,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 12.84,
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
    "headlineNews": "O.J. Howard caught 6-of-7 targets for 49 yards and a touchdown in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "With Rob Gronkowski missing his third and likely final game with broken ribs, Howard doubled his previous 2021 production as he found the end zone for the first time. Howard's touchdown was a two-yarder where he nearly fell down and Tom Brady nearly threw a pick. Howard had a nice gain on a screen and looked difficult to take down the open field. That has always been the case, of course. Especially with Gronk's probable Week 7 return, Howard just has no path to consistency in this stuffed-to-the-gills offense.\u00a0\n",
    "timestamp": "2021-10-15 05:13 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.0,
    "week02": 2.6,
    "week03": 1.6,
    "week04": 0.0,
    "week05": 2.9,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.6, 1.6, 0.0, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 1.8, 2.2, 0.5, 3.8, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.3, 13.6, 2.0, 10.2, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.9, 23.1, 8.3, 16.7, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 3.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 13,
    "avg_fp2": 2.48,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.6,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Dan Arnold caught 3-of-4 targets for 55 yards in the Panthers' Week 2 win against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Ian Thomas, meanwhile, had two targets and ran just three fewer routes (13) than Arnold (16). It appears Arnold -- who recorded two grabs for six yards in Week 1 -- is going to share pass-catching duties with Thomas. Neither Arnold nor Thomas will be much more than touchdown-dependent options this season with D.J. Moore, Robby Anderson, and Terrace Marshall commanding targets from Sam Darnold.\u00a0\n",
    "timestamp": "2021-09-20 12:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 1.2,
    "week03": 0.0,
    "week04": 3.0,
    "week05": 6.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 1.2, 0.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.6, 4.8, 4.9, 4.4, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.4, 0.9, 4.9, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 7.5, 7.0, 6.5, 9.8, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2531358.png",
    "name": "Chris Manhertz",
    "depthchart": "Backup: TE-2",
    "team": "Jacksonville Jaguars",
    "projected": 3.5,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 1.98,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 11.26,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 0.8, 1.9, 'DNP', 0.4, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 5.8, 10.1, 'DNP', 0.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.5, 9.0, 11.7, 'DNP', 2.2, 0.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 3.5,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 24,
    "avg_fp2": 6.5,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.32,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "C.J. Uzomah caught both of his targets for 16 yards in Cincinnati's Week 5 loss to Green Bay.\n",
    "report": "",
    "analysis": "Only one week after he spiked a two-touchdown performance against the Jaguars, Uzomah came crashing back to Earth with two targets \u2014 what he averaged in every performance around Week 4 \u2014 and 16 yards. With Tee Higgins back in the lineup, Uzomah can remain stashed in dynasty leagues until his usage changes.\n",
    "timestamp": "2021-10-11 05:29 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 1.4,
    "week03": 0.0,
    "week04": 24.0,
    "week05": 2.6,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052897.png",
    "name": "Durham Smythe",
    "depthchart": "Backup: TE-2",
    "team": "Miami Dolphins",
    "projected": 3.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 30,
    "avg_fp2": 1.26,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.14,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Durham Smythe caught 5-of-5 targets for 40 yards in the Dolphins' Week 15 win over the Patriots.\u00a0\n",
    "report": "",
    "analysis": "With Mike Gesicki (shoulder) sidelined, Smythe got a look as the Dolphins' top pass-catching tight end. He did what was asked of him, helping to move the chains while nevertheless offering zero big-play ability. Gesicki seemingly almost suited up today, so Smythe is likely to remain off the TE2 radar for Week 16 against the Raiders' awful defense.\u00a0\n",
    "timestamp": "2020-12-21 01:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.0,
    "week04": 1.6,
    "week05": 3.3,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.0, 1.6, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 1.7, 2.5, 0.3, 3.6, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.9, 1.1, 2.3, 0.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 6.3, 2.8, 4.4, 1.3, 3.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361411.png",
    "name": "Pat Freiermuth",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 3.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 4.3,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.56,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Pat\u00a0Freiermuth caught 3-of-5 targets for 22 yards and a touchdown in the Steelers' Week 3 loss to the Bengals.\n",
    "report": "",
    "analysis": "That's\u00a0Freiermuth's first career touchdown and his third game with at least three targets. He's out-producing Eric Ebron but the Steelers are still splitting their snaps. Freiermuth isn't on the fantasy radar yet but the health of Pittsburgh's receivers could change that. All three of the Steelers' starting wideouts are currently banged up. If multiple of them miss Week 4,\u00a0Freiermuth would enter the TE2 conversation.\u00a0\n",
    "timestamp": "2021-09-26 10:18 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 2.9,
    "week02": 5.6,
    "week03": 9.7,
    "week04": 1.6,
    "week05": 1.7,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 5.6, 9.7, 1.6, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.3, 2.1, 2.8, 3.9, 2.6, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.9, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 5.6, 6.6, 8.2, 4.5, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048228.png",
    "name": "John Bates",
    "depthchart": "Backup: TE-2",
    "team": "Washington Football Team",
    "projected": 3.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 21,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 14.82,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington Football Team selected Boise State TE John Bates with the No. 124 overall pick in the 2021 NFL Draft.\u00a0\n",
    "report": "",
    "analysis": "Bates' (6'5/250) extensive experience on special teams (525 snaps) was his calling card across 46 career games at Boise State. He caught only 47 balls in four years, though that includes 12 in three games as a senior.\u00a0Although he holds Oregon state titles in javelin and the 110-meter hurdles, Bates underwhelmed as a 29th percentile athlete at his pro day and failed to record a single red zone touchdown in four seasons with the Broncos. With just four broken tackles on 47 career catches, how he performs as an in-line blocker in camp will ultimately determine how many games he's actually active for his rookie year. Bates doesn't have the looks of an intriguing Dynasty league prospect.\u00a0\n",
    "timestamp": "2021-05-01 05:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 1.9, -1.3, 0.6, 2.0, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.4, 4.6, 2.9, 4.2, 4.3, 5.1]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 9.8,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 25,
    "avg_fp2": 6.6,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 11.8,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16339.png",
    "name": "Brandon McManus",
    "depthchart": "Starter: K-1",
    "team": "Denver Broncos",
    "projected": 9.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 8.6,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 13.0, 16.0, 1.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.4, 13.4, 9.8, 10.4, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 4.4, 7.8, 9.4, 7.2, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.3, 9.1, 11.3, 10.7, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15683.png",
    "name": "Justin Tucker",
    "depthchart": "Starter: K-1",
    "team": "Baltimore Ravens",
    "projected": 9.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 2,
    "avg_fp2": 10.2,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 8.0,
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
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 7.0,
    "week03": 17.0,
    "week04": 13.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 17.0, 13.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 9.1, 8.6, 6.0, 8.6, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.2, 9.0, 2.3, 5.0, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.2, 14.9, 7.1, 12.4, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12460.png",
    "name": "Graham Gano",
    "depthchart": "Starter: K-1",
    "team": "New York Giants",
    "projected": 9.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 2,
    "avg_fp2": 9.8,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 8.0,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants activated K Graham Gano and S Xavier McKinney ahead of Week 12's game against the Bengals.\n",
    "report": "",
    "analysis": "Gano is now off the reserve/COVID-19 list, while McKinney has been on injured reserve with a broken foot. Gano should immediately slot back into lead kicking duties against the Bengals, where the Giants are -6\u00a0favorites.\n",
    "timestamp": "2020-11-28 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.0,
    "week02": 22.0,
    "week03": 6.0,
    "week04": 8.0,
    "week05": 12.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 22.0, 6.0, 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 6.2, 8.8, 8.3, 7.4, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 4.8, 3.2, 4.6, 5.9, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 10.9, 9.4, 9.9, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 9.2,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 9.2,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17372.png",
    "name": "Chris Boswell",
    "depthchart": "Starter: K-1",
    "team": "Pittsburgh Steelers",
    "projected": 9.2,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 15,
    "avg_fp2": 8.2,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 10.25,
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
    "headlineNews": "Chris Boswell (hip) is out for Week 17 against the Browns.\u00a0\n",
    "report": "",
    "analysis": "Practice squad kicker Matt Wright will again kick for Pittsburgh. With the Steelers holding out key starts, including Ben Roethlisberger, Wright isn't a viable fantasy option against Cleveland. The team hopes to have Boswell back for its playoff run.\u00a0\n",
    "timestamp": "2021-01-01 08:52 PM",
    "source": "Noah Strackbein on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 12.0,
    "week02": 7.0,
    "week03": 4.0,
    "week04": 7.0,
    "week05": 11.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 7.0, 4.0, 7.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.2, 8.1, 7.4, 5.2, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 8.5, 5.5, 7.5, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 13.1, 11.3, 8.4, 10.9, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10636.png",
    "name": "Mason Crosby",
    "depthchart": "Starter: K-1",
    "team": "Green Bay Packers",
    "projected": 9.0,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 9.8,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 10.25,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 16.0, 9.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.0, 5.0, 11.3, 7.1, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 4.6, 6.2, 10.8, 6.1, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.8, 10.4, 13.4, 10.3, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    "name": "Nick Folk",
    "depthchart": "Starter: K-1",
    "team": "New England Patriots",
    "projected": 9.0,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 11.2,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 7.2,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 15.0,
    "week03": 8.0,
    "week04": 5.0,
    "week05": 17.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 15.0, 8.0, 5.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 9.8, 9.8, 11.1, 9.3, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.2, 6.4, 5.9, 7.7, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 12.1, 10.4, 8.8, 13.9, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 18,
    "avg_fp2": 8.8,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 7.4,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 7.0,
    "week02": 6.0,
    "week03": 6.0,
    "week04": 15.0,
    "week05": 10.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 6.0, 6.0, 15.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 8.6, 6.5, 6.7, 10.1, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 3.9, 3.8, 7.9, 5.4, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.1, 7.5, 11.0, 8.7, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043234.png",
    "name": "Zane Gonzalez",
    "depthchart": "Starter: K-1",
    "team": "Carolina Panthers",
    "projected": 8.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 15,
    "avg_fp2": 8.25,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.2,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 6.0, 4.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.8, 6.7, 7.6, 7.4, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.4, 3.7, 6.5, 4.0, 9.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.6, 7.9, 10.8, 8.0, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917232.png",
    "name": "Tyler Bass",
    "depthchart": "Starter: K-1",
    "team": "Buffalo Bills",
    "projected": 8.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 10.8,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.0,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 11.0,
    "week02": 5.0,
    "week03": 14.0,
    "week04": 16.0,
    "week05": 8.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 5.0, 14.0, 16.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.8, 12.5, 8.1, 8.9, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 8.1, 9.0, 7.1, 3.5, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.0, 11.0, 12.1, 13.6, 13.6]
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
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 25,
    "avg_fp2": 7.4,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 10.6,
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
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": 10.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050478.png",
    "name": "Jake Elliott",
    "depthchart": "Starter: K-1",
    "team": "Philadelphia Eagles",
    "projected": 8.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 18,
    "avg_fp2": 7.0,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 7.6,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 7.0,
    "week02": 4.0,
    "week03": 3.0,
    "week04": 12.0,
    "week05": 9.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 4.0, 3.0, 12.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 9.5, 7.5, 5.7, 6.2, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 3.9, 4.8, 7.6, 6.6, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 10.6, 6.2, 10.2, 8.8, 6.8]
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
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 12,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 5.8,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 7.0, 19.0, 9.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.0, 8.1, 9.2, 8.5, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 5.1, 5.6, 5.2, 4.4, 7.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 11.9, 11.5, 11.2, 9.6, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14993.png",
    "name": "Greg Zuerlein",
    "depthchart": "Starter: K-1",
    "team": "Dallas Cowboys",
    "projected": 8.3,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 12,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.0,
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
    "headlineNews": "Cowboys\u00a0signed K Lirim Hajrullahu.\n",
    "report": "",
    "analysis": "Greg Zuerlein is dealing with a back injury, but is still expected to play in Week 1.\u00a0Hajrullahu provides an insurance policy is he isn't ready to go. Head coach Mike McCarthy said that punter\u00a0Hunter Niswander is \"having an issue\" while handling kicking duties, necessitating the Cowboys signing\u00a0of Hajrullahu.\n",
    "timestamp": "2021-08-18 05:26 PM",
    "source": " Michael Gehlken on Twitter",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 10.0,
    "week03": 5.0,
    "week04": 6.0,
    "week05": 14.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 10.0, 5.0, 6.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 10.0, 9.4, 6.1, 9.0, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 5.2, 7.9, 4.9, 7.0, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.4, 14.3, 11.5, 11.2, 9.3, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3821683.png",
    "name": "Austin Seibert",
    "depthchart": "Starter: K-1",
    "team": "Detroit Lions",
    "projected": 8.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 22,
    "avg_fp2": 8.0,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 7.8,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions placed K Austin Seibert on reserve/COVID list.\n",
    "report": "",
    "analysis": "If Seibert is fully vaccinated, he can return after testing negative twice in a 48-hour period. If he's not vaccinated, he must go through a 10-day quarantine and likely miss the next two games. Ryan Santoso, who most recently went 2-of-2 with a missed extra-point try in Week 1 with the Panthers, is the next man up on Detroit's depth chart.\n",
    "timestamp": "2021-09-23 04:15 PM",
    "source": "Detroit Lions on Twitter",
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 6.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 6.0, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.0, 'DNP', 'DNP', 'DNP', 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 3.1, 'DNP', 'DNP', 'DNP', 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 11.1, 'DNP', 'DNP', 'DNP', 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15965.png",
    "name": "Dustin Hopkins",
    "depthchart": "Starter: K-1",
    "team": "Washington Football Team",
    "projected": 8.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 7,
    "avg_fp2": 8.8,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 6.8,
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
    "headlineNews": "Washington re-signed Dustin Hopkins.\n",
    "report": "",
    "analysis": "Hopkins was set for free agency after playing out a three-year, $6.88 million deal signed in 2018.\u00a0He'll be brought back despite a down year where he converted\u00a013-of-17 field goals and 30-of-32 extra points.\u00a0Hopkins has been an\u00a084 percent kicker in six seasons for Washington.\n",
    "timestamp": "2021-03-14 02:38 PM",
    "source": "NBC Sports Washington",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 14.0,
    "week03": 3.0,
    "week04": 4.0,
    "week05": 11.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 14.0, 3.0, 4.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 9.0, 8.6, 7.7, 7.9, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 4.6, 6.2, 4.5, 6.5, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 12.4, 9.3, 6.5, 9.7, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2473037.png",
    "name": "Jason Myers",
    "depthchart": "Starter: K-1",
    "team": "Seattle Seahawks",
    "projected": 7.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 30,
    "avg_fp2": 5.2,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.2,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 4.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 6.0, 7.0, 4.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 8.7, 8.9, 7.2, 7.8, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 9.9, 8.8, 8.0, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.6, 11.9, 10.8, 10.5, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051909.png",
    "name": "Daniel Carlson",
    "depthchart": "Starter: K-1",
    "team": "Las Vegas Raiders",
    "projected": 7.4,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 7,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.2,
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
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 17.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 17.0, 13.0, 2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.2, 10.6, 11.7, 11.1, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 11.7, 9.4, 10.2, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 10.8, 13.2, 12.6, 12.6, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15091.png",
    "name": "Randy Bullock",
    "depthchart": "Starter: K-1",
    "team": "Tennessee Titans",
    "projected": 7.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 12,
    "avg_fp2": 9.75,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.0,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": 15.0,
    "week03": 5.0,
    "week04": 12.0,
    "week05": 7.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 15.0, 5.0, 12.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.8, 8.0, 12.8, 10.2, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.3, 3.3, 8.3, 9.2, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.7, 7.3, 10.4, 12.7, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124679.png",
    "name": "Jason Sanders",
    "depthchart": "Starter: K-1",
    "team": "Miami Dolphins",
    "projected": 7.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 5.4,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 9.4,
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
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 0.0,
    "week03": 11.0,
    "week04": 5.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 11.0, 5.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.1, 6.3, 5.1, 7.5, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.8, 4.5, 4.6, 6.3, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.5, 8.9, 6.3, 8.9, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11122.png",
    "name": "Matt Prater",
    "depthchart": "Starter: K-1",
    "team": "Arizona Cardinals",
    "projected": 6.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 15,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 4.8,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.0, 7.0, 15.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.1, 10.8, 7.5, 9.1, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 10.4, 6.8, 7.1, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 12.8, 13.3, 10.8, 11.7, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127313.png",
    "name": "Tristan Vizcaino",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Chargers",
    "projected": 6.6,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 22,
    "avg_fp2": 5.8,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.25,
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
    "headlineNews": "Chargers waived K\u00a0Mike Badgley.\u00a0\n",
    "report": "",
    "analysis": "Badgley barely held onto the Bolts' job last year then reportedly had a rough training camp. It would appear fourth-year UDFA\u00a0Tristan Vizcaino has won the job. He made one start for the 49ers in 2020. The Bolts are an intriguing offense for a fantasy kicker, but Vizcaino will not be trustworthy to begin the season. For his part, Badgley will undoubtedly\u00a0get calls despite his rough recent play.\u00a0\n",
    "timestamp": "2021-08-31 06:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.0,
    "week02": 10.0,
    "week03": 4.0,
    "week04": 4.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 10.0, 4.0, 4.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 9.8, 7.6, 9.7, 7.0, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 4.5, 9.0, 8.7, 4.9, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.5, 9.3, 8.9, 9.1, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128444.png",
    "name": "Matthew Wright",
    "depthchart": "Starter: K-1",
    "team": "Jacksonville Jaguars",
    "projected": 6.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 2.0,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 9.8,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.0,
    "week05": "DNP",
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.9, 'DNP', 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 'DNP', 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 8.7, 'DNP', 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3975763.png",
    "name": "Greg Joseph",
    "depthchart": "Starter: K-1",
    "team": "Minnesota Vikings",
    "projected": 6.0,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 7,
    "avg_fp2": 10.4,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 4.2,
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
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 13.0, 1.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 8.0, 10.0, 7.5, 9.7, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 6.0, 7.1, 9.6, 4.9, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 8.7, 8.2, 14.2, 8.9, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17427.png",
    "name": "Cairo Santos",
    "depthchart": "Starter: K-1",
    "team": "Chicago Bears",
    "projected": 5.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 6.6,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 5.6,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears signed K\u00a0Cairo Santos to a five-year, $16 million contract.\u00a0\n",
    "report": "",
    "analysis": "As Over The Cap pointed out on Twitter, 29-year-old Santos has been cut five times since 2018. To say it's an aggressive move would be putting it mildly. The Bears were simply overjoyed by Santos' competent 2020 after years in the kicker wilderness. Santos converted 93.8 percent of his 2020 field goal tries, boosting his career mark to 83.1. Santos is not called on very often from 50-plus yards, making him an extra unlikely recipient of this kind of contract. There's a chance this deal could quickly become an albatross.\u00a0\n",
    "timestamp": "2021-03-12 12:45 AM",
    "source": "Brad Biggs on Twitter ",
    "game_day_logo": "",
    "week01": 2.0,
    "week02": 8.0,
    "week03": 7.0,
    "week04": 6.0,
    "week05": 10.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 7.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 7.0, 5.5, 7.3, 7.1, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 2.7, 3.8, 13.2, 6.3, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.7, 6.3, 16.4, 10.1, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971573.png",
    "name": "Ka'imi Fairbairn",
    "depthchart": "Starter: K-1",
    "team": "Houston Texans",
    "projected": 5.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 25,
    "avg_fp2": 2.0,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.2,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans placed K Ka'imi Fairbairn on injured reserve.\n",
    "report": "",
    "analysis": "He has a pulled muscle in his leg that he suffered in pregame warmups ahead of the preseason finale. Out at least three weeks, Fairbairn will likely be replaced on the roster by Joey Slye, who was signed to the practice squad this week following his release from the Panthers.\n",
    "timestamp": "2021-09-08 08:12 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 4.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.8, 7.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.9, 11.8, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.9, 15.3, 11.2]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 8.5,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 11.4,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 3.0,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$4500",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 13.2,
    "week01": 3.0,
    "week02": 22.0,
    "week03": 7.0,
    "week04": 23.0,
    "week05": 11.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 22.0, 7.0, 23.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.7, 6.3, 5.9, 4.2, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 3.1, 5.0, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.2, 11.9, 10.4, 14.0, 12.8]
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
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 19,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 17.8,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers acquired CB Stephon Gilmore from the Patriots in exchange for a 2023 sixth-round pick.\n",
    "report": "",
    "analysis": "The Patriots were going to release Gilmore on Wednesday but have instead found a willing trade partner. Carolina is going all in on its 3-1 start to season, adding 2019 DPOY Gilmore to its secondary after acquiring 2020 first-round CB C.J. Henderson from the Jaguars last week. Gilmore remains on the reserve/PUP list and will have to miss another two games, but the Panthers are poised to make a run at a playoff spot. Gilmore just turned 31 last month and joins Henderson, veterans A.J. Bouye and Rashaan Melvin, and fourth-year starter Donte Jackson in the revamped cornerback room in Carolina.\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.6,
    "week01": 9.0,
    "week02": 12.0,
    "week03": 8.0,
    "week04": -4.0,
    "week05": 8.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 12.0, 8.0, -4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.5, 4.2, 4.0, 7.2, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.0, 0.8, 2.0, 1.7, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 14.1, 8.0, 8.2, 8.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 6.0,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 16,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 21.4,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings placed CB Harrison Hand on the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "It's the second time this season Hand has been placed on the COVID list. It's unclear whether Hand is vaccinated, and it's also not evident whether he tested positive or is just a close contact, but the rookie will now have to adhere to the NFL's protocols before rejoining the team.\n",
    "timestamp": "",
    "source": "ProFootballTalk",
    "game_day_logo": "",
    "avg_fp2": 5.4,
    "week01": 5.0,
    "week02": 6.0,
    "week03": 3.0,
    "week04": 4.0,
    "week05": 9.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 4.3, 1.7, 2.3, 6.8, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 1.1, 1.9, 1.6, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 14.1, 5.9, 6.0, 9.0, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 5.9,
    "opponent": "New England Patriots",
    "opp_rank_pts": 26,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 21.8,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.4,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.8,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Trevon Diggs (ankle) will be a game-time decision in Week 6 against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Cowboys owner Jerry Jones seemed confident Diggs would play against New England, saying the stud cornerback will be \"ready to go\" after a week of limited practice. Last week, Diggs played 84 percent of the team's defensive snaps despite the ankle issue. His absence would be a boon for Mac Jones and the Patriots pass catchers. Nearly 80 percent of the yards gained against the Dallas defense have come via the pass, the second highest rate in the NFL.\u00a0\n",
    "timestamp": "",
    "source": "Jon Machota on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 6.8,
    "week01": 7.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 7.0, 7.0, 8.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 4.1, 3.7, 4.3, 4.3, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 0.4, 3.1, 2.3, 3.2, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.2, 7.6, 7.2, 7.2, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 5.8,
    "opponent": "Houston Texans",
    "opp_rank_pts": 29,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 25.4,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.8,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts coach Frank Reich said that CB Xavier Rhodes and S Andrew Sendejo are in the NFL concussion protocol.\n",
    "report": "",
    "analysis": "Both players suffered their injuries on Monday Night Football against the Ravens. Rhodes and Sendejo will have to pass through the league's concussion protocol to play in Week 6. The Colts' secondary would take a hit without them, although they might not need a lot to stop Davis Mills and the Houston aerial attack on Sunday.\n",
    "timestamp": "",
    "source": "Indianapolis Colts on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.4,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 7.0, 8.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 4.4, 1.9, 5.3, 1.2, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.6, 3.8, 4.9, 2.5, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.5, 9.4, 10.4, 8.1, 8.9]
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
    "opponent": "Chicago Bears",
    "opp_rank_pts": 30,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 24.2,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.6,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers placed CB Jaire Alexander (shoulder) on injured reserve.\n",
    "report": "",
    "analysis": "Coach Matt LaFleur has said that he hoped for Alexander to be able to put off surgery until the offseason. Alexander will miss at least three weeks while on injured reserve. He was one of the few bright spots on an otherwise disappointing Green Bay defense. With Alexander sidelined, Joe Burrow should have an easier time putting up numbers against Green Bay this week. He remains a solid QB2 versus a weakened secondary.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.6,
    "week01": -4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 7.0,
    "week05": 7.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 6.0, 7.0, 7.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 6.0, 2.7, 4.7, 3.8, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.9, 1.3, 6.1, 3.7, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 10.6, 6.9, 12.7, 9.5, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 5.5,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 19,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 14.2,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos activated CB Ronald Darby (hamstring) from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Darby suffered the hamstring injury in Week 1 and has been on injured reserve since. Patrick Surtain, the No. 9 overall pick in the 2021 NFL Draft, has been starting in Darby's place. Darby was graded as a top-20 corner by Pro Football Focus last year. He should start opposite Kyle Fuller with Surtain playing a lesser role for the time being.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 8.4,
    "week01": 8.0,
    "week02": 9.0,
    "week03": 19.0,
    "week04": 3.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 9.0, 19.0, 3.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.9, 13.3, 6.4, 7.0, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.0, 6.7, 8.0, 4.1, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 9.6, 13.7, 13.3, 11.1, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 5.4,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 28,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 30.6,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.2,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins CB Byron Jones (quad, Achilles') returned to practice Thursday.\n",
    "report": "",
    "analysis": "Jones is obviously a key player for Miami's defense, particularly in Week 5 against Tom Brady, Mike Evans, Antonio Brown and Chris Godwin. Reserve CB Nik Needham got the most snaps in the slot against Indianapolis when Jones left the game and would likely get the nod on Sunday if Jones is downgraded throughout the week. Justin Coleman would play slot corner against Godwin/Brown if that were the case.\n",
    "timestamp": "",
    "source": "Daniel Oyefusi on Twitter",
    "game_day_logo": "",
    "avg_fp2": 2.6,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 4.0,
    "week04": 4.0,
    "week05": -2.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 4.0, 4.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 7.6, 1.5, 5.4, 3.2, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.9, 1.2, 1.5, 3.8, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 14.0, 6.4, 9.1, 8.8, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.4,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 25,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.8,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals claimed CB Tre Flowers on waivers from the Seahawks.\n",
    "report": "",
    "analysis": "Cincinnati has had problems keeping Trae Waynes healthy outside, and Eli Apple and Darius Phillips aren't exactly unimpeachable outside corners. Flowers should be a decent fit in a more man-heavy scheme in Cincinnati, but as evidenced by him hitting waivers in the first place, he's more of a depth player than a major upgrade for the Bengals.\u00a0\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.2,
    "week01": 5.0,
    "week02": 9.0,
    "week03": 12.0,
    "week04": 1.0,
    "week05": 4.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 5.2,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.0,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals DE Chandler Jones (reserve/COVID-19 list) is not expected to play in Week 6 against the Browns.\n",
    "report": "",
    "analysis": "The news comes directly from Carindals coach Kliff Kingsbury, who said Jones has some COVID-19 symptoms. He added that it would be \"a stretch\" for him to play in Week 6. Jones has five sacks and 14 QB hits on the year. His absence will allow the Browns to keep Baker Mayfield working from a clean pocket more often, boosting his odds of posting usable fantasy numbers. Mayfield remains a low-floor QB2 this week.\n",
    "timestamp": "",
    "source": "Howard Balzer on Twitter",
    "game_day_logo": "",
    "avg_fp2": 9.0,
    "week01": 16.0,
    "week02": 1.0,
    "week03": 15.0,
    "week04": 5.0,
    "week05": 8.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 1.0, 15.0, 5.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 6.4, 9.9, 4.8, 8.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.0, 7.0, 2.8, 6.0, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 13.8, 11.9, 12.1, 14.5, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 5.2,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.6,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks re-signed CB John Reid.\n",
    "report": "",
    "analysis": "Reid was waived by Seattle at the end of August as a part of their cuts to get to 53 players. He was stashed on their practice squad shortly after being waived. The Seahawks originally acquired Reid from the Texans in exchange for a conditional seventh-round pick. He appeared in 13 games for Houston in 2020 and played\u00a0a mix of special teams and corner. Reid will\u00a0serve a similar role for Seattle this season.\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 3.8,
    "week01": 6.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 4.0, 0.0, 6.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 2.0, 4.1, 2.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 4.6, 2.9, 4.8, 5.3, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 12.4, 5.9, 9.6, 8.4, 7.7]
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
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 23.4,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Myles Garrett (ankle, knee) is active for Week 5 against the Chargers.\n",
    "report": "",
    "analysis": "But Jadeveon Clowney (elbow) is out, and it'll be Takk McKinley opposite Garrett off the edge. Also inactive for the Browns are\u00a0LT Jedrick Wills (ankle), CB Greg Newsome (calf), OL Chris Hubbard (triceps), LB Tony Fields (shoulder), S Richard LeCounte, and DT Tommy Togiai.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.0,
    "week01": 1.0,
    "week02": 5.0,
    "week03": 16.0,
    "week04": 8.0,
    "week05": 0.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 5.0, 16.0, 8.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 4.1, 6.5, 1.6, 4.5, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.1, 2.5, 2.5, 2.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 12.3, 7.0, 5.7, 7.4, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.8,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 16,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.4,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.6,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmTextLite": "#A31D2F",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "NFL Network's Ian Rapoport reports CB\u00a0Richard Sherman (hamstring) will miss \"a couple weeks.\"\u00a0\n",
    "report": "",
    "analysis": "Initial testing on Sherman's injured hamstring show he likely won't miss the rest of the season, and should be back later in October or early November. Tampa's secondary, already plagued by injury, can ill afford another absence, even if Sherman, 33, has mostly been subpar since joining the Bucs a couple weeks ago. The Bucs will scramble to fill in their injury-riddled secondary next week against the Bears.\u00a0\n",
    "timestamp": "",
    "source": "Around The NFL on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 5.2,
    "week01": 2.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 8.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.0, 0.0, 9.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.9, 4.1, 3.3, 9.2, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.3, 2.5, 3.6, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 11.6, 5.8, 5.5, 8.8, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 4.6,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 22.6,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens placed\u00a0DE Derek Wolfe (back/hip) on injured reserve.\n",
    "report": "",
    "analysis": "Wolfe hasn\u2019t practiced in weeks. Justin Madubuike and Broderick Washington will instead step into major roles as Wolfe remains sidelined for (at least) the next three games. He'll return to the starting lineup when healthy.\n",
    "timestamp": "",
    "source": "Jonas Shaffer on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.4,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 3.0,
    "week04": 11.0,
    "week05": 6.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 3.0, 11.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 4.8, 3.4, 1.8, 4.6, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 1.9, 0.0, 1.5, 4.6, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.5, 7.4, 10.2, 12.3, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 4.5,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 20.2,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears LB\u00a0Jerry Attaochu suffered a torn pectoral in Chicago's Week 5 win against the Raiders.\n",
    "report": "",
    "analysis": "It's the same story for Attaochu, who has yet to appear in 16 games at any point throughout his eight-year career. A sub-package player on 40% of Chicago's defensive snaps this year, Attaochu had totaled two tackles and a quarterback hit through five games. The team will likely increase Trevis Gipson's snaps in Attaochu's stead.\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "avg_fp2": 7.2,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": 9.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 5.0, 9.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 5.7, 4.5, 4.3, 0.9, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.1, 4.3, 0.0, 2.2, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 14.0, 10.2, 7.2, 7.1, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 4.2,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 12,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 30.2,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs DT Chris Jones (wrist) is questionable for Week 5 against the Bills.\n",
    "report": "",
    "analysis": "\"We'll just see how he does here in the next couple days with his wrist,\" coach Andy Reid said. \"We're trying to get it calmed down.\" Jones didn't practice at any point throughout the week and is considered highly questionable for Sunday night's showdown against the Bills. His status could change in the next 48 hours if his wrist heals.\n",
    "timestamp": "",
    "source": "Nate Taylor on Twitter",
    "game_day_logo": "",
    "avg_fp2": 1.4,
    "week01": 5.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": -1.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 1.0, 0.0, 2.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2]
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
    "opponent": "New York Giants",
    "opp_rank_pts": 23,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 21.6,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams placed\u00a0CB Darious Williams (ankle) on injured reserve.\n",
    "report": "",
    "analysis": "Los Angeles' starter opposite Jalen Ramsey, Williams graded out as one of Pro Football Focus' top cover corners last year and will now miss the next three games with his ankle injury. Robert Rochell filled in against the Seahawks and will presumably continue doing so for the team's upcoming schedule against the Giants, Lions, and Texans.\n",
    "timestamp": "",
    "source": "Los Angeles Rams on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.0,
    "week01": 8.0,
    "week02": 8.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 7.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 4.1,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 24,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 22.4,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.6,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders placed CB Damon Arnette (groin) on injured reserve.\n",
    "report": "",
    "analysis": "The Raiders also placed cornerback Trayvon Mullen on injured reserve. They'll be without two corners for the next three weeks at least. Las Vegas faces the Bears this week. Justin Fields has had an up-and-down start to his career but he should have no problem putting together a solid outing against the Raiders' second-string corners. He's a fringe-QB1 in the easy matchup.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.0,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 4.0, 1.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 3.9, 8.0, 5.9, 5.2, 4.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 5.1, 2.8, 1.4, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.1, 11.4, 6.6, 7.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 4.0,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 22.6,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.6,
    "fanduelSalary": "$4800",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 4.0,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 2.0, 5.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.5, 6.5, 2.9, 6.1, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.8, 6.0, 1.1, 1.6, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.9, 10.3, 9.2, 7.4, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 3.9,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.8,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.2,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Steelers declared CB Joe Haden (groin), QB Dwayne Haskins, LB Devin Bush (groin), DL Carlos Davis (knee), and OL Rashaad Coward inactive for Week 2 against the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Pittsburgh will also be without Devin Bush, who made his return from an ACL injury last week against Buffalo. Losing Haden and Bush is a blow to a Steelers defense taking on a Raiders team playing on a short week, traveling across country for an early kickoff. Pittsburgh's defense remains a top option in fantasy despite the injuries.\u00a0\n",
    "timestamp": "",
    "source": "Ray Fittipaldo on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 2.2,
    "week01": -3.0,
    "week02": 9.0,
    "week03": 2.0,
    "week04": 1.0,
    "week05": 2.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 9.0, 2.0, 1.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 4.1, 0.8, 1.7, 5.4, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.6, 0.4, 2.2, 1.6, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.8, 7.0, 8.6, 6.1, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 3.8,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.8,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.6,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.2,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington declared\u00a0CB Darryl Roberts, DL Shaka Toney, OL Saahdiq Charles, TE Sammis Reyes, and DL Matt Ioannidis inactive against the Bills.\n",
    "report": "",
    "analysis": "Ioannidis practiced in a limited fashion on Thursday, but he missed Friday's practice with a knee injury and is unable to go today. Given the abundance of talent Washington has on their defensive line, it's a difficult matchup for Buffalo regardless.\n",
    "timestamp": "",
    "source": "Ben Standig on Twitter",
    "game_day_logo": "",
    "avg_fp2": 3.0,
    "week01": 5.0,
    "week02": 3.0,
    "week03": -4.0,
    "week04": 6.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 3.0, -4.0, 6.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 4.7, 1.9, 3.5, 4.0, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 2.0, 0.5, 1.0, 0.4, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.0, 5.0, 7.3, 4.3, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 3.5,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 28.4,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.6,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans declared CB Justin Reid, QB Deshaun Watson, TE Brevin Jordan, DB Terrance Mitchell, DL Jordan Jenkins, LB Kamu Grugier-Hill and WR Danny Amendola inactive for Week 3 against the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Reid and Grugier-Hill's absences are extremely poor news for one of the league's most undermanned teams. The fact that both were \"questionable\" and had their status come down to game time does bode well for their odds of a Week 4 return.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 3.8,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 3.0, -1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.8, 3.0, 2.7, 6.3, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 0.2, 2.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 9.0, 4.8, 5.5, 8.5, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 3.4,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.2,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 4.0,
    "week01": 4.0,
    "week02": -1.0,
    "week03": 7.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, -1.0, 7.0, 3.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 5.3, 1.4, 4.5, 2.8, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.2, 1.4, 2.2, 1.9, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.7, 8.7, 8.3, 5.7, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 3.4,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers CB Chris Harris (shoulder) is active for Week 5 against the Browns.\n",
    "report": "",
    "analysis": "It'll be Harris' first action since Week 1. Inactive for the Chargers are RB Justin Jackson (groin),\u00a0DB Trey Marshall, TE Tre\u2019 McKitty, OL Brenden Jaimes, and QB Easton Stick.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.6,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 10.0,
    "week04": 7.0,
    "week05": -3.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 10.0, 7.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 5.1, 4.1, 4.5, 4.7, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 1.4, 0.0, 0.4, 1.7, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 13.2, 3.5, 6.3, 7.6, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 3.0,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 1,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 26.6,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans placed DB Amani Hooker on injured reserve with a foot injury.\n",
    "report": "",
    "analysis": "Hooker will miss at least three weeks after suffering a foot injury in Week 1. The third-year safety played just 52% of snaps before exiting. An already weak secondary gets even weaker without one of their starting defensive backs, and now Tennessee will turn elsewhere for the second safety spot alongside star Kevin Byard.\n",
    "timestamp": "",
    "source": "Tennessee Titans",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 3.0,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 3.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 3.0, 3.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 3.8, 2.3, 6.5, 7.7, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.8, 3.0, 6.4, 4.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.3, 8.0, 14.9, 9.4, 4.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 2.8,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.4,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots DL Henry Anderson suffered a pectoral injury in Week 4 and will miss the remainder of the season.\u00a0\n",
    "report": "",
    "analysis": "Anderson signed a two-year deal with the pats this offseason and was being used on a mix of defense and special teams. He ends his first year in New England with three tackles on 35 defensive snaps. Henry will turn 31 before the start of the 2022 season.\n",
    "timestamp": "",
    "source": "Mike Garafolo on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.8,
    "week01": 5.0,
    "week02": 19.0,
    "week03": 3.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.0, 3.0, 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.1, 6.8, 4.0, 6.3, 2.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.1, 6.2, 8.2, 2.9, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 14.5, 17.5, 14.0, 14.6, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 2.7,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 23.2,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles S\u00a0K'Von Wallace (shoulder) was placed on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Wallace suffered a separated shoulder in Week 3 against the Cowboys and will miss at least the next three weeks. Wallace had played the second most snaps among Philadelphia safeties this season. Marcus Epps will likely enter the starting lineup starting in Week 4 against the Chiefs.\u00a0\n",
    "timestamp": "",
    "source": "Mike Kaye on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 5.0,
    "week01": 10.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": -1.0,
    "week05": 10.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 1.0, 5.0, -1.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.5, 4.6, 3.8, 2.5, 2.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.1, 3.1, 4.1, 2.9, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.0, 7.7, 10.2, 8.9, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 1.9,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 8,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.4,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants announced that CB Rodarius Williams has a torn ACL and his season is over.\n",
    "report": "",
    "analysis": "Williams had been given some \"get your feet wet\" snaps at outside corner over the past three games while not being a part of the main defense, and did not look particularly good in them while compiling a 41.6 PFF coverage grade over 50 snaps. Williams will likely cede the remainder of his snaps to nickel Julian Love, and 2020 fourth-rounder Darnay Holmes will take over fourth CB duties.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 3.2,
    "week01": 4.0,
    "week02": 2.0,
    "week03": 6.0,
    "week04": 2.0,
    "week05": 2.0,
    "week06": "",
    "week07": "",
    "week08": "",
    "week09": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.0, 6.0, 2.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 3.9, 5.7, 2.7, -0.1, 1.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.2, 1.7, 1.3, 0.0, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.0, 7.6, 7.2, 6.2, 4.7]
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