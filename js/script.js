var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 27 November 2019 07:25 AM (central time)"};
$scope.week = {"nflWeek": 13};

$scope.qbStartSit = {"one": "Jared Goff", "two": "Patrick Mahomes", "three": "Nick Foles", "four": "Drew Brees", "five": "Sam Darnold", "six": "Brandon Allen", "seven": "Philip Rivers", "eight": "Deshaun Watson", "nine": "Dak Prescott", "ten": "Lamar Jackson"};
$scope.rbStartSit = {"one": "Christian McCaffrey", "two": "Josh Jacobs", "three": "Le'Veon Bell", "four": "Jordan Howard", "five": "Saquon Barkley", "six": "Kalen Ballage", "seven": "Devonta Freeman", "eight": "Carlos Hyde", "nine": "Leonard Fournette", "ten": "Joe Mixon"};
$scope.wrStartSit = {"one": "D.J. Chark", "two": "Michael Thomas", "three": "Robert Woods", "four": "Davante Adams", "five": "Tyreek Hill", "six": "DeAndre Hopkins", "seven": "Marquise Brown", "eight": "Courtland Sutton", "nine": "John Brown", "ten": "Kenny Golladay"};
$scope.teStartSit = {"one": "Gerald Everett", "two": "Travis Kelce", "three": "Kyle Rudolph", "four": "Evan Engram", "five": "Nick O'Leary", "six": "Jason Witten", "seven": "Mark Andrews", "eight": "Darren Fells", "nine": "Noah Fant", "ten": "Mike Gesicki"};
$scope.dstStartSit = {"one": "Carolina Panthers", "two": "New York Jets", "three": "Philadelphia Eagles", "four": "Los Angeles Chargers", "five": "Detroit Lions", "six": "San Francisco 49ers", "seven": "Baltimore Ravens", "eight": "Jacksonville Jaguars", "nine": "Oakland Raiders", "ten": "Buffalo Bills"};

$scope.options = {
          title: {
              display: true,
              text: 'Fantasy Points'
          },
		  legend: {
			display: true  
		  },
		  scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }

          // Chart.js options can go here.
      };

$scope.positionQB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 22.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 13,
    "avg_fp2": 18.28,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 20.56,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Season low in yardage",
    "report": "Rodgers completed 20 of 33 pass attempts for 104 yards and a touchdown in Sunday's 37-8 loss to San Francisco.",
    "analysis": "The 49ers' defensive line overwhelmed the Packers' front, constantly pressuring Rodgers and forcing the quarterback to resort to dump-off passes or run the risk of being sacked (five sacks). The elite arm picked up midseason steam against some soft opponents, but he's come back down to earth against three tough pass defenses (166.0 passing yards and two total touchdowns over the last three weeks). Rodgers' fantasy owners will be pleased to see two soft opponents (New York Giants and Washington Redskins) on tap for Weeks 13 and 14, respectively.",
    "timestamp": "2019-11-24 10:26 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.5, 22.1, 'BYE', 14.1, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 21.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 23,
    "avg_fp2": 16.55,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 22.22,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Dealing with minor bruise",
    "report": "Coach Doug Pederson said that Wentz is tending to a bruise on his throwing hand, but the quarterback isn't expected to miss any practice time as a result and should be ready to play this weekend against the Dolphins, Daniel Gallen of The Harrisburg Patriot-News reports.",
    "analysis": "In the aftermath of Sunday's 17-9 loss to the Seahawks, Wentz was spotted with a wrap around his right hand, signaling some level of worry about his health. Pederson's comments should alleviate those concerns, but Wentz will retain an injury designation for the time being until he presumably practices Wednesday as a full participant. The minor hand issue coupled with a depleted pass-catching corps missing top wideouts Alshon Jeffery (ankle) and Nelson Agholor (knee) proved to be major obstacles Week 12 for Wentz, who completed 33 of 45 attempts for just 256 yards (5.7 YPA), one touchdown and two interceptions.",
    "timestamp": "2019-11-25 09:15 AM",
    "week01": 25.02,
    "week02": 21.54,
    "week03": 21.66,
    "week04": 19.7,
    "week05": 12.06,
    "week06": 21.54,
    "week07": 7.84,
    "week08": 14.38,
    "week09": 15.06,
    "week10": "BYE",
    "week11": 12.26,
    "week12": 10.94,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE', 12.26, 10.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.1, 'BYE', 16.7, 21.0, 21.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 21.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 20.51,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 19.33,
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
    "headlineNews": "Overcomes more mistakes in win",
    "report": "Winston completed 18 of 28 passes for 312 yards with three touchdowns and two interceptions in the Buccaneers' 35-22 win over the Falcons on Sunday. He also rushed eight times for 38 yards.",
    "analysis": "Early on, it looked like it could be more of the recent same for Winston, who tossed six interceptions in the two games prior to Sunday. Winston was guilty of his NFL-leading 19th and 20th  picks in the first half, but he continued to fight through his struggles and seemed to gain a measure of confidence when he successfully threaded the needle on a 71-yard touchdown throw to Chris Godwin midway through the opening quarter. Winston's most prolific target on the afternoon would remain Godwin, with whom he connected for a second score from a yard out in the second quarter. Winston's resurgent performance included his eighth 300-yard effort of the season, but the persistent pattern of turnovers is still a concern. Winston will look to put together a completely clean performance in a Week 13 interconference battle against the in-state Jaguars.",
    "timestamp": "2019-11-24 01:45 PM",
    "week01": 10.06,
    "week02": 13.22,
    "week03": 26.5,
    "week04": 30.3,
    "week05": 17.46,
    "week06": 19.1,
    "week07": "BYE",
    "week08": 23.34,
    "week09": 20.2,
    "week10": 20.32,
    "week11": 18.82,
    "week12": 26.32,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2, 20.32, 18.82, 26.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 22.0, 19.5, 15.9, 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 21.3,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 2,
    "avg_fp2": 21.82,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 22.05,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Struggles through the air",
    "report": "Mahomes completed 19 of 32 passes for 182 yards, one touchdown and one interception in Monday night's 24-17 win over the Chargers. He also rushed five times for 59 yards.",
    "analysis": "Mahomes had a pretty tame performance by his otherworldly standards, with his 63 first-half passing yards marking a career low. He was also picked off prior to halftime, now giving him two interceptions on the season. Fortunately, he responded in the second half with a 23-yard touchdown to Travis Kelce, and his output on the ground actually marked his personal best to date. Although he's clearly over his recent knee injury and now has the bye week to rest further, Mahomes saw top wideout Tyreek Hill exit early Monday with a hamstring issue, so he may be down a dynamic weapon when he looks to bounce back in Week 13 versus the Raiders.",
    "timestamp": "2019-11-18 08:56 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5, 'BYE', 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 20.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 20,
    "avg_fp2": 28.4,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 12.19,
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
    "headlineNews": "Puts on show versus Rams",
    "report": "Jackson completed 15 of 20 passes for 169 yards and five touchdowns in Monday night's 45-6 win over the Rams. He also rushed eight times for 95 yards.",
    "analysis": "Jackson turned in a dazzling display, bolstering his MVP resume. The quarterback started by tossing touchdowns to Hollywood Brown on consecutive drives, then came inches away from a thrilling 36-yard scoring scamper on his next series. With another touchdown throw his next time out, however, Jackson not only led Baltimore to the end zone on all four of his first-half drives, but did so without a single incompletion. For an encore, he then opened the second half with back-to-back red-zone TD completions before making way for backup Robert Griffin to begin the fourth. Overall, it was a nearly perfect primetime performance from Jackson, who'll now look forward to a Week 13 showdown against the vaunted 49ers defense.",
    "timestamp": "2019-11-25 08:25 PM",
    "week01": 33.56,
    "week02": 30.88,
    "week03": 21.28,
    "week04": 26.48,
    "week05": 14.44,
    "week06": 30.64,
    "week07": 23.32,
    "week08": "BYE",
    "week09": 28.62,
    "week10": 33.42,
    "week11": 33.48,
    "week12": 36.26,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62, 33.42, 33.48, 36.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 24.6, 20.6, 21.5, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 20.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 11,
    "avg_fp2": 23.24,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 16.78,
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
    "headlineNews": "Struggles to beat Eagles",
    "report": "Wilson completed 13 of 25 passes for 200 yards, a touchdown and an interception in Sunday's 17-9 win over the Eagles. He also ran twice for 16 yards.",
    "analysis": "Wilson's stat line would've looked much better if he connected with a wide-open Jacob Hollister in the end zone and DK Metcalf didn't drop a deep pass at the goal line. The veteran signal-caller faced heavy pressure all afternoon, as he was dropped six times for a loss of 26 yards. It took some trickery to notch his only score of the day, as he found Malik Turner on a flea flicker in the first quarter. Wilson posted a 52 percent completion rate and 8.0 YPA; both marks were his second worst of the season. Nevertheless, the Seahawks bumped to 9-2 on the season (6-0 on the road) and will take the NFC West lead if the Packers take down the 49ers on Sunday Night Football.",
    "timestamp": "2019-11-24 01:20 PM",
    "week01": 16.64,
    "week02": 24.2,
    "week03": 41.34,
    "week04": 14.3,
    "week05": 29.92,
    "week06": 28.9,
    "week07": 15.34,
    "week08": 15.68,
    "week09": 41.22,
    "week10": 17.58,
    "week11": "BYE",
    "week12": 10.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22, 17.58, 'BYE', 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 24.3, 19.0, 'BYE', 22.4, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 20.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 15.82,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 15.23,
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
    "headlineNews": "Accounts for three TDs vs. Dolphins",
    "report": "Mayfield completed 24 of 34 pass attempts for 327 yards, three touchdowns and one interception during Sunday's 41-24 win over the Dolphins.",
    "analysis": "Mayfield completed an impressive 71 percent of his throws while averaging 9.6 yards per attempt. He completed a pair of short touchdown passes to Jarvis Landry sandwiched around a 35-yard strike to Odell Beckham Jr. Mayfield now has eight total touchdowns over the last three games while throwing just one interception during that span. He's topped the 300-yard mark three times this season, equalling his total from last year, and he'll look to keep it rolling next Sunday against the Steelers.",
    "timestamp": "2019-11-24 02:01 PM",
    "week01": 12.4,
    "week02": 16.0,
    "week03": 10.7,
    "week04": 16.78,
    "week05": 0.0,
    "week06": 24.46,
    "week07": "BYE",
    "week08": 12.56,
    "week09": 17.12,
    "week10": 17.62,
    "week11": 21.82,
    "week12": 24.58,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12, 17.62, 21.82, 24.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 12.0, 19.8, 25.9, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 19.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 19,
    "avg_fp2": 16.71,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 18.23,
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
    "headlineNews": "Taking back starting gig",
    "report": "Dalton will reclaim the Bengals' starting quarterback job, Geoff Hobson of the Bengals' official site reports.",
    "analysis": "It appears the three-game experiment with Ryan Finley is over after the rookie signal caller failed to get the Bengals in the win column. Dalton thus will be under center Sunday against the Jets, looking to build upon his 281.5 yards per game and 9:8 TD:INT from eight starts earlier this season.",
    "timestamp": "2019-11-25 11:57 AM",
    "week01": 20.72,
    "week02": 19.64,
    "week03": 16.06,
    "week04": 4.64,
    "week05": 18.98,
    "week06": 14.6,
    "week07": 21.34,
    "week08": 17.66,
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.72, 19.64, 16.06, 4.64, 18.98, 14.6, 21.34, 17.66, 'BYE', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 12.6, 13.2, 17.1, 14.3, 14.6, 16.9, 12.3, 'BYE', 'DNP', 'DNP', 'DNP', 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 18.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 16.89,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 15.38,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Throws two TDs, cuts hand",
    "report": "Jones completed 21 of 36 passes for 150 yards and two touchdowns in Sunday's 19-14 loss to the Bears. He also rushed twice for 27 yards and lost a fumble.",
    "analysis": "After neither team scored any points in the first quarter, Jones finally got the Giants on the board with a three-yard touchdown to Kaden Smith halfway through the second quarter -- the first score of the rookie tight end's career. Jones went quiet after that, but he found Golden Tate for a 23-yard touchdown to give his team hope with under five minutes remaining. The rookie quarterback also lost a fumble for a fifth consecutive game in the third quarter, setting Chicago up at New York's three-yard line. Jones suffered a cut on his throwing hand and was noticeably bleeding, though he was able to finish the game, so the injury is unlikely to affect him moving forward.",
    "timestamp": "2019-11-24 02:34 PM",
    "week01": -0.82,
    "week02": "DNP",
    "week03": 36.24,
    "week04": 14.3,
    "week05": 11.48,
    "week06": 8.24,
    "week07": 11.42,
    "week08": 28.18,
    "week09": 12.8,
    "week10": 32.32,
    "week11": "BYE",
    "week12": 14.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.82, 'DNP', 36.24, 14.3, 11.48, 8.24, 11.42, 28.18, 12.8, 32.32, 'BYE', 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 'DNP', 12.9, 18.3, 17.4, 13.5, 13.1, 10.0, 17.3, 17.3, 'BYE', 14.7, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 18.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 6,
    "avg_fp2": 15.92,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 13.44,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Throws four picks in narrow defeat",
    "report": "Rivers completed 28 of 52 passes for 353 yards, one touchdown and four interceptions in Monday night's 24-17 loss to the Chiefs. He also threw a successful two-point conversion.",
    "analysis": "Rivers threw for a season high in yards, but he's more importantly now turned the ball over four times in consecutive games. He was picked off on back-to-back drives during both the first and second halves Monday, with his final interception coming in Kansas City's end zone with 18 seconds left. That turnover sealed another tough loss for the Chargers, who will now embark on their bye week as Rivers looks to regroup from a couple rough performances.",
    "timestamp": "2019-11-18 09:28 PM",
    "week01": 24.92,
    "week02": 11.92,
    "week03": 19.62,
    "week04": 20.4,
    "week05": 6.14,
    "week06": 16.8,
    "week07": 21.16,
    "week08": 11.04,
    "week09": 11.76,
    "week10": 13.28,
    "week11": 18.12,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76, 13.28, 18.12, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.5, 20.6, 'BYE', 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 18.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 16,
    "avg_fp2": 14.69,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 19.94,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Pulled early in blowout loss",
    "report": "Carr completed 15 of 27 passes for 127 yards and an interception in Sunday's 34-3 loss to the Jets. He also rushed once for 11 yards prior to being removed in the third quarter.",
    "analysis": "Carr was pulled late in the third quarter with his team trailing 34-3, as coach Jon Gruden didn't see any point in leaving the starting quarterback in. Carr's interception two drives earlier was returned for a touchdown. This dud stunts the momentum Carr had built up with 285-plus yards in four of the previous five games, along with a 9:2 TD:INT over those five games. There's no time to dwell on this performance, with the Raiders set to travel to Kansas City in Week 13 to face a Chiefs team that holds a one-game lead over Oakland atop the AFC West.",
    "timestamp": "2019-11-24 01:16 PM",
    "week01": 14.56,
    "week02": 11.72,
    "week03": 16.68,
    "week04": 13.46,
    "week05": 7.96,
    "week06": "BYE",
    "week07": 16.72,
    "week08": 23.4,
    "week09": 17.96,
    "week10": 13.12,
    "week11": 20.78,
    "week12": 5.18,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96, 13.12, 20.78, 5.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.1, 22.3, 19.7, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 17.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 15.92,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 17.72,
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
    "headlineNews": "Underwhelming in Week 12 loss",
    "report": "Brissett completed 16 of 25 passes for 129 yards with no touchdowns or interceptions and rushed four times for 20 yards and a touchdown in the Colts' 20-17 loss to the Texans on Thursday.",
    "analysis": "Brissett's final passing line says it all as far as how lackluster the air attack was Thursday, even with the return to action of T.Y. Hilton (calf). The fourth-year quarterback's passing yardage total served as a season low for him in a non-injury-shortened game, and it was his second straight sub-200-yard effort overall while playing all four quarters. Hilton was on a snap limit of sorts Thursday -- which certainly didn't help Brissett overall -- but he also failed to connect with two of his other wideouts, Marcus Johnson and Zach Pascal. Brissett did manage his third rushing touchdown of the campaign with a five-yard score in the latter portion of the second quarter, but he'll look to significantly boost his passing production at the expense of the Titans in Week 13.",
    "timestamp": "2019-11-21 09:05 PM",
    "week01": 16.5,
    "week02": 17.34,
    "week03": 20.8,
    "week04": 23.5,
    "week05": 11.94,
    "week06": "BYE",
    "week07": 27.64,
    "week08": 9.48,
    "week09": 2.76,
    "week10": "DNP",
    "week11": 16.12,
    "week12": 13.16,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76, 'DNP', 16.12, 13.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 'DNP', 13.8, 19.2, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 17.4,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 3,
    "avg_fp2": 19.19,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 19.41,
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
    "headlineNews": "Bombarded by Bucs in Week 12 loss",
    "report": "Ryan completed 23 of 46 pass attempts for 271 yards, while committing one interception, absorbing six sacks and losing one fumble during Sunday's 35-22 loss to the Buccaneers.",
    "analysis": "The 2016 MVP continues to produce choppy results following a red-hot start to the season. Ryan exceeded the 300-yard mark every game between Weeks 1 and 6, but since being beleaguered by an ankle injury, he's been held under 275 passing yards in three of his past four outings, while throwing to a mediocre 3:3 TD:INT. A matchup against Tampa Bay's struggling secondary permitted an optimistic fantasy outlook for Ryan coming into Sunday, so taking on New Orleans' top-12 pass defense Week 13 does little to inspire confidence for a bounce-back performance.",
    "timestamp": "2019-11-24 02:06 PM",
    "week01": 20.56,
    "week02": 22.1,
    "week03": 23.46,
    "week04": 15.68,
    "week05": 34.9,
    "week06": 30.94,
    "week07": 3.56,
    "week08": "DNP",
    "week09": "BYE",
    "week10": 15.58,
    "week11": 16.44,
    "week12": 8.64,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE', 15.58, 16.44, 8.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.6, 15.3, 22.0, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 17.2,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 17.38,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 22.02,
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
    "headlineNews": "Demonstrates trademark accuracy",
    "report": "Brees completed 30 of 39 pass attempts, throwing for 311 yards, three touchdowns and one interception during Sunday's 34-31 win against the Panthers.",
    "analysis": "The 12-time Pro Bowl signal-caller has been his typically dominant self since returning from the thumb injury that cost him five games earlier this year, completing 76.5 percent of his pass attempts and throwing to a 9:2 TD:INT since Week 8. Brees remains a top-shelf fantasy option heading into his Week 13 matchup against Atlanta, as he will be facing a Falcons defense Thanksgiving night that surrendered 313 passing yards and three touchdowns to Tampa Bay's Jameis Winston on Sunday.",
    "timestamp": "2019-11-24 03:02 PM",
    "week01": 21.8,
    "week02": 0.52,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 25.92,
    "week09": "BYE",
    "week10": 11.48,
    "week11": 21.12,
    "week12": 23.44,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48, 21.12, 23.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.4, 17.6, 21.9, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 17.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 22.63,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 12.12,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Miserable day in Foxboro",
    "report": "Prescott completed 19 of 33 passes for 212 yards and an interception in Sunday's 13-9 loss to the Patriots.",
    "analysis": "Between the rain and New England's stifling defense, Prescott came away with his worst performance of the season as the Dallas offense failed to score a touchdown for the first time all year. The fourth-year QB will continue his toughest stretch of the season when the Cowboys host the Bills in Week 13.",
    "timestamp": "2019-11-24 08:39 PM",
    "week01": 33.4,
    "week02": 28.66,
    "week03": 23.54,
    "week04": 8.62,
    "week05": 26.22,
    "week06": 18.18,
    "week07": 21.56,
    "week08": "BYE",
    "week09": 22.48,
    "week10": 26.88,
    "week11": 31.56,
    "week12": 7.88,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48, 26.88, 31.56, 7.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.6, 15.4, 16.9, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574630.png",
    "name": "Jeff Driskel",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 17.0,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 6,
    "avg_fp2": 20.53,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 14.18,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Remains limited Tuesday",
    "report": "Driskel (hamstring) was a limited participant at Tuesday's walkthrough, Tim Twentyman of the Lions' official site reports.",
    "analysis": "Driskel has a cap on his reps this week, the result of a hamstring that's remains \"pretty sore,\" coach Matt Patricia told Twentyman. According to Dave Birkett of the Detroit Free Press, Patricia said the Lions are taking Driskell's health \"day by day.\" As a result, Driskel's listing on Wednesday's injury report could be telling for his Week 13 availability.",
    "timestamp": "2019-11-26 02:24 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 18.56,
    "week11": 27.46,
    "week12": 15.58,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 18.56, 27.46, 15.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 11.3, 17.8, 21.4, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 16.9,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 8,
    "avg_fp2": 17.12,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 21.06,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Quiet performance in win",
    "report": "Brady completed 17 of 37 passes for 190 yards and a touchdown in Sunday's 13-9 win over the Cowboys.",
    "analysis": "Neither offense could get much going on a rainy afternoon in Foxboro, but Brady was still able to connect with N'Keal Harry for a 10-yard TD in the first quarter that ended up being the difference in the game. It's the fifth time in the last six games the veteran QB has thrown one or fewer touchdowns, but Brady should get an opportunity to produce better fantasy value in Week 13's road game against a vulnerable Texans secondary.",
    "timestamp": "2019-11-24 09:05 PM",
    "week01": 25.64,
    "week02": 24.66,
    "week03": 20.14,
    "week04": 4.7,
    "week05": 24.92,
    "week06": 22.96,
    "week07": 12.96,
    "week08": 18.36,
    "week09": 14.1,
    "week10": "BYE",
    "week11": 8.54,
    "week12": 11.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE', 8.54, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.1, 'BYE', 14.7, 18.2, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 16.8,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 12,
    "avg_fp2": 22.46,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 9.6,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Bounces back in Week 12 win",
    "report": "Watson completed 19 of 30 passes for 298 yards with two touchdowns and one interception in the Texans' 20-17 win over the Colts on Thursday. He also rushed three times for 10 yards and had one fumble but recovered it.",
    "analysis": "Following a forgettable sub-200-yard showing against the Ravens just four days prior, Watson came out looking like a completely different quarterback and had his deep ball working particularly well. The third-year signal-caller hit DeAndre Hopkins for beautifully thrown touchdown passes of 35 and 30 yards. He also connected with Will Fuller on throws of 44 and 51 yards, which helped him to come within two yards of his fourth 300-yard effort of the campaign on a relatively modest 19 completions. With the loss to Baltimore now exorcised, Watson will take on the daunting challenge of the Patriots defense in a Week 13 matchup, a week from this coming Sunday.",
    "timestamp": "2019-11-21 08:37 PM",
    "week01": 31.72,
    "week02": 12.86,
    "week03": 25.84,
    "week04": 11.6,
    "week05": 41.74,
    "week06": 33.4,
    "week07": 17.52,
    "week08": 27.76,
    "week09": 19.74,
    "week10": "BYE",
    "week11": 4.96,
    "week12": 19.92,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76, 19.74, 'BYE', 4.96, 19.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 21.8, 'BYE', 20.4, 21.2, 16.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14877.png",
    "name": "Nick Foles",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 16.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 10,
    "avg_fp2": 14.24,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 23.43,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Remains starting quarterback",
    "report": "Coach Doug Marrone suggested after Sunday's 42-20 loss to the Titans that Foles will remain the Jaguars' starting quarterback, Gene Frenette of The Florida Times-Union reports. \"We got to figure it out with the guys we have,\" Marrone said, when asked about a potential change under center. \"You got to keep fighting. You got to keep trying.\"",
    "analysis": "In his first two games since returning from a fractured left clavicle, Foles has completed 68.4 percent of his pass attempts, but he's generally struggled to move the offense (6.0 YPA) while the Jaguars have lost both contests handily. Though the Jaguars now sit at 4-7 and received generally strong play from rookie Gardner Minshew earlier this season, Marrone apparently isn't ready to throw the towel in on Foles. The veteran signal caller will at least find himself in a favorable spot in Week 13, taking on a Buccaneers defense has surrendered 289.9 yards per game through the air (31st in the NFL) and 26 passing touchdowns (tied for 30th) this season.",
    "timestamp": "2019-11-25 08:47 AM",
    "week01": 7.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 18.84,
    "week12": 16.88,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.84, 16.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.7, 12.8, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 16.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 31,
    "avg_fp2": 17.55,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 22.36,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Back-to-back stellar showings",
    "report": "Darnold completed 20 of 29 passes for 315 yards and two touchdowns in Sunday's 34-3 win over the Raiders. He also rushed four times for 16 yards and a touchdown.",
    "analysis": "For the second time in three games, Darnold kept the ball on an option play near the goal line for a rushing score, with this one coming from four yards out in the second quarter. His first pass of the second half went 69 yards to Braxton Berrios, and Darnold tossed a one-yard touchdown to Ryan Griffin on the next play before adding another one-yard touchdown to Robby Anderson to cap the following drive. With 608 yards and a 6:1 TD:INT through the air plus a rushing score in the past two weeks, Darnold has worked his way onto the Week 13 QB1 radar given his juicy matchup against the 0-11 Bengals.",
    "timestamp": "2019-11-24 03:38 PM",
    "week01": 15.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": 20.62,
    "week07": -2.66,
    "week08": 17.62,
    "week09": 13.5,
    "week10": 21.7,
    "week11": 26.42,
    "week12": 28.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5, 21.7, 26.42, 28.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.3, 12.6, 15.5, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 15.9,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 21,
    "avg_fp2": 13.68,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 18.43,
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
    "headlineNews": "Plays well in defeat",
    "report": "Allen completed 23 of 36 passes for 256 yards and three touchdowns while adding a nine-yard rush in Sunday's 34-31 loss to the Saints.",
    "analysis": "Allen threw touchdowns of 51 and two yards to D.J. Moore, sandwiching a one-yard touchdown pass to Christian McCaffrey in between those scores. He did well to lead his team out of 14-0 and 31-18 holes, actually tying the score at 31-31 before the Saints won it with a field goal as time expired. This was a nice bounce-back performance from Allen after his forgettable zero-touchdown, four-interception outing against Atlanta in the previous game, and he should build on this effort in Week 13 against the Redskins.",
    "timestamp": "2019-11-24 02:56 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 24.34,
    "week04": 3.28,
    "week05": 11.64,
    "week06": 17.38,
    "week07": "BYE",
    "week08": 3.32,
    "week09": 15.88,
    "week10": 14.48,
    "week11": 9.7,
    "week12": 23.14,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 24.34, 3.28, 11.64, 17.38, 'BYE', 3.32, 15.88, 14.48, 9.7, 23.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 23.2, 14.9, 14.1, 17.7, 'BYE', 6.8, 14.7, 13.5, 16.1, 13.7, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127051.png",
    "name": "Devlin Hodges",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 15.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 8.95,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 19.53,
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
    "headlineNews": "Named Week 13 starter",
    "report": "Hodges has been named the starting quarterback for Sunday's game against the Browns, Mark Kaboly of The Athletic reports.",
    "analysis": "Hodges took over for a struggling Mason Rudolph this past Sunday in Cincinnati, completing five of 11 passes for 118 yards and one TD. Most of that production occurred on a 79-yard scoring strike to James Washington, but Hodges nonetheless has fared reasonably well in three appearances this season, averaging a shade under 8.0 yards per attempt while tossing two touchdowns versus one interception. He'll look for continued success against Cleveland's seventh-ranked pass defense (217.2 yards per game) this weekend.",
    "timestamp": "2019-11-26 09:14 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 9.08,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 8.82,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.08, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 15.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 19,
    "avg_fp2": 20.89,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 17.35,
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
    "headlineNews": "Produces three TDs in loss",
    "report": "Murray completed 24 of 33 passes for 150 yards and two touchdowns while gaining 67 rushing yards and a TD on eight carries in Sunday's 36-26 loss to the 49ers.",
    "analysis": "The San Francisco defense did a fairly good job shutting down Arizona's passing game, but it couldn't contain Murray's scrambling, as the rookie QB picked up his third rushing score of the year while also throwing multiple TDs for the third straight game. The No. 1 pick in the 2019 draft is putting together a strong first season in the NFL, and he'll get a well-earned break during the Cards' bye before the team hosts the Rams in Week 13.",
    "timestamp": "2019-11-17 05:22 PM",
    "week01": 24.62,
    "week02": 18.36,
    "week03": 19.82,
    "week04": 17.34,
    "week05": 24.32,
    "week06": 28.8,
    "week07": 6.96,
    "week08": 10.1,
    "week09": 25.04,
    "week10": 27.76,
    "week11": 26.7,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04, 27.76, 26.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 19.9, 10.8, 'BYE', 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 14.9,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 24,
    "avg_fp2": 20.65,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 14.64,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Pops up on injury report",
    "report": "Allen was listed on Tuesday's injury report with a knee injury.",
    "analysis": "Allen recorded a season-low 43-percent snap share during this past Sunday's loss to the Titans, and his practice status will likely be monitored as the week progresses. If he's unable to shake the affliction by Sunday's game against the Buccaneers, the Jaguars' pass rush would take a major hit since the rookie leads the team with eight sacks.",
    "timestamp": "2019-11-26 11:54 AM",
    "week01": 17.96,
    "week02": 22.22,
    "week03": 21.32,
    "week04": 11.72,
    "week05": 18.46,
    "week06": "BYE",
    "week07": 21.28,
    "week08": 17.26,
    "week09": 17.6,
    "week10": 25.44,
    "week11": 33.84,
    "week12": 20.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44, 33.84, 20.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 20.8, 13.0, 18.8, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 14.4,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 7,
    "avg_fp2": 14.15,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 25.35,
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
    "headlineNews": "Lousy in blowout loss",
    "report": "Goff completed 26 of 37 passes for 212 yards and two interceptions in Monday night's 45-6 loss to the Ravens.",
    "analysis": "Goff saw his team fall behind by 14 points early, and although that demanded he pass the ball more often, he couldn't make anything happen. That futility came despite starting wideouts Brandin Cooks and Robert Woods both returning to the fold, but top target Cooper Kupp actually hurt Goff by dropping a pass that was then intercepted on his final attempt of the night. With another pick thrown to former teammate Marcus Peters earlier in the night, Goff now sports five interceptions versus zero touchdowns over his last three games. That horrible stretch puts his stock at a low point ahead of Week 13's trip to Arizona.",
    "timestamp": "2019-11-25 09:26 PM",
    "week01": 10.44,
    "week02": 19.12,
    "week03": 16.16,
    "week04": 23.68,
    "week05": 18.9,
    "week06": 1.12,
    "week07": 25.02,
    "week08": 22.88,
    "week09": "BYE",
    "week10": 5.72,
    "week11": 6.22,
    "week12": 6.38,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE', 5.72, 6.22, 6.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 15.8, 14.6, 10.4, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 12.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 32,
    "avg_fp2": 7.43,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 16.76,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Wrist",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Tending to wrist injury",
    "report": "Interim coach Bill Callahan said Haskins is tending to a \"slight wrist injury\" in the aftermath of Sunday's 19-16 win over the Lions, JP Finlay of NBC Sports Washington reports.",
    "analysis": "Callahan suggested Haskins' injury was likely just a bruise, so at this stage, the rookie doesn't look to be in any major danger of missing the Week 13 matchup with the Panthers. When he met with the media shortly after leading Washington to his first career win as a starter, Haskins acknowledged that the wrist contributed to his struggles throwing the football in the contest, per Kyle Stackpole of the Redskins' official site. Haskins completed only 13 of 29 attempts for 156 yards, no touchdowns and one interception and ran three times for 28 yards while losing a fumble in the victory.",
    "timestamp": "2019-11-25 12:25 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.58,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.32,
    "week09": 7.16,
    "week10": "BYE",
    "week11": 20.06,
    "week12": 6.04,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.58, 'DNP', 'DNP', 'DNP', 0.32, 7.16, 'BYE', 20.06, 6.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 7.0, 'DNP', 'DNP', 'DNP', 1.9, 9.0, 'BYE', 15.9, 19.7, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 12.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 18.2,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 18.66,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Leads big comeback",
    "report": "Cousins completed 29 of 35 passes for 319 yards and three touchdowns during Sunday's 27-23 win over Denver. He lost a fumble during the contest.",
    "analysis": "It was a tale of two halves as the Denver defense absolutely harassed Cousins before halftime, but the red-hot passer was able to lead touchdown drives on all four of Minnesota's possessions in the second half. The prettiest was a 54-yard bomb to Stefon Diggs early in the fourth quarter to bring Minnesota to within a score. Cousins sold a beautiful play-action fake, slid way out to his left and found Diggs flying up field. Cousins has been a completely different quarterback since Week 4's loss to Chicago, completing at least 70 percent of his passes in six of seven games and boasting a TD:INT of 18:1 all while Minnesota has gone on a 6-1 run. Next up, after the bye, is a visit to Seattle, where the Seahawks have struggled against the pass this season.",
    "timestamp": "2019-11-17 01:56 PM",
    "week01": 14.32,
    "week02": 10.9,
    "week03": 12.56,
    "week04": 7.32,
    "week05": 20.54,
    "week06": 28.32,
    "week07": 29.18,
    "week08": 11.6,
    "week09": 21.3,
    "week10": 21.3,
    "week11": 22.86,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3, 21.3, 22.86, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 19.8, 13.5, 'BYE', 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574511.png",
    "name": "Brandon Allen",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 11.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 29,
    "avg_fp2": 8.62,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 14.39,
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
    "headlineNews": "Continues descent",
    "report": "Allen completed 18 of 25 passes for 82 yards and an interception during Sunday's 20-3 loss in Buffalo. He added eight yards on two carries.",
    "analysis": "Those stats are not a typo, as Allen completed just three of his 14 attempts in the second half for a total of seven yards. Facing a stingy Buffalo defense and unable to cut through the wind with his middling arm, Allen did not complete a pass on Denver's final five drives of the game. Still, the game was within reach for much of the game, and a Broncos interception set Allen up in Buffalo territory late in the second quarter. He promptly had a miscommunication with Courtland Sutton and sailed an interception. Allen's solid, winning effort against the Browns feels like a season ago, and the clock on a potential starting opportunity for rookie Drew Lock (thumb) is likely ticking.",
    "timestamp": "2019-11-24 04:10 PM",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 17.02,
    "week10": "BYE",
    "week11": 14.4,
    "week12": 3.08,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.02, 'BYE', 14.4, 3.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4, 'BYE', 14.8, 8.1, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 11.9,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 17.3,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 16.64,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Four total touchdowns",
    "report": "Tannehill connected on 14 of his 18 pass attempts for 259 yards and two touchdowns in the team's Week 12 win over the Jaguars. He also added seven carries for 40 yards and another pair of scores.",
    "analysis": "Tannehill found the end zone on a 21-yard rush to put the Titans up 7-0, hurdling through a pair of defenders at the goal line. While that was the team's only score of the first half, Tannehill led the offense to five touchdowns in the first six offensive possessions of the final two quarters. While Derrick Henry did plenty of the work, Tannehill also contributed a substantial amount. The highlight came on a touchdown pass to A.J. Brown, in which Tannehill hit the rookie wideout on a slant across the middle, which Brown then turned upfield for a 65-yard score. Tannehill also capped the scoring with a three-yard rushing touchdown -- his second of the game -- to put the Titans up 42-17. Tannehill should have another opportunity to put forward a strong showing in Week 13 against the Colts.",
    "timestamp": "2019-11-24 04:46 PM",
    "week01": -0.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.36,
    "week07": 20.18,
    "week08": 19.42,
    "week09": 25.04,
    "week10": 18.94,
    "week11": "BYE",
    "week12": 32.36,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.36, 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.1, 12.2, 18.8, 11.7, 19.5, 'BYE', 14.7, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 11.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 12.19,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 20.73,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Posts highest yardage total of season",
    "report": "Trubisky completed 25 of 41 passes for 278 yards, one touchdown and two interceptions while adding 18 rushing yards and another touchdown in Chicago's 19-14 win over the Giants on Sunday.",
    "analysis": "For the third game in a row, Trubisky came out ice cold for the entire first half, but he turned things around by leaning heavily upon Allen Robinson in the second half to carve out a solid fantasy performance. This was the second time in three games in which he's accounted for multiple touchdowns, though he'll continue to be a low-upside option in leagues that start two quarterbacks.",
    "timestamp": "2019-11-24 02:26 PM",
    "week01": 9.22,
    "week02": 5.6,
    "week03": 20.44,
    "week04": -1.64,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 22.04,
    "week08": 8.12,
    "week09": 6.5,
    "week10": 19.72,
    "week11": 11.0,
    "week12": 20.92,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5, 19.72, 11.0, 20.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.8, 11.5, 15.4, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 10.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 17.22,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 13.45,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Solid effort in blowout win",
    "report": "Garoppolo completed 14 of 20 pass attempts for 253 yards and two touchdowns in Sunday's 37-8 win over Green Bay.",
    "analysis": "The 49ers' rushing attack was bottled up for the fourth-straight week, but Garoppolo was there to shoulder the load with another efficient day at the office. The polarizing quarterback is averaging 310.5 yards and 2.8 touchdowns across those four contests where opposing defenses attempted to take the running game out of the equation, and those are numbers that may silence the gunslinger's nationwide critics that arose during San Francisco's undefeated first half of the season. We could see more of the same from Garoppolo next week as the Ravens have been tougher against opposing rushing attacks compared to aerial assaults.",
    "timestamp": "2019-11-24 10:44 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7, 16.1, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 10.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 26,
    "avg_fp2": 13.39,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 16.49,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Three total TDs in loss",
    "report": "Fitzpatrick completed 21 of 39 passes for 214 yards with two touchdowns and two interceptions in the Dolphins' 41-24 loss to the Browns on Sunday. He also rushed five times for 45 yards and another score and committed one fumble but recovered.",
    "analysis": "The veteran signal-caller celebrated his 37th birthday with a few highlights that were interspersed with a pair of turnovers against an aggressive Browns defense. Fitzpatrick connected with Mike Gesicki and Allen Hurns for his pair of passing scores, but with Miami down by four touchdowns before it was able to get into the end zone, Fitzpatrick frequently faced plenty of crowded secondaries that were keyed in on defending the pass. Fitzpatrick clearly continues to give the Dolphins a fighting chance with his play on most weeks, and he'll look to help deliver the team's third win in a Week 13 battle against the Eagles.",
    "timestamp": "2019-11-24 02:17 PM",
    "week01": 11.2,
    "week02": 1.16,
    "week03": 1.16,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.78,
    "week07": 21.58,
    "week08": 13.3,
    "week09": 23.72,
    "week10": 14.06,
    "week11": 12.92,
    "week12": 25.06,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3, 23.72, 14.06, 12.92, 25.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 15.2, 14.2, 10.6, 16.3, 10.3]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 19.7,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 17,
    "avg_fp2": 15.27,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 20.72,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Delivers in passing game",
    "report": "Kamara ran for 54 yards on 11 carries and caught all nine of his targets for 48 yards during Sunday's 34-31 win against the Panthers.",
    "analysis": "Those who selected Kamara over Christian McCaffrey in fantasy drafts this past summer are still kicking themselves. Though the third-year back hasn't been quite as dominant as his NFC South counterpart through 12 weeks of the 2019 campaign, Kamara continues to churn out excellent fantasy performances by virtue of his pass-catching acumen. Kamara has not exceeded 75 rushing yards in any game since accounting for 97 yards in the season opener against Houston, but he's averaged an amazing eight receptions per game over his past five appearances, after compiling just five catches per game Weeks 1 through 4. He projects to be a top-flight running back option for Week 13, with the Saints taking on a Falcons defense that has conceded 27-plus points in five of its past seven outings.",
    "timestamp": "2019-11-24 02:37 PM",
    "week01": 20.6,
    "week02": 6.5,
    "week03": 32.6,
    "week04": 10.4,
    "week05": 13.92,
    "week06": 10.1,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 11.4,
    "week11": 17.2,
    "week12": 14.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4, 17.2, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.7, 13.2, 18.3, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 18.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 9.79,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.38,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Dominates Cards backfield Sunday",
    "report": "Drake carried the ball 16 times for 67 yards while catching six of seven targets for 13 yards in Sunday's 36-26 loss to the 49ers.",
    "analysis": "Meanwhile, David Johnson failed to touch the ball at all in this game, as Christian Kirk got the only other non-Kyler Murray carry for the Cards on a jet sweep. Drake has quickly established himself as Arizona's No. 1 RB since being liberated from Miami, totaling 283 scrimmage yards and a TD in three games for his new team, but it remains to be seen if he'll continue to dominate backfield touches coming out of the Cards' Week 12 bye.",
    "timestamp": "2019-11-17 05:29 PM",
    "week01": 3.7,
    "week02": 7.3,
    "week03": 6.7,
    "week04": 8.8,
    "week05": "DNP",
    "week06": 10.0,
    "week07": 7.3,
    "week08": "DNP",
    "week09": 26.2,
    "week10": 7.1,
    "week11": 11.0,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP', 26.2, 7.1, 11.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 11.4, 4.5, 6.3, 'BYE', 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 18.7,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 8,
    "avg_fp2": 16.16,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 21.33,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Tops 100 scrimmage yards in loss",
    "report": "Elliott carried the ball 21 times for 86 yards and caught all four of his targets for 40 yards in Sunday's 13-9 loss to the Patriots.",
    "analysis": "Rain put a damper on both team's offenses, but Elliott was still able to deliver triple-digit scrimmage yards for the sixth time in 11 games. The fourth-year RB is now 81 yards shy of the 1,000-yard mark for the third time in his career, a milestone he'll try to reach at home on Thanskgiving against the Bills.",
    "timestamp": "2019-11-24 08:44 PM",
    "week01": 12.8,
    "week02": 19.0,
    "week03": 14.9,
    "week04": 13.5,
    "week05": 16.1,
    "week06": 23.7,
    "week07": 23.7,
    "week08": "BYE",
    "week09": 13.9,
    "week10": 7.3,
    "week11": 18.3,
    "week12": 14.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9, 7.3, 18.3, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.6, 21.0, 11.4, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 18.6,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 9,
    "avg_fp2": 27.35,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.24,
    "fanduelSalary": "$11000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Another fantasy gem",
    "report": "McCaffrey rushed 22 times for 64 yards and a touchdown while catching all nine of his targets for 69 yards and a touchdown in Sunday's 34-31 loss to the Saints.",
    "analysis": "McCaffrey had a one-yard touchdown among his nine catches, and he later added a four-yard score on the ground. The multi-faceted running back now has 12 rushing scores and four more through the air, and McCaffrey has caught the ball 20 times in his last two games alone. Even when he doesn't do much on a per-touch basis, McCaffrey's nose for the end zone and heavy volume week in and week out make him arguably the most valuable asset in the fantasy realm.",
    "timestamp": "2019-11-24 02:16 PM",
    "week01": 37.9,
    "week02": 6.3,
    "week03": 26.3,
    "week04": 28.9,
    "week05": 44.7,
    "week06": 19.7,
    "week07": "BYE",
    "week08": 25.5,
    "week09": 34.1,
    "week10": 23.1,
    "week11": 24.6,
    "week12": 29.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1, 23.1, 24.6, 29.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 28.1, 19.0, 15.7, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 17.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 21,
    "team_rank": 16,
    "avg_fp2": 12.06,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.63,
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
    "headlineNews": "Gains 68 yards",
    "report": "Lindsay ran for 57 yards on 13 attempts and added an 11-yard catch during Sunday's 20-3 loss in Buffalo.",
    "analysis": "Lindsay was unable to shake loose against the Bills, but his 4.4 yards-per-carry average was all the more impressive considering the Denver pass offense did not pose a threat throughout the game. Lindsay is dangerous when he's able to get to the edge and slash through the line. That's becoming increasingly difficult as defenses have learned not to fear Brandon Allen's arm on dropbacks. A middle-of-the-road Chargers pass defense awaits Sunday, but Lindsay's value may ride on whether Allen is back under center or whether the Drew Lock era is upon us.",
    "timestamp": "2019-11-24 04:23 PM",
    "week01": 8.6,
    "week02": 8.6,
    "week03": 27.0,
    "week04": 6.5,
    "week05": 22.7,
    "week06": 14.5,
    "week07": 3.7,
    "week08": 10.1,
    "week09": 15.2,
    "week10": "BYE",
    "week11": 8.5,
    "week12": 7.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1, 15.2, 'BYE', 8.5, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.8, 'BYE', 11.5, 15.1, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 16.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 30,
    "avg_fp2": 12.91,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 24.43,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Over 100 scrimmage yards",
    "report": "Bell rushed 12 times for 49 yards and caught all five of his targets for 59 yards in Sunday's 34-3 win over the Raiders.",
    "analysis": "Bell topped 100 yards from scrimmage, but his fantasy owners will certainly be left wanting more considering his team won in blowout fashion. Quarterback Sam Darnold scored a four-yard rushing touchdown and threw for a pair of one-yard scores, preventing Bell from capitalizing on the team's opportunities in close. Bell has just four total touchdowns this season, but this scoreless game interrupted a two-game touchdown streak. He'll have a nice opportunity to get back into the end zone against the winless Bengals in Week 13.",
    "timestamp": "2019-11-24 01:52 PM",
    "week01": 20.2,
    "week02": 15.9,
    "week03": 8.3,
    "week04": "BYE",
    "week05": 12.3,
    "week06": 11.8,
    "week07": 8.1,
    "week08": 5.0,
    "week09": 16.1,
    "week10": 14.8,
    "week11": 16.2,
    "week12": 13.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1, 14.8, 16.2, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.3, 15.5, 18.8, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 16.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 11,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 27.27,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Lays egg against Jets",
    "report": "Jacobs rushed 10 times for 34 yards and caught his lone target for two yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "Jacobs and starting quarterback Derek Carr were both taken out of the game late in the third quarter with the Raiders trailing 34-3. The rookie running back still is locked in as Oakland's workhorse on the ground, but nothing went right for his team in this one. He'll have an opportunity to bounce back against the vulnerable Chiefs run defense Week 13, in a game the Raiders will need to win to keep pace in the AFC West.",
    "timestamp": "2019-11-24 01:29 PM",
    "week01": 23.8,
    "week02": 9.9,
    "week03": 4.4,
    "week04": 11.8,
    "week05": 27.8,
    "week06": "BYE",
    "week07": 14.9,
    "week08": 9.1,
    "week09": 24.0,
    "week10": 17.6,
    "week11": 12.1,
    "week12": 4.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1, 24.0, 17.6, 12.1, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 16.6, 18.4, 16.7, 22.3, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 15.5,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 21,
    "avg_fp2": 13.44,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 25.05,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Limited in loss",
    "report": "Barkley rushed 17 times for 59 yards and caught two of three targets for one yard in Sunday's 19-14 loss to the Bears.",
    "analysis": "Chicago's defense did a good job of limiting Barkley, especially as a receiver out of the backfield, as he set season lows in both catches and receiving yards. Barkley has been mostly a decoy in the red zone, as he remains stuck on just two rushing touchdowns and one receiving score this season. He's also failed to eclipse 100 yards on the ground since doing so in each of the season's first two games. Barkley will hope to get back on track when the Packers come to town in Week 13.",
    "timestamp": "2019-11-24 02:24 PM",
    "week01": 15.9,
    "week02": 21.0,
    "week03": 5.7,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 15.5,
    "week08": 24.3,
    "week09": 12.5,
    "week10": 5.6,
    "week11": "BYE",
    "week12": 7.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3, 12.5, 5.6, 'BYE', 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.3, 19.2, 'BYE', 14.7, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 15.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 20,
    "avg_fp2": 9.79,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 23.16,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Bulls his way to TD in win",
    "report": "Jones rushed 12 times for 51 yards and a touchdown and secured all three targets for 16 yards in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "Jones split run-game work almost evenly with Peyton Barber, who logged 11 carries himself. However, it was Jones who got a touchdown opportunity and made good with it, powering his way into the end zone from four yards out to cap off the opening drive of the second half for the Buccaneers. The score was Jones' fifth of the season, all of which have come on the ground. The second-year back will look to follow up his solid performance when he faces the vulnerable Jaguars run defense Week 13.",
    "timestamp": "2019-11-24 01:53 PM",
    "week01": 9.8,
    "week02": 0.9,
    "week03": 12.6,
    "week04": 14.7,
    "week05": 6.6,
    "week06": 7.0,
    "week07": "BYE",
    "week08": 5.7,
    "week09": 15.2,
    "week10": 18.6,
    "week11": 2.4,
    "week12": 14.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2, 18.6, 2.4, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 8.8, 12.2, 10.3, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 2,
    "avg_fp2": 12.52,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 17.62,
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
    "headlineNews": "Score saves mediocre day",
    "report": "Coleman rushed 11 times for 39 yards and a touchdown while catching two passes (four targets) for 10 yards in Sunday's 37-8 win over the Packers.",
    "analysis": "Coleman had trouble finding any running room behind his offensive line for the fourth consecutive week. The 26-year-old has averaged just 29.0 yards (2.6 yards per carry) on the ground over that four-game span, 2.5 of which have been without his co-starter Matt Breida (ankle). The road doesn't get any easier for Coleman, as a top-10 rush defense is on tap on the road against Baltimore in Week 13. He remains in flex territory as the touch leader of a committee backfield and recent favorite for goal-line touches.",
    "timestamp": "2019-11-24 10:11 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3, 16.5, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 14.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 14,
    "avg_fp2": 16.2,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 14.02,
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
    "headlineNews": "Scores twice in workhorse effort",
    "report": "Fournette carried 24 times for 97 yards and two touchdowns Sunday against the Titans. He also caught nine of 12 targets for an additional 62 yards in the 42-20 loss.",
    "analysis": "Fournette managed just 4.0 yards per carry but nearly reached the 100-yard mark on the ground through sheer volume. He scored one-yard touchdowns on back-to-back drives in the second half and rounded out this excellent performance with a career high in receptions as his team played catchup for much of the afternoon. This was exactly what Fournette's fantasy owners wanted to see after he managed just 57 scrimmage yards on 15 touches last week and came in with just one touchdown to his name. He will face Tampa Bay's elite run defense next Sunday, but his involvement in the passing game and near the goal line should keep him firmly in fantasy lineups.",
    "timestamp": "2019-11-25 05:18 AM",
    "week01": 9.4,
    "week02": 10.7,
    "week03": 12.2,
    "week04": 25.5,
    "week05": 21.7,
    "week06": 14.8,
    "week07": 15.5,
    "week08": 17.1,
    "week09": 9.7,
    "week10": "BYE",
    "week11": 9.2,
    "week12": 32.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 10.7, 12.2, 25.5, 21.7, 14.8, 15.5, 17.1, 9.7, 'BYE', 9.2, 32.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 20.3, 9.3, 11.8, 13.6, 9.1, 15.3, 16.4, 10.4, 'BYE', 16.6, 13.3, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 14.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 6,
    "avg_fp2": 13.96,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 15.85,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Falls behind Penny",
    "report": "Carson rushed eight times for 26 yards and caught all four targets for 31 yards in Sunday's 17-9 win over the Eagles.",
    "analysis": "Carson played second fiddle to Rashaad Penny's hot hand, as Penny rumbled for 129 yards and a touchdown. Penny out-carried Carson 14-8 and registered 123 more rushing yards, although the former couldn't haul in his only target. Carson did fumble once -- he recovered -- but his backseat assignment was mainly attributed to how well Penny played, as Penny showed explosiveness, taking six carries for six or more yards while Carson did so just once. It remains to be seen to what degree Penny will cut into Carson's usage in the upcoming weeks, but coach Pete Carroll often went to the hot hand last season and may do the same going forward. Carson will look to bounce back in Week 13 against the Vikings.",
    "timestamp": "2019-11-24 01:41 PM",
    "week01": 21.1,
    "week02": 8.2,
    "week03": 3.6,
    "week04": 16.5,
    "week05": 18.8,
    "week06": 23.9,
    "week07": 8.9,
    "week08": 15.0,
    "week09": 12.3,
    "week10": 17.6,
    "week11": "BYE",
    "week12": 7.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.1, 8.2, 3.6, 16.5, 18.8, 23.9, 8.9, 15.0, 12.3, 17.6, 'BYE', 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 16.0, 17.3, 8.9, 11.2, 14.7, 10.4, 11.5, 11.9, 19.2, 'BYE', 17.5, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 14.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 3,
    "avg_fp2": 21.25,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 18.65,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Breaks through to cap comeback",
    "report": "Cook ran for 26 yards and a touchdown on 11 carries and added five catches for 31 yards during Sunday's 27-23 win over Denver.",
    "analysis": "Cook wasn't getting much of anything going against the Denver front in the first half and didn't do much better in the second half, though the Vikings were more successful getting him the ball in the screen game, and he did find the end zone on a three-yard zone run early in the fourth quarter. Sunday was Cook's second smallest yardage total of the season and only the third time in 11 games in which he was held under 100 yards from scrimmage. He has scored in all three of those games and remains arguably the most dependable back in the league. After the bye, Cook and the Vikings will visit Seattle's middle-of-the-pack run defense.",
    "timestamp": "2019-11-17 02:10 PM",
    "week01": 25.0,
    "week02": 26.6,
    "week03": 22.3,
    "week04": 16.0,
    "week05": 22.8,
    "week06": 12.4,
    "week07": 27.4,
    "week08": 25.6,
    "week09": 13.6,
    "week10": 27.8,
    "week11": 14.2,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6, 27.8, 14.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 11.2, 16.7, 'BYE', 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 13.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 10,
    "avg_fp2": 16.83,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.05,
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
    "headlineNews": "Scores with 164 scrimmage yards",
    "report": "Chubb carried 21 times for 106 yards during Sunday's 41-24 win over the Dolphins. He also caught three of four targets for 58 additional yards.",
    "analysis": "Chubb exploited this favorable matchup to the tune of 5.0 yards per carry, as he topped the 100-yard mark for the fifth time this season. He also notched a new season high in receiving yardage thanks to a couple of big plays in the passing game. Kareem Hunt scored a short rushing touchdown in the first half, but Chubb got one of his own in the final minutes to end a four-game run without a TD. The second-year back continues to produce at a strong rate and will look to do so again next Sunday against the Steelers.",
    "timestamp": "2019-11-24 01:37 PM",
    "week01": 10.0,
    "week02": 17.8,
    "week03": 15.1,
    "week04": 37.8,
    "week05": 10.4,
    "week06": 26.4,
    "week07": "BYE",
    "week08": 10.3,
    "week09": 11.1,
    "week10": 13.1,
    "week11": 9.2,
    "week12": 23.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1, 13.1, 9.2, 23.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 20.8, 19.3, 20.9, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 13.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 9.65,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.35,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Leading rusher in win",
    "report": "Michel carried the ball 20 times for 85 yards in Sunday's 13-9 win over the Cowboys.",
    "analysis": "The wet conditions didn't make much of an impact on Michel, who topped 80 rushing yards for the first time since Week 6. The second-year RB hasn't found the end zone in four straight games, limiting his fantasy utility, but Michel will try to end that scoring slump in Week 13's road tilt against the Texans.",
    "timestamp": "2019-11-24 09:08 PM",
    "week01": 1.4,
    "week02": 12.5,
    "week03": 7.1,
    "week04": 6.3,
    "week05": 19.8,
    "week06": 12.3,
    "week07": 21.9,
    "week08": 7.4,
    "week09": 3.5,
    "week10": "BYE",
    "week11": 5.4,
    "week12": 8.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE', 5.4, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.5, 'BYE', 15.4, 12.4, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 13.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 12.16,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 19.29,
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
    "headlineNews": "Totals 90 yards in defeat",
    "report": "Gordon rushed 14 times for 69 yards and caught three of five targets for 21 yards in Monday night's 24-17 loss to the Chiefs.",
    "analysis": "Gordon had a few nice gains, including a 21-yard rush during the first quarter. That helped him put together a third straight game with at least 4.0 yards per carry, continuing his progress following a slow start. Although the tailback dropped a pass late, he also totaled 90 yards from scrimmage for the third outing in a row. Despite his recent touchdown streak ending, he'll take some nice momentum into the Chargers' bye week.",
    "timestamp": "2019-11-18 09:09 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.8,
    "week06": 6.3,
    "week07": 7.9,
    "week08": 10.4,
    "week09": 24.4,
    "week10": 19.8,
    "week11": 10.5,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4, 19.8, 10.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 15.2, 11.4, 'BYE', 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 12.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 11.78,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.38,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Zero touches in Sunday's loss",
    "report": "Johnson failed to touch the ball in Sunday's 36-26 loss to the 49ers.",
    "analysis": "Coach Kliff Kingsbury suggested during the week he would use a backfield committee Sunday, but it turned out to be a committee of one as Kenyan Drake turned 22 touches into 80 scrimmage yards. It's not clear whether Johnson's lack of use was due to strategy, him still not being 100 percent or some other reason, but his relegation to a backup role since the acquisition of Drake is a serious concern to anyone with fantasy shares in the RB. The Cards will be on bye Week 12, and Chase Edmonds (hamstring) could get healthy during the break, creating even more competition for Johnson down the stretch.",
    "timestamp": "2019-11-17 05:35 PM",
    "week01": 22.7,
    "week02": 7.9,
    "week03": 15.5,
    "week04": 17.9,
    "week05": 17.1,
    "week06": 25.2,
    "week07": 0.2,
    "week08": "DNP",
    "week09": "DNP",
    "week10": -0.5,
    "week11": 0.0,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 7.9, 15.5, 17.9, 17.1, 25.2, 0.2, 'DNP', 'DNP', -0.5, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 14.9, 13.0, 12.0, 18.7, 15.2, 15.6, 'DNP', 'DNP', 10.8, 10.8, 'BYE', 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 12.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 24,
    "avg_fp2": 12.06,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 21.61,
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
    "headlineNews": "Season low in scrimmage yards",
    "report": "Gurley rushed six times for 22 yards and caught all three of his targets for minus-three yards in Monday night's 45-6 loss to the Ravens.",
    "analysis": "Gurley entered Monday coming off a season-high 28 touches, but after the Rams fell behind early, the game script worked against him. In the end, Los Angeles passed 37 times and ran it just nine, but Gurley struggled to make an impact even when he got the ball. In what had already been a disappointing season to date, his 19 scrimmage yards marked a low point. Of course, the Rams' offense was slowed in general, but both it and Gurley will still aim for big improvements in Week 13 versus the Cardinals.",
    "timestamp": "2019-11-25 08:45 PM",
    "week01": 10.6,
    "week02": 14.2,
    "week03": 4.3,
    "week04": 22.5,
    "week05": 17.2,
    "week06": "DNP",
    "week07": 11.9,
    "week08": 10.4,
    "week09": "BYE",
    "week10": 7.3,
    "week11": 18.8,
    "week12": 3.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE', 7.3, 18.8, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.9, 14.6, 8.3, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 11.8,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.51,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Shoulder still hurting",
    "report": "Coach Doug Pederson said Howard still hasn't regained full strength in his shoulder and will likely be limited to individual work in practices to begin Week 13, Mike Kaye of The Newark Star-Ledger reports.",
    "analysis": "Pederson described Howard as day-to-day, a label he typically gives to players when he's unsure of their availability for an upcoming game. In Howard's case, his lack of noteworthy progress in his recovery from the stinger since the Eagles' Week 10 bye doesn't offer much early assurance that he'll be able to avoid a third straight absence Sunday versus Miami. While Howard sat out the Week 12 loss to the Seahawks, Miles Sanders remained the Eagles' lead back, gaining 86 yards on 15 touches while playing 84 percent of the offensive snaps.",
    "timestamp": "2019-11-25 09:33 AM",
    "week01": 6.5,
    "week02": 3.1,
    "week03": 9.7,
    "week04": 31.0,
    "week05": 12.2,
    "week06": 4.9,
    "week07": 6.6,
    "week08": 17.6,
    "week09": 14.8,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6, 14.8, 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 10.0, 'BYE', 'DNP', 'DNP', 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980077.png",
    "name": "Jonathan Williams",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 10.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 3,
    "avg_fp2": 8.72,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Slated to start Week 13",
    "report": "Williams is in line to be the Colts' starting running back Week 13 against the Titans with Marlon Mack (hand) ruled out, Mike Chappell of Fox 59 News Indianapolis reports.",
    "analysis": "Williams provided generous dividends to fantasy owners who were wise enough to stash him or lucky enough pick him up after Mack went down, as he rumbled for 104 yards and a touchdown on 26 carries and caught all three targets for 17 yards in Week 12's loss to the Texans. He's slated to lead the backfield again, while Nyheim Hines and Jordan Wilkins rotate in reserve.",
    "timestamp": "2019-11-25 02:18 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 0.0,
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.1,
    "week11": 15.2,
    "week12": 19.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 0.1, 15.2, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.9, 'BYE', 'DNP', 'DNP', 'DNP', 1.0, 1.3, 7.5, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 10.9,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 5,
    "avg_fp2": 11.01,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 19.95,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Tallies 114 yards in win",
    "report": "Singletary ran for 106 yards on 21 carries and added an eight-yard catch during Sunday's 20-3 win over Denver.",
    "analysis": "The Broncos came into Sunday as one of the stingier run defenses in the league over the past month or so, but Singletary plugged away for his first career 100-yard rushing performance. The rookie has been magnificent moving the chains this season, averaging 5.9 yards per carry despite just five carries of over 20 yards and none of 25 or more yards this season. His role is continuing to increase, with at least 16 touches in three of his last four games, and he should be counted on Thursday against a Dallas defense that is ranked in the top 10 in the league against the pass but one that has been a little more generous against the run this season.",
    "timestamp": "2019-11-24 02:04 PM",
    "week01": 12.3,
    "week02": 11.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 2.6,
    "week08": 12.9,
    "week09": 21.5,
    "week10": 6.5,
    "week11": 8.7,
    "week12": 11.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5, 6.5, 8.7, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 16.2, 10.2, 12.9, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843750.png",
    "name": "Derrius Guice",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 10.8,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 25.12,
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
    "headlineNews": "Bottled up in win",
    "report": "Guice ran for 32 yards on 10 carries and had a six-yard catch during Sunday's 19-16 win over Detroit.",
    "analysis": "Guice enjoyed an even split of work Sunday with veteran Adrian Peterson, both struggling to gain many yards on 11 total touches apiece. Washingon's rush offense has struggled over the past two weeks, and while Peterson can hang his hat on a handful of big performances from earlier the season, Guice is averaging just 2.7 yards per carry in three games this season. A favorable matchup comes Sunday against a Carolina defense that surrenders 4.9 yards per carry, but opponents figure to crowd the box until rookie quarterback Dwayne Haskins poses a more consistent threat.",
    "timestamp": "2019-11-24 02:48 PM",
    "week01": 5.3,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 13.4,
    "week12": 4.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.4, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.0, 14.2, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 10.4,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 19,
    "avg_fp2": 17.96,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 20.4,
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
    "headlineNews": "Bottled up on ground",
    "report": "Jones rushed 13 times for 38 yards and did not have a reception in Sunday's 37-8 loss to San Francisco.",
    "analysis": "The 49ers schemed a near-perfect gameplan against the Packers, stuffing Jones on the ground while limiting Aaron Rodgers to just 104 passing yards. Fantasy owners may have become accustomed to the 24-year-old's inconsistencies on the ground this season, as his fantasy point totals seem to be either monstrous or minuscule. Luckily for Jones and his owners, the Packers will have two very fantasy-friendly matchups against the Giants and the Redskins on tap, creating strong bounce-back potential for the offense as a whole.",
    "timestamp": "2019-11-24 09:37 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6, 17.9, 'BYE', 12.1, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 9.7,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 31,
    "avg_fp2": 10.92,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 14.45,
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
    "headlineNews": "Practices without limitations",
    "report": "Freeman (foot) was a full participant in Tuesday's practice, D. Orlando Ledbetter of The Atlanta Journal-Constitution reports.",
    "analysis": "This is Freeman's first full-speed practice since suffering a foot sprain Nov. 10, and he's on track to suit up Thursday against the Saints. Brian Hill was unproductive in Freeman's stead with 1.8 yards per carry, while rookie Qadree Ollison wasn't much better with a 2.6 mark. Thus, barring a \"pitch count\" for Freeman, he should lead Atlanta's backfield against a strong Saints run defense.",
    "timestamp": "2019-11-26 01:27 PM",
    "week01": 2.6,
    "week02": 7.9,
    "week03": 11.0,
    "week04": 14.0,
    "week05": 15.5,
    "week06": 25.3,
    "week07": 3.5,
    "week08": 12.2,
    "week09": "BYE",
    "week10": 6.3,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 7.9, 11.0, 14.0, 15.5, 25.3, 3.5, 12.2, 'BYE', 6.3, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 14.3, 12.7, 11.6, 13.4, 8.3, 11.4, 11.9, 'BYE', 14.3, 'DNP', 'DNP', 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126367.png",
    "name": "Bo Scarbrough",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 9.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 18,
    "avg_fp2": 7.8,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 20.92,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Barrels through Washington defense",
    "report": "Scarbrough ran for 98 yards on 18 carries and was unable to haul in his only target of Sunday's 19-16 loss to Washington. He lost a fumble during the contest.",
    "analysis": "It was as if Scarbrough was back on the Crimson Tide on Sunday, as the big-bodied back cut through Washington's defense, particularly on a 30-yard outside run during the opening drive of the second half that set up Detroit's only touchdown of the afternoon. The lost fumble put a damper on things, but he did not lose a fumble in three years at Alabama so it should not be considered an issue. In a two-game sample size with the Lions, Scarbrough looks as though he'll be able to provide Detroit the rushing threat it needs for a balanced attack down the stretch. He'll be tested Thursday against a Bears defense surrendering just 3.6 yards per opponent carry, fourth best in the NFL.",
    "timestamp": "2019-11-24 03:56 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 7.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 9.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 10,
    "avg_fp2": 10.43,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.05,
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
    "headlineNews": "Scores rushing TD vs. Dolphins",
    "report": "Hunt carried eight times for 37 yards and a touchdown Sunday against the Dolphins. He also caught two of three targets for nine yards in the 41-24 win.",
    "analysis": "Hunt fared well on the ground against a porous Miami defense, averaging 4.6 yards per carry while scoring a six-yard rushing touchdown in the second quarter. He was rather quiet in the passing game, however, which limited the extent to which he exploited this favorable matchup. Still, Hunt received double-digit touches yet again and should have a useful role again next Sunday against the Steelers.",
    "timestamp": "2019-11-24 01:50 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 10.9,
    "week11": 8.8,
    "week12": 11.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.9, 8.8, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.5, 9.4, 12.1, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 9.2,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 1,
    "avg_fp2": 15.79,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 14.1,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Steamrolls Rams in rout",
    "report": "Ingram rushed 15 times for 111 yards and a touchdown in Monday night's 45-6 win over the Rams. He also caught his lone target for a seven-yard touchdown.",
    "analysis": "Ingram punished Los Angeles in the running game, averaging nearly 7.5 yards per carry while ripping off a long of 25. For his first score, however, Ingram dove in from one yard. He then doubled his touchdown tally with an angle route during the second half, surprisingly giving him three scores through the air over the last two weeks. With four 100-yard rushing performances this season as well, Ingram is in great form ahead of Week 13's top-heavy tussle with the 49ers, whose stingy defense will attempt to slow the Ravens' electric offense.",
    "timestamp": "2019-11-25 08:34 PM",
    "week01": 22.7,
    "week02": 8.7,
    "week03": 33.5,
    "week04": 7.6,
    "week05": 11.9,
    "week06": 14.4,
    "week07": 5.8,
    "week08": "BYE",
    "week09": 13.4,
    "week10": 9.4,
    "week11": 22.0,
    "week12": 24.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4, 9.4, 22.0, 24.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.5, 12.4, 12.8, 8.1, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 9.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 7,
    "avg_fp2": 9.98,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 12.66,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Solid in Week 12 win",
    "report": "Hyde rushed 16 times for 67 yards in the Texans' 20-17 win over the Colts on Thursday.",
    "analysis": "Hyde led the Texans' backfield as usual, but he often found running room hard to come by against a stingy Colts front. The veteran back accrued almost half his production on a 33-yard scamper in the third quarter, leaving him with just an average of just 2.3 yards per tote on his other 15 carries. Hyde should continue in his usual lead-back capacity in a tough matchup versus the Patriots in Week 13, a week from Sunday.",
    "timestamp": "2019-11-21 09:10 PM",
    "week01": "DNP",
    "week02": 9.0,
    "week03": 7.9,
    "week04": 8.4,
    "week05": 12.0,
    "week06": 17.5,
    "week07": 3.5,
    "week08": 8.3,
    "week09": 14.0,
    "week10": "BYE",
    "week11": 12.5,
    "week12": 6.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE', 12.5, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 6.8, 'BYE', 11.5, 6.5, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 9.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 7,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 12.66,
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
    "headlineNews": "Quiet night in win",
    "report": "Johnson had five carries for 22 yards and caught his lone target for eight yards in Thursday's 20-17 win over the Colts in Week 12.",
    "analysis": "The 30 combined yards were the fewest for Johnson since Week 3, and this was the third time in 11 games with only one target. He remains a very capable alternate to starter Carlos Hyde and a receiving threat, but Johnson has not been targeted nearly as much as his days with Cleveland.",
    "timestamp": "2019-11-22 04:29 AM",
    "week01": 11.0,
    "week02": 3.1,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.2,
    "week06": 12.4,
    "week07": 6.6,
    "week08": 11.4,
    "week09": 16.6,
    "week10": "BYE",
    "week11": 5.4,
    "week12": 3.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE', 5.4, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.2, 'BYE', 6.7, 6.1, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 9.0,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 22,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.55,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Done for day",
    "report": "Williams (ribs) has been ruled out for the remainder of Monday's game against the Chargers.",
    "analysis": "While being tackled by veteran linebacker Thomas Davis in the second quarter, Williams took a knee to the rib cage and spent multiple minutes on the ground. While he was eventually able to walk off the field under his own power, it's possible Williams will miss more action. In the meantime, LeSean McCoy and Darrel Williams will take over at running back for the remainder of Monday's game.",
    "timestamp": "2019-11-18 07:38 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9, 'BYE', 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 8.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 16.87,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 19.29,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Big receiving game versus Chiefs",
    "report": "Ekeler rushed five times for 24 yards and caught eight of 11 targets for 108 yards in Monday night's 24-17 loss to the Chiefs.",
    "analysis": "Ekeler was handed nine fewer carries than Melvin Gordon, but totaled 42 more scrimmage yards thanks to a superb effort in the passing game. The tailback caught a 37-yard reception on the Chargers' first offensive drive and was routinely targeted on underneath routes afterward. Overall, he easily led the team in receiving yards and tied Keenan Allen for the high in grabs, sending him into the bye week on a good note individually.",
    "timestamp": "2019-11-18 09:19 PM",
    "week01": 36.4,
    "week02": 20.3,
    "week03": 11.6,
    "week04": 26.7,
    "week05": 14.8,
    "week06": 4.3,
    "week07": 22.0,
    "week08": 9.2,
    "week09": 11.3,
    "week10": 11.8,
    "week11": 17.2,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3, 11.8, 17.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 14.3, 7.3, 'BYE', 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 20,
    "avg_fp2": 6.82,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 23.16,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Solid workload in win",
    "report": "Barber rushed 11 times for 32 yards and failed to bring in his only target in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "Barber notably only saw one fewer carry than backfield mate Ronald Jones, and he got just one target to Jones' three in the passing game. Although coach Bruce Arians made mention of Jones as his lead back several weeks ago, the reality is Barber and Jones appear destined to remain in a fairly even timeshare the rest of the way. That naturally does fantasy managers of either player no favor, but Barber will look to put together one of his occasional touchdown-dependent fantasy performances Week 13 against the Jaguars' vulnerable run defense.",
    "timestamp": "2019-11-24 02:02 PM",
    "week01": 5.5,
    "week02": 15.4,
    "week03": 6.5,
    "week04": 7.9,
    "week05": 9.6,
    "week06": 2.8,
    "week07": "BYE",
    "week08": 3.3,
    "week09": 1.5,
    "week10": 11.2,
    "week11": 8.1,
    "week12": 3.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3, 1.5, 11.2, 8.1, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 7.8, 4.8, 5.7, 5.3, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 7.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 11,
    "avg_fp2": 3.77,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 27.27,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Leading receiver in blowout loss",
    "report": "Richard rushed twice for four yards and caught six of seven targets for 47 yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "Richard saw some extra playing time with Josh Jacobs getting removed in the third quarter of the blowout loss to avoid any potential injuries to the starter. The receiving back made the most of his usage, leading the team in catches, targets and receiving yards thanks to his work on checkdowns. While Richard could get some extended opportunities if the Raiders fall behind against the Chiefs in Week 13, he remains little more than a fringe PPR play.",
    "timestamp": "2019-11-24 03:53 PM",
    "week01": 0.3,
    "week02": 1.5,
    "week03": 4.4,
    "week04": 2.3,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.2,
    "week08": 3.7,
    "week09": 8.3,
    "week10": 6.3,
    "week11": 1.2,
    "week12": 8.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 1.5, 4.4, 2.3, 4.2, 'BYE', 1.2, 3.7, 8.3, 6.3, 1.2, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 4.0, 6.3, 4.4, 6.6, 'BYE', 4.3, 4.0, 6.0, 6.5, 6.5, 10.8, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128774.png",
    "name": "Kalen Ballage",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 7.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank": 5,
    "team_rank": 32,
    "avg_fp2": 4.07,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 18.45,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Retains starting job",
    "report": "Coach Brian Flores said Monday that Ballage will remain the starter this week, Barry Jackson of the Miami Herald reports.",
    "analysis": "Despite averaging a miserable 1.9 yards per carry and 4.5 yards per catch through 11 contests, Ballage will retain his grasp on the starting gig for the time being. Rookies Patrick Laird and Myles Gaskin have garnered increased usage in recent weeks -- Laird logged 23 snaps on offense during Sunday's loss to the Browns while Gaskin played 16 snaps -- so Miami's backfield could grow to more closely represent a timeshare as the season continues, unless Ballage is able to start producing more consistently.",
    "timestamp": "2019-11-25 11:44 AM",
    "week01": 1.7,
    "week02": 1.7,
    "week03": 3.2,
    "week04": 0.7,
    "week05": "BYE",
    "week06": 6.7,
    "week07": 6.7,
    "week08": 2.4,
    "week09": 1.9,
    "week10": 6.5,
    "week11": 10.2,
    "week12": 3.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 1.7, 3.2, 0.7, 'BYE', 6.7, 6.7, 2.4, 1.9, 6.5, 10.2, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.4, 5.0, 3.2, 'BYE', 2.5, 3.8, 4.3, 3.0, 7.6, 9.2, 8.5, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 7.3,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 17,
    "avg_fp2": 10.2,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 20.72,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Breaks off 26-yard TD run",
    "report": "Murray ran for 64 yards and a touchdown on seven rush attempts during Sunday's 34-31 win against the Panthers.",
    "analysis": "The 29-year-old hammer did most of his damage early on, logging four of his seven carries and 44 of his 64 rushing yards during the first quarter. Of course, much of that production came on a single game-shifting play, as Murray's 26-yard TD run helped the Saints cap a successful seven-play opening drive. While his three-game spree of 17 combined receptions and 121 receiving yards between Weeks 6 and 8 appears to be a facade -- given that he's only compiled four catches for 12 yards in three games since -- Murray continues to churn out scores on the ground. He has four rushing TDs over his past five outings heading into a Week 13 matchup against Atlanta's middling rush defense.",
    "timestamp": "2019-11-24 03:43 PM",
    "week01": 11.7,
    "week02": 2.8,
    "week03": 0.2,
    "week04": 2.5,
    "week05": 4.4,
    "week06": 9.4,
    "week07": 29.5,
    "week08": 32.2,
    "week09": "BYE",
    "week10": 2.9,
    "week11": 4.2,
    "week12": 12.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE', 2.9, 4.2, 12.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.3, 3.9, 5.2, 5.7, 4.8, 6.9, 5.7, 'BYE', 7.5, 2.6, 8.9, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 7.3,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 9.35,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.51,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Leads backfield",
    "report": "Sanders rushed the ball 12 times for 63 yards in the team's Week 12 loss to the Seahawks. He also added three receptions on five targets for 23 yards.",
    "analysis": "Sanders tallied 15 total touches, matching the highest mark of his rookie campaign. He was largely bottled up on the ground in the first half, but he managed more than five yards on seven of his carries overall. Sanders also contributed in the passing game, and he has now recorded at least three receptions in five of his last six contests. While Sanders appears to be gaining a foothold in the offense, Jordan Howard (shoulder) may be ready to return in Week 13 as the Eagles take on the Dolphins, complicating the touch distribution in the backfield once again.",
    "timestamp": "2019-11-24 02:32 PM",
    "week01": 3.2,
    "week02": 5.2,
    "week03": 11.6,
    "week04": 7.2,
    "week05": 8.4,
    "week06": 16.7,
    "week07": 4.7,
    "week08": 21.3,
    "week09": 8.8,
    "week10": "BYE",
    "week11": 5.7,
    "week12": 10.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE', 5.7, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 8.6, 'BYE', 6.2, 12.4, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 7.3,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 29,
    "avg_fp2": 9.68,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 26.06,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Disappointing performance",
    "report": "Montgomery rushed 13 times for 22 yards and caught two passes for nine yards in the Bears' 19-14 victory over the Giants on Sunday.",
    "analysis": "Even though he appeared fully recovered from the ankle injury that limited him last week, he continued to split work fairly equally with Tarik Cohen, and aside from a 13-yard run, Montgomery was unable to generate much yardage after contact. Despite his poor performance, this was the first time in five games that he failed to post at least 50 yards from scrimmage, and he should be considered a low-end starting option for fantasy managers.",
    "timestamp": "2019-11-24 02:59 PM",
    "week01": 5.0,
    "week02": 13.3,
    "week03": 9.6,
    "week04": 8.2,
    "week05": 10.1,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 22.7,
    "week09": 21.1,
    "week10": 6.0,
    "week11": 5.5,
    "week12": 4.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1, 6.0, 5.5, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 15.4, 12.6, 8.1, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 7.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 12,
    "avg_fp2": 17.48,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 16.45,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Erupts in win over Jaguars",
    "report": "Henry carried the ball 19 times for 159 yards and two touchdowns in the team's Week 12 win over the Jaguars. He also added one catch for 16 yards.",
    "analysis": "Henry delivered a trademark 74-yard touchdown run early in the third quarter, shrugging off tackles and outracing defenders down the field. After the Jaguars fumbled the ensuing kickoff, he found the end zone for a second time -- this time dragging defenders to the goal line for a 12-yard score. Henry continues to demolish opponents, as Sunday marked his second consecutive two-touchdown game with more than 150 yards on the ground. He'll draw a matchup against the Colts in Week 13.",
    "timestamp": "2019-11-24 04:29 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.4, 12.0, 'BYE', 16.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116721.png",
    "name": "Jaylen Samuels",
    "depthchart": "Backup: RB-2",
    "team": "Pittsburgh Steelers",
    "projected": 6.9,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 25,
    "avg_fp2": 6.91,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.65,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Only five touches vs. Bengals",
    "report": "Samuels carried two times for six yards and caught three passes for 26 additional yards during Sunday's 16-10 win over the Bengals.",
    "analysis": "With James Conner (shoulder) ruled out again, Samuels seemed poised for a prominent role against Cincinnati's vulnerable defense. He finished tied for fifth on the team in carries, however, and wasn't as heavily targeted in the passing game as many would've expected. Benny Snell returned from a knee injury to lead the team with 22 touches, and he appears to be the go-to option out of the backfield for as long as Conner remains sidelined. As such, Samuels isn't a particularly desirable fantasy option next Sunday against the Browns.",
    "timestamp": "2019-11-24 02:14 PM",
    "week01": 1.1,
    "week02": 3.6,
    "week03": 0.0,
    "week04": 19.54,
    "week05": 1.96,
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": 12.8,
    "week10": 5.5,
    "week11": 13.0,
    "week12": 4.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.6, 0.0, 19.54, 1.96, 'DNP', 'BYE', 'DNP', 12.8, 5.5, 13.0, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.4, 3.8, 5.8, 13.2, 'DNP', 'BYE', 'DNP', 8.1, 11.3, 3.4, 10.5, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.8,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 9.28,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.35,
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
    "headlineNews": "Just two carries Sunday",
    "report": "White logged 21 of a possible 70 snaps on offense in Sunday's 13-9 win over the Cowboys, en route to carrying twice for five yards and catching one pass (on three targets) In for minus-6 yards.",
    "analysis": "In rainy conditions at Foxborough on Sunday, lead back Sony Michel recorded 20 carries for 85 yards, while QB Tom Brady was limited to 17 completions and 190 passing yards. White thus turned in his second straight low-impact outing, following a previous string of PPR-worthy efforts. He'll no doubt have games going forward where he's more involved in the Patriots' passing attack, but with Rex Burkhead also in the team's change-of-pace mix, White's fantasy utility down the stretch largely will depend on weekly game scripts and score-dictated game flows.",
    "timestamp": "2019-11-25 09:09 AM",
    "week01": 10.7,
    "week02": 10.4,
    "week03": "DNP",
    "week04": 9.8,
    "week05": 10.2,
    "week06": 9.0,
    "week07": 9.4,
    "week08": 9.9,
    "week09": 15.4,
    "week10": "BYE",
    "week11": 7.6,
    "week12": 0.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE', 7.6, 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 11.7, 'DNP', 5.4, 8.8, 8.1, 4.8, 4.8, 4.5, 'BYE', 9.1, 7.6, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 6.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 21,
    "team_rank": 16,
    "avg_fp2": 8.17,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.63,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Continues decline",
    "report": "Freeman ran for 20 yards on two carries and added nine yards on two receptions during Sunday's 20-3 loss in Buffalo.",
    "analysis": "Freeman's four touches marked a season low and his 29 total yards were his second lowest total of the season. The lack of usage is especially surprising as he led Denver running backs with 28 offensive snaps, totaling 56 percent of the team's plays. Part of that can be attributed to Freeman's role as a third-down pass-blocking back, but Freeman's steady decline is still surprising. After totaling double-digit touches in each of the first three games of the season, he hasn't reached 10 in any of his last three contests. Sunday brings a matchup against a middle-of-the-road Chargers run defense, but Freeman may not get the touches necessary to take advantage.",
    "timestamp": "2019-11-25 06:24 PM",
    "week01": 6.6,
    "week02": 12.7,
    "week03": 9.3,
    "week04": 7.0,
    "week05": 7.7,
    "week06": 10.1,
    "week07": 14.7,
    "week08": 11.0,
    "week09": 1.9,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 3.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 12.7, 9.3, 7.0, 7.7, 10.1, 14.7, 11.0, 1.9, 'BYE', 5.0, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.0, 4.1, 5.0, 8.3, 5.5, 6.0, 5.8, 5.0, 'BYE', 5.3, 5.9, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Backup: RB-2",
    "team": "Washington Redskins",
    "projected": 6.5,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 7.36,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 25.12,
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
    "headlineNews": "Tallies 49 yards in win",
    "report": "Peterson ran for 27 yards on 10 carries and added a 22-yard catch during Sunday's 19-16 win over the Lions.",
    "analysis": "The Lions stuffed the run for most of the game, but Peterson made a difference in the passing game late in the fourth quarter, cutting across the middle for a 22-yard catch-and-run to help set up a game-tying field goal. On the ground, Peterson was held under three yards per carry for the fifth time in 10 games this season. Though he averaged 5.1 yards per carry during an impressive four-game stretch from Weeks 6 through 9, he's averaged just 2.7 yards per game in his other six contests, including his last two outings. Sunday brings a favorable matchup against Carolina's 29th-ranked run defense (4.9 yards per carry allowed), but the Panthers figure to key on Peterson unless rookie Dwayne Haskins takes a step forward in the passing game.",
    "timestamp": "2019-11-24 02:56 PM",
    "week01": "DNP",
    "week02": 10.2,
    "week03": 3.9,
    "week04": 2.8,
    "week05": 1.8,
    "week06": 14.6,
    "week07": 6.1,
    "week08": 11.3,
    "week09": 13.5,
    "week10": "BYE",
    "week11": 4.0,
    "week12": 5.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.2, 3.9, 2.8, 1.8, 14.6, 6.1, 11.3, 13.5, 'BYE', 4.0, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 8.3, 9.3, 9.2, 11.1, 8.8, 7.2, 11.6, 'BYE', 8.0, 8.7, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577654.png",
    "name": "DeAndre Washington",
    "depthchart": "Reserve: RB-3",
    "team": "Oakland Raiders",
    "projected": 6.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 11,
    "avg_fp2": 3.72,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 27.27,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Held in check vs. Jets",
    "report": "Washington rushed for 19 yards on six carries and caught his lone target for no gain in Sunday's 34-3 loss to the Jets.",
    "analysis": "Washington's 13 offensive snaps Sunday were the most he's seen since Week 7 in Green Bay, but the reserve running back notched a measly average of 2.7 yards per touch against the Jets. The Raiders' offense will look to get back on track against the Chiefs while continuing to primarily rely on rookie Josh Jacobs out of the backfield.",
    "timestamp": "2019-11-26 09:25 AM",
    "week01": 0.8,
    "week02": 4.5,
    "week03": 2.2,
    "week04": 3.6,
    "week05": 11.1,
    "week06": "BYE",
    "week07": 4.6,
    "week08": 3.2,
    "week09": 3.3,
    "week10": 2.9,
    "week11": 2.3,
    "week12": 2.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 4.5, 2.2, 3.6, 11.1, 'BYE', 4.6, 3.2, 3.3, 2.9, 2.3, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 2.2, 5.8, 2.9, 4.0, 'BYE', 6.1, 2.9, 4.7, 4.7, 3.7, 8.0, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15966.png",
    "name": "Chris Thompson",
    "depthchart": "Reserve: RB-3",
    "team": "Washington Redskins",
    "projected": 6.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 8.17,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 25.12,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Sitting out another game",
    "report": "Thompson (toe) is inactive for Sunday's game against the Lions.",
    "analysis": "Thompson took a step forward this week by participating in practice on a limited basis on three occasions, but the Redskins likely want to see him put in a full workout before clearing him for game action. With Thompson sidelined for a fifth straight contest, Adrian Peterson, Derrius Guice and Wendell Smallwood should be in line to split the backfield snaps in Week 12, with Peterson and Guice representing the better bets to deliver fantasy value.",
    "timestamp": "2019-11-24 08:44 AM",
    "week01": 11.3,
    "week02": 7.6,
    "week03": 12.8,
    "week04": 8.0,
    "week05": 6.3,
    "week06": 3.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 7.6, 12.8, 8.0, 6.3, 3.0, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.6, 7.1, 8.5, 8.1, 11.5, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 6.0,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 22,
    "avg_fp2": 8.66,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.55,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Undisclosed",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Didn't enter concussion protocol",
    "report": "Coach Andy Reid relayed Monday that McCoy wasn't in the NFL's concussion protocol at the end of the Chiefs' Nov. 18 win over the Chargers, BJ Kissel of the team's official site reports.",
    "analysis": "Per the report, \"there was some confusion after the game,\" and Reid decided Monday to clear that up. In any case, this nugget suggests that following the team's Week 12 bye, McCoy should be fine for Sunday's game against the Raiders. Wednesday's injury report should confirm that, one way or the other, and at the same time provide an update on the status of  Damien Williams, who suffered a rib injury Week 11.",
    "timestamp": "2019-11-25 10:13 AM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 'DNP', 5.1, 'BYE', 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 5.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 3,
    "avg_fp2": 5.45,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Efficient in Week 12 loss",
    "report": "Hines rushed nine times for 51 yards and secured two of three targets for 10 yards in the Colts' 20-17 loss to the Texans on Thursday.",
    "analysis": "In the Colts' first game without Marlon Mack (hand) this season, Hines logged a season high in carries and parlayed it into a season-best rushing yardage tally. Hines also continued in his usual pass-catching role, so he could be poised to continue seeing extra volume if Mack also sits out a Week 13 divisional showdown with the Titans, a week from this Sunday.",
    "timestamp": "2019-11-21 09:14 PM",
    "week01": 3.7,
    "week02": 1.9,
    "week03": 4.4,
    "week04": 7.5,
    "week05": 6.5,
    "week06": "BYE",
    "week07": 2.1,
    "week08": 6.1,
    "week09": 3.3,
    "week10": 6.4,
    "week11": 11.0,
    "week12": 7.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1, 3.3, 6.4, 11.0, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.9, 7.7, 11.7, 8.5, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 5.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 28,
    "avg_fp2": 10.13,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 19.22,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Gains 79 rushing yards vs. Steelers",
    "report": "Mixon carried 18 times for 79 yards during Sunday's 16-10 loss to the Steelers.",
    "analysis": "Mixon's 18 carries were his second most since Oct. 6, and he averaged a respectable 4.4 yards per tote against a solid Pittsburgh front. He curiously wasn't involved in the passing game and finished without a target for the first time this season. Mixon has come to life as a runner over the last four weeks, averaging 86.3 yards per game while carrying at least 15 times in each contest. Consistent production as a pass catcher would benefit his fantasy stock, and he'll look to get more involved in that department next Sunday against the Jets.",
    "timestamp": "2019-11-24 02:32 PM",
    "week01": 2.7,
    "week02": 4.2,
    "week03": 16.5,
    "week04": 8.3,
    "week05": 11.4,
    "week06": 4.9,
    "week07": 6.9,
    "week08": 15.7,
    "week09": "BYE",
    "week10": 16.1,
    "week11": 16.8,
    "week12": 7.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE', 16.1, 16.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 13.5, 12.9, 11.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 5.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 1,
    "avg_fp2": 5.58,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 14.1,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Rumbles for 55 yards",
    "report": "Edwards ran for 55 yards on 14 carries during Monday's 45-6 win over the Rams.",
    "analysis": "Edwards' 14 carries Monday were high highest total since Week 1. Coming off of a game in which he posted impressive numbers against the Texans, Edwards' usage against the Rams is sure to draw some attention -- but context is important. Eleven of Edwards' carries came in the second half, with Baltimore nursing -- at minimum -- a three-score lead. Edwards certainly has the frame to be a bruising finisher, and the Ravens may be blowing a few teams out down the stretch, but it will be somewhat of a shock if Sunday's opponent, the 49ers, are one of them. That said, don't be surprised if Baltimore goes particularly run heavy against a San Francisco defense that ranks tops in the league against the pass, but can be run on.",
    "timestamp": "2019-11-26 04:13 PM",
    "week01": 5.6,
    "week02": 1.1,
    "week03": 7.8,
    "week04": 4.1,
    "week05": 2.8,
    "week06": 3.4,
    "week07": 3.5,
    "week08": "BYE",
    "week09": 8.7,
    "week10": 1.7,
    "week11": 17.2,
    "week12": 5.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7, 1.7, 17.2, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.1, 6.6, 3.7, 4.2, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 5.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 5,
    "avg_fp2": 7.05,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 19.95,
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
    "headlineNews": "Tops Barry Sanders on all-time list",
    "report": "Gore ran for 65 yards on 15 carries during Sunday's 20-3 win over Denver.",
    "analysis": "Gore did the bulk of his damage midway through the third quarter on a 27-yard sweep to the left, but a seven-yard run up the gut in the fourth quarter will get plenty more highlights. On that run, Gore passed Barry Sanders for third on the all-time rushing list. Despite the recent success of rookie Devin Singletary, Gore still leads the Bills in rushing on the season and flashed some of his old self in a run-heavy game plan Sunday. If the Bills show a more balanced attack Thursday in Dallas, Gore may not be your guy. He's now touched the ball fewer times than Singletary in four consecutive games, hasn't topped 70 total yards in a game since Week 4, and hasn't scored since Week 3.",
    "timestamp": "2019-11-24 02:14 PM",
    "week01": 2.0,
    "week02": 15.3,
    "week03": 15.9,
    "week04": 10.9,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 3.4,
    "week09": 1.5,
    "week10": 2.1,
    "week11": 5.0,
    "week12": 6.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 15.3, 15.9, 10.9, 7.9, 'BYE', 7.1, 3.4, 1.5, 2.1, 5.0, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 3.9, 11.7, 7.2, 6.5, 'BYE', 8.6, 11.3, 10.5, 4.6, 4.9, 5.2, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 5.8,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 29,
    "avg_fp2": 7.72,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 26.06,
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
    "headlineNews": "Targeted nine times",
    "report": "Cohen rushed six times for 25 yards and added seven receptions for 29 yards in the Bears' 19-14 victory over the Giants on Sunday.",
    "analysis": "For the second week in a row, Cohen led the Bears' backfield in touches, and during that time, he's posted his only performances of more than 50 yards this season. If he continues to see this level of usage as a runner and receiver, he'll be a useful flex option, especially in leagues that award a point per reception.",
    "timestamp": "2019-11-24 02:35 PM",
    "week01": 8.7,
    "week02": 3.5,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.4,
    "week08": 6.1,
    "week09": 2.6,
    "week10": 11.7,
    "week11": 15.9,
    "week12": 8.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6, 11.7, 15.9, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 10.3, 6.0, 4.7, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 5.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 8,
    "avg_fp2": 4.97,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 21.33,
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
    "headlineNews": "Can't do much in rain",
    "report": "Pollard carried the ball four times for 19 yards and caught three of four targets for nine yards in Sunday's loss to the Patriots.",
    "analysis": "The weather was miserable in Foxborough, and while Pollard saw his highest touch volume since he got eight carries Week 7 against the Eagles, the rookie wasn't able to turn them into much yardage. With his role increasing, however, Pollard could have some big-play potential in Week 13's home tilt against the Bills.",
    "timestamp": "2019-11-25 12:14 PM",
    "week01": 2.4,
    "week02": 3.0,
    "week03": 20.3,
    "week04": 0.0,
    "week05": 1.9,
    "week06": 1.3,
    "week07": 2.8,
    "week08": "BYE",
    "week09": 3.5,
    "week10": -0.4,
    "week11": 15.6,
    "week12": 4.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 3.0, 20.3, 0.0, 1.9, 1.3, 2.8, 'BYE', 3.5, -0.4, 15.6, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.4, 8.1, 6.0, 2.4, 4.3, 4.1, 'BYE', 3.6, 1.3, 1.3, 3.3, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139925.png",
    "name": "Rashaad Penny",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 6,
    "avg_fp2": 5.56,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 15.85,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Erupts for 129 yards, touchdown",
    "report": "Penny rushed 14 times for 129 yards and a touchdown in Sunday's 17-9 win over the Eagles.",
    "analysis": "Penny entered the contest with just 167 rushing yards as the secondary option to Chris Carson, but the second-year pro out-touched Carson 14-12 and outgained him by 72 yards. His day was highlighted by breaking free for a career-best 58-yard touchdown run in the fourth quarter, as he showcased the explosiveness that enticed the Seahawks to select him in the first round of the 2018 NFL Draft. Coach Pete Carroll stuck with the hot hand in this low-scoring affair, and Penny likely earned additional looks going forward. The Seahawks host Minnesota in Week 12.",
    "timestamp": "2019-11-24 01:30 PM",
    "week01": 1.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.9,
    "week06": "DNP",
    "week07": 0.0,
    "week08": 5.5,
    "week09": 1.2,
    "week10": -1.8,
    "week11": "BYE",
    "week12": 18.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 13.0, 'DNP', 'DNP', 5.9, 'DNP', 0.0, 5.5, 1.2, -1.8, 'BYE', 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.5, 'DNP', 'DNP', 5.5, 'DNP', 3.8, 2.5, 4.6, 5.5, 'BYE', 5.5, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 5.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 19,
    "avg_fp2": 10.57,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Leads team in total yardage",
    "report": "Williams rushed 11 times for 45 yards and caught seven passes (eight targets) for 35 yards in Sunday's 37-8 loss to the 49ers.",
    "analysis": "Williams continued to outpace Aaron Jones in terms of receiving work (eight targets against just one), but the carry split is a bit misleading, as the former got some extra run in the fourth quarter when backups had already entered the game for both sides. Last game's zero-catch performance is looking more like an anomaly, as Sunday proved that the 24-year-old is clearly the team's receiving back (3.9 receptions per game excluding Week 10). Williams could get a few extra carries if next week's matchup against the Giants becomes a blowout in the other direction. Otherwise, he will be best served for deep PPR formats.",
    "timestamp": "2019-11-24 10:51 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9, 6.3, 'BYE', 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 9.0, 10.3, 'BYE', 8.6, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049916.png",
    "name": "Matt Breida",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 5.0,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 2,
    "avg_fp2": 9.47,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 17.62,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Could return Week 13",
    "report": "Coach Kyle Shanahan said Breida (ankle) \"has a chance\" to play Sunday against the Ravens, Nick Wagoner of ESPN.com reports.",
    "analysis": "Breida didn't practice over the previous two weeks as he recovered from a low-ankle sprain. His initial timetable was 1-to-2 weeks, so he's approaching his expected return date. The 24-year-old running back will first need to make his presence felt at practice, and his first chance will be Wednesday.",
    "timestamp": "2019-11-25 02:10 PM",
    "week01": 3.7,
    "week02": 13.7,
    "week03": 9.8,
    "week04": "BYE",
    "week05": 26.4,
    "week06": 8.3,
    "week07": 4.1,
    "week08": 5.5,
    "week09": 10.2,
    "week10": 3.5,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 13.7, 9.8, 'BYE', 26.4, 8.3, 4.1, 5.5, 10.2, 3.5, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 7.9, 8.7, 'BYE', 5.7, 13.7, 10.0, 5.4, 7.7, 7.2, 'DNP', 'DNP', 5.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 18.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 16.3,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.0,
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
    "headlineNews": "Quiet day in Week 12 win",
    "report": "Evans secured four of eight targets for 50 yards in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "Evans tied position mate Chris Godwin for the team lead in targets, but he was a distant second in receptions and particularly receiving yardage. Evans and Godwin appear to often alternate weeks as the top target for Jameis Winston, and while Sunday was definitely Evans' turn to play second fiddle, he did eclipse the 1,000-yard mark for the sixth straight season to open his career with Sunday's tally. The multi-time Pro Bowler naturally retains plenty of upside heading into a Week 13 interconference tilt against the Jaguars.",
    "timestamp": "2019-11-24 01:59 PM",
    "week01": 3.8,
    "week02": 8.1,
    "week03": 41.0,
    "week04": 16.9,
    "week05": 0.0,
    "week06": 16.1,
    "week07": "BYE",
    "week08": 37.3,
    "week09": 30.0,
    "week10": 10.2,
    "week11": 8.9,
    "week12": 7.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 8.1, 41.0, 16.9, 0.0, 16.1, 'BYE', 37.3, 30.0, 10.2, 8.9, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 11.2, 17.1, 12.0, 14.9, 10.8, 'BYE', 8.3, 17.6, 21.2, 11.5, 13.8, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 17.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 6,
    "avg_fp2": 12.79,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.13,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Scores in defeat",
    "report": "Allen caught eight of 12 targets for 71 yards and a touchdown in Monday night's 24-17 loss to the Chiefs.",
    "analysis": "Allen not only led the Chargers in targets and tied tailback Austin Ekeler for tops in receptions, but he scored his team's only touchdown of the night as well. That came on a seven-yard grab to close the third quarter, giving the veteran receiver his first end-zone trip since Week 3. Allen now sports good momentum heading into Los Angeles' bye week, but when he returns he'll face a Broncos defense that held him to a season-low 18 receiving yards earlier this season.",
    "timestamp": "2019-11-18 09:53 PM",
    "week01": 22.3,
    "week02": 13.8,
    "week03": 37.1,
    "week04": 7.3,
    "week05": 3.8,
    "week06": 4.3,
    "week07": 8.1,
    "week08": 8.8,
    "week09": 5.5,
    "week10": 12.6,
    "week11": 17.1,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5, 12.6, 17.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.6, 13.0, 'BYE', 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 16.6,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 19.21,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 33.78,
    "fanduelSalary": "$9200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Historically prolific year persists",
    "report": "Thomas corralled 10 of 11 targets for 101 yards and a touchdown during Sunday's 34-31 win against Carolina.",
    "analysis": "Coming into Week 12, Thomas had accounted for more receptions than the Eagles' (93) and Ravens' (74) entire wide receiver corps, and by the conclusion of the first quarter against the Panthers, he had already hauled in six passes to reach the century mark for the season. With 104 grabs through 11 games thus far in 2019, Thomas finds himself on pace to break Marvin Harrison's single-season receptions record (143) by eight. It's a delectable matchup forthcoming for Thomas on Thanksgiving night, facing a Falcons defense that surrendered a combined 11 catches for 234 yards and two touchdowns to Buccaneers top targets Chris Godwin and Mike Evans on Sunday.",
    "timestamp": "2019-11-24 02:24 PM",
    "week01": 17.3,
    "week02": 13.9,
    "week03": 13.9,
    "week04": 14.0,
    "week05": 35.7,
    "week06": 12.9,
    "week07": 17.6,
    "week08": 21.8,
    "week09": "BYE",
    "week10": 21.7,
    "week11": 21.4,
    "week12": 21.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7, 21.4, 21.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 17.4, 23.6, 17.8, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 15.9,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 23,
    "avg_fp2": 9.56,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 32.35,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Sidelined in Week 12",
    "report": "Jeffery (ankle) is inactive for Sunday's game against the Seahawks.",
    "analysis": "Though he never advanced beyond limited practice participation in his Week 12 prep, the Eagles had been bullish that Jeffery would be able to shake off the ankle injury and return from a one-game absence Sunday. Unfortunately for Jeffery, his left ankle was apparently still bothering him enough in his pregame workout that the Eagles opted to err on the side of caution and hold him out for a second straight contest. With Nelson Agholor (knee) also sidelined, an already weak Eagles receiving corps will be down to Jordan Matthews, J.J. Arcega-Whiteside, Mack Hollins and Greg Ward as their lone healthy members of the position group. Given that the quartet has combined for just 14 catches for 174 yards across 36 targets this season, quarterback Carson Wentz may choose to rely more heavily on tight ends Zach Ertz and Dallas Goedert and running backs Miles Sanders and Boston Scott in the passing game.",
    "timestamp": "2019-11-24 08:32 AM",
    "week01": 19.6,
    "week02": 0.0,
    "week03": "DNP",
    "week04": 11.3,
    "week05": 8.2,
    "week06": 18.6,
    "week07": 4.8,
    "week08": 8.4,
    "week09": 5.6,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 0.0, 'DNP', 11.3, 8.2, 18.6, 4.8, 8.4, 5.6, 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.4, 8.2, 'DNP', 9.6, 11.8, 7.1, 13.1, 9.8, 11.1, 'BYE', 'DNP', 'DNP', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 15.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 8.85,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.0,
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
    "headlineNews": "Another breakout performance",
    "report": "Brown hauled in four of his five targets for 135 yards and a touchdown in the team's Week 12 win over the Jaguars.",
    "analysis": "Brown led the team in targets, receptions and yards, his third explosive performance of the season. His standout catch came halfway through the third quarter, when he caught a Ryan Tannehill pass over the middle before turning upfield for a 65-yard touchdown. He also posted several other long receptions, including gains of 36, 19 and 15 yards. While Tannehill has moved the offense more effectively than Marcus Mariota, the Titans still focus on moving the ball predominantly on the ground rather than through the air. As a result, Brown is likely to remain only a volatile producer for the remainder of the season and will face the Colts in Week 13.",
    "timestamp": "2019-11-24 05:48 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 10.2, 7.4, 'BYE', 8.3, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 15.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 10.58,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 27.75,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Finds end zone in win over Dolphins",
    "report": "Beckham caught six of eight targets for 84 yards and a touchdown during Sunday's 41-24 win over the Dolphins.",
    "analysis": "Beckham helped his team get off to a fast start with a beautiful 35-yard touchdown catch in the first quarter. He was limited mostly to short gains on his other receptions but still did enough to come away with his fourth-best receiving output of the season. Beckham's touchdown was also his first since Week 2, and he'll look to build on this effort next Sunday against the Steelers.",
    "timestamp": "2019-11-24 01:32 PM",
    "week01": 10.6,
    "week02": 25.1,
    "week03": 8.6,
    "week04": 3.0,
    "week05": 4.0,
    "week06": 13.1,
    "week07": "BYE",
    "week08": 7.7,
    "week09": 10.7,
    "week10": 8.2,
    "week11": 8.0,
    "week12": 17.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7, 8.2, 8.0, 17.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 14.7, 15.0, 20.8, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 15.2,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 12.54,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 28.95,
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
    "headlineNews": "Goes off in second half",
    "report": "Diggs caught all five of his targets for 121 yards and a touchdown during Sunday's 27-23 win over Denver.",
    "analysis": "Diggs had his lone target of the first half called back for a penalty, so he was a blank slate heading into the second half. The Vikings did well to get him into rhythm early and, though fans might have questioned why Diggs was being given such  generous cushions, he showed why midway through the fourth quarter when he burned the secondary on a double move for a 54-yard touchdown. Diggs has five touchdowns this season, but has scored them all in three games -- leaving himself scoreless in eight other contests. While that may be frustrating to fans, he has topped 100 yards in three of those eight contests and figures to continue to be fed the ball so long as Adam Thielen (hamstring) is out of the lineup. Next up, after the bye, is Seattle's 27th-ranked pass defense.",
    "timestamp": "2019-11-17 02:01 PM",
    "week01": 4.7,
    "week02": 9.4,
    "week03": 3.0,
    "week04": 12.3,
    "week05": 5.9,
    "week06": 40.0,
    "week07": 17.7,
    "week08": 15.8,
    "week09": 2.1,
    "week10": 6.4,
    "week11": 20.6,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4, 20.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5, 'BYE', 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050661.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 13.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 18.08,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.0,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Monster performance in Week 12 win",
    "report": "Godwin brought in seven of eight targets for 184 yards and two touchdowns in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "Godwin got his day started in earnest with a beautiful 71-yard touchdown grab in extremely tight coverage midway through the first quarter, giving the Buccaneers their first points of the contest. He'd eventually also make another impressive catch in much closer quarters, bringing in a one-yard scoring throw in the second quarter on a play where the ball appeared to carom into his hands off the defender's body. Godwin eclipsed the 1,000-yard mark for the season with his stellar afternoon, one that featured a career high in receiving yardage and his first 100-yard game since Week 6. The stellar third-year pro will look to follow up his memorable performance in a Week 13 interconference matchup against the in-state Jaguars.",
    "timestamp": "2019-11-24 01:49 PM",
    "week01": 12.8,
    "week02": 22.1,
    "week03": 5.5,
    "week04": 35.2,
    "week05": 28.0,
    "week06": 20.1,
    "week07": "BYE",
    "week08": 8.3,
    "week09": 10.4,
    "week10": 10.4,
    "week11": 12.2,
    "week12": 33.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 22.1, 5.5, 35.2, 28.0, 20.1, 'BYE', 8.3, 10.4, 10.4, 12.2, 33.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 6.8, 13.7, 7.9, 8.1, 8.6, 'BYE', 10.4, 13.9, 14.1, 11.8, 9.4, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 13.2,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 12,
    "avg_fp2": 14.73,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 17.36,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Finds end zone twice in Week 12 win",
    "report": "Hopkins secured six of eight targets for 94 yards and two touchdowns in the Texans' 20-17 win over the Colts on Thursday.",
    "analysis": "Hopkins was likely due for some touchdowns after recording only four over his first 10 games, but it was the way he got in the end zone Thursday that was particularly eye-catching. Hopkins crossed the goal line from 35 and 30 yards in the second and fourth quarter, respectively, the latter score proving to be the difference in the contest. The multi-time Pro Bowler clearly seemed to benefit from the return of speedy teammate Will Fuller (hamstring) to the lineup, as Hopkins was able to exploit what appeared to be man coverage on his pair of touchdowns. He'll look to continue thriving in a particularly tough matchup versus the Patriots in a Week 13 showdown, a week from Sunday.",
    "timestamp": "2019-11-21 08:51 PM",
    "week01": 27.1,
    "week02": 6.5,
    "week03": 9.7,
    "week04": 5.6,
    "week05": 12.3,
    "week06": 12.0,
    "week07": 21.1,
    "week08": 16.4,
    "week09": 15.4,
    "week10": "BYE",
    "week11": 11.5,
    "week12": 24.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4, 15.4, 'BYE', 11.5, 24.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 12.9, 'BYE', 13.1, 17.4, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 12.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 6,
    "avg_fp2": 13.34,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 21.62,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Picks up 61 yards in loss",
    "report": "Golladay caught all four of his targets for 61 yards during Sunday's 19-16 loss to Washington.",
    "analysis": "Golladay was held in check for much of Sunday, but he showed off some big-play ability early in the second quarter, taking a quick out and sprinting up the sideline for a 34-yard gain to set up a Lions field goal. Golladay has still managed to make big plays with Jeff Driskel in for Matthew Stafford (back) over the past three weeks, but there's no question that the third-year receiver misses his starting quarterback. Golladay topped 115 yards receiving in four of eight contests with Stafford throwing him the ball, but he has just 152 yards combined in three games with Driskel. Next up is a Thanksgiving matchup against the Bears, a team that limited Golladay in Week 9 before he connected with Driskel for a late 47-yard score.",
    "timestamp": "2019-11-24 03:33 PM",
    "week01": 12.2,
    "week02": 21.7,
    "week03": 2.7,
    "week04": 21.2,
    "week05": "BYE",
    "week06": 14.6,
    "week07": 2.6,
    "week08": 25.3,
    "week09": 21.2,
    "week10": 13.2,
    "week11": 3.9,
    "week12": 8.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2, 13.2, 3.9, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 13.7, 13.5, 9.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 12.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 12.19,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 28.17,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Still tending to calf concern",
    "report": "Hilton said his calf \"tightened up\" during last Thursday's loss at Houston, George Bremer of The Anderson Herald Bulletin reports.",
    "analysis": "Returning from a three-game absence, Hilton was a distant fourth among Colts wide receivers in offensive snap share, seeing 37 percent to Zach Pascal's 88 percent, Marcus Johnson's 63 percent and Chester Rogers' 61 percent. Despite that, Hilton led the group with three catches (on six targets) for 18 yards. In the wake of the game, he told Zak Keefer of The Athletic that he received treatment on his calf and intends to practice this week. Hilton will have his first chance to do so Wednesday.",
    "timestamp": "2019-11-26 10:20 AM",
    "week01": 24.7,
    "week02": 12.3,
    "week03": 16.5,
    "week04": "DNP",
    "week05": 5.7,
    "week06": "BYE",
    "week07": 16.4,
    "week08": 6.4,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 3.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.7, 12.3, 16.5, 'DNP', 5.7, 'BYE', 16.4, 6.4, 'DNP', 'DNP', 'DNP', 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.2, 11.0, 'DNP', 10.8, 'BYE', 10.8, 14.3, 'DNP', 'DNP', 'DNP', 12.5, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 12.5,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 13,
    "avg_fp2": 8.9,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 34.22,
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
    "headlineNews": "Seven catches plus score",
    "report": "Adams had seven receptions (12 targets) for 43 yards and a touchdown in Sunday's 37-8 loss to the 49ers.",
    "analysis": "Adams -- like many Green Bay offensive options -- was bottled up by San Francisco's stout defense for the majority of the contest. The 26-year-old was able to salvage a pedestrian day with a short touchdown reception late in the third quarter. It was surprisingly Adams' first touchdown reception of 2019 after he posted double-digit totals in three consecutive seasons. Missed time has certainly cut into the star wideout's scoring production, but a stronger commitment to the run under Matt LaFleur has also come into play. Adams will look to put up stronger numbers in a soft matchup against the Giants' secondary in Week 13.",
    "timestamp": "2019-11-24 09:16 PM",
    "week01": 5.6,
    "week02": 14.1,
    "week03": 7.6,
    "week04": 23.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "DNP",
    "week08": 0.0,
    "week09": 7.6,
    "week10": 15.3,
    "week11": "BYE",
    "week12": 15.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 0.0, 0.0, 'DNP', 0.0, 7.6, 15.3, 'BYE', 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 7.4, 13.2, 'DNP', 5.7, 11.3, 14.5, 'BYE', 10.4, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 12.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 14.42,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.13,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Held catchless by Pats",
    "report": "Cooper failed to catch either of his two targets in Sunday's 13-9 loss to the Patriots.",
    "analysis": "Between a constant rainfall and tight coverage by Stephon Gilmore, Cooper wasn't able to make any kind of impact and ended up with zero catches for the first time in 22 games as a Cowboy, including the postseason. Assuming his poor performance wasn't also partially the result of the lingering knee injury he's been dealing with, Cooper should be able to rebound at least somewhat in a Thanksgiving home tilt against the Bills.",
    "timestamp": "2019-11-24 08:51 PM",
    "week01": 19.6,
    "week02": 12.4,
    "week03": 23.8,
    "week04": 7.3,
    "week05": 34.1,
    "week06": 0.8,
    "week07": 13.1,
    "week08": "BYE",
    "week09": 16.0,
    "week10": 26.2,
    "week11": 5.3,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0, 26.2, 5.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.3, 10.0, 10.7, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 12.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 11,
    "avg_fp2": 13.65,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 31.72,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Accounts for just one reception",
    "report": "Lockett hauled in a 38-yard pass on two targets in Sunday's 17-9 win over the Eagles.",
    "analysis": "Lockett received clearance after suffering a shin injury during the Week 10 win over the 49ers, and he was unproductive against a normally weak Philly secondary. Despite making just one catch, Lockett led the Seahawks in receiving yards as Russell Wilson spread out his 13 completions to seven different targets. This was just the third time this season Lockett finished with less than 51 receiving yards, and he'll look to get back on track in Week 13's clash against the Vikings.",
    "timestamp": "2019-11-24 01:50 PM",
    "week01": 10.9,
    "week02": 12.9,
    "week03": 26.9,
    "week04": 7.1,
    "week05": 12.3,
    "week06": 10.3,
    "week07": 14.3,
    "week08": 13.0,
    "week09": 33.7,
    "week10": 4.4,
    "week11": "BYE",
    "week12": 4.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7, 4.4, 'BYE', 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 15.6, 12.1, 'BYE', 8.9, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 11.9,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 24,
    "avg_fp2": 13.18,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 22.68,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Salvages day with long touchdown",
    "report": "Brown caught two of four targets for 39 yards and a touchdown during Sunday's 20-3 win over Denver.",
    "analysis": "The Broncos had bottled Brown up for most of Sunday afternoon heading into the fourth quarter when, facing second and long, Brown burned his man up the sideline for a diving 34-yard touchdown. The play showed what makes Brown such a reliable fantasy contributor as he only needs a catch or two to put together a solid performance. Nearly a quarter of his receptions this season have gone for at least 20 yards and he has found the end zone thrice in his past two outings. After salvaging a tough matchup against Denver, Brown will have a quick turnaround and face another top-10 pass defense Thursday in Dallas.",
    "timestamp": "2019-11-24 02:26 PM",
    "week01": 21.8,
    "week02": 10.7,
    "week03": 7.5,
    "week04": 9.4,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 16.8,
    "week08": 7.9,
    "week09": 9.6,
    "week10": 10.2,
    "week11": 30.2,
    "week12": 10.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6, 10.2, 30.2, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 9.2, 6.7, 10.8, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 11.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 7,
    "avg_fp2": 10.49,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.45,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Tops team in receiving",
    "report": "Woods caught six of nine targets for 97 yards in Monday night's 45-6 loss to the Ravens.",
    "analysis": "Woods returned to the lineup after missing Week 11 for personal reasons, and he went on to lead the Rams in receiving. In fact, he registered at least 60 more yards than any of his teammates, even though Cooper Kupp's 10 targets topped his tally. Thanks to a season-long reception of 38 yards Monday, Woods has now gone for at least 80 yards in three of his last four outings, putting him in fine form ahead of this Sunday's matchup against the Cardinals. That being said, he's still yet to catch a touchdown this season, hurting his overall upside.",
    "timestamp": "2019-11-25 09:09 PM",
    "week01": 12.6,
    "week02": 5.2,
    "week03": 7.3,
    "week04": 22.9,
    "week05": 7.3,
    "week06": 7.6,
    "week07": 11.1,
    "week08": 5.2,
    "week09": "BYE",
    "week10": 13.0,
    "week11": "DNP",
    "week12": 12.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE', 13.0, 'DNP', 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 12.1, 'DNP', 8.8, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 11.6,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 2,
    "avg_fp2": 14.66,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Optimism regarding Week 13 status",
    "report": "Coach Andy Reid indicated Monday that he's optimistic about Hill's (hamstring) availability for Sunday's game against the Raiders, BJ Kissel of the Chiefs' official site reports.",
    "analysis": "Hill was forced out of the Chiefs' Week 11 game early with a hamstring injury, but the team's bye came at a good time for the wideout. Added clarity on his Week 13 status should arrive once the team starts practicing this week and can see how Hill's hamstring responds in the process.",
    "timestamp": "2019-11-25 10:19 AM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7, 'BYE', 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 11.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 19,
    "avg_fp2": 12.3,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.21,
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
    "headlineNews": "Notches six more catches",
    "report": "Kirk corralled six of nine passes for 41 yards and had a one-yard rush during Sunday's 36-26 loss at San Francisco.",
    "analysis": "Kirk led all Cardinals wideouts in offensive snap share, missing just one of 69 plays. He also paced the team in targets and receiving yards while matching Kenyan Drake's six receptions. With eight appearances under his belt this season, Kirk's stat line prorates to 92-1,016-6 over a full 16-game schedule, making him a must-start on a weekly basis, even if the Cardinals' passing attack isn't exactly clicking in every outing.",
    "timestamp": "2019-11-18 05:37 PM",
    "week01": 8.4,
    "week02": 14.4,
    "week03": 10.9,
    "week04": 6.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 13.8,
    "week09": 2.6,
    "week10": 34.8,
    "week11": 7.2,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6, 34.8, 7.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 19.0, 13.0, 'BYE', 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 11.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 13.16,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 27.75,
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
    "headlineNews": "Scores twice in explosive effort",
    "report": "Landry (hip) caught 10 of 13 targets for 148 yards and two touchdowns during Sunday's 41-24 win over the Dolphins.",
    "analysis": "After shrugging off a minor hip injury, Landry feasted against his former team while posting his second-best receiving output of the season. He secured a seven-yard touchdown pass in the first quarter and added another from five yards out in the third. Landry's 10 receptions were his most since Week 6 of the 2018 season, and he has now found the end zone in four straight games. He will look to continue his excellent form next Sunday against the Steelers.",
    "timestamp": "2019-11-24 01:43 PM",
    "week01": 9.7,
    "week02": 4.7,
    "week03": 7.7,
    "week04": 20.7,
    "week05": 9.5,
    "week06": 5.1,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 14.1,
    "week10": 20.2,
    "week11": 12.3,
    "week12": 31.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1, 20.2, 12.3, 31.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 8.5, 9.0, 12.0, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 11.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 16,
    "avg_fp2": 10.44,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.84,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Grounded by Jets",
    "report": "Williams caught two of six passes for 18 yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "Drops doomed the Raiders before this one got away from them, and Williams was among the culprits. Expectations were high for him coming into this meeting with an underwhelming Jets secondary, but Williams failed to live up to them with season lows in both catches and receiving yards. Oakland's No. 1 receiver will have to be better for the team to stand any chance against Kansas City in Week 13.",
    "timestamp": "2019-11-24 03:16 PM",
    "week01": 19.5,
    "week02": 13.1,
    "week03": 10.4,
    "week04": 11.1,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 16.6,
    "week09": 6.3,
    "week10": 4.0,
    "week11": 10.2,
    "week12": 2.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3, 4.0, 10.2, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.4, 10.6, 13.0, 11.2]
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
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 11.87,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 28.95,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Back on the field Tuesday",
    "report": "Thielen (hamstring) took part in Tuesday's practice, Chris Tomasson of the St. Paul Pioneer Press reports.",
    "analysis": "After injuring his right hamstring Week 7, Thielen attempted to return Week 9 at Kansas City but lasted just seven offensive snaps before leaving the contest for good. He proceeded to focus on rehab rather than practice over the Vikings' ensuing two games, and with the benefit of the team's Week 12 bye, he appears to have made significant progress in his recovery. Tuesday's session was informal, though, so his activity level won't become clear until the release of Wednesday's injury report.",
    "timestamp": "2019-11-26 10:09 AM",
    "week01": 11.8,
    "week02": 10.28,
    "week03": 19.1,
    "week04": 1.6,
    "week05": 28.5,
    "week06": 14.7,
    "week07": 9.0,
    "week08": "DNP",
    "week09": 0.0,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP', 0.0, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.5, 'DNP', 'DNP', 'BYE', 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 10.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 12.37,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 24.49,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Picks up concussion in Week 12",
    "report": "Tate was placed in the NFL's concussion protocol Monday.",
    "analysis": "After getting back one of their starting wideouts (Sterling Shepard) from a five-game absence due to a concussion in Sunday's 19-14 loss to the Bears, the Giants now have another receiver tending to a head injury in the aftermath of the contest. According to the team, Tate suffered his concussion when he landed on his head during a fourth-quarter touchdown reception, with the score proving to be the only salvation in an otherwise disappointing day for the wideout (three catches for 33 yards on seven targets). He'll need to pass through all five steps of the concussion protocol by the weekend in order to gain clearance for the Giants' upcoming game versus the Packers.",
    "timestamp": "2019-11-25 09:23 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.8,
    "week06": 19.2,
    "week07": 11.0,
    "week08": 12.5,
    "week09": 8.8,
    "week10": 21.5,
    "week11": "BYE",
    "week12": 10.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5, 8.8, 21.5, 'BYE', 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 10.8, 11.5, 'BYE', 10.0, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 10.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 7,
    "avg_fp2": 13.82,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.45,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Bottled up despite 10 targets",
    "report": "Kupp caught six of 10 targets for 35 yards in Monday night's 45-6 loss to the Ravens.",
    "analysis": "Kupp led the Rams in looks from quarterback Jared Goff, but found next to no room to operate. To make matters worse, his final target bounced off his hands for a Baltimore interception. After a 220-yard outburst in Week 8, Kupp has combined for just 88 yards in three games since, putting him in a serious slump ahead of Sunday's matchup against the Cardinals.",
    "timestamp": "2019-11-25 08:50 PM",
    "week01": 8.1,
    "week02": 15.1,
    "week03": 27.7,
    "week04": 22.4,
    "week05": 22.2,
    "week06": 3.7,
    "week07": 8.0,
    "week08": 31.5,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 6.8,
    "week12": 6.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE', 0.0, 6.8, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.4, 12.8, 7.8, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 10.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 8,
    "avg_fp2": 13.58,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 29.76,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Big game against Dallas",
    "report": "Edelman caught eight of 12 targets for 93 yards in Sunday's 13-9 win over the Cowboys.",
    "analysis": "With rain limiting Tom Brady's ability to stretch the field, Edelman saw plenty of action on shorter routes and ended up leading all receivers in catches, targets and yards on the afternoon. The 33-year-old has gotten double-digit targets in six straight games and eight of 11 on the year, giving him a high fantasy floor heading into Week 13's road clash with the Texans.",
    "timestamp": "2019-11-24 09:13 PM",
    "week01": 13.38,
    "week02": 7.2,
    "week03": 15.7,
    "week04": 5.0,
    "week05": 21.0,
    "week06": 15.8,
    "week07": 10.2,
    "week08": 23.5,
    "week09": 11.9,
    "week10": "BYE",
    "week11": 12.4,
    "week12": 13.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE', 12.4, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 12.1, 'BYE', 9.9, 9.0, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 9.9,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 8.74,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 26.4,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Could return Sunday",
    "report": "The Steelers are hopeful that Smith-Schuster (concussion/knee) will be available for Sunday's game against the Browns,  Dale Lolley of DKPittsburghSports.com reports.",
    "analysis": "The report also notes that running back James Conner, \"on the other hand, would be considered more questionable\" for the contest. Added clarity regarding Smith-Schuster's Week 13 status should arrive no later than Wednesday's injury report, but who he'd be catching passes from if he is able to play this weekend has yet to be determined, with Devlin Hodges having replaced Mason Rudolph at QB in Sunday's win over the Bengals.",
    "timestamp": "2019-11-25 10:56 AM",
    "week01": 10.8,
    "week02": 10.9,
    "week03": 15.6,
    "week04": 3.0,
    "week05": 15.0,
    "week06": 1.2,
    "week07": "BYE",
    "week08": 18.8,
    "week09": 3.1,
    "week10": 5.9,
    "week11": 3.1,
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1, 5.9, 3.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.7, 11.8, 'DNP', 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 9.9,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 11.99,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 30.96,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Goes off Sunday",
    "report": "Robinson caught six of 10 passes for 131 yards and a touchdown in Chicago's 19-14 victory over the Giants on Sunday.",
    "analysis": "Along with the entire Bears offense, Robinson was very quiet during the first half but took over the game in the final 30 minutes as the New York secondary didn't have an answer for him in coverage. In addition to his huge numbers, he had a reception of over 60 yards called back by penalty. Although he's had a pair of disappointing performances over the last four weeks, he's been held to fewer than 60 yards just twice since Week 2, and he'll continue to be a WR2 based on both his talent and target volume.",
    "timestamp": "2019-11-24 02:43 PM",
    "week01": 13.7,
    "week02": 6.1,
    "week03": 9.0,
    "week04": 11.2,
    "week05": 25.2,
    "week06": "BYE",
    "week07": 19.7,
    "week08": 8.7,
    "week09": 1.1,
    "week10": 11.6,
    "week11": 3.5,
    "week12": 22.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1, 11.6, 3.5, 22.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 11.5, 7.6, 9.7, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 9.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 10,
    "avg_fp2": 14.85,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 39.52,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Tallies 38 receiving yards",
    "report": "Chark caught five of six targets for 38 yards during Sunday's 42-20 loss to the Titans.",
    "analysis": "A week after drawing a whopping 15 targets, Chark's six looks were his fewest since Week 7 against Cincinnati. He hauled in all but one of the balls sent his way, but his long gain of 12 yards limited his output in this underwhelming performance. Chark's erratic volume makes him a volatile fantasy option -- he's failed to top 60 yards in four of the last six games, but piled up 183 yards and three TDs in the two other contests -- heading into next Sunday's favorable matchup against the Buccaneers.",
    "timestamp": "2019-11-25 05:25 AM",
    "week01": 22.6,
    "week02": 15.0,
    "week03": 15.6,
    "week04": 6.4,
    "week05": 32.4,
    "week06": 5.8,
    "week07": 8.8,
    "week08": 16.9,
    "week09": 5.2,
    "week10": "BYE",
    "week11": 26.4,
    "week12": 8.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9, 5.2, 'BYE', 26.4, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.9, 'BYE', 8.6, 14.7, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 9.9,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 6.73,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.0,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Only two catches",
    "report": "Davis hauled in two of his three targets for 29 yards in the team's Week 12 win over the Jaguars.",
    "analysis": "Davis continues to fade into the background of the Titans' passing attack, as A.J. Brown exploded for a big performance in the win. Davis' three targets matched his fewest of the season, though he's now failed to surpass 30 receiving yards in four of his 10 games. While he's shown brief flashes of promise, Davis doesn't see enough volume to turn in consistent performances.  Davis will tangle with the Colts secondary in Week 13.",
    "timestamp": "2019-11-24 06:04 PM",
    "week01": 0.0,
    "week02": 5.3,
    "week03": 5.9,
    "week04": 17.6,
    "week05": 3.8,
    "week06": 5.1,
    "week07": 17.0,
    "week08": 1.9,
    "week09": 6.8,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 3.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 5.9, 17.6, 3.8, 5.1, 17.0, 1.9, 6.8, 'DNP', 'BYE', 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 3.1, 9.5, 7.3, 9.4, 6.0, 12.3, 5.9, 'DNP', 'BYE', 3.5, 9.9]
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
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 21,
    "avg_fp2": 13.07,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 28.25,
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
    "headlineNews": "Two TDs not enough in loss",
    "report": "Moore caught six of nine targets for 126 yards and two touchdowns while adding an eight-yard rush in Sunday's 34-31 loss to the Saints.",
    "analysis": "Moore turned the tide with a 51-yard touchdown in the first quarter after New Orleans jumped out to a 14-0 lead. He later helped Carolina finally pull even with a two-yard score in the fourth. Unfortunately for the second-year wideout, that effort wasn't enough, as Wil Lutz kicked a 33-yard field goal as time expired to win it for New Orleans. Still, the multi-score performance was much needed for Moore, who had only scored one touchdown all season coming in. He's become the go-to receiving option for quarterback Kyle Allen, finishing with at least 95 receiving yards in each of the past four games. Moore will have a nice opportunity to continue that streak in Week 13 against the lowly Redskins.",
    "timestamp": "2019-11-24 02:45 PM",
    "week01": 9.1,
    "week02": 13.4,
    "week03": 12.9,
    "week04": 5.9,
    "week05": 12.1,
    "week06": 12.1,
    "week07": "BYE",
    "week08": 6.3,
    "week09": 13.6,
    "week10": 16.5,
    "week11": 13.5,
    "week12": 28.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3, 13.6, 16.5, 13.5, 28.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.7, 10.3, 15.6, 8.4, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 9.8,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 3,
    "avg_fp2": 13.7,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.66,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Second straight DNP",
    "report": "Jones (shoulder) didn't participate in Tuesday's practice, D. Orlando Ledbetter of The Atlanta Journal-Constitution reports.",
    "analysis": "Jones sat out of practice for the second straight day after sustaining a right shoulder injury this past Sunday against Tampa Bay. The veteran receiver got treatment after the game, but the Falcons haven't revealed further details about his affliction. Jones' practice status this week isn't encouraging for his chances of suiting up Thursday against the Saints, but it's worth noting that he's battled through plenty of bumps and bruises in his career. Keep an eye out for Wednesday's final injury report to divulge his official game-time status.",
    "timestamp": "2019-11-26 01:21 PM",
    "week01": 12.1,
    "week02": 25.1,
    "week03": 22.8,
    "week04": 7.3,
    "week05": 5.7,
    "week06": 14.8,
    "week07": 12.3,
    "week08": 20.2,
    "week09": "BYE",
    "week10": 9.4,
    "week11": 11.7,
    "week12": 9.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE', 9.4, 11.7, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 18.5, 15.9, 19.4, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 9.5,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 10.2,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 24.49,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Leading receiver as Shepard returns",
    "report": "Slayton caught four of seven targets for 67 yards in Sunday's 19-14 loss to the Bears.",
    "analysis": "Fellow wide receiver Sterling Shepard returned from a concussion and led the Giants with nine targets, but Slayton led the team in receiving yards and tied with Golden Tate for second in targets with seven. While Shepard is another mouth to feed, it appears Slayton has emerged as a legitimate weapon for the Giants. The rookie fifth-rounder should remain on the fantasy radar in deeper formats when his team hosts the Packers in Week 13.",
    "timestamp": "2019-11-24 03:47 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 9.7,
    "week04": 2.3,
    "week05": 14.2,
    "week06": 4.7,
    "week07": 3.8,
    "week08": 18.0,
    "week09": 1.1,
    "week10": 29.34,
    "week11": "BYE",
    "week12": 8.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 9.7, 2.3, 14.2, 4.7, 3.8, 18.0, 1.1, 29.34, 'BYE', 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.6, 8.3, 6.0, 7.3, 9.9, 9.6, 5.4, 10.4, 'BYE', 9.1, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 9.4,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 9.41,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 27.94,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Scores with limited touches",
    "report": "Samuel (shoulder) caught both of his targets for 50 yards and a touchdown in Sunday's 37-8 win over Green Bay.",
    "analysis": "Samuel was able to suit up and start alongside Emmanuel Sanders (ribs), but it was the former banged-up wideout who was able to make the bigger fantasy impact. The true receiving star of the night was tight end George Kittle (ankle), who put up a monstrous stat line while returning from an injury of his own. So long as Kittle is on the field, the rest of the receiving corps will play second fiddle to the tight end in terms of attention from Jimmy Garoppolo. Samuel has certainly put himself into consideration for more looks after an impressive two-week run (16 receptions for 246 yards) where he took over as the team's top wideout, but he may be tough to trust as a surefire starter next week against the Ravens if the receiving unit is at full strength.",
    "timestamp": "2019-11-24 11:04 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1, 4.7, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 9.4,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 6,
    "avg_fp2": 8.28,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.13,
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
    "headlineNews": "Catches another deep ball",
    "report": "Williams caught two of five targets for 76 yards in Monday night's 24-17 loss to the Chiefs.",
    "analysis": "Williams' performance was highlighted by an outstanding 50-yard reception on Los Angeles' final offensive series. That grab not only set up a dramatic finish to the game but also significantly boosted Williams' fantasy output. In fact, he ended up trailing only Austin Ekeler for the Chargers' team lead in receiving yards. With a catch of at least 40 yards in an incredible four consecutive games, Williams now enters the bye week averaging a whopping 20.0 yards per reception on the season.",
    "timestamp": "2019-11-18 10:01 PM",
    "week01": 3.9,
    "week02": 9.8,
    "week03": 6.0,
    "week04": "DNP",
    "week05": 10.4,
    "week06": 9.7,
    "week07": 6.7,
    "week08": 8.4,
    "week09": 12.8,
    "week10": 6.5,
    "week11": 8.6,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4, 12.8, 6.5, 8.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.4, 11.3, 6.7, 'BYE', 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 9.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 23,
    "avg_fp2": 6.69,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 32.35,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Aiming to return Sunday",
    "report": "Agholor (knee) hopes to be available for Sunday's game in Miami, Martin Frank of The Delaware News Journal reports.",
    "analysis": "With Agholor and Alshon Jeffery (ankle) on the inactive list this past Sunday against the Seahawks, the Eagles were left with J.J. Arcega-Whiteside, Jordan Matthews, Greg Ward and Mack Hollins at wide receiver. The quartet combined for 11 receptions (on 18 targets) for 110 yards. The team waived Matthews on Monday and have yet to reinforce the position, so there may be some confidence in-house that Agholor and/or Jeffery will return Week 13. Wednesday's injury report will reveal how many, if any, reps Agholor is able to handle.",
    "timestamp": "2019-11-26 10:30 AM",
    "week01": 2.1,
    "week02": 20.7,
    "week03": 19.0,
    "week04": 0.0,
    "week05": 2.5,
    "week06": 6.2,
    "week07": 3.4,
    "week08": 3.4,
    "week09": 3.6,
    "week10": "BYE",
    "week11": 6.0,
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 20.7, 19.0, 0.0, 2.5, 6.2, 3.4, 3.4, 3.6, 'BYE', 6.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 2.7, 9.8, 4.8, 7.0, 2.8, 6.5, 4.6, 3.3, 'BYE', 6.3, 'DNP', 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Redskins",
    "projected": 9.2,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 32,
    "avg_fp2": 11.38,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 31.82,
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
    "headlineNews": "Delivers clutch conversion in win",
    "report": "McLaurin caught five of 12 targets for 72 yards during Sunday's 19-16 win over the Lions.",
    "analysis": "McLaurin's 12 targets set a season high. Though he doesn't hold quite the same value as he did earlier this season when veteran Case Keenum was lofting up passes to him in the end zone, the rookie is still Washington's most consistent pass-catcher and has rapport with fellow rookie Buckeye Dwayne Haskins. That was on display in the closing seconds of Sunday's win, when, facing third down, Haskins drove a 17-yard pass down the field to McLaurin, setting up the game-winning field goal. Sunday brings a tough matchup against a quality Panthers pass defense, but McLaurin is still a solid play despite Washington's offensive struggles due to his locked-in target volume and downfield prowess.",
    "timestamp": "2019-11-24 03:10 PM",
    "week01": 21.0,
    "week02": 14.7,
    "week03": 16.0,
    "week04": "DNP",
    "week05": 6.6,
    "week06": 24.0,
    "week07": 1.6,
    "week08": 5.9,
    "week09": 5.9,
    "week10": "BYE",
    "week11": 8.4,
    "week12": 9.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 14.7, 16.0, 'DNP', 6.6, 24.0, 1.6, 5.9, 5.9, 'BYE', 8.4, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 13.0, 11.2, 'DNP', 12.2, 13.7, 11.4, 8.7, 9.3, 'BYE', 13.8, 9.3, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 9.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 19,
    "avg_fp2": 9.35,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.21,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Hits pay dirt in loss",
    "report": "Fitzgerald caught all five of his targets for 37 yards and a touchdown in Sunday's 36-26 loss to the 49ers.",
    "analysis": "The Cards' passing game didn't gain a lot of real estate -- Christian Kirk led the team with only 41 receiving yards -- but Fitzgerald bolstered his production with his first TD since Week 3. The future Hall of Famer is little more than a possession receiver at age 36, but Fitzgerald continues to provide rookie quarterback Kyler Murray with a reliable target, and he's on pace for at least 80 catches for the 11th time in his career.",
    "timestamp": "2019-11-17 05:40 PM",
    "week01": 21.3,
    "week02": 12.9,
    "week03": 12.1,
    "week04": 7.2,
    "week05": 8.8,
    "week06": 9.9,
    "week07": 1.7,
    "week08": 1.8,
    "week09": 5.8,
    "week10": 11.1,
    "week11": 10.2,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8, 11.1, 10.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.5, 7.9, 'BYE', 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 8.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 6,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 21.62,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Targeted 11 times in loss",
    "report": "Jones caught five of 11 targets for 46 yards during Sunday's 19-16 loss to Washington.",
    "analysis": "Jones, like the Lions' offense has a whole, has missed Matthew Stafford (back), but the veteran wide receiver has made the most of playing with backup Jeff Driskel, enjoying a team-high 21 targets in Driskel's three starts. Driskel showed Sunday that he's willing to force the ball to Jones, sometimes to the Lions' advantage -- such as on a 14-yard sideline throw to set up a field goal just before halftime -- and sometimes to the team's detriment, such as on an ill-timed interception in the closing moments of the game that sparked Washington's win. Though Stafford has voiced his hope to play again this season, Jones will still be working with Driskel Thursday against a Bears defense that surrendered 77 yards on five catches to Jones in Week 9.",
    "timestamp": "2019-11-24 03:44 PM",
    "week01": 8.0,
    "week02": 6.8,
    "week03": 19.1,
    "week04": 9.2,
    "week05": "BYE",
    "week06": 2.7,
    "week07": 38.3,
    "week08": 4.2,
    "week09": 22.6,
    "week10": 10.2,
    "week11": 17.9,
    "week12": 7.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 6.8, 19.1, 9.2, 'BYE', 2.7, 38.3, 4.2, 22.6, 10.2, 17.9, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.1, 11.6, 6.6, 'BYE', 8.0, 7.2, 7.4, 7.0, 9.4, 9.3, 8.1, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 8.7,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 7,
    "avg_fp2": 7.68,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.45,
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
    "headlineNews": "Just two catches in return",
    "report": "Cooks caught two of four targets for 32 yards in Monday night's 45-6 loss to the Ravens. He also rushed once for one yard.",
    "analysis": "The receiver returned from his latest concussion, and despite Robert Woods (personal) also re-entering the lineup, the Rams struggled mightily on offense. For his part, Cooks made a nice sideline grab during the first half, but he finished behind Woods, Cooper Kupp and tight end Tyler Higbee in targets on the night. Although Cooks skewered his next opponent, the Cardinals, for a season-high 159 yards in Week 2 last year, Los Angeles' uneven recent form casts uncertainty over his fantasy stock.",
    "timestamp": "2019-11-25 09:16 PM",
    "week01": 4.9,
    "week02": 15.1,
    "week03": 16.0,
    "week04": 10.1,
    "week05": 6.1,
    "week06": 4.7,
    "week07": 7.9,
    "week08": 0.0,
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 4.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 15.1, 16.0, 10.1, 6.1, 4.7, 7.9, 0.0, 'BYE', 'DNP', 'DNP', 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 10.9, 6.6, 9.1, 11.6, 8.6, 8.1, 8.8, 'BYE', 'DNP', 'DNP', 7.6, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 8.7,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 21,
    "avg_fp2": 9.61,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 28.25,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Trending in wrong direction",
    "report": "Samuel caught just one of four targets for nine yards but added 40 yards on four carries in Sunday's 34-31 loss to the Saints.",
    "analysis": "Samuel took a back seat to Christian McCaffrey and D.J. Moore, who scored two touchdowns apiece. His involvement on some running plays was nice, but Samuel has now seen his receiving yardage total trend south for three consecutive games. Luckily, he'll have a nice opportunity to reverse that trend in Week 13 with the vulnerable Redskins secondary coming to town.",
    "timestamp": "2019-11-24 03:02 PM",
    "week01": 4.7,
    "week02": 11.8,
    "week03": 13.8,
    "week04": 4.8,
    "week05": 5.9,
    "week06": 21.8,
    "week07": "BYE",
    "week08": 6.6,
    "week09": 14.9,
    "week10": 11.5,
    "week11": 4.5,
    "week12": 5.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9, 11.5, 4.5, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 10.0, 12.1, 8.0, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 8.2,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 20,
    "avg_fp2": 11.71,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 23.04,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Catches two touchdowns",
    "report": "Brown caught five of seven targets for 42 yards and two touchdowns in Monday night's 45-6 win over the Rams.",
    "analysis": "Brown and quarterback Lamar Jackson got clicking early, as they teamed up for touchdowns on back-to-back drives to start the game. The rookie first scored on a six-yard crossing route before later grabbing an 18-yard TD down the seam. He sprinkled in a few more catches afterwards, and Brown actually dropped a third potential touchdown during the second half. That miscue should offer motivation ahead of a crucial matchup against the 49ers in Week 13, but Brown still made a strong impact Monday.",
    "timestamp": "2019-11-25 09:01 PM",
    "week01": 28.7,
    "week02": 12.6,
    "week03": 5.9,
    "week04": 4.2,
    "week05": 9.7,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 6.3,
    "week10": 16.0,
    "week11": 3.3,
    "week12": 18.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3, 16.0, 3.3, 18.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3, 9.6, 12.0, 9.5, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 8.1,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 6.65,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 28.17,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Held without a catch Thursday",
    "report": "Pascal logged 59 of a possible 67 snap on offense in Thursday's 20-17 loss to the Texans but did not catch his only target in the game.",
    "analysis": "Pascal's 88 percent snap share was tops among the Colts' wideouts Thursday, but that's because the team limited T.Y. Hilton to 25 snaps in his return from a calf injury. The team's next game isn't until Dec. 1 against the Titans, at which point Pascal could possibly have some added competition for playing time, with both Parris Campbell (hand) and Devin Funchess (collarbone) candidates to return to action in Week 13.",
    "timestamp": "2019-11-22 10:12 AM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 12.3,
    "week04": 9.2,
    "week05": 2.5,
    "week06": "BYE",
    "week07": 25.6,
    "week08": 1.1,
    "week09": 16.1,
    "week10": 3.6,
    "week11": 2.7,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1, 16.1, 3.6, 2.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 8.5, 13.2, 11.1, 7.8, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 8.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 8.93,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 27.94,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Just one target",
    "report": "Sanders (ribs) caught his lone target for 15 yards in Sunday's 37-8 victory over the Packers.",
    "analysis": "It was George Kittle's (knee/ankle) night to shine, leaving little scraps to be had for the rest of the receiving corps (no wide receiver with more than two targets). Sanders has been dealing with his own nagging injury, and that may have factored in his lack of usage for the second straight week since returning to action. When healthy, the veteran wideout is the top receiver and second option behind Kittle, but fantasy owners may want to wait until he is fully cleared of the rib issues that have limited him in practice over the past few weeks.",
    "timestamp": "2019-11-24 11:23 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9, 14.9, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 8.1,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 3,
    "avg_fp2": 12.39,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.66,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Another sterling outing in Week 12",
    "report": "Ridley caught six of 14 targets for 85 yards and a touchdown during Sunday's 35-22 loss to Tampa Bay.",
    "analysis": "The second-year wideout has provided rampant fantasy production over his past two games after falling into a brief mid-season slump, amassing 14 receptions for 225 yards and two touchdowns in outings against the Panthers and Buccaneers over the past two Sundays. While Ridley is riding a hot streak at the moment, he's been known to fade into the background certain weeks depending on the opponent and circumstance. Prior to his recent two-game breakout, Ridley had averaged fewer than four receptions and 45 receiving yards per game, with zero touchdowns in outings against the Rams, Seahawks and Saints between Weeks 7 and 10. Upcoming on Thanksgiving night, Ridley will be facing New Orleans for the second time this season, just three weeks removed from a three-catch, 28-yard dud against the Saints on Nov. 10.",
    "timestamp": "2019-11-24 04:14 PM",
    "week01": 14.4,
    "week02": 20.5,
    "week03": 1.1,
    "week04": 4.7,
    "week05": 17.3,
    "week06": 12.8,
    "week07": 5.0,
    "week08": 11.0,
    "week09": "BYE",
    "week10": 6.2,
    "week11": 24.3,
    "week12": 19.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 20.5, 1.1, 4.7, 17.3, 12.8, 5.0, 11.0, 'BYE', 6.2, 24.3, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 12.9, 8.5, 9.7, 9.4, 10.7, 13.2, 8.4, 'BYE', 9.4, 11.1, 10.4, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 8.0,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 2,
    "avg_fp2": 10.22,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 31.18,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Minimal Week 11 impact",
    "report": "Watkins recorded just two catches for 26 yards on three targets Monday against the Chargers.",
    "analysis": "Watkins' effort Monday was his worst of the 2019 campaign, even without Tyreek Hill (hamstring) available for most of the contest. The field in Mexico City and a tough Chargers defense likely both played roles in his slow night. Fortunately, Watkins and the passing game should have a great opportunity to get back on track after a Week 12 bye, when they face a Raiders squad the following week currently allowing 262.2 passing yards per game and 8.2 yards per pass attempt.",
    "timestamp": "2019-11-19 07:24 AM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.5, 6.4, 'BYE', 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 7.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 31,
    "avg_fp2": 7.0,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.59,
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
    "headlineNews": "Big-play ability returns",
    "report": "Anderson caught four of five targets for 86 yards and a touchdown in Sunday's 34-3 win over the Raiders.",
    "analysis": "Anderson got his mojo back, recording two catches of 30-plus yards and following up the second one with a one-yard touchdown to make it 27-3 in the third quarter. He has a two-game touchdown streak going after finding the end zone only once through the season's first nine games, and Anderson was able to top 80 yards for the third time in this one. Those who held onto him through his early struggles or scooped him up recently should consider deploying Anderson against the winless Bengals in Week 13.",
    "timestamp": "2019-11-24 04:02 PM",
    "week01": 3.8,
    "week02": 10.1,
    "week03": 2.6,
    "week04": "BYE",
    "week05": 2.1,
    "week06": 21.0,
    "week07": 1.5,
    "week08": 6.3,
    "week09": 4.3,
    "week10": 1.6,
    "week11": 7.1,
    "week12": 16.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3, 1.6, 7.1, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.0, 7.4, 8.8, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.6,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 24,
    "avg_fp2": 9.36,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 22.68,
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
    "headlineNews": "Leads way for pass offense",
    "report": "Beasley finished Sunday's 20-3 win over Denver having caught six of nine passes for 76 yards and a touchdown.",
    "analysis": "Beasley led the Bills across receiving categories Sunday as Denver, for the most part, attempted to take away John Brown. Beasley stepped up to the challenge, gaining 30-yards on a catch-and-run crosser to set up a second-quarter field goal and then splitting the seam during the first drive of the second half to reel in an 18-yard touchdown. Beasley is finding a groove in Buffalo with at least four catches in each of his last three games and four touchdowns in his last six outings. Thursday brings a trip to Dallas' top-10 pass defense, but Beasley figures to be fired up to take on his old team. It's worth noting Beasley did leave the game briefly due to an undisclosed injury, but he returned shortly thereafter.",
    "timestamp": "2019-11-24 02:20 PM",
    "week01": 6.5,
    "week02": 10.3,
    "week03": 10.8,
    "week04": 11.0,
    "week05": 3.6,
    "week06": "BYE",
    "week07": 9.1,
    "week08": 11.6,
    "week09": 8.3,
    "week10": 9.4,
    "week11": 5.8,
    "week12": 16.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 10.3, 10.8, 11.0, 3.6, 'BYE', 9.1, 11.6, 8.3, 9.4, 5.8, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.5, 8.2, 5.5, 6.2, 'BYE', 6.2, 4.4, 6.9, 6.4, 4.1, 7.0, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 7.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 10,
    "avg_fp2": 7.84,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 39.52,
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
    "headlineNews": "Leads team in receiving vs. Titans",
    "report": "Westbrook caught eight of nine targets for 69 yards during Sunday's 42-20 loss to the Titans.",
    "analysis": "Westbrook led the team in receiving yardage while finishing behind only Leonard Fournette in targets and receptions. He averaged just 8.6 yards per catch on a day when Nick Foles struggled to push the ball downfield, but it was still a much better output for Westbrook, who came in with just four catches for 32 yards since Week 7. Perhaps this effort will earn him a similar role in next Sunday's favorable matchup against the Buccaneers.",
    "timestamp": "2019-11-25 05:44 AM",
    "week01": 11.7,
    "week02": 0.8,
    "week03": 7.5,
    "week04": 9.1,
    "week05": 11.74,
    "week06": 6.8,
    "week07": 14.7,
    "week08": 0.0,
    "week09": "DNP",
    "week10": "BYE",
    "week11": 5.2,
    "week12": 10.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0, 'DNP', 'BYE', 5.2, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 'DNP', 'BYE', 6.6, 6.3, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 7.2,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 6.88,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 26.4,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Makes three catches in return",
    "report": "Johnson caught three of six targets for 29 yards during Sunday's 16-10 win over the Bengals.",
    "analysis": "After recovering from a concussion, Johnson finished second on the team in targets in his return, though he only managed to haul in half the passes sent his way. He recorded a long gain of 14 yards but never really got in a rhythm after Devlin Hodges took over under center. Johnson seems to be at full speed after his injury, but his upside is capped in next Sunday's matchup with the Browns due to lackluster quarterback play.",
    "timestamp": "2019-11-24 03:08 PM",
    "week01": 4.0,
    "week02": 2.2,
    "week03": 13.3,
    "week04": 14.7,
    "week05": 5.68,
    "week06": 2.4,
    "week07": "BYE",
    "week08": 16.9,
    "week09": 1.0,
    "week10": 8.4,
    "week11": 2.7,
    "week12": 4.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0, 8.4, 2.7, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2, 7.8, 12.4, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 7.1,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 19,
    "avg_fp2": 10.08,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 31.86,
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
    "headlineNews": "Tops 100-yard mark",
    "report": "Boyd caught five of nine targets for 101 yards and a touchdown during Sunday's 16-10 loss to the Steelers.",
    "analysis": "Boyd led the team in targets, catches, and receiving yards, topping the 100-yard mark for the third time this season. He tied his season long with a 47-yard reception and scored a 15-yard touchdown to get his team on the board in the second quarter. The touchdown was Boyd's first since Week 5, and this was an excellent way to bounce back after he failed to generate any yardage last week against the Raiders. He will have another chance to thrive next Sunday against the Jets.",
    "timestamp": "2019-11-24 02:40 PM",
    "week01": 10.3,
    "week02": 17.2,
    "week03": 9.7,
    "week04": 4.8,
    "week05": 23.3,
    "week06": 2.5,
    "week07": 6.0,
    "week08": 9.8,
    "week09": "BYE",
    "week10": 9.2,
    "week11": 1.5,
    "week12": 16.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE', 9.2, 1.5, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 16.0, 12.7, 12.1, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917067.png",
    "name": "Bisi Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Minnesota Vikings",
    "projected": 6.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 5.81,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 28.95,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Leads team in targets",
    "report": "Johnson reeled in five of nine targets for 35 yards during Sunday's 27-23 win over Denver.",
    "analysis": "With Denver sliding coverage over to Stefon Diggs -- arguably not often enough -- Johnson was given plenty of one-on-one opportunities short during Sunday's game, though he was unable to get loose up the field like some of his teammates. The rookie seventh-round pick has outplayed his draft position, but he hasn't been much of a threat downfield and hasn't put together any big performances in place of Adam Thielen (hamstring). Thielen's status coming out of the bye week will be important to monitor, as the veteran target figures to eat into what production Johnson and tight end Kyle Rudolph have enjoyed in his absence.",
    "timestamp": "2019-11-17 02:24 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.0,
    "week08": 3.7,
    "week09": 6.9,
    "week10": 3.5,
    "week11": 6.5,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0, 3.7, 6.9, 3.5, 6.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.4, 2.8, 6.4, 6.2, 'BYE', 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 6.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 12.7,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.13,
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
    "headlineNews": "Modest numbers in loss",
    "report": "Gallup caught four of six targets for 55 yards in Sunday's 13-9 loss to the Patriots.",
    "analysis": "The Cowboys' offense failed to score a TD for the first time all season due to a combination of rain and a tough opponent, but Gallup still caught at least four passes for the third straight game. The second-year receiver should remain one of Dak Prescott's top options in the Thanksgiving home game against the Bills.",
    "timestamp": "2019-11-24 08:54 PM",
    "week01": 19.3,
    "week02": 9.8,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 20.8,
    "week06": 6.8,
    "week07": 4.9,
    "week08": "BYE",
    "week09": 10.3,
    "week10": 15.6,
    "week11": 19.3,
    "week12": 7.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3, 15.6, 19.3, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.8, 6.7, 6.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 6.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 9.47,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.13,
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
    "headlineNews": "Leading receiver against Pats",
    "report": "Cobb caught four of seven targets for 86 yards in Sunday's 13-9 loss to the Patriots.",
    "analysis": "The yards and targets led the Cowboys, but Cobb's efforts weren't enough to get the team into the end zone as the offense failed to score a TD for the first time all season. The veteran receiver is enjoying his best stretch of the year, hauling in 14 of 22 targets for 307 yards and two touchdowns over the last three games, but Cobb could have a tough time keeping his momentum going in the Thanksgiving home date against the Bills.",
    "timestamp": "2019-11-24 09:00 PM",
    "week01": 14.9,
    "week02": 6.0,
    "week03": 3.3,
    "week04": 5.6,
    "week05": 6.8,
    "week06": "DNP",
    "week07": 3.9,
    "week08": "BYE",
    "week09": 4.5,
    "week10": 19.6,
    "week11": 19.5,
    "week12": 10.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5, 19.6, 19.5, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.6, 5.8, 5.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050487.png",
    "name": "Anthony Miller",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 6.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 4.3,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 30.96,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Targeted nine times",
    "report": "Miller caught six passes for 77 yards in the Bears' 19-14 victory over the Giants on Sunday.",
    "analysis": "For the second consecutive week, Miller saw at least nine targets while posting at least 54 yards. He's now surpassed 50 yards five times over his last seven contests, though in the games he's failed to reach 50 yards, he's been held to fewer than eight yards, making him a volatile weekly fantasy option.",
    "timestamp": "2019-11-24 02:50 PM",
    "week01": 0.0,
    "week02": 0.7,
    "week03": 2.0,
    "week04": 2.1,
    "week05": 7.2,
    "week06": "BYE",
    "week07": 6.8,
    "week08": 8.2,
    "week09": 0.0,
    "week10": 1.2,
    "week11": 8.4,
    "week12": 10.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.7, 2.0, 2.1, 7.2, 'BYE', 6.8, 8.2, 0.0, 1.2, 8.4, 10.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 5.5, 5.1, 4.1, 3.3, 'BYE', 2.2, 6.9, 5.7, 4.1, 3.0, 5.1, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 6.2,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 24.49,
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
    "headlineNews": "Five catches in return",
    "report": "Shepard caught five of nine targets for 15 yards and added a 22-yard rush in Sunday's 19-14 loss to Chicago.",
    "analysis": "Shepard failed to break free for a catch of longer than six yards, but he found some space on an end-around. More importantly, he looked healthy in his first game action since Week 5, leading the team in targets. There should be better days ahead for Shepard now that he's back from a concussion. Up next is a Week 13 home date with the Packers.",
    "timestamp": "2019-11-24 03:26 PM",
    "week01": 7.2,
    "week02": 0.0,
    "week03": 23.6,
    "week04": 13.4,
    "week05": 7.2,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 6.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 0.0, 23.6, 13.4, 7.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 11.6, 8.2, 14.4, 10.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.3, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16781.png",
    "name": "Paul Richardson",
    "depthchart": "Backup: WR-2",
    "team": "Washington Redskins",
    "projected": 6.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 32,
    "avg_fp2": 5.05,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 31.82,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Aggravates hamstring Sunday",
    "report": "Richardson won't return to Sunday's game against the Lions due to a hamstring injury, Dave Birkett of the Detroit Free Press reports.",
    "analysis": "Richardson logged his first DNP of the season Week 11 against the Jets, but after following an LP/FP/FP practice regimen in advance of this contest, he was cleared to play through his hamstring concern. It appears he's aggravated the issue, ending the day with one catch (on two targets) for six yards.",
    "timestamp": "2019-11-24 11:49 AM",
    "week01": 5.6,
    "week02": 9.1,
    "week03": 18.3,
    "week04": 2.9,
    "week05": 2.4,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 4.9,
    "week09": 6.2,
    "week10": "BYE",
    "week11": "DNP",
    "week12": 1.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 9.1, 18.3, 2.9, 2.4, 0.0, 0.0, 4.9, 6.2, 'BYE', 'DNP', 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.2, 5.0, 4.9, 4.9, 5.3, 3.9, 4.5, 3.7, 'BYE', 'DNP', 5.3, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115913.png",
    "name": "Geronimo Allison",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 5.9,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 13,
    "avg_fp2": 4.15,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 34.22,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Three receptions in defeat",
    "report": "Allison was targeted four times and caught three passes for nine yards in Sunday's loss to the 49ers.",
    "analysis": "The four targets were the most Allison saw since Week 7, but he did little with his opportunities and finished with a single digit in the receiving yardage department for the third time in four games. Allison started Sunday's game and finished second among Packers wide receivers in offensive snaps. While he does have a nice matchup his next time out against a Giants defense that struggles with opposing pass catchers, given Allison's recent ouptut, fantasy players in need of wide receiver help for key Week 13 matchups will likely want to look elsewhere.",
    "timestamp": "2019-11-25 09:35 AM",
    "week01": 0.0,
    "week02": 8.5,
    "week03": 0.4,
    "week04": 13.4,
    "week05": 3.8,
    "week06": 5.5,
    "week07": 5.3,
    "week08": 1.2,
    "week09": 3.1,
    "week10": 2.1,
    "week11": "BYE",
    "week12": 2.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.5, 0.4, 13.4, 3.8, 5.5, 5.3, 1.2, 3.1, 2.1, 'BYE', 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 7.6, 2.9, 2.0, 6.1, 6.2, 5.9, 4.7, 4.3, 5.2, 'BYE', 3.9, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124537.png",
    "name": "KeeSean Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 5.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 19,
    "avg_fp2": 3.55,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.21,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Minimal production again",
    "report": "Johnson recorded two catches on two targets for 14 yards during Sunday's 36-26 loss in San Francisco.",
    "analysis": "Johnson led all Cardinals outside receivers with a 33 percent share of the offensive plays, but once again he failed to impact the box score much, failing short of 20 receiving yards for the sixth time in 10 appearances this season. Because he has just 8.9 yards per catch, 4.5 yards per target and a 50 percent catch rate, it's difficult to rely on Johnson from week to week.",
    "timestamp": "2019-11-18 05:44 PM",
    "week01": 7.1,
    "week02": 5.6,
    "week03": 2.8,
    "week04": 2.9,
    "week05": 4.0,
    "week06": 2.4,
    "week07": 1.1,
    "week08": "DNP",
    "week09": 9.2,
    "week10": 0.0,
    "week11": 0.4,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.1, 5.6, 2.8, 2.9, 4.0, 2.4, 1.1, 'DNP', 9.2, 0.0, 0.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.4, 3.1, 2.0, 2.0, 4.7, 9.2, 5.1, 'DNP', 0.6, 10.7, 0.1, 'BYE', 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576491.png",
    "name": "Adam Humphries",
    "depthchart": "Reserve: WR-3",
    "team": "Tennessee Titans",
    "projected": 5.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 5.47,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.0,
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
    "headlineNews": "Three short receptions",
    "report": "Humphries hauled in all three of his targets for 20 yards in the team's Week 12 win over the Jaguars.",
    "analysis": "Humphries finished second on the team with three receptions but failed to make an impact. His longest catch went for just eight yards, with his other two receptions going for just six yards each. Though Humphries has converted 80 percent of his 45 targets into catches this season, that has turned into only 361 receiving yards. That said, he's dependent on finding the end zone to return any type of viable fantasy contribution. He'll look to do so in Week 13 against the Colts.",
    "timestamp": "2019-11-24 06:15 PM",
    "week01": 1.0,
    "week02": 1.0,
    "week03": 12.3,
    "week04": 2.5,
    "week05": 5.0,
    "week06": 7.7,
    "week07": 6.0,
    "week08": 3.9,
    "week09": 8.5,
    "week10": 8.8,
    "week11": "BYE",
    "week12": 3.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 1.0, 12.3, 2.5, 5.0, 7.7, 6.0, 3.9, 8.5, 8.8, 'BYE', 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 2.1, 2.2, 5.3, 3.5, 3.4, 3.6, 5.3, 4.3, 4.4, 'BYE', 3.3, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059722.png",
    "name": "Zay Jones",
    "depthchart": "Backup: WR-2",
    "team": "Oakland Raiders",
    "projected": 5.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 16,
    "avg_fp2": 2.5,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.84,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Target share may increase",
    "report": "Jones caught two passes on as many targets for five yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "Jones has averaged a healthy 45.6 offensive snaps played per game since joining the Raiders, but he's failed to see more than three targets in a single contest. That all could change moving forward, however, as No. 2 receiver Hunter Renfrow is looking at an extended absence after suffering a broken rib and punctured lung during Sunday's blowout loss. While Jones becomes a candidate for increased involvement in the aerial attack, the Raiders have an intriguing matchup against a beatable Chiefs secondary in Week 13.",
    "timestamp": "2019-11-26 09:31 AM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 4.3,
    "week04": 1.4,
    "week05": 0.0,
    "week06": "BYE",
    "week07": "DNP",
    "week08": 3.7,
    "week09": 3.9,
    "week10": 1.5,
    "week11": 4.0,
    "week12": 1.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 4.3, 1.4, 0.0, 'BYE', 'DNP', 3.7, 3.9, 1.5, 4.0, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.7, 7.2, 4.8, 6.3, 'BYE', 'DNP', 8.6, 3.6, 2.1, 3.3, 5.1, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 5.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 26,
    "avg_fp2": 10.59,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 32.03,
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
    "headlineNews": "Six-catch effort in loss",
    "report": "Parker brought in six of 11 targets for 91 yards in the Dolphins' 41-24 loss to the Browns on Sunday.",
    "analysis": "Parker shared the team lead in receptions with Albert Wilson while pacing the Dolphins in receiving yardage. The 2015 first-round pick is quietly putting together a solid season, as he's become a favorite downfield target of Ryan Fitzpatrick's and now has 695 receiving yards through 11 games, the second-highest tally of his career. Parker has at least five receptions in five of the last six games, giving him a solid fantasy floor in all formats heading into a Week 13 battle versus the Eagles.",
    "timestamp": "2019-11-24 02:23 PM",
    "week01": 9.0,
    "week02": 0.0,
    "week03": 7.1,
    "week04": 15.0,
    "week05": "BYE",
    "week06": 10.3,
    "week07": 14.0,
    "week08": 8.9,
    "week09": 13.7,
    "week10": 9.4,
    "week11": 17.0,
    "week12": 12.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7, 9.4, 17.0, 12.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.8, 7.7, 7.8, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 5.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 20,
    "avg_fp2": 5.76,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 23.04,
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
    "headlineNews": "Tallies two touchdowns",
    "report": "Snead caught two of three targets for 14 yards and two touchdowns in Monday night's 45-6 win over the Rams.",
    "analysis": "Snead's receptions were duplicates of each other, as they both came from seven yards out and ended in pay dirt. Those scores marked Snead's first touchdowns since the first month of this season, doubling his total tally to four. Considering his last four stat lines have been nearly identical aside from Monday's touchdowns, Snead's upside remains relatively restricted.",
    "timestamp": "2019-11-25 09:32 PM",
    "week01": 11.1,
    "week02": 1.0,
    "week03": 6.2,
    "week04": 13.1,
    "week05": 7.1,
    "week06": 3.3,
    "week07": 0.2,
    "week08": "BYE",
    "week09": 2.5,
    "week10": 2.2,
    "week11": 2.3,
    "week12": 14.4,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2, 2.3, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.2, 5.6, 7.4, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 5.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 31,
    "avg_fp2": 6.66,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.59,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Has TD called back",
    "report": "Thomas (hamstring) caught two of three targets for 22 yards in Sunday's 34-3 win over the Raiders.",
    "analysis": "Thomas had a would-be eight-yard touchdown on New York's first drive overturned due to offensive pass interference on a teammate. He wasn't very involved after that point and remains in search of his first touchdown of 2019. A Week 13 tilt against the 0-11 Bengals offers his next chance to finally find the end zone.",
    "timestamp": "2019-11-24 05:05 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 6.7,
    "week06": 8.2,
    "week07": 5.7,
    "week08": 8.8,
    "week09": 2.9,
    "week10": 11.4,
    "week11": 6.4,
    "week12": 3.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8, 2.9, 11.4, 6.4, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.6, 8.0, 6.6, 6.8, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 5.3,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 12,
    "avg_fp2": 12.19,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 17.36,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Thrives downfield in Week 12 win",
    "report": "Fuller (hamstring) secured seven of 11 targets for 140 yards in the Texans' 20-17 win over the Colts on Thursday.",
    "analysis": "Fuller managed to make it back from a three-game absence and have a major impact on the Texans' air attack, even as in true Fuller fashion, he also suffered an injury scare on one of his big plays. Fuller appeared a bit gimpy on his balky hamstring after notching a 51-yard grab in the third quarter, but he remained in the game and finished with the second-highest reception and receiving yardage totals of the season. Fuller also notched a 44-yard grab during the third period, and his presence and success seemed to loosen up the secondary for DeAndre Hopkins, who recorded a pair of rather atypical 30-yard-plus touchdown receptions.  Fuller will look to continue getting healthier ahead of a Week 13 showdown versus the Patriots, a week from this coming Sunday.",
    "timestamp": "2019-11-21 08:47 PM",
    "week01": 7.9,
    "week02": 6.0,
    "week03": 7.6,
    "week04": 3.8,
    "week05": 46.7,
    "week06": 6.9,
    "week07": 1.1,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 17.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 6.0, 7.6, 3.8, 46.7, 6.9, 1.1, 'DNP', 'DNP', 'BYE', 'DNP', 17.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.9, 5.6, 7.4, 9.4, 6.7, 10.0, 'DNP', 'DNP', 'BYE', 'DNP', 10.0, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128724.png",
    "name": "Isaiah McKenzie",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 5.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 24,
    "avg_fp2": 3.41,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 22.68,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Biggest play count to date",
    "report": "McKenzie caught three of six targets for 21 yards during Sunday's win over Miami.",
    "analysis": "The crafty speedster was on the field for a season-high 78 percent of the offensive snaps, and for all intents and purposes, he's settled in as the No. 3 receiver right now. That said, the offense runs through John Brown, Devin Singletary and Dawson Knox, so there's not much room for McKenzie to do much more than contribute the occasional change-of-pace touch. McKenzie at least seems to have pushed himself ahead of Duke Williams, Robert Foster and Andre Roberts in the pecking order at receiver.",
    "timestamp": "2019-11-20 10:16 PM",
    "week01": 0.0,
    "week02": 11.4,
    "week03": 2.4,
    "week04": 0.0,
    "week05": 6.2,
    "week06": "BYE",
    "week07": 2.1,
    "week08": "DNP",
    "week09": 2.7,
    "week10": 2.9,
    "week11": 4.6,
    "week12": 1.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 11.4, 2.4, 0.0, 6.2, 'BYE', 2.1, 'DNP', 2.7, 2.9, 4.6, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 3.2, 4.8, 2.9, 1.4, 'BYE', 3.0, 'DNP', 1.1, 2.1, -0.1, 4.0, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 2.97,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.0,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Big catch in Week 12 win",
    "report": "Perriman secured his only target for 44 yards in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "Perriman's one touch made an impact, as he had the second-longest catch of the day for the Buccaneers. He's one of the lower-volume No. 3 receivers in the league, having notched more than two receptions in only one game this season and already having been blanked altogether on three occasions. Therefore, even though the young veteran boasts plenty of speed, he remains a speculative play each week.",
    "timestamp": "2019-11-24 06:40 PM",
    "week01": 2.0,
    "week02": 0.0,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": 0.0,
    "week09": 12.2,
    "week10": 2.7,
    "week11": 2.5,
    "week12": 4.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 0.0, 2.4, 0.0, 'DNP', 'DNP', 'BYE', 0.0, 12.2, 2.7, 2.5, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.6, 7.8, 1.9, 'DNP', 'DNP', 'BYE', 2.9, 6.4, 5.1, 3.3, 3.1, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921564.png",
    "name": "Auden Tate",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 5.1,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 19,
    "avg_fp2": 7.08,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 31.86,
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
    "headlineNews": "Quiet in return from concussion",
    "report": "Tate caught one of three targets for 10 yards during Sunday's 16-10 loss to the Steelers.",
    "analysis": "Making his return from a concussion, Tate was an afterthought in the passing game and managed to haul in just one of the passes sent his way. He didn't appear to suffer any setbacks, which is a positive sign, but his inability to make a real impact doesn't bode well for his fantasy value. Tate will look to get more involved next Sunday against the Jets.",
    "timestamp": "2019-11-24 03:12 PM",
    "week01": "DNP",
    "week02": 1.1,
    "week03": 9.8,
    "week04": 7.0,
    "week05": 10.1,
    "week06": 11.6,
    "week07": 8.0,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 5.1,
    "week11": 7.6,
    "week12": 1.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 9.8, 7.0, 10.1, 11.6, 8.0, 9.0, 'BYE', 5.1, 7.6, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.8, 2.8, 5.6, 7.7, 6.9, 7.4, 6.1, 'BYE', 11.4, 9.3, 6.3, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10453.png",
    "name": "Ted Ginn",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 5.1,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 5.51,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 33.78,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Held to 38 yards in win",
    "report": "Ginn corralled two of five targets for 38 yards in the Saints' 34-31 win over the Panthers on Sunday.",
    "analysis": "It was more of the same for the veteran wideout in Sunday's win, as the deep threat failed to make an impact, even with a combined 67 points scored. He's failed to eclipse 50 receiving yards since Week 1 and scored just twice all year. Even in favorable matchups, such as Sunday's shootout with Carolina, he's more bust than boom.",
    "timestamp": "2019-11-24 06:44 PM",
    "week01": 13.6,
    "week02": 0.0,
    "week03": 2.5,
    "week04": 3.4,
    "week05": 10.6,
    "week06": 5.8,
    "week07": 5.8,
    "week08": 5.2,
    "week09": "BYE",
    "week10": 0.5,
    "week11": 8.4,
    "week12": 4.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 0.0, 2.5, 3.4, 10.6, 5.8, 5.8, 5.2, 'BYE', 0.5, 8.4, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.3, 4.2, 5.3, 8.0, 5.7, 4.7, 7.5, 'BYE', 7.2, 7.9, 4.7, 5.1]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 19.3,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 10.93,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 12.79,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Out again this week",
    "report": "Engram (foot) will not play Sunday against the Bears, Paul Schwartz of the New York Post reports.",
    "analysis": "It was reported earlier this week that Engram had a chance to play Sunday, but he did not make the required progress in his recovery over the last two weeks and now will miss a second straight game. Fellow tight end Rhett Ellison has also been ruled out for Week 12, which leaves Scott Simonson as the likely starter at the position in Sunday's contest. Simonson is more blocker than pass catcher, though, so the targets Engram usually sees could be mainly distributed among the wide receiver corps.",
    "timestamp": "2019-11-22 08:03 AM",
    "week01": 23.1,
    "week02": 7.8,
    "week03": 20.3,
    "week04": 7.4,
    "week05": 7.7,
    "week06": "DNP",
    "week07": 1.1,
    "week08": 12.0,
    "week09": 8.0,
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.1, 7.8, 20.3, 7.4, 7.7, 'DNP', 1.1, 12.0, 8.0, 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 9.6, 16.1, 11.5, 16.2, 'DNP', 15.7, 13.2, 15.7, 'DNP', 'BYE', 'DNP', 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 14.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 6.51,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 12.62,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Keeps scoring streak alive",
    "report": "Rudolph caught all five of his targets for 67 yards and a touchdown during Sunday's 27-23 win over Denver.",
    "analysis": "Rudolph put the icing on Minnesota's comeback midway through the fourth quarter, slipping behind the linebackers off of play action and jogging into the end zone for a 32-yard score. The touchdown continued a three-game streak Rudolph, who has struck five times in his last five games. The uptick in production has mostly coincided with the absence of Adam Thielen (hamstring), so Thielen's status following the bye will be very relevant to Rudolph's fantasy managers heading into a Week 13 matchup against the Seahawks.",
    "timestamp": "2019-11-17 02:18 PM",
    "week01": 0.0,
    "week02": 2.4,
    "week03": 1.6,
    "week04": 1.7,
    "week05": 0.9,
    "week06": 5.1,
    "week07": 14.3,
    "week08": 3.2,
    "week09": 9.8,
    "week10": 17.4,
    "week11": 15.2,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4, 15.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 9.0, 5.2, 'BYE', 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 12.9,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 2,
    "avg_fp2": 12.7,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 11.07,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Hauls in touchdown in win",
    "report": "Kelce caught seven of 10 targets for 92 yards and a touchdown in Monday night's 24-17 win over the Chargers.",
    "analysis": "Kelce not only hauled in a team-long reception of 31 yards, but also caught Kansas City's only touchdown through the air, scoring from 23 yards out during the third quarter. In doing so, he comfortably led the Chiefs in all major receiving categories. Of course, that came after star wideout Tyreek Hill (hamstring) was forced into a very early exit, leaving Kelce as the unquestioned focal point of the passing attack. Although Hill will now have the bye week to get healthier, Kelce could regardless have another big performance in Week 13 versus the Raiders, who he already totaled seven grabs for 107 yards and a score against earlier this season.",
    "timestamp": "2019-11-18 09:00 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8, 'BYE', 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 11.8,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 6,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 8.55,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Another nice showing",
    "report": "Henry caught six of nine targets for 69 yards in Monday night's 24-17 loss to the Chiefs. He also hauled in a successful two-point conversion.",
    "analysis": "Henry was again regularly utilized by quarterback Philip Rivers, placing third on the Chargers in both receptions and targets on the evening. His two-point grab also offered a little bonus to another solid fantasy showing. Through seven appearances this season, Henry is averaging 70 receiving yards per game, making him one of the more reliable tight ends across the league.",
    "timestamp": "2019-11-18 09:43 PM",
    "week01": 8.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 26.0,
    "week07": 12.7,
    "week08": 6.7,
    "week09": 11.9,
    "week10": 11.0,
    "week11": 11.9,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9, 11.0, 11.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 18.2, 15.1, 'BYE', 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 11.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 14,
    "avg_fp2": 12.53,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 7.29,
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
    "headlineNews": "Huge impact in return",
    "report": "Kittle (ankle) had six catches for 129 yards and a touchdown in Sunday's 37-8 win over Green Bay.",
    "analysis": "Kittle had missed the previous two games with an ankle injury that included a broken bone, and while he was unlikely at full strength, the star tight end stole the show offensively. The 26-year-old had been the 49ers' most-consistent receiver prior to going down to injury, and he put it all together Sunday with his first game of 100-plus receiving yards and a touchdown. Coach Kyle Shanahan mentioned the bone spur in his tight end's ankle after the game, stating that the injury is likely to cause pain \"for a while,\" according to Jennifer Lee Chan of NBC Sports Bay Area. Given his coach's statement, don't be surprised to find Kittle on the injury report leading up to games in the coming weeks, but this impressive showing should bode well for his fantasy owners heading into another heavyweight showdown against the Ravens on Sunday.",
    "timestamp": "2019-11-24 09:02 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 'DNP', 'DNP', 13.1, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 10.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 16,
    "avg_fp2": 10.79,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 9.65,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Tops 40 yards in blowout loss",
    "report": "Waller caught three of six targets for 41 yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "The entire Raiders team laid an egg in this one, but at least Waller was able to eclipse 40 yards for the ninth time in 11 games. While the yardage has been there, the tight end remains stuck on three touchdowns this season, all of which were scored in a two-game stretch spanning Week 7 and Week 8. Waller should be more involved against the division-leading Chiefs in Week 13.",
    "timestamp": "2019-11-24 03:08 PM",
    "week01": 10.5,
    "week02": 9.3,
    "week03": 20.6,
    "week04": 8.8,
    "week05": 5.9,
    "week06": "BYE",
    "week07": 28.1,
    "week08": 8.1,
    "week09": 6.2,
    "week10": 5.5,
    "week11": 10.1,
    "week12": 5.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2, 5.5, 10.1, 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 9.4, 22.3, 13.5, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 9.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 7,
    "avg_fp2": 6.48,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 17.41,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Picks up knee injury",
    "report": "Coach Sean McVay said Tuesday that Everett is considered day-to-day with a knee injury, Gary Klein of the Los Angeles Times reports.",
    "analysis": "Everett seemed to pick up the injury in Monday's loss to the Ravens, when he caught the turf and hyper-extended his knee. It's unclear exactly what he's dealing with, but the 2017 second-round pick played just 17 offensive snaps in Monday's game, catching both of his targets for 23 yards. The Rams head to Arizona for a divisional battle in Week 13, so expect Everett's practice availability shed a light on his chances to suit up in the game. If he can't go, expect Tyler Higbee and Johnny Mundt to man tight end duties.",
    "timestamp": "2019-11-26 05:16 PM",
    "week01": 1.2,
    "week02": 3.6,
    "week03": 2.5,
    "week04": 12.9,
    "week05": 17.1,
    "week06": 1.9,
    "week07": 13.0,
    "week08": 2.5,
    "week09": "BYE",
    "week10": 10.8,
    "week11": 2.5,
    "week12": 3.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.6, 2.5, 12.9, 17.1, 1.9, 13.0, 2.5, 'BYE', 10.8, 2.5, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 2.0, 3.8, 3.7, 5.0, 3.1, 7.2, 9.4, 'BYE', 9.0, 9.0, 4.1, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 9.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 11,
    "avg_fp2": 7.23,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 9.24,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Dealing with sore foot",
    "report": "Hollister has discomfort in his foot after getting rolled up on during Sunday's 17-9 win at Philadelphia, Curtis Crabtree of Sports Radio 950 KJR Seattle reports.",
    "analysis": "On Sunday, Hollister played his smallest share of the offensive snaps (69 percent) since his workload increased significantly in Week 9, in part due to leaving the game after the play in question. He also didn't make much of an impact as a receiver, hauling in two of four targets for 22 yards. The Seahawks won't release an injury report until Thursday with a Monday night matchup against the Vikings on tap, but the extra day of rest may improve Hollister's odds of maintaining his current role.",
    "timestamp": "2019-11-25 03:45 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": 3.5,
    "week08": 2.8,
    "week09": 17.7,
    "week10": 16.2,
    "week11": "BYE",
    "week12": 3.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 3.5, 2.8, 17.7, 16.2, 'BYE', 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, -0.2, 8.7, 1.9, 5.2, 'BYE', 6.3, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9761.png",
    "name": "Delanie Walker",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 8.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 6.29,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 9.43,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Inactive, as expected",
    "report": "Walker (ankle) is inactive for Sunday's Week 12 tilt against the Jaguars.",
    "analysis": "Walker carried a doubtful designation heading into the contest, so his inactive status was expected. His fourth straight absence will afford Jonnu Smith another opportunity as the top tight end option for Ryan Tannehill.",
    "timestamp": "2019-11-24 11:35 AM",
    "week01": 20.0,
    "week02": 5.9,
    "week03": 9.9,
    "week04": 0.9,
    "week05": 1.5,
    "week06": 5.8,
    "week07": 0.0,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.0, 5.9, 9.9, 0.9, 1.5, 5.8, 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 10.1, 8.5, 7.2, 5.1, 5.0, 4.9, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 8.6,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 23,
    "avg_fp2": 11.15,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 9.2,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Takes advantage of 14 targets",
    "report": "Ertz hauled in 12 of his 14 targets for 91 yards and a touchdown in the team's Week 12 loss to the Seahawks.",
    "analysis": "Ertz was one of Carson Wentz's few healthy receivers and took advantage by drawing 14 targets -- his second-highest total of the season. Nearly all of that production came in second half, as he registered just three catches for 19 yards in the first two quarters. Nevertheless, Ertz now has at least nine catches and 90 yards in three consecutive contests. Though it appears Alshon Jeffery (ankle) and Nelson Agholor (knee) have the potential to return next week against the Dolphins, their continued absence would ensure that Ertz continues to see plenty of targets.",
    "timestamp": "2019-11-24 02:15 PM",
    "week01": 7.9,
    "week02": 13.2,
    "week03": 8.4,
    "week04": 10.0,
    "week05": 14.2,
    "week06": 5.4,
    "week07": 4.8,
    "week08": 3.0,
    "week09": 20.8,
    "week10": "BYE",
    "week11": 13.9,
    "week12": 21.1,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0, 20.8, 'BYE', 13.9, 21.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 9.3, 'BYE', 11.1, 10.6, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 4.03,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 8.67,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Another forgettable performance",
    "report": "Howard brought in one of two targets for 10 yards in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "The final line was an all-too-familiar theme for Howard and his fantasy managers, with the third-year tight end recording his third game with one or zero catches on the campaign. Howard offered a glimmer of hope two games ago versus the Cardinals with a 4-47-1 line, but the subsequent pair of contests have essentially served to negate any momentum he may have briefly generated. Given how late it is into the season, there have to be serious doubts about coach Bruce Arians' willingness to incorporate Howard further into the offense, making him a highly speculative play against the Jaguars in Week 13.",
    "timestamp": "2019-11-24 06:59 PM",
    "week01": 3.2,
    "week02": 0.0,
    "week03": 8.1,
    "week04": 4.8,
    "week05": 1.5,
    "week06": 4.5,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 12.7,
    "week11": 0.0,
    "week12": 1.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP', 12.7, 0.0, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 7.6, 6.3, 6.7, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 8.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 5.48,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 10.05,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Worst game this season",
    "report": "McDonald caught his only target for one yard in Pittsburgh's 16-10 win over Cincinnati on Sunday.",
    "analysis": "McDonald wasn't targeted until the second half after being targeted seven times in each of his last three games. The one yard was his lowest production in 32 games dating back to October 2017. McDonald had three receptions for 33 yards against Week 13 opponent Cleveland two weeks ago, but he offers little value as fantasy playoffs approach.",
    "timestamp": "2019-11-24 04:01 PM",
    "week01": 5.0,
    "week02": 19.3,
    "week03": 1.5,
    "week04": "DNP",
    "week05": 4.9,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 3.4,
    "week09": 11.5,
    "week10": 2.8,
    "week11": 4.8,
    "week12": 0.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4, 11.5, 2.8, 4.8, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 3.5, 7.1, 3.4, 9.2, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 8.3,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 8.43,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 9.1,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Continues midseason surge",
    "report": "Cook caught six of eight targets for 99 yards and a touchdown during Sunday's 34-31 win against the Panthers.",
    "analysis": "The 32-year-old tight end finds himself amid a midseason renaissance, having accounted for 70-plus receiving yards or a touchdown in five consecutive games. Cook got off to an ice-cold start to the season with eight combined catches for 90 yards and zero touchdowns Weeks 1 through 4, but as the campaign has progressed, he's seen a higher percentage of offensive opportunities -- as exhibited by his per-game target share enhancing to 5.8 over his past six games, compared to just four targets per game Weeks 1 through 3. Cook's upcoming matchup against Atlanta does not provide optimal circumstances for a breakout performance, however, as the Falcons contained Tampa Bay tight ends to one combined catch for 10 yards Sunday, though Tampa Bay's offense under Bruce Arians hasn't featured much of the tight end in 2019.",
    "timestamp": "2019-11-24 03:15 PM",
    "week01": 4.7,
    "week02": 3.5,
    "week03": 1.2,
    "week04": 3.6,
    "week05": 12.1,
    "week06": 11.2,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 10.4,
    "week11": 10.3,
    "week12": 18.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4, 10.3, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 9.4, 4.4, 5.2, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 7.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 20,
    "avg_fp2": 11.21,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 4.83,
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
    "headlineNews": "Just two catches in win",
    "report": "Andrews caught two of three targets for 45 yards in Monday night's 45-6 win over the Rams.",
    "analysis": "Andrews was relatively quiet in Baltimore's runaway victory, as his first catch didn't come until late in the first half. He then came up with a 38-yard grab on the Ravens' opening series of the third quarter, boosting his numbers overall. In doing so, Andrews actually trailed only Miles Boykin for the team lead in receiving yards. Look for Andrews to be leaned on more heavily in a tough Week 13 matchup against the 49ers.",
    "timestamp": "2019-11-25 08:56 PM",
    "week01": 20.8,
    "week02": 21.2,
    "week03": 3.0,
    "week04": 11.1,
    "week05": 7.0,
    "week06": 10.9,
    "week07": 4.9,
    "week08": "BYE",
    "week09": 3.1,
    "week10": 20.3,
    "week11": 15.5,
    "week12": 5.5,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1, 20.3, 15.5, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.3, 8.3, 14.9, 10.1, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 7.4,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 8,
    "avg_fp2": 3.65,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 9.05,
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
    "headlineNews": "Zero catches in Week 12",
    "report": "Watson was on the field for 49 of a possible 70 snaps on offense in Sunday's 13-9 win over the Cowboys. He did not catch his lone target in the contest.",
    "analysis": "Meanwhile, fellow tight end Matt LaCosse logged 34 snaps and caught his only target for five yards. Game flow/weather/personnel availability led to Watson doing plenty of blocking Sunday, but there will be weeks going forward in which he makes more of an impact as a pass catcher. Even so, his fantasy upside is modest, given that he's yet to record a TD in five contests to date.",
    "timestamp": "2019-11-25 09:41 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 4.8,
    "week10": "BYE",
    "week11": 6.7,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE', 6.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 4.6, 8.9, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15887.png",
    "name": "Ryan Griffin",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 7.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 31,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.23,
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
    "headlineNews": "Strong run continues",
    "report": "Griffin caught all three of his targets for 13 yards and a touchdown in Sunday's 34-3 win over the Raiders.",
    "analysis": "Griffin only scored seven touchdowns in six seasons with the Texans, but he now has five touchdowns with the Jets in 2019, including four in the past five games. Given his productivity in green and white, it's no surprise the team opted to ink the 29-year-old tight end to an extension Saturday. Griffin's touchdown in this one came from one yard out on a beautifully designed play that had quarterback Sam Darnold look right before coming back left to Griffin with no Raiders on that side of the field.",
    "timestamp": "2019-11-24 06:09 PM",
    "week01": 2.5,
    "week02": 0.0,
    "week03": 1.0,
    "week04": "BYE",
    "week05": 0.7,
    "week06": 10.3,
    "week07": 0.6,
    "week08": 22.6,
    "week09": 8.0,
    "week10": 0.3,
    "week11": 19.4,
    "week12": 8.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 0.0, 1.0, 'BYE', 0.7, 10.3, 0.6, 22.6, 8.0, 0.3, 19.4, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.2, 1.5, 'BYE', 4.5, 6.7, 4.2, 2.9, 8.5, 1.5, 1.0, 5.5, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 7.0,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 21,
    "avg_fp2": 7.95,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 10.18,
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
    "headlineNews": "Catches five passes",
    "report": "Olsen caught five of seven targets for 44 yards in Sunday's 34-31 loss to the Saints.",
    "analysis": "Olsen placed third on the Panthers in all major receiving categories. Although Sunday's performance only produced a modest yardage total, Olsen has now hauled in at least five passes in three straight games. Next up for the veteran is a matchup against a Redskins defense that's allowed the eighth-most passing touchdowns this season.",
    "timestamp": "2019-11-25 06:40 AM",
    "week01": 5.6,
    "week02": 14.0,
    "week03": 22.5,
    "week04": 1.5,
    "week05": 0.0,
    "week06": 7.2,
    "week07": "BYE",
    "week08": 2.3,
    "week09": 5.5,
    "week10": 13.8,
    "week11": 8.2,
    "week12": 6.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3, 5.5, 13.8, 8.2, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 7.2, 10.4, 9.6, 8.1, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 7.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 5.76,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 10.24,
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
    "headlineNews": "Trio of receptions in Week 12 loss",
    "report": "Doyle hauled in three of four targets for 28 yards in the Colts' 20-17 loss to the Texans on Thursday.",
    "analysis": "Doyle tied with multiple teammates for second in receptions on the night, although it led to his seventh sub-30-yard tally of the season. The veteran has no fewer than three grabs in eight of his last nine contests, but his upside is generally capped unless he finds the end zone, which he's done on three occasions overall this season. Doyle will look for better production against the Titans in a Week 13 divisional matchup a week from Sunday.",
    "timestamp": "2019-11-21 09:26 PM",
    "week01": 2.5,
    "week02": 3.1,
    "week03": 6.6,
    "week04": 10.2,
    "week05": 3.4,
    "week06": "BYE",
    "week07": 3.6,
    "week08": 8.1,
    "week09": 9.7,
    "week10": 11.9,
    "week11": 0.0,
    "week12": 4.3,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7, 11.9, 0.0, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.0, 4.4, 3.1, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 6.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 29,
    "avg_fp2": 5.56,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 7.83,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Bottled up in Buffalo",
    "report": "Fant caught three of five targets for 14 yards during Sunday's 20-3 loss in Buffalo.",
    "analysis": "Fant caught a quick 16-yard pass following a Justin Simmons interception to push the Broncos into Bills territory. Brandon Allen sailed a pass six plays later to cough the ball back up. The Broncos weren't much of a threat for the remainder of the game. The luster of Week 9's win over the Browns has all but worn off by now, and, though Fant has been targeted at least five times in four of his last five games and made some big plays, his value is limited by the Broncos' quarterback situation. Next up is a Chargers defense that has been burned at times downfield this season.",
    "timestamp": "2019-11-24 04:37 PM",
    "week01": 3.4,
    "week02": 5.3,
    "week03": 3.2,
    "week04": 10.1,
    "week05": 1.1,
    "week06": 2.6,
    "week07": 1.2,
    "week08": 5.1,
    "week09": 19.0,
    "week10": "BYE",
    "week11": 7.3,
    "week12": 2.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 5.3, 3.2, 10.1, 1.1, 2.6, 1.2, 5.1, 19.0, 'BYE', 7.3, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 5.6, 0.5, 4.1, 2.9, 4.6, 8.9, 4.6, 3.5, 'BYE', 0.5, 3.0, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 6.3,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 13,
    "avg_fp2": 5.79,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 6.98,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Limited to one reception",
    "report": "Graham caught one pass for seven yards in Sunday's loss to the 49ers.",
    "analysis": "Graham could have had a few more yards had he come down with a tough catch in the second quarter, but he was only targeted twice on a night the 49ers shut down the entire Packers passing game. His quiet evening did not come as much of a surprise against a San Francisco team that has shut down opposing tight ends all season; and in the same manner, fantasy players should not be shocked if Graham struggles again Week 13 facing a Giants team that has limited opposing tight ends to just 3.1 receptions and 34.7 yards per game -- and just one touchdown -- from Week 2 onward.",
    "timestamp": "2019-11-25 09:15 AM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.8, 7.0, 'BYE', 5.9, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 5.4,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 19,
    "avg_fp2": 4.59,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 7.43,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Disappointing usage",
    "report": "Eifert had one catch for seven yards on his only target in Sunday's loss to the Steelers.",
    "analysis": "After a really nice game before the bye, and then two games in a row with four targets, this game was a bitter disappointment. The news that Andy Dalton is taking back over at quarterback does give some cause for hope for Eifert this week against the Jets.",
    "timestamp": "2019-11-25 07:08 PM",
    "week01": 5.2,
    "week02": 8.4,
    "week03": 2.3,
    "week04": 3.7,
    "week05": 2.4,
    "week06": 2.3,
    "week07": 2.0,
    "week08": 10.4,
    "week09": "BYE",
    "week10": 9.0,
    "week11": 3.6,
    "week12": 1.2,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE', 9.0, 3.6, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.2, 6.9, 9.8, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 5.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 23,
    "avg_fp2": 6.44,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 9.2,
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
    "headlineNews": "Targeted eight times in loss",
    "report": "Goedert caught seven of his eight targets for 32 yards in Sunday's loss to Seattle.",
    "analysis": "It was expected that Goedert would be one of the primary beneficiaries with Alshon Jeffery (ankle) and Nelson Agholor (knee) both out. The second-year tight end came in second on the team in targets and catches behind only Zach Ertz. While the 24-year-old set a season high in catches, it unfortunately didn't translate to many yards. Goedert will be a touchdown-dependent play Week 13 against Miami.",
    "timestamp": "2019-11-25 08:57 PM",
    "week01": 2.6,
    "week02": "DNP",
    "week03": 0.0,
    "week04": 8.6,
    "week05": 1.6,
    "week06": 7.3,
    "week07": 12.9,
    "week08": 9.7,
    "week09": 5.9,
    "week10": "BYE",
    "week11": 11.1,
    "week12": 4.7,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE', 11.1, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 'DNP', 5.9, 4.0, 4.1, 1.5, 4.3, 2.1, 3.6, 'BYE', 5.5, 5.5, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 4.26,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 8.67,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Invisible in Week 12 win",
    "report": "Brate failed to bring in his only target in the Buccaneers' 35-22 win over the Falcons on Sunday.",
    "analysis": "A week removed from a career-high 10-catch tally versus the Saints, Brate was a complete non-factor against the Falcons. At this stage of the season, trying to figure out how much the Buccaneers' tight ends -- be it Brate or O.J. Howard -- will be involved on any given week is pure guesswork, and neither player is therefore a reliable option heading into a Week 13 matchup versus the Jaguars.",
    "timestamp": "2019-11-24 07:05 PM",
    "week01": 1.8,
    "week02": 2.0,
    "week03": 1.7,
    "week04": 11.1,
    "week05": 1.6,
    "week06": 11.7,
    "week07": "BYE",
    "week08": 4.7,
    "week09": 0.0,
    "week10": 0.0,
    "week11": 12.3,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7, 0.0, 0.0, 12.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 9.0, 4.7, 3.0, 2.5, 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2970262.png",
    "name": "J.P. Holtz",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 4.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 9.27,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Scooped by Bears",
    "report": "The Bears claimed Holtz off waivers from the Redskins on Wednesday, Kevin Fishbain of The Athletic reports.",
    "analysis": "Holtz entered the league in 2016 as an undrafted rookie out of Pittsburgh, and he made his NFL debut for the Redskins in Week 1 since Jordan Reed (concussion) was out. The Bears appear to be looking for similar depth for Trey Burton (groin) in their Week 2 matchup versus the Broncos.",
    "timestamp": "2019-09-11 01:57 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 4.4,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 6,
    "avg_fp2": 5.45,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 10.87,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Limited again Tuesday",
    "report": "Hockenson (shoulder) was limited at Tuesday's walkthrough, Tim Twentyman of the Lions' official site reports.",
    "analysis": "Hockenson has maintained his activity through two injury reports this week, with Wednesday's version potentially clearing up his status for Thursday's game versus the Bears. Even if he suits up, though, he may split work with the Lions' other tight ends for a second straight contest. In this past Sunday's loss at Washington, Hockenson received 33 of 74 offensive snaps, while Jesse James handled 32 and Logan Thomas got 28.",
    "timestamp": "2019-11-26 02:31 PM",
    "week01": 22.1,
    "week02": 1.2,
    "week03": 0.6,
    "week04": 10.2,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 4.7,
    "week08": 2.6,
    "week09": 7.1,
    "week10": 6.2,
    "week11": 1.1,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 1.2, 0.6, 10.2, 'BYE', 4.1, 4.7, 2.6, 7.1, 6.2, 1.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 7.3, 5.2, 1.2, 'BYE', 3.4, 4.9, 5.5, 3.3, 4.9, 8.3, 9.3, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Backup: TE-2",
    "team": "Tennessee Titans",
    "projected": 4.4,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 4.28,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 9.43,
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
    "headlineNews": "Contributes nothing",
    "report": "Smith was not targeted in the team's Week 12 win over the Jaguars. He did rush the ball once for four yards.",
    "analysis": "Smith was slated to be the top tight end, replacing the injured Delanie Walker (ankle). However, he failed to produce in any meaningful way. With Walker practicing in limited fashion all week, he may be able to return in Week 13 against the Colts, which would all but eliminate any chance for Smith to contribute.",
    "timestamp": "2019-11-24 09:35 PM",
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 3.6, 7.7, 'BYE', 5.6, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980073.png",
    "name": "Jeremy Sprinkle",
    "depthchart": "Starter: TE-1",
    "team": "Washington Redskins",
    "projected": 4.3,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 32,
    "avg_fp2": 2.77,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 8.17,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Manages just four yards",
    "report": "Sprinkle caught one of two targets for four yards in Sunday's 19-16 win over the Lions.",
    "analysis": "Sprinkle has caught either one or two passes in each of Washington's 11 games this season, never going beyond 24 yards in any one contest. His role as the No. 1 tight end doesn't mean much for fantasy purposes, even with both Jordan Reed (concussion) and Vernon Davis (concussion) on injured reserve. Washington travels to Carolina for Week 13.",
    "timestamp": "2019-11-24 08:20 PM",
    "week01": 1.3,
    "week02": 1.6,
    "week03": 2.9,
    "week04": 2.5,
    "week05": 2.7,
    "week06": 3.4,
    "week07": 2.3,
    "week08": 2.2,
    "week09": 2.1,
    "week10": "BYE",
    "week11": 8.6,
    "week12": 0.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 1.6, 2.9, 2.5, 2.7, 3.4, 2.3, 2.2, 2.1, 'BYE', 8.6, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.7, 2.0, 1.6, 3.6, 1.8, 2.7, 1.8, 0.9, 'BYE', 3.8, 3.4, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15003.png",
    "name": "Rhett Ellison",
    "depthchart": "Backup: TE-2",
    "team": "New York Giants",
    "projected": 4.0,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 22,
    "avg_fp2": 3.17,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 12.79,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Won't face Bears",
    "report": "Coach Pat Shurmur confirmed Friday that Ellison (concussion) will not suit up against the Bears on Sunday, Paul Schwartz of the New York Post reports.",
    "analysis": "Ellison will miss his first game of the season as he nurses a head injury. With Evan Engram (foot) also ruled out for Sunday's contest, the Giants will be forced to proceed with Kaden Smith and Scott Simonson as the only healthy tight ends on the 53-man roster.",
    "timestamp": "2019-11-22 08:07 AM",
    "week01": 1.3,
    "week02": 1.3,
    "week03": 0.8,
    "week04": 3.9,
    "week05": 0.8,
    "week06": 4.5,
    "week07": 10.3,
    "week08": 0.4,
    "week09": 2.7,
    "week10": 5.7,
    "week11": "BYE",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 1.3, 0.8, 3.9, 0.8, 4.5, 10.3, 0.4, 2.7, 5.7, 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 0.1, 0.1, 1.0, 1.8, 2.1, 2.6, 1.8, 2.7, 0.9, 'BYE', 'DNP', 4.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Oakland Raiders",
    "projected": 3.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 16,
    "avg_fp2": 4.27,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 9.65,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Tallies one catch in blowout loss",
    "report": "Moreau caught his lone target for three yards in Sunday's 34-3 loss to the Jets.",
    "analysis": "Fellow tight end Darren Waller caught three of six targets for 41 yards as Moreau logged just 19 offensive snaps, while the entire Raiders offense was held in check during this blowout loss. A favorable matchup against the Chiefs awaits in Week 13, but Waller will continue to overshadow Moreau from a fantasy perspective.",
    "timestamp": "2019-11-26 09:33 AM",
    "week01": 3.0,
    "week02": 0.0,
    "week03": 0.6,
    "week04": 10.5,
    "week05": 6.6,
    "week06": "BYE",
    "week07": 9.4,
    "week08": 1.5,
    "week09": 6.8,
    "week10": 0.0,
    "week11": 7.8,
    "week12": 0.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 0.0, 0.6, 10.5, 6.6, 'BYE', 9.4, 1.5, 6.8, 0.0, 7.8, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.0, 2.6, 0.5, 2.5, 2.7, 'BYE', 4.3, 4.8, 4.5, 0.4, 9.6, 7.0, 3.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 3.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 6.24,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 5.03,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Rough game against Pats",
    "report": "Witten caught one of four targets for five yards in Sunday's loss to the Patriots.",
    "analysis": "While the weather and the opponent were both factors, this was still Witten's worst performance of the season in terms of catches and yards. Blake Jarwin has looked consistently more dangerous as a receiver all year, but as yet the Cowboys don't seem inclined to put the 37-year-old Witten in mothballs.",
    "timestamp": "2019-11-25 12:17 PM",
    "week01": 9.0,
    "week02": 10.5,
    "week03": 6.9,
    "week04": 5.0,
    "week05": 4.4,
    "week06": 8.2,
    "week07": 5.3,
    "week08": "BYE",
    "week09": 9.8,
    "week10": 2.7,
    "week11": 5.8,
    "week12": 1.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8, 2.7, 5.8, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 14.1, 9.7, 6.8, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 3.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 5.85,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 10.45,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Wrist",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Status TBD for Week 13",
    "report": "Coach Freddie Kitchens hasn't made a decision on the status of Njoku (wrist) for Sunday's game in Pittsburgh, Andrew Gribble of the Browns' official site reports. \"We will just have to see,\" Kitchens said Monday. \"It is a day-to-day kind of thing.\"",
    "analysis": "Njoku returned to practice last Wednesday, but his ensuing activity wasn't enough for the Browns to elevate him to the 53-man roster for Sunday's visit to Miami. He'll have a few more chances to prove he's healthy this week, but Kitchens also noted \"our tight ends have been doing a pretty good job.\" Until Njoku returns to action, Demetrius Harris will be the Browns' primary TE, with Ricky Seals-Jones, Pharaoh Brown and Stephen Carlson mixing in behind Harris in some combination.",
    "timestamp": "2019-11-25 05:02 PM",
    "week01": 11.7,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 3.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576804.png",
    "name": "Nick O'Leary",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 3.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 10,
    "avg_fp2": 1.41,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 13.33,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Hauls in four passes",
    "report": "O'Leary caught all four targets for 36 yards in Sunday's loss to the Titans.",
    "analysis": "The 27-year-old signed with Jacksonville last week and led the team's tight ends in snaps with Seth DeValve (oblique) sidelined. The catch total equaled O'Leary's previous season production, despite playing seven games with the Dolphins. O'Leary should continue to work as the Jaguars' top pass-catching tight end until DeValve returns, but any worthwhile fantasy production is liable to be touchdown dependent.",
    "timestamp": "2019-11-25 11:09 AM",
    "week01": 0.0,
    "week02": 1.1,
    "week03": 2.4,
    "week04": 1.4,
    "week05": "DNP",
    "week06": 0.8,
    "week07": 0.0,
    "week08": 0.0,
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 5.6,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.1, 2.4, 1.4, 'DNP', 0.8, 0.0, 0.0, 'DNP', 'BYE', 'DNP', 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 0.1, 0.7, 4.4, 'DNP', 0.1, 0.3, 2.3, 'DNP', 'BYE', 'DNP', 2.9, 3.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 3.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 12,
    "avg_fp2": 7.06,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 7.55,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Another red zone target in win",
    "report": "Fells caught one of two targets for 24 yards in Thursday's 20-17 win over the Colts in Week 12.",
    "analysis": "Fells had one long catch to set up the Texans' first field goal and added his team-leading 10th red-zone target, one of only two plays Houston ran inside the Colts' 20-yard-line. The 33-year-old Fells has scored six touchdowns, all from the red zone, and is tied for the lead among tight ends in TD receptions. He does have more competition for snaps now that Jordan Thomas is back from injured reserve.",
    "timestamp": "2019-11-22 05:00 AM",
    "week01": 0.0,
    "week02": 1.4,
    "week03": 13.4,
    "week04": 1.7,
    "week05": 15.0,
    "week06": 9.9,
    "week07": 3.7,
    "week08": 20.8,
    "week09": 6.6,
    "week10": "BYE",
    "week11": 2.3,
    "week12": 2.9,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE', 2.3, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.6, 'BYE', 7.2, 4.2, 3.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3118954.png",
    "name": "Jaeden Graham",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 3.0,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 3,
    "avg_fp2": 1.21,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 8.37,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Tears off 53-yard gain",
    "report": "Graham caught one of two targets for 53 receiving yards during Sunday's 35-22 loss to the Buccaneers.",
    "analysis": "The 24-year-old tight end was able to exploit an open zone in the Tampa Bay secondary on Atlanta's opening drive, hauling in Matt Ryan's first pass attempt of the afternoon for a colossal gain and setting up a chip-shot field goal from Younghoe Koo. Despite a notable splash play against the Buccaneers, Graham has only garnered four total targets in two games with Austin Hooper (knee-MCL) out of the lineup, keeping his fantasy upside relatively limited heading into a Thanksgiving matchup against the Saints' No. 12 pass defense.",
    "timestamp": "2019-11-24 06:55 PM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 2.6,
    "week07": 0.0,
    "week08": 1.6,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 3.3,
    "week12": 5.8,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 2.6, 0.0, 1.6, 'BYE', 0.0, 3.3, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.0, 1.6, -0.3, -1.0, -1.6, -2.3, 1.5, -0.8, 'BYE', -0.8, -0.7, 4.1, 3.0]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 8.6,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 32,
    "opp_avg_pts": 13.09,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.09,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.45,
    "week01": 2.0,
    "week02": 5.0,
    "week03": 13.0,
    "week04": 14.0,
    "week05": 8.0,
    "week06": 19.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 11.0,
    "week10": 2.0,
    "week11": 2.0,
    "week12": 3.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0, 2.0, 2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5, 7.5, 5.1, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 8.6,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 30,
    "opp_avg_pts": 14.27,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 21.91,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.45,
    "week01": 1.0,
    "week02": 7.0,
    "week03": 4.0,
    "week04": 5.0,
    "week05": 23.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 12.0,
    "week09": 4.0,
    "week10": "BYE",
    "week11": 2.0,
    "week12": 11.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE', 2.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 8.9, 'BYE', 5.4, 7.0, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 8.4,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.27,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 17.82,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.18,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": -1.0,
    "week05": 5.0,
    "week06": 5.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": 7.0,
    "week10": 12.0,
    "week11": 15.0,
    "week12": 13.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0, 15.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.1, 7.1, 8.1, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 8.2,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.18,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.27,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.36,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 10.09,
    "week01": 0.0,
    "week02": 7.0,
    "week03": 11.0,
    "week04": 19.0,
    "week05": 11.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 13.0,
    "week09": 13.0,
    "week10": 16.0,
    "week11": 1.0,
    "week12": 12.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0, 16.0, 1.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.7, 8.5, 8.3, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 7.9,
    "opponent": "New York Jets",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.09,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 26.55,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 3.27,
    "week01": 6.0,
    "week02": -2.0,
    "week03": 5.0,
    "week04": 2.0,
    "week05": 1.0,
    "week06": 9.0,
    "week07": 2.0,
    "week08": 0.0,
    "week09": "BYE",
    "week10": -1.0,
    "week11": 8.0,
    "week12": 6.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE', -1.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 5.4, 5.3, 5.9, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 7.8,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 31,
    "opp_avg_pts": 13.45,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 23.45,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.91,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.55,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 5.64,
    "week01": 12.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 3.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 3.0,
    "week09": 6.0,
    "week10": 10.0,
    "week11": 9.0,
    "week12": 10.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0, 10.0, 9.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9, 7.7, 6.9, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 7.7,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 28,
    "opp_avg_pts": 16.55,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.45,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.82,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmTextLite": "#0076B6",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 5.0,
    "week01": 7.0,
    "week02": 9.0,
    "week03": 13.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": 7.0,
    "week07": -4.0,
    "week08": 5.0,
    "week09": 0.0,
    "week10": 6.0,
    "week11": -1.0,
    "week12": 8.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0, 6.0, -1.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.8, 5.7, 6.8, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 7.7,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 8,
    "opp_avg_pts": 26.09,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 22.73,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.73,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.18,
    "week01": 12.0,
    "week02": 3.0,
    "week03": 1.0,
    "week04": 10.0,
    "week05": 3.0,
    "week06": 7.0,
    "week07": 1.0,
    "week08": 9.0,
    "week09": 3.0,
    "week10": 11.0,
    "week11": "BYE",
    "week12": 19.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0, 11.0, 'BYE', 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 7.1, 7.1, 'BYE', 7.7, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 7.6,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.27,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 20.73,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.18,
    "week01": 5.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": 3.0,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 9.0,
    "week08": 6.0,
    "week09": 8.0,
    "week10": 8.0,
    "week11": 8.0,
    "week12": 4.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0, 8.0, 8.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.3, 7.6, 6.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.6,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 26,
    "opp_avg_pts": 19.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 30.27,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.73,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.55,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 5.0,
    "week01": 6.0,
    "week02": 9.0,
    "week03": 8.0,
    "week04": 9.0,
    "week05": 1.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 1.0,
    "week10": 6.0,
    "week11": 0.0,
    "week12": 10.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0, 6.0, 0.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 7.2, 6.0, 5.9, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 7.4,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 14,
    "opp_avg_pts": 22.64,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 28.91,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 3.55,
    "week01": 5.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.0,
    "week05": 1.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 1.0,
    "week09": 0.0,
    "week10": 9.0,
    "week11": 2.0,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0, 9.0, 2.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.9, 5.3, 'BYE', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 7.4,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.55,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 22.0,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.91,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.82,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 7.18,
    "week01": 9.0,
    "week02": 8.0,
    "week03": 9.0,
    "week04": 0.0,
    "week05": 2.0,
    "week06": 9.0,
    "week07": 15.0,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 10.0,
    "week11": 9.0,
    "week12": -1.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE', 10.0, 9.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 5.8, 9.1, 6.7, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 7.3,
    "opponent": "New York Giants",
    "opp_rank_pts": 23,
    "opp_avg_pts": 19.91,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 22.0,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.27,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 5.91,
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.3, 7.6, 'BYE', 5.5, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 7.3,
    "opponent": "Houston Texans",
    "opp_rank_pts": 9,
    "opp_avg_pts": 24.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 10.09,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 13.45,
    "week01": 10.0,
    "week02": 25.0,
    "week03": 14.0,
    "week04": 17.0,
    "week05": 14.0,
    "week06": 10.0,
    "week07": 25.0,
    "week08": 15.0,
    "week09": 1.0,
    "week10": "BYE",
    "week11": 11.0,
    "week12": 6.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE', 11.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.3, 'BYE', 8.3, 9.4, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 7.2,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 12,
    "opp_avg_pts": 23.09,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 16.91,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.55,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 17.0,
    "week04": 17.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 4.0,
    "week09": 4.0,
    "week10": 8.0,
    "week11": 5.0,
    "week12": 4.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0, 8.0, 5.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.9, 9.5, 9.5, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 7.1,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 29,
    "opp_avg_pts": 15.91,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 19.82,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 4,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.36,
    "week01": 2.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 14.0,
    "week06": 2.0,
    "week07": 4.0,
    "week08": 9.0,
    "week09": 7.0,
    "week10": 4.0,
    "week11": 5.0,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0, 4.0, 5.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.1, 7.2, 'BYE', 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 6.8,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 11,
    "opp_avg_pts": 23.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 24.45,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.09,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.0,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": 5.0,
    "week06": 10.0,
    "week07": 8.0,
    "week08": 6.0,
    "week09": 2.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 14.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0, 2.0, 'BYE', 5.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3, 'BYE', 6.8, 6.3, 6.8]
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
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 17,
    "opp_avg_pts": 22.09,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.27,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 2.55,
    "week01": -3.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.0,
    "week07": 1.0,
    "week08": 4.0,
    "week09": 8.0,
    "week10": 11.0,
    "week11": 2.0,
    "week12": -1.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0, 11.0, 2.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.5, 6.6, 7.7, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 6.7,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 28.45,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.0,
    "week01": -4.0,
    "week02": 8.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": 11.0,
    "week08": 15.0,
    "week09": 5.0,
    "week10": "BYE",
    "week11": 4.0,
    "week12": 1.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0, 5.0, 'BYE', 4.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.5, 'BYE', 5.7, 5.9, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 6.6,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.82,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 19.18,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 5.64,
    "week01": 0.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 5.0,
    "week05": 10.0,
    "week06": 23.0,
    "week07": 0.0,
    "week08": 7.0,
    "week09": 3.0,
    "week10": "BYE",
    "week11": 9.0,
    "week12": 4.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0, 3.0, 'BYE', 9.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.4, 'BYE', 6.3, 6.4, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.3,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 25,
    "opp_avg_pts": 19.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 22.91,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.82,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.0,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 9.0,
    "week04": 10.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 5.0,
    "week10": 2.0,
    "week11": 16.0,
    "week12": 8.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0, 2.0, 16.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.2, 6.8, 8.2, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.2,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 34.45,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 14.82,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 11.36,
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1, 5.6, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.2,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.45,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.36,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.36,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 8.0,
    "week04": 11.0,
    "week05": 6.0,
    "week06": 11.0,
    "week07": 8.0,
    "week08": 8.0,
    "week09": "BYE",
    "week10": 3.0,
    "week11": 11.0,
    "week12": 3.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0, 11.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2, 6.4, 7.8, 6.2]
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
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 22,
    "opp_avg_pts": 20.73,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 22.64,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.73,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 6.27,
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8, 'BYE', 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 6.1,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 22.82,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 27.82,
    "team_ranked_takeaways": 19,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 4.36,
    "week01": -4.0,
    "week02": 2.0,
    "week03": 7.0,
    "week04": 18.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 7.0,
    "week09": 0.0,
    "week10": 1.0,
    "week11": "BYE",
    "week12": 7.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0, 0.0, 1.0, 'BYE', 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.7, 7.1, 'BYE', 7.2, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.0,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.18,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 19.09,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 6.36,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 11.0,
    "week04": 11.0,
    "week05": 1.0,
    "week06": 4.0,
    "week07": 15.0,
    "week08": "BYE",
    "week09": 12.0,
    "week10": 0.0,
    "week11": 3.0,
    "week12": 6.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0, 0.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.3, 6.7, 5.4, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.5,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 18,
    "opp_avg_pts": 22.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.73,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 7.64,
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
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.4, 6.2, 'BYE', 7.1, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 5.4,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 7,
    "opp_avg_pts": 26.55,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.82,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.45,
    "week01": 14.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 5.0,
    "week05": 12.0,
    "week06": 9.0,
    "week07": 3.0,
    "week08": 12.0,
    "week09": 7.0,
    "week10": 3.0,
    "week11": 4.0,
    "week12": "BYE",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0, 4.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.5, 8.0, 'BYE', 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 5.2,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 10,
    "opp_avg_pts": 24.0,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.09,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.82,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 4.0,
    "week01": 0.0,
    "week02": 10.0,
    "week03": 1.0,
    "week04": 0.0,
    "week05": -2.0,
    "week06": -1.0,
    "week07": -4.0,
    "week08": 2.0,
    "week09": "BYE",
    "week10": 10.0,
    "week11": 26.0,
    "week12": 2.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE', 10.0, 26.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.6, 6.0, 5.3, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 5.1,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 28.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 25.82,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.73,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 4.27,
    "week01": 4.0,
    "week02": 3.0,
    "week03": -1.0,
    "week04": 4.0,
    "week05": 8.0,
    "week06": "BYE",
    "week07": -3.0,
    "week08": 3.0,
    "week09": 6.0,
    "week10": 10.0,
    "week11": 13.0,
    "week12": 0.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0, 10.0, 13.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.6, 6.8, 7.0, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 5.1,
    "opponent": "New England Patriots",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.09,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 22.45,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.18,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 4.91,
    "week01": 2.0,
    "week02": 10.0,
    "week03": 5.0,
    "week04": 10.0,
    "week05": 3.0,
    "week06": 5.0,
    "week07": 2.0,
    "week08": 0.0,
    "week09": 18.0,
    "week10": "BYE",
    "week11": -3.0,
    "week12": 2.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE', -3.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.0, 'BYE', 4.6, 6.6, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 4.8,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 6,
    "opp_avg_pts": 26.82,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 14.73,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.73,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 8.18,
    "week01": 10.0,
    "week02": 6.0,
    "week03": 13.0,
    "week04": 3.0,
    "week05": 11.0,
    "week06": "BYE",
    "week07": 7.0,
    "week08": 4.0,
    "week09": 8.0,
    "week10": 5.0,
    "week11": 10.0,
    "week12": 13.0,
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0, 10.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 7.8, 9.1, 7.6, 4.8]
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