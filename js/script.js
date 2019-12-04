var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 04 December 2019 02:57 PM (central time)"};
$scope.week = {"nflWeek": 14};

$scope.qbStartSit = {"one": "Jacoby Brissett", "two": "Devlin Hodges", "three": "Kirk Cousins", "four": "Sam Darnold", "five": "Kyle Allen", "six": "Drew Brees", "seven": "Patrick Mahomes", "eight": "Gardner Minshew", "nine": "Mitchell Trubisky", "ten": "Deshaun Watson"};
$scope.rbStartSit = {"one": "Dalvin Cook", "two": "Nick Chubb", "three": "Le'Veon Bell", "four": "Devonta Freeman", "five": "Sony Michel", "six": "Patrick Laird", "seven": "Damien Williams", "eight": "Marlon Mack", "nine": "Tevin Coleman", "ten": "Ronald Jones"};
$scope.wrStartSit = {"one": "Zach Pascal", "two": "Stefon Diggs", "three": "JuJu Smith-Schuster", "four": "Alshon Jeffery", "five": "D.J. Moore", "six": "Tyreek Hill", "seven": "Marquise Brown", "eight": "D.J. Chark", "nine": "Michael Thomas", "ten": "DeAndre Hopkins"};
$scope.teStartSit = {"one": "Vance McDonald", "two": "Jack Doyle", "three": "Tyler Higbee", "four": "Darren Waller", "five": "Jonnu Smith", "six": "Jared Cook", "seven": "Nick O'Leary", "eight": "Mark Andrews", "nine": "Dawson Knox", "ten": "Darren Fells"};
$scope.dstStartSit = {"one": "Cleveland Browns", "two": "Green Bay Packers", "three": "New York Jets", "four": "Miami Dolphins", "five": "Houston Texans", "six": "Buffalo Bills", "seven": "New Orleans Saints", "eight": "New England Patriots", "nine": "Indianapolis Colts", "ten": "Kansas City Chiefs"};

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
    "projected": 24.8,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 19.1,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 18.92,
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
    "headlineNews": "Throws four touchdowns in snow",
    "report": "Rodgers completed 21 of 33 passes for 243 yards and four touchdowns during Sunday's 31-13 win over the Giants. He added 24 yards on three carries.",
    "analysis": "The field was covered in snow in the Meadowlands, so conventional wisdom might have leaned toward a ground-and-pound game. Rodgers and the Packers went against that early with two passing touchdowns on the team's first two drives, including a deep 37-yard shot to Allen Lazard off of play action. The two touchdowns were as many as Rodgers had mustered in his previous three contests combined. The veteran passer has been inconsistent in his production under head coach Matt LaFleur's new system, with four games of under 225 yards and six games with one or no touchdowns. Sunday showed, however, that he's still capable of top-level output, and he gets another favorable matchup against Washington on Sunday.",
    "timestamp": "2019-12-01 01:40 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46, 28.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.5, 22.1, 'BYE', 14.1, 23.0, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 23.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 30,
    "avg_fp2": 16.76,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 22.65,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Dealing with pair of injuries",
    "report": "Darnold emerged from Sunday's 22-6 loss at Cincinnati with a knee injury and bruised ribs, Ralph Vacchiano of SportsNet New York reports.",
    "analysis": "Darnold incurred four sacks and nine quarterback hits en route to 28-for-48 passing, 239 yards, no touchdowns and no interceptions. Near the end of the contest, he was seen with a visible limp, which he chalked up as a foot injury, per Olivia Landis of the Jets' official site. Coach Adam Gase clarified Darnold's health concerns Monday but also stated he expects the second-year signal-caller to be \"fine.\" Wednesday's injury report will reveal how much Darnold was able to practice to kick off Week 14 prep.",
    "timestamp": "2019-12-02 11:29 AM",
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
    "week13": 10.46,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5, 21.7, 26.42, 28.2, 10.46]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.3, 12.6, 15.5, 16.2, 23.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 21.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 19.7,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 16.4,
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
    "headlineNews": "Efficient in win",
    "report": "Winston completed 21 of 33 passes for 268 yards with no touchdowns or interceptions in the Buccaneers' 28-11 win over the Jaguars on Sunday. He also rushed six times for 20 yards and lost a fumble.",
    "analysis": "The one turnover was the only blemish on Winston's day, as the fifth-year pro otherwise played a rock-solid game. Winston surprisingly enjoyed his greatest success targeting Breshad Perriman, with whom he connected on five occasions for 87 yards, and O.J. Howard, who also was on the receiving end of five Winston completions for a change. Winston's interception-free performance was his first since Week 9 and only his fourth of the season, and he'll look to replicate that feat versus the Colts in a Week 14 interconference battle.",
    "timestamp": "2019-12-01 01:42 PM",
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
    "week13": 10.72,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2, 20.32, 18.82, 26.32, 10.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 22.0, 19.5, 15.9, 20.5, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 20.8,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 16.54,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 19.34,
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
    "headlineNews": "Quiet in loss to Ravens",
    "report": "Garoppolo completed 15 of 21 passes for 165 yards and a touchdown in Sunday's 20-17 loss to the Ravens. He also rushed three times for five yards and lost a fumble.",
    "analysis": "Garoppolo went for it all on fourth-and-2 on San Francisco's opening drive and was rewarded with a 33-yard touchdown to Deebo Samuel. Unfortunately for Garoppolo, things only went downhill from there, as the 49ers finished with more yards rushing than passing. Garoppolo couldn't replicate his early fourth-down success in a critical fourth-quarter situation, as his fourth-and-1 pass to George Kittle from Baltimore's 35-yard line with 6:35 remaining fell incomplete. The Ravens milked the rest of the clock before breaking a 17-17 tie with a field goal as time expired. Garoppolo will bring a 21:10 TD:INT into another difficult road matchup against the Saints in Week 14.",
    "timestamp": "2019-12-01 02:17 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7, 16.1, 9.7, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 20.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 25,
    "avg_fp2": 27.89,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 13.25,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Dominates with legs",
    "report": "Jackson completed 14 of 23 passes for 105 yards and a touchdown while rushing 16 times for 101 yards and a touchdown and losing a fumble in Sunday's 20-17 win over San Francisco.",
    "analysis": "Jackson eclipsed 60 rushing yards for the 10th time in 12 games this season, including each of the past nine, and he became the first quarterback in NFL history to rush for over 100 yards four times in one season. He lost a fumble for the first time all season, marking his first turnover since Week 5, but Jackson also threw a 20-yard touchdown pass to Mark Andrews and scored with his legs from one yard out. Despite throwing for a season-low 105 yards, Jackson still commanded the offense effectively and orchestrated a wonderful final drive that used up the final 6:28 and set up Justin Tucker for a game-winning 49-yard field goal. Given his unparalleled ability as a runner at the quarterback position, Jackson will remain a must-start option Week 14, despite a tricky matchup in Buffalo.",
    "timestamp": "2019-12-01 01:10 PM",
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
    "week13": 22.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62, 33.42, 33.48, 36.26, 22.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 24.6, 20.6, 21.5, 20.4, 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 20.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 22.79,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.09,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Captures division lead with MNF win",
    "report": "Wilson completed 21 of 31 passes for 240 yards, two touchdowns and an interception in Monday's 37-30 win over the Vikings.",
    "analysis": "If the Seahawks hadn't pulled off the comeback, Wilson may have been haunted by a bizarre pick-six in the second quarter -- his initial pass was swatted back towards him at the line of scrimmage, but his attempt to knock the ball to the ground for an incompletion instead went straight to Vikings linebacker Erik Harris, who took it to the house. However, Wilson bounced back in MVP fashion, leading five straight scoring drives and totaling 27 points in the second half. The Seahawks have won five consecutive games to get to 10-2 and take the NFC West lead, with a Week 14 matchup against the Rams looming.",
    "timestamp": "2019-12-02 08:41 PM",
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
    "week13": 17.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22, 17.58, 'BYE', 10.5, 17.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 24.3, 19.0, 'BYE', 22.4, 20.1, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 20.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 8,
    "avg_fp2": 17.8,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 19.25,
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
    "headlineNews": "Late flurry leads to strong line",
    "report": "Brady completed 24 of 47 pass attempts for 326 yards, three touchdowns and an interception in Sunday's 28-22 loss to Houston.",
    "analysis": "Brady was looking like he was losing the fight with Father Time for the first half of this contest, but the ageless wonder caught fire in the second half and nearly pulled off an incredible comeback on the back of his three touchdown passes. The lack of an outside threat has certainly put a cap on what Brady can do, as he is forced to dink and dunk his way down the field these days (career-low 6.7 yards per attempt). Brady may not be the top-five fantasy quarterback this season we have become accustomed to in the past, but he is still putting together a solid fantasy year with 3,268 yards and 18 touchdowns with few mistakes (seven total turnovers through 12 games). The 41-year-old may need to go over 300 passing yards yet again in order to keep up with Kansas City's offense in Week 14.",
    "timestamp": "2019-12-01 11:00 PM",
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
    "week13": 25.34,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE', 8.54, 11.3, 25.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.1, 'BYE', 14.7, 18.2, 17.0, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 19.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 22,
    "avg_fp2": 20.34,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 14.71,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Rough day against Rams",
    "report": "Murray completed 19 of 34 passes for 163 yards and an interception while adding 28 rushing yards and a touchdown on four carries in Sunday's 34-7 loss to the Rams.",
    "analysis": "The rookie QB couldn't get anything going through the air in large part due to the Rams' pass rush, which was able to sack Murray six times. He did salvage his day from a personal standpoint with his fourth rushing TD of the year, however, Murray will need better protection if he's going to rebound in Week 14 when the Cardinals host the Steelers.",
    "timestamp": "2019-12-01 05:52 PM",
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
    "week13": 14.32,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04, 27.76, 26.7, 'BYE', 14.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 19.9, 10.8, 'BYE', 15.6, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127051.png",
    "name": "Devlin Hodges",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 19.7,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 9.86,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 25.24,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Confirmed to start Week 14",
    "report": "Hodges will start Sunday's game against the Cardinals, Mark Kaboly of The Athletic reports.",
    "analysis": "The announcement comes as little surprise considering Hodges performed reasonably well during Sunday's win over the Browns, completing 14 of 21 passes for 212 yards with one touchdown and one interception. The undrafted rookie hasn't offered much fantasy production despite his solid work as a replacement quarterback thus far, but Sunday's game in Arizona provides a matchup against a porous pass defense that ranks worst in the league in yardage allowed (307.5 YPG) and opponent QB rating (113.5).",
    "timestamp": "2019-12-03 09:54 AM",
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
    "week13": 11.68,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.08, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.82, 11.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 16.6, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 19.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 18.19,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.08,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Comes up short in Week 13 loss",
    "report": "Cousins completed 22 of 38 passes for 276 yards with two touchdowns and one interception in the Vikings' 37-30 loss to the Seahawks on Monday.",
    "analysis": "Cousins had to make do without the services of Adam Thielen (hamstring) once again, which diluted his options in what turned out to be a high-scoring affair. The veteran quarterback battled through, however, hitting Laquon Treadwell and Kyle Rudolph for touchdown passes of 58 and three yards, respectively, in the fourth quarter to almost spearhead a comeback from a 34-17 deficit. However, Cousins' one error was a costly one, as his interception on the first play of the final period gave the Seahawks the ball at the Vikings' 25-yard line, field position they'd turn into a Rashaad Penny touchdown catch. The pick was only Cousins' fourth of the season, and he did mange to extend his multi-touchdown streak to four games. He'll look to help Minnesota bounce back in a Week 14 divisional battle versus the Lions.",
    "timestamp": "2019-12-02 08:56 PM",
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
    "week13": 18.04,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3, 21.3, 22.86, 'BYE', 18.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 19.8, 13.5, 'BYE', 13.5, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 18.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 22.89,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 14.52,
    "fanduelSalary": "$15500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Salvages day in garbage time",
    "report": "Prescott completed 32 of 49 passes for 355 yards and two touchdowns with one interception in Thursday's 26-15 loss to the Bills.",
    "analysis": "He also gained 25 rushing yards on four carries and completed a two-point conversion to Jason Witten. While the quarterback's final line looks just fine from a fantasy perspective, he struggled for much of the game in the face of a ferocious Buffalo pass rush that sacked him four times and forced two fumbles, one of which Dallas lost. Prescott will try to turn things around for the reeling Cowboys next week on the road against the Bears.",
    "timestamp": "2019-11-28 05:38 PM",
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
    "week13": 25.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48, 26.88, 31.56, 7.88, 25.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.6, 15.4, 16.9, 16.2, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 18.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 21.59,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 11.16,
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
    "headlineNews": "Surprisingly quiet in rout",
    "report": "Mahomes completed 15 of 29 passes for 175 yards and a touchdown while adding 25 yards and a TD on three carries in Sunday's 40-9 win over the Raiders.",
    "analysis": "On a windy day at Arrowhead Stadium, the Chiefs did most of their damage on the ground with three rushing touchdowns, including Mahomes' 13-yard scamper. The quarterback has now  shockingly failed to top 200 passing yards in three of his last four games, although there were extenuating circumstances for each poor performance, and they are sandwiched around a 446-yard, three-TD eruption against the Titans. Mahomes may not be able to afford another quiet outing in Week 14's road clash with the Patriots.",
    "timestamp": "2019-12-01 06:45 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5, 'BYE', 21.0, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 18.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 17,
    "avg_fp2": 15.26,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 21.37,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Limited at practice Wednesday",
    "report": "Mayfield (right hand/ribs) was listed as a limited practice participant Wednesday, Mary Kay Cabot of The Cleveland Plain Dealer reports.",
    "analysis": "In addition to his previously reported hand injury -- which is being described as a contusion or bruise, Mayfield is also listed as having a rib issue. Per the Browns' official site, Mayfield has yet to throw since this past Sunday's loss to the Steelers, but when asked if he expects to play on this weekend against the Bengals, the QB said \"I do,\" while acknowledging that his Week 14 availability is largely a pain tolerance matter.",
    "timestamp": "2019-12-04 12:47 PM",
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
    "week13": 9.04,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12, 17.62, 21.82, 24.58, 9.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 12.0, 19.8, 25.9, 19.5, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 17.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 11,
    "avg_fp2": 16.66,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 14.34,
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
    "headlineNews": "Back as starting QB",
    "report": "Minshew will return as the Jaguars' starting quarterback Sunday against the Chargers, Michael DiRocco of ESPN.com reports.",
    "analysis": "Taking over for a futile Nick Foles this past Sunday versus the Buccaneers, Minshew fared slightly better during the 28-11 loss. Overall this season, Minshew has completed 61 percent of his passes, averaged 243.2 yards per game and posted a 14:5 TD:INT in 10 appearances.",
    "timestamp": "2019-12-02 11:13 AM",
    "week01": 18.6,
    "week02": 16.12,
    "week03": 17.96,
    "week04": 16.72,
    "week05": 21.16,
    "week06": 5.62,
    "week07": 23.0,
    "week08": 23.96,
    "week09": 9.76,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 13.68,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.6, 16.12, 17.96, 16.72, 21.16, 5.62, 23.0, 23.96, 9.76, 'BYE', 'DNP', 'DNP', 13.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 15.4, 15.4, 9.3, 13.3, 19.5, 22.7, 13.5, 22.9, 'BYE', 'DNP', 'DNP', 6.4, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 17.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 9,
    "avg_fp2": 16.51,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.03,
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
    "headlineNews": "Struggles in win",
    "report": "Brees completed 18 of 30 pass attempts for 184 yards, one touchdown and no interceptions, losing one yard on his lone rushing attempt in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "Brees finished with easily his worst game of the 2019 campaign, failing to pass for at least 200 yards in a full game for the first time all season. Brees also matched a season-low in completion percentage (60) among games that he finished. The veteran signal-caller has played solid football since returning from a thumb injury in Week 8, and it was discouraging to see this kind of performance against a below-average Falcons defense. Things won't get any easier for the quarterback in Week 14 when the Saints face the 49ers in an important NFC showdown.",
    "timestamp": "2019-11-28 08:48 PM",
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
    "week13": 11.26,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48, 21.12, 23.44, 11.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.4, 17.6, 21.9, 16.6, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116188.png",
    "name": "David Blough",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 16.7,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 18.3,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 16.87,
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
    "headlineNews": "In line to continue starting",
    "report": "Blough is expected to remain the starter until the return of Matthew Stafford (back) after backup Jeff Driskel (hamstring) was placed on injured reserve Saturday, Ian Rapoport of NFL Network reports.",
    "analysis": "Blough was surprisingly stout in his professional debut Thursday, carving through the Bears' defense and keeping the contest close throughout. The 24-year-old looks to be in line for more starts along the way, as Matthew Stafford doesn't seem close to a return (back) and former backup Jeff Driskel is on injured reserve, so Blough should be in line to take on the Vikings in Week 14.",
    "timestamp": "2019-11-30 12:34 PM",
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
    "week12": "DNP",
    "week13": 18.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 16.5,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 17.45,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 21.15,
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
    "headlineNews": "Throws three TDs in Week 13 loss",
    "report": "Wentz completed 28 of 46 pass attempts for 310 yards, while throwing three touchdowns and one interception during Sunday's 37-31 loss to Miami.",
    "analysis": "The 26-year-old signal-caller finally got things going from a statistical perspective Week 13, accounting for multiple TD throws and eclipsing the 260-yard passing mark for the first time in his past six outings. While Wentz is one of the NFL's most athletic quarterbacks behind the line of scrimmage, his rushing upside has been limited for fantasy purposes, as he only has one rushing score all season and averages fewer than 16 yards per game on the ground. Despite it having been a somewhat pedestrian season for Wentz to this point, he's a high upside play heading into a Week 14 matchup against a Giants defense that conceded 243 passing yards and four touchdowns to Packers QB Aaron Rodgers on Sunday.",
    "timestamp": "2019-12-01 02:50 PM",
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
    "week13": 27.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE', 12.26, 10.94, 27.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.1, 'BYE', 16.7, 21.0, 20.0, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 16.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 15.38,
    "fanduelSalary": "$15000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Stellar effort in Thanksgiving win",
    "report": "Trubisky completed 29 of 38 passes for 338 yards with three touchdowns and one interception in the Bears' 24-20 win over the Lions on Thursday. He also rushed four times for four yards.",
    "analysis": "Trubisky racked up a season-best yardage total and was especially sharp in the second half, during which he accumulated 192 of his yards and threw only two incompletions. The often-embattled third-year quarterback was able to capitalize on the Lions' season-long weaknesses defending the pass and connected with Allen Robinson, Jesper Horsted and David Montgomery for his trio of scoring tosses, the latter coming with just 2:17 remaining and capping off a clutch nine-play, 90-yard game-winning march. Trubisky eclipsed the season-high 278 yards he'd just posted four days prior with his spectacular performance, making the last pair of contests his most productive two-game stretch of the season by far. He'll look to continue building momentum as the Bears try to keep postseason their hopes alive in a Week 14 Thursday night home matchup versus the Cowboys.",
    "timestamp": "2019-11-28 01:13 PM",
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
    "week13": 24.92,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5, 19.72, 11.0, 20.92, 24.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.8, 11.5, 15.4, 11.7, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 16.4,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 12,
    "avg_fp2": 22.95,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 13.73,
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
    "headlineNews": "Involved on every score",
    "report": "Watson completed 18 of 25 pass attempts for 234 yards and three touchdowns while also catching a six-yard touchdown in Sunday's 28-22 win over the Patriots.",
    "analysis": "Watson recorded his first career reception and receiving touchdown in one go on a triple-option play where he was on the receiving end of a pitch from wideout DeAndre Hopkins. Outside of the unconventional score, it was just another day at the office for the star quarterback despite facing one of the league's top defenses. It was also a marked improvement over Watson's last regular-season meeting with New England back in Week 1 of the 2018 season (174 yards, one touchdown and one interception), where the then 23-year-old looked like Sam Darnold did against the Pats' D this year. Watson is clearly becoming one of the league's top pocket passers while maintaining his versatile athleticism. A tough matchup against Denver's pass defense should not scare fantasy owners after the signal-caller took care of business against a stingier New England squad.",
    "timestamp": "2019-12-01 10:52 PM",
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
    "week13": 28.36,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76, 19.74, 'BYE', 4.96, 19.92, 28.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 21.8, 'BYE', 20.4, 21.2, 17.2, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 16.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 19.13,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 15.9,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Gobbled up by Saints front",
    "report": "Ryan completed 35 of 50 pass attempts for 312 yards, while throwing two touchdowns and two interceptions during Thursday's 26-18 loss to the Saints. He also lost a fumble while scrambling in the fourth quarter.",
    "analysis": "The 34-year-old signal-caller absorbed a cringe-worthy nine sacks, and committed three giveaways as the Falcons dropped a third straight inter-divisional contest. Atlanta's offensive line has certainly failed its quarterback during the current three-game losing streak, surrendering 18 sacks as Ryan has thrown to a 3:3 TD:INT and coughed up two fumbles. Ryan can hardly be considered an elite option, with 247 passing yards per game and just five total touchdowns in his past five outings as the Falcons prepare to take on Carolina's 18th-ranked pass defense in Week 14.",
    "timestamp": "2019-11-28 08:50 PM",
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
    "week13": 18.58,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE', 15.58, 16.44, 8.64, 18.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.6, 15.3, 22.0, 17.4, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 15.7,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 14.43,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 17.46,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Falls flat against Chiefs",
    "report": "Carr completed 20 of 30 passes for 222 yards and a touchdown with two interceptions in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "One of the two picks was returned for a TD by Juan Thornhill, so Carr produced as many points for the opposition as he did for his own team. After a strong start to the season, the 28-year-old QB has a 3:4 TD:INT over the last four games, failing to top 230 passing yards in three of them, and his regression has cost the Raiders a chance to claim the top spot in the AFC West. Carr will try to turn things around in Week 14 against the Titans, in a game that could also end up having playoff implications.",
    "timestamp": "2019-12-01 06:16 PM",
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
    "week13": 11.58,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96, 13.12, 20.78, 5.18, 11.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.1, 22.3, 19.7, 17.2, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 15.3,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 13.86,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 21.42,
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
    "headlineNews": "Throws two TDs in debut",
    "report": "Lock completed 18 of 28 pass attempts for 134 yards, two touchdowns, and one interception Sunday against the Chargers. He also carried three times for 15 yards in the 23-20 win.",
    "analysis": "Making his first NFL start, Lock struggled to the tune of 4.8 yards per attempt while completing just one pass longer than 11 yards. He encouragingly showed a strong rapport with top wideout Courtland Sutton, with whom he connected for a pair of touchdowns in the first quarter. Lock also used his mobility to gain a couple of first downs, and, aside from an interception in the third quarter, generally took care of the ball. After a somewhat successful debut, Lock should start again next Sunday in a more favorable matchup against the Texans.",
    "timestamp": "2019-12-01 06:11 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 13.86,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 11.4, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 15.1,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 14.75,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 22.58,
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
    "headlineNews": "Retains starting job",
    "report": "Coach Ron Rivera said Monday that Allen will \"absolutely\"  remain the Panthers' starting quarterback, Joe Person of The Athletic reports.",
    "analysis": "Though Allen accounted for three touchdowns for a second straight game in Sunday's 29-21 loss to the Redskins, he wasn't particularly efficient while directing the offense, completing only 58.7 percent of his throws for a meager 6.0 yards per attempt and committing two turnovers. The second-year signal-caller already has five multi-turnover outings through his 10 starts, taking some of the shine off what had been a productive run when he initially took over for the injured Cam Newton (foot) in Week 3. Even with another developmental quarterback in third-round rookie Will Grier on the roster, the 5-7 Panthers will continue to cast their lot with Allen as they aim to keep their faint playoff hopes alive.",
    "timestamp": "2019-12-02 09:28 AM",
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
    "week13": 24.32,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 24.34, 3.28, 11.64, 17.38, 'BYE', 3.32, 15.88, 14.48, 9.7, 23.14, 24.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 23.2, 14.9, 14.1, 17.7, 'BYE', 6.8, 14.7, 13.5, 16.1, 13.7, 15.9, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 15.1,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 14.89,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 17.82,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Wins third start since Nov. 1",
    "report": "Fitzpatrick completed 27 of 39 pass attempts for 365 yards, while throwing three touchdowns and one interception during Sunday's 37-31 win against Philadelphia.",
    "analysis": "It was shaky in the early going for Fitzpatrick, as he threw an interception to Ronald Darby on Miami's first play from scrimmage and he absorbed two sacks within the Dolphins' first three offensive drives. He settled in with a 43-yard strike to DeVante Parker on Miami's fourth possession and threw two more TDs in the second half after the Dolphins fell into a 28-14 third-quarter deficit. Fitzpatrick has thrown to a 8:4 TD:INT with 272 passing yards per game since Week 9, while leading his team to a 3-2 record during that span. He's highly unpredictable due to his propensity to commit turnovers in bundles, but Fitzpatrick carries upside heading into a Week 14 matchup against a Jets defense that he lit up for 288 yards and three passing scores Nov. 3.",
    "timestamp": "2019-12-01 03:20 PM",
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
    "week13": 29.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3, 23.72, 14.06, 12.92, 25.06, 29.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 15.2, 14.2, 10.6, 16.3, 10.8, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 14.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 15.05,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 18.61,
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
    "headlineNews": "Turns in vintage performance",
    "report": "Goff completed 32 of his 43 pass attempts for 424 yards, two touchdowns and no interceptions in the team's Week 13 win over the Cardinals.",
    "analysis": "The Rams prioritized getting Goff on track early, as he had 31 pass attempts and 323 passing yards through the first two quarters. Though his volume was limited thereafter due to game context, Goff put together his most accurate performance of the season, completing 74 percent of his passes while averaging 9.9 yards per attempt. He also posted his first multi-touchdown game since Week 8 against Cincinnati. Though this was a positive matchup that Goff should have capitalized on, he should be in position to put together another strong performance in Week 14 against Seattle.",
    "timestamp": "2019-12-01 06:09 PM",
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
    "week13": 24.96,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE', 5.72, 6.22, 6.38, 24.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 15.8, 14.6, 10.4, 14.1, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 14.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 7.27,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 15.03,
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
    "headlineNews": "Struggles in win over Panthers",
    "report": "Haskins completed 13 of 25 pass attempts for 147 yards and gained six yards on four carries during Sunday's 29-21 win over the Panthers. He also committed two fumbles, but both were recovered by the offense.",
    "analysis": "Haskins completed a lackluster 52 percent of his passes while averaging 5.9 yards per attempt. He also took five sacks while completing just two passes longer than 15 yards. Haskins did avoid turning the ball over -- despite a pair of fumbles -- and allowed the rushing attack to propel his team to a victory. He'll look to improve on this performance next Sunday against the Packers.",
    "timestamp": "2019-12-01 03:43 PM",
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
    "week13": 6.48,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.58, 'DNP', 'DNP', 'DNP', 0.32, 7.16, 'BYE', 20.06, 6.04, 6.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 7.0, 'DNP', 'DNP', 'DNP', 1.9, 9.0, 'BYE', 15.9, 19.7, 13.0, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 14.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 26,
    "avg_fp2": 15.81,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 22.53,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Tops 300 yards",
    "report": "Brissett completed 25 of his 40 pass attempts for 319 yards, one touchdown and two interceptions in the team's Week 13 loss to the Titans.",
    "analysis": "Brissett opened the game on a positive note, completing his first five passes, highlighted by a 21-yard touchdown toss to Jack Doyle. That efficiency continued for much of the first half, as he was 10-for-14 with 132 yards and a touchdown through two quarters.  However, he threw two key interceptions in the second half, which directly led to 10 points for the Titans. Despite the  mistakes, Brissett averaged 8.0 yards per attempt for the first time in his last three contests and also surpassed 300 passing yards for the first time since Week 3. He'll have another chance to lead the team to a win in Week 14 in a positive matchup against the Buccaneers.",
    "timestamp": "2019-12-01 05:55 PM",
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
    "week13": 14.66,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76, 'DNP', 16.12, 13.16, 14.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 'DNP', 13.8, 19.2, 17.7, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 13.6,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 16.86,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.83,
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
    "headlineNews": "Efficient in win",
    "report": "Tannehill completed 17 of 22 pass attempts for 182 yards and two touchdowns in the Titans' Week 13 win over the Colts.",
    "analysis": "Tannehill faced an abnormal amount of pressure -- he was sacked six times -- skewing his pass volume downward. However, when he got the ball out, Tannehill worked efficiently, completing 77 percent of his throws and averaging 8.3 yards per attempt. He has recorded multiple touchdowns in every game since taking over as the team's starting quarterback in Week 7, helping him maintain value despite low volume. Tannehill will be in a strong position to keep his impressive run going, as the Titans will take on the Raiders in Week 14.",
    "timestamp": "2019-12-01 08:19 PM",
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
    "week13": 13.78,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.36, 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36, 13.78]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.1, 12.2, 18.8, 11.7, 19.5, 'BYE', 14.7, 11.8, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 13.3,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 16.33,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 18.88,
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
    "headlineNews": "Victorious in return",
    "report": "Dalton completed 22 of 37 passes for 243 yards and a touchdown in Sunday's 22-6 win over the Jets. He also finished with minus-4 rushing yards on five attempts.",
    "analysis": "Dalton showed no signs of rust in his first appearance since Week 8, leading the Bengals to their first win of the season. He threw a 17-yard touchdown pass to Tyler Boyd in the first quarter and would have had another passing score in the second quarter if not for a brutal drop by tight end C.J. Uzomah. Likely entrenched as the starter the rest of the way after a three-game cameo by Ryan Finley, Dalton will lead the Bengals into Cleveland in Week 14 sporting a 10:8 TD:INT.",
    "timestamp": "2019-12-01 01:59 PM",
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
    "week13": 13.32,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.72, 19.64, 16.06, 4.64, 18.98, 14.6, 21.34, 17.66, 'BYE', 'DNP', 'DNP', 'DNP', 13.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 12.6, 13.2, 17.1, 14.3, 14.6, 16.9, 12.3, 'BYE', 'DNP', 'DNP', 'DNP', 19.1, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 11.9,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 23,
    "avg_fp2": 20.89,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.08,
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
    "headlineNews": "Checked for concussion",
    "report": "Allen was forced out of Sunday's game against the Buccaneers to be evaluated for a concussion, Tad Dickman of the Jaguars' official site reports.",
    "analysis": "The report surfaced late in the fourth quarter, and Allen didn't return to the contest. Whether he's officially placed in concussion protocol remains to be seen, as the Jaguars may have to play Week 14 against the Chargers without him. The rookie defensive end finished with six tackles (four solo) and a sack before his departure.",
    "timestamp": "2019-12-01 01:31 PM",
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
    "week13": 23.54,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44, 33.84, 20.0, 23.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 20.8, 13.0, 18.8, 13.7, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 11.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 6,
    "avg_fp2": 16.06,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.61,
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
    "headlineNews": "Efficient despite loss",
    "report": "Rivers completed 20 of 29 pass attempts for 265 yards, two touchdowns and one interception in Sunday's 23-20 loss to the Broncos.",
    "analysis": "It was an ugly beginning to Sunday's contest, as the Broncos jumped out to an early 14-0 lead in part thanks to Rivers' eighth interception in the last three games, a misguided screen attempt directly at defensive tackle Dre'Mont Jones for an easy pick. Rivers quieted his critics from there, relying on an efficient ground attack from Austin Ekeler and Melvin Gordon to open up space via the play-action pass. As he's done much of the season, Rivers turned to wide receiver Mike Williams the few times in which he decided to throw deep, connecting with the big-bodied wideout on a 52-yard pass that was actually woefully under thrown to ultimately set up the team's first touchdown later in the drive to Ekeler, and again on the Chargers' final possession in which a 38-yard reception set up the game-tying field goal with 14 seconds left. Considering Ian Rapoport of NFL Network reported earlier Sunday the Chargers could ultimately bench Rivers in favor of Tyrod Taylor should the veteran quarterback continue to struggle, it'll be interesting to watch how the team handles its franchise QB now that its playoff hopes have essentially been extinguished. The 37-year-old quarterback has never missed a regular-season game since entering as the starter in 2006.",
    "timestamp": "2019-12-01 04:42 PM",
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
    "week13": 17.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76, 13.28, 18.12, 'BYE', 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.5, 20.6, 'BYE', 15.7, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5526.png",
    "name": "Eli Manning",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 7.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 13.52,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 17.6,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Headed for Week 14 start",
    "report": "Manning is in line to replace an injured Daniel Jones (ankle) as the starting quarterback for Monday's game in Philadelphia, Paul Schwartz of the New York Post reports.",
    "analysis": "Jones played through the injury during the 31-13 loss to the Packers over the weekend, but he's expected to miss at least one game after an MRI revealed a high-ankle sprain that's believed to be of moderate severity. Manning thus figures to make his first start since Week 2, leading an offense that may or may not have Golden Tate (concussion), Evan Engram (foot) and Rhett Ellison (concussion) in the lineup.",
    "timestamp": "2019-12-04 08:04 AM",
    "week01": 14.84,
    "week02": 12.2,
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.84, 12.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.1, 13.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 21.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 23,
    "avg_fp2": 13.39,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.4,
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
    "headlineNews": "Tallies 115 yards in loss",
    "report": "Barkley ran for 83 yards on 19 carries and added 32 yards on three catches during Sunday's 31-13 loss to the Packers.",
    "analysis": "Barkley was a strong play Sunday against a strong pass defense in wintery elements, and the sophomore back didn't disappoint, topping 100 yards from scrimmage for the first time since Week 8. Barkley has incredible talent but has struggled both with an ankle injury earlier in the season and defenses keying on him with rookie Daniel Jones under center. He averaged 137.0 yards from scrimmage per game and a touchdown in two outings with Eli Manning, while he's mustered 80.1 such yards per game with just two total touchdowns in seven games with Jones. Next up is a stingy Eagles run defense.",
    "timestamp": "2019-12-01 01:57 PM",
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
    "week13": 13.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3, 12.5, 5.6, 'BYE', 7.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.3, 19.2, 'BYE', 14.7, 15.3, 21.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 20.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 11,
    "avg_fp2": 16.12,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.46,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Gains 79 yards in loss",
    "report": "Chubb ran for 58 yards on 16 carries and added a 21-yard catch during Sunday's 20-13 loss to Pittsburgh.",
    "analysis": "The Steelers held Chubb to his first game with less than 90 total yards of offense since Week 1. The sophomore back has been supremely productive, but he has just one touchdown in his last six outings. Kareem Hunt hasn't eaten into Chubb's carries too much since making his debut in Week 10, but he does have two touchdowns in four games. That will be worth keeping in mind heading into Sunday's contest against Cincinnati, thought the Bengals came into Week 12 surrendering 4.8 yards per rush, making Chubb a great start under just about every circumstance.",
    "timestamp": "2019-12-01 04:02 PM",
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
    "week13": 8.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1, 13.1, 9.2, 23.9, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 20.8, 19.3, 20.9, 13.4, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 19.4,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 31,
    "avg_fp2": 12.56,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.12,
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
    "headlineNews": "Plodding ways continue",
    "report": "Bell rushed 10 times for 32 yards and caught four of five targets for 35 yards in Sunday's 22-6 loss to the Bengals.",
    "analysis": "Bell had a 23-yard run called back on a holding call, and he didn't manage more than seven yards on any of his official rushing attempts. The 27-year-old running back has lacked explosiveness, failing to produce a run of 20-plus yards all season. While New York's poor offensive line can be blamed for some of Bell's struggles, he hasn't made the most of his opportunities in the open field when he's gotten them. The Jets continue to feed Bell as both a runner and a receiver, and his volume should be enough to make him a solid option at home against the Dolphins in Week 14.",
    "timestamp": "2019-12-01 01:43 PM",
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
    "week13": 8.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1, 14.8, 16.2, 13.3, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.3, 15.5, 18.8, 16.8, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 19.3,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 8,
    "avg_fp2": 16.25,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.56,
    "fanduelSalary": "$14500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Piles up yardage in loss",
    "report": "Elliott carried the ball 12 times for 71 yards and caught seven of 10 targets for 66 yards in Thursday's 26-15 loss to the Bills.",
    "analysis": "The running back has topped 100 scrimmage yards in two straight games and seven times this season, but his inability to find the end zone proved costly for the Cowboys. Elliott will look to keep rolling next week on the road against a Bears defense that just gave up 83 rushing yards to his former backup, Bo Scarbrough.",
    "timestamp": "2019-11-28 05:42 PM",
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
    "week13": 17.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9, 7.3, 18.3, 14.6, 17.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.6, 21.0, 11.4, 17.8, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 18.2,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 12,
    "avg_fp2": 26.22,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.88,
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
    "headlineNews": "Held in check by Redskins",
    "report": "McCaffrey carried 14 times for 44 yards and caught seven of 13 targets for 58 additional yards during Sunday's 29-21 loss to the  Redskins.",
    "analysis": "Despite his seemingly favorable matchup, McCaffrey averaged just 3.1 yards per carry en route to one of his lowest rushing outputs of the season. He yet again played a major role in the passing game, but even at that he hauled in just over half the passes thrown his way and barely reached 100 yards from scrimmage. Most notably, McCaffrey failed to reach the end zone for just the third time this season to cap off this lackluster outing. He should have every opportunity to bounce back next Sunday against the Falcons.",
    "timestamp": "2019-12-01 03:07 PM",
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
    "week13": 13.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1, 23.1, 24.6, 29.8, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 28.1, 19.0, 15.7, 18.8, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 18.0,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 6,
    "avg_fp2": 20.47,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.66,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Expects to play Sunday",
    "report": "Cook, who was forced out of Monday's 37-30 loss to the Seahawks with what is being described as a right shoulder injury, plans to play in Week 14, Chris Tomasson of the St. Paul Pioneer Press reports. \"I'll definitely be ready to go Sunday,\" Cook said of this weekend's home game against the Lions.",
    "analysis": "Supporting that notion is that Cook indicated he could have returned to Monday's game, but was held out for \"precautionary'\" reasons, while Alexander Mattison filled in as the team's lead back. Despite Cook downplaying his injury, there's a decent chance it will impact his practice participation in advance of Sunday's contest.",
    "timestamp": "2019-12-03 06:20 AM",
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
    "week13": 11.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6, 27.8, 14.2, 'BYE', 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 11.2, 16.7, 'BYE', 14.2, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 17.8,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.87,
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
    "headlineNews": "Turns back clock",
    "report": "Gurley rushed the ball 19 times for 95 yards and a touchdown in the team's Week 13 win over the Cardinals. He also added one reception for 20 yards.",
    "analysis": "Gurley lacked explosive rushes -- his longest run went for 11 yards -- but he consistently gained chunks of seven and eight yards. As a result, he surpassed 100 total yards from scrimmage for the second time in his past three games after reaching that mark just once in his first eight contests. Despite that positivity, the Rams are still monitoring Gurley's workload, as he did not receive a carry after the conclusion of the team's first drive in the fourth quarter. That usage was likely dictated by the blowout nature of the contest, so Gurley may finally be fully unleashed in Week 14 for a must-win contest against the Seahawks.",
    "timestamp": "2019-12-01 06:27 PM",
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
    "week13": 18.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE', 7.3, 18.8, 3.4, 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.9, 14.6, 8.3, 12.4, 17.8]
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
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 11.7,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.79,
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
    "headlineNews": "Held in check vs. Chargers",
    "report": "Lindsay carried 17 times for 58 yards and caught all three of his targets for an additional four yards during Sunday's 23-20 win over the Chargers.",
    "analysis": "Lindsay struggled to get things going on the ground as he finished averaging just 3.4 yards per attempt. He hauled in each of the passes Drew Lock sent his way but lost yardage on two of them and finished with underwhelming numbers in that phase. Lindsay more than doubled Royce Freeman's number of touches in this one, but he hasn't exceeded 75 scrimmage yards in the last three games and will look to do more with his usage next Sunday against the Texans.",
    "timestamp": "2019-12-01 06:29 PM",
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
    "week13": 7.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1, 15.2, 'BYE', 8.5, 7.3, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.8, 'BYE', 11.5, 15.1, 16.4, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 16.6,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 30,
    "avg_fp2": 10.67,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 26.86,
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
    "headlineNews": "Struggles on ground persist",
    "report": "Freeman ran for 51 yards on 17 carries and caught four of five targets for 13 receiving yards during Thursday's 26-18 loss to the Saints.",
    "analysis": "The two-time Pro Bowl back has been subpar as a rusher thus far in 2019, now standing at 3.4 yards per carry on the season after his effort Thanksgiving night against New Orleans' top-five rush defense. Receiving production has salvaged fantasy utility for Freeman to some extent, but he's only eclipsed 40 rushing yards twice all year running behind a banged-up Falcons offensive line. Freeman is now afforded nine days to continue to bounce back from a sprained foot that previously sidelined him, before Atlanta takes on Carolina's 27th-ranked rush defense Dec. 8.",
    "timestamp": "2019-11-28 09:12 PM",
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
    "week13": 8.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 7.9, 11.0, 14.0, 15.5, 25.3, 3.5, 12.2, 'BYE', 6.3, 'DNP', 'DNP', 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 14.3, 12.7, 11.6, 13.4, 8.3, 11.4, 11.9, 'BYE', 14.3, 'DNP', 'DNP', 9.1, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 15.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 22,
    "avg_fp2": 9.04,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.03,
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
    "headlineNews": "Retains starting job",
    "report": "Coach Bruce Arians said Wednesday that Jones is still the Buccaneers' starting running back, Eduardo A. Encina of the Tampa Bay Times reports.",
    "analysis": "Arians' vote of confidence comes following a decision to bench Jones during the third quarter of Week 13's win over the Jaguars after he failed to pick up a blitz. It looks as though Jones is still the No. 1 option in Tampa Bay's backfield, but the task of predicting whether he or Peyton Barber will receive the bulk of carries in a given week has proven confounding for fantasy managers all season. The 2018 second-round pick could realistically garner a more bountiful workload versus the Colts on Sunday, but his ability to lose significant carries due to a single mistake makes him difficult to completely trust for fantasy purposes.",
    "timestamp": "2019-12-04 12:44 PM",
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
    "week13": 0.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2, 18.6, 2.4, 14.2, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 8.8, 12.2, 10.3, 15.1, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 15.3,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 13,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.85,
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
    "headlineNews": "Ruled out ahead of Sunday",
    "report": "Howard (shoulder) was ruled out prior to Sunday's contest against the Dolphins.",
    "analysis": "Despite practicing on a limited basis all week, the Eagles proactively ruled out their starting running back for the third consecutive week. Expect Miles Sanders to continue operating as the lead role in the backfield by committee, with Jay Ajayi and Boston Scott contributing periodically.",
    "timestamp": "2019-11-30 08:27 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6, 14.8, 'BYE', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 10.0, 'BYE', 'DNP', 'DNP', 'DNP', 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 14.9,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 28,
    "avg_fp2": 10.18,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.0,
    "fanduelSalary": "$11500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Compiles 87 total yards, TD in win",
    "report": "Montgomery rushed 16 times for 75 yards and secured both of his targets for 12 yards and a touchdown in the Bears' 24-20 win over the Lions on Thursday.",
    "analysis": "Montgomery turned in a workman-like effort on the ground, with his long run of the day going for a modest 14 yards. He also delivered through the air when it mattered most, notching what would turn out to be a game-winning three-yard touchdown reception with 2:17 remaining. Montgomery's rushing yardage tally served as his second highest of the season, and he'll look to build on those numbers versus the Cowboys in a Week 14 Thursday night home matchup.",
    "timestamp": "2019-11-28 01:28 PM",
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
    "week13": 15.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1, 6.0, 5.5, 4.1, 15.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 15.4, 12.6, 8.1, 7.4, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 14.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 14,
    "avg_fp2": 9.42,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.66,
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
    "headlineNews": "Ineffective against Rams",
    "report": "Drake carried the ball 13 times for 31 yards and caught two of five targets for 20 yards in Sunday's 34-7 loss to the Rams.",
    "analysis": "The Cards were down 20-0 by halftime, forcing them to largely abandon the running game, but Drake wasn't able to make much impact as a receiver either. David Johnson worked his way back into the game plan in this one, getting six touches to Drake's 15, but he wasn't any more effective. Drake will face another tough test in Week 14 against a stingy Steelers defense that just held Nick Chubb under 80 scrimmage yards.",
    "timestamp": "2019-12-01 05:56 PM",
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
    "week13": 6.1,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP', 26.2, 7.1, 11.0, 'BYE', 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 11.4, 4.5, 6.3, 'BYE', 17.5, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 13.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 17,
    "avg_fp2": 14.78,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.78,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Totals 84 yards in win",
    "report": "Kamara rushed 11 times for 61 yards and brought in four of eight targets for 23 yards in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "Though Kamara's scrimmage yards were respectable, it was a disappointing performance for the third-year back. He snagged just four passes after averaging nine receptions across his last three contests, though his lack of involvement in the passing game was likely due to Drew Brees' struggles. Kamara continues to provide fantasy owners with useful stat lines, though it's concerning that he hasn't scored since Week 3. He'll try to buck that trend in a crucial Week 14 home matchup with the surging 49ers.",
    "timestamp": "2019-11-28 08:57 PM",
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
    "week13": 10.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4, 17.2, 14.7, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.7, 13.2, 18.3, 21.1, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 13.4,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 1,
    "avg_fp2": 15.08,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.04,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Out-rushed by Jackson in win",
    "report": "Ingram rushed 15 times for 59 yards and caught both of his targets for three yards in Sunday's 20-17 win over San Francisco.",
    "analysis": "Ingram was overshadowed on the ground by quarterback Lamar Jackson, who rushed for over 100 yards and successfully called his own number from one yard out in the second quarter. Still, Ingram got 15 of the 22 carries by Ravens running backs and has carried the ball at least 12 times in all but one game this season. The veteran running back will retain a prominent role in what will be a smash-mouth Week 14 contest in Buffalo.",
    "timestamp": "2019-12-01 01:33 PM",
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
    "week13": 7.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4, 9.4, 22.0, 24.3, 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.5, 12.4, 12.8, 8.1, 8.4, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 13.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.43,
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
    "headlineNews": "Makes history in loss",
    "report": "Jacobs carried the ball 17 times for 104 yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "It's the fifth time this season the rookie has hit for triple-digit rushing yards, with all those performances coming in the last eight games. As a result of that surge, Jacobs passed 1,000 yards on the year in the first quarter Sunday, becoming the first rookie in Raiders history to reach that milestone. He'll look to keep rolling next week against the Titans.",
    "timestamp": "2019-12-01 06:24 PM",
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
    "week13": 10.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1, 24.0, 17.6, 12.1, 4.1, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 16.6, 18.4, 16.7, 22.3, 14.5, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 12.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 3,
    "avg_fp2": 14.25,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.48,
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
    "headlineNews": "Carries for 102 yards, score",
    "report": "Carson rushed 23 times for 102 yards and a touchdown in Monday's 37-30 win over the Vikings. He also caught one of two targets for seven yards.",
    "analysis": "There were obvious concerns about his workload following Week 12's win over the Eagles, in which he fumbled twice in the fourth quarter and was out-touched by Rashaad Penny. Carson got the start Monday, however, and extinguished those worries early by firing out of the gate with a nine-yard rush. Coach Pete Carroll was planning on a timeshare and Penny received carries on the first drive as well, while both had productive nights with the latter reaching 107 yards from scrimmage and scoring twice. This is shaping up to be a split backfield moving forward, although the duo's 43 combined touches in this one will likely prove to be an anomaly. The Seahawks travel to Los Angeles for a matchup against the Rams' middling run defense (104.2 rushing yards allowed per game).",
    "timestamp": "2019-12-02 09:01 PM",
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
    "week13": 17.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.1, 8.2, 3.6, 16.5, 18.8, 23.9, 8.9, 15.0, 12.3, 17.6, 'BYE', 7.7, 17.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 16.0, 17.3, 8.9, 11.2, 14.7, 10.4, 11.5, 11.9, 19.2, 'BYE', 17.5, 14.4, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 12.6,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 9,
    "avg_fp2": 17.87,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.17,
    "fanduelSalary": "$9100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Tops 150 total yards",
    "report": "Henry ran the ball 26 times for 149 yards and one touchdown in the team's Week 13 win over the Colts. He also added three receptions for 17 yards.",
    "analysis": "Henry once again ripped off a number of big runs, the most impactful of which came on his 13-yard touchdown halfway through the third quarter. Earlier that drive, he rumbled for a 34-yard run -- his longest of the day -- to push the Titans into Colts territory. Henry has now scored at least once in four consecutive games, while also recording a run of 30 or more yards in four of his last five contests. He will have another exploitable matchup in Week 14 against the Raiders.",
    "timestamp": "2019-12-01 03:48 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0, 22.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.4, 12.0, 'BYE', 16.6, 7.7, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 12.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 15,
    "avg_fp2": 15.98,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.58,
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
    "headlineNews": "Compiles 91 total yards in loss",
    "report": "Fournette rushed 14 times for 38 yards and brought in nine of 11 targets for 53 yards in the Jaguars' 28-11 loss to the Buccaneers on Sunday.",
    "analysis": "Fournette paced the team in targets while tying the career-high reception total he'd just established Week 12. A game script that saw the Buccaneers take a 25-0 lead by halftime significantly hampered the ability to stick with the run game, however, which led to Fournette's second sub-40-yard rushing yardage tally of the last three games. He'll look to bounce back to his usual numbers on the ground, possibly with Gardner Minshew back under center, in a Week 14 battle versus the Chargers.",
    "timestamp": "2019-12-01 02:34 PM",
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
    "week13": 13.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 10.7, 12.2, 25.5, 21.7, 14.8, 15.5, 17.1, 9.7, 'BYE', 9.2, 32.4, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 20.3, 9.3, 11.8, 13.6, 9.1, 15.3, 16.4, 10.4, 'BYE', 16.6, 13.3, 13.6, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 26,
    "avg_fp2": 14.03,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.7,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder - AC Joint",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Considered questionable",
    "report": "Coach Mike Tomlin said Tuesday that Conner (shoulder) is \"questionable as we stand here today\" for Sunday's game at Arizona, Brian Batko of the Pittsburgh Post-Gazette reports.",
    "analysis": "Tomlin indicated Conner was improving but couldn't say if or how much he'd be able to practice this week. The 24-year-old finished last week with a pair of limited practices before being listed as doubtful, so he should be participating in some capacity this week if he truly is improving. Benny Snell rushed 16 times for 63 yards and one touchdown in Sunday's win over the Browns, and he figures to again work as the early-down back should Conner be unable to return Week 14, with Jaylen Samuels in a pass-catching role.",
    "timestamp": "2019-12-03 09:41 AM",
    "week01": 8.5,
    "week02": 12.0,
    "week03": 5.7,
    "week04": 22.5,
    "week05": 11.5,
    "week06": 27.4,
    "week07": "BYE",
    "week08": 22.5,
    "week09": "DNP",
    "week10": "DNP",
    "week11": 2.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 12.0, 5.7, 22.5, 11.5, 27.4, 'BYE', 22.5, 'DNP', 'DNP', 2.1, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 12.6, 5.2, 13.1, 21.1, 9.9, 'BYE', 8.0, 'DNP', 'DNP', 16.4, 'DNP', 'DNP', 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 11.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 11,
    "avg_fp2": 11.57,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.46,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Scores Browns' only touchdown",
    "report": "Hunt caught all five of his targets for 19 yards and a touchdown and added 46 yards on seven carries during Sunday's 20-13 loss to the Steelers.",
    "analysis": "Hunt circled out of the backfield midway through the second quarter for a 15-yard catch-and-run for a touchdown, his second score in his last two games. Sunday was Hunt's best rushing day as a member of the Browns, but he's done most of his damage this season through the air, averaging five catches per game. He's tallied at least 45 total yards in all four of his games thus far and should continue that Sunday against a Bengals defense that came into this week surrendering 4.8 yards per carry, 29th in the league.",
    "timestamp": "2019-12-01 04:12 PM",
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
    "week13": 15.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.9, 8.8, 11.6, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.5, 9.4, 12.1, 9.2, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 11.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 27,
    "avg_fp2": 16.69,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.85,
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
    "headlineNews": "Finds paydirt",
    "report": "Ekeler carried the ball nine times for 16 yards and also added four receptions for 51 yards and a touchdown in Sunday's 23-20 loss to the Broncos.",
    "analysis": "Ekeler was once again a weapon in the passing game, taking a 30-yard wheel route to the house for the Chargers' first touchdown of the game. While Melvin Gordon was the featured back on the ground once again (20 carries, 99 yards), Ekeler still saw nine carries of his own, making it just the second time since Week 5 against the Broncos --- Gordon's de facto 2019 debut --- in which the third-year back saw seven or more carries. It's possible Ekeler could see a step back in receiving opportunities if reports by Ian Rapoport of NFL.com come to fruition, as the Chargers are evidently considering a change at quarterback thanks to the continual struggles of Philip Rivers. Still, it's already a career year for the 24-year-old, as he's on pace to shatter his total yardage (1,032) after already setting new high-water marks in receptions and total touchdowns.",
    "timestamp": "2019-12-01 05:12 PM",
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
    "week13": 14.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3, 11.8, 17.2, 'BYE', 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 14.3, 7.3, 'BYE', 8.5, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 11.3,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 29,
    "avg_fp2": 10.53,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.73,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Finds end zone in first win",
    "report": "Mixon rushed 19 times for 44 yards and a touchdown while catching all four of his targets for 26 yards in Sunday's 22-6 win over the Jets.",
    "analysis": "Mixon powered in a five-yard touchdown in the second quarter for his second rushing score in the past three weeks following a nine-game drought in that category to start the season. He has three receiving touchdowns this season, but Mixon had been in a lull with only three receptions over the past three games combined before tying his season high with four catches in this one. Andy Dalton coming back under center should benefit Mixon moving forward, as Dalton has shown more willingness to check the ball down to the running back than Ryan Finley did in his three-game stint at quarterback. Up next for Mixon and the Bengals is a Week 14 trip to Cleveland.",
    "timestamp": "2019-12-01 01:49 PM",
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
    "week13": 15.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE', 16.1, 16.8, 7.9, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 13.5, 12.9, 11.4, 6.3, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 11.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 21,
    "avg_fp2": 9.22,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 26.51,
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
    "headlineNews": "Just 10 carries on SNF",
    "report": "Michel rushed 10 times for 45 yards in Sunday's 28-22 loss to Houston.",
    "analysis": "Michel didn't perform poorly by any means (4.5 yards per carry), but New England was playing from behind wire-to-wire so the offense leaned on receiving back James White (22 touches) for the majority of the contest. Luckily for the 24-year-old's fantasy owners, the 10-2 Patriots don't fall behind big very often, which has resulted in 15.3 carries per game for the early-down back this season. The real concern for Michel has been the recent lack of goal-line opportunities, as the back has zero touchdowns over his last five contests after posting six through his first seven. We could be in line for a similar game script in Week 14 when the Chiefs' high-octane offense comes to Foxborough for a 2018 AFC Championship rematch.",
    "timestamp": "2019-12-01 10:05 PM",
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
    "week13": 4.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE', 5.4, 8.5, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.5, 'BYE', 15.4, 12.4, 13.1, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 11.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 27,
    "avg_fp2": 12.14,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.85,
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
    "headlineNews": "Accumulates over 100 total yards",
    "report": "Gordon carried the ball 20 times for 99 yards and also caught two his three targets for 11 yards in Sunday's 23-20 loss at the hands of the Broncos.",
    "analysis": "That's now two consecutive games in which Gordon has failed to get into the end zone after a three-week stretch which saw the running back score four times. Still, it's encouraging to see Gordon continue to receive carries, as the 26-year-old has ran 20 or more times in three of the last four games and has hit at least 100 total yards in each one to boot. The change from Ken Whisenhunt to Shane Steichen at offensive coordinator could wind up being a career-saving move for Gordon, who has accumulated 442 total yards and a respectable 4.7 yards-per-carry average in the four games since the switch.",
    "timestamp": "2019-12-01 05:04 PM",
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
    "week13": 12.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4, 19.8, 10.5, 'BYE', 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 15.2, 11.4, 'BYE', 11.8, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126367.png",
    "name": "Bo Scarbrough",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 10.9,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 18,
    "avg_fp2": 8.05,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 18.28,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Tops 20 carries",
    "report": "Scarbrough rushed 21 times for 83 yards during Thursday's 24-20 loss to the Bears.",
    "analysis": "While it's a shame that Scarbrough has now had a number of impressive runs over the past three games that have been called back due to a penalty, the Alabama product is still putting up respectable numbers anyway. In fact, he's the latest addition to a short list of running backs who are averaging at least 17 carries per game and 4.5 yards per carry, joining the likes of Christian McCaffrey, Nick Chubb, Derrick Henry, Josh Jacobs, Leonard Fournette and Dalvin Cook. That's pretty good company for someone who went completely overlooked by the league since being drafted in the seventh round of the 2018 NFL Draft, and Scarbourgh hasn't even played a game with a non-backup quarterback yet. It's possible Matthew Stafford (back) could return for the Lions' Week 14 date with the Vikings, and it'll be interesting to see if Scarbrough can take his game to another level with Stafford calling the shots instead of David Blough and Jeff Driskel.",
    "timestamp": "2019-11-28 04:26 PM",
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
    "week13": 8.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.8, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 9.2, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 10.8,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 19,
    "avg_fp2": 16.89,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.44,
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
    "headlineNews": "Limited to 31 yards",
    "report": "Jones ran for 18 yards on 11 carries and added 13 yards on four catches during Sunday's 31-13 win over the Giants.",
    "analysis": "The wintery elements made Jones an intriguing play Sunday, but the sophomore back still managed to tally less than 40 total yards for the third time in his last four contests. For much of the season, fans could excuse some poor yardage tallies thanks to some big touchdown totals, but Jones has now been held scoreless in three of his last four games. Fellow back Jamaal Williams hasn't been significantly better, but he has averaged 4.4 yards per carry over the past four games to Jones' 3.9. Therefore, don't be surprised if Williams gets a few more opportunities against Washington's mediocre run defense Sunday.",
    "timestamp": "2019-12-01 02:22 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6, 17.9, 'BYE', 12.1, 9.6, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 10.3,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 9.32,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.74,
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
    "headlineNews": "Turns in dud in tough matchup",
    "report": "Hyde rushed 10 times for 17 yards and caught his lone target for five yards in Sunday's 28-22 win over the Patriots.",
    "analysis": "Hyde had an extremely disappointing stat line when considering  the Texans played with a lead for the entire contest. Part of the blame can be placed on the Patriots' stout run defense, which has stymied many a back this season. Still, it was the worst performance of the veteran's 2019 campaign, as the only other time he was limited to less than 20 yards (Week 3 against the Chargers) he was able to hit paydirt to salvage his fantasy line. Next week's opponent, the Denver Broncos, are far more susceptible to the run (113.5 rushing yards allowed per game) compared to the pass (207.5), giving Hyde good bounce-back potential for Week 14.",
    "timestamp": "2019-12-01 10:13 PM",
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
    "week13": 2.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE', 12.5, 6.7, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 6.8, 'BYE', 11.5, 6.5, 8.0, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 10.3,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 13,
    "avg_fp2": 10.16,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.85,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Records first-quarter receiving TD",
    "report": "Sanders ran for 83 yards on 17 rush attempts and caught all five of his targets for 22 yards and a touchdown during Sunday's 37-31 loss to the Dolphins.",
    "analysis": "The rookie back was handed the keys as Philadelphia's workhorse against Miami's 31st-ranked rush defense and turned in an impressive 4.9 yards-per-carry average, with a 15-yard receiving TD to boot. With Jordan Howard (shoulder) having practiced on a limited basis all week leading up to Sunday's contest and remaining questionable for Week 14, Sanders may once again be in line for a hefty workload as the Eagles take on a Giants defense that has contained opposing running backs to a respectable 4.0 yards per rush. With Howard inactive for Philadelphia's past three outings, Sanders has garnered 13.3 carries per game, compared to just 8.4 rush attempts per game Weeks 1 through 9.",
    "timestamp": "2019-12-01 02:39 PM",
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
    "week13": 19.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE', 5.7, 10.1, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 8.6, 'BYE', 6.2, 12.4, 10.0, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 9.8,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 2,
    "avg_fp2": 11.47,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.52,
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
    "headlineNews": "Cedes most work to Mostert",
    "report": "Coleman rushed five times for six yards and caught his lone target for nine more in Sunday's 20-17 loss to the Ravens.",
    "analysis": "Coleman was outplayed by Raheem Mostert, who turned 21 touches into 154 yards from scrimmage and a touchdown. With Matt Breida (ankle) potentially returning Week 14 against the Saints, Coleman's role in the offense could be in jeopardy if the team opts to keep Mostert involved after his breakout performance.",
    "timestamp": "2019-12-01 01:26 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3, 16.5, 14.2, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843750.png",
    "name": "Derrius Guice",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 9.4,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 20,
    "avg_fp2": 12.43,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.1,
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
    "headlineNews": "Scores twice in career game",
    "report": "Guice carried 10 times for 129 yards and two touchdowns Sunday against the Panthers. He also caught two of three targets for an additional eight yards in the 29-21 win.",
    "analysis": "Although Guice came in with just 74 rushing yards in three prior outings this season, he exploded for 12.9 yards per carry while topping the 100-yard mark for the first time. He also scored his first two NFL rushing touchdowns on a pair of one-yard plunges to cap off his excellent performance. Guice should have every opportunity to flourish down the stretch and will look to do so in a favorable matchup next Sunday against the Packers.",
    "timestamp": "2019-12-01 03:26 PM",
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
    "week13": 26.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.4, 4.3, 26.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.0, 14.2, 10.3, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 9.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 14,
    "avg_fp2": 10.94,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.66,
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
    "headlineNews": "Six touches in loss",
    "report": "Johnson carried the ball four times for 15 yards and caught both his targets for nine yards in Sunday's 34-7 loss to the Rams,",
    "analysis": "Kenyan Drake saw 15 touches to Johnson's six on the afternoon while Chase Edmonds got zero, so the pecking order in the Cards' backfield doesn't seem to have changed coming out of the team's bye. Johnson' inability to break a big play with his limited workload doesn't make a good argument for more action, but the whole offense struggled in this one. He'll likely handle No. 2 duties again next week against a stingy Steelers defense.",
    "timestamp": "2019-12-01 06:00 PM",
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
    "week13": 3.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 7.9, 15.5, 17.9, 17.1, 25.2, 0.2, 'DNP', 'DNP', -0.5, 0.0, 'BYE', 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 14.9, 13.0, 12.0, 18.7, 15.2, 15.6, 'DNP', 'DNP', 10.8, 10.8, 'BYE', 12.1, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 8.2,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 28,
    "avg_fp2": 7.53,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.0,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Quiet in Thanksgiving win",
    "report": "Cohen rushed three times for nine yards and brought in all four targets for 26 yards in the Bears' 24-20 win over the Lions on Thursday.",
    "analysis": "Cohen was only a complementary option in the narrow win, as Mitchell Trubisky and the wideout duo of Anthony Miller and Allen Robinson took center stage in the offense, while backfield mate David Montgomery saw the lion's share of the rushing touches as usual. Cohen has yet to log double-digit carries in 2019, but he does now have at least four catches in four straight contests. The second-year back will look to keep that streak going versus the Cowboys in a Week 14 Thursday night matchup.",
    "timestamp": "2019-11-28 01:33 PM",
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
    "week13": 5.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6, 11.7, 15.9, 8.9, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 10.3, 6.0, 4.7, 5.7, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 8.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 21,
    "avg_fp2": 11.5,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 26.51,
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
    "headlineNews": "Puts up monster line in defeat",
    "report": "White rushed 14 times for 79 yards and caught eight passes (11 targets) for 98 yards and two touchdowns in Sunday's 28-22 loss to the Texans.",
    "analysis": "New England's offense was stagnant for nearly three quarters, but White caught fire in the fourth and finished with a monstrous fantasy performance. The receiving specialist did most of his damage in the passing game, but it is worth noting that he also finished with more carries than early-down back, Sony Michel, for just the second time this season. Game flow likely dictated this unusual carry split, but White could be in store for a similar workload next Sunday against the Chiefs in the event the Patriots are playing from behind early similar to this week's contest.",
    "timestamp": "2019-12-01 09:46 PM",
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
    "week13": 33.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE', 7.6, 0.4, 33.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 11.7, 'DNP', 5.4, 8.8, 8.1, 4.8, 4.8, 4.5, 'BYE', 9.1, 7.6, 6.8, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 7.8,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 5,
    "avg_fp2": 11.74,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.29,
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
    "headlineNews": "Tops 100 scrimmage yards again",
    "report": "Singletary carried the ball 14 times for 63 yards while catching three of four targets for 38 yards and a touchdown in Thursday's 26-15 win over the Cowboys.",
    "analysis": "His TD came on a nifty trick play that saw wide receiver John Brown toss a strike to a wide-open Singletary, who trotted into the end zone for a 28-yard score. The rookie RB took awhile to earn the trust of the Bills' coaching staff, but over the last five games he's piled up 484 scrimmage yards and two touchdowns, decisively supplanting Frank Gore at the top of the depth chart.",
    "timestamp": "2019-11-28 05:15 PM",
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
    "week13": 17.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5, 6.5, 8.7, 11.9, 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 16.2, 10.2, 12.9, 11.2, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 7.6,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 7.86,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.79,
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
    "headlineNews": "Totals 24 scrimmage yards",
    "report": "Freeman carried five times for 11 yards and caught all four of his targets for an additional 13 yards during Sunday's 23-20 win over the Chargers.",
    "analysis": "Freeman averaged just 2.2 yards per carry, and, although he received the third-most targets on the team, he finished with a meager 3.3 yards per catch. His long carry went for just five yards as he was held under 30 scrimmage yards for the third time in the last four games. Freeman's ability to make an impact in his current role is in serious question at the moment and he'll look to do more with his opportunities next Sunday against the Texans.",
    "timestamp": "2019-12-01 06:37 PM",
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
    "week13": 4.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 12.7, 9.3, 7.0, 7.7, 10.1, 14.7, 11.0, 1.9, 'BYE', 5.0, 3.9, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.0, 4.1, 5.0, 8.3, 5.5, 6.0, 5.8, 5.0, 'BYE', 5.3, 5.9, 6.6, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 7.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 8.91,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.74,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Strong fantasy total",
    "report": "Johnson rushed nine times for 36 yards and caught five passes (six targets) for 54 yards and a touchdown in Sunday's 28-22 win over New England.",
    "analysis": "Johnson serves as the Texans' change-of-pace and receiving back, but he outclassed starter Carlos Hyde (10 carries for 17 yards) both on the ground and through the air. The 26-year-old is averaging a healthy 5.2 yards per carry this season, but he doesn't receive enough volume (6.2 carries per game) in order to make a fantasy impact in standard formats. He does, however, get 3.4 targets per game in his current role, which has has turned into 2.5 receptions and 24.5 receiving yards per game this season. Despite the season-high total in fantasy points, Johnson is best left for deep PPR leagues heading into a Week 14 matchup with Denver.",
    "timestamp": "2019-12-01 11:08 PM",
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
    "week13": 17.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE', 5.4, 3.5, 17.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.2, 'BYE', 6.7, 6.1, 7.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 22,
    "avg_fp2": 7.78,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.03,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Surprises with pair of touchdowns",
    "report": "Barber rushed 17 times for 44 yards and two touchdowns in the Buccaneers' 28-11 win over the Jaguars on Sunday. He also had a two-point conversion run.",
    "analysis": "In a game that unfolded in rather surprising fashion overall, Barber fittingly punched in multiple touchdowns for the first time all season. The fourth-year back ended up outpacing backfield mate Ronald Jones by 11 carries overall, with Greg Auman of The Athletic reporting that coach Bruce Arians explained the lopsided division of labor as a function of Arians going with the \"hot hand\" in the backfield and Jones also having missed a blitz pickup at one point. Despite Barber's surprising success Sunday, the Bucs' backfield remains a week-to-week situation that is averse to fantasy production. Barber will look to build on his strong effort versus the Colts in Week 14.",
    "timestamp": "2019-12-01 05:21 PM",
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
    "week13": 18.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3, 1.5, 11.2, 8.1, 3.2, 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 7.8, 4.8, 5.7, 5.3, 6.7, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 7.2,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 19,
    "avg_fp2": 10.4,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.44,
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
    "headlineNews": "Gains 67 total yards",
    "report": "Jones ran for 41 yards on 10 carries and added 26 yards on four catches during Sunday's 31-13 win over the Giants.",
    "analysis": "Williams has now outgained fellow back Aaron Jones in three of the past four games, thanks in large part to his work in the short passing game. He's also been a more efficient runner during that span, averaging 4.4 yards per carry to Jones' 3.9. Jones still holds more value given his use in the red zone. That is subject to change, however, as Williams had a four-game touchdown streak earlier this season.  With he and Jones trending in opposite directions, Williams may pick up a few more touches Sunday against a disappointing Washington team.",
    "timestamp": "2019-12-01 02:32 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9, 6.3, 'BYE', 11.5, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 9.0, 10.3, 'BYE', 8.6, 4.9, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125403.png",
    "name": "Brian Hill",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 7.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 30,
    "avg_fp2": 4.96,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 26.86,
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
    "headlineNews": "Role decreased as Freeman returns",
    "report": "Hill logged 13 rushing yards on four carries and caught all three of his targets for 24 receiving yards during Thursday's 26-18 loss to the Saints.",
    "analysis": "The third-year back failed to leave a notable impression during his two-game audition in Devonta Freeman's absence, and consequentially only garnered seven offensive touches during Atlanta's inter-divisional defeat to New Orleans. Freeman dominated the workload by commanding 81 percent of the team's backfield carries, and barring injury, he will remain the Falcons' clear No. 1 option during a Week 14 matchup against a Carolina defense that is conceding 5.0 yards per carry on the season.",
    "timestamp": "2019-11-28 09:56 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": "DNP",
    "week07": 3.5,
    "week08": 8.9,
    "week09": "BYE",
    "week10": 13.6,
    "week11": 4.3,
    "week12": 4.2,
    "week13": 5.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 3.5, 8.9, 'BYE', 13.6, 4.3, 4.2, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.1, 1.8, 'DNP', -0.2, 1.7, 'BYE', 4.8, 14.9, 6.5, 3.8, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 7.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 4,
    "avg_fp2": 12.58,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.98,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Chance to face Buccaneers",
    "report": "Coach Frank Reich said that Mack (hand) will practice Wednesday and has \"a chance\" to return Week 14 against the Buccaneers, George Bremer of The Anderson Herald Bulletin reports.",
    "analysis": "Mack sat out the Colts' last two games while recovering from a broken right hand, but he looks like he'll be at least a limited participant in Wednesday's session, setting him up for a potential return to game action over the weekend. The third-year pro will have two more chances to up his level of activity in practice before the Colts render an official verdict on his status for the game in Tampa Bay. Jonathan Williams filled the lead role out of the backfield Week 12 versus the Texans, but those duties primarily fell to Jordan Wilkins (11 carries for 47 yards, two catches for nine yards) in the Week 13 loss to the Titans..",
    "timestamp": "2019-12-04 09:52 AM",
    "week01": 25.4,
    "week02": 7.3,
    "week03": 15.8,
    "week04": 3.9,
    "week05": 16.3,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 15.5,
    "week09": 8.9,
    "week10": 8.7,
    "week11": 16.9,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5, 8.9, 8.7, 16.9, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.3, 11.6, 16.7, 'DNP', 'DNP', 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915411.png",
    "name": "Ty Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 7.1,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 18,
    "avg_fp2": 3.02,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 18.28,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Totals 29 yards",
    "report": "Johnson rushed three times for 12 yards and caught all three of his targets for 17 yards during Thursday's 24-20 loss to the Bears.",
    "analysis": "Johnson unsurprisingly worked in a limited capacity behind newly established workhorse Bo Scarbrough, who handled the ball on 21 of his 36 snaps. By comparison, Johnson garnered only six touches on 25 snaps, which offers a clear indication of whom Detroit wants to carry the load. While Johnson at least seems to be tracking toward a bigger role than J.D. McKissic, the latter is adept in pass protection and has easily been the more explosive player when the ball is in his hands. With that said, Thursday's loss officially knocked the Lions out of playoff contention, and it's possible the fifth-round rookie could continue to get more work than McKissic down the stretch with Detroit's focus turning toward 2020 and beyond.",
    "timestamp": "2019-11-29 11:04 AM",
    "week01": 0.6,
    "week02": 4.6,
    "week03": 1.0,
    "week04": 1.9,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 7.7,
    "week08": 4.3,
    "week09": 5.1,
    "week10": 2.4,
    "week11": 1.1,
    "week12": 3.1,
    "week13": 4.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 4.6, 1.0, 1.9, 'BYE', 0.0, 7.7, 4.3, 5.1, 2.4, 1.1, 3.1, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 6.3, 4.5, 3.8, 'BYE', 2.9, 2.4, 10.7, 7.4, 10.9, 8.6, 3.2, 1.6, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139925.png",
    "name": "Rashaad Penny",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 6.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 3,
    "avg_fp2": 7.69,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.48,
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
    "headlineNews": "Explosive en route to two scores",
    "report": "Penny rushed 15 times for 74 yards and a touchdown and caught four of five targets for 33 yards and a score in Monday's 37-30 win over the Vikings.",
    "analysis": "Both of Seattle's primary running backs saw action on the first drive and looked explosive in the process, and Chris Carson finished the contest with 109 yards from scrimmage and a score of his own. While Carson garnered a majority of the rushes (23), he averaged 4.4 yards per carry compared to Penny's 4.9. Furthermore, Penny showcased intriguing pass-catching prowess with his best effort through the air since his NFL debut, when he hauled in four passes for 35 yards. While most game scripts don't allow two running backs to split a total of 38 rushes, there's little doubt that Penny has a role in this offense going forward. He'll look to continue his upward trajectory in Week 14 against the Rams.",
    "timestamp": "2019-12-02 08:51 PM",
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
    "week13": 24.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 13.0, 'DNP', 'DNP', 5.9, 'DNP', 0.0, 5.5, 1.2, -1.8, 'BYE', 18.9, 24.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.5, 'DNP', 'DNP', 5.5, 'DNP', 3.8, 2.5, 4.6, 5.5, 'BYE', 5.5, 5.9, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049916.png",
    "name": "Matt Breida",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 6.5,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 2,
    "avg_fp2": 9.47,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.52,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "On practice field Wednesday",
    "report": "Breida (ankle) was present at Wednesday's practice, Matt Barrows of The Athletic reports.",
    "analysis": "It'll be interesting to see if Breida increases his practice reps this week after being listed as a limited participant on every Week 13 injury report in advance of a third straight absence this past Sunday in Baltimore. Assuming he makes the requisite progress through his low-ankle sprain and gets the all-clear from the 49ers' training staff, he'll join a somewhat unsettled backfield Sunday at New Orleans. In the aforementioned showdown with the Ravens, Raheem Mostert received 74 percent of the offensive snaps en route to 21 touches for 154 yards from scrimmage and one touchdown. Meanwhile, Tevin Coleman had a meager 18-percent snap share, finishing with six touches and 15 yards from scrimmage.",
    "timestamp": "2019-12-04 11:01 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 13.7, 9.8, 'BYE', 26.4, 8.3, 4.1, 5.5, 10.2, 3.5, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 7.9, 8.7, 'BYE', 5.7, 13.7, 10.0, 5.4, 7.7, 7.2, 'DNP', 'DNP', 'DNP', 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 1,
    "avg_fp2": 5.34,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.04,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Limited to 22 yards in win",
    "report": "Edwards ran for 15 yards on six carries and added a seven-yard catch during Sunday's 20-17 win over the 49ers.",
    "analysis": "Predictably, Edwards' usage and efficiency dropped precipitously when forced to face off against a stout defense in a close game. After beating up on the Texans and Rams in back-to-back blowouts, Edwards, and the Ravens offense as a whole, struggled against the 49ers. A similarly tough matchup awaits Sunday in Buffalo, though the Bills have been gashed at times in the run game, surrendering 4.5 yards per rush -- 21st in the league.",
    "timestamp": "2019-12-03 05:08 PM",
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
    "week13": 2.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7, 1.7, 17.2, 5.5, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.1, 6.6, 3.7, 4.2, 5.6, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 6.1,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 29,
    "avg_fp2": 3.35,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.73,
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
    "headlineNews": "Minimal involvement in win",
    "report": "Bernard rushed once for four yards and caught one of two targets for eight yards in Sunday's win over the Jets.",
    "analysis": "The 28-year-old played a season-low 13 offensive snaps as Joe Mixon dominated the backfield work with 19 carries and four receptions. Bernard now has played only 34 plays on offense over the last two games. Andy Dalton reclaimed the starting job at quarterback and led the Bengals to their first win of the year, but the status quo for the veteran running back remains unchanged.",
    "timestamp": "2019-12-02 01:27 PM",
    "week01": 7.3,
    "week02": 1.8,
    "week03": 2.2,
    "week04": 3.9,
    "week05": 4.1,
    "week06": 3.4,
    "week07": 1.4,
    "week08": 5.5,
    "week09": "BYE",
    "week10": -0.7,
    "week11": 5.1,
    "week12": 4.5,
    "week13": 1.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 1.8, 2.2, 3.9, 4.1, 3.4, 1.4, 5.5, 'BYE', -0.7, 5.1, 4.5, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 10.4, 7.9, 7.6, 6.8, 6.1, 5.7, 7.9, 'BYE', 8.2, 7.7, 5.4, 3.5, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573300.png",
    "name": "Jay Ajayi",
    "depthchart": "Reserve: RB-3",
    "team": "Philadelphia Eagles",
    "projected": 6.0,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 13,
    "avg_fp2": 1.25,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.85,
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
    "headlineNews": "Sees just two touches in loss",
    "report": "Ajayi carried twice for nine yards in Sunday's 37-31 loss to the Dolphins.",
    "analysis": "Ajayi played nine snaps for the second straight week but saw four fewer touches. Meanwhile, Miles Sanders totaled 105 yards, scored, and played 62 snaps. With Jordan Howard nearing a return from a shoulder injury, it seems Ajayi's role in this offense will be limited going forward.",
    "timestamp": "2019-12-02 07:14 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 1.6,
    "week13": 0.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 1.6, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 6.1, 2.3, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116721.png",
    "name": "Jaylen Samuels",
    "depthchart": "Reserve: RB-3",
    "team": "Pittsburgh Steelers",
    "projected": 5.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 26,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.7,
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
    "headlineNews": "Gains 54 yards in win",
    "report": "Samuels ran for 32 yards on seven carries and had two catches for 22 yards during Sunday's 20-13 win over the Browns.",
    "analysis": "Rookie Benny Snell continued to get the lion's share of the touches with James Conner (shoulder) out for the second consecutive week, but the sophomore back still managed to put up his third-highest yardage total of the season. Depending on Conner's health heading into Week 14 against the Cardinals, Samuels could have a really nice matchup as the pass-catcher in Pittsburgh's backfield. The Cardinals have struggled mightily against the pass this season and defensive coordinator Vance Joseph's defenses have historically struggled to cover backs and tight ends.",
    "timestamp": "2019-12-01 05:02 PM",
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
    "week13": 6.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.6, 0.0, 19.54, 1.96, 'DNP', 'BYE', 'DNP', 12.8, 5.5, 13.0, 4.7, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.4, 3.8, 5.8, 13.2, 'DNP', 'BYE', 'DNP', 8.1, 11.3, 3.4, 10.5, 6.3, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Reserve: RB-3",
    "team": "Detroit Lions",
    "projected": 5.8,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 18,
    "avg_fp2": 5.16,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 18.28,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Five touches on Thanksgiving Day",
    "report": "McKissic rushed twice for nine yards and caught all three of his targets for 15 yards during Thursday's 24-20 loss to Chicago.",
    "analysis": "With the game tied at 17 and the Lions knocking on the door to the end zone, McKissic got the ball on third-and-one from the four-yard line and was a shoestring tackle away from notching his first rushing touchdown in two years. It was certainly interesting that McKissic got the nod in that situation over the 235-pound Bo Scarbrough, and head coach Matt Patricia said after the game that McKissic stayed on the field because the clock was running and he didn't want to make a late substitution, per Dave Birkett of the Detroit Free Press. Regardless of the decision-making process, the usage illustrates the confidence Detroit has in McKissic as a change-of-pace back. He should continue to have a complementary role in the offense despite Scarbrough's strong production to date.",
    "timestamp": "2019-11-29 10:52 AM",
    "week01": "DNP",
    "week02": 0.2,
    "week03": 4.4,
    "week04": 4.6,
    "week05": "BYE",
    "week06": 2.1,
    "week07": 7.0,
    "week08": 1.6,
    "week09": 14.7,
    "week10": 8.5,
    "week11": 6.8,
    "week12": 3.0,
    "week13": 3.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.2, 4.4, 4.6, 'BYE', 2.1, 7.0, 1.6, 14.7, 8.5, 6.8, 3.0, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.2, 2.5, 2.0, 'BYE', 6.2, 5.9, 8.5, 5.2, 7.2, 6.5, 8.5, 3.0, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 5.8,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 24,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.29,
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
    "headlineNews": "Absent from practice",
    "report": "Williams (ribs) isn't practicing Wednesday, Herbie Teope of The Kansas City Star reports.",
    "analysis": "Williams still has a shot to play Sunday against the Patriots, but his absence from practice to begin the week isn't a positive early sign for his status. With Darrel Williams (hamstring) also not practicing, the Chiefs' healthy backfield currently consists of LeSean McCoy, Darwin Thompson and Spencer Ware. Damien hasn't practiced in any fashion since injuring the left side of his ribs in the Week 11 win over the Chargers.",
    "timestamp": "2019-12-04 10:24 AM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9, 'BYE', 'DNP', 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 5.6,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 17,
    "avg_fp2": 9.37,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.78,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Totals just two yards",
    "report": "Murray rushed four times for two yards in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "He wasn't targeted in the passing game. Murray has struggled to find fantasy relevancy since the Saints' Week 9 bye, logging double-digit carries just once in four games. In that span -- aside from his decent Week 12 -- he's rushed 19 times for just 41 yards. With Alvin Kamara  back to full strength and leading the backfield in touches, Murray isn't a startable fantasy option outside of deeper leagues right now.",
    "timestamp": "2019-11-28 09:42 PM",
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
    "week13": 0.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE', 2.9, 4.2, 12.4, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.3, 3.9, 5.2, 5.7, 4.8, 6.9, 5.7, 'BYE', 7.5, 2.6, 8.9, 8.3, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2575965.png",
    "name": "Elijhaa Penny",
    "depthchart": "Backup: RB-2",
    "team": "New York Giants",
    "projected": 5.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 23,
    "avg_fp2": 1.09,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.4,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Rushes twice in loss",
    "report": "Penny took two carries for two yards and couldn't haul in his only target during Sunday's 31-13 loss to the Packers.",
    "analysis": "Penny was deployed on two third downs and converted on one of them while being stuffed on the other. The 26-year-old isn't the concern of fantasy owners, but he's a worthy real-life value in short-yardage situations.",
    "timestamp": "2019-12-02 09:41 AM",
    "week01": 0.3,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 1.2,
    "week05": 2.9,
    "week06": 1.1,
    "week07": 6.0,
    "week08": 0.3,
    "week09": 0.0,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 0.0,
    "week13": 0.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 0.0, 0.0, 1.2, 2.9, 1.1, 6.0, 0.3, 0.0, 'DNP', 'BYE', 0.0, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 2.9, 1.4, 1.6, 2.2, 2.1, 1.6, 3.6, 2.2, 'DNP', 'BYE', 1.2, 2.6, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14198.png",
    "name": "Dion Lewis",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 5.3,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 9,
    "avg_fp2": 2.88,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.17,
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
    "headlineNews": "Role shrinks again",
    "report": "Lewis did not record a carry but did haul in his lone target for nine yards in the team's Week 13 win over the Colts.",
    "analysis": "After recording his highest carry total of the season Week 12, Lewis failed to find traction in the team's offensive game plan. He was on the field for just 11 snaps, further solidifying his lack of involvement. At this point, it's clear that Lewis is nothing more than a handcuff for Derrick Henry.",
    "timestamp": "2019-12-02 05:34 PM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 2.5,
    "week04": 4.0,
    "week05": 4.0,
    "week06": 3.4,
    "week07": 0.2,
    "week08": 0.7,
    "week09": 5.8,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 5.0,
    "week13": 1.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 2.5, 4.0, 4.0, 3.4, 0.2, 0.7, 5.8, 'DNP', 'BYE', 5.0, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 10.1, 7.3, 5.8, 6.7, 3.9, 6.4, 4.4, 6.0, 'DNP', 'BYE', 6.9, 1.6, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577654.png",
    "name": "DeAndre Washington",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 3.94,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.43,
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
    "headlineNews": "Season high in scrimmage yards",
    "report": "Washington carried the ball twice for five yards and caught all three of his targets for 44 yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "The fourth-year RB posted season highs in receiving yards and scrimmage yards, albeit modest ones, as he was the clear No. 2 option in the backfield for the Raiders. Touches have been tough to come by for any back not named Josh Jacobs, though, and it would take an injury to the rookie starter for Washington to have any kind of consistent fantasy value.",
    "timestamp": "2019-12-01 06:33 PM",
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
    "week13": 6.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 4.5, 2.2, 3.6, 11.1, 'BYE', 4.6, 3.2, 3.3, 2.9, 2.3, 2.4, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 2.2, 5.8, 2.9, 4.0, 'BYE', 6.1, 2.9, 4.7, 4.7, 3.7, 8.0, 5.4, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 5.2,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 8,
    "avg_fp2": 4.62,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.56,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Status in question for Thursday",
    "report": "Pollard (ankle) is questionable for Thursday's game in Chicago, Calvin Watkins of The Dallas Morning News reports.",
    "analysis": "Pollard didn't make an appearance on the Cowboys' Week 14 injury report until Tuesday, capping it with back-to-back DNPs. After Ezekiel Elliott, fullback Jamize Olawale is the only other RB on the Cowboys' 53-man roster, so the team would show its hand with Pollard if it makes an addition to the backfield.",
    "timestamp": "2019-12-04 11:26 AM",
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
    "week13": 0.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 3.0, 20.3, 0.0, 1.9, 1.3, 2.8, 'BYE', 3.5, -0.4, 15.6, 4.3, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.4, 8.1, 6.0, 2.4, 4.3, 4.1, 'BYE', 3.6, 1.3, 1.3, 3.3, 4.0, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 24,
    "avg_fp2": 8.84,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.29,
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
    "headlineNews": "Salvages day with score",
    "report": "McCoy carried the ball five times for 10 yards and a touchdown and caught all three of his targets for 20 yards in Sunday's 40-9 rout of the Raiders.",
    "analysis": "Despite Damien Williams (ribs) being inactive and Darrel Williams leaving the game early due to a hamstring injury, McCoy still didn't have much success aside from a three-yard TD run in the third quarter, and it was rookie Darwin Thompson who wound up leading the Chiefs in carries on the afternoon. Depending on the health of the rest of the backfield, McCoy could be in for a larger role again next week, but he'll likely struggle to produce against the Patriots' league-leading defense.",
    "timestamp": "2019-12-01 06:49 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE', 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 'DNP', 5.1, 'BYE', 5.8, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2570986.png",
    "name": "Malcolm Brown",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 5.0,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 4.04,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.87,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Effective in win over Cards",
    "report": "Brown rushed six times for 30 yards during Sunday's 34-7 win over Arizona. He played just 18 of 79 offensive snaps.",
    "analysis": "While it's been a downhill season for the backup after he started the campaign with two touchdowns Week 1, this was an improved showing for Brown. No. 1 running back Todd Gurley ran all over the Cardinals, and Brown also found success with 12- and nine-yard rushes. However, Brown's fantasy value is minimal with Gurley healthy and Darrell Henderson also mixing into the rushing attack.",
    "timestamp": "2019-12-02 12:01 PM",
    "week01": 17.3,
    "week02": 5.2,
    "week03": 0.7,
    "week04": 1.4,
    "week05": 0.3,
    "week06": 4.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 1.0,
    "week11": 7.5,
    "week12": 0.0,
    "week13": 3.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 5.2, 0.7, 1.4, 0.3, 4.0, 'DNP', 'DNP', 'BYE', 1.0, 7.5, 0.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 3.8, 2.8, 2.2, 4.2, 2.0, 'DNP', 'DNP', 'BYE', 0.7, 3.0, 0.6, 3.1, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577253.png",
    "name": "Javorius Allen",
    "depthchart": "Reserve: RB-3",
    "team": "New York Giants",
    "projected": 5.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 23,
    "avg_fp2": 0.4,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.4,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "First carry of season",
    "report": "Allen recorded a four-yard rush in Sunday's 31-13 loss to the Packers.",
    "analysis": "While Saquon Barkley continues his stranglehold on the backfield reps -- he played 96 percent of offensive snaps -- Allen logged three snaps and Wayne Gallman didn't touch the field. Both Allen and Gallman have similar handcuff value in case Barkley is injured during the fantasy playoffs.",
    "timestamp": "2019-12-02 09:09 AM",
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
    "week13": 0.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.0, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116136.png",
    "name": "Justin Jackson",
    "depthchart": "Reserve: RB-3",
    "team": "Los Angeles Chargers",
    "projected": 5.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 27,
    "avg_fp2": 5.1,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.85,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Practicing in full",
    "report": "Jackson (calf) was a full participant in Wednesday's practice.",
    "analysis": "Jackson looks to have put San Diego's bye to good use and recovered from his lingering calf injury. Barring any setbacks, expect Jackson to play his usual depth role behind Melvin Gordon and Austin Ekeler during Sunday's tilt against the Broncos.",
    "timestamp": "2019-11-27 08:17 PM",
    "week01": 6.6,
    "week02": 6.9,
    "week03": 5.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 1.9,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "BYE",
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 6.9, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.9, 'DNP', 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 7.1, 6.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 'DNP', 'DNP', 'BYE', 'DNP', 5.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 18.9,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 12.09,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.15,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Quiet night in Week 13 loss",
    "report": "Diggs secured four of nine targets for 25 yards in the Vikings' 37-30 loss to the Seahawks on Monday. He also rushed once for 27 yards.",
    "analysis": "Diggs was once again the recipient of plenty of extra defensive attention with Adam Thielen (hamstring) sidelined for the third straight game, and he was the intended receiver on a Kirk Cousins interception on the first play of the fourth quarter. Diggs was coming off a five-catch, 121-yard, one-touchdown effort versus the Broncos before the Week 12 bye, but his yardage tally Monday was his third lowest of the campaign. Diggs will hope to have his teammate back to draw some coverage away in a Week 14 divisional battle against the Lions.",
    "timestamp": "2019-12-02 09:19 PM",
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
    "week13": 7.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4, 20.6, 'BYE', 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5, 'BYE', 14.7, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 17.1,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 15.55,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.03,
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
    "headlineNews": "Leads team in targets",
    "report": "Evans secured four of 11 targets for 53 yards in the Buccaneers' 28-11 win over the Jaguars on Sunday.",
    "analysis": "Evans paced the team in targets, but it only equated to his third straight sub-70-yard effort through the air. The multi-time Pro Bowler has gone four consecutive games without eclipsing the century mark overall, but the fact he's now seen double-digit targets in five contests this season speaks to how locked in his volume is. Evans will look to bounce back with better numbers against the Colts in Week 14.",
    "timestamp": "2019-12-01 02:53 PM",
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
    "week13": 7.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 8.1, 41.0, 16.9, 0.0, 16.1, 'BYE', 37.3, 30.0, 10.2, 8.9, 7.0, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 11.2, 17.1, 12.0, 14.9, 10.8, 'BYE', 8.3, 17.6, 21.2, 11.5, 13.8, 20.0, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.4,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 8.74,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 32.87,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Dubbed week-to-week",
    "report": "Smith-Schuster called himself week-to-week Wednesday and ran for the first time since suffering his knee injury, Brooke Pryor of ESPN.com reports.",
    "analysis": "Smith-Schuster only ran in a straight line Wednesday, but he's making clear progress in his recovery and appears close to making cuts again. The third-year-pro is officially considered questionable for Sunday's tilt against the Cardinals, according to Missi Matthews of the Steelers' official site . He's nursing a knee issue suffered Week 11 versus Cleveland. Pittsburgh's initial injury report for Week 14 will be released later Wednesday, and James Washington, Diontae Johnson and Tevin Jones would be in line for expanded roles if Smith-Schuster were limited or forced to miss any more time.",
    "timestamp": "2019-12-04 11:26 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1, 5.9, 3.1, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.7, 11.8, 'DNP', 'DNP', 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 15.8,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 11.19,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 34.88,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Huge outing in return from injury",
    "report": "Jeffery hauled in nine of 16 targets for 137 yards and one touchdown during Sunday's 37-31 loss to the Dolphins.",
    "analysis": "The 29-year-old wideout was back to his presumed No. 1 role in the receiving corps upon returning from a two-game injury-induced absence, racking up more than twice as many targets as any other Eagles player. Jeffery provided an early spark in an otherwise lethargic second half for Philadelphia's offense, as his 10-yard touchdown catch at the 11:44 mark of the third quarter was the Eagles' only score until Jake Elliott hit a field goal with 1:51 to go. Though the team's outlook is bleak following a third consecutive defeat, an upcoming Monday night matchup against the Giants' bottom-10 pass defense foretells another profitable fantasy outing for Jeffery in Week 14.",
    "timestamp": "2019-12-01 02:16 PM",
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
    "week13": 24.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 0.0, 'DNP', 11.3, 8.2, 18.6, 4.8, 8.4, 5.6, 'BYE', 'DNP', 'DNP', 24.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.4, 8.2, 'DNP', 9.6, 11.8, 7.1, 13.1, 9.8, 11.1, 'BYE', 'DNP', 'DNP', 15.7, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 15.3,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 11.87,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.15,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Won't return Monday",
    "report": "The Vikings ruled out Thielen (hamstring) for Monday's game at Seattle.",
    "analysis": "In the midst of being listed as limited on all three Week 13 practice reports, Thielen told Tom Pelissero of NFL Network that he was \"getting there\" in his recovery from a right hamstring injury. \"Now I have to show I can do it and I can do it over and over and over and it can hold up,\" Thielen said. Listed as questionable Saturday, Thielen nonetheless didn't make it all the way to game day, considering the Vikings' early decision. With the veteran out for the fourth time in five games, the receiving corps will be led by Stefon Diggs, Bisi Johnson, Kyle Rudolph and Irv Smith Jr.",
    "timestamp": "2019-12-01 11:54 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.5, 'DNP', 'DNP', 'BYE', 'DNP', 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 15.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 17,
    "avg_fp2": 10.07,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 26.34,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Limited to 29 yards",
    "report": "Beckham caught three of six targets for 29 yards during Sunday's 20-13 loss to the Steelers.",
    "analysis": "Pittsburgh's defense kept Beckham in check Sunday for his third game of less than 30 yards this season, his first since Week 5. Beckham had been improving in production in recent weeks with at least 80 receiving yards in three of his last six games. That isn't bad, but probably not what Cleveland had in mind when the team acquired the star receiver in an offseason blockbuster. He'll have an opportunity to correct course Sunday against the one-win Bengals.",
    "timestamp": "2019-12-01 03:50 PM",
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
    "week13": 4.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7, 8.2, 8.0, 17.4, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 14.7, 15.0, 20.8, 15.0, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 15.0,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 13.78,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.25,
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
    "headlineNews": "Can't break out Sunday",
    "report": "Hill caught five of eight targets for 55 yards and lost four yards on his only carry in Sunday's 40-9 rout of the Raiders.",
    "analysis": "The Chiefs' passing game was surprisingly muted despite the final score, as windy conditions at Arrowhead Stadium prevented Patrick Mahomes from stretching the field as usual. Hill's longest grab went for only 17 yards, a somewhat disappointing showing for the speedster considering he had eight catches of 20-plus yards in the five games prior to straining his hamstring in Week 11. Hill could struggle to get open deep again next week in a road matchup against the Patriots' league-leading defense.",
    "timestamp": "2019-12-01 07:08 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7, 'BYE', 12.2, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 14.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 6,
    "avg_fp2": 13.04,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.88,
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
    "headlineNews": "Tallies another touchdown",
    "report": "Allen caught all six of his targets for 68 yards and a touchdown in Sunday's 23-20 loss to the Broncos.",
    "analysis": "Allen rebounded from a four-catch, 18-yard outing against the Broncos in Week 4, taking advantage of broken coverage from cornerback Chris Harris to record his second straight game with at least 60 receiving yards and a touchdown. A possible change at quarterback is about the only thing stopping Allen at this point, as Ian Rapoport of NFL.com suggested the Chargers may look to bench Philip Rivers in the event the team continues to struggle.",
    "timestamp": "2019-12-01 04:47 PM",
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
    "week13": 15.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5, 12.6, 17.1, 'BYE', 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.6, 13.0, 'BYE', 15.6, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 14.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 9,
    "avg_fp2": 18.26,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.39,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Season-low receiving total",
    "report": "Thomas brought in six of eight targets for 48 yards in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "Thomas paced the Saints in receptions and tied for the team lead in targets, though his output was a bit light by his standards. The fourth-year receiver entered Thursday's contest having averaged 113 receiving yards on just over nine receptions per contest this season, but he came up with his lowest receiving total of the year. Drew Brees' uncharacteristic 184-yard night played a large part in Thomas' dud, and the All Pro receiver will try to bounce back from this outlier next week against San Francisco.",
    "timestamp": "2019-11-28 09:14 PM",
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
    "week13": 7.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7, 21.4, 21.1, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 17.4, 23.6, 17.8, 15.7, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 14.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 22,
    "avg_fp2": 11.36,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.69,
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
    "headlineNews": "Struggles against Rams",
    "report": "Kirk caught three of seven targets for 23 yards in Sunday's 34-7 loss to the Rams.",
    "analysis": "Despite tying Larry Fitzgerald for the team lead in targets, Kirk wound up posting his second-lowest yardage total of the year. It's the third time in the last four games he's averaged less than 5.0 yards per target, a poor showing for a player with his big-play potential, and he may not have much more success in next week's tilt against the Steelers.",
    "timestamp": "2019-12-01 06:04 PM",
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
    "week13": 3.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6, 34.8, 7.2, 'BYE', 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 19.0, 13.0, 'BYE', 11.7, 14.1]
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
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 10.04,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.87,
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
    "headlineNews": "Has two-touchdown day",
    "report": "Adams caught six of 10 targets for 64 yards and two touchdowns during Sunday's 31-13 win over the Giants. He fumbled during the game, but the offense maintained possession.",
    "analysis": "Despite a snow-covered field, Adams managed to strike twice against the Giants. First, he capped off the Packers' opening drive with an eight-yard touchdown in which he found a hole in the zone and plunged into the end zone. He struck again in the fourth quarter on a 17-yard catch in the back of the end zone on a free play. Adams, when healthy, has been prolific, with at least six catches in six of eight games, but scoring has been the issue. He now has three touchdowns in his last two games and faces off Sunday against a Washington defense in the bottom 10 in the league in preventing opponent passing touchdowns.",
    "timestamp": "2019-12-01 02:43 PM",
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
    "week13": 21.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 0.0, 0.0, 'DNP', 0.0, 7.6, 15.3, 'BYE', 15.8, 21.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 7.4, 13.2, 'DNP', 5.7, 11.3, 14.5, 'BYE', 10.4, 12.5, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 13.8,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 30,
    "avg_fp2": 7.55,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.05,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Leading receiver in loss",
    "report": "Anderson caught seven of 10 targets for 101 yards in Sunday's 22-6 loss to the Bengals.",
    "analysis": "Anderson led the team in targets, catches and yards, but he could have had an even better performance if he hadn't dropped a ball in the end zone. The speedster has put together his best two-game stretch of the season with 197 receiving yards over the past two weeks. He'll look to stay productive against the Dolphins in Week 14.",
    "timestamp": "2019-12-01 03:23 PM",
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
    "week13": 13.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3, 1.6, 7.1, 16.6, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.0, 7.4, 8.8, 8.3, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 13.5,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 12,
    "avg_fp2": 14.6,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 23.81,
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
    "headlineNews": "Leads team with 64 yards",
    "report": "Hopkins recorded five catches (eight targets) for 64 yards in Sunday's 28-22 win over New England. He also threw for a six-yard touchdown pass on a trick play.",
    "analysis": "Hopkins drew a tough matchup against Stephon Gilmore -- widely considered the best man-to-man corner in the game -- so the pedestrian stat line (by his standards) shouldn't come as a huge surprise. The 27-year-old still led all Houston receivers with 64 yards in a contest where Deshaun Watson spread the ball out to eight different targets. The star wideout did contribute a score in an unconventional way, throwing his first career touchdown pass to quarterback Deshaun Watson on a gadget play. Hopkins is having a down year (86 receptions, 903 yards and six touchdowns) when factoring in his price tag on draft day, and things won't get any easier next week against Denver's fifth-ranked pass defense (207.5 passing yards allowed per game).",
    "timestamp": "2019-12-01 09:30 PM",
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
    "week13": 13.14,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4, 15.4, 'BYE', 11.5, 24.4, 13.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 12.9, 'BYE', 13.1, 17.4, 14.0, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Redskins",
    "projected": 13.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 10.51,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.42,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Contributes eight yards in loss",
    "report": "McLaurin caught two of four targets for eight yards during Sunday's 29-21 win over the Panthers.",
    "analysis": "Although his team pulled off a terrific road victory, McLaurin was limited to one reception that gained 11 yards and another that lost three. This dud performance comes at an unfortunate time for owners of McLaurin, who had totaled 141 receiving yards on 16 targets over his last two games. The talented rookie will look to get back on track next Sunday against the Packers.",
    "timestamp": "2019-12-01 03:32 PM",
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
    "week13": 1.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 14.7, 16.0, 'DNP', 6.6, 24.0, 1.6, 5.9, 5.9, 'BYE', 8.4, 9.7, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 13.0, 11.2, 'DNP', 12.2, 13.7, 11.4, 8.7, 9.3, 'BYE', 13.8, 9.3, 9.6, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050661.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 17.16,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.03,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Quiet in Week 13 victory",
    "report": "Godwin secured four of six targets for 50 yards in the Buccaneers' 28-11 win over the Jaguars on Sunday.",
    "analysis": "Godwin crashed back down to earth after his eye-popping 7-184-2 line in the Week 12 win over the Falcons, with Jameis Winston getting Breshad Perriman (5-87) and O.J. Howard (5-60) involved at an atypically high rate Sunday. Despite the downturn, Godwin has the ability to pop off on any given week, and with no fewer than six targets in nine straight games, a robust role in the offense is all but guaranteed each time he suits up. The third-year wideout will look to bounce back with better production versus the Colts in Week 14.",
    "timestamp": "2019-12-01 02:59 PM",
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
    "week13": 7.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 22.1, 5.5, 35.2, 28.0, 20.1, 'BYE', 8.3, 10.4, 10.4, 12.2, 33.9, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 6.8, 13.7, 7.9, 8.1, 8.6, 'BYE', 10.4, 13.9, 14.1, 11.8, 9.4, 13.4, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 12.6,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 13.7,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.24,
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
    "headlineNews": "Set for limited practice",
    "report": "Coach Dan Quinn said that Jones (shoulder) will be limited in practice Wednesday, William McFadden of the Falcons' official site reports.",
    "analysis": "Jones only took part in a limited walk-through session last week before being ruled out for the Falcons' Thanksgiving Day loss to the Saints, so it's encouraging to see him handling some reps in a more traditional practice to begin Week 14. Per Jason Butt of The Athletic, Quinn expressed optimism Monday that the star wideout will be available for this weekend's tilt with the Panthers, but Jones may need to increase his activity level the next two days for that to become a reality.",
    "timestamp": "2019-12-04 09:42 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE', 9.4, 11.7, 9.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 18.5, 15.9, 19.4, 'DNP', 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 12.4,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 9.54,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.8,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Nearly invisible in big loss",
    "report": "Williams caught one of four targets for nine yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "His lone catch didn't come until the fourth quarter, when the game was long out of reach. Williams hasn't found the end zone since Week 8 and hasn't topped 25 receiving yards in three of the last four games, disappearing just when the Raiders seemed to be pushing themselves into playoff contention. The fifth-year receiver will try to reverse his fortunes in Week 14 against the Titans.",
    "timestamp": "2019-12-01 06:38 PM",
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
    "week13": 1.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3, 4.0, 10.2, 2.8, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.4, 10.6, 13.0, 12.5, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 12.4,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 10.44,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 26.45,
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
    "headlineNews": "TDs in two straight",
    "report": "Boyd caught five of 10 targets for 59 yards and a touchdown in Sunday's 22-6 win over the Jets.",
    "analysis": "Boyd scored a 17-yard touchdown in the first quarter, catching this one from Andy Dalton after being on the receiving end of a Ryan Finley score last week. Dalton being reinserted under center helps Boyd's rest-of-season outlook, especially now that the 25-year-old receiver has rediscovered his nose for the end zone after starting the season with only one touchdown through 10 games. Boyd will look to extend his TD streak to three games in a Week 14 rivalry game against the Browns.",
    "timestamp": "2019-12-01 02:04 PM",
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
    "week13": 14.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE', 9.2, 1.5, 16.6, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 16.0, 12.7, 12.1, 8.0, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 12.3,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 13.07,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 29.82,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Scores two TDs vs. Chargers",
    "report": "Sutton caught four of five targets for 74 yards and a touchdown during Sunday's 23-20 win over the Chargers.",
    "analysis": "Sutton made a tremendous impact early in the game, connecting with Drew Lock for a pair of touchdowns to put his team ahead in the first quarter. The highlight of the day came on the first of the two, when he beat his defender to the outside and made the grab while diving into the end zone. Those who feared for Sutton's fantasy value with Lock at quarterback can breathe a sigh of relief for now, as the duo will enjoy a favorable matchup against the Texans next week.",
    "timestamp": "2019-12-01 06:18 PM",
    "week01": 15.5,
    "week02": 6.0,
    "week03": 11.2,
    "week04": 21.2,
    "week05": 17.2,
    "week06": 9.6,
    "week07": 11.7,
    "week08": 8.7,
    "week09": 14.8,
    "week10": "BYE",
    "week11": 16.32,
    "week12": 3.2,
    "week13": 21.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 6.0, 11.2, 21.2, 17.2, 9.6, 11.7, 8.7, 14.8, 'BYE', 16.32, 3.2, 21.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 6.1, 7.3, 6.9, 6.2, 10.0, 12.2, 14.9, 10.5, 'BYE', 14.9, 10.2, 4.1, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 12.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 26,
    "avg_fp2": 7.29,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 38.94,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Tops 100 receiving yards",
    "report": "Pascal hauled in seven of his 10 targets for 109 yards in the team's Week 13 loss to the Titans.",
    "analysis": "Pascal leapt up the depth chart with T.Y. Hilton (calf) and Parris Campbell (hand) both ruled out prior to the game. Pascal took advantage of Chester Rogers' (knee) exit from the game after just two plays by recording several big grabs -- including three receptions of 20 yards or more and another that went for 19 yards. Pascal has shown flashes of brilliance without other key Colts offensive weapons around, so his outlook for Week 14 against the Buccaneers will likely depend on the health of Hilton, Campbell and Rogers.",
    "timestamp": "2019-12-01 04:34 PM",
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
    "week13": 14.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1, 16.1, 3.6, 2.7, 0.0, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 8.5, 13.2, 11.1, 7.8, 10.6, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 11.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 14.26,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.15,
    "fanduelSalary": "$13000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Full practice participant",
    "report": "Cooper (knee) practiced without limitations Monday, David Helman of the Cowboys' official site reports.",
    "analysis": "Coach Jason Garrett expressed optimism that Cooper would be ready for Thursday's matchup against the Bears, and Monday's practice report confirms that notion. Cooper appeared back to normal in the Thanksgiving Day game against the Bills before injuring his knee in the fourth quarter, but additional tests found no structural damage. The fifth-year wide receiver will look to continue his trajectory after an eight-catch, 85-yard Week 13 performance in Thursday's tilt versus the Bears' ninth-ranked pass defense (222.2 passing yards allowed per game).",
    "timestamp": "2019-12-02 01:31 PM",
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
    "week13": 12.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0, 26.2, 5.3, 0.0, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.3, 10.0, 10.7, 13.7, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 11.2,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 12.54,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 23.9,
    "fanduelSalary": "$14000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Another fruitful fantasy effort",
    "report": "Robinson brought in eight of 12 targets for 86 yards and a touchdown in the Bears' 24-20 win over the Lions on Thursday.",
    "analysis": "Robinson opened the scoring on the day for the Bears with a 10-yard touchdown grab in the first quarter, and he was Mitchell Trubisky's second-favorite target overall behind Anthony Miller. Robinson was the runner-up in receptions, receiving yardage and targets to his second-year teammate, but the veteran still put together a highly productive follow-up to his season-best 131-yard effort in Week 12 against the Giants. Robinson will look to extend his scoring streak to three games when the Bears face off with the Cowboys in a Week 14 Thursday night battle.",
    "timestamp": "2019-11-28 01:22 PM",
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
    "week13": 18.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1, 11.6, 3.5, 22.1, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 11.5, 7.6, 9.7, 10.1, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 11.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 11.69,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.21,
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
    "headlineNews": "Another big performance",
    "report": "Woods hauled in 13 of his 19 targets for 172 yards in the team's Week 13 win over the Cardinals.",
    "analysis": "Woods had a career day, posting his highest target, reception and yardage total in a single game. The only thing missing from his performance was a trip to the end zone, though he still turned in two massive receptions of 49 and 25 yards. Though he had inconsistent involvement in the offense early in the season, Woods now has at least nine targets in each of his past three games. He'll look to remain involved as the team takes on Seattle in Week 14.",
    "timestamp": "2019-12-01 07:55 PM",
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
    "week13": 23.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE', 13.0, 'DNP', 12.7, 23.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 12.1, 'DNP', 8.8, 11.4, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 11.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 8,
    "avg_fp2": 14.02,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 21.22,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Breaks century mark in loss",
    "report": "Edelman (shoulder) caught six passes (12 targets) for 106 yards and a touchdown in Sunday's 28-22 loss to Houston.",
    "analysis": "Edelman toughed out a shoulder injury and suited up for a primetime matchup against another AFC contender. The slot specialist brought his A-game, pacing all receivers from both sides in receptions and yardage. The Patriots' late comeback effort proved futile, but Edelman likely provided enough on the stat sheet to satisfy those with shares in the receiver. The 33-year-old remains Tom Brady's favorite target, bringing his season totals up to 82 receptions, 915 yards and five touchdowns heading into a Week 14 matchup against a middling Chiefs pass defense.",
    "timestamp": "2019-12-01 10:23 PM",
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
    "week13": 18.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE', 12.4, 13.3, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 12.1, 'BYE', 9.9, 9.0, 9.2, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 10.9,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 12.51,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 27.27,
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
    "headlineNews": "Blanked by Vikings",
    "report": "Lockett didn't haul in any of his three targets during Monday's 37-30 win over the Vikings.",
    "analysis": "Lockett was held catchless for the first time since Week 11 of the 2017 season. Instead, DK Metcalf and Jacob Hollister both corralled six passes each for 75 and 44 yards, respectively. This is Lockett's second straight dud following last week's 38-yard effort. It's fair to worry whether he is hampered by the shin injury he sustained Week 10 against the 49ers, as he only practiced once in the week leading up to this contest. However, we can just as easily chalk it up to how Lockett is typically a boom-or-bust receiver. The 27-year-old wideout will look to get back on track in Week 14 against the Rams.",
    "timestamp": "2019-12-02 09:23 PM",
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
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7, 4.4, 'BYE', 4.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 15.6, 12.1, 'BYE', 8.9, 12.7, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 10.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 9.75,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 30.51,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Building TD streak",
    "report": "Samuel caught two of four targets for 41 yards and a touchdown while adding a 20-yard rush in Sunday's 20-17 loss to Baltimore.",
    "analysis": "Samuel showed off his ball skills on his touchdown catch, snagging it in between two defenders for a 33-yard score on San Francisco's opening drive. The Ravens were able to contain him after that, but the rookie wide receiver now has touchdowns in consecutive games after finding the end zone only once in his first nine appearances. Maintaining that momentum won't be easy, with a Week 14 trip to New Orleans on tap for the 49ers.",
    "timestamp": "2019-12-01 02:26 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1, 4.7, 9.0, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 10.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 13.96,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.21,
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
    "headlineNews": "Finds end zone",
    "report": "Kupp hauled in all six of his targets for 65 yards and a touchdown in the team's Week 13 win over the Cardinals.",
    "analysis": "Kupp was out-targeted by both Robert Woods and Tyler Higbee, but he managed a strong performance due to his efficiency. His performance was highlighted by a 10-yard touchdown, which forced him to tightrope on the sideline to get both feet inbounds. It was a bounce-back performance for Kupp, who had failed to top 55 yards or find the end zone in each of his last three contests. Kupp will take on the Seahawks in Week 14 and look to replicate his Week 5 performance, when he recorded nine receptions, 121 yards and a touchdown.",
    "timestamp": "2019-12-01 07:40 PM",
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
    "week13": 15.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE', 0.0, 6.8, 6.5, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.4, 12.8, 7.8, 11.0, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 10.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 25,
    "avg_fp2": 10.6,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.39,
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
    "headlineNews": "Non-factor in win",
    "report": "Brown caught one of two targets for one yard in Sunday's 20-17 win over San Francisco.",
    "analysis": "Brown relies on big chunk plays, and there weren't many of those to be found in this battle of disciplined defenses. Quarterback Lamar Jackson only threw for 105 yards in this one, so there should be better days ahead for the rookie wide receiver, who was coming off his second multi-score game of the season. Brown will have to contend with a stout Buffalo secondary on the road in Week 14.",
    "timestamp": "2019-12-01 02:44 PM",
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
    "week13": 0.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3, 16.0, 3.3, 18.7, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3, 9.6, 12.0, 9.5, 6.7, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 10.3,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 6.61,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 32.87,
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
    "headlineNews": "Bottled up in win",
    "report": "Johnson caught only one of his five targets for a 14-yard gain and added a 17-yard run during Sunday's 20-13 win over Cleveland.",
    "analysis": "The rookie receiver might be in the doghouse after Sunday's game, as he stopped running and helped surrender what might have been a costly interception late in Sunday's contest. Johnson has been targeted plenty in recent weeks, but he's topped 30 yards receiving just once in his last five games. The elixir could be on tap in Week 14 against a weak Arizona pass defense. Johnson should get his opportunities whether or not JuJu Smith-Schuster (knee) continues to be sidelined, though Smith-Schuster's status for the game should still be monitored through the week.",
    "timestamp": "2019-12-01 04:45 PM",
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
    "week13": 3.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0, 8.4, 2.7, 4.4, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2, 7.8, 12.4, 7.5, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 10.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 30,
    "avg_fp2": 6.34,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.05,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Another quiet game",
    "report": "Thomas (hamstring) caught three of five targets for 23 yards in Sunday's 22-6 loss to the Bengals.",
    "analysis": "Thomas continues to play through injuries, but he's lacked explosiveness in recent games, failing to top 50 yards in any of the past three. Even with a juicy matchup against the Dolphins on tap in Week 14, you're likely better off looking elsewhere at the wide receiver position outside of deeper formats.",
    "timestamp": "2019-12-01 06:21 PM",
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
    "week13": 3.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8, 2.9, 11.4, 6.4, 3.2, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.6, 8.0, 6.6, 6.8, 5.5, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 10.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 11,
    "avg_fp2": 14.09,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.28,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Second straight underwhelming week",
    "report": "Chark brought in two of five targets for 47 yards in the Jaguars' 28-11 loss to the Buccaneers on Sunday.",
    "analysis": "Chark did notch a 30-yard grab that was the second longest of the day for the Jaguars, but he otherwise was a bit player in an air attack that went through its fair share of struggles in a premium matchup Sunday. He's now been under 50 receiving yards in three of the past four games after a strong start to the season, but he'll look to put together his fourth 100-yard effort of the campaign at the expense of the tough Chargers secondary Week 14.",
    "timestamp": "2019-12-01 02:44 PM",
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
    "week13": 5.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9, 5.2, 'BYE', 26.4, 8.3, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.9, 'BYE', 8.6, 14.7, 11.2, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 10.0,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 14.21,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.13,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Productive with third-string QB",
    "report": "Golladay caught four of five targets for 158 yards and a touchdown during Thursday's 24-20 loss to Chicago.",
    "analysis": "One can be forgiven for considering benching Golladay given Detroit's murky quarterback situation, as few expected third-string quarterback David Blough to play as well as he did Thursday. After all, the majority of Golladay's production came on a 75-yard pass during the first drive of the game, and Golladay couldn't have been any more wide open than he was on that particular play. We'll simply need a larger sample size to understand if the Blough-to-Golladay connection is legit. To that end, next week's matchup with the declining Xavier Rhodes and the rest of the Vikings defense will present another good test, though it's possible Matthew Stafford (back) could return for that game, which would be good news for Golladay investors.",
    "timestamp": "2019-11-28 03:36 PM",
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
    "week13": 23.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2, 13.2, 3.9, 8.1, 23.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 13.7, 13.5, 9.5, 14.1, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 9.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 22,
    "avg_fp2": 9.28,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.69,
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
    "headlineNews": "Leading receiver in loss",
    "report": "Fitzgerald caught six of seven targets for 56 yards in Sunday's 34-7 loss to the Rams.",
    "analysis": "The veteran receiver led the team in catches and yards on a day when the entire Cards offense struggled. It's only the second time in the last six games Fitzgerald has hauled in more than 50 yards, a decline largely due to lower volume -- he's averaged only 5.2 targets a game over that stretch, a far cry from the double-digit passes he was seeing to begin the year. That trend doesn't figure to reverse itself in Week 14 against a stingy Steelers defense.",
    "timestamp": "2019-12-01 06:08 PM",
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
    "week13": 8.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8, 11.1, 10.2, 'BYE', 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.5, 7.9, 'BYE', 9.9, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 9.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 17,
    "avg_fp2": 12.95,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 26.34,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Targeted 11 times in loss",
    "report": "Landry caught six of 11 targets for 76 yards during Sunday's 20-13 loss to Pittsburgh.",
    "analysis": "Landry came up big during Cleveland's game-opening field goal drive, snagging an early 19-yard pass and then converting a 3rd-and-long for a gain of 15 yards. He was relatively quiet after that, as the Steelers stifled Cleveland's offense. Landry had come into Sunday with five touchdowns in his previous four games and has been the most consistent of Cleveland's bevy of weapons. Week 14 brings a matchup against the one-win Bengals with Cleveland in must-win mode if the Browns hope to keep playoff dreams alive.",
    "timestamp": "2019-12-01 03:41 PM",
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
    "week13": 10.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1, 20.2, 12.3, 31.8, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 8.5, 9.0, 12.0, 11.0, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 9.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 12.37,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.11,
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
    "headlineNews": "Out for Week 13",
    "report": "Tate (concussion) won't play in Sunday's game against Green Bay, Jordan Raanan of ESPN.com reports.",
    "analysis": "Tate was concussed in the process of making a 23-yard touchdown catch during the fourth quarter of last week's 19-14 loss to the Bears. He was unable to practice Wednesday through Friday, leaving Sterling Shepard and Darius Slayton as the top options at wide receiver, while Cody Latimer is expected to handle the No. 3 role. Tight ends Evan Engram (foot) and Rhett Ellison (concussion) also have been ruled out for Week 13.",
    "timestamp": "2019-11-29 09:10 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5, 8.8, 21.5, 'BYE', 10.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 10.8, 11.5, 'BYE', 10.0, 'DNP', 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 9.5,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 12.45,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.24,
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
    "headlineNews": "Steps up in Jones' absence",
    "report": "Ridley corralled eight of 10 targets for 91 receiving yards during Thursday's 26-18 loss to New Orleans.",
    "analysis": "The second-year wideout has been electrifying over Atlanta's past three games, compiling 22 receptions for 319 yards and two touchdowns against the Panthers, Buccaneers and Saints. Mohamed Sanu's trade to New England and Austin Hooper's injury (knee-MCL) have led to an uptick in offensive opportunity for Ridley, but in Julio Jones' absence (shoulder) Thanksgiving night, the 24-year-old emerged as Atlanta's No. 1 option in the team's passing game. The former Crimson Tide standout didn't disappoint, leading both sides in targets, receptions and receiving yards. Ridley remains a strong play in Week 14, taking on a Panthers defense against which he amassed eight catches, 141 yards and a touchdown Nov. 17.",
    "timestamp": "2019-11-28 09:02 PM",
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
    "week13": 13.1,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 20.5, 1.1, 4.7, 17.3, 12.8, 5.0, 11.0, 'BYE', 6.2, 24.3, 19.0, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 12.9, 8.5, 9.7, 9.4, 10.7, 13.2, 8.4, 'BYE', 9.4, 11.1, 10.4, 11.4, 9.5]
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
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 6,
    "avg_fp2": 8.82,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.88,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Heroic effort not enough",
    "report": "Williams caught five of his seven targets for 117 yards in Sunday's 23-20 loss to the Broncos.",
    "analysis": "While Williams' season-long battle with the end zone continues to get the best of the 25-year-old, it's clear the 2017 first-round pick has easily emerged as the Chargers' premiere deep threat. A 52-yard reception in the first half ultimately set up the team's first offensive touchdown, and it arguably should have been Williams' first jaunt in the end zone as well if not for a woefully under-thrown ball from quarterback Philip Rivers that forced the wide open receiver to derail his momentum on the deep pass. Williams later made a Herculean effort on a 4th-and-11 with just under two minutes remaining in the game, high-pointing the deep pass with one hand to bring in the ball, setting the stage for what appeared to be an overtime-forcing field goal. At some point or another, Williams, who easily surpassed his career high in total receiving yards Sunday, is due for some positive touchdown regression. However, it remains to be seen who will be throwing him the ball, as Ian Rapoport of NFL.com reported earlier Sunday that the Chargers may look to bench Philip Rivers if he continues to struggle.",
    "timestamp": "2019-12-01 04:56 PM",
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
    "week13": 14.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4, 12.8, 6.5, 8.6, 'BYE', 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.4, 11.3, 6.7, 'BYE', 9.2, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 8.9,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 13.33,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 31.82,
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
    "headlineNews": "Scores for second straight game",
    "report": "Moore caught six of 12 targets for 75 yards and a touchdown during Sunday's 29-21 loss to the Redskins.",
    "analysis": "Moore led the team in receiving yardage while trailing only Christian McCaffrey in targets. He scored a 13-yard touchdown in the first quarter, giving him three in the last two games after recording just one beforehand. Moore now has at least 70 receiving yards in seven of the last eight games and is averaging 103.4 yards per game over the last five. He'll look to keep it up in a favorable matchup against the Falcons next Sunday.",
    "timestamp": "2019-12-01 03:15 PM",
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
    "week13": 16.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3, 13.6, 16.5, 13.5, 28.4, 16.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.7, 10.3, 15.6, 8.4, 10.4, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917067.png",
    "name": "Bisi Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Minnesota Vikings",
    "projected": 8.8,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 5.23,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.15,
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
    "headlineNews": "Just one reception Monday",
    "report": "Johnson had one reception for one yard across three targets in Monday's 37-30 loss to Seattle.",
    "analysis": "A week after leading the Vikings in targets while Adam Thielen (hamstring) was out, Johnson wasn't as big a factor in the passing game, despite starting opposite Stefon Diggs. The rookie could have a larger role Week 14 against Detroit if Thielen's injury keeps him sidelined for a fourth straight game.",
    "timestamp": "2019-12-04 10:40 AM",
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
    "week13": 0.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0, 3.7, 6.9, 3.5, 6.5, 'BYE', 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.4, 2.8, 6.4, 6.2, 'BYE', 6.5, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 8.6,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 12.32,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 31.38,
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
    "headlineNews": "Rampant production in Week 13 win",
    "report": "Parker corralled seven of 10 targets for 159 yards and two touchdowns during Sunday's 37-31 win against the Eagles.",
    "analysis": "Parker had a monumental impact on the outcome of Sunday's game, as his 43-yard touchdown catch from Ryan Fitzpatrick on a fourth-and-4 late in the first quarter completely shifted the tenor of the contest. He flashed later with a 17-yard TD reception to get Miami within one possession midway through the third quarter and came down with two catches for 42 yards on the Dolphins' go-ahead drive in the final five minutes of regulation. The 26-year-old wideout now has 10-plus targets in four straight games heading into a Week 14 matchup against a Jets defense that entered Sunday as the NFL's 19th-ranked pass defense.",
    "timestamp": "2019-12-01 02:26 PM",
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
    "week13": 31.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7, 9.4, 17.0, 12.1, 31.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.8, 7.7, 7.8, 6.1, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 8.4,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 4.84,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.87,
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
    "headlineNews": "Burns Giants early",
    "report": "Lazard caught all three of his targets for 103 yards and a touchdown during Sunday's 31-13 win over the Giants.",
    "analysis": "The Packers obviously saw something they liked with Lazard's early matchups. The rookie made a diving 43-yard grab on the Packers' opening drive and then came back with a 37-yard touchdown on the team's second go-around for his first touchdown since Week 6. The big-bodied receiver now has five catches of 20 or more yards this season despite just 22 total receptions. Next up is a Washington defense that, despite some warts, has held opponents to just 10.9 yards per catch, ninth best in the league.",
    "timestamp": "2019-12-01 02:57 PM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 14.5,
    "week07": 5.7,
    "week08": 6.7,
    "week09": 5.9,
    "week10": 4.2,
    "week11": "BYE",
    "week12": 3.3,
    "week13": 17.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 14.5, 5.7, 6.7, 5.9, 4.2, 'BYE', 3.3, 17.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 5.7, 1.5, 0.3, 0.9, 1.6, 8.0, 3.1, 3.6, 4.3, 'BYE', 3.5, 3.8, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 8.3,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 8.71,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 30.51,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Limited impact in loss",
    "report": "Sanders (ribs) caught four of six targets for 41 yards in Sunday's 20-17 loss to Baltimore.",
    "analysis": "Sanders led the team in targets and catches, as quarterback Jimmy Garoppolo only threw for 165 yards. Kendrick Bourne led the team with 42 receiving yards, with Sanders and Deebo Samuel both one yard short of that total, but it was Samuel who scored the team's lone receiving touchdown. Sanders has failed to eclipse 50 yards in a game since Week 9, but he'll likely see his number called more frequently out of the slot against the Saints in Week 14.",
    "timestamp": "2019-12-01 02:32 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9, 14.9, 8.1, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115913.png",
    "name": "Geronimo Allison",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 8.2,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 4.06,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.87,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Minimal output again",
    "report": "Allison was targeted three times and caught two passes for 20 yards in Sunday's victory over the Giants.",
    "analysis": "Allison finished second among Packers wide receivers in snaps for the third game in a row, and both of his catches picked up first downs in key spots, but his final output still did not help fantasy players all that much. He's averaging just 2.2 receptions for 12.6 yards over his last five contests, which will not inspire much confidence in him from those weighing options at the wide receiver position Week 14.",
    "timestamp": "2019-12-02 10:06 AM",
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
    "week13": 3.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.5, 0.4, 13.4, 3.8, 5.5, 5.3, 1.2, 3.1, 2.1, 'BYE', 2.4, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 7.6, 2.9, 2.0, 6.1, 6.2, 5.9, 4.7, 4.3, 5.2, 'BYE', 3.9, 5.3, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 8.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 11,
    "avg_fp2": 8.63,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.28,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Misses practice",
    "report": "Westbrook will miss Wednesday's practice for personal reasons, Michael DiRocco of ESPN.com reports.",
    "analysis": "A return to practice Thursday or Friday would put Westbrook on track to play in Sunday's game against the Chargers. He's seen at least six targets in each of three games since he returned from a neck/shoulder injury, catching 17 passes for 161 yards and a touchdown over that span. The Jaguars will turn back to Gardner Minshew as their starting quarterback for Week 14.",
    "timestamp": "2019-12-04 07:45 AM",
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
    "week13": 16.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0, 'DNP', 'BYE', 5.2, 10.9, 16.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 'DNP', 'BYE', 6.6, 6.3, 8.1, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 8.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 30,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.05,
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
    "headlineNews": "Little to show for nine targets",
    "report": "Crowder caught just two of nine targets for eight yards in Sunday's 22-6 loss to the Bengals.",
    "analysis": "Crowder and quarterback Sam Darnold couldn't get on the same page in this one, as the slot receiver failed to crack double-digit receiving yards for the first time as a member of the Jets. His nine targets suggest that Crowder remains an integral part of the offense, and he'll have a nice opportunity to get back on track against the beatable Dolphins secondary in Week 14.",
    "timestamp": "2019-12-01 05:46 PM",
    "week01": 17.3,
    "week02": 6.0,
    "week03": 3.5,
    "week04": "BYE",
    "week05": 2.0,
    "week06": 12.8,
    "week07": 4.6,
    "week08": 3.9,
    "week09": 18.3,
    "week10": 16.6,
    "week11": 16.1,
    "week12": 2.8,
    "week13": 1.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 6.0, 3.5, 'BYE', 2.0, 12.8, 4.6, 3.9, 18.3, 16.6, 16.1, 2.8, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.9, 6.6, 'BYE', 5.9, 4.5, 5.1, 7.2, 7.5, 6.2, 4.6, 5.8, 4.0, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 8.0,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 23,
    "avg_fp2": 12.85,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 27.69,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Tosses surprising TD pass",
    "report": "Brown caught three of four targets for 26 yards and completed his only pass attempt for a 28-yard touchdown to Devin Singletary in Thursday's 26-15 win over the Cowboys.",
    "analysis": "The wide receiver had never attempted a pass in a game before, dating back to his college days, but Brown threw a perfect spiral to a wide-open Singletary after taking a pitch on a fake reverse. It's a little concerning that Brown has seen only eight targets over the last two games combined, but he's still Josh Allen's No. 1 option in the passing game, and game flow may have played a factor in this one as the Bills led most of the way. Expect Brown to be more involved as a receiver in next week's clash with the Ravens, his former team.",
    "timestamp": "2019-11-28 05:19 PM",
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
    "week13": 9.22,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6, 10.2, 30.2, 10.9, 9.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 9.2, 6.7, 10.8, 11.7, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 7.8,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 12.21,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.15,
    "fanduelSalary": "$11000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Just misses big day against Bills",
    "report": "Gallup caught three of six targets for 63 yards in Thursday's 26-15 loss to the Bills.",
    "analysis": "While his final numbers were merely OK, Gallup could have had a much better line after he was initially ruled to have caught a fourth-quarter touchdown as the Cowboys tried to mount a late comeback. Upon review, however, the second-year receiver was ruled not to have gotten his second foot down in bounds. Gallup has maintained a solid PPR floor by catching at least three passes for more than 50 yards in four straight games, but he'll look to make a bigger impact next week in Chicago.",
    "timestamp": "2019-11-28 05:53 PM",
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
    "week13": 7.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3, 15.6, 19.3, 7.5, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.8, 6.7, 6.7, 7.1, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121410.png",
    "name": "Parris Campbell",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 7.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 26,
    "avg_fp2": 4.4,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 38.94,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Practicing Wednesday",
    "report": "Campbell (hand) will practice Wednesday, George Bremer of The Anderson Herald Bulletin reports.",
    "analysis": "Campbell logged a trio of limited practices last week before being ruled out ahead of the Colts' loss to the Titans, so he could realistically have a similar cap on his reps Wednesday. With T.Y. Hilton (calf) also withheld from practice, the Colts' healthy receiving corps currently consists of Zach Pascal, Marcus Johnson, Ashton Dulin and Chad Williams. If the rookie second-round pick manages to return to full health in time for Sunday's game against the Buccaneers, he stands to benefit from both a favorable matchup and an increased target share.",
    "timestamp": "2019-12-04 10:52 AM",
    "week01": 1.3,
    "week02": 7.7,
    "week03": 3.9,
    "week04": 3.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 10.5,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 7.7, 3.9, 3.0, 'DNP', 'BYE', 'DNP', 0.0, 10.5, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.3, 3.0, 3.2, 'DNP', 'BYE', 'DNP', 4.5, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 7.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 9.92,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.11,
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
    "headlineNews": "Nabs six passes",
    "report": "Slayton caught six of nine passes for 44 yards during Sunday's 31-13 loss to Green Bay.",
    "analysis": "Slayton, getting the start for Golden Tate (concussion), enjoyed his third consecutive game with at least seven targets. He and rookie Daniel Jones seem to have a strong rapport, and Jones looked the fellow rookie's way early in the first quarter to convert a key fourth down. Slayton had seven targets in Week 12 even with the Giants healthy at receiver, so he should get some opportunities irrespective of Tate's health in Week 14 against the Eagles.",
    "timestamp": "2019-12-01 03:21 PM",
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
    "week13": 7.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 9.7, 2.3, 14.2, 4.7, 3.8, 18.0, 1.1, 29.34, 'BYE', 8.7, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.6, 8.3, 6.0, 7.3, 9.9, 9.6, 5.4, 10.4, 'BYE', 9.1, 12.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 7.5,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 7.25,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.21,
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
    "headlineNews": "Underwhelming season continues",
    "report": "Cooks caught both of his targets for 24 yards during Sunday's 34-7 win over Arizona.",
    "analysis": "The sixth-year receiver has been one of the biggest fantasy disappointments of the season with just 31 receptions for 458 yards and a lone touchdown through 10 games. Additionally, Cooks is likely to dip below 1,000 receiving yards for the first time since his rookie campaign in 2014, and Sunday's poor showing is even more concerning because the Rams scored 34 points against the Cards. Owners in dynasty/keeper formats shouldn't ignore the potential impact Cooks' concussions have had on his play, though, and he's definitely a bounce-back candidate heading into 2020 -- especially if his numbers improve over the final weeks of the season. In yearly settings, it's hard to rely on the big-play threat at this stage of the game.",
    "timestamp": "2019-12-02 11:37 AM",
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
    "week13": 3.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 15.1, 16.0, 10.1, 6.1, 4.7, 7.9, 0.0, 'BYE', 'DNP', 'DNP', 4.3, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 10.9, 6.6, 9.1, 11.6, 8.6, 8.1, 8.8, 'BYE', 'DNP', 'DNP', 7.6, 8.8, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 7.4,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 6.77,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 34.88,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Hauls in 24-yard pass",
    "report": "Agholor caught three of six targets for 41 yards during Sunday's 37-31 loss to the Dolphins.",
    "analysis": "The 26-year-old wideout's face was stricken with agony after a potential touchdown opportunity slipped past his fingertips, as a Carson Wentz pass on 2nd-and-goal late in the second quarter sailed just high of Agholor's outstretched hands. J.J. Arcega-Whiteside hauled in a 15-yard TD on the subsequent play and Agholor caught a successful two-point conversion attempt, but fantasy GMs can't help wonder what might have been. Another scoreless afternoon now gives Agholor eight straight outings without a TD as the Eagles prepare for a Week 14 matchup against a Giants defense that ranks better than only Tampa Bay in terms of receiving yards allowed to opposing WRs this season (2,350).",
    "timestamp": "2019-12-01 04:38 PM",
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
    "week13": 7.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 20.7, 19.0, 0.0, 2.5, 6.2, 3.4, 3.4, 3.6, 'BYE', 6.0, 'DNP', 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 2.7, 9.8, 4.8, 7.0, 2.8, 6.5, 4.6, 3.3, 'BYE', 6.3, 'DNP', 8.9, 7.4]
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
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 25,
    "avg_fp2": 5.42,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.39,
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
    "headlineNews": "Held to 12 yards",
    "report": "Snead caught one of two targets for 12 yards in Sunday's 20-17 win over San Francisco.",
    "analysis": "Snead actually led all Ravens wide receivers in yardage, with only tight ends Mark Andrews and Hayden Hurst surpassing Snead's meager total. Another tough defense looms in Buffalo in Week 14, so Snead will be tough to trust in Baltimore's run-first attack.",
    "timestamp": "2019-12-01 02:49 PM",
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
    "week13": 1.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2, 2.3, 14.4, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.2, 5.6, 7.4, 4.9, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.8,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.25,
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
    "headlineNews": "Held catchless in Week 13",
    "report": "Watkins failed to reel in any of his three targets during Sunday's game against the Raiders.",
    "analysis": "Quarterback Patrick Mahomes completed just 15 passes on the day overall, with 10 of those going to Travis Kelce and Tyreek Hill, so Watkins' minor production isn't a huge shock. What's more concerning is the fact that Watkins has seen a combined six targets between the last two contests. Things don't get any easier next week with New England on the schedule.",
    "timestamp": "2019-12-03 08:44 AM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.5, 6.4, 'BYE', 7.9, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050487.png",
    "name": "Anthony Miller",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 6.8,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 5.48,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 23.9,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Career-best yardage tally in win",
    "report": "Miller secured nine of 13 targets for 140 yards in the Bears' 24-20 win over the Lions on Thursday.",
    "analysis": "The second-year wideout paced the Bears in receptions, targets and receiving yardage, building on what had already been a solid two-game surge in Weeks 11 and 12, when he'd brought in 12 of 20 targets for 131 yards. Miller's final catch of the day was the most critical, as he brought in a beautifully thrown ball from Mitchell Trubisky down the right sideline for a 32-yard grab on third-and-5, putting the ball at the Lions' three-yard line. With 33 targets over his last three contests, Miller is logging the type of volume that has exponentially raised his profile across all formats heading into a Week 14 Thursday night matchup versus the Cowboys.",
    "timestamp": "2019-11-28 01:19 PM",
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
    "week13": 18.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.7, 2.0, 2.1, 7.2, 'BYE', 6.8, 8.2, 0.0, 1.2, 8.4, 10.7, 18.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 5.5, 5.1, 4.1, 3.3, 'BYE', 2.2, 6.9, 5.7, 4.1, 3.0, 5.1, 6.0, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 6.6,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 13.13,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.13,
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
    "headlineNews": "Catches another touchdown",
    "report": "Jones caught three of six targets for 40 yards and one touchdown during Thursday's 24-20 loss to the Bears.",
    "analysis": "News that Detroit would be turning to its third-string quarterback understandably made it hard to trust Jones against a tough Chicago team, but the veteran wideout put up a respectable fantasy total nonetheless thanks to his outstanding red-zone prowess. In fact, Thursday's touchdown marked Jones ninth score in 12 games this season and he only needs one more to match his career high of 10 touchdowns from the 2013 campaign with Cincinnati. Combined with his upside to rack up triple-digit receiving yards like he did in Week 3 and Week 9, Jones has been one of the most underrated fantasy assets in 2019 and up next is a Vikings team that Jones obliterated for 10 catches, 93 yards and four touchdowns back in Week 7.",
    "timestamp": "2019-11-28 03:57 PM",
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
    "week13": 11.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 6.8, 19.1, 9.2, 'BYE', 2.7, 38.3, 4.2, 22.6, 10.2, 17.9, 7.1, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.1, 11.6, 6.6, 'BYE', 8.0, 7.2, 7.4, 7.0, 9.4, 9.3, 8.1, 8.7, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059722.png",
    "name": "Zay Jones",
    "depthchart": "Backup: WR-2",
    "team": "Oakland Raiders",
    "projected": 6.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 2.49,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.8,
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
    "headlineNews": "Held to two catches in loss",
    "report": "Jones caught two of three targets for 14 yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "Jones saw no more than three targets for the fourth consecutive contest, despite what should have been a pass-happy game flow for the Raiders given they fell behind 21-0 heading into the half. Jones' snap count -- he saw action on 70 percent of the offensive plays in Week 13 -- figures to remain favorable in Week 14 against the Titans with Hunter Renfrow likely still sidelined by a rib injury, but the former hasn't flashed much upside to this point.",
    "timestamp": "2019-12-02 05:30 PM",
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
    "week13": 2.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 4.3, 1.4, 0.0, 'BYE', 'DNP', 3.7, 3.9, 1.5, 4.0, 1.5, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.7, 7.2, 4.8, 6.3, 'BYE', 'DNP', 8.6, 3.6, 2.1, 3.3, 5.1, 6.1, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120980.png",
    "name": "Keelan Doss",
    "depthchart": "Reserve: WR-3",
    "team": "Oakland Raiders",
    "projected": 6.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 2.08,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.8,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Healthy scratch Sunday",
    "report": "Doss (coach's decision) is inactive for Sunday's game against the Bengals.",
    "analysis": "Doss is a healthy scratch for the fourth straight game, as the Raiders will roll out five wide receivers. The 23-year-old wideout hauled in six of eight targets for 79 yards in five outings this year.",
    "timestamp": "2019-11-17 12:07 PM",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.0,
    "week04": 1.9,
    "week05": 2.1,
    "week06": "BYE",
    "week07": 6.9,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 1.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.0, 1.9, 2.1, 'BYE', 6.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.3, -0.1, 1.8, -0.1, 'BYE', 0.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.7, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 6.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 9.87,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.11,
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
    "headlineNews": "Scores in loss",
    "report": "Shepard caught three of seven passes for 40 yards and a touchdown during Sunday's 31-13 loss to Green Bay.",
    "analysis": "Shepard tied the game up late in the first quarter when he corralled an 18-yard lollipop from Daniel Jones near the front pylon for his first touchdown since Week 3. Injuries and overall offensive struggles have kept Shepard down for much of this season, but he's been prolific when in the game, with at least seven targets in all six of his starts this season. He's a strong fit for Jones' quick-strike style, and the two's rapport should improve with time. Next up is a Week 14 Monday night matchup against a struggling Eagles team.",
    "timestamp": "2019-12-01 03:10 PM",
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
    "week13": 11.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 0.0, 23.6, 13.4, 7.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.2, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 11.6, 8.2, 14.4, 10.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.3, 8.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15705.png",
    "name": "Josh Gordon",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 6.4,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 5.72,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 27.27,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Catches one pass in win",
    "report": "Gordon caught his only target for a 10-yard gain during Monday's 37-30 win over Minnesota.",
    "analysis": "Gordon broke over the middle for a third-down conversion during Seattle's second drive of the game Monday to set up a touchdown, but he wasn't targeted again. He hasn't shown a spark yet with four catches for 47 yards in three games with Seattle, keeping him off the fantasy radar. Sunday offers a tough matchup against the division-rival Rams and the league's 10th-ranked pass defense.",
    "timestamp": "2019-12-03 06:50 PM",
    "week01": 14.8,
    "week02": 2.9,
    "week03": 11.4,
    "week04": 6.1,
    "week05": 8.4,
    "week06": 1.2,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 3.7,
    "week11": "BYE",
    "week12": 1.5,
    "week13": 1.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.8, 2.9, 11.4, 6.1, 8.4, 1.2, 'DNP', 'DNP', 'DNP', 3.7, 'BYE', 1.5, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 8.9, 13.4, 7.3, 9.4, 12.0, 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 4.7, 4.4, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 6.2,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 9.23,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.15,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Set to go Thursday",
    "report": "Cobb (illness) doesn't have a designation for Thursday's game at Chicago, Calvin Watkins of The Dallas Morning News reports.",
    "analysis": "Cobb's practice reps were impacted by an illness this week, but he nonetheless increased his workload by the day, culminating in full participation at Wednesday's walk-through. Consequently, he's poised to go Thursday against a Bears defense that has given up 7.5 yards per target and seven touchdowns to wide receivers in 12 contests this season.",
    "timestamp": "2019-12-04 11:20 AM",
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
    "week13": 6.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5, 19.6, 19.5, 10.6, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.6, 5.8, 5.7, 7.0, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921564.png",
    "name": "Auden Tate",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 6.1,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 7.22,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 26.45,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Leading receiver in win",
    "report": "Tate caught four of seven targets for a team-high 66 yards in Sunday's 22-6 win over the Jets.",
    "analysis": "Tate has eclipsed 60 yards in each of the last four games with Andy Dalton under center, with three less effective games quarterbacked by Ryan Finley interrupting that streak. Dalton is expected to remain Cincinnati's starting quarterback for the remainder of the season after leading the team to its first win of the season in this one, so Tate could be a sneaky-good pickup against the Browns in Week 14 and beyond if he's sitting on the waiver wire., especially while A.J. Green is still on the shelf.",
    "timestamp": "2019-12-01 03:06 PM",
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
    "week13": 8.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 9.8, 7.0, 10.1, 11.6, 8.0, 9.0, 'BYE', 5.1, 7.6, 1.5, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.8, 2.8, 5.6, 7.7, 6.9, 7.4, 6.1, 'BYE', 11.4, 9.3, 6.3, 4.3, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 6.0,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 8.62,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.29,
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
    "headlineNews": "Disappoints after big performance",
    "report": "Brown hauled in three of his four targets for 45 yards in the team's Week 13 win over the Colts.",
    "analysis": "Brown tied for the team lead with four targets, though Ryan Tannehill attempted only 22 passes in the contest. As a result, in spite of efficient work, Brown put up a disappointing stat line. Even so, he provided big plays for the offense, with all of his catches going for 13 or more yards. Despite inconsistent usage and quarterback play early in the season, Brown has flashed big-play potential by averaging 18.4 yards per reception to go along with four touchdowns through 12 games. Though volume may be hard to come by, Brown will be in another positive matchup in Week 14 as the Titans take on the Raiders.",
    "timestamp": "2019-12-01 09:55 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 10.2, 7.4, 'BYE', 8.3, 16.4, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.0,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 3.79,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.03,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Surprise leader of receiving corps",
    "report": "Perriman brought in five of six targets for 87 yards in the Buccaneers' 28-11 win over the Jaguars on Sunday.",
    "analysis": "In a game that unfolded quite a bit differently than had been envisioned, Perriman fittingly led a pass-catching corps normally spearheaded by either Mike Evans or Chris Godwin. The receptions, receiving yardage and targets were all season highs for the speedster, who now has recorded at least one reception in five straight games. That's actually a significant improvement over Perriman's first five contests, during which he posted just three receptions (on 16 targets) for 16 yards. Perriman will look to build on Sunday's unexpected numbers versus the Colts in Week 14.",
    "timestamp": "2019-12-01 08:47 PM",
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
    "week13": 11.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 0.0, 2.4, 0.0, 'DNP', 'DNP', 'BYE', 0.0, 12.2, 2.7, 2.5, 4.9, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.6, 7.8, 1.9, 'DNP', 'DNP', 'BYE', 2.9, 6.4, 5.1, 3.3, 3.1, 5.0, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122449.png",
    "name": "James Washington",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 6.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 8.07,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 32.87,
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
    "headlineNews": "Reels in touchdown",
    "report": "Washington caught all four of his targets for 111 yards and a touchdown during Sunday's 20-13 win over the Browns.",
    "analysis": "Washington made the most of JuJu Smith-Schuster's (knee) absence, nabbing a 30-yard touchdown just before halftime and then coming down with a 44-yard gain on the opening drive of the second half to set up Pittsburgh's only other touchdown on the day. Washington has been red hot despite drawing attention with Smith-Schuster out and mediocre quarterback play. He's topped 90 yards and scored in three of his last four games. He boasts an impressive 19.3 yards-per-catch average and faces off Sunday against an Arizona defense that has been burned deep all season, surrendering 4.9 passing plays of at least 20 yards per game this season, including nine in Week 13 against the Rams.",
    "timestamp": "2019-12-01 04:40 PM",
    "week01": 6.1,
    "week02": 3.3,
    "week03": 2.4,
    "week04": 0.0,
    "week05": 6.7,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 2.6,
    "week09": 8.9,
    "week10": 16.0,
    "week11": 6.4,
    "week12": 17.3,
    "week13": 19.1,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 3.3, 2.4, 0.0, 6.7, 'DNP', 'BYE', 2.6, 8.9, 16.0, 6.4, 17.3, 19.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.4, 6.3, 4.5, 7.0, 7.0, 'DNP', 'BYE', 5.7, 4.2, 5.0, 1.6, 7.7, 4.2, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 5.8,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 10.02,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 31.82,
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
    "headlineNews": "Finds end zone vs. Redskins",
    "report": "Samuel caught four of seven targets for 65 yards and a touchdown during Sunday's 29-21 loss to the Redskins.",
    "analysis": "Samuel finished behind only D.J. Moore in receiving yards while recording his third-best output of the season in that category. He scored a four-yard touchdown in the first quarter, giving him four trips to the end zone in the last seven games. Samuel also ripped off a 33-yard gain, which was his fourth reception of at least 30 yards this season. He will look to build on this successful outing next Sunday against the Packers.",
    "timestamp": "2019-12-01 04:06 PM",
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
    "week13": 14.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9, 11.5, 4.5, 5.4, 14.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 10.0, 12.1, 8.0, 9.1, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 5.7,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 12,
    "avg_fp2": 10.98,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 23.81,
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
    "headlineNews": "Limited impact in Week 13 win",
    "report": "Fuller caught one of two targets for eight yards in Sunday's 28-22 win over the Patriots.",
    "analysis": "Fuller battled a hamstring injury during the week, but that did not appear to be the reason for his suppressed usage. He played a relatively full game (42 snaps, 75 percent) but was not heavily involved, although he did have a long touchdown catch overturned on review. It looks like the Patriots didn't want Fuller or DeAndre Hopkins (64 yards) to beat them, which created more opportunities for Duke Johnson (five catches, 54 yards, TD) and Kenny Stills (three catches, 61 yards, TD).",
    "timestamp": "2019-12-02 05:56 AM",
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
    "week13": 1.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 6.0, 7.6, 3.8, 46.7, 6.9, 1.1, 'DNP', 'DNP', 'BYE', 'DNP', 17.5, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.9, 5.6, 7.4, 9.4, 6.7, 10.0, 'DNP', 'DNP', 'BYE', 'DNP', 10.0, 5.4, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 5.7,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 9,
    "avg_fp2": 4.67,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.39,
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
    "headlineNews": "Catches two passes in win",
    "report": "Smith caught both of his targets for 14 yards in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "As usual, Smith was a non-factor Thursday, seeing just two targets on the night. The game brings his season receiving line to 9/115/2, and Smith can't be trusted in fantasy lineups.",
    "timestamp": "2019-11-28 09:45 PM",
    "week01": 9.6,
    "week02": 6.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 1.8,
    "week11": 0.0,
    "week12": 7.8,
    "week13": 2.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.8, 0.0, 7.8, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.0, 9.9, 5.7, 3.7, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.6,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 5.17,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 30.51,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Holds onto No. 3 receiver role",
    "report": "Bourne caught all three of his targets for 42 yards in Sunday's 20-17 loss to the Ravens.",
    "analysis": "The 24-year-old's 42 yards actually paced all San Francisco receivers on a day when the rushing attack led the charge. Deebo Samuel has emerged as the starter opposite deadline acquisition Emmanuel Sanders, but Bourne has surpassed both Marquise Goodwin and Dante Pettis (knee) as the No. 3 receiver on the depth chart. Bourne is still a touchdown-dependent fantasy asset however, as he has surpassed 50 yards receiving just once this season (three catches for 69 yards back in Week 7). He should be considered a deep-league option at best against the Saints on Sunday.",
    "timestamp": "2019-12-02 04:52 AM",
    "week01": 1.4,
    "week02": 0.9,
    "week03": 2.7,
    "week04": "BYE",
    "week05": 3.4,
    "week06": 1.6,
    "week07": 8.4,
    "week08": 1.7,
    "week09": 7.2,
    "week10": 14.2,
    "week11": 11.1,
    "week12": 3.7,
    "week13": 5.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.9, 2.7, 'BYE', 3.4, 1.6, 8.4, 1.7, 7.2, 14.2, 11.1, 3.7, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 2.9, 4.0, 'BYE', 5.0, 3.0, 2.9, 1.9, 4.2, 3.9, 3.1, 7.2, 4.5, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3057987.png",
    "name": "DaeSean Hamilton",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 5.5,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 1.52,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 29.82,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Has big drop in win",
    "report": "Hamilton caught two of three targets for 12 yards during Sunday's 23-20 win over the Chargers.",
    "analysis": "On his third quarterback of the season, Hamilton caught his first passes since Week 7 during Sunday's win, including a gritty catch over the middle to convert a first-quarter third down. That was all overshadowed late in the fourth quarter when, with the Broncos driving and the game tied, Hamilton ran a clear-out underneath and dropped the pass over the middle. Had he caught it, he would have had a path to the end zone for a 34-yard touchdown. Instead, the groans regarding the sophomore's performance this season continue. Hamilton has faded far behind fellow 2018 draftee Courtland Sutton and the recently healthy Tim Patrick. These next four games will be a WR3 tryout for 2020, and it starts with a matchup against Houston's 28th-ranked pass defense.",
    "timestamp": "2019-12-02 08:24 PM",
    "week01": 1.5,
    "week02": 2.5,
    "week03": 0.0,
    "week04": 7.2,
    "week05": 0.0,
    "week06": 3.5,
    "week07": 1.4,
    "week08": 0.0,
    "week09": 0.0,
    "week10": "BYE",
    "week11": 0.0,
    "week12": 0.0,
    "week13": 2.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.5, 2.5, 0.0, 7.2, 0.0, 3.5, 1.4, 0.0, 0.0, 'BYE', 0.0, 0.0, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 2.5, 4.4, 3.0, 2.9, 2.9, 4.7, 7.4, 4.3, 'BYE', 7.0, 1.9, -0.1, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17177.png",
    "name": "Allen Hurns",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 5.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 4.71,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 31.38,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Minor impact vs. Eagles",
    "report": "Hurns caught three of four targets for 33 yards during Sunday's 37-31 win over the Eagles.",
    "analysis": "The 28-year-old continues to see roughly equal targets to Albert Wilson as the Nos. 2/3 receivers behind DeVante Parker, although both saw lower target volume than tight end Mike Gesicki on Sunday. Though Hurns is operating in a starting role due to the lack of depth in Miami's banged-up receiver corps, he doesn't offer much upside aside from the occasional touchdown -- he has exceeded 50 yards in just two contests this season, and he's scored twice.",
    "timestamp": "2019-12-02 08:35 AM",
    "week01": 2.7,
    "week02": 1.8,
    "week03": 1.1,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 2.6,
    "week07": 6.8,
    "week08": 7.7,
    "week09": 2.6,
    "week10": 4.2,
    "week11": 5.3,
    "week12": 12.2,
    "week13": 4.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 1.8, 1.1, 'DNP', 'BYE', 2.6, 6.8, 7.7, 2.6, 4.2, 5.3, 12.2, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 5.2, 2.0, 'DNP', 'BYE', 1.1, 1.7, 3.7, 4.7, 3.8, 5.2, 5.7, 2.8, 5.2]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 14.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 6,
    "avg_fp2": 11.28,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 8.75,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Posts complete dud",
    "report": "Henry was shut down in Sunday's 23-20 loss to the Broncos, recording just two receptions for 10 yards.",
    "analysis": "Mike Williams, Austin Ekeler and Keenan Allen accounted for nearly 90 percent of the team's total receiving yards, saddling Henry with easily his worst game of 2019. The dismal outing has to be disappointing for fantasy owners, but Henry has had just four games with 20 or less receiving yards since Week 4 of the 2017 season, so it's fair to assume the star tight end could be poised for a turnaround.",
    "timestamp": "2019-12-01 05:21 PM",
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9, 11.0, 11.9, 'BYE', 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 18.2, 15.1, 'BYE', 14.2, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 12.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 13,
    "avg_fp2": 7.05,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 9.19,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Another touchdown in loss",
    "report": "Rudolph secured four of six targets for 50 yards and a touchdown in the Vikings' 37-30 loss to the Seahawks on Monday.",
    "analysis": "With Adam Thielen (hamstring) sidelined Monday and Dalvin Cook exiting early with a shoulder injury, Rudolph tied for the team lead in receptions and also extended his scoring streak to four games with a memorable one-handed grab in the fourth quarter. The veteran tight end has come alive after a slow start to the season, notching multiple catches in seven consecutive contests. He'll look to keep both of his favorable streaks alive in Week 14 against the Lions.",
    "timestamp": "2019-12-02 09:33 PM",
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
    "week13": 13.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4, 15.2, 'BYE', 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 9.0, 5.2, 'BYE', 14.9, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 12.0,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 16,
    "avg_fp2": 11.52,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.68,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Held in check Sunday",
    "report": "Kittle (knee/ankle) caught two passes on four targets for 17 yards and lost three yards on his lone carry in Sunday's 20-17 loss to Baltimore.",
    "analysis": "Kittle saw his usage drop drastically following a six-catch, 129-yard showing in Week 12. The superstar tight end was asked to stay back and block more than usual against a Ravens defense that rushes the passer more than any other team in the league (blitz packages on 48.1 percent of plays this season). There was no report of a flare-up with Kittle's lower-body injuries, so his lack of usage in the passing game appeared to have been matchup-based. Look for him to get more involved in a crucial NFC showdown with the Saints in Week 14.",
    "timestamp": "2019-12-02 04:41 AM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 'DNP', 'DNP', 13.1, 11.0, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 5.31,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 17.64,
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
    "headlineNews": "Three catches in win",
    "report": "McDonald had three receptions for 21 yards in Pittsburgh's 20-13 win over Cleveland on Sunday.",
    "analysis": "This was yet another lackluster performance for McDonald, although he made the most of his limited opportunities. He now has four or fewer targets in seven games this season. Pittsburgh travels to Arizona in Week 14 and faces a defense that has yielded 13 touchdowns to opposing tight ends. McDonald could potentially take advantage, but he's scored only once in the past nine games and is a risky fantasy play.",
    "timestamp": "2019-12-01 06:51 PM",
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
    "week13": 3.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4, 11.5, 2.8, 4.8, 0.6, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 3.5, 7.1, 3.4, 9.2, 8.2, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 11.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 11.02,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.74,
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
    "headlineNews": "Big day in loss to Chiefs",
    "report": "Waller caught seven of nine targets for 100 yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "The tight end led the Raiders in catches, targets and yards, en route to his third 100-yard performance of the season. Waller has struggled to reach the end zone -- he hasn't scored a TD since Week 8 and had to watch Derek Carrier haul in Oakland's only score Sunday -- but otherwise, he's having a remarkable breakout campaign. Waller will look to post big numbers again in Week 14 against a Titans defense that just let Jack Doyle go off for a 6-73-1 line.",
    "timestamp": "2019-12-01 06:29 PM",
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
    "week13": 13.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2, 5.5, 10.1, 5.6, 13.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 9.4, 22.3, 13.5, 10.3, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 11.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 10.93,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.03,
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
    "headlineNews": "Expects to play Monday",
    "report": "Engram (foot) said that he expects to be available for Monday's tilt against the Eagles, Art Stapleton of The Bergen Record reports.",
    "analysis": "Engram was present for the Giants' practice Wednesday, though his level of involvement won't be known until the team releases its first Week 14 injury report Thursday. If Engram's prediction comes to pass and he suits up versus the Eagles, he'll likely be catching passes for Eli Manning, as Paul Schwartz of the New York Post reports that rookie starting quarterback Daniel Jones will likely be sidelined with a high-ankle sprain.",
    "timestamp": "2019-12-04 09:30 AM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.1, 7.8, 20.3, 7.4, 7.7, 'DNP', 1.1, 12.0, 8.0, 'DNP', 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 9.6, 16.1, 11.5, 16.2, 'DNP', 15.7, 13.2, 15.7, 'DNP', 'BYE', 'DNP', 'DNP', 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 10.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 14.09,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 7.87,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee - MCL",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Practicing Wednesday",
    "report": "Hooper (knee) took part in practice Wednesday, Jason Butt of The Athletic reports.",
    "analysis": "After running on a side field last week, Hooper is back at practice this week. While his activity level won't be known until the Falcons post their first Week 14 injury report later Wednesday, he's seemingly putting himself on a path to play for the first time since Week 10, when he initially suffered a sprained MCL.",
    "timestamp": "2019-12-04 11:42 AM",
    "week01": 12.2,
    "week02": 5.4,
    "week03": 21.6,
    "week04": 17.5,
    "week05": 10.6,
    "week06": 21.7,
    "week07": 12.6,
    "week08": 15.5,
    "week09": "BYE",
    "week10": 9.7,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.4, 21.6, 17.5, 10.6, 21.7, 12.6, 15.5, 'BYE', 9.7, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 10.0, 7.0, 9.6, 7.3, 4.5, 15.6, 6.8, 'BYE', 11.8, 'DNP', 'DNP', 'DNP', 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 10.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 7.89,
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
    "headlineNews": "Leading receiver in big win",
    "report": "Kelce caught five of nine targets for 90 yards in Sunday's 40-9 rout of the Raiders.",
    "analysis": "The Chiefs' passing game was surprisingly muted despite the final score, as windy conditions at Arrowhead Stadium prevented Patrick Mahomes from stretching the field as usual -- Kelce wound up leading the team in receiving yards thanks largely to a 47-yard catch-and-run in the third quarter. The tight end has topped 60 yards in five straight games, hauling in three TDs along the way, and he's now 77 yards shy of his fourth straight 1,000-yard campaign. Kelce could have a tough time reaching that milestone in Week 14 on the road against the Patriots' league-leading defense, however.",
    "timestamp": "2019-12-01 07:03 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8, 'BYE', 12.4, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 10.5,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 5.48,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 10.01,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Just one catch again",
    "report": "Graham was targeted once in Sunday's victory over the Giants and caught one pass for 16 yards.",
    "analysis": "The Giants have done a good job shutting down opposing tight ends this season, and they did so again Week 13, as Graham finished with only one catch for the second week in a row. That output certainly will not help fantasy players in Week 14 playoff matchups, but Graham will at least have a chance to better his recent production, as he and the Packers will square off against a Washington team that allowed opposing tight ends to average 5.3 receptions, 68.7 yards and a touchdown over its last three contests.",
    "timestamp": "2019-12-02 09:25 AM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.8, 7.0, 'BYE', 5.9, 6.3, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 10.1,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 4.35,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 9.61,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Hauls in one pass",
    "report": "Eifert caught one of two targets for 12 yards during Sunday's win against the Jets.",
    "analysis": "Andy Dalton returning under center appeared to provide a glimmer of hope for Eifert's fantasy prospects, but he was instead barely involved in the offense (25 snaps). C.J. Uzomah, however, saw 47 plays on offense while catching five of six targets for 51 yards. Uzomah has played 163 snaps to Eifert's 93 over the last four games, but Sunday was the first display of worthwhile production for either player since Eifert caught a touchdown Week 10.",
    "timestamp": "2019-12-02 01:44 PM",
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
    "week13": 1.7,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE', 9.0, 3.6, 1.2, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.2, 6.9, 9.8, 5.5, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980073.png",
    "name": "Jeremy Sprinkle",
    "depthchart": "Starter: TE-1",
    "team": "Washington Redskins",
    "projected": 9.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 32,
    "avg_fp2": 2.93,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.56,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Puts up career-best yardage",
    "report": "Sprinkle caught two of four targets for 36 yards in Sunday's 29-21 win over Carolina.",
    "analysis": "The yardage was a career high, breaking a streak of 11 consecutive games in which Sprinkle caught either one or two passes for no more than 24 yards. His 77 percent snap share was right in its usual range, so it's not as if the improvement was sparked by a role change. Sprinkle doesn't offer much fantasy appeal, but he appears locked in as the starting tight end for the rest of the season, including Week 14's game at Green Bay.",
    "timestamp": "2019-12-02 05:41 AM",
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
    "week13": 4.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 1.6, 2.9, 2.5, 2.7, 3.4, 2.3, 2.2, 2.1, 'BYE', 8.6, 0.9, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.7, 2.0, 1.6, 3.6, 1.8, 2.7, 1.8, 0.9, 'BYE', 3.8, 3.4, 5.3, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 9.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 5.49,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.8,
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
    "headlineNews": "Takes advantage of elevated role",
    "report": "Higbee hauled in seven of his eight targets for 107 yards and a touchdown in the team's Week 13 win over the Cardinals.",
    "analysis": "Higbee saw an increased role due to the absence of Gerald Everett (knee) and also took advantage of a positive matchup. The end result was a career-best performance in both yards and receptions, highlighted by a two-yard touchdown grab. However, he also displayed a consistent ability to work downfield, recording gains of 26, 25 and 21 yards. It remains unclear how long Everett will be absent, but Higbee could sustain an increased role against the Seahawks in Week 14.",
    "timestamp": "2019-12-01 08:06 PM",
    "week01": 10.0,
    "week02": 3.1,
    "week03": "DNP",
    "week04": 6.1,
    "week05": 6.2,
    "week06": 4.0,
    "week07": 1.3,
    "week08": 1.3,
    "week09": "BYE",
    "week10": 3.7,
    "week11": 0.0,
    "week12": 4.5,
    "week13": 20.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 3.1, 'DNP', 6.1, 6.2, 4.0, 1.3, 1.3, 'BYE', 3.7, 0.0, 4.5, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 2.8, 'DNP', 5.6, 3.1, -0.3, 2.2, 2.3, 'BYE', 1.6, 1.3, 0.9, 2.2, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Rams",
    "projected": 8.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 6.48,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.8,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Won't play Sunday",
    "report": "Everett (knee) has been ruled out for Sunday's game in Arizona, Lindsey Thiry of ESPN.com reports.",
    "analysis": "Everett hyperextended his knee during Monday's 45-6 loss to Baltimore, and while he was able to rejoin the contest, he was then held out of practice Wednesday through Friday. His absence could leave Tyler Higbee in an every-down role, and it also decreases the overall competition for targets.",
    "timestamp": "2019-11-29 02:09 PM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.6, 2.5, 12.9, 17.1, 1.9, 13.0, 2.5, 'BYE', 10.8, 2.5, 3.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 2.0, 3.8, 3.7, 5.0, 3.1, 7.2, 9.4, 'BYE', 9.0, 9.0, 4.1, 'DNP', 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 8.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 9,
    "avg_fp2": 8.59,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 5.84,
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
    "headlineNews": "Leads team in receiving",
    "report": "Cook caught three of six targets for 85 yards in the Saints' 26-18 win over the Falcons on Thursday.",
    "analysis": "The day could have been even bigger had he not dropped a would-be touchdown in the end zone. Despite the miscue, Cook paced the team in receiving yards and had another solid game. His late-season surge continues, as Cook has now averaged 73 yards over his past four contests, including two touchdowns in that span. Even against a tough 49ers defense, Cook looks like a solid fantasy option in Week 14.",
    "timestamp": "2019-11-28 09:28 PM",
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
    "week13": 10.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4, 10.3, 18.9, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 9.4, 4.4, 5.2, 7.4, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 8.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 26,
    "avg_fp2": 6.64,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 12.31,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Hauls in touchdown",
    "report": "Doyle caught six of his 11 targets for 73 yards and a touchdown in the team's Week 13 loss to the Titans.",
    "analysis": "Doyle benefitted from the lack of receiving options in the Colts' passing attack, leading the team in targets. He didn't work down the field much -- he did score on a 21-yard touchdown pass deep down the left sideline on a misdirection pass -- but proved to be a reliable target for Jacoby Brissett throughout the contest. He'll have a positive matchup against the Buccaneers in Week 14, though it remains to be seen whether T.Y. Hilton (calf), Parris Campbell (hand) or Chester Rogers (knee) will be back to take away targets.",
    "timestamp": "2019-12-01 04:52 PM",
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
    "week13": 16.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7, 11.9, 0.0, 4.3, 16.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.0, 4.4, 3.1, 6.1, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 7.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 5.67,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 7.6,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Scores for second straight game",
    "report": "Gesicki caught five of seven targets for 79 yards and a touchdown during Sunday's 37-31 win against the Eagles.",
    "analysis": "The second-year tight end has seemingly opened the floodgates in the TD department, as he's now scored in consecutive weeks after failing to reach the end zone during his first 26 regular-season games. He's been more highly involved than ever over the past two weeks, commanding a combined 14 targets against the Browns and Eagles after garnering just 4.3 targets per game between Weeks 1 and 11. Gesicki is operating within a Dolphins offense that has exceeded 24 points in three of its past five outings after failing to reach that mark once Weeks 1 through 8. Week 14 brings a tough matchup with a Jets defense that has allowed just 48 receptions and two touchdowns to the tight end position all year.",
    "timestamp": "2019-12-01 03:32 PM",
    "week01": 4.1,
    "week02": 1.6,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 6.6,
    "week07": 6.1,
    "week08": 2.0,
    "week09": 12.5,
    "week10": 2.3,
    "week11": 3.8,
    "week12": 10.3,
    "week13": 16.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0, 12.5, 2.3, 3.8, 10.3, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.1, 4.3, 3.6, 5.9, 3.5, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 7.4,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 25,
    "avg_fp2": 11.32,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.03,
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
    "headlineNews": "Only productive receiver in win",
    "report": "Andrews caught three of six targets for 50 yards and a touchdown in Sunday's 20-17 win over San Francisco.",
    "analysis": "Andrews hauled in a 20-yard touchdown in the first quarter. That was the seventh touchdown of the season for the 23-year-old tight end and the fourth in the last four weeks. Lamar Jackson only threw for 105 yards in this one, and nobody but Andrews managed more than 21 receiving yards, as Baltimore won this one with a run-heavy approach. Up next for Andrews and the Ravens is a Week 14 trip to Buffalo.",
    "timestamp": "2019-12-01 02:39 PM",
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
    "week13": 12.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1, 20.3, 15.5, 5.5, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.3, 8.3, 14.9, 10.1, 8.8, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 7.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 10,
    "avg_fp2": 7.26,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 8.45,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Grabs six passes",
    "report": "Hollister caught six of eight targets for 44 yards in Monday's 37-30 win over the Vikings.",
    "analysis": "Hollister logged a season-high 81-percent snap share, with Luke Willson's (hamstring) inactive status helping his case. The third-year pro finished tied with DK Metcalf for the team lead in receptions. Over the last four weeks, Hollister has averaged five catches for 41.3 yards while totaling three touchdowns.",
    "timestamp": "2019-12-04 10:50 AM",
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
    "week13": 7.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 3.5, 2.8, 17.7, 16.2, 'BYE', 3.2, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, -0.2, 8.7, 1.9, 5.2, 'BYE', 6.3, 9.5, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 7.0,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 6.98,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 10.37,
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
    "headlineNews": "Finds end zone in loss",
    "report": "Witten caught six of eight targets for 42 yards and a touchdown, adding a two-point conversion, in Thursday's 26-15 loss to the Bills.",
    "analysis": "Things were looking bright for the Cowboys after Witten hauled in an eight-yard TD from Dak Prescott on the team's first possession, but the Bills defense tightened up after that and didn't allow another point until the game was well in hand in the fourth quarter. Witten is essentially a TD-dependent fantasy play at this point -- he has yet to top 60 receiving yards in a game this year -- but he continues to see solid target volume as a reliable check-down option and chain-mover for Prescott.",
    "timestamp": "2019-11-28 05:58 PM",
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
    "week13": 15.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8, 2.7, 5.8, 1.0, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 14.1, 9.7, 6.8, 3.4, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 6.8,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 10.55,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.12,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Cleared for Week 13",
    "report": "Ertz (hamstring) is active for Sunday's game against the Dolphins.",
    "analysis": "Ertz was only able to practice once this week in a limited fashion, but the Eagles signed off on him playing after he completed a pregame workout earlier Sunday without incident. Philadelphia hasn't indicated that Ertz will be limited at all in Week 13, but if he is, Dallas Goedert would stand to pick up more reps at tight end than usual.",
    "timestamp": "2019-12-01 08:35 AM",
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
    "week13": 3.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0, 20.8, 'BYE', 13.9, 21.1, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 9.3, 'BYE', 11.1, 10.6, 9.1, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 5.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 17,
    "avg_fp2": 5.85,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.03,
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
    "headlineNews": "Not activated yet",
    "report": "Njoku (wrist) will not be activated ahead of Sunday's contest against the Steelers, Nate Ulrich of the Akron Beacon Journal reports.",
    "analysis": "The wait continues for Njoku, who returned to practice Nov. 20 after breaking his wrist in Week 2, thus landing on injured reserve. The Browns have until Dec. 11 to activate their star tight end or shut him down for the rest of the season, so there's still time for Njoku to find his way onto the field. Demetrius Harris will start Week 13 against the Steelers.",
    "timestamp": "2019-11-30 12:26 PM",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 3.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 5.6,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 0.44,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.23,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Best game thus far",
    "report": "Thomas caught all four of his targets for 24 yards in Sunday's 29-21 loss to the Redskins.",
    "analysis": "He entered Sunday with a mere one catch on the season, but he saw his role expand after fellow tight end Greg Olsen was concussed during the third quarter. As a result, Thomas put together his best performance of the campaign, and he figures to keep working with Carolina's starters if Olsen is unavailable in Week 14 versus the Falcons. With the veteran TE injured last year, Thomas started six games as a rookie, totaling 24 catches for 220 yards and a touchdown in those appearances.",
    "timestamp": "2019-12-02 07:49 AM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 0.0,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 0.9,
    "week13": 4.4,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.9, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 2.1, 6.8, 2.4, 1.3, 4.0, 'BYE', 1.5, -0.3, -0.1, 0.3, 1.1, 0.7, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15887.png",
    "name": "Ryan Griffin",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 5.1,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 30,
    "avg_fp2": 6.64,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 9.56,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Feeling ill",
    "report": "Griffin will miss Wednesday's practice due to an illness, Brian Costello of the New York Post reports.",
    "analysis": "The 29-year-old still has plenty of time to shake of the illness return to health before Sunday's game against the Dolphins. Griffin has  emerged as a low-end TE1 in many fantasy leagues, scoring eight or more PPR points five of the past six weeks.",
    "timestamp": "2019-12-04 08:11 AM",
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
    "week13": 5.5,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 0.0, 1.0, 'BYE', 0.7, 10.3, 0.6, 22.6, 8.0, 0.3, 19.4, 8.8, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.2, 1.5, 'BYE', 4.5, 6.7, 4.2, 2.9, 8.5, 1.5, 1.0, 5.5, 7.2, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2970262.png",
    "name": "J.P. Holtz",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 4.8,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 9.64,
    "fanduelSalary": "$5000",
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
    "week13": "DNP",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14145.png",
    "name": "Charles Clay",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 4.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 22,
    "avg_fp2": 2.27,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 10.13,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Targeted twice Week 13",
    "report": "Clay corralled both of his targets for 29 yards during Sunday's 34-7 loss to the Rams.",
    "analysis": "After failing to make a mark in the box score for the first time this season Week 11, Clay emerged from the Cardinals' bye with his third multi-catch performance of the year. He even was on the receiving end of the team's longest play from scrimmage, a 23-yard reception in the first quarter. Because he continues to split TE work with Maxx Williams -- 331 versus 335 (of 807) offensive snaps for the season -- Clay isn't set up to be a consistent contributor to the offense.",
    "timestamp": "2019-12-02 05:49 PM",
    "week01": 1.0,
    "week02": 1.1,
    "week03": 1.4,
    "week04": 0.8,
    "week05": 3.2,
    "week06": 1.8,
    "week07": 1.7,
    "week08": 10.3,
    "week09": 1.1,
    "week10": 1.0,
    "week11": 0.0,
    "week12": "BYE",
    "week13": 3.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 1.1, 1.4, 0.8, 3.2, 1.8, 1.7, 10.3, 1.1, 1.0, 0.0, 'BYE', 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 1.1, 9.1, 3.6, 4.1, 4.5, 1.7, 0.8, 3.3, 5.7, 2.1, 'BYE', 1.9, 4.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 4.4,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 4.01,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.11,
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
    "headlineNews": "Remains unproductive",
    "report": "Smith hauled in both of his targets but netted zero yards in the team's Week 13 win over the Colts.",
    "analysis": "Smith had little role in the team's offense and did even less with his limited opportunity. On his first reception, Smith was caught behind the line of scrimmage for a two-yard loss, which he followed one quarter later with a two-yard gain on a pass over the middle. Though Delanie Walker (ankle) was placed on injured reserve Wednesday, Smith is not a worthwhile option due to his limited volume and lack of production.",
    "timestamp": "2019-12-01 10:18 PM",
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 3.6, 7.7, 'BYE', 5.6, 8.6, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576179.png",
    "name": "Matt LaCosse",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 4.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 8,
    "avg_fp2": 1.74,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 10.81,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Sees 53 snaps Sunday",
    "report": "LaCosse was on the field for 53 of a possible 87 snaps on offense in Sunday's 28-22 loss to the Texans, en route to catching one of his two targets for 24 yards.",
    "analysis": "Meanwhile, fellow tight end Ben Watson was on the field for 47 snaps, hauling in his only target for 23 yards. Neither of New England's top two tight ends are high-percentage fantasy lineup options in the coming weeks.",
    "timestamp": "2019-12-02 09:02 AM",
    "week01": "DNP",
    "week02": 4.3,
    "week03": "DNP",
    "week04": 0.0,
    "week05": 2.7,
    "week06": 0.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 1.3,
    "week12": 1.0,
    "week13": 2.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 4.3, 'DNP', 0.0, 2.7, 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 1.3, 1.0, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.3, 'DNP', 0.7, 2.7, 1.6, 'DNP', 'DNP', 'DNP', 'BYE', -0.4, 2.0, 3.5, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576399.png",
    "name": "Nick Vannett",
    "depthchart": "Backup: TE-2",
    "team": "Pittsburgh Steelers",
    "projected": 4.3,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 29,
    "avg_fp2": 1.14,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 17.64,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Rare catch Sunday",
    "report": "Vannett caught his only target for seven yards in Pittsburgh's 20-13 win over Cleveland on Sunday.",
    "analysis": "In seven games with Pittsburgh, Vannett has been targeted just nine times with six catches for 35 yards to show for it. As attractive as the Week 14 matchup against a non-existent Arizona pass defense is, there simply is no reason to even have Vannett on fantasy rosters.",
    "timestamp": "2019-12-01 06:48 PM",
    "week01": 2.6,
    "week02": 1.8,
    "week03": 1.4,
    "week04": "DNP",
    "week05": 0.0,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 2.0,
    "week09": 0.0,
    "week10": 1.3,
    "week11": 1.2,
    "week12": 0.0,
    "week13": 1.2,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 1.8, 1.4, 'DNP', 0.0, 1.0, 'BYE', 2.0, 0.0, 1.3, 1.2, 0.0, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.8, 7.0, 2.4, 'DNP', 1.5, -0.3, 'BYE', 0.3, -0.2, -0.1, -0.7, 4.6, 1.1, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 4.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 8,
    "avg_fp2": 3.48,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 10.81,
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
    "headlineNews": "Hauls in 23-yard pass",
    "report": "Watson logged 47 of a possible 87 snaps on offense in Sunday's 28-22 loss to the Texans.",
    "analysis": "Watson caught his only target in the game for 23 yards, while fellow tight end Matt LaCosse (53 snaps) hauled in one of his two targets for 24 yards. In the wake of back-to-back low-volume efforts, it'll be hard to trust Watson as a fantasy option when the Patriots take on the Chiefs in Week 14.",
    "timestamp": "2019-12-02 08:57 AM",
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
    "week13": 2.8,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE', 6.7, 0.0, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 4.6, 8.9, 7.4, 4.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 3.9,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 12,
    "avg_fp2": 7.25,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.0,
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
    "headlineNews": "Scores in win",
    "report": "Fells caught two of three targets for 23 yards and a touchdown in Sunday's 28-22 win over New England.",
    "analysis": "Fells, who is tied for the league lead among tight ends with seven touchdowns, recorded his first TD in three games. He remains the top dog among the team's tight ends even with the return of Jordan Thomas. Fells' 42 snaps were more than Jordan Akins (31) and Thomas (14).",
    "timestamp": "2019-12-02 05:46 AM",
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
    "week13": 9.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE', 2.3, 2.9, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.6, 'BYE', 7.2, 4.2, 2.8, 3.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Oakland Raiders",
    "projected": 3.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 15,
    "avg_fp2": 4.08,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.74,
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
    "headlineNews": "Secures one catch Sunday",
    "report": "Moreau caught his lone target for 15 yards in Sunday's 40-9 loss to the Chiefs.",
    "analysis": "Moreau saw just one look from quarterback Derek Carr for a second consecutive week, as the former was overshadowed by No. 1 tight end Darren Waller, who caught seven of nine targets for 100 yards. Moreau has only found the end zone once over the Raiders' past four contests heading into a Week 14 tilt against the Titans.",
    "timestamp": "2019-12-02 05:41 PM",
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 0.0, 0.6, 10.5, 6.6, 'BYE', 9.4, 1.5, 6.8, 0.0, 7.8, 0.8, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.0, 2.6, 0.5, 2.5, 2.7, 'BYE', 4.3, 4.8, 4.5, 0.4, 9.6, 7.0, 4.4, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991767.png",
    "name": "Blake Jarwin",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 3.8,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 4.59,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 10.37,
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
    "headlineNews": "Nabs two passes in loss",
    "report": "Jarwin caught two of three targets for nine yards during Thursday's 26-15 loss to Buffalo.",
    "analysis": "The Bills kept Jarwin in check Thursday as the tight end was held under 20 yards for the third consecutive game. He has some ability to stretch the field -- his six catches of 20 or more yards rank fourth on the team despite the fact he's only sixth in receptions. A series of tough opponents have stifled Jarwin's production, however, and things won't get much easier Thursday against Chicago, which has surrendered just 31 passes of 20 or more yards this season - sixth fewest in the league.",
    "timestamp": "2019-12-03 05:49 PM",
    "week01": 11.4,
    "week02": 2.7,
    "week03": 0.8,
    "week04": 6.4,
    "week05": 0.0,
    "week06": 1.6,
    "week07": 6.6,
    "week08": "BYE",
    "week09": 10.7,
    "week10": 5.0,
    "week11": 4.8,
    "week12": 3.2,
    "week13": 1.9,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 2.7, 0.8, 6.4, 0.0, 1.6, 6.6, 'BYE', 10.7, 5.0, 4.8, 3.2, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 5.5, 5.1, 4.3, 3.3, 4.1, 2.3, 'BYE', 2.9, -0.1, 4.2, 3.4, 2.9, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 3.8,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 6.73,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.12,
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
    "headlineNews": "Second-leading receiver in loss",
    "report": "Goedert caught six of seven targets for 66 yards during Sunday's 37-31 loss to the Dolphins.",
    "analysis": "On a day in which Philadelphia's passing attack racked up 310 yards and three scores against the Miami secondary, Goedert ranked second on the team in targets and was one of two Eagles to exceed 45 receiving yards. The second-year tight end was actually Carson Wentz's preferred target at the position in Week 13, and he has now surpassed Zach Ertz in target share over two of the Eagles' past four games. Goedert has 13 catches for 98 yards over Philadelphia's past two outings, heading into a Week 14 matchup against a Giants defense that so far this season has surrendered the fewest number of receptions (39) to opposing tight ends.",
    "timestamp": "2019-12-01 04:30 PM",
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
    "week13": 9.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE', 11.1, 4.7, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 'DNP', 5.9, 4.0, 4.1, 1.5, 4.3, 2.1, 3.6, 'BYE', 5.5, 5.5, 6.1, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2998565.png",
    "name": "Mo Alie-Cox",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 3.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 26,
    "avg_fp2": 0.67,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 12.31,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "No receptions Sunday",
    "report": "Alie-Cox played 15 snaps on offense but did not have a reception or target in Sunday's loss to Tennessee.",
    "analysis": "With Eric Ebron out with an ankle injury and several other wide receivers sidelined, Alie-Cox appeared poised for a larger role in the offense. However, Ross Travis got the start as the second TE opposite Jack Doyle and had three targets and more pass routes run (12 compared to three for Alie-Cox). Alie-Cox battled a thumb injury during practices last week, but it looks like Travis may get looks over him in the passing game despite Alie-Cox previously showing promise as a receiver.",
    "timestamp": "2019-12-02 11:29 AM",
    "week01": 0.8,
    "week02": 0.0,
    "week03": 3.5,
    "week04": 0.0,
    "week05": 1.5,
    "week06": "BYE",
    "week07": 0.0,
    "week08": 0.0,
    "week09": 1.6,
    "week10": 0.0,
    "week11": "DNP",
    "week12": 0.0,
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 0.0, 3.5, 0.0, 1.5, 'BYE', 0.0, 0.0, 1.6, 0.0, 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 2.1, 3.5, 1.9, 1.9, 'BYE', 1.6, -0.5, 1.2, 3.3, 'DNP', 1.6, 0.3, 3.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 4,
    "avg_fp2": 4.49,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 8.73,
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
    "headlineNews": "Comes to life in Week 13 win",
    "report": "Howard secured five of six targets for 61 yards in the Buccaneers' 28-11 win over the Jaguars on Sunday.",
    "analysis": "Howard co-led the Buccaneers in receptions with another unlikely candidate in Breshad Perriman, setting a new season high in catches in the process. The third-year tight end was coming off a two-game, Week 11-12 stretch during which he'd managed just one reception (on three targets) for 10 yards, so Sunday's surge was surprising to say the least. Howard hasn't really been able to piece together consecutive above-average performances yet this season, an unfavorable trend he'll look to avoid Week 14 against the Colts.",
    "timestamp": "2019-12-01 03:06 PM",
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
    "week13": 8.6,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP', 12.7, 0.0, 1.5, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 7.6, 6.3, 6.7, 9.0, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3940587.png",
    "name": "Jesper Horsted",
    "depthchart": "Backup: TE-2",
    "team": "Chicago Bears",
    "projected": 3.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 28,
    "avg_fp2": 4.6,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 9.64,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Finds end zone",
    "report": "Horsted  caught an 18-yard touchdown pass in the Bears' 24-20 win over the Lions on Thursday.",
    "analysis": "With Ben Braunecker (concussion) and Adam Shaheen (foot) sitting this one out, Horsted saw the only target that Mitch Trubisky threw to a Chicago tight end, and he made a terrific leaping catch to tie the game in the third quarter. Even if he continues to see playing time, it's unlikely he'll be a strong fantasy option, as the Bears have yet to have a tight end post 20 yards in a game this season.",
    "timestamp": "2019-11-28 08:10 PM",
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
    "week12": 0.9,
    "week13": 8.3,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.1, 0.2, 3.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979590.png",
    "name": "Jesse James",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 3.1,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 7,
    "avg_fp2": 0.97,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.08,
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
    "headlineNews": "Likely new No. 1 tight end",
    "report": "James is expected to serve as the Lions' top tight end for the team's final four games of the season after T.J. Hockenson (ankle) was placed on injured reserve Monday, Dave Birkett of the Detroit Free Press reports.",
    "analysis": "James looked like he might have been in store for a significant role with Detroit in 2019 when he inked a four-year, $25 million deal in free agency in March, but he soon became a pricey No. 2 option on the depth chart after the Lions selected Hockenson with the eighth overall pick in the draft a month later. Hockenson's injury clears the way for James to take on more prominence in the game plan, but the veteran most likely will provide his biggest impact as a blocker rather than a pass catcher. With nine receptions for 71 yards this season, James actually ranks third among Detroit tight ends in both categories, as Logan Thomas (11 catches for 120 yards) has seen similar involvement in the passing game, despite playing 156 fewer offensive snaps.",
    "timestamp": "2019-12-02 12:37 PM",
    "week01": 2.0,
    "week02": 3.3,
    "week03": 1.8,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.3,
    "week07": 1.2,
    "week08": 0.0,
    "week09": 0.8,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 1.2,
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 3.3, 1.8, 0.0, 'BYE', 1.3, 1.2, 0.0, 0.8, 0.0, 0.0, 1.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.0, 1.6, 0.6, 'BYE', 2.4, 1.0, 1.2, 1.1, 0.3, 0.7, 1.5, 1.0, 3.1]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 9.8,
    "opponent": "New York Giants",
    "opp_rank_pts": 25,
    "opp_avg_pts": 19.33,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.17,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.08,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 6.0,
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
    "week13": 1.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE', 2.0, 11.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 8.9, 'BYE', 5.4, 7.0, 8.3, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 9.2,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 29,
    "opp_avg_pts": 16.17,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.17,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 5.33,
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0, 10.0, 9.0, 10.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9, 7.7, 6.9, 7.6, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 9.2,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 11,
    "opp_avg_pts": 23.58,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 23.33,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 7.08,
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
    "week13": 6.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0, 11.0, 'BYE', 19.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 7.1, 7.1, 'BYE', 7.7, 6.9, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 8.9,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 28,
    "opp_avg_pts": 16.5,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 22.42,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 4.92,
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
    "week13": 5.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE', -3.0, 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.0, 'BYE', 4.6, 6.6, 5.8, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 8.6,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 14.42,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 21.25,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.58,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 6.25,
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.3, 7.6, 'BYE', 5.5, 7.8, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 8.6,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.42,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 20.75,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 7.58,
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
    "week13": 12.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE', 10.0, 9.0, -1.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 5.8, 9.1, 6.7, 7.6, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 8.4,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 18.75,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.33,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.75,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 10.33,
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
    "week13": 13.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0, 16.0, 1.0, 12.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.7, 8.5, 8.3, 8.5, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 8.3,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 3,
    "opp_avg_pts": 29.0,
    "home_away": "",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 11.58,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 12.5,
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE', 11.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.3, 'BYE', 8.3, 9.4, 7.0, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 8.2,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 15,
    "opp_avg_pts": 22.83,
    "home_away": "at ",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 28.08,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.92,
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
    "avg_fp2": 3.92,
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
    "week13": -1.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0, 0.0, 1.0, 'BYE', 7.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.7, 7.1, 'BYE', 7.2, 6.6, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.9,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 17,
    "opp_avg_pts": 21.58,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 28.67,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.67,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
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
    "avg_fp2": 6.0,
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
    "week13": 17.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0, 6.0, 0.0, 10.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 7.2, 6.0, 5.9, 7.6, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 7.7,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 32,
    "opp_avg_pts": 14.0,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 22.67,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.58,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.42,
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
    "avg_fp2": 6.75,
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
    "week13": 4.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0, 2.0, 16.0, 8.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.2, 6.8, 8.2, 6.1, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 7.7,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 15,
    "opp_avg_pts": 22.83,
    "home_away": "",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.33,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.92,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 7.0,
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0, 4.0, 'BYE', 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.5, 8.0, 'BYE', 5.3, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 7.6,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.67,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 29.33,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.75,
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
    "avg_fp2": 3.25,
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
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0, 9.0, 2.0, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.9, 5.3, 'BYE', 7.4, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 7.6,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 22,
    "opp_avg_pts": 19.83,
    "home_away": "",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 24.33,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 5.92,
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
    "week13": 5.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0, 5.0, 'BYE', 4.0, 1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.5, 'BYE', 5.7, 5.9, 6.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 7.6,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 26,
    "opp_avg_pts": 18.33,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 20.08,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.58,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 6.0,
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
    "week13": 2.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0, 4.0, 5.0, 'BYE', 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.1, 7.2, 'BYE', 7.4, 7.6]
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
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 8,
    "opp_avg_pts": 25.83,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.17,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.75,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 7.33,
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
    "week13": 5.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0, 8.0, 5.0, 4.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.9, 9.5, 9.5, 6.8, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 7.1,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.42,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 21.58,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.42,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 6.42,
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
    "week13": 9.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0, 8.0, 8.0, 4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.3, 7.6, 6.5, 7.9, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 6.9,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 14,
    "opp_avg_pts": 23.0,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.08,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.58,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 3.92,
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
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0, 10.0, 13.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.6, 6.8, 7.0, 5.7, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 6.9,
    "opponent": "Houston Texans",
    "opp_rank_pts": 9,
    "opp_avg_pts": 24.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.08,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 5.83,
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
    "week13": 8.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0, 3.0, 'BYE', 9.0, 4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.4, 'BYE', 6.3, 6.4, 7.2, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 6.8,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 17,
    "opp_avg_pts": 21.58,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 17.75,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 7.17,
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
    "week13": 7.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0, 15.0, 13.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.1, 7.1, 8.1, 8.7, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.5,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.17,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.67,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.58,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 6.17,
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
    "week13": 4.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0, 0.0, 3.0, 6.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.3, 6.7, 5.4, 5.8, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 6.5,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 23.17,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 3.67,
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
    "week13": 0.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE', 10.0, 26.0, 2.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.6, 6.0, 5.3, 5.3, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 6.4,
    "opponent": "New York Jets",
    "opp_rank_pts": 29,
    "opp_avg_pts": 16.17,
    "home_away": "at ",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.25,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.17,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 2.58,
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
    "week13": 3.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0, 11.0, 2.0, -1.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.5, 6.6, 7.7, 6.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 6.3,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.17,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.33,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 7.33,
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
    "week13": 6.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0, 2.0, 2.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5, 7.5, 5.1, 8.4, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 6.3,
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 23,
    "opp_avg_pts": 19.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 19.5,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 8.33,
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.4, 6.2, 'BYE', 7.1, 5.9, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 6.2,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 24.83,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.42,
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
    "avg_fp2": 4.08,
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
    "week13": 13.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE', -1.0, 8.0, 6.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 5.4, 5.3, 5.9, 7.5, 6.2]
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
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 29.17,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.17,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.58,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 8.08,
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
    "week13": 16.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0, 11.0, 3.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2, 6.4, 7.8, 6.0, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 6.1,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 7,
    "opp_avg_pts": 26.42,
    "home_away": "at ",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.25,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.83,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 4.83,
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
    "week13": 3.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0, 6.0, -1.0, 8.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.8, 5.7, 6.8, 7.5, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 5.8,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 10,
    "opp_avg_pts": 24.17,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 15.25,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.92,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.92,
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
    "avg_fp2": 10.75,
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1, 5.6, 6.5, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 5.3,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 12,
    "opp_avg_pts": 23.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 24.17,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.42,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 6.42,
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
    "week13": 11.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0, 2.0, 'BYE', 5.0, 14.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3, 'BYE', 6.8, 6.3, 6.0, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 5.1,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 33.25,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 14.75,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 8.42,
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
    "week13": 11.0,
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0, 10.0, 13.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 7.8, 9.1, 7.6, 4.9, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 5.0,
    "opponent": "New England Patriots",
    "opp_rank_pts": 6,
    "opp_avg_pts": 26.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.5,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 6.92,
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
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8, 'BYE', 7.5, 5.0]
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