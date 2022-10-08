var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {
  
  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 08 October 2022 07:01 AM (central time)"};
$scope.week = {"nflWeek": "5"};
$scope.playoffLogo = {"src": ""}

$scope.qbStartSit = {"one": "Joe Burrow", "two": "Zach Wilson", "three": "Mac Jones", "four": "Patrick Mahomes", "five": "Carson Wentz", "six": "Baker Mayfield", "seven": "Kenny Pickett", "eight": "Matt Ryan", "nine": "Matthew Stafford", "ten": "Daniel Jones"};
$scope.rbStartSit = {"one": "James Robinson", "two": "Damien Harris", "three": "Dalvin Cook", "four": "Aaron Jones", "five": "Nick Chubb", "six": "Ezekiel Elliott", "seven": "Christian McCaffrey", "eight": "Tyler Allgeier", "nine": "Najee Harris", "ten": "J.K. Dobbins"};
$scope.wrStartSit = {"one": "Ja'Marr Chase", "two": "Stefon Diggs", "three": "Jakobi Meyers", "four": "Terry McLaurin", "five": "Mike Evans", "six": "Diontae Johnson", "seven": "D.J. Moore", "eight": "David Sills", "nine": "Michael Pittman", "ten": "Allen Lazard"};
$scope.teStartSit = {"one": "Tyler Conklin", "two": "Juwan Johnson", "three": "Dallas Goedert", "four": "Logan Thomas", "five": "Travis Kelce", "six": "Tommy Tremble", "seven": "Daniel Bellinger", "eight": "Pat Freiermuth", "nine": "Will Dissly", "ten": "Irv Smith"};
$scope.kStartSit = {"one": "Jason Myers", "two": "Matt Gay", "three": "Riley Patterson", "four": "Mason Crosby", "five": "Randy Bullock", "six": "Matt Ammendola", "seven": "Ka'imi Fairbairn", "eight": "Cairo Santos", "nine": "Chris Boswell", "ten": "Nick Folk"};
$scope.dstStartSit = {"one": "Philadelphia Eagles", "two": "Seattle Seahawks", "three": "Tampa Bay Buccaneers", "four": "Buffalo Bills", "five": "Baltimore Ravens", "six": "Washington Commanders", "seven": "Las Vegas Raiders", "eight": "Indianapolis Colts", "nine": "Cleveland Browns", "ten": "Arizona Cardinals"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 28.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 6,
    "avg_fp2": 25.83,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 17.98,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Hurts completed 16-of-25 passes for 204 yards, zero touchdowns and an interception in the Eagles' 29-21, Week 4 win over the Jaguars, adding 16 carries for 38 additional yards and a score.\u00a0\n",
    "report": "",
    "analysis": "Hurts' second scoreless game of the year through the air was by far his shakiest of the season, but he once again helped save fantasy managers' day with the rushing touchdown. Hurts' interception had the potential to be the difference in the game after a poorly-timed ball to Zach Pascal on the Eagles' opening drive was returned for a pick six. Instead, Hurts was the one who stayed within himself in awful weather conditions as Trevor Lawrence lost a ridiculous four fumbles and threw an interception of his own. Continuing to look improved as a passer and taking advantage of his enhanced supporting cast, Hurts will remain a top-three QB1 for next week's soft date with the Cardinals.\u00a0\n",
    "timestamp": "2022-10-02 08:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.72,
    "week02": 34.02,
    "week03": 27.6,
    "week04": 16.96,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.72, 34.02, 27.6, 16.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 24.3, 20.3, 22.8, 28.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.5, 18.0, 15.4, 21.6, 22.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 23.1, 25.4, 28.8, 29.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 25.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 23.66,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.22,
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
    "headlineNews": "Patrick Mahomes completed 23-of-37 passes for 249 yards, three touchdowns, and one interception in the Chiefs 41-31, Week 4 win over the Buccaneers.\n",
    "report": "",
    "analysis": "In his bag in this one, Mahomes threaded a number of off-platform passes, none more so ridiculous as his spin move past a Bucs tackler in the second quarter that ended with him lobbing a touchdown throw to Clyde Edwards-Helaire. Kansas City scored on eight of their first 10 drives, failing only a fourth-and-1 lob to Edwards-Helaire that he should have caught and not attempting to score at halftime. The Chiefs draw a MNF showdown against the Raiders in Week 5 and Mahomes will, as usual, be on the QB1 line.\u00a0\n",
    "timestamp": "2022-10-03 03:33 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 34.9,
    "week02": 17.3,
    "week03": 18.08,
    "week04": 24.36,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.9, 17.3, 18.08, 24.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.4, 33.1, 25.5, 16.7, 25.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [23.6, 21.3, 25.1, 24.4, 23.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.0, 28.5, 32.1, 34.8, 29.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 24.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 28.59,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 18.52,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Josh Allen completed 19-of-36 pass attempts for 213 yards, a touchdown, and an interception in the Bills' 23-20 Week 4 win against the Ravens, adding 70 rushing yards and another touchdown.\u00a0\n",
    "report": "",
    "analysis": "Allen was erratic in sideways rain throughout the game; he could have thrown three or four first half interceptions, though none would have been his fault. Struggling through the air, Allen turned to the ground, rushing 11 times and picking up crucial first downs along the way. Allen in the fourth quarter rolled out and took off for a 20-yard rushing score in which he bulldozed through three Baltimore defenders. While Buffalo's offense has struggled to punch in touchdowns over the past two weeks, Allen and the Bills are moving the ball at will. There should be no major long-term worries for fantasy managers who drafted Bills players this summer. Allen gets the Steelers in Week 5.\u00a0\n",
    "timestamp": "2022-10-03 05:50 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.48,
    "week02": 29.68,
    "week03": 26.7,
    "week04": 24.52,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.48, 29.68, 26.7, 24.52]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 25.1, 24.2, 29.1, 24.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [22.0, 24.7, 19.6, 27.3, 24.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.8, 31.6, 28.6, 32.6, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 24.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 5,
    "avg_fp2": 22.91,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.18,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jared Goff completed 26-of-39 attempts for 378 yards, four touchdowns, and one interception in the Lions' 48-45, Week 4 loss to the Seahawks.\n",
    "report": "",
    "analysis": "Goff's interception, the first play of the third quarter, was a pick-six. He was targeting T.J. Hockenson and Tariq Woolen undercut the pass and took it to the house. Goff had a much stronger connection with Hockenson for the rest of the game. He connected with the tight end for eight receptions for 179 yards and two TDs, adding a two-point conversion. Goff also hit Josh Reynolds and Justin Jackson for TDs. Goff squares off against the Patriots next week, but his strong showing without Amon-Ra St. Brown keeps him on the quarterback streaming radar.\n",
    "timestamp": "2022-10-03 05:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.5,
    "week02": 26.04,
    "week03": 14.88,
    "week04": 34.22,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 26.04, 14.88, 34.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 18.8, 21.6, 22.1, 24.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 12.2, 23.3, 13.3, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 19.5, 28.6, 18.6, 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 23.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 1,
    "avg_fp2": 20.6,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 16.43,
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
    "headlineNews": "Justin Herbert completed 27-of-39 passes for 340 yards and two touchdowns in Los Angeles' 34-24, Week 4 win over the Texans.\n",
    "report": "",
    "analysis": "Herbert did most of his damage in the first half, finishing with 234 passing yards and heavily targeting Gerald Everett and Mike Williams. None of his scripted throws were particularly challenging, but he made a couple of unreal throws on the run as is expected of him at this point. Herbert slid early on the one sack he took, showing that he's still not all that interested in taking a hit as he deals with his rib cartilage injury. Week 5's game against the Browns should show Herbert firmly on the QB1 line even if Myles Garrett and Jadeveon Clowney return at full strength.\u00a0\n",
    "timestamp": "2022-10-02 08:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.26,
    "week02": 24.46,
    "week03": 13.58,
    "week04": 21.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.26, 24.46, 13.58, 21.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.3, 28.9, 23.9, 17.8, 23.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [20.7, 18.5, 16.7, 19.9, 19.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.8, 26.5, 24.4, 26.8, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 23.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 3,
    "avg_fp2": 5.91,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 23.61,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins head coach Mike McDaniel said the team's offense won't change with Teddy\u00a0Bridgewater starting in Week 5 against the Jets.\u00a0\n\u00a0\n",
    "report": "",
    "analysis": "NFL Network's Cameron Wolfe said Bridgewater is \"known to be meticulous and detailed\" with his wideouts, and that Bridgewater will make a concerted effort to get the ball out quickly to his playmaking receivers, Tyreek Hill and Jaylen Waddle. Last week against the Bengals, 12 of Bridgewater's 23 attempts went to Hill and Waddle as he threw for 190 yards, one touchdown, and one interception. He has the league's 11th best completion rate over expected in Week 4. Bridgewater profiles as a high-floor Week 5 streaming option against an average Jets secondary.\u00a0\n",
    "timestamp": "2022-10-07 02:24 PM",
    "source": "Cameron Wolfe on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": 11.82,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 11.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.7, -0.4, 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.1, 0.0, 15.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.8, 0.3, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 22.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 8,
    "avg_fp2": 20.46,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 24.9,
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
    "headlineNews": "Joe Burrow completed 20-of-31 passes for 287 yards and two touchdowns in the Bengals' 27-15, Week 4 win over the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "In his cleanest start of the year, Burrow averaged 9.3 yards per attempt and took only one sack. He has now gone three straight games without an interception after his four-pick fiasco in Week 1. Fantasy managers will argue Burrow still could have had a bigger night with more creative play-calling from coach Zac Taylor, who has never met a first-down run he didn't like. Burrow's scores went for 59 yards to Tee Higgins and two yards to Hayden Hurst. The Higgins bomb was delivered perfectly over an outstretched Xavien Howard's hands. Stabilizing after his shaky start to the year, Burrow has a potential Week 5 shootout on deck in the Ravens.\u00a0\n",
    "timestamp": "2022-09-30 03:27 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 22.22,
    "week02": 16.56,
    "week03": 23.0,
    "week04": 20.08,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.22, 16.56, 23.0, 20.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 15.7, 15.8, 21.6, 22.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.0, 9.5, 14.6, 20.2, 21.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 23.6, 21.2, 24.1, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361259.png",
    "name": "Zach Wilson",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 21.6,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 4,
    "avg_fp2": 20.28,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 25.23,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Zach Wilson (ankle) was removed from the Week 5 injury report and will play against the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Wilson got in his second full practice of the week on Friday. The second-year passer struggled in Week 4, tossing two interceptions versus the Steelers. He did, however, lead the offense on a game-winning drive in the fourth quarter. Wilson is on the radar in Superflex leagues but remains waiver wire fodder in all other formats.\n",
    "timestamp": "2022-10-07 08:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 20.28,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 20.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 16.0, 21.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 11.7, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 12.0, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 21.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 29.83,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 11.72,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 20-of-29 pass attempts for 144 yards, one touchdown, and two interceptions in the Ravens' 23-20 Week 4 loss to the Bills, adding 11 rushes for 73 yards.\u00a0\n",
    "report": "",
    "analysis": "The Bills defense, which hardly ever blitzes, held Jackson in check through the air from start to finish. Jackson has feasted on defenses that have sent consistent blitzes in the early season but found no soft spots to exploit in the Buffalo defense. Jackson's fantasy day wasn't a complete bust thanks to 73 rushing yards, most of them coming from broken plays and scrambles. Baltimore's pass game struggles in Week 4 could be the final straw for offensive coordinator Greg Roman. The Ravens cryptically announced a Monday afternoon press conference just minutes after their loss to the Bills.\u00a0\n",
    "timestamp": "2022-10-02 11:00 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 21.22,
    "week02": 42.62,
    "week03": 40.42,
    "week04": 15.06,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.22, 42.62, 40.42, 15.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 18.7, 19.9, 16.3, 21.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.8, 12.2, 21.0, 18.2, 28.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 16.7, 26.9, 26.3, 36.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 20.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 25,
    "avg_fp2": 15.3,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.75,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jacoby Brissett completed 21-of-35 passes for 234 scoreless yards and one interception in the Browns' 23-20, Week 4 loss to the Falcons.\n",
    "report": "",
    "analysis": "He was able to somewhat save his box score with 16 rushing yards and one touchdown on five carries with his legs, but Brissett did toss the game-sealing interception on the final play of the game for Cleveland's offense. Brissett and Amari Cooper couldn't keep their strong connection going in this one, hooking up just one time for nine yards. Brissett has the Browns treading water one month into the season at 2-2, but he won't be a recommended fantasy play next week against the Chargers.\n",
    "timestamp": "2022-10-02 08:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.88,
    "week02": 16.46,
    "week03": 17.9,
    "week04": 15.96,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.88, 16.46, 17.9, 15.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.6, 17.4, 18.1, 23.0, 20.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [15.1, 15.1, 5.5, 10.4, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 8.5, 15.4, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362887.png",
    "name": "Justin Fields",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 19.9,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 10.41,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.01,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Justin Fields completed 11-of-22 passes for 174 yards in the Bears\u2019 20-12, Week 4 loss against the Giants. He added seven carries for an additional 52 yards.\u00a0\n",
    "report": "",
    "analysis": "Fields connected with Darnell Mooney on a 56-yard completion as the Bears looked to be more aggressive. That aggression was short lived as Fields was running for his life against the Giants\u2019 pass rush. Fields and the Bears offense weren\u2019t able to generate a touchdown, hanging on four field goals. While Fields does present rushing upside, the offense as a whole looks lost outside of running the ball.\u00a0\n",
    "timestamp": "2022-10-02 08:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.64,
    "week02": 9.8,
    "week03": 6.94,
    "week04": 10.26,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.64, 9.8, 6.94, 10.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 15.7, 12.5, 12.5, 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 17.9, 17.7, 7.6, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 18.5, 22.9, 12.4, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360310.png",
    "name": "Trevor Lawrence",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 17.3,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 16.18,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 14.1,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Trevor Lawrence completed 11-of-23 passes for 174 yards, two touchdowns and an interception in the Jaguars' 29-21, Week 4 loss to the Eagles, also losing four fumbles.\u00a0\n",
    "report": "",
    "analysis": "The Jags stormed out to a 14-0 lead on a windy, rainy day in Philadelphia. Then the turnovers started. Lawrence coughed the ball up at the Eagles' 34, his own 34, his own 31 and his own 21. Needless to say, the cough ups were costly. They were a mix of the conditions and Lawrence just not feeling the rush. For the fourth and final lost fumble, Lawrence let the pocket collapse in on him. He was splintered apart and the Eagles knelt it out. Lawrence's interception was a horrible decision near the goal line where a lazy floater to Christian Kirk was easily picked by James Bradberry. Today was a humbling setback for a second-year pro who has made legitimate strides so far in 2022. The Texans could go either way as a Week 5 matchup. We probably wouldn't be streaming Lawrence for that one.\u00a0\u00a0\n",
    "timestamp": "2022-10-02 08:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.4,
    "week02": 18.5,
    "week03": 25.18,
    "week04": 6.66,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 18.5, 25.18, 6.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 19.6, 17.1, 18.7, 17.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.0, 7.4, 7.4, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.6, 17.6, 18.1, 19.3, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Washington Commanders",
    "projected": 16.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 17,
    "avg_fp2": 18.61,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 21.64,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Carson Wentz completed 25-of-42 passes for 170 yards, one touchdown and two interceptions in the Commanders 25-10, Week 4 loss to the Cowboys.\n",
    "report": "",
    "analysis": "It was a truly Wentzian performance for the Commanders on Sunday, as this one had a little bit of everything. Washington allowed just two sacks of Wentz on the day, but erratic passes, two interceptions and several drives stalled by penalties left much to be desired for Washington's offense. Wentz needed nearly three full quarters to surpass 100 passing yards and threw his second interception late in the fourth quarter with the game already out of reach. Poor clock management by the Commanders' coaching staff also showed up in this one, most notably in the second quarter. After receiving the ball with two timeouts and 1:04 to go until halftime, Washington ran the clock down to 26 seconds before attempting a second play and eventually threw a deep interception to end the quarter. Wentz's lone touchdown pass came on a 10-yard strike to Jahan Dotson midway through the second quarter, but Wentz has now underwhelmed in each of his last two outings. With a Week 5 matchup against the Titans on tap, Wentz is a low-end QB2 next week.\n",
    "timestamp": "2022-10-02 09:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.72,
    "week02": 28.78,
    "week03": 8.64,
    "week04": 9.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.72, 28.78, 8.64, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 26.6, 19.6, 16.5, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.9, 14.9, 18.8, 13.2, 15.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 21.3, 26.4, 22.2, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242546.png",
    "name": "Davis Mills",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 15.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 24,
    "avg_fp2": 12.58,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 15.77,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Davis Mills completed 26-of-35 passes for 246 yards, two touchdowns and two interceptions in Houston's 34-24, Week 4 loss to the Chargers.\n",
    "report": "",
    "analysis": "Mills had just 76 passing yards at halftime, took four sacks while throwing several hurried dumpoffs, and Kyle Allen was spotted throwing with a helmet on during one of his second quarter drives. Other than that... He finally let loose with some balls downfield once Houston was trailing by 20, uncorking a 58-yarder to Nico Collins and following that up with a touchdown to Brandin Cooks. It's clear that this team intends to sit on the ball as often as they can this year, limiting Mills' fantasy upside. It's unclear if Mills has more than flashes of a good NFL quarterback in him at this point. He won't be a recommended start against the Jaguars in Week 5.\n",
    "timestamp": "2022-10-02 08:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.5,
    "week02": 7.18,
    "week03": 11.8,
    "week04": 15.84,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.18, 11.8, 15.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 15.3, 16.1, 15.2, 15.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 8.6, 15.3, 10.3, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 13.3, 16.9, 13.6, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 14.7,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 15.79,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 16.05,
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
    "headlineNews": "Kirk Cousins completed 25-of-38 passes for 273 yards, a touchdown, and an interception in the Vikings' 28-25, Week 4 win over the Saints.\n",
    "report": "",
    "analysis": "Cousins could have had a second touchdown on the day, but Justin Jefferson dropped a would-be score in the back of the end zone. The third-quarter drive ultimately ended in a field goal. Cousins was under pressure throughout this game, caving to three sacks for a combined loss of 23 yards. It wasn't a perfect outing from Cousins or the Vikings, but they move to 3-1 on the year either way. Cousins will be a high-end QB2 for his Week 5 matchup with the Bears.\n",
    "timestamp": "2022-10-02 05:05 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.08,
    "week02": 11.84,
    "week03": 18.3,
    "week04": 13.92,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.08, 11.84, 18.3, 13.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 18.2, 20.0, 16.8, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.7, 19.2, 16.6, 15.5, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.5, 24.8, 24.2, 23.5, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576980.png",
    "name": "Marcus Mariota",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 14.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 15.4,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Marcus Mariota completed 7-of-19 passes for 139 scoreless yards and one interception in the Falcons' 23-20, Week 4 win over the Browns.\n",
    "report": "",
    "analysis": "That's a miserable 36.8% completion rate for Mariota, though he still averaged 7.3 yards per attempt with four completions of 20-plus yards. Mariota \"added\" five carries for three yards with his legs. The Falcons' three-man backfield of Cordarrelle Patterson, Tyler Allgeier, and Caleb Huntley combined for 29/178/2 on the ground to carry the offense. Mariota won't be an exciting Week 5 play on the road against the Bucs' top-ranked defense.\n",
    "timestamp": "2022-10-02 08:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.8,
    "week02": 15.44,
    "week03": 16.56,
    "week04": 4.86,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.8, 15.44, 16.56, 4.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 28.6, 19.0, 19.5, 14.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 19.3, 11.8, 14.0, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 24.3, 20.3, 24.2, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 14.4,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 14.59,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 13.82,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Speaking Wednesday, Aaron Rodgers said the development of Green Bay's receivers will factor into whether or not he returns in 2023.\n",
    "report": "",
    "analysis": "Rodgers and the Packers agreed to a four-year, $200 million deal this offseason, which included $153 million in guaranteed money. This comment isn't about a contract dispute or a desire to play elsewhere, but rather his decision to continue playing football beyond this season. Rodgers noted that wide receiver development is just one part of his decision to return, as he will also consider where he is physically and mentally. The Packers finally got Rodgers a receiver in the 2022 NFL Draft, selecting Christian Watson with the 34th overall pick in the draft, but fourth-rounder Romeo Doubs has looked like the better rookie out of the gate. It's only October and Rodgers is already answering questions about returning in 2023. This will become a popular topic of conversation as the season progresses.\n",
    "timestamp": "2022-10-06 03:54 PM",
    "source": "Profootballtalk on NBCSports.com",
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 17.36,
    "week03": 17.18,
    "week04": 17.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 17.36, 17.18, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.0, 6.4, 11.2, 22.2, 14.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.4, 14.9, 8.1, 19.3, 15.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 21.3, 23.0, 28.3, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 11,
    "avg_fp2": 15.23,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.3,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady (shoulder, finger) has confirmed he will start Sunday's game against the Falcons.\u00a0\n",
    "report": "",
    "analysis": "\u201cFeels great,\" Brady said Thursday. \"Thanks for asking. I\u2019ll be there Sunday.\u201d Brady has a long, long history of playing through injury designations and limited practices. Almost never do his various minor ailments seem to hamper his effectiveness. He's a back-end QB1 for Week 5.\u00a0\n",
    "timestamp": "2022-10-06 05:50 PM",
    "source": "Sara Walsh on Twitter ",
    "game_day_logo": "",
    "week01": 11.38,
    "week02": 9.4,
    "week03": 14.74,
    "week04": 25.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.38, 9.4, 14.74, 25.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 11.3, 13.9, 15.1, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 11.2, 9.4, 10.8, 17.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.1, 18.2, 13.6, 16.7, 28.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 14.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 17.03,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.56,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Derek Carr completed 21-of-34 passes for 188 scoreless yards in the Raiders' 32-23, Week 4 win over the Broncos.\n",
    "report": "",
    "analysis": "He absorbed two sacks and rushed seven times for 40 yards with his legs, picking up some big chain-movers along the way. Carr still averaged a pitiful 5.5 YPA with his arm, funneling targets to Davante Adams at a 38% clip. Adams accounted for 101 of Carr's 188 passing yards. Carr is a big volume passer but doesn't do enough on the stat sheet to be much more than a low-end QB1 on his best days in fantasy. He gets a Week 5 date with the Chiefs in Kansas City next Monday night.\n",
    "timestamp": "2022-10-02 11:56 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 16.8,
    "week02": 18.98,
    "week03": 20.82,
    "week04": 11.52,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.8, 18.98, 20.82, 11.52]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 21.0, 18.1, 15.3, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.3, 14.2, 11.3, 11.5, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 24.5, 18.2, 19.2, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15864.png",
    "name": "Geno Smith",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 13.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 18.97,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 13.46,
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
    "headlineNews": "Geno Smith completed 23-of-30 attempts for 320 yards and two touchdowns, adding 49 rushing yards and a rushing touchdown in the Seahawks' 48-45, Week 4 win over the Lions.\n",
    "report": "",
    "analysis": "Smith was dialed into DK Metcalf and Tyler Lockett, targeting the duo on 60% of his 30 attempts. Although neither player scored a TD, both were highly productive, combining for 13 receptions for 240 yards. Smith was also part of a highly productive Seahawks rushing game that totaled 235 yards. Smith wasn't spectacular by any means but was able to hit big plays against a weak Lions secondary, connecting with both Metcalf and Lockett for 30+ yard plays. He also ran in a TD from eight yards out. The play will likely go down as a scramble but Smith took off up the middle as soon as his back foot came down on his drop, immediately identifying a lane up the middle. Smith will have a much more difficult matchup against the Saints in Week 5, forcing quarterback streamers to look for other options.\u00a0\n",
    "timestamp": "2022-10-02 09:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.2,
    "week02": 7.08,
    "week03": 19.9,
    "week04": 31.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.2, 7.08, 19.9, 31.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.7, 15.2, 19.8, 16.7, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 10.7, 16.5, 15.8, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 15.7, 22.8, 20.0, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972515.png",
    "name": "Cooper Rush",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 13.4,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 23,
    "avg_fp2": 11.54,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.04,
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
    "headlineNews": "Cowboys head coach Mike McCarthy said Dak Prescott (thumb) isn't \"fully ready\" to return.\u00a0\n",
    "report": "",
    "analysis": "Prescott, a month after injuring his thumb against the Bucs, had stitches removed on Wednesday. McCarthy and Jerry Jones have strongly hinted Prescott won't suit up in Week 5 against the Rams. That means Cooper Rush, who has been a viable offensive caretaker for Dallas, will draw another start. Dak would seem to be on pace to play in Week 6 against the Eagles -- an unenviable return date with one of the NFL's elite defenses. Rush remains a floor option in superflex formats.\u00a0\n",
    "timestamp": "2022-10-05 03:48 PM",
    "source": "Jane Slater on Twitter ",
    "game_day_logo": "",
    "week01": 2.56,
    "week02": 13.6,
    "week03": 12.4,
    "week04": 17.62,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.56, 13.6, 12.4, 17.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 8.8, 11.9, 15.7, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.6, 3.4, 12.2, 12.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.0, 10.0, 9.1, 14.9, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 12.9,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 20,
    "avg_fp2": 12.4,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 12.99,
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
    "headlineNews": "Matthew Stafford completed 32-of-48 passes for 254 yards, no touchdowns, and one interception in the Rams' 24-9, Week 4 loss to the 49ers Monday night.\n",
    "report": "",
    "analysis": "Playing behind to the equivalent of a third-string offensive line, Stafford absorbed seven sacks for the second time this season and was under intense pressure much of the night. The Rams don't have a downfield weapon with Van Jefferson (knee) hurt and Odell Beckham still a rehabbing free agent, so Stafford has resorted to peppering Cooper Kupp and Tyler Higbee with high-percentage targets in the short area of the field. He averaged a pitiful 5.3 YPA in this one and could have easily tossed three pick-sixes instead of just the one. On an attempted WR screen, 49ers rookie S Talanoa Hufanga easily read the play and jumped the route for the 52-yard touchdown return. Stafford now leads the league with six interceptions thrown and has now gone back-to-back games without a touchdown pass. This offense looks broken. Stafford will again be under big-time pass-rush heat next week against Dallas. He's merely a QB2 for fantasy.\n",
    "timestamp": "2022-10-04 03:09 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.8,
    "week02": 20.88,
    "week03": 10.16,
    "week04": 7.76,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 20.88, 10.16, 7.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.6, 20.3, 19.2, 10.7, 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.2, 19.6, 19.7, 4.9, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.7, 24.4, 28.8, 15.6, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 12.8,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 14.09,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.41,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill completed 17-of-21 passes for 137 yards, two touchdowns and no interceptions in the Titans' 24-17, Week 4 victory over the Colts, adding five carries for an additional nine yards.\n",
    "report": "",
    "analysis": "The Titans led 24-10 at half and scored zero second-half points for the second consecutive week. This is also the second game of the season that Tannehill has attempted 21 or fewer passes, clearly highlighting how the Titans are trying to win games this season. They are clearly going to have to fix their second half woes moving forward if they want to be able to put games away through Henry and the run game. Tannehill and the Titans now look forward to the 1-3 Commanders on the road in Week 5, a game they could find themselves playing with a thinned pass-catching corps after Treylon Burks was forced from their Week 4 game in the fourth quarter with a foot injury.\n",
    "timestamp": "2022-10-02 08:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.34,
    "week02": 2.88,
    "week03": 19.76,
    "week04": 14.38,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.34, 2.88, 19.76, 14.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 12.9, 16.1, 13.0, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.1, 10.1, 11.5, 11.4, 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 17.1, 15.7, 17.1, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 11.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 15,
    "avg_fp2": 21.18,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 10.91,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kyler Murray completed 23-of-32 passes for 207 yards, two touchdowns and an interception in the Cardinals' 26-16, Week 4 win over the Panthers, adding 12 rushes for 26 additional yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "It was another eye-bleeding first half for Murray and the Cardinals as he entered the break 13-of-22 for a putrid 90 yards (4.5 YPA). Arizona was down 10-3. Then the Cardinals managed to take control against one of the only teams more lost on offense than they are. Murray Houdini'd one of his typical rushing scores, found Zach Ertz for a two-yard touchdown and hit Marquise Brown for a ridiculous 23-yard TD in the front right corner of the end zone. This being the Cardinals, there were still inexcusable penalties and clock management woes galore \u2014 the FOX cameras caught Murray and Kliff Kingsbury screaming at each other \u2014 but their raw talent was enough to overcome Carolina's sheer ineptitude. The Eagles are a much tougher test for Week 5. The potential shootout keeps Murray in play as a high-end QB1, but Philly has been erasing rival quarterbacks thus far.\u00a0\n",
    "timestamp": "2022-10-02 11:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.62,
    "week02": 26.88,
    "week03": 13.36,
    "week04": 23.88,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.62, 26.88, 13.36, 23.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.0, 19.8, 16.1, 7.0, 11.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.4, 25.6, 26.2, 13.2, 13.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 31.5, 32.6, 22.0, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240703.png",
    "name": "Kenny Pickett",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 10.6,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 28,
    "avg_fp2": 15.3,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 10.01,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers head coach Mike Tomlin named Kenny Pickett the team's starting quarterback.\u00a0\n",
    "report": "",
    "analysis": "Pickett will take over as the Steelers starter after nearly a month of Tomlin's stubborn refusal to move on from Mitch Trubisky, who was typically terrible in four starts for Pittsburgh. Tomlin said he has \"no reservations\" about Pickett's ability. Pickett's willingness to flee to pocket -- especially in the red zone -- makes him an intriguing fantasy option. His downfield aggressiveness brings renewed fantasy relevance to all Steelers wideouts, especially George Pickens, who caught four of five targets from Pickett in the second half of the Steelers' Week 4 loss to the Jets. In Week 5, Pickett will take on one of the NFL's elite defenses in the Bills. He should be rostered in all superflex formats.\u00a0\n",
    "timestamp": "2022-10-04 04:33 PM",
    "source": "Joe Rutter on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 15.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.3, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.1, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 7.9, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 10.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 13.8,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 11.59,
    "fanduelSalary": "$15000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Matt Ryan completed 26-of-41 passes for 251 yards, no touchdowns and two interceptions in the Colts' 12-9, Week 5 win over the Broncos.\n",
    "report": "",
    "analysis": "The best part about this game was that it eventually ended -- even if it took overtime to get there. Ryan and the Colts struggled throughout the duration of the Colts' Thursday night tilt with the Broncos, averaging 6.1 YPA while throwing two of the worst interceptions we may see also season. Ryan also fumbled twice, pushing his season total to 11. Outside of a veteran presence, Ryan doesn't appear to offer much to an NFL team at this point. Prone to mistakes and unable to push the ball downfield, he's also hard to trust in fantasy. The Colts play host to the Jaguars in Week 6.\n",
    "timestamp": "2022-10-07 04:06 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 16.28,
    "week02": 4.8,
    "week03": 15.28,
    "week04": 18.84,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.28, 4.8, 15.28, 18.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 23.7, 14.8, 17.7, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.4, 21.2, 13.4, 10.8, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.3, 27.8, 20.6, 19.7, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 9.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 31,
    "avg_fp2": 16.63,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 12.77,
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
    "headlineNews": "Daniel Jones (ankle) will play in Week 5 against the Packers.\u00a0\n",
    "report": "",
    "analysis": "The Giants will hope and pray Jones' ankle holds up against Green Bay. Tyrod Taylor (concussion) is out and Davis Webb would be forced into action if Jones can't get through the game. Jones has no fantasy usefulness outside of deeper superflex formats. His mobility will be limited with the bulky ankle, possibly stripping him of his greatest fantasy appeal.\u00a0\n",
    "timestamp": "2022-10-07 03:44 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 17.02,
    "week02": 13.14,
    "week03": 14.74,
    "week04": 21.64,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.02, 13.14, 14.74, 21.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 17.8, 18.6, 14.6, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 5.8, 13.5, 8.8, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 17.2, 19.2, 18.2, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 9.8,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 18,
    "avg_fp2": 16.48,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 16.74,
    "fanduelSalary": "$16500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Russell Wilson completed 21-of-39 passes for 274 yards, no touchdowns and two interceptions in the Broncos' 12-9, Week 5 loss to the Colts.\n",
    "report": "",
    "analysis": "It was an ugly day for both quarterbacks on Thursday night, as Wilson and Matt Ryan combined to throw for 525 yards, no touchdowns and four interceptions. Wilson continues to look out of sync with his receivers, as he sails balls over their heads or looks lost on the play call. Wilson threw a critical interception in the end zone late in the fourth quarter as Denver was driving down the field to take the lead. Fans saw enough and were seen heading for the exits after the Colts forced inevitable overtime soon after the turnover. In the overtime period, Wilson targeted two-time All-Pro cornerback Stephon Gilmore in the end zone on what would have been the game-winning touchdown pass to Courtland Sutton, only to see Gilmore deflect the pass and end the game with a turnover on downs. The Broncos have now scored 16 or fewer points in four of their five games to start the season, and a lot of that falls on Wilson. Heading into Week 6 against the Chargers, Wilson and the Broncos will look to get things right in a game that has the potential for a shootout. Until he turns things around, Wilson is probably closer to a high-end QB2.\n",
    "timestamp": "2022-10-07 05:03 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 17.8,
    "week02": 12.06,
    "week03": 9.06,
    "week04": 26.98,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.8, 12.06, 9.06, 26.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.8, 15.1, 12.2, 15.8, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.8, 13.2, 12.7, 12.2, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 21.3, 24.2, 21.2, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 9.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 30,
    "avg_fp2": 12.72,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 9.63,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "ESPN's Adam Schefter reports that Sam Darnold's (ankle) is still not close to returning to play.\n",
    "report": "",
    "analysis": "Darnold is now eligible to come off of the injured reserve, but Schefter reports that a source told him that it's still \u201cgoing to be a while.\u201d Darnold's return has become increasingly relevant and Baker Mayfield continues to stack bad games. Among quarterbacks with 50 plays this season, Mayfield ranks 33rd of 33 qualifying quarterbacks in expected points added per play. In other words, he's been the least efficient quarterback in the NFL this season. Mayfield also ranks 32nd in completion percentage over expected. Only Trey Lance has been less accurate than Mayfield this year. It's been a stunningly bad start for Mayfield in Carolina, to the point that fantasy managers are now whispering hopefully about Darnold's potential return. Unfortunately, the football world will be subjected to several more weeks of watching Mayfield.\n",
    "timestamp": "2022-10-03 03:36 PM",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "",
    "week01": 19.0,
    "week02": 13.3,
    "week03": 10.7,
    "week04": 7.88,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.0, 13.3, 10.7, 7.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 15.9, 13.2, 14.9, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.7, 4.6, 13.1, 15.5, 13.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 12.0, 17.5, 18.9, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 8.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 26,
    "avg_fp2": 13.32,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 16.13,
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
    "headlineNews": "Jimmy Garoppolo completed 16-of-27 passes for 239 yards and one touchdown in the 49ers' 24-9, Week 4 win over the Rams.\n",
    "report": "",
    "analysis": "Unlike his counterpart on the other side, Garoppolo took care of the football and wasn't sacked a single time despite the Niners missing star LT Trent Williams due to an ankle injury. Garoppolo got the ball out quick, and Deebo Samuel did all the work on his touchdown, turning a quick slant into a 57-yard score. Garoppolo had four pass plays of 20-plus yards. Not a volume passer, Garoppolo will be a low-end QB2 for Week 5 against the lowly Panthers in a spot the Niners should be able to run the ball.\n",
    "timestamp": "2022-10-04 03:33 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 16.66,
    "week03": 9.44,
    "week04": 13.86,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 16.66, 9.44, 13.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.1, 7.5, 8.6, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.4, 20.8, 10.7, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 4.2, 25.6, 18.7, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 3.8,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 13.74,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 21.93,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints coach Dennis Allen told reporters QB Andy Dalton will start against the Seahawks in Week 6.\n",
    "report": "",
    "analysis": "No surprises after another week of no practices from Jameis Winston. Dalton profiles as a mid-tier QB2 in a plus matchup against the horrendous Seahawks defense, and he'll make for an interesting DFS option with upside in the event that the game becomes a shootout. Dalton speaking to reporters after practice all but codified the start.\u00a0\n",
    "timestamp": "2022-10-07 06:57 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 13.74,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 13.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 16.2, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 21.2, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4250360.png",
    "name": "Bailey Zappe",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 2.5,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 5.96,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 25.88,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "The Score's Jordan Schultz reports Bailey Zappe will start for the Patriots in Week 5 against the Lions.\n",
    "report": "",
    "analysis": "Mac Jones hasn't been officially ruled out yet, but even if he is active, it will only be as an emergency option. The second-year passer is dealing with ankle issues while backup Brian Hoyer is still sidelined from the concussion he suffered last week. Zappe went 10-of-15 for 99 yards and a score in relief of Hoyer last week. His matchup with the Lions is a good one, though he is only on the radar as a Superflex streamer.\u00a0\n",
    "timestamp": "2022-10-07 07:12 PM",
    "source": "Jordan Schultz on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 5.96,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 5.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.3, 2.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.6, 9.8]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 19.9,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 10,
    "avg_fp2": 12.25,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.43,
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
    "headlineNews": "Damien Harris had 18 rushes for 86 yards in the Patriots' Week 4 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Harris ran tough against Green Bay, out-rushing Rhamondre Stevenson 18-14 on the day while regularly getting more than what was blocked. As usual, Harris ceded passing down work to Stevenson while maintaining the early-down role in the conservative New England offense. Harris will be a great bet for a touchdown (or two) in Week 5 against a poor Detroit run defense.\u00a0\n",
    "timestamp": "2022-10-03 12:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.8,
    "week02": 15.7,
    "week03": 11.6,
    "week04": 14.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.8, 15.7, 11.6, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 10.8, 9.6, 4.2, 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 12.9, 7.9, 8.0, 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 17.5, 11.6, 11.7, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 19.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 15,
    "avg_fp2": 6.2,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.75,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints RB\u00a0Alvin Kamara (ribs) is questionable for Week 5 against Seattle.\n",
    "report": "",
    "analysis": "Kamara practiced on a limited basis this week and is expected return Sunday after missing two of the last three games. Playing through a questionable tag on a Saints team that's been among the worst in the league in turnover differential isn't a great spot for Kamara, but the matchup is, with Seattle allowing the league's fourth-most\u00a0rushing yards. Kamara had 179 total yards and a touchdown in his lone matchup with the Seahawks last year.\n",
    "timestamp": "2022-10-07 10:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.1,
    "week02": "DNP",
    "week03": 6.3,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 'DNP', 6.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 'DNP', 12.0, 'DNP', 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.0, 'DNP', 7.2, 'DNP', 24.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 'DNP', 14.6, 'DNP', 29.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 19.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 20.65,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 26.48,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nick Chubb rushed 19 times for 118 yards and one touchdown in the Browns' Week 4 loss to the Falcons.\n",
    "report": "",
    "analysis": "The Georgia native was playing in front of family and friends in this one and was the only Browns player to show up on offense, as Chubb went over 100 total yards for the fourth straight game to open the season. It was his third 100-yard rushing day, and Chubb now has five touchdowns on the ground over the last three weeks. Fantasy's overall RB1 coming into Week 4, Chubb is averaging 20.25 carries per game and gets a home date with the Chargers next Sunday.\n",
    "timestamp": "2022-10-02 08:02 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.8,
    "week02": 30.8,
    "week03": 17.3,
    "week04": 19.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.8, 30.8, 17.3, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 9.0, 23.7, 13.1, 19.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 12.9, 17.1, 9.2, 21.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.4, 28.7, 17.8, 28.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 18.5,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 1,
    "avg_fp2": 19.62,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.88,
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
    "headlineNews": "Saquon Barkley rushed 31 times for 147 yards in the Giants\u2019 Week 4 win over the Bears, adding two receptions for an additional 16 yards.\u00a0\n",
    "report": "",
    "analysis": "Barkley ran effectively all game and looked explosive while doing so. He was so effective, it opened up Daniel Jones\u2019 two rushing touchdowns. At one point, Barkley took snaps for the offense when both Jones and Tyrod Taylor left with injuries to run wildcat. Barkley continues to thrive in what is so far a season of resurgence.\u00a0\n",
    "timestamp": "2022-10-02 08:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 30.4,
    "week02": 10.3,
    "week03": 20.6,
    "week04": 17.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [30.4, 10.3, 20.6, 17.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 21.2, 17.2, 21.7, 18.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 12.7, 15.9, 14.8, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 25.4, 24.7, 32.3, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 17.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Pos": 6,
    "avg_fp2": 17.27,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.47,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "ESPN's Jeremy Fowler reports D'Andre Swift (shoulder) is likely to be out for Week 5 against the Patriots.\n",
    "report": "",
    "analysis": "He did not practice Thursday for a second straight day. The Lions hinted that Swift could miss multiple weeks after getting injured in Week 3 against the Vikings. Swift was out last week against the Seahawks, and the Lions have a bye on tap for Week 6. A Week 7 return gives Swift additional time to heal up and doesn't come at the expense of a third missed game. Assuming all goes well, Swift would return to face the Cowboys in his return. Assuming Swift is sidelined, Jamaal Williams will be a top-24 back against the Patriots after handling 76 percent of the team's rush attempts in Week 4.\n",
    "timestamp": "2022-10-06 06:46 PM",
    "source": "Jeremy Fowler on Twitter",
    "game_day_logo": "",
    "week01": 15.5,
    "week02": 6.5,
    "week03": 23.7,
    "week04": 23.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 6.5, 23.7, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 26.0, 13.4, 20.6, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 6.2, 11.6, 4.9, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 11.2, 16.2, 10.5, 8.1]
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
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 14.2,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.41,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Jones had 16 rushes for 110 yards in the Packers' Week 4 win against the Patriots, adding three catches for five yards.\u00a0\n",
    "report": "",
    "analysis": "Jones was unlucky to miss out on a touchdown, as he gashed the Patriots front seven to the tune of a nice 6.9 yards per carry. Seemingly every rush was nearly a big run for the Packers No. 1 back that entered Week 4 giving up the league's fourth highest rush EPA. AJ Dillon ended up with one more carry than Jones because Dillon was the one to grind down the clock in overtime as the Packers set up for a game-winning field goal. One note of potential concern for Jones: Dillon logged 20 pass routes to 17 routes for Jones. Losing the primary pass-catching role in the Green Bay backfield would be a blow for Jones, who will be a locked-in RB1 in Week 5 against the Giants.\u00a0\n",
    "timestamp": "2022-10-03 01:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.1,
    "week02": 30.5,
    "week03": 4.2,
    "week04": 13.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 30.5, 4.2, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 11.5, 10.0, 11.8, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 14.7, 1.9, 3.1, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 27.9, 8.8, 19.7, 23.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 16.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 32,
    "avg_fp2": 16.07,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.77,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Austin Ekeler rushed 13 times for 60 yards and two touchdowns in Los Angeles' Week 4 win over Houston, adding six catches for 49 yards and an additional touchdown on seven targets.\u00a0\n",
    "report": "",
    "analysis": "Ekeler came up huge on Los Angeles' final real drive of the game, catching a fourth-down catch in the flat uncovered for 20 yards, then taking another flat pass 14 yards for a touchdown to stop a 17-0 Houston run. It's a little disheartening that the Chargers offense was still creating so many negative carries for their star back against one of the worst run defenses in the NFL, but Ekeler delivered big fantasy points in a smash spot. Against the Browns in Week 5, Ekeler will be in the RB1 conversation again.\u00a0\n",
    "timestamp": "2022-10-02 08:16 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 13.9,
    "week03": 9.3,
    "week04": 31.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 13.9, 9.3, 31.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 9.1, 12.7, 14.0, 16.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 14.6, 8.1, 10.9, 15.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 21.2, 21.1, 19.1, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 15.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 15.28,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.1,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Miles Sanders rushed 27 times for 134 yards and two touchdowns in the Eagles' 29-21, Week 4 win over the Jaguars, adding two receptions for 22 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Both the carries and rushing yards were new career highs, while the two-score effort on the ground was his first since 2020. Sanders became a point of emphasis after the Eagles fell behind 14-0 in windy, rainy conditions. For his scores, he punched in a 10-yarder on a read option before adding a five-yarder on a read option. The latter came in the fourth quarter, with Sanders powering toward the goal line on 3rd-and-3. It was a good enough day that fantasy managers won't even mind the 10-yarder Kenneth Gainwell vultured in the second quarter. Sanders has now posted at least 80 yards rushing in 3-of-4 contests, hitting at least 4.7 yards per carry in each of those efforts. He is not being pushed by Gainwell or Boston Scott, and will be a strong RB2 for Week 5 against the Cardinals.\u00a0\n",
    "timestamp": "2022-10-02 08:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.5,
    "week02": 10.1,
    "week03": 4.9,
    "week04": 28.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.5, 10.1, 4.9, 28.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 10.0, 14.5, 14.8, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 5.6, 8.5, 3.9, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 9.9, 13.6, 8.3, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 14.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 22,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 21.73,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Dalvin Cook rushed 20 times for 76 yards in the Vikings' Week 4 win over the Saints.\n",
    "report": "",
    "analysis": "Cook caught both of his targets for 10 yards but was on the sidelines for a 15-yard receiving touchdown by Alexander Mattison. Justin Jefferson also punched in a three-ard score on a jet sweep. Mattison got a few snaps on passing downs, but Cook was still the focal point of the running game, out-carrying Mattison 20-3. Cook entered this game dealing with a shoulder injury, but it didn't appear to bother him or affect his workload. He remains an RB1 for his Week 5 matchup with the Bears.\n",
    "timestamp": "2022-10-02 04:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.3,
    "week02": 5.6,
    "week03": 13.6,
    "week04": 9.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 5.6, 13.6, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 20.9, 10.6, 13.7, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 16.6, 14.8, 10.1, 17.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 21.0, 19.4, 15.2, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4052042.png",
    "name": "James Robinson",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 13.2,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 17,
    "avg_fp2": 14.05,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 29.9,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "James Robinson rushed eight times for 29 yards in the Jaguars' week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Robinson also fumbled at the Eagles' 10-yard line, but Christian Kirk was able to recover. Robinson received a first quarter carry from the Eagles' three-yard line but was hammered for a one-yard loss. He wouldn't come close to scoring again on an afternoon where five Trevor Lawrence turnovers doomed the Jags in rainy conditions. The giveaways short circuited drives and created negative game script. Robinson will hope for better RB2 luck in Week 5 against a porous Texans run defense.\u00a0\n",
    "timestamp": "2022-10-02 09:22 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.4,
    "week02": 14.8,
    "week03": 19.1,
    "week04": 2.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.4, 14.8, 19.1, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 11.3, 11.4, 15.8, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 6.4, 11.0, 11.6, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 12.0, 16.8, 17.7, 21.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360238.png",
    "name": "Dameon Pierce",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 13.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 13.15,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.48,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Dameon Pierce rushed 14 times for 131 yards and a touchdown in Houston's Week 4 loss to the Chargers, adding six receptions for eight yards on six targets.\n",
    "report": "",
    "analysis": "The Texans couldn't really get anything going on offense until the second half, but Pierce gave them a jolt with a 75-yard touchdown run where he shook multiple defenders. Almost all of his targets were desperation checkdowns by Davis Mills as he struggled to get through enough reads to find someone open. Pierce ran well and delivered a crushing pass block on a key third down during Houston's second touchdown drive, but concerns about the quality of the Texans offense will continue to dog him as Houston heads to the upstart Jaguars in Week 5. Pierce will again be on the RB2 line.\u00a0\n",
    "timestamp": "2022-10-02 08:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 8.2,
    "week03": 17.1,
    "week04": 22.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 8.2, 17.1, 22.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 6.9, 12.7, 10.9, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.5, 5.8, 4.8, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 11.8, 19.2, 16.0, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Commanders",
    "projected": 13.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 11.47,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 17.75,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Commanders RB\u00a0Brian Robinson (lower body) was officially designated to return to practice.\u00a0\n",
    "report": "",
    "analysis": "Commanders head coach Ron Rivera said Monday that he \"anticipates\" the rookie running back being available for Week 5 against the Titans. All signs point to Robinson being on track to make his NFL debut against Tennessee, about a month and a half after he was shot twice in the lower body during an armed robbery attempt. Robinson, who had 14 rushes for 57 yards and a touchdown in the preseason, has been a favorite of Washington coaches since the start of training camp. He has every chance to supplant Antonio Gibson as the team's primary early-down back. Gibson had a season-low snap share in Week 4 against the Cowboys. Robinson should be rostered in all 12-team leagues.\u00a0\n",
    "timestamp": "2022-10-05 01:44 PM",
    "source": "Washington Commanders on Twitter ",
    "game_day_logo": "",
    "week01": 16.5,
    "week02": 11.1,
    "week03": 10.5,
    "week04": 7.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 11.1, 10.5, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.8, 15.7, 15.0, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.8, 6.8, 6.8, 8.4, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.1, 9.8, 12.2, 11.9, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 12.3,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 15.43,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.1,
    "fanduelSalary": "$8900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Derrick Henry rushed 22 times for 114 yards and one touchdown in the Titans' Week 4 victory over the Colts, adding three catches for an additional 33 yards.\n",
    "report": "",
    "analysis": "Henry appeared destined for a classic eruption game after finishing the first half with 99 yards and one touchdown on the ground, but was bottled up in the second half as the Titans went into a shell up 24-10. They went on to be blanked on the scoreboard in the second half for consecutive weeks, ultimately holding Henry's game log in check. Henry also had a would-be second 20-yard rushing score called back by a Treylon Burks holding call in the second quarter. The five targets mark two contests in a row with five or more targets for Henry, who will now look towards the Commanders and their 21st-ranked rushing defense in Week 5.\n",
    "timestamp": "2022-10-02 08:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.2,
    "week02": 8.5,
    "week03": 22.8,
    "week04": 22.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 8.5, 22.8, 22.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 4.4, 8.6, 9.6, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.8, 2.7, 2.5, 11.5, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 10.6, 8.0, 18.9, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 12.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 9.88,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.02,
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
    "headlineNews": "Devin\u00a0Singletary had 11 rushes for 49 yards in the Bills' Week 4 win against the Ravens, adding four catches for 47 yards.\u00a0\n",
    "report": "",
    "analysis": "Singletary, fresh off a nine-catch performance against Miami in Week 3, once again functioned as the Bills' lead back. Zack Moss recorded just three carries on the day and James Cook saw only one target against Baltimore. Singletary displayed impressive patience on a few second half carries, and proved elusive against Ravens defenders who had him dead to rights a couple times late in the game. Singletary slowed and allowed Ravens defenders to tackle him at the five yard line on a fourth quarter run that could have been a touchdown if the Bills weren't trying to drain the clock before a game-winning field goal. Singletary's reliable workload in the potent Buffalo offense makes him a fantastic floor option week in and week out. He'll be a top-15 fantasy play in Week 5 against the Steelers.\u00a0\n",
    "timestamp": "2022-10-02 08:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.2,
    "week02": 3.1,
    "week03": 19.6,
    "week04": 9.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 3.1, 19.6, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 26.0, 4.3, 6.5, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.6, 10.3, 3.2, 5.6, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.7, 13.5, 5.1, 9.7, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 12.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 9.12,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.1,
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
    "headlineNews": "James Conner rushed 15 times for 55 yards in the Cardinals' Week 4 win over the Panthers, adding three receptions for 22 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Coach Kliff Kingsbury talked up wanting to get Conner more involved this afternoon, but it was easier said than done in a disjointed affair that lacked flow on both sides. The 18 touches are still a positive for fantasy managers, though they could only watch as Kyler Murray vultured another score on the ground. Sitting on one touchdown through four games, Conner is experiencing his feared regression on last year's ridiculous total, but it should soon swing back the other way. He is the unchallenged goal-line back.\u00a0\n",
    "timestamp": "2022-10-02 11:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 6.1,
    "week03": 7.2,
    "week04": 9.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.1, 7.2, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.1, 10.4, 9.2, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 9.2, 11.5, 2.4, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 15.3, 25.0, 13.8, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239996.png",
    "name": "Travis Etienne",
    "depthchart": "Backup: RB-2",
    "team": "Jacksonville Jaguars",
    "projected": 11.8,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 17,
    "avg_fp2": 6.62,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 29.9,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Travis Etienne rushed eight times for 32 yards in the Jaguars' Week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "With the Jaguars blowing an early 14-0 lead, Etienne ended up playing James Robinson to a snaps/touches standstill and running twice as many routes. Of course, they posted nearly identical rushing lines. Volume opportunity was not there with Trevor Lawrence killing five separate drives with turnovers. Seeing enough work to remain in the FLEX mix, Etienne has a plus Week 5 matchup in the Texans.\u00a0\n",
    "timestamp": "2022-10-02 10:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 6.8,
    "week03": 9.0,
    "week04": 3.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 6.8, 9.0, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 5.0, 5.4, 9.6, 11.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 2.8, 0.9, 2.7, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.7, 12.9, 9.2, 15.4, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239934.png",
    "name": "A.J. Dillon",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 11.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 7,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.41,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "AJ Dillon (knee) was removed from the Week 4 injury report and will play against the Patriots.\n",
    "report": "",
    "analysis": "Dillon was a full participant in practice to close the week, so his limited status on Wednesday was likely nothing more than maintenance. Through three weeks, Dillon leads the Packers' backfield with 40 carries. He is tied with Aaron Jones at 12 targets. Against a New England team that will struggle to mount lengthy drives, Dillon should get going for RB2 fantasy numbers.\n",
    "timestamp": "2022-10-01 09:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.6,
    "week02": 7.2,
    "week03": 4.8,
    "week04": 8.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.6, 7.2, 4.8, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 10.6, 8.6, 4.2, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.3, 9.6, 10.7, 5.7, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.3, 12.7, 9.4, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139925.png",
    "name": "Rashaad Penny",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 11.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 13,
    "avg_fp2": 11.2,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.18,
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
    "headlineNews": "Rashaad Penny (shoulder) is not on Seattle's final injury report for Week 5 against the Saints.\n",
    "report": "",
    "analysis": "He practiced in full on Thursday and Friday after a DNP on Wednesday. Penny will be a low-end RB2 against a traditionally tough New Orleans run defense that has held the Saints and Buccaneers under 100 total rushing yards in two of the last three weeks.\n",
    "timestamp": "2022-10-07 09:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.7,
    "week02": 1.5,
    "week03": 7.4,
    "week04": 28.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.7, 1.5, 7.4, 28.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.0, 4.5, 6.2, 7.2, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.4, 19.6, 21.6, 14.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 10.9, 23.5, 29.7, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 11.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 11.2,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 26.48,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Kareem Hunt rushed 10 times for 49 yards in the Browns' Week 4 loss to the Falcons.\n",
    "report": "",
    "analysis": "Hunt added two catches for 19 yards on three targets in the passing game and again watched Nick Chubb do all of the damage. Chubb has gone over 100 total yards in four straight games to begin the year and scored his fifth touchdown in the last three weeks in the fourth quarter. Hunt is seeing regular touches, with 15, 15, 15, and 12 to open the season, but he doesn't have the upside of Chubb and will again be a back-end RB2 for Week 5 against the Chargers.\n",
    "timestamp": "2022-10-02 08:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.0,
    "week02": 8.4,
    "week03": 7.6,
    "week04": 7.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 8.4, 7.6, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.2, 9.7, 9.6, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 13.9, 8.6, 17.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 10.4, 18.8, 15.9, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 11.1,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 11,
    "avg_fp2": 17.25,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.43,
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
    "headlineNews": "Clyde Edwards-Helaire rushed 19 times for 92 yards and a touchdown in Kansas City's Week 4 win over Tampa Bay, adding one catch for two yards and an additional touchdown.\u00a0\n",
    "report": "",
    "analysis": "Edwards-Helaire might still be running if he had caught his other target, a lofted ball on fourth-and-1 where he'd been left uncovered. Kansas City's running offense bullied a tough Tampa defensive line in this one, with both Edwards-Helaire and Isiah Pacheco getting great numbers out of a bunch of outside runs away from Vita Vea. It's a nice game to establish that Edwards-Helaire can remain effective in good situations, but shouldn't make you feel like he's in line to be more than a borderline RB2/RB3 in Week 5 against the Raiders.\u00a0\n",
    "timestamp": "2022-10-03 04:08 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 20.9,
    "week02": 13.8,
    "week03": 12.4,
    "week04": 21.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.9, 13.8, 12.4, 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 13.8, 7.6, 9.1, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 3.8, 9.2, 10.9, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 7.2, 11.9, 11.9, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 11.0,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 30,
    "avg_fp2": 4.65,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.43,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cam Akers rushed eight times for 13 yards in the Rams' Week 4 loss to the 49ers.\n",
    "report": "",
    "analysis": "He failed to catch his lone target in the passing game. Akers dominated early-down work for the Rams and out-carried Darrell Henderson 8-7, but with the Rams chasing points much of the night, Henderson out-snapped Akers 44-28 and saw four targets. Akers will be a low-floor RB2/FLEX next week against Dallas. Los Angeles clearly isn't happy with its backfield after promoting Malcolm Brown from the practice squad for this one.\n",
    "timestamp": "2022-10-04 03:39 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 7.2,
    "week03": 10.1,
    "week04": 1.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.2, 10.1, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 1.2, 3.5, 7.7, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.3, 2.7, 7.0, 17.0, 14.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 14.2, 9.8, 23.6, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4427366.png",
    "name": "Breece Hall",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 10.8,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 28,
    "avg_fp2": 11.65,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.93,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Breece Hall (knee) was removed from the Week 5 injury report and will play against the Dolphins.\n",
    "report": "",
    "analysis": "Hall was upgraded to a full practice to close out the week. His presence on the injury report is likely nothing more than load management. The rookie earned 19 touches in Week 4, putting a large gap between himself and Michael Carter in the process. He enters Week 5 as an RB2.\n",
    "timestamp": "2022-10-07 08:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.1,
    "week02": 12.5,
    "week03": 12.2,
    "week04": 14.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.1, 12.5, 12.2, 14.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 4.7, 8.3, 10.7, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 1.6, 3.5, 4.8, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 9.2, 14.7, 15.6, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035886.png",
    "name": "Khalil Herbert",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 10.7,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 3,
    "avg_fp2": 13.97,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 23.15,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "David Montgomery (ankle/knee) did not practice Wednesday.\n",
    "report": "",
    "analysis": "Montgomery left his Week 3 matchup with the Texans after just three carries. He did not practice at all last week and was sidelined for Week 4. The Wednesday DNP suggests he is on a similar trajectory this week. Khalil Herbert will draw the start once again if Montgomery is out. Herbert turned 20 touches into 101 scoreless yards last week. With 39 carries and three receptions over the past two weeks, Herbert could push for RB1 numbers in Week 5.\n",
    "timestamp": "2022-10-05 08:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.8,
    "week02": 4.6,
    "week03": 29.9,
    "week04": 10.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 4.6, 29.9, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 6.8, 8.1, 12.3, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.9, 1.4, 5.8, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 7.1, 4.5, 14.0, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4373626.png",
    "name": "Tyler Allgeier",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 10.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 5.8,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 14.28,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons placed Cordarrelle Patterson (knee) on injured reserve.\n",
    "report": "",
    "analysis": "Patterson was questionable with a knee injury ahead of Sunday's game against the Browns and saw just nine touches on the day for 38 yards and a score. His work was noticeably dialed back, as Tyler Allgeier and Caleb Huntley both saw 10 carries, with each back averaging over 5.0 YPC. Both Allgeier and Huntley become must-adds ahead of the team's Week 5 matchup against the Buccaneers, with Allgeier having the slight edge as the better PPR back, while Huntley could see more goal line opportunities. Patterson will be eligible to return in Week 9 against the Chargers.\n",
    "timestamp": "2022-10-04 04:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.5,
    "week04": 10.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.5, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.7, 4.7, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.1, 1.0, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 8.4, 10.1, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 10.5,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 31,
    "avg_fp2": 11.88,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 17.5,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Leonard Fournette rushed three time for minus-three yards in Week 4's loss to Kansas City, adding seven catches for 57 yards and a touchdown on seven targets.\n",
    "report": "",
    "analysis": "Game-scripted out of relevance by an early 21-3 lead for Kansas City, Fournette's three carries were half of Tampa's six total rush attempts. But he managed to salvage a good fantasy day in spite of the lack of touches and Rachaad White's involvement with the receptions and the touchdown that came with Tampa down 17 in the late fourth quarter. Fournette will be on the RB1/RB2 borderline for Week 5 against the Falcons.\n",
    "timestamp": "2022-10-03 03:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.7,
    "week02": 8.4,
    "week03": 9.5,
    "week04": 14.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.7, 8.4, 9.5, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 16.9, 12.3, 10.3, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.7, 13.1, 8.6, 10.5, 7.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 25.5, 16.0, 15.4, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 10.4,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 26,
    "avg_fp2": 12.12,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.27,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Joe Mixon rushed 24 times for 61 yards and a touchdown in the Bengals' Week 4 win over the Dolphins, adding four receptions for 13 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Mixon was being slammed into brick walls in this one, though he thankfully converted one of Zac Taylor's many predictable run calls into a five-yard score in the first quarter. Mixon and his line pushed the pile with some extreme conviction. Unfortunately, Mixon was stopped on a whopping five other carries inside the Dolphins' six-yard line. That included two- and one-yard attempts. Not ideal. What is ideal are Mixon's continuously voluminous workloads. He will remain locked in as a top-eight RB1 for Week 5's likely high-scoring affair with the Ravens.\u00a0\n",
    "timestamp": "2022-09-30 03:48 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 18.0,
    "week02": 9.8,
    "week03": 5.3,
    "week04": 15.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 9.8, 5.3, 15.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 18.4, 19.7, 11.4, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.6, 15.8, 11.1, 9.0, 10.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.0, 20.1, 17.1, 15.9, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241457.png",
    "name": "Najee Harris",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 10.2,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 23,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.32,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Najee Harris rushed 18 times for 74 yards in the Steelers' Week 4 loss to the Jets.\n",
    "report": "",
    "analysis": "Harris was not targeted in this game. It was the first time in his 21-game career that he was held without a catch. Jaylen Warren, his backup, caught his only target for four yards. The concern coming out of this game will be that Kenny Pickett, who took over in the second half, will target his running backs less than Mitch Trubisky did in the first three games. If Harris is seeing fewer looks through the air and remains ineffective on the ground, RB2 numbers will be his ceiling. Things are trending that way for his Week 5 matchup with the Bills.\n",
    "timestamp": "2022-10-02 08:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.6,
    "week02": 11.4,
    "week03": 11.6,
    "week04": 7.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 11.4, 11.6, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 9.0, 6.8, 10.4, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 3.3, 17.6, 11.5, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 10.2, 23.5, 17.3, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 9.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 15.57,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.68,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Christian McCaffrey rushed eight times for 27 yards in the Panthers' Week 4 loss to the Cardinals, adding nine receptions for 81 additional yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Playing through a thigh injury, McCaffrey was going nowhere on the ground but nearly doubled his season receiving production. His 13-yard touchdown grab in the fourth quarter was his first of the year. He got matched up 1-on-1 with\u00a0Zaven Collins and removed the young man's soul. A good sign, though the Panthers' overall sheer ineptitude on offense remains worrying. Baker Mayfield tossed two interceptions and got five passes batted at the line of scrimmage. The 49ers are a tough Week 5 test.\u00a0\n",
    "timestamp": "2022-10-02 11:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.7,
    "week02": 14.8,
    "week03": 12.5,
    "week04": 21.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 14.8, 12.5, 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 7.4, 14.6, 12.0, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 15.4, 10.9, 4.1, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 22.9, 16.7, 10.1, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4569173.png",
    "name": "Rhamondre Stevenson",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 9.8,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 10,
    "avg_fp2": 9.57,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.43,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Rhamondre Stevenson had 14 rushes for 66 yards in the Patriots' Week 4 loss to the Packers, adding four catches for 23 yards.\u00a0\n",
    "report": "",
    "analysis": "Stevenson looked to be on his way to a big outing against Green Bay with four receptions on five targets in the first half. But the pass game involvement stalled out in the second half and the Patriots turned to early-down banger Damien Harris in a close game. Stevenson's usage was encouraging for a second consecutive week; in Week 3 against Baltimore, he totaled 101 yards and a touchdown on 16 touches. Locked in as the Patriots' lead pass catchers, Stevenson has some semblance of a fantasy floor going forward. His ceiling is capped by Harris' early-down usage. Stevenson will be a PPR RB2/3 next week against Detroit.\u00a0\n",
    "timestamp": "2022-10-02 11:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.7,
    "week02": 5.6,
    "week03": 18.1,
    "week04": 10.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 5.6, 18.1, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.5, 6.3, 9.2, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 0.0, 4.2, 16.0, 18.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.2, 15.7, 20.0, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 9.5,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 3,
    "avg_fp2": 7.4,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 23.15,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "David Montgomery (ankle) is questionable for Week 5 against the Vikings.\n",
    "report": "",
    "analysis": "Back-to-back limited tags put Montgomery on the questionable line, with Matt Eberflus telling reporters that everything is \"real positive\" with the back at the moment. Montgomery is likely on the optimistic side of questionable, and the Vikings have allowed seven rushing touchdowns already this year, 31st in the NFL. Montgomery would be a low-end RB2 if cleared to play his full allotment, but it's possible the Bears will give Khalil Herbert more reps than normal to ease Montgomery back in to action.\u00a0\n",
    "timestamp": "2022-10-07 07:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.5,
    "week02": 14.6,
    "week03": 1.1,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 14.6, 1.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 15.4, 18.1, 'DNP', 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 11.6, 7.0, 'DNP', 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 17.4, 12.2, 'DNP', 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 9.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 8,
    "avg_fp2": 12.65,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.23,
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
    "headlineNews": "J.K. Dobbins (chest) practiced in full on Thursday.\n",
    "report": "",
    "analysis": "Wednesday appears to just be a scheduled rest day for the running back, who missed last week's Wednesday practice in the same way. With Justice Hill trending towards out, Dobbins might have a bigger share of the workload in Week 5 against the Bengals. He's still likely more of an RB2.\u00a0\n",
    "timestamp": "2022-10-07 04:57 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 5.0,
    "week04": 20.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 5.0, 20.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 9.9, 4.6, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.5, 3.2, 16.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.8, 8.5, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 8.5,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 19,
    "avg_fp2": 8.47,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.72,
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
    "headlineNews": "Ezekiel Elliott rushed 19 times for 49 yards in the Cowboys' Week 4 win over the Commanders, adding two receptions for 32 additional yards.\n",
    "report": "",
    "analysis": "Dallas' rushing attack was bottled up all afternoon, rushing for a combined 62 yards while failing to register a double-digit carry on the day. Through four games, Elliott has yet to surpass 73 yards on the ground and has just one touchdown to his name. It was a bad day for Tony Pollard truthers as well, as Pollard managed just six yards on eight carries. Zeke is nothing more than a touchdown-dependent RB2 at this point and could be in for a tough Week 5 against the Rams.\n",
    "timestamp": "2022-10-02 08:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.4,
    "week02": 5.4,
    "week03": 14.0,
    "week04": 9.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 5.4, 14.0, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 7.8, 9.9, 11.2, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 12.4, 11.6, 13.8, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 15.3, 16.1, 19.4, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 8.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 14,
    "avg_fp2": 15.15,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 22.65,
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
    "headlineNews": "Josh Jacobs played on 89% of snaps against the Broncos in Week 4.\n",
    "report": "",
    "analysis": "Jacobs' 89% snaps share was a career-high and only the second time he has topped 80%. His previous career-high came in Week 13 against Washington last season. More importantly, Jacobs also had a career day in rushing production, but the 24-year-old's usage is a positive sign that more production could be in the offing. Despite Josh McDaniels' reputation for committee backfields, Jacobs has been installed as a workhorse this season. His 72% snap share this season ranks fifth in the NFL among running backs.\n",
    "timestamp": "2022-10-03 02:03 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 7.8,
    "week02": 8.6,
    "week03": 12.2,
    "week04": 32.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.8, 8.6, 12.2, 32.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 14.0, 10.2, 7.1, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.1, 10.5, 8.2, 13.1, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 21.9, 16.4, 17.8, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 7.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 29,
    "avg_fp2": 5.82,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 19.62,
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
    "headlineNews": "Raheem Mostert rushed 15 times for 69 yards in the Dolphins' Week 4 loss to the Bengals, adding two receptions for 12 additional yards.\u00a0\n",
    "report": "",
    "analysis": "In what has become a theme, Mostert out-touched Chase Edmonds for the third straight week, this time 17-7. Further, Pro Football Focus' Nathan Jahnke charted Mostert as posting new career highs in snaps and routes run. Per Jahnke, Mostert was the featured back in \"early down, goal line, third downs and two minute drill snaps tonight.\" In other words, he is the No. 1 running back by some considerable distance. Naturally, it was Edmonds who found the end zone, but Mostert is stabilizing his FLEX floor and even pushing for some RB2 value ahead of a Week 5 date with the Jets.\u00a0\n",
    "timestamp": "2022-09-30 03:56 AM",
    "source": "Nathan Jahnke on Twitter ",
    "game_day_logo": "",
    "week01": 3.7,
    "week02": 9.4,
    "week03": 1.1,
    "week04": 9.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 9.4, 1.1, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 4.5, 5.0, 9.4, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 3.7, 13.4, 5.9, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 6.5, 17.1, 13.0, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 7.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 18,
    "avg_fp2": 6.2,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.25,
    "fanduelSalary": "$12500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Melvin Gordon rushed 15 times for 54 yards in the Broncos' Week 5 loss to the Colts, adding three receptions for 49 additional yards.\n",
    "report": "",
    "analysis": "The good news for Gordon is he didn't fumble in this one -- although he did have a close call at one point. While Gordon and the Broncos' offense appeared limited at times, the 29-year-old vet did show some playmaking ability on various plays throughout the night. Gordon operated as Denver's clear lead back in this one, totaling 18 opportunities to Mike Boone's 10. He narrowly missed securing the win for the Broncos in overtime when he was stopped just short of the end zone on an inside run. With a Week 6 matchup against the Chargers on tap, Gordon can be treated as a top-24 back with upside for more.\n",
    "timestamp": "2022-10-07 05:09 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 6.2,
    "week02": 5.8,
    "week03": 14.0,
    "week04": -1.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.2, 5.8, 14.0, -1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 6.2, 6.1, 5.8, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 5.6, 3.5, 7.1, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 12.7, 7.7, 13.7, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122976.png",
    "name": "Jeff Wilson",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 7.7,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 9,
    "avg_fp2": 9.7,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.32,
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
    "headlineNews": "Jeff Wilson rushed 18 times for 74 yards and one touchdown in the 49ers' Week 4 win over the Rams.\n",
    "report": "",
    "analysis": "Wilson got the scoring started for the Niners with an explosive 32-yard touchdown run right through the teeth of the Rams' defense. He looked like he was shot out of a cannon. With Elijah Mitchell (knee) injured the last three weeks and still on I.R., Wilson has racked up carry totals of 18, 12, and 18 the last three games. This was his first touchdown. Wilson is a rock-solid, every-week RB2 headed into a Week 5 date with the lowly Panthers. He's dominating the backfield work for San Francisco.\n",
    "timestamp": "2022-10-04 03:22 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.0,
    "week02": 11.3,
    "week03": 10.1,
    "week04": 13.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 11.3, 10.1, 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 17.6, 9.3, 8.8, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 13.8, 8.1, 4.2, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 16.5, 17.7, 12.5, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126246.png",
    "name": "Dontrell Hilliard",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 7.5,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 9.7,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.1,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Dontrell Hilliard (hamstring) was removed from the Week 3 injury report and will play against the Raiders.\n",
    "report": "",
    "analysis": "Hilliard got some run on passing downs in Week 1 and made the most of his opportunities. He went for 61 yards and two scores on three catches while also earning four carries. Hilliard's role isn't big enough to make him worth starting in fantasy lineups, but it does eliminate any hope of Derrick Henry seeing more than three targets.\n",
    "timestamp": "2022-09-23 08:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.4,
    "week02": "DNP",
    "week03": 4.9,
    "week04": 3.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.4, 'DNP', 4.9, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.8, 'DNP', 7.8, 7.7, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 'DNP', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 'DNP', 4.1, 9.8, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 7.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neg": 27,
    "avg_fp2": 5.23,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 16.62,
    "fanduelSalary": "$11000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Nyheim Hines caught 1-of-2 targets for five yards in the Colts' Week 5 win over the Broncos.\n",
    "report": "",
    "analysis": "Hines saw a potentially high-volume day cut short when he exited in the first quarter with a concussion. After drawing the start, he saw a target on two of the Colts' first three plays but left after the third play of the game. Hines now has 10 days to get ready for the Colts' Week 6 matchup against the Jaguars. Assuming Jonathan Taylor (ankle) is active for that game, Hines will resume the pass-catching role that's made him reliable in PPR formats.\n",
    "timestamp": "2022-10-07 04:16 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 8.4,
    "week02": 5.7,
    "week03": 5.5,
    "week04": 1.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 5.7, 5.5, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 2.1, 6.5, 5.5, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 6.7, 6.6, 14.6, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 13.5, 8.8, 18.7, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242873.png",
    "name": "Eno Benjamin",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 7.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 15,
    "avg_fp2": 5.62,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "James Conner (ankle) returned to practice Wednesday.\n",
    "report": "",
    "analysis": "Conner reportedly saw some reps at Wednesday's practice but was still listed as DNP on the team's injury report. Today, it appears Conner was indeed a participant in the team's practice session, which is a good sign ahead of Sunday's Week 3 matchup. Facing a tough Rams defense, Conner would be an RB2 if he suits up this weekend.\n",
    "timestamp": "2022-09-22 03:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.6,
    "week02": 6.6,
    "week03": 3.3,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 6.6, 3.3, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 5.3, 4.7, 7.8, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.7, 2.4, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 3.2, 6.3, 4.4, 4.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Miami Dolphins",
    "projected": 7.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 29,
    "avg_fp2": 9.32,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 19.62,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Chase Edmonds rushed five times for six yards in the Dolphins' Week 4 loss to the Bengals, adding two receptions for 14 additional yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Edmonds' seven-yard touchdown reception in the waning moments of the first half was good. Everything else was bad, including Edmonds' end zone drop on a first quarter third down. That miscue cost the Dolphins four points. Beyond that gaffe, Edmonds' usage lights were blinking red, with Raheem Mostert posting decisive advantages in everything from touches (17-7) to routes run to two-minute usage. Falling further behind Mostert with each passing week instead of making up ground, Edmonds is in danger of falling from FLEX relevance for Week 5 against the Jets.\u00a0\n",
    "timestamp": "2022-09-30 04:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.5,
    "week02": 4.6,
    "week03": 15.2,
    "week04": 9.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 4.6, 15.2, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 9.6, 3.3, 6.3, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 11.9, 7.6, 7.6, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.4, 13.2, 13.0, 11.5, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116389.png",
    "name": "Samaje Perine",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 6.8,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 26,
    "avg_fp2": 4.95,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.27,
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
    "headlineNews": "Samaje Perine rushed one time for zero yards in the Bengals' Week 4 win over the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Perine failed to corral his lone target in the first quarter. PFF charted Perine as getting out-snapped 52-12 by Joe Mixon. Comprehensively lacking standalone value, Perine would probably lead a committee in Mixon's absence, but it would be a committee.\u00a0\n",
    "timestamp": "2022-09-30 04:29 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 5.2,
    "week02": 1.5,
    "week03": 13.1,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 1.5, 13.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 5.2, 4.3, 4.4, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 5.7, 3.1, 2.8, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 9.2, 5.7, 6.0, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 6.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 12,
    "avg_fp2": 3.65,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.02,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Zack Moss had three rushes for six yards in the Bills' Week 4 win against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Moss spelled Devin Singletary for three carries in this one, as Singletary for the second straight week dominated snaps and touches in the Bills backfield. Moss would be in line for early-down work if Singletary were to miss time this season. He's not a bad bench stash in 14-team formats.\u00a0\n",
    "timestamp": "2022-10-02 11:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.6,
    "week02": 1.7,
    "week03": 5.7,
    "week04": 0.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 1.7, 5.7, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 9.1, 3.8, 8.8, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 1.4, 0.2, 9.2, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.5, 5.3, 4.1, 16.9, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3025433.png",
    "name": "Mike Davis",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 8,
    "avg_fp2": 0.5,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.23,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mike Davis was held without a touch in the Ravens' Week 3 win over the Patriots.\n",
    "report": "",
    "analysis": "J.K. Dobbins made his long-awaited return in this one, leaving little work for Davis, who worked behind both Dobbins and Justice Hill on the afternoon. Those stubbornly holding on to Davis through the first two weeks can officially drop him after this week. On the season, he's managed just 15 yards on seven carries.\n",
    "timestamp": "2022-09-25 10:46 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 1.1,
    "week02": 0.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 0.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 2.1, 'DNP', 'DNP', 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 0.1, 'DNP', 'DNP', 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 5.8, 'DNP', 'DNP', 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4421446.png",
    "name": "Craig Reynolds",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 5.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Pos": 6,
    "avg_fp2": 2.6,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.47,
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
    "headlineNews": "Craig Reynold rushed two times for 30 yards, adding one reception for 12 yards on one target in the Lions' Week 4 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Reynolds mixed in behind Jamaal Williams throughout the game but didn't add a ton of production. Critically, he was not the back on the field for the Lions' final TD of the day. Justin Jackson instead caught that two-yard score. Reynolds will remain off the fantasy radar against the Patriots in Week 5.\n",
    "timestamp": "2022-10-02 10:23 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 3.4,
    "week03": 2.3,
    "week04": 4.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.4, 2.3, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 2.3, 2.8, 3.1, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.2, 2.7, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 3.4, 4.9, 5.3, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15971.png",
    "name": "Rex Burkhead",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 5.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 7.2,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.48,
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
    "headlineNews": "Rex Burkhead caught 5-of-5 targets for 39 yards and a touchdown in Houston's Week 4 loss to the Chargers.\n",
    "report": "",
    "analysis": "Burkhead was notably on the field on a key fourth-and-1 playcall that the Texans defended despite the fact that they don't seem to have much faith in him as a runner -- he has three carries since Week 1. He caught an uncovered underneath checkdown pass in the red zone and took it to pay dirt, and a screen design on a blitz up the middle got him enough free space for his 13-yard long. He's not getting enough work on a good enough team to be fantasy-valuable right now -- that includes Week 5's game against the Jaguars -- but this is great news for his offseason best ball drafters.\u00a0\n",
    "timestamp": "2022-10-02 09:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 1.9,
    "week03": 5.0,
    "week04": 12.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 1.9, 5.0, 12.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 4.0, 6.2, 7.3, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.5, 1.5, 6.1, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 9.0, 8.0, 9.8, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 5.2,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 15,
    "avg_fp2": 4.92,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.75,
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
    "headlineNews": "Mark Ingram rushed 10 times for 30 yards in the Saints' Week 4 loss to the Vikings, adding three catches for 13 yards.\n",
    "report": "",
    "analysis": "Ingram left with an undisclosed injury early in the third quarter. He didn't return until the fourth frame, allowing Latavius Murray to punch in a rushing touchdown in his place Ingram got the start in this game with Alvin Kamara sidelined, but Murray was involved early in the game. The days of New Orleans giving any backup Kamara's entire role appear to be gone, Until he returns, Ingram will be nothing more than an RB3.\n",
    "timestamp": "2022-10-02 05:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.8,
    "week02": 5.3,
    "week03": 7.8,
    "week04": 5.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 5.3, 7.8, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 3.9, 7.3, 7.1, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.4, 2.4, 6.4, 6.3, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.8, 9.5, 10.9, 11.1, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "JD McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Commanders",
    "projected": 5.1,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 7.05,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 17.75,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Commanders RB\u00a0Brian Robinson (lower body) was officially designated to return to practice.\u00a0\n",
    "report": "",
    "analysis": "Commanders head coach Ron Rivera said Monday that he \"anticipates\" the rookie running back being available for Week 5 against the Titans. All signs point to Robinson being on track to make his NFL debut against Tennessee, about a month and a half after he was shot twice in the lower body during an armed robbery attempt. Robinson, who had 14 rushes for 57 yards and a touchdown in the preseason, has been a favorite of Washington coaches since the start of training camp. He has every chance to supplant Antonio Gibson as the team's primary early-down back. Gibson had a season-low snap share in Week 4 against the Cowboys. Robinson should be rostered in all 12-team leagues.\u00a0\n",
    "timestamp": "2022-10-05 01:44 PM",
    "source": "Washington Commanders on Twitter ",
    "game_day_logo": "",
    "week01": 4.3,
    "week02": 9.8,
    "week03": 7.0,
    "week04": 7.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.3, 9.8, 7.0, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 5.6, 8.7, 5.4, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 17.0, 7.3, 3.9, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 18.5, 11.5, 6.9, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125116.png",
    "name": "D'Onta Foreman",
    "depthchart": "Backup: RB-2",
    "team": "Carolina Panthers",
    "projected": 5.1,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 0.4,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.68,
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
    "headlineNews": "ESPN's David Newton believes Christian\u00a0McCaffrey (quad) will \"attempt\" to play in Week 4 against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Newton said CMC would try to get in a limited practice on Friday with the hopes of suiting up against Arizona. He would seem on the wrong side of questionable, with soft tissue injuries once again cropping up just three games into the regular season. His health in serious question and his usage in the Carolina a mystery without any clues, McCaffrey is looking like a first round fantasy disappointment. D'Ontae Foreman and Chuba Hubbard would likely split backfield duties against the Cardinals if CMC is sidelined.\u00a0\n",
    "timestamp": "2022-09-30 01:07 PM",
    "source": "David Newton on Twitter ",
    "game_day_logo": "",
    "week01": 0.5,
    "week02": 0.9,
    "week03": 0.0,
    "week04": 0.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.5, 0.9, 0.0, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 8.4, 1.0, 2.8, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 5.1, 4.3, 1.1, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 8.8, 11.9, 4.6, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4371733.png",
    "name": "Kenneth Gainwell",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 5.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 5.32,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.1,
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
    "headlineNews": "Kenneth Gainwell rushed five times for 19 yards and a touchdown in the Eagles' Week 4 win over the Jaguars.\n",
    "report": "",
    "analysis": "Gainwell \"added\" a -2 yard reception. Gainwell's 10-yard score came on a second quarter read option. In theory a vulture of Miles Sanders, but Sanders actually tallied two touchdowns of his own on a career-high 27 carries. Yet to push Sanders or carve out a standalone role of his own, Gainwell can be left on waive wires for Week 5 against the Cardinals.\u00a0\n",
    "timestamp": "2022-10-02 10:18 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.2,
    "week02": 2.3,
    "week03": 0.6,
    "week04": 8.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.2, 2.3, 0.6, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 16.8, 12.7, 4.7, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 1.5, 3.7, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 10.1, 5.7, 9.4, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 5.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 32,
    "avg_fp2": 2.85,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.77,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Sony Michel rushed six times for 11 yards in Los Angeles' Week 4 win over the Texans, adding three receptions for 16 yards on three targets.\n",
    "report": "",
    "analysis": "Joshua Kelley got a little run early in the game and wound up with four carries for 15 yards, but Michel still seems like the primary backup for Los Angeles at running back. Michel won't merit real fantasy consideration unless Austin Ekeler gets hurt or is otherwise indisposed.\u00a0\n",
    "timestamp": "2022-10-02 08:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 2.4,
    "week03": 3.6,
    "week04": 4.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 2.4, 3.6, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 1.9, 1.8, 3.5, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 1.3, 2.2, 6.1, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 9.0, 5.6, 9.3, 5.7]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4374302.png",
    "name": "Amon-Ra St. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 23.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 5,
    "avg_fp2": 20.53,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 26.8,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Amon-Ra St. Brown (ankle) is questionable for Week 5 against the Patriots.\n",
    "report": "",
    "analysis": "He returned to practice, but did not speak to reporters in the locker room on Friday before heading off to rehab. It's hard to get a good sense of where this leaves him for Sunday, but on the face of the facts he's likely on the doubtful side of questionable. The only hint we got from Dan Campbell on Friday was when he said the return of Brown in \"any capacity would be very helpful.\"\n",
    "timestamp": "2022-10-07 08:19 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.4,
    "week02": 34.9,
    "week03": 10.3,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.4, 34.9, 10.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 17.7, 10.8, 'DNP', 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 24.7, 27.2, 'DNP', 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.8, 29.9, 36.7, 'DNP', 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361370.png",
    "name": "Chris Olave",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 18.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 25.2,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Chris Olave caught 4-of-7 targets for 67 yards and a touchdown in the Saints' Week 4 loss to the Vikings.\n",
    "report": "",
    "analysis": "There were concerns that Olave's style wouldn't mesh with Andy Dalton, but those were quickly negated by a second-quarter score at the goal-line. Olave wound up leading the Saints in targets again. His seven looks were good for a 25 percent target share. The rookie may not have racked up air yards at an incredible clip in this game, but he won in different ways with a new quarterback under center. He enters his Week 5 matchup with the Seahawks as a solid WR3 option.\n",
    "timestamp": "2022-10-02 04:44 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.6,
    "week02": 8.5,
    "week03": 19.2,
    "week04": 14.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 8.5, 19.2, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.1, 6.9, 11.2, 18.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 2.5, 3.1, 4.9, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.1, 13.3, 17.1, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 17.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 23,
    "avg_fp2": 13.22,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.35,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "CeeDee Lamb (groin) is questionable for Week 5 against the Rams.\n",
    "report": "",
    "analysis": "Not exactly what you wanted to hear after Lamb told reporters yesterday that he didn't want his absence to \"scare\" anybody. Lamb got in a limited session on Friday. Lamb is still expected to play by most beat reporters, but had an MRI just to be sure everything was okay. Mike McCarthy said that his missing practice was \"precautionary\" and we're regarding Lamb as on the probable side of questionable.\u00a0\n",
    "timestamp": "2022-10-07 07:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.9,
    "week02": 11.6,
    "week03": 18.7,
    "week04": 18.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 11.6, 18.7, 18.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.6, 7.2, 9.7, 18.6, 17.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.5, 9.2, 12.2, 13.4, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 13.2, 16.8, 17.9, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372016.png",
    "name": "Jaylen Waddle",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 16.5,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 3,
    "avg_fp2": 17.08,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 28.32,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Jaylen Waddle (groin) is questionable for Week 5 against the Jets.\n",
    "report": "",
    "analysis": "Like his running mate Tyreek Hill, Waddle was able to get in back-to-back limited practices to finish the week. Unlike Hill, this injury is not new and he's been listed with it since Week 4. Waddle is probably on the optimistic side of questionable considering he played through the injury last week, but he'll be another big injury to monitor on the Saturday night/Sunday morning circuit.\u00a0\n",
    "timestamp": "2022-10-07 08:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 34.6,
    "week03": 13.1,
    "week04": 4.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 34.6, 13.1, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 5.1, 8.2, 13.7, 16.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 4.7, 10.4, 14.7, 12.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 9.4, 18.3, 23.6, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 15.9,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 12.8,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.73,
    "fanduelSalary": "$14000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael Pittman caught 5-of-8 targets for 59 yards in the Colts' Week 5 win over the Broncos.\n",
    "report": "",
    "analysis": "In a game that featured only field goals, Pittman was held out of the end zone for the third consecutive week but saw good volume in a matchup that featured underwhelming offenses on both sides. Pittman would help convert three first downs for the Colts on the evening, finding space to operate against a stout Broncos defense when given the opportunity to do so. With five games now under their belt, there's a chance that this Colts' offense is just bad, and that Pittman will have these down games as a result of playing in such a broken offense. Still the top option in the passing game, Pittman should be a solid WR2 in Week 6 against the Jaguars.\n",
    "timestamp": "2022-10-07 04:32 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 22.6,
    "week02": "DNP",
    "week03": 11.2,
    "week04": 4.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 'DNP', 11.2, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 'DNP', 24.8, 19.6, 15.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 'DNP', 12.8, 8.7, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 'DNP', 17.1, 14.1, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 15.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 18,
    "avg_fp2": 13.2,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 20.52,
    "fanduelSalary": "$13000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Courtland Sutton caught 5-of-11 targets for 74 yards in the Broncos' Week 5 loss to the Colts.\n",
    "report": "",
    "analysis": "Sutton's longest play came on a 51-yard reception early in the third quarter on a play that almost didn't end well. With the ball in the air, Sutton converged on wide receiver Montrell Washington, two defensive backs and a referee to haul in a contested catch that ended with him and Washington contending for the ball as they headed to the ground. Sutton was missed on several throws by Russell Wilson throughout the afternoon, failing to catch both end zone targets on the evening. His final target came on fourth and one in overtime. Looking to extend the game or perhaps win it, Wilson gunned a pass to Sutton that was immediately broken up by former two-time All-Pro cornerback Stephon Gilmore. The good news for Sutton and fantasy owners is that he remains the No. 1 option in the passing game and saw some decent end zone work. The bad news is the Broncos have now struggled on offense for five-straight weeks. Sutton should be tweeted as a solid WR2 next week against the Chargers.\n",
    "timestamp": "2022-10-07 05:22 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 9.2,
    "week02": 16.2,
    "week03": 13.7,
    "week04": 13.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 16.2, 13.7, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 15.9, 7.2, 16.0, 15.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 5.6, 8.2, 8.4, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 8.1, 13.0, 13.0, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 15.4,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 8,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.2,
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
    "headlineNews": "Ja'Marr Chase caught 4-of-6 targets for 81 yards in the Bengals' Week 4 win over the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "The 81 yards were Chase's most since Week 1, though 43 fewer than Tee Higgins, who caught seven balls. 23 of Chase's yards came on a trick play from Tyler Boyd, while he was sitting on 3/45 until the 2:58 mark of the fourth quarter. It has been a frustrating start for the electrifying young wideout, but better days should be ahead with the Bengals' offensive line finally beginning to come together. It would be nice for Zac Taylor's play-calling to get a little less predictable, however. The Ravens are an A+ Week 5 matchup.\u00a0\n",
    "timestamp": "2022-09-30 03:41 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 23.9,
    "week02": 8.3,
    "week03": 9.7,
    "week04": 10.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.9, 8.3, 9.7, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 17.5, 11.2, 12.8, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 13.8, 3.9, 16.6, 36.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.0, 26.0, 10.1, 19.6, 40.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 15.4,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 17.9,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 23.47,
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
    "headlineNews": "Justin Jefferson caught 10-of-13 targets for 147 yards in the Vikings' Week 4 win over the Saints, adding one carry for three yards and a touchdown.\n",
    "report": "",
    "analysis": "Jefferson found the end zone on a three-yard sweep near the goal line. He walked into the end zone untouched. After two games of being held under 50 receiving yards, the 147-yard performance was an impressive rebound from the third-year receiver. Jefferson consistently got the better of Saints corner Marshon Lattimore in this game, including a 39-yard shot to get Minnesota in range for their game-winning field goal. Jefferson remains a top-three fantasy receiver heading into Week 5.\n",
    "timestamp": "2022-10-02 04:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 34.9,
    "week02": 7.8,
    "week03": 2.9,
    "week04": 26.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.9, 7.8, 2.9, 26.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.6, 11.3, 3.1, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 10.6, 10.5, 12.9, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 15.9, 16.0, 20.6, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258173.png",
    "name": "Nico Collins",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 15.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 24,
    "avg_fp2": 6.55,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 27.25,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Nico Collins caught 3-of-5 targets for 82 yards in Houston's Week 4 loss to the Chargers.\n",
    "report": "",
    "analysis": "58 of the yards came on a play-action bomb by Davis Mills -- it was Mills' longest completed pass of the season -- and the rest of it was the standard Collins stuff. He got no red zone targets, and Mills is not accurate enough on a reliable basis to make his underneath work valuable. Collins remains a tough start in Week 5 against the Jaguars.\u00a0\n",
    "timestamp": "2022-10-02 09:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.6,
    "week02": 7.8,
    "week03": 5.1,
    "week04": 9.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 7.8, 5.1, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 3.0, 4.2, 3.3, 15.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 3.9, 2.5, 3.0, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.9, 7.5, 6.0, 4.4, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 15.1,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 15.25,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 26.82,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Christian Kirk caught 2-of-9 targets for 60 yards in the Jaguars' Week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "It was Kirk's first down day of the season, one where he committed a critical third quarter drop. He was also the intended target on Trevor Lawrence's interception, though the miscue seemed to be the quarterback's fault. A bad day, but there wasn't much Kirk could do as Lawrence committed five turnovers in rainy conditions. Lawrence completed just 11 passes. Kirk should bounce back as a WR2 for a softer Week 5 date with the Texans.\u00a0\n",
    "timestamp": "2022-10-02 08:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.7,
    "week02": 22.8,
    "week03": 16.2,
    "week04": 7.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.7, 22.8, 16.2, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 16.8, 11.7, 11.9, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 9.5, 10.8, 3.7, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 12.8, 16.2, 10.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 14.6,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 6,
    "avg_fp2": 14.72,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.0,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "A.J. Brown caught 5-of-7 targets for 95 yards in the Eagles' Week 4 win over the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Briefly blue tented in the first quarter, Brown returned to clear 5/85 for the third time in four games as an Eagle. He has yet to catch fewer than five passes or post fewer than 69 yards. He has only one touchdown, but that will surely change soon. It might have today had the conditions not been so passing-averse, limiting Jalen Hurts to 16 completions. The Cardinals are a plus Week 5 matchup.\u00a0\n",
    "timestamp": "2022-10-02 08:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.5,
    "week02": 9.4,
    "week03": 17.0,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.5, 9.4, 17.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 6.4, 18.4, 12.2, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.7, 7.2, 14.1, 6.0, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 14.1, 22.0, 11.8, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 13.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 3,
    "avg_fp2": 18.93,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 28.32,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Tyreek Hill (quad) is questionable for Week 5 against the Jets.\u00a0\n",
    "report": "",
    "analysis": "Hill got in back-to-back limited practices after popping up on the injury report on Thursday. Mike McDaniel said he's \"hopeful\" that Hill can play earlier on Friday, but wasn't exactly forthcoming with the media on what would happen, saying \"I can say with 100% conviction that Tyreek Hill will play or he won\u2019t play \u2014 that\u2019s all Saleh is getting.\u201d Well, that makes life easy for fantasy mangers! Hill's managers should be prepared to pivot on Sunday morning.\u00a0\n",
    "timestamp": "2022-10-07 07:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 36.5,
    "week03": 4.3,
    "week04": 20.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 36.5, 4.3, 20.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 9.3, 16.0, 17.0, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.8, 7.4, 0.0, 9.4, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 16.3, 26.9, 18.4, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 13.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 24,
    "avg_fp2": 9.38,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 27.25,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Brandin Cooks caught 7-of-7 targets for 57 yards and a touchdown in Houston's Week 4 loss to Los Angeles.\n",
    "report": "",
    "analysis": "The touchdown was a saving grace, but Cooks continued to find little room to roam deep. His 20-yard catch on the score was his longest of the day, he was blown up on one screen for negative yards, and his targeted air yards per attempt of 6.7 was tight-end-esque. He'll stay on the WR3 line for a Week 5 matchup with the Jaguars, but the underlying metrics are starting to get a little shaky on him being more than a volume sponge with slim touchdown hopes.\u00a0\n",
    "timestamp": "2022-10-02 09:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.7,
    "week02": 7.4,
    "week03": 3.2,
    "week04": 15.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 7.4, 3.2, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 8.3, 7.4, 16.4, 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 10.7, 5.9, 2.8, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 16.9, 16.2, 7.9, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121409.png",
    "name": "Noah Brown",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 13.1,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 23,
    "avg_fp2": 10.6,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.35,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Noah Brown caught 3-of-6 targets for 61 yards in the Cowboys' Week 4 win over the Commanders.\n",
    "report": "",
    "analysis": "Even with Michael Gallup active, Brown still saw the second-most targets on the afternoon for the Cowboys. His best play of the day came on a 45-yard pass from Cooper Rush in the third quarter, which helped set up a 28-yard field goal by Brett Maher. Brown entered Sunday's matchup averaging 71.0 yards per game, but faces added competition with the return of Gallup. Brown's days as a No. 2 receiver could be coming to an end with Gallup back in the mix. He's nothing more than a FLEX option next week against the Rams.\n",
    "timestamp": "2022-10-02 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 17.6,
    "week03": 7.9,
    "week04": 7.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 17.6, 7.9, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 4.9, 4.6, 7.9, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.1, 6.5, 3.8, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.7, 0.4, 11.9, 6.0, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Commanders",
    "projected": 12.4,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 17,
    "avg_fp2": 9.68,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.97,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin caught 2-of-6 targets for 15 yards in the Commanders' Week 4 loss to the Cowboys.\n",
    "report": "",
    "analysis": "On a positive note, McLaurin was targeted early in this one, drawing a target on Washington's first offensive drive. Unfortunately, the five targets that followed were wildly underwhelming. McLaurin saw an end zone target broken up by Trevon Diggs in the fourth quarter, and another deep target broken up by Diggs to end the game. Unlike last week, McLaurin wasn't bailed out in garbage time, as Washington's offense struggled for most of the afternoon. McLaurin's six targets were tied for second-most on the team, as he's now seen six or more targets in each of the last three weeks. McLaurin is a WR2 next week against the Titans.\n",
    "timestamp": "2022-10-02 10:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.8,
    "week02": 10.2,
    "week03": 13.2,
    "week04": 2.5,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 10.2, 13.2, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 8.9, 14.5, 5.5, 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 10.2, 6.0, 9.1, 15.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 14.9, 10.8, 14.3, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372485.png",
    "name": "Rondale Moore",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 12.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 15,
    "avg_fp2": 2.2,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.77,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Rondale Moore (knee) is questionable for Week 5 against the Eagles.\n",
    "report": "",
    "analysis": "In his Friday presser, Cardinals coach Kliff Kingsbury sounded optimistic that Moore would be able to play this week. Even if he can go, Moore is a tough bet to make for fantasy purposes. Playing on the outside, Moore caught 3-of-5 targets for 11 yards last week. Desperate fantasy managers can view him as a WR5/6 for Week 5.\n",
    "timestamp": "2022-10-07 08:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 12.2,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 7.22,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.85,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "DeVante Parker caught both of his targets for 24 yards and a touchdown in the Patriots' Week 4 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Parker, who went off for 156 yards last week against the Ravens, was fourth in targets among New England pass catchers in Week 4. His touchdown catch came on a little lob from rookie QB Bailey Zappe, who was forced into action after Brian Hoyer suffered a brain injury. Parker will only be a WR3 option next week against the Lions if Jakobi Meyers (knee) remains sidelined.\u00a0\n",
    "timestamp": "2022-10-03 12:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 0.0,
    "week03": 18.1,
    "week04": 9.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.0, 18.1, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.5, 1.1, 2.4, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 1.4, 4.6, 9.6, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.2, 4.0, 8.2, 12.3, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 11.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 7.47,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 28.73,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "JuJu Smith-Schuster caught 5-of-7 targets for 46 yards in Kansas City's Week 4 win over Tampa Bay.\n",
    "report": "",
    "analysis": "The good news is that Smith-Schuster has clearly won the target battle over the rest of Kansas City's wideouts even despite a Week 2 clunker. The bad news is that the upside of those targets to date has looked more like a month from Jakobi Meyers than something that is actually swinging your fantasy league. Smith-Schuster's best win tonight was a third-and-long screen pass that he took 19 yards. He's a Not Feeling Great About It WR3 entering Week 5's matchup against Vegas.\u00a0\n",
    "timestamp": "2022-10-03 04:27 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 8.9,
    "week02": 2.5,
    "week03": 11.4,
    "week04": 7.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.9, 2.5, 11.4, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 16.5, 10.4, 11.0, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 10.3, 0.8, 15.1, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 16.0, 6.9, 19.9, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 11.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 15,
    "avg_fp2": 15.22,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.77,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Marquise Brown (foot) was removed from the Week 5 injury report and will play against the Eagles.\n",
    "report": "",
    "analysis": "Brown was listed as a DNP on Wednesday, but the practice was just a walkthrough. He was upgraded to a limited participant on Thursday before getting in a full practice today. With 39 targets in the past three weeks, the Cardinals have made it clear that Brown is their only method of moving the ball. He is in the WR1 conversation for Week 5.\n",
    "timestamp": "2022-10-07 08:51 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.3,
    "week02": 9.8,
    "week03": 21.0,
    "week04": 17.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 9.8, 21.0, 17.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.0, 11.2, 5.8, 7.0, 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 8.8, 9.7, 11.4, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 11.8, 12.8, 15.5, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 11.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 9.65,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 23.47,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Adma Thielen caught 6-of-8 targets for 61 yards and a touchdown in the Vikings' Week 3 win over the Lions.\u00a0\n",
    "report": "",
    "analysis": "Thielen's score came from just one yard out after Justin Jefferson drew a defensive pass interference in the end zone. Overall, it was a solid box score for Thielen, but given that Jefferson totaled just 14 yards on three receptions it was somewhat disappointing that K.J. Osborn was the Vikings' leading receiver this week.\u00a0 Thielen profiles is a TD-dependent FLEX option against the Saints in Week 4.\n",
    "timestamp": "2022-09-25 10:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 7.2,
    "week03": 15.1,
    "week04": 11.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 7.2, 15.1, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 5.9, 8.7, 3.2, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 8.2, 1.9, 14.8, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 14.2, 9.1, 24.2, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 10.5,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 11.8,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 19.02,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Allen Lazard (ankle) isn't on Green Bay's final injury report for Week 5 against the Giants.\n",
    "report": "",
    "analysis": "Lazard continues to get in limited practices but show up on Sundays. He'll be a solid WR3 play against a banged-up Giants secondary that loves to blitz under Wink Martindale. Look for Lazard to be limited again on Wednesday of next week and for that to not mean much unless something new occurs.\u00a0\u00a0\n",
    "timestamp": "2022-10-07 05:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 8.3,
    "week03": 12.5,
    "week04": 14.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 8.3, 12.5, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 10.8, 7.6, 7.7, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 13.2, 1.0, 4.3, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 16.6, 4.1, 8.6, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Reserve: WR-3",
    "team": "New England Patriots",
    "projected": 10.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.85,
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
    "headlineNews": "Nelson Agholor caught 3-of-4 targets for 46 yards in the Patriots' Week 4 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Agholor trailed only Rhamondre Stevenson in targets on a low-volume passing day for a New England offense led by rookie QB Bailey Zappe. Agholor's highlight came on a 27-yard reception in the middle of the field on what may have been a blown coverage in the Packers secondary. No Patriots receiver will have much fantasy appeal in Week 5 against the Lions with Mac Jones (ankle) likely out.\u00a0\n",
    "timestamp": "2022-10-03 02:21 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 20.0,
    "week03": 3.1,
    "week04": 6.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 20.0, 3.1, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 3.7, 5.5, 4.9, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 3.4, 7.8, 2.1, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 8.5, 13.1, 5.6, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 10.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 4,
    "avg_fp2": 11.4,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 35.16,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Corey Davis caught 5-of-7 targets for 74 yards and a touchdown in the Jets' Week 4 win over the Steelers.\n",
    "report": "",
    "analysis": "Davis was the only receiver Zach Wilson consistently connected with. No one else on the team picked up more than two receptions. Davis's seven targets were good for a 19 percent target share. After playing second-fiddle to Garrett Wilson for a few weeks, Davis has a chance to see his role grow based on New York's change at quarterback. Davis will be a risky WR4/5 for his Week 5 matchup with the Dolphins.\n",
    "timestamp": "2022-10-02 09:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.7,
    "week02": 15.3,
    "week03": 3.7,
    "week04": 15.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 15.3, 3.7, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 4.3, 10.6, 11.0, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 10.2, 8.3, 6.9, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 17.1, 13.6, 10.7, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 10.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 15.0,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 32.12,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Davante Adams caught 9-of-13 targets for 101 yards in the Raiders' Week 4 win over the Broncos.\n",
    "report": "",
    "analysis": "After being held to 48 yards and one touchdown on seven grabs spanning 17 targets the previous two weeks, Adams rebounded for his second 100-yard game of the young season. He was draped in Patrick Surtain's coverage much of the day, but Derek Carr found a way to get him the ball anyway, targeting Adams on 38.2% of his pass attempts. Adams will be a WR1 next Monday night against the Chiefs.\n",
    "timestamp": "2022-10-02 11:51 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 25.1,
    "week02": 8.2,
    "week03": 11.7,
    "week04": 15.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.1, 8.2, 11.7, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.9, 8.7, 16.4, 9.9, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 14.3, 10.6, 14.2, 17.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 20.9, 23.2, 21.7, 26.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 10.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 10.97,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.45,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "DK Metcalf caught 7-of-10 targets for 149 yards in the Seahawks' Week 4 win over the Lions.\n",
    "report": "",
    "analysis": "Although he didn't score, Metcalf was absolutely critical to the Seahawks' win. He had several key catches over the middle and hit multiple 20+ yard receptions. His biggest catch of the day was a 56-yarder down to the 2-yard-line that set up a Noah Fant TD. Metcalf's 10 targets were good for a 30% target share, and he was actually seeing looks down the field against a weak secondary. It was nice to see Metcalf get work downfield against the Lions, but he'll likely be back to more of a possession receiver role against the Saints in Week 5.\n",
    "timestamp": "2022-10-02 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 5.5,
    "week03": 14.9,
    "week04": 18.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 5.5, 14.9, 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 3.9, 8.5, 13.0, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 9.4, 3.3, 4.3, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 14.1, 8.7, 14.6, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png",
    "name": "DeVonta Smith",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 10.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 6,
    "avg_fp2": 10.4,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.0,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "DeVonta Smith caught 3-of-4 targets for 17 yards in the Eagles' Week 4 win over the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Smith was dealing with some sort of leg injury in the second half, but it was never announced. He remained in the contest. Coming off 15/249/1 over the past two weeks, Smith came back down to earth as the Eagles were forced to ride the running game in rainy conditions. Provided his leg issue does not flare up after the adrenaline wears off, Smith will be a plus WR3 for Week 5 against the Cardinals.\u00a0\n",
    "timestamp": "2022-10-02 09:01 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 11.5,
    "week03": 26.9,
    "week04": 3.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 11.5, 26.9, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 4.9, 2.2, 11.0, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 16.0, 8.7, 7.7, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 20.2, 15.7, 9.6, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 10.0,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 28,
    "avg_fp2": 8.77,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 21.25,
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
    "headlineNews": "Diontae Johnson (hip) isn't on Pittsburgh's final injury report for Week 5 against the Bills.\n",
    "report": "",
    "analysis": "When Johnson told reporters that he'd be good to go, he was not fibbing. The talented fourth-year receiver was limited in practice on Thursday but bounced back to a full practice on Friday. Because of how impressive Buffalo's pass defense has been this year, he's probably best viewed as a WR3 for Sunday.\u00a0\n",
    "timestamp": "2022-10-07 06:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.0,
    "week02": 10.7,
    "week03": 12.16,
    "week04": 3.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.7, 12.16, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 12.8, 4.7, 10.2, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.2, 9.5, 15.0, 10.2, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 15.9, 21.2, 14.8, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 9.9,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 8,
    "avg_fp2": 13.38,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.2,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins (ankle) is questionable for Week 5 against the Ravens.\n",
    "report": "",
    "analysis": "Higgins got in three limited practices but couldn't escape the questionable tag. Zac Taylor said that he'd limit Higgins so that he felt good enough to play on Sunday earlier today, so Higgins is likely on the optimistic side of questionable heading into Sunday Night Football. We would expect optimistic reports on him playing from the Saturday Night/Sunday Morning crew.\u00a0\n",
    "timestamp": "2022-10-07 06:37 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 3.7,
    "week02": 16.1,
    "week03": 11.8,
    "week04": 21.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 16.1, 11.8, 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.7, 9.1, 9.4, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 11.4, 11.1, 7.4, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 17.2, 15.5, 10.3, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 9.8,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 26,
    "avg_fp2": 13.72,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 25.48,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Deebo Samuel caught 6-of-7 targets for 115 yards and one touchdown in the 49ers' Week 4 win over the Rams.\n",
    "report": "",
    "analysis": "Samuel only rushed two times for two yards, as Jeff Wilson did all of the heavy lifting as a runner with 18/74/1 on the ground. Samuel, however, dunked on the Rams with a 57-yard catch-and-run touchdown on a slant in the second quarter. He almost did it again from 58 yards out in the second half, going for just 29 yards on a 3rd-and-13 call. It was Samuel's first 100-yard game of the season and his first touchdown as a receiver. He also led the team with his seven targets. Samuel will be an easy WR1 for Week 5 against the Panthers.\n",
    "timestamp": "2022-10-04 03:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.6,
    "week02": 12.2,
    "week03": 10.4,
    "week04": 20.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.6, 12.2, 10.4, 20.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.2, 6.9, 7.1, 13.4, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 14.1, 11.5, 10.2, 12.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.5, 19.5, 18.2, 12.0, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121410.png",
    "name": "Parris Campbell",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 9.8,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 3.38,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.73,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Parris Campbell caught 2-of-3 targets for 22 yards in the Colts' Week 5 win over the Broncos.\n",
    "report": "",
    "analysis": "Campbell tied with Phillip Lindsay for the third-most targets on the afternoon and finished with the fourth-most yards behind running back Deon Jackson (29). Operating as the clear WR3 in the offense, Campbell has offered little fantasy upside for three-straight weeks. He's operated primarily from the slot, but Matt Ryan's top two targets, Michael Pittman and Alec Pierce have all but made that slot role irrelevant for fantasy. Campbell can be left on the waiver wire at this time.\n",
    "timestamp": "2022-10-07 04:43 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 5.2,
    "week02": 0.0,
    "week03": 2.0,
    "week04": 6.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 0.0, 2.0, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 12.5, 10.7, 3.4, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 2.4, 0.5, 5.5, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 5.7, 2.3, 8.9, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372414.png",
    "name": "Elijah Moore",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 9.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 4,
    "avg_fp2": 6.58,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 35.16,
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
    "headlineNews": "Elijah Moore caught 3-of-4 targets for 53 yards in the Jets' Week 4 win over the Steelers.\n",
    "report": "",
    "analysis": "Moore entered Week 4 tied for third on the Jets in targets. After being out-targeted 7-4 by Corey Davis, he now has sole possession of fifth place on the team. Moore has been unable to earn targets at a high clip and Zach Wilson struggled to do much in his 2022 debut. If New York's passing attack takes a downturn under Wilson, things could go from bad to worse for Moore. In a Week 5 matchup with the Dolphins, Moore should be treated as a WR5.\n",
    "timestamp": "2022-10-02 09:32 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 5.0,
    "week03": 6.9,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 5.0, 6.9, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 3.9, 13.7, 17.6, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 6.0, 6.0, 2.0, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.8, 8.2, 7.2, 11.5, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 9.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 20.02,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.12,
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
    "headlineNews": "Stefon Diggs caught 4-of-6 targets for 62 yards in the Bills' Week 4 win against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "Diggs was tied for the team lead with just half a dozen targets in what was a spread-out passing attack against Baltimore. He was invisible for much of the game, and nearly came up with a long sideline reception that would have made his final stat line look a lot prettier. On a day where Josh Allen threw for a meager 213 yards and was utilized as a rusher (11 carries for 70 yards), especially in the red zone, Diggs didn't see his usual volume. He remains the team's unquestioned top wideout, however, and should be a locked-in WR1 play in Week 5 against the Steelers.\u00a0\n",
    "timestamp": "2022-10-02 08:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.2,
    "week02": 38.8,
    "week03": 10.9,
    "week04": 8.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.2, 38.8, 10.9, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 9.3, 19.8, 21.1, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.3, 17.9, 11.7, 11.4, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 22.2, 18.6, 19.0, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 9.2,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 20,
    "avg_fp2": 5.0,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.05,
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
    "headlineNews": "Asked about getting the ball to Allen Robinson, Rams coach Sean McVay said, \"A lot of it is out of his control.\"\n",
    "report": "",
    "analysis": "McVay went on to say the defenses the Rams are seeing and where Robinson is lining up against those coverages plays a role in the lack of targets. Regardless of the reason, the Rams have to find a way to get a receiver other than Cooper Kupp going. Fantasy managers would love if that receiver is Allen Robinson.\u00a0\n",
    "timestamp": "2022-10-05 09:13 PM",
    "source": "Kayla Burton on Twitter",
    "game_day_logo": "",
    "week01": 1.7,
    "week02": 13.3,
    "week03": 3.3,
    "week04": 1.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 13.3, 3.3, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 3.4, 9.7, 9.9, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.3, 1.2, 7.1, 4.6, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.9, 13.5, 11.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 9.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 25,
    "avg_fp2": 11.2,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.93,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Amari Cooper caught just 1-of-4 targets for nine yards in the Browns' Week 4 loss to the Falcons.\n",
    "report": "",
    "analysis": "Cooper was coming off back-to-back 100-yard, one-touchdown games in Weeks 2 and 3 but came crashing back to Earth in this one with David Njoku (5/73) and Donovan Peoples-Jones (5/71) doing the heavy lifting for Jacoby Brissett in the loss. Cooper will look to rebound next week against the Chargers as a low-floor WR2/3 in the Browns' anemic passing offense.\n",
    "timestamp": "2022-10-02 08:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 20.6,
    "week03": 19.6,
    "week04": 1.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 20.6, 19.6, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 8.5, 11.6, 17.0, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 15.8, 6.9, 11.8, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 21.7, 18.6, 19.6, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 11,
    "avg_fp2": 7.2,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.23,
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
    "headlineNews": "Chris Godwin (knee) was removed from the Week 5 injury report and will play against the Falcons.\n",
    "report": "",
    "analysis": "There was never a risk of Godwin sitting, but his full practice on Friday is a good sign that there are no lingering issues from the hamstring injury he dealt with earlier in the season. Coming off a ten-target game, Godwin is a strong WR2 option for Week 5.\n",
    "timestamp": "2022-10-07 06:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 9.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 'DNP', 'DNP', 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 'DNP', 'DNP', 6.4, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.5, 'DNP', 'DNP', 5.8, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 'DNP', 'DNP', 9.0, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039050.png",
    "name": "Devin Duvernay",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 8.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 11.75,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 24.85,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Duvernay caught 4-of-5 targets for 51 yards in the Ravens' Week 4 loss to the Bills.\u00a0\n",
    "report": "",
    "analysis": "Duvernay ran a pass route on a solid 74 percent of the team's drop backs and tied Mark Andrews for the lead in targets. Lamar Jackson's primary deep threat and far behind Mark Andrews and Rashod Bateman in the pass-catching pecking order, Duvernay should only be rostered in deeper fantasy formats.\u00a0\n",
    "timestamp": "2022-10-02 10:46 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 19.4,
    "week02": 11.2,
    "week03": 9.3,
    "week04": 7.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.4, 11.2, 9.3, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 5.2, 8.2, 8.1, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 2.3, 1.3, 4.2, 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.9, 9.2, 6.4, 6.4, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916566.png",
    "name": "K.J. Osborn",
    "depthchart": "Reserve: WR-3",
    "team": "Minnesota Vikings",
    "projected": 8.4,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 5.8,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 23.47,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "K.J. Osborn caught 1-of-2 targets for six yards in the Vikings' Week 4 win over the Saints.\n",
    "report": "",
    "analysis": "Osborn had a touchdown catch called back by an offensive penalty. His day was uneventful otherwise. Osborn has topped 25 yards once in four games. With Justin Jefferson hogging targets and Adam Thielen playing a considerable role, there's no room for Osborn to be a viable fantasy option in this offense.\n",
    "timestamp": "2022-10-02 05:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.9,
    "week02": 3.5,
    "week03": 15.8,
    "week04": 1.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 3.5, 15.8, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 2.5, 9.7, 6.0, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 0.7, 0.0, 8.1, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.0, 6.4, 5.0, 16.9, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 8.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 20,
    "avg_fp2": 21.3,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.05,
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
    "headlineNews": "Cooper Kupp caught 14-of-19 targets for 122 yards in the Rams' Week 4 loss to the 49ers.\n",
    "report": "",
    "analysis": "Kupp's 14 catches marked a new career-high, and his 19 targets were one off his high-water mark of 20 in 2020. Literally the only means of offense for the Rams this season, Kupp has already seen 54 targets in four games and has three 100-yard outings. Fantasy's easy overall WR1, Kupp may just exceed 200 targets after seeing 191 last year. The Rams just don't have any other capable receivers that Matthew Stafford can connect with right now. Allen Robinson has been a bust through four weeks. Kupp gets the Cowboys in Week 5.\n",
    "timestamp": "2022-10-04 03:19 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.3,
    "week02": 26.3,
    "week03": 14.4,
    "week04": 19.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.3, 26.3, 14.4, 19.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 20.4, 4.1, 10.4, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 16.6, 20.3, 8.1, 14.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 21.6, 26.3, 16.2, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.2,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 11,
    "avg_fp2": 16.5,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.23,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans caught 8-of-10 targets for 103 yards and two touchdowns in Tampa Bay's Week 4 loss to Kansas City.\n",
    "report": "",
    "analysis": "One of the incompletions was essentially a Hail Mary. With two more end zone targets - one wiped out by an unnecessary roughness penalty - it could have been even better for Evans. As it is, Evans dunked on Jamel Dean on a fade and took a big hit over the middle in a zone post for his first score. Chris Godwin's target hogging clouds the picture as long as he is healthy, but Evans remains the easy layup for Tampa in the red zone and should easily remain on the WR1/WR2 borderline.\n",
    "timestamp": "2022-10-03 05:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.6,
    "week02": 7.6,
    "week03": "DNP",
    "week04": 26.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 7.6, 'DNP', 26.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 4.8, 'DNP', 7.0, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.7, 7.5, 'DNP', 14.7, 14.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.2, 'DNP', 21.6, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242433.png",
    "name": "Josh Palmer",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 8.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 1,
    "avg_fp2": 7.33,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 27.57,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Josh Palmer (ankle) is questionable for Week 5 against the Browns.\n",
    "report": "",
    "analysis": "Palmer was upgraded to a full practice to close the week, so he should have a good shot at playing. Coming off a season-low in snap share, it's possible Palmer is on a pitch-count because of the injury. If he plays, Palmer will be a risky WR4 option versus Cleveland.\n",
    "timestamp": "2022-10-07 08:32 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.4,
    "week02": 11.0,
    "week03": 12.9,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 11.0, 12.9, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 3.4, 5.6, 7.4, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.8, 0.7, 5.7, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 1.9, 6.8, 9.3, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932442.png",
    "name": "Equanimeous St. Brown",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 7.7,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 5.35,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 29.8,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Equanimeous St. Brown caught 1-of-2 targets for 20 yards in Chicago's Week 3 win over Houston, adding two carries for 43 yards.\n",
    "report": "",
    "analysis": "A St. Brown end around caught the Texans napping on backside contain in the first quarter, setting up the Bears' first touchdown of the game. This passing game currently can't support one option, let alone multiple fantasy receivers. If that were to change some day, St. Brown might be third-in-line after Darnell Mooney and Cole Kmet.\u00a0\n",
    "timestamp": "2022-09-25 08:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.3,
    "week02": 4.9,
    "week03": 6.8,
    "week04": 1.38,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.3, 4.9, 6.8, 1.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 1.4, 5.5, 2.4, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.5, 6.4, 5.6, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 2.1, 10.1, 7.0, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 7.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 11.1,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.85,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jakobi Meyers (knee) is questionable for Week 5 against Detroit.\n",
    "report": "",
    "analysis": "As he did last week, Meyers got in three limited practices and received a questionable tag. We'd lean towards the doubtful side of questionable given how the last couple of weeks have gone, but there's still a chance that Meyers will be able to go. With Bailey Zappe running the show instead of Mac Jones, Meyers profiles as a desperation PPR option in the event he's able to get cleared.\u00a0\u00a0\n",
    "timestamp": "2022-10-07 08:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.2,
    "week02": 14.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 14.0, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 6.0, 'DNP', 'DNP', 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 8.7, 'DNP', 'DNP', 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 13.0, 'DNP', 'DNP', 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4426502.png",
    "name": "Drake London",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 7.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 11.53,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.07,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Drake London caught 2-of-7 targets for 17 yards in the Falcons' Week 4 win over the Browns.\n",
    "report": "",
    "analysis": "London easily paced the Falcons with seven targets, seeing three more than Kyle Pitts, but none of the Atlanta pass-catchers made noise in the box score on a day Marcus Mariota completed just 7-of-19 passes. London has clearly emerged as the Falcons' top pass-catcher in the Mariota-led offense, but he's going to have his ups and downs. The first-round rookie will try to rebound next week in a tough road date with the Bucs.\n",
    "timestamp": "2022-10-02 09:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.9,
    "week02": 20.6,
    "week03": 12.9,
    "week04": 2.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.9, 20.6, 12.9, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 9.5, 8.9, 9.1, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 4.2, 5.2, 3.3, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 18.8, 16.7, 16.5, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991662.png",
    "name": "Mack Hollins",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 7.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 10.49,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 32.12,
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
    "headlineNews": "Mack Hollins caught 3-of-5 targets for 33 yards in the Raiders' Week 4 win over the Broncos.\n",
    "report": "",
    "analysis": "After flaming the Titans for 8/158/1 last week, Hollins came back to this planet and was tied for third on the team in targets on a day Davante Adams saw 13 and over 38% of the total share. Hollins' Week 5 fantasy outlook will depend on Hunter Renfrow's (concussion) availability for next Monday night.\n",
    "timestamp": "2022-10-03 12:06 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 2.1,
    "week02": 9.1,
    "week03": 25.96,
    "week04": 4.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 9.1, 25.96, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.0, 3.6, 6.7, 12.4, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 6.6, 4.8, 5.8, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 10.9, 9.4, 7.9, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243537.png",
    "name": "Gabriel Davis",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 2,
    "avg_fp2": 7.93,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.12,
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
    "headlineNews": "Gabe Davis (ankle) was a full participant in practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "It's an upgrade on last week, where Davis never got in a full session before catching just one ball for 13 yards against the Ravens. Perhaps Davis, who supposedly isn't dealing with a high-ankle sprain, is finally back on the runway to good health. With both his fitness and production legitimate question marks at the moment, Davis is shaping up as a low-end, boom-or-bust WR3 for Week 5 against the Steelers.\u00a0\n",
    "timestamp": "2022-10-05 10:24 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.8,
    "week02": "DNP",
    "week03": 5.2,
    "week04": 1.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.8, 'DNP', 5.2, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 'DNP', 11.8, 22.6, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 'DNP', 5.3, 7.8, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 'DNP', 7.8, 10.5, 6.7]
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
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 15,
    "avg_fp2": 2.47,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.77,
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
    "headlineNews": "A.J. Green (knee) was removed from the Week 5 injury report and will play against the Eagles.\n",
    "report": "",
    "analysis": "With Green out last week, Greg Dortch stayed in the slot and Rondale Moore was kicked outside. Neither player eclipsed 11 receiving yards. It's unclear how Kliff Kingsbury will deploy his receivers this week. Given Kingsbury's suboptimal usage of his receivers so far, it's safe to assume he will bungle the decision again this week. Everyone but Marquise Brown should be benched for fantasy purposes.\u00a0\n",
    "timestamp": "2022-10-07 08:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 5.1,
    "week03": 0.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.1, 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 3.4, 9.0, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.9, 7.3, 2.0, 'DNP', 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 14.3, 8.8, 'DNP', 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3871102.png",
    "name": "David Sills",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 6.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 31,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.02,
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
    "headlineNews": "David Sills caught 1-of-2 targets for five yards in the Giants\u2019 Week 4 win over the Bears.\u00a0\n",
    "report": "",
    "analysis": "Like all Giants\u2019 pass catchers, there was no chance (or need) for Sills in a game where Saquon Barkley dominated. Sills continues to have a rotational role, but a real passing game will keep him from ever being fantasy relevant.\u00a0\n",
    "timestamp": "2022-10-02 09:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115378.png",
    "name": "Russell Gage",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 11,
    "avg_fp2": 7.42,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.23,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Russell Gage (hamstring) was removed from the Week 5 injury report and will play against the Falcons.\n",
    "report": "",
    "analysis": "Gage has been dealing with a hamstring injury for a few weeks, but he played through the injury in Week 4 and didn't suffer any setbacks. However, he only saw four targets versus the Chiefs. With Chris Godwin and Mike Evans in the lineup, Gage is off the fantasy radar.\n",
    "timestamp": "2022-10-07 06:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 5.3,
    "week03": 18.7,
    "week04": 3.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.3, 18.7, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 4.5, 5.9, 3.7, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 1.1, 2.0, 13.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 7.3, 6.0, 18.7, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051738.png",
    "name": "Marquez Valdes-Scantling",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 5.75,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 28.73,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Marquez Valdes-Scantling caught 3-of-5 targets for 63 yards in Kansas City's Week 4 win over Tampa Bay.\n",
    "report": "",
    "analysis": "He dropped an end-zone target from Patrick Mahomes and could only pinch his fingers together as if to say it was\u00a0that\u00a0close. However, Valdes-Scantling did catch a 36-yarder, his longest of the season, so it wasn't a total lost cause of a night. Without touchdowns, a massive target share, or a lot of yardage to buoy him in the first four weeks, MVS looks more like a FLEX you're hoping gets hot as he heads into Week 5 against the Raiders.\n",
    "timestamp": "2022-10-03 04:52 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 6.1,
    "week02": 2.3,
    "week03": 6.8,
    "week04": 7.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 2.3, 6.8, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 5.2, 4.3, 10.1, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 1.6, 6.9, 2.1, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.9, 8.3, 14.2, 7.9, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4569618.png",
    "name": "Garrett Wilson",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 6.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 4,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 35.16,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Garrett Wilson caught 2-of-6 targets for 41 yards in the Jets' Week 4 win over the Steelers.\n",
    "report": "",
    "analysis": "Wilson was held to one catch for six yards for the bulk of this game. He got back on the board with an impressive, 35-yard catch-and-run in the fourth quarter. The long reception would ultimately set up Corey Davis for a short touchdown. Wilson didn't get much going in Zach Wilson's 2022 debut, but he was dominating the team's targets through three weeks. Better days should be ahead for the rookie, though Zach's presence under center may cap Garrett Wilson's ceiling at WR3 numbers for the foreseeable future.\n",
    "timestamp": "2022-10-02 09:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.2,
    "week02": 26.0,
    "week03": 9.0,
    "week04": 5.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 26.0, 9.0, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 3.1, 12.2, 10.3, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 1.6, 2.7, 3.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.3, 10.5, 14.1, 14.3, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361432.png",
    "name": "Romeo Doubs",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 6.3,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 9.75,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 19.02,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Romeo Doubs caught 5-of-8 targets for 47 yards and a touchdown in the Packers' Week 4 win against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Doubs tied Allen Lazard with eight targets and caught one of the Packers' two passing scores. His final stat line would have been much prettier had he held on to what would have been a 41-yard touchdown in the fourth quarter. Doubs caught the ball in the end zone on a rainbow throw from Aaron Rodgers but couldn't maintain control when he crashed to the turf with a New England defender draped all over him. On the bright side: Doubs was again an every-down player in the Green Bay offense and the team drew up several plays to get him the ball in the first half. Though Rodgers continues to look Lazard's way on third downs, Doubs' role has grown to the point where he's an every-week WR3 with upside. He gets the Giants burnable defense in Week 5.\u00a0\n",
    "timestamp": "2022-10-03 01:22 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.8,
    "week02": 3.7,
    "week03": 17.3,
    "week04": 11.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.8, 3.7, 17.3, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.6, 3.2, 6.2, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.1, 0.0, 2.9, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 6.7, 4.9, 14.2, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 6.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 8,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.2,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tyler Boyd caught 2-of-5 targets for 47 yards in the Bengals' Week 4 win over the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "The veteran slot man also added a 23-yard completion on a trick play to Ja'Marr Chase. It was Chase whom Boyd was out-producing until the final minutes of the fourth quarter, but Chase eventually surpassed him with a 36-yard grab late. 43 of Boyd's yards came on a fourth quarter reception where he scorched the corner on a cross-field route. Nice, though it is obviously not a great sign for Boyd's WR4 value that this evening's 47 yards were his second most of the season. The Ravens do represent an A+ Week 5 matchup.\u00a0\n",
    "timestamp": "2022-09-30 04:31 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 11.3,
    "week02": 4.7,
    "week03": 18.5,
    "week04": 6.62,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 4.7, 18.5, 6.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 1.9, 5.9, 10.0, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.9, 1.4, 3.1, 13.0, 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 6.8, 8.7, 16.0, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Washington Commanders",
    "projected": 6.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 17,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.97,
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
    "headlineNews": "Curtis Samuel (illness) returned to practice Friday.\n",
    "report": "",
    "analysis": "Fox Sports' Ralph Vacchiano reports that Samuel will play on Sunday. Ron Rivera said that the wideout was \"achy\" today. With Jahan Dotson out and Logan Thomas questionable, Samuel and Terry McLaurin will have target volume on their side in Week 5's matchup against the Titans.\u00a0\n",
    "timestamp": "2022-10-07 05:04 PM",
    "source": "Ralph Vacchiano on Twitter",
    "game_day_logo": "",
    "week01": 15.2,
    "week02": 19.4,
    "week03": 9.6,
    "week04": 5.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.2, 19.4, 9.6, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.2, 1.9, 9.3, 6.9, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 6.5, 5.1, 6.5, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.4, 9.4, 9.5, 10.5, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 5.9,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 1,
    "avg_fp2": 11.7,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 27.57,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Mike Williams caught 7-of-11 targets for 120 yards in Los Angeles' Week 4 win over the Texans.\n",
    "report": "",
    "analysis": "The Texans blew a coverage on play-action and let Williams roam entirely free on a 50-yard catch-and-run in the second quarter. Williams had a pair of red zone targets into the end zone but neither of them were all that close to converting as the Chargers mostly relied on lateral passing to get past Lovie Smith's defense. Williams will remain a boom-bust WR2 in Week 5 against the Browns.\u00a0\n",
    "timestamp": "2022-10-02 08:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.0,
    "week02": 21.3,
    "week03": 8.0,
    "week04": 15.5,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 21.3, 8.0, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 2.9, 12.5, 11.9, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 14.9, 11.5, 5.4, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 21.8, 18.9, 8.8, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png",
    "name": "Jerry Jeudy",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 5.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 18,
    "avg_fp2": 8.97,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 20.52,
    "fanduelSalary": "$12000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Jerry Jeudy caught 3-of-8 targets for 53 yards in the Broncos' Week 5 loss to the Colts.\n",
    "report": "",
    "analysis": "Jeudy saw good target volume in this one, as his eight targets on the evening set a new season high for him. Unfortunately, those targets only carry value if they turn into completions, which most did not on Thursday. Whether it was a deep play down the sideline or an overthrown while Jeudy was in a near standstill, Russell Wilson found ways to miss Jeudy and his fellow receivers all evening. Jeudy's longest play on the evening came in overtime when he broke free for a 37-yard reception down the right sideline, nearly ending the game for the Broncos. Through five games, Jeudy is averaging 5.8 targets per game and is the clear No. 2 option in the passing game. Offensive struggles will limit Jeudy in Week 6 against the Chargers. He should be viewed as more of a high-end WR3.\n",
    "timestamp": "2022-10-07 05:29 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 18.2,
    "week02": 1.7,
    "week03": 2.7,
    "week04": 13.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.2, 1.7, 2.7, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 5.3, 3.0, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 10.7, 3.9, 7.4, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 16.5, 7.3, 11.6, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png",
    "name": "Darnell Mooney",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 5.4,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 4.03,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 29.8,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Darnell Mooney caught 4-of-5 targets for 94 yards in the Bears\u2019 Week 4 loss against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Outside of a 56-yard reception early in the game, there wasn\u2019t much opportunity for Mooney. While Justin Fields did throw a season-high 22 passes, it\u2019s not enough to feel confident about the Bears\u2019 passing game. It was by far his best game of the young season, but you can\u2019t feel good throwing Mooney in your lineups.\u00a0\n",
    "timestamp": "2022-10-02 08:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.3,
    "week02": 0.1,
    "week03": 3.3,
    "week04": 11.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 0.1, 3.3, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.8, 6.8, 10.9, 3.6, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 4.4, 3.0, 2.9, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 8.5, 9.8, 5.8, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 5.3,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 23,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.35,
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
    "headlineNews": "Michael Gallup caught 2-of-3 targets for 24 yards and one touchdown in the Cowboys' Week 4 win over the Commanders.\n",
    "report": "",
    "analysis": "Gallup's first reception on the day came on a 15-yard pass, while his second, a touchdown came just moments later. He made additional contributions throughout the day, drawing 65-yards worth of penalties against a Commanders defense that spent most of the afternoon getting flagged. Gallup remains a low-end FLEX play in Week 5 against the Rams, especially with Cooper Rush under center.\n",
    "timestamp": "2022-10-02 09:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 9.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 9.0, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 6.7, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 8.1, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 5.3,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 40.2,
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
    "headlineNews": "Robert Woods caught 4-of-4 targets for 30 yards and a touchdown in the Titans' Week 4 victory over the Colts.\n",
    "report": "",
    "analysis": "The Titans capitalized on a first-possession fumble by the Colts to take an early 7-0 lead through a seven-yard touchdown catch by Woods in the first quarter. His four targets on the day led all wide receivers but fell one short of Derrick Henry for the team lead on a day that saw Tannehill throw the ball only 21 times. The low weekly volume of Tennessee's pass offense does not leave a lot of room for error for Woods, keeping him in the WR5-6 discussion as the team prepares to face the Commanders in Week 5.\n",
    "timestamp": "2022-10-02 08:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.8,
    "week02": 5.9,
    "week03": 10.5,
    "week04": 11.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 5.9, 10.5, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 7.8, 3.9, 9.4, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 10.5, 9.3, 2.8, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 16.9, 15.9, 10.1, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 5.2,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 5.47,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 26.82,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Marvin Jones was held without a catch on one target in the Jaguars' Week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "What should have been a more productive day than usual with Zay Jones sidelined with an ankle injury instead turned into Jones' worst effort of the year. The primary culprits were the weather and Trevor Lawrence, with the former affecting the latter in the form of five turnovers. Lawrence's giveaways short circuited too many drives and Jones' volume opportunities. Yet to clear 40 yards this season, Jones will not be a recommended WR5 for Week 5 vs. Houston.\u00a0\u00a0\n",
    "timestamp": "2022-10-02 09:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.8,
    "week02": 4.8,
    "week03": 11.3,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.8, 4.8, 11.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.4, 3.1, 6.4, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.2, 4.5, 4.8, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 22.6, 11.5, 10.5, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 5.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 10.43,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.45,
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
    "headlineNews": "Tyler Lockett caught 6-of-8 targets for 91 yards in the Seahawks' Week 4 win over the Lions.\n",
    "report": "",
    "analysis": "Lockett \"added\" a punt return fumble, but it was an overall productive game that included a 34-yard reception. Given the matchup, it was a little disappointing to see Lockett fail to score a TD or go over 100 yards. However, Lockett's eight targets were good for a 27% target share, which is a good sign for his overall standing in the offense. Even assuming he sees a big share of target opportunity in Week 5, he'll be a risky play against a strong Saints defense.\u00a0\n",
    "timestamp": "2022-10-02 09:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.3,
    "week02": 15.2,
    "week03": 12.1,
    "week04": 10.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.3, 15.2, 12.1, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 3.6, 12.2, 14.3, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 4.2, 4.9, 6.5, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 11.5, 11.9, 16.6, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917914.png",
    "name": "Olamide Zaccheaus",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 5.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 6.6,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.07,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons signed\u00a0Olamide Zaccheaus\u00a0to a one-year, $2.4 million contract.\u00a0\n",
    "report": "",
    "analysis": "In 2021, Zaccheaus\u00a0recorded 31 receptions for 406 yards and three scores for an Atlanta offense that continually struggled to move the ball. On a Falcons roster with little pass-catching talent, Zaccheaus could fall into considerable volume in 2022. The Falcons spending an early-round pick on a wideout in the NFL Draft could change that calculus.\u00a0\n",
    "timestamp": "2022-04-19 07:47 PM",
    "source": "Orlando Ledbetter on Twitter ",
    "game_day_logo": "",
    "week01": 4.9,
    "week02": 9.1,
    "week03": 5.9,
    "week04": 6.5,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 9.1, 5.9, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 8.6, 11.7, 5.7, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 4.1, 11.3, 4.4, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 6.0, 17.0, 6.5, 7.9]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 22.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 14.07,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 8.12,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Andrews caught 2-of-5 targets for 15 yards in the Ravens' Week 4 loss to the Bills.\u00a0\n",
    "report": "",
    "analysis": "Andrews, as per usual, ran a route on every Lamar Jackson drop back, but was bottled up by a Bills defense seemingly determined to take away Jackson's main passing game weapon. His slow Week 4 outing comes after a scorching hot start to the season in which he totaled 22 catches and three touchdowns in three games. There's nothing to see here. Andrews will continue as the top fantasy tight end in Week 5 against the Bengals.\u00a0\n",
    "timestamp": "2022-10-02 09:03 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 7.7,
    "week02": 21.2,
    "week03": 24.9,
    "week04": 2.5,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.7, 21.2, 24.9, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 10.0, 12.7, 22.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.3, 0.1, 14.7, 8.5, 12.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.4, 15.8, 20.7, 12.8, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915486.png",
    "name": "Tyler Conklin",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 18.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 4,
    "avg_fp2": 8.88,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 13.88,
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
    "headlineNews": "Tyler Conklin caught 3-of-5 targets for 52 yards in the Jets' Week 4 win over the Steelers.\n",
    "report": "",
    "analysis": "Conklin finished fourth on the team in targets, but a 26-yard reception early in the game boosted him to third on the team in receiving yards. Conklin earned a 14 percent target share versus the Steelers. With plenty of mouths to feed and Zach Wilson struggling for most of his debut, Conklin can only be trusted as a TE2 for his Week 5 matchup with the Dolphins.\u00a0\n",
    "timestamp": "2022-10-02 09:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.4,
    "week02": 7.0,
    "week03": 12.4,
    "week04": 6.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 7.0, 12.4, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 3.9, 12.0, 4.1, 18.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 2.0, 1.9, 4.3, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 5.4, 5.4, 10.5, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 15.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 5,
    "avg_fp2": 13.78,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 13.97,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson (hip) is off Detroit's final injury report for Week 5.\n",
    "report": "",
    "analysis": "He got in a full practice on Friday, ramping up from DNP on Wednesday and limited on Thursday. Hockenson will be a TE1 in season-long leagues against the Patriots, and if Amon-Ra St. Brown doesn't play again, figures to be Detroit's No. 1 target again. Albeit in a much more difficult matchup than he had against the Seahawks in Week 4.\n",
    "timestamp": "2022-10-07 08:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.8,
    "week02": 4.1,
    "week03": 9.3,
    "week04": 35.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.8, 4.1, 9.3, 35.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.8, 5.3, 7.4, 9.1, 15.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 6.7, 10.2, 4.0, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.4, 10.1, 12.7, 6.4, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040980.png",
    "name": "Irv Smith",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 11.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 5.03,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 6.6,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Irv Smith caught 3-of-4 targets for 23 yards in the Vikings' Week 4 win over the Saints.\n",
    "report": "",
    "analysis": "Smith continued to split reps with Johnny Mundt in this game. Mundt only saw one target, so Smith's role is at least trending in the right direction. Still, with one game over three catches this year, Smith is nothing more than a touchdown-dependant TE2.\n",
    "timestamp": "2022-10-02 05:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 12.1,
    "week03": 4.2,
    "week04": 3.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 12.1, 4.2, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 2.9, 9.6, 3.5, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.4, 1.2, 0.3, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 5.0, 5.0, 3.6, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 8.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.47,
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
    "headlineNews": "Darren Waller (shoulder) was a full participant in Friday's practice.\n",
    "report": "",
    "analysis": "Waller was a limited participant in practice on Thursday. He should be a full-go for the Raiders' Week 5 matchup with the Chiefs. Waller has been underwhelming so far, but a high-scoring affair with Kansas City should jump-start his fantasy production. He remains a top-five fantasy tight end.\n",
    "timestamp": "2022-10-07 09:51 PM",
    "source": "Tashan Reed on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 9.9,
    "week02": 14.0,
    "week03": 3.7,
    "week04": 3.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.9, 14.0, 3.7, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 20.6, 11.8, 9.4, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 15.5, 6.9, 9.2, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 20.0, 12.5, 14.5, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 8.7,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 6,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 15.7,
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
    "headlineNews": "Dallas Goedert caught 5-of-6 targets for 72 yards in the Eagles' Week 4 win over the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Goedert was also tagged with an OPI call that wiped out an A.J. Brown touchdown, and dropped a potential score of his own on a poorly-thrown ball in the fourth quarter. Unideal, but the 5/70 effort was Goedert's second in three weeks. Goedert has yet to have a true spiked week, but it should be coming in this more aggressive, pass-happy offense. The Cardinals are a plus Week 5 matchup.\u00a0\n",
    "timestamp": "2022-10-02 10:44 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 10.7,
    "week03": 10.1,
    "week04": 9.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 10.7, 10.1, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 5.8, 2.5, 5.9, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 6.1, 3.0, 3.7, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 9.0, 10.2, 9.7, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 8.5,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 4.6,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.1,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Evan Engram caught a 16-yard pass in the Jaguars' Week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Engram's third quarter reception was his lone official target, though he had a second look wiped out by defensive holding. Volume opportunities were not there with poor weather conditions helping to contribute to five Trevor Lawrence turnovers. Those giveaways limited Lawrence to 11 completions. The Jags have to put this game film in the trash and move on. Engram will remain a middle-of-the-road TE2 for Week 5 against the Texans.\u00a0\n",
    "timestamp": "2022-10-02 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 8.1,
    "week03": 3.4,
    "week04": 2.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 8.1, 3.4, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 8.5, 7.1, 4.9, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 6.0, 7.9, 6.1, 9.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 9.0, 12.4, 9.0, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3911853.png",
    "name": "Adam Trautman",
    "depthchart": "Backup: TE-2",
    "team": "New Orleans Saints",
    "projected": 8.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 1.65,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 18.02,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Adam Trautman was not targeted in the Saints' Week 1 win over the Falcons.\u00a0\n",
    "report": "",
    "analysis": "Soundly out-snapped by Juwan Johnson, Trautman was primarily blocking in the Saints' comeback win. There is no 12-team league intrigue here.\u00a0\n",
    "timestamp": "2022-09-11 11:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 1.4,
    "week04": 5.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 1.4, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, -0.2, 1.8, 0.9, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 1.0, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 4.2, 5.4, 5.1, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 7.9,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 16.32,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.07,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Travis Kelce caught 9-of-10 targets for 92 yards and a touchdown in Kansas City's Week 4 win over Tampa Bay.\n",
    "report": "",
    "analysis": "Falling to the ground on his biggest catch of the night, Kelce reached behind him on a ball placed almost at his feet and reached around and plucked it off the ground. Also he ran for a lot of yards after the catch. On a night when he passed Rob Gronkowski for fifth-place on the all-time tight end receiving yards list, it was vintage Kelce. He'll remain one of the two TEs who can credibly be called No. 1 overall in Week 5 against the Raiders.\n",
    "timestamp": "2022-10-03 04:20 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 22.1,
    "week02": 7.6,
    "week03": 15.9,
    "week04": 19.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 7.6, 15.9, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 13.1, 21.7, 7.4, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 12.8, 16.8, 9.8, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 18.7, 20.4, 14.4, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 7.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 25,
    "avg_fp2": 8.12,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 7.9,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "David Njoku (knee) was removed from the Week 5 injury report and will play against the Chargers.\n",
    "report": "",
    "analysis": "Njoku sat out of practice Wednesday and was listed as having a knee injury and getting a rest day. The split injury report likely means he was getting a routine maintenance day. Njoku was up to a full practice by the end of the week. He has 162 yards on 14 catches over the past two weeks. Given the abomination that is the TE1 ranks, Njoku is a clear start in fantasy leagues.\n",
    "timestamp": "2022-10-07 08:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 4.7,
    "week03": 19.4,
    "week04": 7.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 4.7, 19.4, 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 3.7, 2.1, 6.1, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 5.3, 3.0, 3.1, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.3, 10.2, 7.6, 7.2, 4.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361411.png",
    "name": "Pat Freiermuth",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 7.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 28,
    "avg_fp2": 9.32,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 4.05,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 10.2,
    "week03": 5.1,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 10.2, 5.1, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 3.5, 6.4, 5.4, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 2.6, 8.0, 4.2, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.3, 9.8, 16.5, 10.0, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 6.4,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 23,
    "avg_fp2": 3.5,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 3.95,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dalton Schultz (knee) is not listed on Dallas' final injury report for Week 5 against the Rams.\n",
    "report": "",
    "analysis": "He got in full sessions in each of Dallas' three practices this week and should be a low-end TE1 against the Rams with Cooper Rush under center. Schultz didn't catch any of his three targets against the Commanders in Week 4 in his return and had just 11 yards with Rush under center in Week 8 of last season. You can build a case to fade him.\u00a0\n",
    "timestamp": "2022-10-07 07:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.7,
    "week02": 0.8,
    "week03": "DNP",
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 0.8, 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 10.0, 'DNP', 8.3, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 12.4, 'DNP', 7.6, 12.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 18.1, 'DNP', 13.8, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 6.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 8,
    "avg_fp2": 5.85,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 8.45,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Hayden Hurst (groin) is questionable for Week 5 against the Ravens.\n",
    "report": "",
    "analysis": "Hurst was a surprise DNP on Friday, putting him likely more on the true questionable line, but Bengals coach Zac Taylor said earlier today that he limited both Hurst and Tee Higgins in the hopes of them playing on Sunday. Taking all that into account, it sure sounds like Hurst isn't worth the risk of a zero in Week 5 against the Ravens on Sunday Night Football if you have other options. He's played just 38% and 56% of the snaps in the last two weeks.\u00a0\n",
    "timestamp": "2022-10-07 06:36 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 7.1,
    "week02": 4.9,
    "week03": 1.2,
    "week04": 10.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.1, 4.9, 1.2, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 0.7, 10.0, 13.0, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 5.1, 2.1, 5.2, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 7.9, 4.3, 7.2, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Las Vegas Raiders",
    "projected": 5.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 3.47,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.47,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Foster Moreau (knee) won't play in Week 4 against the Broncos.\n",
    "report": "",
    "analysis": "Moreau has not practiced this week. Though strictly a backup, Moreau has had a noticeable role in the past two weeks. He has played on at least half of the team's snaps in consecutive games and has at least four targets in both contests. His inevitable absence will keep Darren Waller on the field for nearly every snap.\n",
    "timestamp": "2022-09-30 09:03 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.0,
    "week02": 4.5,
    "week03": 5.9,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 4.5, 5.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 2.0, 2.6, 'DNP', 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 8.4, 6.7, 'DNP', 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.8, 11.7, 10.5, 'DNP', 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 5.9,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 1,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.17,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Gerald Everett (hamstring) was removed from the Week 5 injury report and will play against the Browns.\n",
    "report": "",
    "analysis": "Everett didn't show up on the injury report until Thursday, causing some concern that he suffered an injury during practice. However, he was a full participant in practice today, nixing any injury fears. With Keenan Allen out again, Everett enters Week 5 as a lown-end TE1.\n",
    "timestamp": "2022-10-07 08:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.9,
    "week02": 10.1,
    "week03": 3.5,
    "week04": 14.6,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 10.1, 3.5, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 8.2, 9.9, 5.1, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 1.8, 5.2, 2.9, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 8.5, 9.4, 5.2, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 5.7,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 20,
    "avg_fp2": 9.35,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 5.6,
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
    "headlineNews": "Tyler Higbee caught 10-of-14 targets for 73 yards in the Rams' Week 4 loss to the 49ers Monday night.\n",
    "report": "",
    "analysis": "Higbee's 14 targets marked a new career-high while his 10 catches were two off his career-best, both from Week 15 of the 2019 season. Playing virtually every snap for the Rams, Higbee is currently Matthew Stafford's second-favorite target behind Cooper Kupp with Allen Robinson still adjusting to his new quarterback. Higbee has seen at least nine targets in 3-of-4 games through four weeks and is an easy every-week TE1 based on playing time and volume alone. He gets a Week 5 date with the Cowboys.\n",
    "timestamp": "2022-10-04 03:54 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.4,
    "week02": 10.6,
    "week03": 8.1,
    "week04": 12.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 10.6, 8.1, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 7.0, 12.2, 3.4, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.5, 1.6, 13.3, 2.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.2, 5.3, 17.6, 8.5, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046704.png",
    "name": "Geoff Swaim",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 5.6,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 3.2,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.15,
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
    "headlineNews": "Titans re-signed TE\u00a0Geoff Swaim to a one-year contract.\u00a0\n",
    "report": "",
    "analysis": "Swaim caught 31 of his 40 targets for 210 yards and three touchdowns in limited pass-catching usage in 2021. He has occasional streaming appeal in deeper formats when the Titans struggle with tight end injuries.\u00a0\n",
    "timestamp": "2022-03-14 04:14 PM",
    "source": "Jeremy Fowler on Twitter ",
    "game_day_logo": "",
    "week01": 3.4,
    "week02": 0.0,
    "week03": 9.4,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 0.0, 9.4, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 3.9, 1.4, 6.1, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.9, 4.7, 4.5, 5.9, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929645.png",
    "name": "Juwan Johnson",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 5.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 18.02,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Juwan Johnson did not catch his only target in the Saints' Week 3 loss to the Panthers.\n",
    "report": "",
    "analysis": "Johnson's life as a streaming option at tight end was shortlived. He was platooned with Adam Trautman and Nick Vannett. All three tight ends saw one target. Johnson can be sent back to the waiver wire this week.\n",
    "timestamp": "2022-09-25 09:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.3, 5.4, 3.7, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 1.6, 0.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 3.0, 4.4, 2.8, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 5.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 3,
    "avg_fp2": 4.28,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 8.42,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Mike Gesicki caught 2-of-4 targets for 23 yards in the Dolphins' Week 4 loss to the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Ominously, the catches and grabs were Gesicki's second most of 2022. Worse, he was the intended target on backup QB Teddy Bridgewater's interception, appearing to run the wrong route on a critical fourth quarter play.\u00a0Gesicki is struggling to even push for top-24 value, let alone top 12.\u00a0\n",
    "timestamp": "2022-09-30 04:26 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.6,
    "week02": 12.1,
    "week03": 1.1,
    "week04": 3.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 12.1, 1.1, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.8, 2.7, 4.5, 1.8, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 2.7, 6.7, 5.6, 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.5, 4.5, 9.6, 12.7, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png",
    "name": "Cole Kmet",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 4.3,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 2.02,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 9.93,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Cole Kmet caught 3-of-3 targets for 16 yards in the Bears\u2019 Week 4 loss against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Kmet was almost a non-factor in the Bears\u2019 offensive attack (if you could call it that). As long as the Bears\u2019 passing offense continues to suffer, so will Kmet\u2019s chances of producing. He should remain on your bench, if not waivers.\u00a0\n",
    "timestamp": "2022-10-02 09:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 5.0,
    "week04": 3.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 5.0, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 1.0, 1.4, 2.2, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.6, 1.4, 3.0, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 8.1, 8.9, 6.6, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052897.png",
    "name": "Durham Smythe",
    "depthchart": "Backup: TE-2",
    "team": "Miami Dolphins",
    "projected": 4.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 3,
    "avg_fp2": 1.67,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 8.42,
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
    "headlineNews": "Dolphins re-signed TE Durham Smythe to a two-year, $8 million contract.\n",
    "report": "",
    "analysis": "Mike Gesicki took to Twitter, actually breaking the news by saying, \"The Miami Dolphins have re-signed and made the best signing of anyone across the league.\" He would go on to note that Smythe is coming back on a two-year deal. Smythe caught 34 balls for 357 yards last year. The veteran tight end is also a QB sneak aficionado somehow. He converted both of his attempts for first downs in 2021. Gesicki remains the team's TE1 but Smythe is a solid backup and role player for Miami.\n",
    "timestamp": "2022-03-18 06:22 PM",
    "source": "Mike Gesicki on Twitter",
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 1.0,
    "week03": 3.8,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 1.0, 3.8, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 2.6, 0.1, 5.9, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 0.7, 3.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.5, 3.4, 2.7, 4.5, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121378.png",
    "name": "Matt Sokol",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 4.2,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.62,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
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
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 4.1,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 1.65,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.62,
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
    "headlineNews": "Hunter Henry caught 2-of-4 targets for 13 yards in the Patriots' Week 4 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Henry ran a route on 48 percent of the Patriots' drop backs on a typically low-volume day for New England's passing attack. Jonnu Smith left with an injury in the first half. Henry could see a slight bump in snaps and routes if Smith is sidelined next week against Detroit. He's still not fantasy viable.\u00a0\n",
    "timestamp": "2022-10-03 01:54 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.0,
    "week02": 0.0,
    "week03": 1.3,
    "week04": 2.3,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 0.0, 1.3, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 3.8, 2.5, 2.7, 4.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.3, 17.2, 7.3, 1.1, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 20.7, 13.5, 6.1, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Washington Commanders",
    "projected": 4.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 17,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 14.72,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Logan Thomas (calf) is questionable for Week 5 against the Titans.\u00a0\n",
    "report": "",
    "analysis": "Thomas first appeared on Washington's injury report on Thursday -- never a good sign for a player's Sunday availability. Thomas had seen an increase in snaps and routes over the past two weeks; in Week 4, he caught five passes for 19 yards against the Cowboys. John Bates would start at tight end if Thomas sits this week against the Titans.\u00a0\n",
    "timestamp": "2022-10-07 04:45 PM",
    "source": "John Keim on Twitter ",
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 11.2,
    "week03": 1.5,
    "week04": 4.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 11.2, 1.5, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 5.8, 7.3, 5.2, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.2, 7.3, 8.6, 10.4, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 8.5, 11.3, 12.5, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975863.png",
    "name": "Eric Saubert",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 4.0,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 18,
    "avg_fp2": 2.92,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 16.9,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Eric Saubert caught 1-of-2 targets for 22 yards and a touchdown in Denver's Week 2 win over Houston.\n",
    "report": "",
    "analysis": "It was a beautiful catch, to be fair, as he grabbed it over underneath linebacker Christian Kirksey in pretty good coverage. The blocking tight end will probably not be involved in Denver's passing offense more than this next week, but we guess we can't rule anything out right now with Nathaniel \"third-down Andrew Beck sweep\" Hackett at the helm. The Broncos will take on the 49ers on Sunday Night Football.\u00a0\n",
    "timestamp": "2022-09-19 12:33 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.0,
    "week02": 8.7,
    "week03": 0.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.7, 0.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.1, 1.2, 0.7, 0.7, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.6, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [0.7, 1.3, 0.7, 1.4, 2.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Backup: TE-2",
    "team": "Jacksonville Jaguars",
    "projected": 4.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 1.1,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.1,
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
    "headlineNews": "Evan Engram said he had \"an immediate interest\" in signing with the Jaguars because of head coach Doug Pederson's history with tight ends.\u00a0\n",
    "report": "",
    "analysis": "Engram's usage in the Giants offense was laughable for years. The uber-athletic pass catcher was relegated to short targets in New York's lifeless passing offense, destroying his fantasy appeal. Engram may have grinded Eagles box scores from Pederson's time as Philadelphia's head coach, when Zach Ertz recorded 357 receptions in his first four seasons under Pederson. Dallas Goedert also had success as the Eagles' TE2 during Pederson's tenure in Philly. Engram, entering his age-28 season, has shown flashes of play-making potential. As a rookie in 2017, he had 64 receptions for 722 yards and six touchdowns, finishing as fantasy's fifth highest scoring tight end. Engram's issues with drops, meanwhile, has been overblown in recent years. Last season, Engram dropped 8 percent of his targets, 13th highest among tight ends and lower than Goedert.\u00a0\n",
    "timestamp": "2022-03-17 06:15 PM",
    "source": "John Reid on Twitter ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.3,
    "week03": 0.0,
    "week04": 3.1,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.3, 0.0, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 6.4, 2.7, 0.7, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.3, 2.8, 4.9, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 6.8, 6.2, 8.3, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361516.png",
    "name": "Daniel Bellinger",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 4.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 31,
    "avg_fp2": 4.47,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 4.47,
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
    "headlineNews": "Daniel Bellinger caught 3-of-3 targets for 23 yards in the Giants\u2019 Week 4 win over the Bears.\u00a0\n",
    "report": "",
    "analysis": "It\u2019s quite bizarre that the rookie led the team in targets. It was a low-volume passing type of day on both offenses. Despite leading the team in receiving, there are no Giants\u2019 pass catchers you should trust in fantasy.\u00a0\n",
    "timestamp": "2022-10-02 09:10 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 8.1,
    "week03": 6.0,
    "week04": 3.8,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.1, 6.0, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 1.8, 3.0, 2.9, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.0, 0.0, 0.2, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 5.0, 5.9, 7.3, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127292.png",
    "name": "Will Dissly",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 3.9,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 8.9,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 3.65,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Will Dissly caught 4-of-4 targets for 39 yards and a touchdown in the Seahawks' Week 4 win over the Lions.\n",
    "report": "",
    "analysis": "Dissly caught his TD on a nice throw from Geno Smith. The ball was just above Dissly's head and timed just as the tight end turned around. Dissly now has three TDs in four games this season, but he will be a very weak dart throw option against the Saints in Week 5.\n",
    "timestamp": "2022-10-02 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.8,
    "week02": 1.0,
    "week03": 10.9,
    "week04": 11.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 1.0, 10.9, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.9, 1.6, 2.8, 5.8, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.3, 2.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 5.0, 4.7, 8.2, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 3.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 26,
    "avg_fp2": 4.1,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 8.82,
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
    "headlineNews": "George Kittle caught 2-of-4 targets for 24 yards in the 49ers' Week 4 win over the Rams.\n",
    "report": "",
    "analysis": "Kittle wasn't targeted in the first half but started the third quarter with a 20-yard grab down the seam. That was his highlight of the night. Kittle has gone 4/28 and 2/24 in back-to-back games after missing Weeks 1-2 with a groin injury. He's a boom-or-bust TE1 headed into Week 5 against the Panthers. Kittle is still running a route on virtually every drop-back.\n",
    "timestamp": "2022-10-04 03:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 4.8,
    "week04": 3.4,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 4.8, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 7.2, 4.1, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 8.2, 6.7, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 21.4, 11.7, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 3.5,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 5.83,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Robert Tonyan caught both of his targets for 22 yards and a touchdown in the Packers' Week 4 win against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Tonyan's route share continued to ramp up against New England. The big tight end ran a route on nearly 60 percent of Aaron Rodgers' drop backs and held on to a 20-yard touchdown grab between two Patriots defenders in the first half. Still, Tyler Davis and Marcedes Lewis ate into Tonyan's route participation enough to make him a shaky fantasy option in a balanced Green Bay offense. He gets the Giants in Week 5.\u00a0\n",
    "timestamp": "2022-10-03 01:59 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 2.1,
    "week03": 6.7,
    "week04": 9.2,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 2.1, 6.7, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 3.3, 4.0, 11.5, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.8, 1.3, 3.1, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.5, 2.7, 2.3, 3.4, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2511973.png",
    "name": "Eric Tomlinson",
    "depthchart": "Backup: TE-2",
    "team": "Denver Broncos",
    "projected": 3.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 18,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 16.9,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos released TE Eric Tomlinson.\n",
    "report": "",
    "analysis": "Tomlinson was competing with\u00a0Eric Saubert for backup duties in Denver. Both players are strong blockers, putting the two in direct competition for the team's final roster spot at tight end. Saubert, who showed well in training camp, made the roster alongside Albert Okwuegbunam and Greg Dulcich. If Dulcich's hamstring injury lingers into the regular season,\u00a0Tomlinson could be brought back as a depth option.\u00a0\n",
    "timestamp": "2022-08-30 07:41 PM",
    "source": "Brandon Krisztal on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.1, 2.2, 0.6, 0.9, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.6, 0.7, 0.1, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.4, 1.0, 1.1, 0.8, 1.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048228.png",
    "name": "John Bates",
    "depthchart": "Backup: TE-2",
    "team": "Washington Commanders",
    "projected": 3.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 17,
    "avg_fp2": 1.6,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 14.72,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Logan Thomas (calf) is questionable for Week 5 against the Titans.\u00a0\n",
    "report": "",
    "analysis": "Thomas first appeared on Washington's injury report on Thursday -- never a good sign for a player's Sunday availability. Thomas had seen an increase in snaps and routes over the past two weeks; in Week 4, he caught five passes for 19 yards against the Cowboys. John Bates would start at tight end if Thomas sits this week against the Titans.\u00a0\n",
    "timestamp": "2022-10-07 04:45 PM",
    "source": "John Keim on Twitter ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.5,
    "week03": 0.0,
    "week04": 3.9,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.5, 0.0, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 0.3, 5.1, 0.5, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.1, 2.0, 1.2, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 1.2, 4.1, 2.8, 2.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120303.png",
    "name": "Ross Dwelley",
    "depthchart": "Backup: TE-2",
    "team": "San Francisco 49ers",
    "projected": 3.2,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 26,
    "avg_fp2": 2.98,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 8.82,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Ross Dwelley (rib) is active for Week 4 against the Rams Monday night.\n",
    "report": "",
    "analysis": "This only matters for one-game DFS purposes after Dwelley played 28% and 37% of the snaps Weeks 1-2 when George Kittle was sidelined. Dwelley played 7% of the snaps Week 3. Inactive for the 49ers are\u00a0WR Danny Gray (hip), RB Tyrion Davis-Price (ankle), S Tarvarius Moore, OL Nick Zakelj, LT Trent Williams (ankle), TE Tyler Kroft (knee), and DT Javon Kinlaw (knee).\n",
    "timestamp": "2022-10-03 10:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.6,
    "week02": 10.3,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.6, 10.3, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, 1.0, 7.4, 1.2, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.3, 2.8, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.0, 7.8, 3.0, 2.2, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052096.png",
    "name": "Johnny Mundt",
    "depthchart": "Backup: TE-2",
    "team": "Minnesota Vikings",
    "projected": 3.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 2.58,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 6.6,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings head coach Kevin O'Connell said Irv Smith wasn't involved in the team's offense in Week 1 by design.\u00a0\n",
    "report": "",
    "analysis": "Smith split snaps and pass routes with Johnny Mundt against the Packers. He caught neither of his two targets from Kirk Cousins. O'Connell said Smith will have big outings in 2022, if and when the game plan includes the tight end running more routes. This makes it nearly impossible to predict Smith's usage, making him a streaming option in 12-team leagues. Managers should feel free to cut Smith headed into Week 2.\u00a0\n",
    "timestamp": "2022-09-13 04:03 PM",
    "source": "Kevin Seifert on Twitter ",
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 3.8,
    "week03": 3.3,
    "week04": 0.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 3.8, 3.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 1.2, 4.1, 3.2, 3.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.8, 0.0, 3.2, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.4, 1.4, 0.3, 7.4, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 3.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 15,
    "avg_fp2": 10.78,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 7.22,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Zach Ertz caught 6-of-6 targets for 47 yards and a touchdown in the Cardinals' Week 4 win over the Panthers.\u00a0\n",
    "report": "",
    "analysis": "Ertz has now caught at least six passes in every contest since he was limited by a calf injury in Week 1. He has two touchdowns in four games, and is predictably shaping up as Kyler Murray's second most reliable target behind Marquise Brown. In a really bad year for the tight end position, Ertz is a safe TE1.\u00a0\n",
    "timestamp": "2022-10-03 12:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.4,
    "week02": 11.5,
    "week03": 7.5,
    "week04": 13.7,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.4, 11.5, 7.5, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 9.8, 5.2, 3.0, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 4.8, 3.1, 7.2, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 16.3, 11.1, 12.4, 10.2]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2473037.png",
    "name": "Jason Myers",
    "depthchart": "Starter: K-1",
    "team": "Seattle Seahawks",
    "projected": 12.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 18,
    "avg_fp2": 8.0,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 14.75,
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
    "headlineNews": "The Seahawks can create $4 million in cap space from releasing\u00a0Jason Myers.\n",
    "report": "",
    "analysis": "Myers posted career lows in 2021, converting 74% of field goals with three missed extra points and a 37% touchback rate. From a cap standpoint, it's an easy decision for Seattle to move on from a kicker that played at replacement level last season. The Seahawks could use the money saved from Myers toward re-signing free agents Quandre Diggs, D.J. Reed, and Duane Brown.\u00a0\n",
    "timestamp": "2022-02-26 05:43 PM",
    "source": "Seattle Times",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.0,
    "week04": 14.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.4, 5.4, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.2, 5.2, 17.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 9.7, 8.7, 23.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 11.4,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.0,
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
    "headlineNews": "Rams re-signed K\u00a0Matt Gay to a one-year, $2.5 million contract.\u00a0\n",
    "report": "",
    "analysis": "Gay was offered an original-round tender back in March, all but ensuring the former fifth-round pick would be back with the Rams. He connected on all but two of his 34 field goal attempts last season and missed just one of 49 extra point tries. Playing in a quality offense, Gay should once again be a good fantasy option.\u00a0\n",
    "timestamp": "2022-04-16 05:44 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 'DNP', 'DNP', 'DNP', 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.4, 'DNP', 'DNP', 'DNP', 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.3, 'DNP', 'DNP', 'DNP', 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3150744.png",
    "name": "Chase McLaughlin",
    "depthchart": "Starter: K-1",
    "team": "Indianapolis Colts",
    "projected": 10.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 5.33,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 9.25,
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
    "headlineNews": "Colts elevated K Chase McLaughlin from the practice squad.\n",
    "report": "",
    "analysis": "He will kick Sunday against the Jags with the Colts operating as three-point road favorites in a 45-totaled affair. After starting for the Browns in 2021, McLaughlin was eventually released after the team drafted Cade York out of LSU in the 2022 draft. He then lost the preseason kicker battle in Indianapolis to recently released kicker Rodrigo Blankenship but gets a fresh start with the recent transaction.\u00a0McLaughlin struggled in 2021 with the Browns, missing 6-of-10 field goal attempts between 40-49 yards. Consider\u00a0McLaughlin nothing more than a low end streaming option in deep leagues that still include kickers.\n",
    "timestamp": "2022-09-17 06:41 PM",
    "source": "Mike Chappell on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.0, 7.7, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.0, 5.2, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 7.6, 8.6, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243371.png",
    "name": "Riley Patterson",
    "depthchart": "Starter: K-1",
    "team": "Jacksonville Jaguars",
    "projected": 9.9,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 14,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.25,
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
    "headlineNews": "Jaguars claimed K\u00a0Riley Patterson off waivers from the Lions.\u00a0\n",
    "report": "",
    "analysis": "The Jaguars briefly looked like they were up to four kickers on the roster, but James McCourt and Jake Verity were waived in corresponding moves. The Jaguars also claimed DB Tyree Gillespie, RB Jamycal Hasty, WR Kendric Pryor, and LB Ty Summers.\u00a0\n",
    "timestamp": "2022-09-05 09:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 8.0,
    "week03": 12.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 8.0, 12.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.9, 7.4, 6.2, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.8, 7.7, 4.1, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 7.8, 9.1, 10.5, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 4,
    "avg_fp2": 10.25,
    "opp_rank_allowed_fp2_Neu": 22,
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
    "week01": "DNP",
    "week02": 10.0,
    "week03": 8.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.0, 8.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 16.6, 11.0, 'DNP', 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 9.7, 7.3, 'DNP', 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 16.7, 14.8, 'DNP', 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4428963.png",
    "name": "Cade York",
    "depthchart": "Starter: K-1",
    "team": "Cleveland Browns",
    "projected": 9.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 7,
    "avg_fp2": 9.0,
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
    "headlineNews": "The Akron Beacon Journal's Nate Ulrich reports Browns rookie K Cade York has been impressive at team OTAs.\n",
    "report": "",
    "analysis": "York was the only kicker selected in the 2022 NFL Draft (124th overall), and reportedly hit field goals of 60+ yards in the first OTA opened to local media. Safety John Johnson said of York, \"It could be a 30-yard kick. He's going to hit it for 60. It flies through the uprights, accurate.\" If you're a fantasy football traditionalist, York could make for an interesting selection in fantasy drafts. Last season at LSU he converted 83.3% of his field goal attempts and was 5-of-7 on kicks of 50+ yards.\n",
    "timestamp": "2022-06-08 07:05 PM",
    "source": "Akron Beacon Journal",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.0, 5.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.0, 8.9, 10.1, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.5, 5.8, 5.9, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.4, 12.0, 13.3, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16486.png",
    "name": "Brett Maher",
    "depthchart": "Starter: K-1",
    "team": "Dallas Cowboys",
    "projected": 9.3,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 2,
    "avg_fp2": 11.25,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 8.25,
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
    "headlineNews": "Cowboys promoted K Brett Maher from the practice squad.\n",
    "report": "",
    "analysis": "The move was a formality after Maher won Cowboys\u2019 kicking duties in camp. Maher's second stint with the storied franchise brings solid expected fantasy utility kicking for a team likely to finish the season amongst the top 10 in total offense. A top-12 finish is well within his range of outcomes, keeping Maher on the fantasy radar in all formats that still use kickers.\n",
    "timestamp": "2022-09-10 08:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 16.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 9.7, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.3, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.7, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3975763.png",
    "name": "Greg Joseph",
    "depthchart": "Starter: K-1",
    "team": "Minnesota Vikings",
    "projected": 9.2,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 7,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 8.0,
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
    "headlineNews": "Vikings signed Oklahoma K\u00a0Gabe Brkic.\u00a0\n",
    "report": "",
    "analysis": "Brkic (6'3/201) was one of the Lou Groza Award finalists in 2021 as well as an All-Big 12 second-team selection. He held a field goal accuracy rate of 76.9% in both the 2020 and 2021 seasons, achieving 100% back in 2019 when he was successful on 17-of-17 attempts. He made every one of his extra-point attempts in 2019 and 2020, missing just one PAT in 2021 (57-of-58). One of the brightest moments of Brkic's career came when he tied an FBS single-game record with three field goal makes of at least 50 yards (51, 56, and 55) along with a 26-yard make in the season opener vs. Tulane. He will push Greg Joseph, who is due a non-guaranteed RFA tender amount of $2.433 million.\u00a0\n",
    "timestamp": "2022-05-05 10:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 4.0,
    "week04": 18.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 4.0, 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.1, 10.5, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 7.8, 4.8, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 11.6, 11.1, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9354.png",
    "name": "Robbie Gould",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 9.0,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 6.25,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.75,
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
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 10.6]
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
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 26,
    "avg_fp2": 5.5,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.0,
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
    "headlineNews": "Packers activated K\u00a0Mason Crosby (knee) from the active/PUP list.\u00a0\n",
    "report": "",
    "analysis": "Crosby, entering his age-38 season, had been placed on the PUP list following offseason knee surgery. The Packers' all-time leader in points and field goals should be ready to go for Week 1 against the Vikings, barring practice setbacks. Crosby should once again be a useful fantasy kicker in 2022.\u00a0\n",
    "timestamp": "2022-08-30 08:56 PM",
    "source": "USA Today ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 2.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 2.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 4.8, 'DNP', 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 3.9, 'DNP', 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 8.9, 'DNP', 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2985659.png",
    "name": "Wil Lutz",
    "depthchart": "Starter: K-1",
    "team": "New Orleans Saints",
    "projected": 8.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 26,
    "avg_fp2": 5.75,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 9.5,
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
    "week02": 4.0,
    "week03": 2.0,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 4.0, 2.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.7, 12.9, 5.4, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 8.3, 6.0, 8.8, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.1, 9.2, 11.5, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15091.png",
    "name": "Randy Bullock",
    "depthchart": "Starter: K-1",
    "team": "Tennessee Titans",
    "projected": 8.7,
    "opponent": "Washington Commanders",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 26,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.25,
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
    "headlineNews": "Titans re-signed K Randy Bullock.\n",
    "report": "",
    "analysis": "Signed in Week 2 after the Titans lost Sam Ficken to injury, Bullock went on to make 26-of-31 field goals last year while converting 42-of-45 extra points. He'll return as the Titans kicker in 2022. Tennessee's run-heavy offense should lead to plenty of attempts for\u00a0Bullock.\n",
    "timestamp": "2022-03-19 03:14 PM",
    "source": "tennesseetitans.com",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 7.0,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 7.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 6.6, 6.3, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 7.2, 6.3, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 12.2, 10.5, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14993.png",
    "name": "Greg Zuerlein",
    "depthchart": "Starter: K-1",
    "team": "New York Jets",
    "projected": 8.4,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 14,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 6.75,
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
    "headlineNews": "Jets released K Eddy Pineiro.\n",
    "report": "",
    "analysis": "Greg Zuerlein has won the Jets' kicking job, at least for now, after the two were in a competition this summer. Pineiro kicked in five games for the Jets last season, nailing all eight of his field goals and 9-of-10 extra points. Zuerlein was the Cowboys' kicker the last two seasons after eight with the Rams.\n",
    "timestamp": "2022-08-23 10:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 9.0,
    "week03": 18.0,
    "week04": 6.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 18.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.6, 11.9, 8.1, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 7.4, 6.2, 5.4, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.1, 11.5, 9.4, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16339.png",
    "name": "Brandon McManus",
    "depthchart": "Starter: K-1",
    "team": "Denver Broncos",
    "projected": 8.2,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 7,
    "avg_fp2": 8.25,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 7.0,
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
    "headlineNews": "Broncos activated K\u00a0Brandon McManus from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Denver also got back P Sam Martin, so their special teams corps will be intact for the season finale.\u00a0McManus has converted 25-of-30 field goals this season including a 61 yarder last week.\u00a0\n",
    "timestamp": "2022-01-08 12:20 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12460.png",
    "name": "Graham Gano",
    "depthchart": "Starter: K-1",
    "team": "New York Giants",
    "projected": 8.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 4,
    "avg_fp2": 10.75,
    "opp_rank_allowed_fp2_Neu": 16,
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
    "headlineNews": "Giants signed K\u00a0Ryan Santoso, formerly of the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Santoso was waived by Jacksonville this week. It'd be a shock if Santoso won the Giants' starting job over Graham Gano, who in 2021 made 29 of his 33 field goal tries as New York's most potent weapon. Gano could be dealing with an injury, as the Giants plan on sitting him for their final preseason game.\u00a0\n",
    "timestamp": "2022-08-26 05:42 PM",
    "source": "Doug Kyed on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 17.0,
    "week03": "DNP",
    "week04": 10.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 17.0, 'DNP', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.6, 'DNP', 8.2, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 11.9, 'DNP', 6.0, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.7, 'DNP', 8.5, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3821683.png",
    "name": "Austin Seibert",
    "depthchart": "Starter: K-1",
    "team": "Detroit Lions",
    "projected": 8.0,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 26,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 9.0,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 11.0,
    "week03": 7.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 11.0, 7.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.0, 6.3, 'DNP', 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 7.9, 5.2, 'DNP', 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.7, 8.2, 'DNP', 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049899.png",
    "name": "Younghoe Koo",
    "depthchart": "Starter: K-1",
    "team": "Atlanta Falcons",
    "projected": 7.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 2,
    "avg_fp2": 12.0,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 5.75,
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
    "headlineNews": "Falcons re-signed K Younghoe Koo to a five-year, $24.25 million contract.\n",
    "report": "",
    "analysis": "Koo is getting $11.5 million guaranteed. He was set to be a restricted free agent, but the Falcons are instead locking him up through his age-32 season. Koo is now the league's second-highest paid kicker at $4.85 million per year, trailing only Justin Tucker at $5 million. Koo bounced around the league a bit with the Chargers and Patriots before settling in with the Falcons in 2019. He's been dynamite in Atlanta, drilling 92.6% of his field goals, going 87-of-94 in three years, and 95.1% of his extra points in that span. He's also 13-of-14 on field goals of 50-plus yards. Koo deserves the pay day.\n",
    "timestamp": "2022-03-15 05:20 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 12.0,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 12.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 10.0, 8.8, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.4, 4.0, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.3, 7.3, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15965.png",
    "name": "Dustin Hopkins",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Chargers",
    "projected": 7.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 21,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 8.0,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers K\u00a0Dustin Hopkins (quad) is questionable for Week 5 against the Browns.\u00a0\n",
    "report": "",
    "analysis": "Hopkins was limited all week in practice, suggesting he will be able to go. That said, the Chargers did add\u00a0Taylor Bertolet to the practice squad. If\u00a0Bertolet is elevated on Saturday, that would be a big sign Hopkins will sit out this week.\u00a0\n",
    "timestamp": "2022-10-07 10:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.0,
    "week03": 4.0,
    "week04": 10.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.0, 4.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 3.5, 4.4, 9.4, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.6, 5.9, 6.0, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 6.1, 7.8, 9.8, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17427.png",
    "name": "Cairo Santos",
    "depthchart": "Starter: K-1",
    "team": "Chicago Bears",
    "projected": 7.6,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 7,
    "avg_fp2": 6.67,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 5.25,
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
    "headlineNews": "Bears K Cairo Santos (personal) has returned to the team.\n",
    "report": "",
    "analysis": "Santos missed Week 4 against the Giants while tending to a personal matter, but is \"back and full-steam ahead\" according to Bears beat writer Dan Wiederer. Santos will resume his role as the team's starting kicker and should be good to go for Week 5 against the Vikings.\n",
    "timestamp": "2022-10-03 08:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 14.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 14.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 7.7, 'DNP', 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.9, 'DNP', 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 9.9, 'DNP', 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917232.png",
    "name": "Tyler Bass",
    "depthchart": "Starter: K-1",
    "team": "Buffalo Bills",
    "projected": 7.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 14,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.0,
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
    "week01": 8.0,
    "week02": "DNP",
    "week03": 5.0,
    "week04": 11.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 5.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 'DNP', 6.0, 8.0, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.7, 'DNP', 7.9, 9.0, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 'DNP', 10.6, 10.7, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124679.png",
    "name": "Jason Sanders",
    "depthchart": "Starter: K-1",
    "team": "Miami Dolphins",
    "projected": 7.3,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 21,
    "avg_fp2": 7.25,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.5,
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
    "week01": "DNP",
    "week02": 6.0,
    "week03": 3.0,
    "week04": 10.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.0, 3.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.8, 4.8, 10.5, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 11.5, 7.8, 10.1, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.5, 13.6, 13.5, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    "name": "Nick Folk",
    "depthchart": "Starter: K-1",
    "team": "New England Patriots",
    "projected": 7.1,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 26,
    "avg_fp2": 5.5,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 6.75,
    "fanduelSalary": "-",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots are working out K\u00a0Tristan Vizcaino.\u00a0\n",
    "report": "",
    "analysis": "New England is likely hammering out an emergency list of kickers in case starter Nick Folk -- second in the league last year with 36 field goals -- misses time in 2022.\u00a0Vizcaino was waived by the Chargers last October after missing five of ten extra point attempts.\u00a0\n",
    "timestamp": "2022-06-06 12:51 PM",
    "source": "Tom Pelissero on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 5.0,
    "week03": 10.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 5.0, 10.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 4.0, 4.6, 'DNP', 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.5, 6.3, 'DNP', 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 7.2, 9.8, 'DNP', 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4034949.png",
    "name": "Eddy Pineiro",
    "depthchart": "Starter: K-1",
    "team": "Carolina Panthers",
    "projected": 6.9,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 7,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 4.0,
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
    "headlineNews": "Panthers signed K Eddy Pinero to a one-year contract.\n",
    "report": "",
    "analysis": "Pinero replaces Zane Gonzalez (core), who was placed on season-ending IR. The 28-year-old former Jets kicker has ties to special teams coordinator\u00a0Chris Tabor, overlapping in Chicago in 2019.\u00a0Pinero converted all eight of his field goals and 90% of extra points in five games with New York last year.\n",
    "timestamp": "2022-08-31 01:40 PM",
    "source": "NFL.com",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 10.0,
    "week03": 12.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.0, 12.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.6, 12.2, 'DNP', 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 11.5, 7.6, 'DNP', 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.4, 9.7, 'DNP', 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124084.png",
    "name": "Joey Slye",
    "depthchart": "Starter: K-1",
    "team": "Washington Commanders",
    "projected": 6.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 32,
    "avg_fp2": 2.0,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 7.0,
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
    "headlineNews": "Commanders re-signed K Joey Slye to two-year contract.\n",
    "report": "",
    "analysis": "NFL Network's Ian Rapoport reports the deal is worth around $5 million and includes $2 million in guarantees. Washington must have liked what they saw in Slye's six games with the team last season. He made all 12 of his field goal attempts and all ten of his extra points after stints in Carolina, Houston, and San Francisco during the 2021 season. In his first two NFL seasons, he made a middling 79.4 percent of his field goal tries. Slye, who has never missed arm day, has long been excellent on kickoffs. Perhaps Slye, 26, can find a long-term home with the Commanders.\u00a0\n",
    "timestamp": "2022-04-11 03:26 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 1.0,
    "week03": 0.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.0, 0.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 4.5, 3.2, 6.5, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 5.7, 9.5, 9.3, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.4, 11.8, 14.2, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919602.png",
    "name": "Matt Ammendola",
    "depthchart": "Starter: K-1",
    "team": "Arizona Cardinals",
    "projected": 5.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 1.5,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 2.25,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.0,
    "week04": "DNP",
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 0.3, 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 5.6, 'DNP', 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.3, 'DNP', 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17372.png",
    "name": "Chris Boswell",
    "depthchart": "Starter: K-1",
    "team": "Pittsburgh Steelers",
    "projected": 5.2,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 7,
    "avg_fp2": 9.75,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 5.25,
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
    "headlineNews": "Steelers signed K Chris Boswell to a four-year, $20 million extension.\u00a0\n",
    "report": "",
    "analysis": "The last member standing of Pittsburgh's \"Killer B's\", Boswell is now tied with Justin Tucker as the highest-paid kickers in the league. Boswell's deal includes $12.5 million in guarantees. He has connected on at least 90 percent of his field goal attempts in four of the past five seasons. His hit rate on extra points has never dipped below 89 percent. Boswell's accuracy while kicking for a capable offense makes him one of the best fantasy options at the position every year, and 2022 is no different.\u00a0\n",
    "timestamp": "2022-08-01 09:56 PM",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 8.0,
    "week03": 5.0,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 8.0, 5.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 9.2, 6.4, 8.0, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 7.4, 2.2, 4.0, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.7, 6.8, 8.7, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971573.png",
    "name": "Ka'imi Fairbairn",
    "depthchart": "Starter: K-1",
    "team": "Houston Texans",
    "projected": 5.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 7,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 2.75,
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
    "headlineNews": "Texans placed K Ka'imi Fairbairn on the reserve/COVID list.\n",
    "report": "",
    "analysis": "Fairbairn is reportedly vaccinated, so he could be cleared in time for Week 16 against the Chargers. If he's unable to do so, the Texans will have to make other plans at kicker.\n",
    "timestamp": "2021-12-22 08:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 8.0,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 8.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 7.9, 9.5, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.8, 10.9, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 7.2, 15.3, 11.2]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 15.0,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 32,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 15.5,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$10000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos CB Ronald Darby (knee) is out for the season after exiting Week 5's game against the Colts.\n",
    "report": "",
    "analysis": "It's a torn ACL, and the corner will likely be placed on injured reserve shortly. The corner suffered the injury in the second quarter while breaking up a Matt Ryan floater. Darby will turn 29 in January and, at a $13 million cap figure for 2023, is probably a release candidate after this news. Darby had a 66.3 PFF coverage grade in 280 snaps this season.\u00a0\n",
    "timestamp": "",
    "source": "James Palmer on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 7.5,
    "week01": 5.0,
    "week02": 7.0,
    "week03": 16.0,
    "week04": 2.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 7.0, 16.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.4, 6.6, 9.6, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 4.8, 3.9, 4.0, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.8, 10.3, 10.6, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 10.2,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 8,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 17.0,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmTextLite": "#A31D2F",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Carlton Davis (stinger) left Week 4's game against the Chiefs and is questionable to return.\n",
    "report": "",
    "analysis": "He was injured on Kansas City's final drive of the third quarter, spending time in the blue medical tent before getting ruled questionable to return. Davis had two solo tackles and a quarterback hit before leaving.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 10.0,
    "week01": 13.0,
    "week02": 20.0,
    "week03": 6.0,
    "week04": 1.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 20.0, 6.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 7.4, 7.4, 5.6, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 2.4, 7.4, 4.9, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 10.5, 15.8, 13.6, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 9.6,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 31,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 19.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings signed NT Khyiris Tonga.\n",
    "report": "",
    "analysis": "The 2021 seventh-rounder was on Atlanta's practice squad. Minnesota had an extra 53-man spot after placing Lewis Cine on injured reserve. Ross Blacklock and James Lynch have barely played in the Vikings interior rotation and Tonga might be here to push them for a job.\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.75,
    "week01": 12.0,
    "week02": 7.0,
    "week03": 2.0,
    "week04": 6.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 7.0, 2.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 4.5, 6.3, 13.6, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.6, 0.4, 6.3, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 7.3, 5.9, 10.2, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 9.2,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 14,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 15.75,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.5,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 4.75,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles CB Avonte Maddox (ankle) will not play Week 5 against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Maddox also sat out last week.\u00a0Josiah Scott took over in the slot and likely will do the same against the Cardinals. Maddox sitting is an upgrade for Arizona's passing attack.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 10.0,
    "week01": -2.0,
    "week02": 12.0,
    "week03": 15.0,
    "week04": 15.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 12.0, 15.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.1, 7.9, 4.4, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 1.2, 4.2, 3.7, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 7.8, 9.7, 10.7, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 9.1,
    "opponent": "Houston Texans",
    "opp_rank_pts": 25,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 17.25,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars DT\u00a0Foley Fatukasi suffered a quad injury in Jacksonville's Week 4 loss to the Eagles.\u00a0\n",
    "report": "",
    "analysis": "The big-dollar free agent addition was announced as questionable in the second half but never returned. \"Quad\" can mean any number of things. An MRI is likely incoming.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 9.75,
    "week01": 6.0,
    "week02": 21.0,
    "week03": 9.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 21.0, 9.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 6.2, 12.0, 4.2, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.5, 2.9, 3.0, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 6.8, 8.2, 7.3, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 8.9,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams coach Sean McVay said S Jordan Fuller (hamstring) will miss 2-4 weeks.\n",
    "report": "",
    "analysis": "Fuller wasn't active for Week 3 before playing 74% of the defensive snaps in Week 4. His absence will cut into the Rams three-safety looks with Taylor Rapp and Nick Scott. This is technically a re-aggravation since Fuller missed time with the same injury earlier this year.\u00a0\n",
    "timestamp": "",
    "source": "Sarah Barshop on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.5,
    "week01": 9.0,
    "week02": 10.0,
    "week03": 6.0,
    "week04": 1.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.0, 6.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 9.4, 17.8, 11.6, 8.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 3.1, 6.6, 4.5, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 8.7, 11.0, 11.0, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 8.7,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 23,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 14.5,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills DT Ed Oliver (ankle) is questionable for Week 4 against the Ravens.\n",
    "report": "",
    "analysis": "Buffalo's top interior presence has missed each of the last two weeks with an ankle injury sustained in the season opener. He got in limited sessions all of last week, but was ruled out Friday. Making it to questionable is a sign of progress, but not necessarily a guarantee that he'll suit up on Sunday.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 10.5,
    "week01": 17.0,
    "week02": 14.0,
    "week03": 4.0,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 14.0, 4.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 8.0, 8.6, 4.5, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 3.8, 4.6, 3.4, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 12.3, 13.0, 10.7, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 8.5,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 10,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs CB Jaylen Watson was named AFC Defensive Player of the Week for Week 2.\n",
    "report": "",
    "analysis": "The seventh-round rookie out of Washington State has started each of the Chiefs' first two games and flipped last Thursday night's game on its head with a 99-yard pick-six of Justin Herbert. Watson was thrown an eight times that night but allowed just three catches for 25 scoreless yards in his coverage on the outside.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 4.75,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 8.0,
    "week04": 4.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 4.0, 8.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.7, 6.1, 9.8, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.9, 4.3, 4.4, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 9.5, 12.0, 9.5, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 8.4,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 21.5,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers placed S\u00a0Jeremy Chinn (hamstring) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Chinn will miss at least the next four weeks. It's quite a blow to the Carolina secondary, which, according to Pro Football Focus, is the 12th best in the league through Week 4. He has 17 tackles and one quarterback pressure this season.\u00a0\n",
    "timestamp": "",
    "source": "Joseph Person on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 5.0,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 10.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 4.0, 10.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 6.4, 7.7, 17.6, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 4.9, 3.6, 5.3, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 7.9, 7.3, 15.8, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Commanders",
    "depthchart": "",
    "team": "Washington Commanders",
    "projected": 7.9,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 26.75,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.25,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Commanders declared CB\u00a0William Jackson, QB Sam Howell, G Chris Paul, TE Cole Turner, DT Daniel Wise, DE Casey Toohill, and DE James Smith-Williams inactive for Week 3 against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "A vulnerable Washington secondary could be in for a long day against Jalen Hurts and the red-hot Philadelphia offense without Jackson. Taylor Heinicke will continue serving as Carson Wentz's backup with Howell a healthy scratch.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 2.33,
    "week01": "DNP",
    "week02": -1.0,
    "week03": 5.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', -1.0, 5.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.5, 2.7, 0.4, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.3, 0.0, 1.6, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 4.7, 4.2, 6.7, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 7.4,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 25.5,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "ESPN's Rich Cimini reports X-rays on Jets LB Quincy Williams (ankle) were negative.\n",
    "report": "",
    "analysis": "Williams was carted off the field in Sunday's Week 3 game against the Bengals but appears to have avoided serious injury. Williams is expected to miss some time with what appears to be an ankle sprain. He has started each of the Jets' three games on the year, totaling 20 tackles and one sack.\n",
    "timestamp": "",
    "source": "Rich Cimini on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.5,
    "week01": 4.0,
    "week02": 2.0,
    "week03": 4.0,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.0, 4.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 2.3, 5.2, 6.5, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 2.5, 3.2, 2.8, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.5, 7.1, 9.2, 7.9, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 6.8,
    "opponent": "New York Jets",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.5,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.25,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Xavien Howard (groin) is questionable for Week 5's game against the Jets.\n",
    "report": "",
    "analysis": "Howard got in a limited session to close out the week. Mike McDaniel told reporters on Friday that Howard was, like Terron Armstead, a player he felt could play without practicing. That was probably a pretty big hint that Howard will be out there on Sunday, and he's trending in the right direction after missing the first two practices of the week.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.75,
    "week01": 12.0,
    "week02": -1.0,
    "week03": 7.0,
    "week04": 1.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, -1.0, 7.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 8.9, 7.0, 10.3, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 9.9, 6.0, 3.9, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 16.7, 11.7, 11.9, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.8,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 29,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 15.25,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.25,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys DT Quinton Bohanna exited Week 4 against the Commanders with an apparent arm injury.\n",
    "report": "",
    "analysis": "Bohanna's injury appeared to be a shoulder injury, but we'll likely know more about the specifics of his injury after the game. He did not return to the field on the team's ensuing drive.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 8.0,
    "week01": 5.0,
    "week02": 7.0,
    "week03": 10.0,
    "week04": 10.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 7.0, 10.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 10.2, 4.7, 3.5, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 1.9, 1.8, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.8, 7.9, 6.8, 7.2, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.6,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 17,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 10.0,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Arik Armstead (foot) did not practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "Armstead appeared to aggravate his nagging foot injury against the Rams. It is possible the 49ers give him some time off to let the injury fully heal.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 12.25,
    "week01": 5.0,
    "week02": 15.0,
    "week03": 8.0,
    "week04": 21.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 15.0, 8.0, 21.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 5.0, 8.8, 9.6, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 2.7, 2.4, 8.5, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.2, 10.3, 14.4, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.4,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 12,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 23.75,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jadeveon Clowney (ankle) is questionable for Week 5 against the Chargers.\u00a0\n",
    "report": "",
    "analysis": "Clowney sat out the first two days of practice, but he was able to get in a limited session on Friday. Still, he appears to be on the wrong side of questionable. In better news for Cleveland's defense,\u00a0Myles Garrett was removed from the injury report and will play.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.0,
    "week01": 6.0,
    "week02": 3.0,
    "week03": 4.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 3.0, 4.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 10.8, 6.3, 5.8, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 4.8, 4.0, 3.4, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.6, 11.3, 8.1, 9.0, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 6.4,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 25.5,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.5,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens CB Marcus Peters (quad) is questionable for Week 5 against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "A surprise Thursday limited tag became a Friday DNP for Peters, who was added to the injury report mid-week with the quadriceps. The Friday DNP leads us to believe this is more on the doubtful side of questionable. It'd be a huge loss for the Ravens on Sunday as they try to deal with Tee Higgins (ankle, questionable) and Ja'Marr Chase.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 8.5,
    "week01": 11.0,
    "week02": 7.0,
    "week03": 11.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 11.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 12.0, 4.2, 3.7, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 5.8, 4.3, 3.2, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.3, 12.6, 12.6, 10.0, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 6.1,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 30,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 21.25,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts have ruled out LB Shaquille Leonard (concussion) for Week 5 against the Broncos.\n",
    "report": "",
    "analysis": "Leonard suffered a concussion against the Titans and was ruled out of the game after making two tackles. He was quickly ruled out for Week 5, given that the Colts have a quick turnaround before facing the Broncos on Thursday night football. Leonard will be a major loss for the Colts, particularly against the run. That could be a much-needed boost for the efficiency of a Broncos rushing attack that will be without Javonte Williams.\n",
    "timestamp": "",
    "source": "Zac Keefer on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 3.75,
    "week01": 6.0,
    "week02": 0.0,
    "week03": 6.0,
    "week04": 3.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 6.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.8, 0.5, 7.3, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.1, 5.3, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.8, 8.3, 8.3, 11.1, 7.2]
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
    "opponent": "New York Giants",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 15.75,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Jaire Alexander (groin) will play in Week 5 against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Alexander logged a full practice on Thursday and Friday. He'll return to Green Bay's starting lineup after missing Week 4 with a groin injury he picked up in Week 3. The return of the Packers' top cover man is bad news for Daniel Jones and the lifeless Giants passing offense. Green Bay is a top defensive option in Week 5.\u00a0\n",
    "timestamp": "",
    "source": "ProFootballTalk.com ",
    "game_day_logo": "",
    "avg_fp2": 7.0,
    "week01": 1.0,
    "week02": 9.0,
    "week03": 11.0,
    "week04": 7.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 9.0, 11.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.9, 5.4, 13.3, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 4.8, 4.0, 7.0, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.2, 10.6, 12.5, 15.4, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 5.6,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 1,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 22.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots S Kyle Duggar (knee) did not practice Thursday.\n",
    "report": "",
    "analysis": "He also didn't practice on Wednesday. Dugger left Week 2's game with the knee injury. One of New England's better defenders last season, the third-year safety has to be considered questionable-at-best for Week 3's tilt against the Ravens.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.0,
    "week01": 7.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 8.0, 4.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 1.4, 1.1, 7.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 5.2, 2.6, 4.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 10.6, 8.0, 10.7, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 5.4,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 23.25,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans LB Blake Cashman (concussion) left Week 4's game against the Chargers and has been ruled out.\u00a0\n",
    "report": "",
    "analysis": "Cashman went into the medical tent and quickly retreated into the locker room. Garret Wallow has replaced him at linebacker. Cashman had three solo tackles and a pass defensed before leaving.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 8.0,
    "week01": 7.0,
    "week02": 14.0,
    "week03": 9.0,
    "week04": 2.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 14.0, 9.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 6.5, 6.5, 7.3, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.4, 3.3, 4.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.8, 10.0, 8.6, 9.3, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 5.3,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 11,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints S Marcus Maye denies any wrongdoing associated with his arrest stemming from a road rage incident on Monday.\n",
    "report": "",
    "analysis": "Maye was recently accused of pointing a firearm at another vehicle after being identified as the driver of a black SUV. Mike Florio of Pro Football Talk reports the Saints are \"aware of it but we have no further comment since it\u2019s a pending legal situation.\" This incident marks the second offseason legal trouble for Maye, who was arrested earlier this year in connection with DUI charges. It's likely the NFL waits until after Maye's November 16 court date to levy any league punishment.\u00a0\n",
    "timestamp": "",
    "source": "Pro Football Talk",
    "game_day_logo": "",
    "avg_fp2": 5.25,
    "week01": 6.0,
    "week02": 7.0,
    "week03": 4.0,
    "week04": 4.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 7.0, 4.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 7.0, 6.2, 9.0, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 2.7, 4.2, 3.4, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 8.7, 11.3, 9.1, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 5.3,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 21.25,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Minkah Fitzpatrick (knee) is off Pittsburgh's final injury report for Week 5 against the Bills.\n",
    "report": "",
    "analysis": "Pittsburgh will have their best non-T.J. Watt defender available to create havoc in the middle of the field. Fitzpatrick came back on a limited basis on Thursday, was upgraded to full today, and should be good to go as the Steelers try to cover one of the biggest spreads against them in the Mike Tomlin Era.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.5,
    "week01": 20.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.0, 3.0, 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 9.9, 6.3, 10.5, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 10.5, 4.4, 5.4, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.7, 17.4, 14.9, 16.2, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 5.3,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 15,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears LB Roquan Smith (hip) is active for Week 3 against the Texans.\n",
    "report": "",
    "analysis": "Smith didn't practice all week, but the Bears are still playing him. Meanwhile, CB Jaylon Johnson (quad), a surprise DNP on Friday is out. Also inactive for the Bears are WR Velus Jones (hamstring), S Dane Cruikshank (hamstring), TE Ryan Griffin (Achilles), LB Matt Adams (hamstring), and OL Ja'Tyre Carter. The only interesting name here from a fantasy perspective is Jones, who hasn't played in any of the first three contests of the season and has barely practiced with a long-term hamstring injury.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.75,
    "week01": 10.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 5.8, 8.3, 6.7, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 10.4, 3.0, 3.7, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.6, 15.6, 8.8, 8.4, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 4.6,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 16,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 25.25,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons designed CB\u00a0Isaiah Oliver (knee) to return from injured reserve.\n",
    "report": "",
    "analysis": "Oliver went down with a knee injury a year ago, ending his 2021 season after just four games. He wasn't cleared for OTAs and landed on injured reserve to start the year. With Oliver's injury lingering into the regular season, it's likely that the team will make use of the bulk of his 21-day window to return.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.0,
    "week01": 6.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 6.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 8.0, 4.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.2, 6.9, 1.8, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 6.8, 6.8, 0.1, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.1, 13.4, 10.9, 4.7, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 3.6,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 17.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants placed Aaron Robinson (knee) on injured reserve.\n",
    "report": "",
    "analysis": "He'll miss at least the next four weeks. Robinson bent his knee awkwardly in Week 4's win over the Bears. He'd produced a 73.2 PFF coverage grade through his first two games of the season. The Giants are besieged with secondary injuries and will likely have to turn to the deep bench to replace Robinson in Week 5, likely using Fabian Moreau extensively.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.75,
    "week01": 4.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 16.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 7.0, 0.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 6.1, 6.9, 8.3, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.3, 2.7, 2.2, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.0, 7.9, 9.9, 7.9, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 3.5,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 25.25,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers CB J.C. Jackson (ankle) will play Week 4 against the Texans.\u00a0\n",
    "report": "",
    "analysis": "Jackson's Week 2 return from ankle surgery proved to be too quick, and he ended up missing last week's loss to the Jaguars. He got in a full practice Friday, however, and was left off the final injury report. Getting the big-money corner back will be a boost to the Charger defense.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.75,
    "week01": 13.0,
    "week02": 2.0,
    "week03": -4.0,
    "week04": 8.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 2.0, -4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.1, 6.0, 4.8, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.0, 1.4, 1.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 6.1, 8.2, 9.1, 4.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 3.5,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 28.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.75,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks EDGE L.J. Collier (elbow) could return for Week 5.\n",
    "report": "",
    "analysis": "Collier was placed on injured reserve ahead of the season, and has been designated to return to practice this week. Head coach Pete Carrol said Collier's return in Week 5 is \"realistic\" and noted that the defensive end is in good shape after his extended absence. The Seahawks declined Collier's fifth-year option for the 2023 season earlier this year, and will likely move on from him at the end of this season. Through 37 games, Collier has managed just three sacks after the Seahawks made him the 29th overall pick of the 2019 draft.\n",
    "timestamp": "",
    "source": "USA Today",
    "game_day_logo": "",
    "avg_fp2": 4.5,
    "week01": 7.0,
    "week02": 3.0,
    "week03": 7.0,
    "week04": 1.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 3.0, 7.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 9.8, 4.2, 2.8, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.8, 4.1, 1.2, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 9.3, 10.7, 6.3, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 3.4,
    "opponent": "Washington Commanders",
    "opp_rank_pts": 25,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 23.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans declared DB Amani Hooker, DB Theo Jackson, DB Ugo Amadi, OL Le'Raven Clark, LB Wyatt Ray, LB Ola Adeniyi, and LB Zach Cunningham inactive for Week 4 against the Colts.\n",
    "report": "",
    "analysis": "The defensive injuries continue to pile up for the Titans as they look to keep their head above water in the tight AFC South. The winner of this game suddenly could find themselves atop the division a quarter of the way through the season.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.5,
    "week01": 9.0,
    "week02": 0.0,
    "week03": 3.0,
    "week04": 10.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 3.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 2.9, 3.4, 7.1, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 2.1, 2.0, 3.4, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.3, 9.3, 8.5, 10.9, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 1.7,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 16.0,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals placed DT D.J. Reader (knee) on injured reserve.\n",
    "report": "",
    "analysis": "Reader is eligible to return for Week 8, but it sounds like the team expects him to be out for a bit longer than that. A staple along the Bengals' defensive line, Reader's presence will be missed as the team now looks to Josh Tupou and Zachary Carter to fill the vacated role. Reader has totaled nine tackles and eight quarterback pressures on the season per PFF.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 7.5,
    "week01": 2.0,
    "week02": 4.0,
    "week03": 16.0,
    "week04": 8.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 4.0, 16.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 6.6, 8.0, 4.7, 1.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 7.0, 3.8, 3.2, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 12.2, 9.7, 10.4, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 1.1,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 24.5,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "J.J. Watt has announced he is playing through a case of atrial fibrillation for Week 4 against the Panthers.\u00a0\n",
    "report": "",
    "analysis": "There is not much to say other than \"wow.\" \"I was just told somebody leaked some personal information about me and it\u2019s going to be reported on today,\" Watt posted on Twitter. \"I went into A-Fib on Wednesday, had my heart shocked back into rhythm on Thursday and I\u2019m playing today.\" It's a shocking, troubling admission. It is difficult to understand why Watt would be taking such a chance, but we are neither Watt nor his doctors. It does once again raise the question about when players' decisions to play should be taken out of their hands following the Tua Tagovailoa fiasco. Hopefully Watt is not taking an unnecessary risk.\u00a0\n",
    "timestamp": "",
    "source": "J.J. Watt on Twitter",
    "game_day_logo": "",
    "avg_fp2": 4.25,
    "week01": -2.0,
    "week02": 3.0,
    "week03": 4.0,
    "week04": 12.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 3.0, 4.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 3.8, 0.5, 5.0, 1.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 3.2, 4.2, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.5, 11.5, 6.2, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 0.6,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 23.25,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders coach Josh McDaniels said LB Denzel Perryman is in the concussion protocol.\n",
    "report": "",
    "analysis": "Perryman exited in the first half of Sunday's game against the Broncos and did not return to the field. The veteran linebacker was dealing with an ankle injury that kept him sidelined for each of the last two games but now he will look to clear protocol in time for Week 5 against the Chiefs. The Chiefs and Raiders play on Monday night, giving Perryman a little additional time to get on the field.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 10.5,
    "week01": 0.0,
    "week02": 34.0,
    "week03": 3.0,
    "week04": 5.0,
    "week05": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 34.0, 3.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 6.2, 4.4, 3.5, 0.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.0, 7.1, 5.8, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 5.8, 16.0, 13.1, 7.7]
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
