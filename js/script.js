var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {
  
  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 04 January 2020 04:54 AM (central time)"};
$scope.week = {"nflWeek": "Wild Card Round"};

$scope.qbStartSit = {"one": "Josh Allen", "two": "Carson Wentz", "three": "Tom Brady", "four": "Kirk Cousins", "five": "Russell Wilson", "six": "Ryan Tannehill", "seven": "Deshaun Watson", "eight": "Drew Brees", "nine": "Russell Wilson", "ten": "Kirk Cousins"};
$scope.rbStartSit = {"one": "Devin Singletary", "two": "Miles Sanders", "three": "Sony Michel", "four": "Alvin Kamara", "five": "Carlos Hyde", "six": "Travis Homer", "seven": "Derrick Henry", "eight": "Dalvin Cook", "nine": "Carlos Hyde", "ten": "Alvin Kamara"};
$scope.wrStartSit = {"one": "John Brown", "two": "Stefon Diggs", "three": "Michael Thomas", "four": "Julian Edelman", "five": "DeAndre Hopkins", "six": "A.J. Brown", "seven": "DeAndre Hopkins", "eight": "Julian Edelman", "nine": "Michael Thomas", "ten": "Stefon Diggs"};
$scope.teStartSit = {"one": "Dallas Goedert", "two": "Dawson Knox", "three": "Ben Watson", "four": "Kyle Rudolph", "five": "Jared Cook", "six": "Darren Fells", "seven": "Jonnu Smith", "eight": "Jacob Hollister", "nine": "Jared Cook", "ten": "Kyle Rudolph"};
$scope.dstStartSit = {"one": "Houston Texans", "two": "Seattle Seahawks", "three": "Buffalo Bills", "four": "Philadelphia Eagles", "five": "New England Patriots", "six": "Minnesota Vikings", "seven": "Tennessee Titans", "eight": "New Orleans Saints", "nine": "New England Patriots", "ten": "Philadelphia Eagles"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 23.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 20.8,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 14.98,
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
    "headlineNews": "Delivers three touchdowns in rout",
    "report": "Brees completed 19 of 30 pass attempts for 253 yards and three touchdowns while losing a yard on one carry in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "The seasoned vet was at it again Sunday, delivering an impressive performance in the blowout victory. Brees finishes the year on a high note after accounting for 23 total touchdowns and just one pick over the Saints' final seven games, throwing for at least three passing scores in six of those contests. After back-to-back heartbreaking losses in the playoffs, Brees will have at least one more postseason to attempt to lead the Saints to a Super Bowl before becoming a free agent in 2020.",
    "timestamp": "2019-12-29 03:12 PM",
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
    "week14": 40.06,
    "week15": 28.28,
    "week16": 22.86,
    "week17": 22.02
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48, 21.12, 23.44, 11.26, 40.06, 28.28, 22.86, 22.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.4, 17.6, 21.9, 16.6, 17.3, 22.8, 14.3, 14.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.8, 18.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.2, 'BYE', 17.6, 13.8, 16.2, 16.9, 16.7, 12.4, 14.5, 13.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.0, 28.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.3, 'BYE', 28.2, 26.5, 23.6, 21.3, 22.7, 25.0, 20.0, 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 20.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 14,
    "avg_fp2": 20.98,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 17.07,
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
    "headlineNews": "Comeback bid falls short",
    "report": "Wilson completed 25 of 40 passes for 233 yards and two touchdowns in Sunday's 26-21 loss to the 49ers. He also ran eight times for 29 yards.",
    "analysis": "Wilson's first three quarters were uninspiring, but he turned it up in the fourth quarter, completing 14 of 23 passes for 149 yards and a touchdown. The Seahawks were inches from scoring with less than a minute left as the veteran signal caller completed a fourth-down pass to rookie John Ursua that was stopped just short of the goal line. Due to substitution issues following the catch, they took a costly delay of game penalty, pushing them back five yards. On Wilson's last opportunity to clinch the NFC West, he connected with Jacob Hollister on fourth down, but the tight end was stopped short of glory. The Seahawks will have to go on the road this postseason, starting in Philadelphia for the wild-card round.",
    "timestamp": "2019-12-29 08:33 PM",
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
    "week14": 11.6,
    "week15": 19.34,
    "week16": 10.96,
    "week17": 20.22
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22, 17.58, 'BYE', 10.5, 17.9, 11.6, 19.34, 10.96, 20.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 24.3, 19.0, 'BYE', 22.4, 20.1, 20.6, 19.5, 22.5, 19.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.4, 8.1, 16.6, 7.5, 12.1, 11.5, 22.3, 14.6, 15.2, 16.0, 'BYE', 12.5, 13.9, 12.2, 12.2, 14.8, 14.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.7, 24.8, 23.0, 37.6, 32.8, 25.4, 27.9, 31.6, 26.0, 29.6, 'BYE', 32.9, 27.2, 27.0, 25.5, 26.4, 25.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 20.2,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 8,
    "avg_fp2": 16.96,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.41,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Mediocre showing in shocking loss",
    "report": "Brady completed 16 of 29 passes for 221 yards with two touchdowns and one interception in the Patriots' 27-24 loss to the Dolphins on Sunday.",
    "analysis": "Brady put together serviceable final numbers from a fantasy perspective, but his pick-six early in the contest certainly gave the Dolphins an emotional boost that they'd ultimately parlay into an upset. The future Hall of Famer also couldn't get New England into field-goal range when he got the ball back with 24 seconds left, completing just one of three attempts before a series of laterals on the final play that culminated in a fumble. Brady and the Patriots head into the postseason in worrisome fashion and with a complete absence of momentum on the offensive side of the ball, as the 42-year-old has now completed less than 56.0 percent of his throws in six of his last seven contests.",
    "timestamp": "2019-12-29 03:02 PM",
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
    "week14": 11.76,
    "week15": 12.92,
    "week16": 17.24,
    "week17": 15.74
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE', 8.54, 11.3, 25.34, 11.76, 12.92, 17.24, 15.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.1, 'BYE', 14.7, 18.2, 17.0, 20.4, 24.0, 15.2, 20.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 15.4, 15.9, 18.6, 12.8, 16.9, 14.1, 15.5, 13.1, 'BYE', 15.8, 13.0, 14.1, 16.5, 13.7, 13.3, 20.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.7, 28.0, 27.0, 24.1, 30.4, 26.2, 21.1, 23.1, 20.4, 'BYE', 21.5, 19.1, 27.9, 23.9, 23.5, 19.4, 28.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 19.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 22.3,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.52,
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
    "headlineNews": "Remains on bench in finale",
    "report": "Watson dressed but did not play in Sunday's 35-14 loss to the Titans.",
    "analysis": "By the time the Texans kicked off Sunday, they knew their playoff fate, so head coach Bill O'Brien took it easy on several skill position players. Locked in as the No. 4 seed in the AFC, O'Brien started backup quarterback AJ MCarron and let him play the entire game. Watson, who was nursing a back injury while preparing for Week 17, is expected to start Houston's wild-card game Saturday against the Bills, who ranked fourth in passing defense during the regular season.",
    "timestamp": "2019-12-31 04:47 AM",
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
    "week14": 30.08,
    "week15": 18.92,
    "week16": 10.06,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76, 19.74, 'BYE', 4.96, 19.92, 28.36, 30.08, 18.92, 10.06, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 21.8, 'BYE', 20.4, 21.2, 17.2, 15.7, 23.7, 27.9, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.7, 12.7, 11.6, 5.2, 4.0, 13.3, 22.4, 20.3, 18.5, 'BYE', 24.8, 13.0, 17.5, 19.6, 19.6, 15.1, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [39.8, 38.0, 39.4, 25.3, 33.8, 28.1, 40.0, 34.0, 33.9, 'BYE', 30.8, 29.9, 34.3, 30.9, 29.9, 33.0, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 18.8,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 26,
    "avg_fp2": 18.85,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.31,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Suffers shoulder injury",
    "report": "Allen was forced out of Sunday's game against the Colts with a shoulder injury, Tad Dickman of the Jaguars' official site reports.",
    "analysis": "Allen had an excellent rookie campaign, as he recorded 44 tackles and 10.5 sacks to live up to his first-round pedigree. It's unsettled how severe the 22-year-old's injury is, but there doesn't seem to be concern about his status for the 2020 season at this time.",
    "timestamp": "2019-12-29 04:46 PM",
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
    "week14": 12.74,
    "week15": 17.36,
    "week16": 20.62,
    "week17": 0.2
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44, 33.84, 20.0, 23.54, 12.74, 17.36, 20.62, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 20.8, 13.0, 18.8, 13.7, 11.4, 20.9, 15.2, 11.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 4.8, 9.3, 4.7, 7.8, 'BYE', 3.8, 7.2, 11.2, 15.5, 10.3, 9.6, 7.6, 9.4, 12.0, 11.5, 17.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.7, 30.8, 49.3, 32.3, 22.7, 'BYE', 43.9, 27.8, 28.6, 31.3, 41.1, 22.8, 21.5, 26.2, 22.6, 21.9, 22.3]
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
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 23,
    "avg_fp2": 16.83,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 18.82,
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
    "headlineNews": "Active, but likely working as backup",
    "report": "Cousins is active for Sunday's game against the Bears but is expected to serve as the backup to Sean Mannion, Courtney Cronin of ESPN.com reports.",
    "analysis": "The Vikings haven't officially confirmed that Cousins won't start like he usually does, but with Minnesota already locked in as the NFC's No. 6 seed entering Sunday, there's little incentive for the team to exposing its top quarterback to a potential injury in a meaningless season finale. As Cronin notes, the fact the Vikings have made both of their starting offensive tackles (Riley Reiff and Brian O'Neill) healthy inactives is a sign Cousins will only play in an emergency.",
    "timestamp": "2019-12-29 08:46 AM",
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
    "week14": 13.58,
    "week15": 12.68,
    "week16": 7.88,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3, 21.3, 22.86, 'BYE', 18.04, 13.58, 12.68, 7.88, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 19.8, 13.5, 'BYE', 13.5, 19.6, 15.1, 19.3, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 14.0, 15.2, 10.1, 7.6, 10.2, 10.7, 11.3, 13.6, 11.9, 11.2, 'BYE', 15.9, 13.2, 15.0, 8.8, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.1, 27.7, 21.3, 17.6, 23.9, 21.1, 29.1, 28.0, 28.3, 25.8, 27.7, 'BYE', 28.1, 23.1, 25.4, 22.9, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 16.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 17.93,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 17.87,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Steady in Sunday's win",
    "report": "Wentz completed 23 of 40 passes for 289 yards and a touchdown in Sunday's 34-17 win over the Giants.",
    "analysis": "Boston Scott ended up being the hero of the Eagles' division-clinching win, but Wentz was steady in guiding the club into the playoffs. The fourth-year QB finishes the regular season with a career-high 4,039 passing yards -- an amazing total, considering all the injuries Philadelphia has had to deal with at wide receiver and tight end -- and a 27:7 TD:INT, but even on home turf he'll face a tough test in the wild-card round next weekend against the Seahawks.",
    "timestamp": "2019-12-29 08:34 PM",
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
    "week14": 19.9,
    "week15": 21.54,
    "week16": 18.96,
    "week17": 17.06
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE', 12.26, 10.94, 27.4, 19.9, 21.54, 18.96, 17.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.1, 'BYE', 16.7, 21.0, 20.0, 17.9, 10.8, 15.2, 21.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.0, 11.0, 10.3, 12.3, 18.6, 10.7, 18.1, 15.6, 14.1, 'BYE', 13.4, 15.3, 13.0, 13.3, 14.7, 11.9, 16.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.3, 29.5, 27.8, 21.1, 25.5, 24.5, 26.6, 23.9, 22.6, 'BYE', 22.4, 20.8, 18.5, 26.6, 21.5, 25.5, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 14.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 21,
    "avg_fp2": 19.18,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.49,
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
    "headlineNews": "Leads Titans to playoffs",
    "report": "Tannehill completed 13 of 20 passes for 198 yards and two touchdowns in the team's Week 17 win over the Texans.",
    "analysis": "Tannehill took a backseat to Derrick Henry, throwing only 20 passes in comparison to 32 rushing attempts for Henry. However, the quarterback worked efficiently, throwing multiple touchdowns for the seventh consecutive game. Tannehill resurrected his career in 2019, leading the team to a 7-3 record after taking over as the starter in Week 7. A free agent at the conclusion of the season, Tannehill likely did enough to either be given the franchise tag or signed to a long-term deal in Tennessee. For now, however, his focus will be squarely on the team's matchup against the Patriots in the wild-card round of the playoffs.",
    "timestamp": "2019-12-29 06:45 PM",
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
    "week17": 17.92
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36, 13.78, 28.54, 25.16, 23.68, 17.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 18.8, 11.7, 19.5, 'BYE', 14.7, 11.8, 15.7, 19.5, 18.8, 16.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3, 8.1, 5.9, 15.1, 'BYE', 11.7, 10.4, 6.6, 10.4, 8.7, 13.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.9, 18.7, 22.4, 26.8, 'BYE', 17.0, 25.9, 23.7, 26.4, 30.5, 29.3]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 15.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 16,
    "avg_fp2": 14.87,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.61,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Scores twice in blowout victory",
    "report": "Kamara rushed eight times for 39 yards and two touchdowns, adding two receptions for 18 yards on three targets in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "After failing to score for nine straight weeks, Kamara has now produced back-to-back two-touchdown efforts on the ground in Weeks 16-17. He closes the regular season on a high note, though most of his scoring output has come in the final two weeks of the campaign. The talented third-year back ends the 2019 regular season with a career-low six total touchdowns after producing 22 in his first two seasons. Regardless, he'll head into the playoffs on a hot streak.",
    "timestamp": "2019-12-29 03:16 PM",
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
    "week14": 4.3,
    "week15": 11.4,
    "week16": 26.0,
    "week17": 18.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4, 17.2, 14.7, 10.4, 4.3, 11.4, 26.0, 18.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.7, 13.2, 18.3, 21.1, 12.9, 17.3, 12.7, 21.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [22.0, 16.3, 16.4, 20.5, 8.4, 11.8, 'DNP', 'DNP', 'BYE', 13.4, 8.9, 10.0, 9.2, 7.5, 9.6, 6.0, 5.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 33.8, 27.9, 32.9, 34.2, 38.8, 'DNP', 'DNP', 'BYE', 39.0, 24.6, 18.2, 21.6, 21.0, 29.7, 24.5, 32.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 14.6,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 8,
    "avg_fp2": 11.22,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.14,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Inactive Sunday",
    "report": "Singletary is inactive  for Sunday's game against the Jets.",
    "analysis": "John Brown, Cole Beasley and Dawson Knox will also sit this one out, with the Bills locked into their No. 5 playoff seed.",
    "timestamp": "2019-12-29 08:36 AM",
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
    "week14": 15.8,
    "week15": 7.9,
    "week16": 5.3,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5, 6.5, 8.7, 11.9, 17.6, 15.8, 7.9, 5.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 16.2, 10.2, 12.9, 11.2, 7.9, 7.0, 11.5, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 14.1, 'DNP', 'DNP', 'DNP', 'BYE', 8.4, 5.8, 7.5, 14.0, 6.2, 6.3, 5.1, 6.4, 11.8, 4.2, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.1, 15.7, 'DNP', 'DNP', 'DNP', 'BYE', 9.9, 6.6, 8.5, 15.4, 18.7, 23.3, 18.5, 19.3, 19.6, 15.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 13.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 11,
    "avg_fp2": 12.11,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Cleared to play",
    "report": "Sanders (ankle) doesn't carry an injury designation for Sunday's playoff game against the Seahawks after practicing fully Friday.",
    "analysis": "Sanders previously stated that he'd play this weekend and that's been confirmed by the Eagles' final injury report in advance of Sunday's wild-card tilt. Look for the 2019 second-rounder to lead his team's rushing attack versus Seattle as long as his ankle holds up, with Boston Scott and Jordan Howard in the mix to spell him and log complementary/change-of-pace touches.",
    "timestamp": "2020-01-03 12:30 PM",
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
    "week14": 8.9,
    "week15": 32.2,
    "week16": 24.1,
    "week17": 6.6
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE', 5.7, 10.1, 19.0, 8.9, 32.2, 24.1, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 8.6, 'BYE', 6.2, 12.4, 10.0, 15.1, 15.7, 7.1, 11.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 11.6, 11.4, 11.9, 6.3, 6.3, 5.2, 2.2, 4.4, 'BYE', 3.1, 4.6, 5.2, 1.1, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.0, 12.4, 12.1, 12.7, 7.0, 6.8, 14.8, 15.5, 21.7, 'BYE', 22.0, 23.4, 22.3, 20.5, 19.5, 19.5, 33.6]
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
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 18,
    "avg_fp2": 9.18,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
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
    "headlineNews": "Solid in Week 17 loss",
    "report": "Michel (illness) rushed 18 times for 74 yards and a touchdown in the Patriots' 27-24 loss to the Dolphins on Sunday.",
    "analysis": "Michel was a late addition to the injury report Saturday due to an illness, but he toughed it out Sunday and was solid while spearheading the ground attack. The second-year back heads into next weekend's wild-card matchup against the Titans having gained between Sunday's 74 yards and 96 yards over the last three contests. It's also worth noting Michel's late-second-quarter four-yard rushing score was his first touchdown since Week 7, breaking an eight-game drought.",
    "timestamp": "2019-12-29 07:02 PM",
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
    "week14": 1.4,
    "week15": 10.8,
    "week16": 10.6,
    "week17": 13.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE', 5.4, 8.5, 4.5, 1.4, 10.8, 10.6, 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.5, 'BYE', 15.4, 12.4, 13.1, 10.4, 9.7, 6.6, 11.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 2.0, 0.1, 3.6, 1.6, 3.2, 0.0, 3.3, 0.0, 'BYE', 2.6, 4.7, 1.7, 3.0, 3.1, 0.8, 4.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 26.6, 18.0, 11.4, 23.2, 26.1, 22.6, 22.5, 25.3, 'BYE', 6.3, 20.2, 20.9, 19.4, 24.2, 13.0, 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 12.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 3,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.91,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Wins rushing title",
    "report": "Henry recorded 32 carries for 211 yards and three touchdowns in the team's Week 17 win over the Texans.",
    "analysis": "Henry concluded the regular season with a monstrous performance, surpassing 200 yards for the first time this season while also finding the end zone from three, one and 53 yards away. All told, he closed the campaign with 1,540 yards on the ground, good enough to win the NFL rushing title. Though his focus will be on the Titans' first round playoff matchup against New England, Henry will also be in line for a big payday this offseason as he is set to become a free agent. No matter where he lands, Henry has proven to be a workhorse back and should continue to see plenty of touches in 2020 and beyond.",
    "timestamp": "2019-12-29 06:11 PM",
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
    "week17": 39.1
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0, 22.1, 23.4, 8.6, 'DNP', 39.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.4, 12.0, 'BYE', 16.6, 7.7, 13.5, 20.2, 'DNP', 15.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.7, 9.6, 0.5, 15.1, 7.1, 2.4, 2.6, 5.1, 1.0, 'BYE', 8.5, 0.0, 6.9, 5.2, 'DNP', 6.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 30.6, 28.8, 34.3, 41.1, 23.0, 18.8, 19.8, 21.0, 26.3, 'BYE', 31.3, 23.4, 25.2, 24.3, 'DNP', 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 11.9,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 6,
    "avg_fp2": 18.99,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.85,
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
    "headlineNews": "Practices fully",
    "report": "Cook (shoulder) practiced fully Wednesday.",
    "analysis": "As did Alexander Mattison (ankle), with Courtney Cronin of ESPN.com noting that the duo took their usual first  and second-team reps at practice Wednesday. With both Cook and Mattison slated to return to action in Sunday's wild-card game against the Saints, Mike Boone will drop down to third on the depth chart and may be phased out of the Vikings' offensive game plan.",
    "timestamp": "2020-01-01 01:28 PM",
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
    "week14": 14.5,
    "week15": 5.8,
    "week16": "DNP",
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6, 27.8, 14.2, 'BYE', 11.9, 14.5, 5.8, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 11.2, 16.7, 'BYE', 14.2, 16.2, 14.8, 'DNP', 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.0, 6.0, 18.1, 0.0, 14.1, 1.9, 4.7, 8.6, 8.5, 3.3, 5.1, 'BYE', 8.9, 9.4, 2.7, 'DNP', 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 10.4, 28.3, 18.1, 29.1, 27.6, 27.6, 32.2, 34.6, 18.1, 36.3, 'BYE', 21.7, 31.0, 20.5, 'DNP', 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4037457.png",
    "name": "Travis Homer",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 10.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 4,
    "avg_fp2": 1.41,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.51,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.0,
    "week11": "BYE",
    "week12": 0.0,
    "week13": 2.9,
    "week14": 0.0,
    "week15": 0.7,
    "week16": 7.2,
    "week17": 11.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.0, 2.9, 0.0, 0.7, 7.2, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.6, 'DNP', 'DNP', 2.2, 'DNP', 'DNP', 'DNP', 0.2, 'BYE', 1.8, 0.8, 1.9, 3.0, 1.7, 1.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.2, 'DNP', 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 0.7, 'BYE', 1.0, 0.9, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 1.5, 'DNP', 'DNP', 1.6, 'DNP', 'DNP', 'DNP', 1.2, 'BYE', 1.2, 1.2, 3.9, 3.3, 3.0, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 8.5,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 9,
    "avg_fp2": 9.28,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.21,
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
    "headlineNews": "One series and done",
    "report": "Hyde had four carries for 13 yards and was not targeted in Sunday's 35-14 loss to the Titans.",
    "analysis": "Hyde was one of several skill position players given a light workload in the regular-season finale. He started and played just five snaps on Houston's first series before heading to the bench for the day. Hyde will resume his role as the Texans' lead back in Saturday's wild-card game against the Bills, who ranked 10th against the run in 2019.",
    "timestamp": "2019-12-31 04:41 AM",
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
    "week14": 8.8,
    "week15": 16.4,
    "week16": 10.2,
    "week17": 1.3
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE', 12.5, 6.7, 2.7, 8.8, 16.4, 10.2, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 6.8, 'BYE', 11.5, 6.5, 8.0, 11.2, 15.9, 6.8, 11.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.4, 5.9, 2.7, 5.0, 5.8, 7.1, 5.2, 2.9, 'BYE', 2.2, 5.3, 9.4, 7.6, 4.5, 5.5, 8.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 7.0, 23.7, 14.8, 21.7, 12.9, 15.7, 14.3, 15.2, 'BYE', 15.2, 14.1, 13.5, 18.2, 14.4, 16.4, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 7.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 16,
    "avg_fp2": 8.76,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.61,
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
    "headlineNews": "Logs 18 touches in rout of Panthers",
    "report": "Murray carried 17 times for 61 yards, adding a 14-yard reception in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "As expected, Murray had his way with the Panthers' poor run defense, managing 75 total yards on the day. He out-touched Alvin Kamara by a comfortable margin, though most of his work came with the game well in hand for New Orleans. Murray closes out his first year as a Saint with 872 total yards and six total touchdowns.",
    "timestamp": "2019-12-29 03:32 PM",
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
    "week14": 10.4,
    "week15": 5.9,
    "week16": 3.5,
    "week17": 8.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE', 2.9, 4.2, 12.4, 0.2, 10.4, 5.9, 3.5, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.3, 3.9, 5.2, 5.7, 4.8, 6.9, 5.7, 'BYE', 7.5, 2.6, 8.9, 8.3, 4.9, 6.3, 4.8, 9.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 6.8, 1.8, 0.0, 0.0, 0.5, 2.5, 2.4, 'BYE', 2.6, 1.3, 3.0, 0.1, 0.0, 1.0, 0.3, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 19.6, 12.2, 13.9, 7.1, 11.7, 19.7, 12.7, 'BYE', 17.6, 11.1, 8.6, 11.3, 17.8, 10.6, 8.2, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10456.png",
    "name": "Marshawn Lynch",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 6.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 4,
    "avg_fp2": 11.92,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.51,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Punches in fourth-quarter score",
    "report": "Lynch rushed 12 times for 34 yards and a touchdown in Sunday's 26-21 loss to the 49ers.",
    "analysis": "Lynch got on the field for the first time since Week 6 of 2018, and he donned the Seahawks jersey for the first time since 2015. Beast Mode brought energy to the lineup but wasn't efficient, recording 2.8 yards per carry. However, Lynch showed a flash from the past as he was brought in for a goal-line run in which he hopped over a pile to score the team's second touchdown of the game. Rookie Travis Homer shared the backfield with Lynch, generating 62 yards on 10 carries, and the shared backfield figures to continue in next Sunday's wild-card round matchup against the Eagles.",
    "timestamp": "2019-12-29 08:52 PM",
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
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051439.png",
    "name": "Boston Scott",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 11,
    "avg_fp2": 7.72,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
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
    "headlineNews": "Three TDs in Week 17",
    "report": "Scott carried the ball 19 times for 54 yards and three touchdowns and caught four of six targets for 84 yards in Sunday's 34-17 win over the Giants.",
    "analysis": "Miles Sanders left the game in the second quarter with an ankle injury and did not return, but even with Jordan Howard back in the lineup, it was Scott who stepped up and led the team in both rushing and receiving yards while scoring three red-zone TDs in the second half as the Eagles broke the game open. With the NFC East title now in hand and a wild-card battle against the Seahawks ahead next weekend, Scott could again have a significant role in the offense if Sanders isn't 100 percent.",
    "timestamp": "2019-12-29 08:41 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 3.0,
    "week07": 4.2,
    "week08": 4.6,
    "week09": "DNP",
    "week10": "BYE",
    "week11": 2.6,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 21.8,
    "week15": 10.0,
    "week16": 4.9,
    "week17": 33.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 4.2, 4.6, 'DNP', 'BYE', 2.6, 0.0, 0.0, 21.8, 10.0, 4.9, 33.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.8, 6.1, 3.6, 'DNP', 'BYE', 0.6, 3.5, 0.7, 2.4, 3.8, 3.6, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 2.0, 2.1, 'DNP', 'BYE', 1.9, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 2.4, 2.6, 'DNP', 'BYE', 2.2, 3.7, 3.7, 3.9, 10.2, 7.0, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 18,
    "avg_fp2": 10.95,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Receiving TD in Week 17 loss",
    "report": "White rushed twice for four yards and secured all three targets for 33 yards and a touchdown in the Patriots' 27-24 loss to the Dolphins on Sunday.",
    "analysis": "White played a typically minor role in the running game, but he salvaged his day from a fantasy perspective with his fifth receiving score of the season in the fourth quarter. The versatile back finished the regular season with multiple catches in all but one of his 15 games and will look to play his usual complementary role in next weekend's wild-card matchup against the Titans.",
    "timestamp": "2019-12-29 07:19 PM",
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
    "week14": 9.9,
    "week15": 13.7,
    "week16": 4.9,
    "week17": 9.28
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE', 7.6, 0.4, 33.7, 9.9, 13.7, 4.9, 9.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 11.7, 'DNP', 5.4, 8.8, 8.1, 4.8, 4.8, 4.5, 'BYE', 9.1, 7.6, 6.8, 7.5, 6.1, 4.8, 7.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 2.3, 'DNP', 2.3, 8.3, 7.3, 6.4, 6.7, 8.5, 'BYE', 7.6, 7.8, 1.6, 2.2, 6.9, 3.0, 8.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.2, 'DNP', 16.0, 14.0, 18.7, 11.2, 17.1, 14.3, 'BYE', 14.9, 11.9, 14.6, 30.4, 22.1, 26.4, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 6.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 9,
    "avg_fp2": 8.25,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.21,
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
    "headlineNews": "Finds end zone",
    "report": "Johnson carried the ball four times for 12 yards in the team's Week 17 loss to the Titans. He added five catches for 45 yards.",
    "analysis": "Johnson played a key role in the Texans' first scoring drive, rushing for nine yards and a touchdown while also chipping in a 14-yard reception. He went on contribute in the passing game, recording receptions of seven, eight and 13 yards. Though he managed only 127 touches on the season, Johnson set a new career high with 410 yards on the ground in his first season in Houston. Though it's unlikely the team won't add depth to the backfield, Johnson may have a chance for an increased role in the 2020 season if Hyde is not re-signed as a free agent. For now, however, Johnson's focus will remain on the playoffs, as the Texans are set to square off against Buffalo in the first round.",
    "timestamp": "2019-12-29 06:37 PM",
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
    "week14": 7.5,
    "week15": 3.3,
    "week16": 0.1,
    "week17": 14.2
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE', 5.4, 3.5, 17.5, 7.5, 3.3, 0.1, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.2, 'BYE', 6.7, 6.1, 7.5, 8.1, 11.1, 5.3, 7.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.4, 2.4, 4.1, 4.3, 4.4, 4.2, 4.3, 3.0, 'BYE', 2.6, 2.0, 2.8, 6.3, 4.2, 5.7, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 11.3, 12.7, 18.2, 8.8, 13.8, 11.6, 14.9, 9.8, 'BYE', 10.4, 6.6, 11.2, 13.2, 7.8, 19.8, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 5.4,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 8,
    "avg_fp2": 5.53,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.14,
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
    "headlineNews": "Adds more yards to historic career",
    "report": "Gore rushed six times for 26 yards and caught three of four targets for another 16 yards in Sunday's 13-6 loss to the Jets.",
    "analysis": "Gore will serve as the No. 2 running back behind Devin Singletary when the Bills travel to Houston for the wild-card round. The 36-year-old running back finishes what could be the final regular season of his outstanding career with 599 yards and two touchdowns on 166 carries and 100 receiving yards on 13 catches. If Gore retires after this season, he'll finish third on the league's all-time rushing list behind only Emmitt Smith and Walter Payton.",
    "timestamp": "2019-12-29 01:21 PM",
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
    "week13": 3.0,
    "week14": 0.6,
    "week15": 1.5,
    "week16": 0.0,
    "week17": 5.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 15.3, 15.9, 10.9, 7.9, 'BYE', 7.1, 3.4, 1.5, 2.1, 5.0, 6.5, 3.0, 0.6, 1.5, 0.0, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 3.9, 11.7, 7.2, 6.5, 'BYE', 8.6, 11.3, 10.5, 4.6, 4.9, 5.2, 5.7, 3.6, 3.3, 5.2, 3.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.9, 4.2, 5.3, 4.3, 5.6, 'BYE', 11.7, 6.1, 5.6, 2.2, 1.1, 2.9, 1.3, 2.4, 1.2, 0.2, 0.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 12.3, 16.5, 13.4, 13.7, 'BYE', 17.1, 10.9, 14.2, 7.5, 13.0, 8.0, 7.2, 7.3, 6.9, 7.2, 9.2]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 20.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 18.76,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$8900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Returns to full practice",
    "report": "Thomas (hand) practiced fully Thursday, Mike Triplett of ESPN.com reports.",
    "analysis": "Thomas was limited at practice Wednesday, but his return to a full session Thursday puts the NFL's leading receiver on track to play Sunday against the Vikings and handle his usual high-volume role. The 2016 second-rounder set an NFL record this past season by racking up 149 receptions, which he parlayed into 1,725 yards and nine TDs.",
    "timestamp": "2020-01-02 02:19 PM",
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
    "week14": 24.9,
    "week15": 24.8,
    "week16": 25.6,
    "week17": 5.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7, 21.4, 21.1, 7.8, 24.9, 24.8, 25.6, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 17.4, 23.6, 17.8, 15.7, 14.3, 19.5, 16.7, 13.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.0, 5.0, 1.3, 11.3, 6.9, 5.4, 9.1, 'BYE', 14.3, 11.8, 16.4, 12.3, 12.2, 12.6, 7.5, 13.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 16.9, 24.2, 17.0, 22.9, 28.4, 17.6, 24.3, 'BYE', 29.3, 27.1, 23.3, 27.3, 19.0, 26.7, 16.4, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 14.2,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 8,
    "avg_fp2": 12.9,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.12,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Listed as questionable",
    "report": "Edelman (knee/shoulder) is one of six New England players listed as questionable for Saturday night's playoff game against the Titans after practicing in a limited fashion this week, Zack Cox of NESN.com reports.",
    "analysis": "That said, the report notes that Edelman, who has battled his share of aches and pains of late, indicated Thursday in a radio interview the he feels \"better than (he has) in the last few weeks.\" With that in mind, we have little doubt that the Patriots' top pass catcher will be available this weekend, an outcome that will be confirmed about 90 minutes prior to Saturday night's 8:15 ET kickoff.",
    "timestamp": "2020-01-02 01:28 PM",
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
    "week14": 20.3,
    "week15": 1.9,
    "week16": 11.7,
    "week17": 4.18
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE', 12.4, 13.3, 18.9, 20.3, 1.9, 11.7, 4.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 12.1, 'BYE', 9.9, 9.0, 9.2, 10.3, 10.7, 11.1, 20.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.9, 6.8, 4.7, 8.0, 9.1, 11.5, 11.6, 10.8, 11.0, 'BYE', 11.1, 11.2, 11.2, 14.6, 14.7, 1.9, 2.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 21.8, 18.5, 16.6, 23.6, 19.8, 14.8, 21.1, 18.3, 'BYE', 17.5, 18.6, 19.7, 23.9, 23.9, 13.6, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 13.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.48,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Doesn't leave bench in finale",
    "report": "Hopkins did not play in Sunday's 35-14 loss to the Titans in Week 17.",
    "analysis": "Texans head coach Bill O'Brien sat many regulars, including several that didn't dress. Hopkins developed an illness during the practice week, and the coach felt no need to expose him in what turned out to be a meaningless game for Houston.",
    "timestamp": "2019-12-30 04:39 PM",
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
    "week14": 22.7,
    "week15": 14.9,
    "week16": 4.8,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4, 15.4, 'BYE', 11.5, 24.4, 13.14, 22.7, 14.9, 4.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 12.9, 'BYE', 13.1, 17.4, 14.0, 14.5, 11.2, 19.2, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 5.6, 7.6, 7.4, 6.3, 2.7, 8.0, 10.7, 14.7, 'BYE', 14.6, 11.4, 12.3, 8.3, 13.1, 9.4, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 22.6, 28.2, 15.2, 13.8, 31.8, 24.3, 18.6, 23.8, 'BYE', 24.2, 20.7, 26.0, 19.5, 26.1, 20.6, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 12.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 23,
    "avg_fp2": 12.03,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 31.82,
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
    "headlineNews": "Lone bright spot in loss",
    "report": "Diggs caught three of four targets for 57 yards and a touchdown in Monday's 23-10 loss to the Packers. He also threw an incomplete pass on a failed trick play.",
    "analysis": "Diggs gave his team a 10-3 lead with a 21-yard touchdown in the second quarter, but it was all downhill from there, as Green Bay scored the next 20 points. He easily led the Vikings in receiving yards, as no teammate finished with more than 31. The 26-year-old receiver has 1,130 yards and six touchdowns heading into the Week 17 finale against Chicago, with half of those touchdowns coming in Week 6 against the Eagles.",
    "timestamp": "2019-12-23 08:34 PM",
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
    "week14": 12.2,
    "week15": 10.0,
    "week16": 13.2,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4, 20.6, 'BYE', 7.2, 12.2, 10.0, 13.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5, 'BYE', 14.7, 17.7, 15.0, 15.9, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 15.2, 8.6, 2.5, 2.2, 2.3, 5.7, 8.7, 3.0, 0.4, 4.7, 'BYE', 5.3, 2.5, 6.4, 5.3, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.8, 28.1, 20.6, 14.2, 13.7, 19.7, 15.9, 19.8, 21.0, 11.7, 11.8, 'BYE', 18.4, 16.2, 16.9, 16.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 9.8,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 26,
    "avg_fp2": 12.25,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.76,
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
    "headlineNews": "Won't play Sunday",
    "report": "Brown is inactive  for Sunday's game against the Jets.",
    "analysis": "As is Cole Beasley, with the Bills resting several key players, which sets the stage for Isaiah McKenzie, Robert Foster and Duke Williams to handle the team's Week 17 wideout duties.",
    "timestamp": "2019-12-29 08:42 AM",
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
    "week14": 4.1,
    "week15": 13.4,
    "week16": 12.1,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6, 10.2, 30.2, 10.9, 9.22, 4.1, 13.4, 12.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 9.2, 6.7, 10.8, 11.7, 6.8, 8.3, 7.3, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 0.0, 1.0, 0.7, 0.0, 'BYE', 0.2, 7.8, 5.7, 2.7, 5.3, 2.9, 3.8, 2.9, 4.9, 9.0, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.2, 8.4, 6.4, 8.3, 'BYE', 8.9, 18.9, 16.9, 14.2, 11.3, 14.1, 21.2, 20.0, 21.5, 15.2, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 9.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 21,
    "avg_fp2": 11.94,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 20.18,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Tops 100 yards and finds end zone",
    "report": "Brown hauled in four of his eight targets for 124 yards and a touchdown in the team's Week 17 win over the Texans.",
    "analysis": "Brown recorded his fourth 100-yard receiving effort in his past six games, launching him past 1,000 yards in his rookie campaign. His impressive late-season surge was highlighted by a number of big plays, and he delivered again in Week 17 by finding the end zone on a 51-yard catch and run early in the first quarter. A key member of the Titans' playoff push, Brown is the clear leader of the team's receiving corps heading into a tough matchup against New England in the wild card round of the playoffs. Looking ahead, Brown will enter his second professional season with massive expectations, looking to build on his 52-reception and eight-touchdown inaugural campaign.",
    "timestamp": "2019-12-29 06:26 PM",
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
    "week17": 20.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5, 6.0, 31.1, 21.4, 14.8, 20.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 10.2, 7.4, 'BYE', 8.3, 16.4, 6.1, 10.0, 11.7, 16.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 7.8, 7.0, 6.1, 7.5, 7.0, 0.5, 2.1, 3.5, 5.0, 'BYE', 0.0, 0.0, 0.8, 0.0, 0.0, 5.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 9.1, 7.5, 6.9, 8.5, 7.7, 10.2, 7.6, 13.2, 13.9, 'BYE', 11.4, 10.9, 6.1, 23.9, 32.9, 32.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 9.3,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 23,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 31.82,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "May not play against Chicago",
    "report": "Thielen doesn't know how much he'll play this week against the Bears or whether he'll play at all, the team's official web site reports. \"We don't know. The coaches aren't going to tell us [if we're playing],\" Thielen said.",
    "analysis": "With the Vikings locked into the No. 6 playoff seed, there's nothing to play for this week against Chicago. Head coach Mike Zimmer hasn't said whether he'll rest his starters and may not announce a decision until kickoff. Thielen didn't have a catch last week against Green Bay, but said it wasn't due to his previously injured hamstring (which caused him to miss five games). The Vikings may want to give him another week of rest, but Thielen could also use the work since he's been out of sync the last two games with just three receptions for 27 yards.",
    "timestamp": "2019-12-26 05:54 PM",
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
    "week14": "DNP",
    "week15": 4.5,
    "week16": 0.2,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 4.5, 0.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.7, 12.1, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.6, 0.0, 0.0, 3.6, 13.1, 4.7, 'DNP', 5.1, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.5, 2.1, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 17.7, 19.7, 20.5, 22.0, 21.9, 18.1, 'DNP', 14.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 15.1, 8.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 8.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 14,
    "avg_fp2": 12.14,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.16,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Bounces back against 49ers",
    "report": "Lockett caught six of seven targets for 51 yards and a touchdown in Sunday's 26-21 loss to the 49ers.",
    "analysis": "The second half of Lockett's season has been bumpy, but this game can be considered a success. Lockett surpassed 50 receiving yards for just the second time since Week 9. The 27-year-old's regular season ends with 82 catches for a career-high 1,057 yards and eight touchdowns. Lockett will look to build on this effort in the wild-card round, as the Seahawks travel to Philadelphia next Sunday.",
    "timestamp": "2019-12-29 08:38 PM",
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
    "week14": 6.3,
    "week15": 22.0,
    "week16": 1.7,
    "week17": 14.1
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7, 4.4, 'BYE', 4.3, 0.0, 6.3, 22.0, 1.7, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 15.6, 12.1, 'BYE', 8.9, 12.7, 9.9, 11.6, 14.8, 11.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.8, 6.0, 4.8, 0.0, 1.9, 3.8, 8.1, 3.9, 11.7, 10.7, 'BYE', 6.5, 3.4, 1.7, 5.0, 5.6, 5.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 15.5, 12.9, 16.1, 18.3, 13.8, 14.4, 22.3, 23.1, 20.2, 'BYE', 20.3, 18.0, 13.3, 12.3, 18.7, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 8.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 9.95,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 23.48,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Game-time decision Saturday",
    "report": "Fuller (groin) is listed as questionable for Saturday's playoff game against the Bills after logging limited practices this week.",
    "analysis": "Official confirmation of the wideout's status will arrive approximately 90 minutes prior to Saturday afternoon's 4:35 ET kickoff, but Fuller is viewed by coach Bill O'Brien as a game-time decision for the contest, while James Palmer of NFL Network relays that he's been \"told by multiple sources that it's going to be a real long shot for Fuller to play.\" If the speedy pass catcher ends up ruled out this weekend, Kenny Stills -- who does not carry an injury designation -- would be in line to start opposite DeAndre Hopkins.",
    "timestamp": "2020-01-02 01:42 PM",
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
    "week14": "DNP",
    "week15": 8.6,
    "week16": 2.1,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 6.0, 7.6, 3.8, 46.7, 6.9, 1.1, 'DNP', 'DNP', 'BYE', 'DNP', 17.5, 1.3, 'DNP', 8.6, 2.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.9, 5.6, 7.4, 9.4, 6.7, 10.0, 'DNP', 'DNP', 'BYE', 'DNP', 10.0, 5.4, 'DNP', 5.2, 11.0, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 2.4, 10.9, 2.9, 1.7, 0.0, 1.3, 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 4.8, 'DNP', 0.0, 4.8, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.8, 20.9, 25.6, 16.6, 8.7, 42.1, 22.0, 'DNP', 'DNP', 'BYE', 'DNP', 24.0, 20.0, 'DNP', 13.2, 13.8, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 7.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 6.24,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
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
    "headlineNews": "Biggest game of the season",
    "report": "Smith caught all five of his targets for 56 yards and a touchdown in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "Smith ends the regular season with his highest receiving output of the 2019 campaign. In the final eight games of the season, Smith produced 13 receptions for 159 receiving yards and four touchdowns, including three scores in the final four weeks. Despite the lowly production on the year, Smith has developed into a trusted red-zone option for Drew Brees.",
    "timestamp": "2019-12-29 06:26 PM",
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
    "week14": 9.9,
    "week15": 8.6,
    "week16": 1.8,
    "week17": 14.1
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.8, 0.0, 7.8, 2.4, 9.9, 8.6, 1.8, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.0, 9.9, 5.7, 3.7, 5.4, 9.7, 5.3, 3.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 0.0, 0.3, 0.0, 0.5, 0.0, 0.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.4, 10.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 25.0, 18.9, 7.6, 4.9, 27.8, 14.4, 14.7, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.4,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 26,
    "avg_fp2": 10.09,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.76,
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
    "headlineNews": "Out for Week 17",
    "report": "Beasley is among the inactives for Sunday's regular-season finale against the Jets, Chris Brown of the Bills' official site reports.",
    "analysis": "Buffalo is locked into the No. 5 seed in the AFC and several of the team's veteran starters aren't even suiting up. Get Beasley out of your lineup, and overall, Buffalo seems like one of those teams in a boat you're better off avoiding from a fantasy standpoint this week.",
    "timestamp": "2019-12-29 08:51 AM",
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
    "week13": 20.0,
    "week14": 12.9,
    "week15": 1.1,
    "week16": 14.3,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 10.3, 10.8, 11.0, 3.6, 'BYE', 9.1, 11.6, 8.3, 9.4, 5.8, 16.6, 20.0, 12.9, 1.1, 14.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.5, 8.2, 5.5, 6.2, 'BYE', 6.2, 4.4, 6.9, 6.4, 4.1, 7.0, 7.4, 3.9, 8.3, 6.4, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 5.2, 3.3, 0.0, 4.6, 'BYE', 2.5, 0.6, 1.2, 4.9, 4.9, 5.0, 4.1, 1.5, 6.9, 3.6, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 10.9, 12.1, 23.6, 17.4, 'BYE', 16.6, 11.4, 18.8, 10.9, 13.9, 10.5, 9.5, 15.5, 18.1, 18.9, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10453.png",
    "name": "Ted Ginn",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 5.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 4.43,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Catches one pass in blowout win",
    "report": "Ginn caught one of two targets for 10 yards in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "It was a disappointing yet unsurprising end of the season for Ginn. A boom-or-bust option all year, he finished his third season in New Orleans with a 30/421/2 receiving line, aided by a seven-catch, 101-yard effort in Week 1.",
    "timestamp": "2019-12-29 06:29 PM",
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
    "week13": 0.0,
    "week14": 7.0,
    "week15": 1.8,
    "week16": 0.0,
    "week17": 1.5
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 0.0, 2.5, 3.4, 10.6, 5.8, 5.8, 5.2, 'BYE', 0.5, 8.4, 4.8, 0.0, 7.0, 1.8, 0.0, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.3, 4.2, 5.3, 8.0, 5.7, 4.7, 7.5, 'BYE', 7.2, 7.9, 4.7, 4.8, 4.2, 8.1, 6.4, 2.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.3, 3.3, 6.6, 3.8, 4.3, 3.5, 4.4, 5.2, 'BYE', 5.2, 2.2, 1.7, 0.9, 0.0, 2.8, 2.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.5, 12.6, 8.0, 7.3, 13.3, 6.7, 15.4, 'BYE', 11.4, 7.7, 8.2, 7.0, 10.3, 8.3, 7.0, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042373.png",
    "name": "Robert Davis",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 5.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.33,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Catches lone target in win",
    "report": "Davis caught his only target for a six-yard gain in Sunday's 17-9 win over the Cowboys.",
    "analysis": "Davis' only catch of the game got the Eagles a new set of downs on the way to their first touchdown of the day in the first quarter. He played a season high 29 offensive snaps in the victory, third-most among Eagles receivers.",
    "timestamp": "2019-12-23 03:38 PM",
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
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212909.png",
    "name": "David Moore",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 5.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 14,
    "avg_fp2": 3.65,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.16,
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
    "headlineNews": "Snags two passes",
    "report": "Moore caught both his targets for 30 yards in Sunday's 26-21 loss to the 49ers.",
    "analysis": "The third-year pro moved into the No. 3 wideout role with Malik Turner (concussion) inactive, but the results weren't anything to write home about. For the fourth straight game, Moore failed to surpass 30 receiving yards or find paydirt, though he had a touchdown called back for offensive holding in the second half. If Turner returns for Sunday's wild-card game against the Eagles, Moore's usage will likely be limited again.",
    "timestamp": "2019-12-30 07:35 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.4,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 2.8,
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 4.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.0, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.8, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 17.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.6, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.9]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 11.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 7.71,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.13,
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
    "headlineNews": "Tallies 65 yards in Week 17 win",
    "report": "Goedert caught four of 10 targets for 65 yards in Sunday's 34-17 win over the Giants.",
    "analysis": "As expected with Zach Ertz (ribs) sidelined, Goedert was Carson Wentz's favorite option in the passing game, but the second-year tight end wasn't able to turn that volume into a particularly impressive performance. He's still seen double-digit targets in back-to-back games, and if Ertz remains out -- or even just less than 100 percent -- for next weekend's wild-card game against the Seahawks, Goedert figures to see a heavy workload once again.",
    "timestamp": "2019-12-29 08:52 PM",
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
    "week14": 5.6,
    "week15": 8.0,
    "week16": 19.6,
    "week17": 8.5
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE', 11.1, 4.7, 9.6, 5.6, 8.0, 19.6, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 'DNP', 5.9, 4.0, 4.1, 1.5, 4.3, 2.1, 3.6, 'BYE', 5.5, 5.5, 6.1, 4.5, 4.0, 10.7, 7.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.3, 'BYE', 3.8, 0.0, 1.9, 0.0, 0.6, 0.0, 3.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 'DNP', 18.2, 17.7, 17.6, 17.9, 18.2, 14.7, 16.0, 'BYE', 10.8, 10.0, 5.7, 5.5, 9.7, 13.2, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 9.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 11.44,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.13,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Listed as questionable",
    "report": "Ertz (ribs/back) is listed as questionable for Sunday's playoff game against the Seahawks after practicing in a limited fashion this week.",
    "analysis": "As of Friday, Ertz had yet to to be cleared for contact, with coach Doug Pederson noting that the Eagles are awaiting word \"on a few doctor results (Saturday). If things go favorable, (Ertz) will play and if they don't, he won't.\" If the tight end isn't cleared to suit up, or ends up being limited Sunday, added looks would be available for the capable Dallas Goedert.",
    "timestamp": "2020-01-03 12:39 PM",
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
    "week14": 25.6,
    "week15": 14.6,
    "week16": 4.8,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0, 20.8, 'BYE', 13.9, 21.1, 3.9, 25.6, 14.6, 4.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 9.3, 'BYE', 11.1, 10.6, 9.1, 9.4, 9.2, 19.0, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.7, 4.7, 4.5, 6.4, 7.3, 1.5, 6.6, 2.4, 3.9, 'BYE', 5.3, 8.2, 11.6, 10.8, 7.6, 7.1, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 11.2, 19.6, 13.1, 14.2, 17.4, 12.7, 10.1, 10.6, 'BYE', 18.6, 19.1, 18.2, 16.6, 14.6, 14.1, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 9.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 8,
    "avg_fp2": 2.5,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.14,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Catches three passes in Week 16",
    "report": "Watson logged 31 of a possible 73 snaps on offense in Saturday's 24-17 win over the Bills, en route to catching all three of his targets for 15 yards.",
    "analysis": "Fellow tight end Matt LaCosse saw 46 snaps in the contest and turned his only target into an eight-yard TD. Neither player is a high-percentage fantasy option Week 17 or in the looming NFL postseason.",
    "timestamp": "2019-12-22 01:57 PM",
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
    "week14": 1.2,
    "week15": 0.0,
    "week16": 3.0,
    "week17": 0.86
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE', 6.7, 0.0, 2.8, 1.2, 0.0, 3.0, 0.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 4.6, 8.9, 7.4, 4.2, 2.3, 3.1, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.9, 'BYE', 1.4, 3.9, 2.2, 3.0, 0.7, 1.1, 0.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 'BYE', 7.6, 9.4, 11.2, 7.8, 8.1, 5.1, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 9.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 14,
    "avg_fp2": 6.67,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 7.42,
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
    "headlineNews": "Inches from NFC West title",
    "report": "Hollister caught four of eight targets for 25 yards in Sunday's 26-21 loss to the 49ers.",
    "analysis": "Hollister was second on the team in targets behind DK Metcalf (12), but it's the play he couldn't make that will be remembered from this contest. With the Seahawks down to their last snap and needing a touchdown to win not only the game but the NFC West title, Russell Wilson fired a pass to Hollister just short of the goal line, and he was unable to gain the missing inches as he was brought down. The tight end has now gone six straight games without a touchdown, averaging four catches for 35.3 receiving yards per game in that span. Seattle travels to Philadelphia for a wild-card clash Sunday, and Hollister will likely remain a secondary option for Wilson in the passing attack.",
    "timestamp": "2019-12-30 08:08 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 3.5,
    "week08": 2.8,
    "week09": 17.7,
    "week10": 16.2,
    "week11": "BYE",
    "week12": 3.2,
    "week13": 7.4,
    "week14": 5.4,
    "week15": 3.8,
    "week16": 8.9,
    "week17": 4.5
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.5, 2.8, 17.7, 16.2, 'BYE', 3.2, 7.4, 5.4, 3.8, 8.9, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.2, 8.7, 1.9, 5.2, 'BYE', 6.3, 9.5, 6.3, 4.3, 6.1, 9.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 'BYE', 1.4, 0.0, 0.0, 0.2, 2.2, 2.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.2, 4.0, 4.4, 8.4, 'BYE', 20.2, 17.5, 12.6, 10.5, 19.4, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 7.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 7,
    "avg_fp2": 10.43,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.62,
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
    "headlineNews": "Scores in victory",
    "report": "Cook brought in both of his targets for 44 yards and a touchdown in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "Cook added yet another touchdown to his 2019 campaign, bringing his season total to a career-high nine. In his first year with New Orleans, the 11-year vet racked up 705 yards on 43 receptions, good for 16.4 yards per catch -- a career high. The big-bodied pass-catcher figures to be heavily involved in the Saints' offensive gameplan for the postseason.",
    "timestamp": "2019-12-29 03:38 PM",
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
    "week14": 19.4,
    "week15": 7.4,
    "week16": 21.9,
    "week17": 11.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4, 10.3, 18.9, 10.0, 19.4, 7.4, 21.9, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 9.4, 4.4, 5.2, 7.4, 7.2, 9.6, 9.0, 4.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 0.0, 3.5, 2.0, 2.7, 4.4, 'DNP', 'DNP', 'BYE', 3.2, 5.0, 3.2, 5.0, 3.8, 1.9, 5.1, 6.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 22.8, 9.0, 12.3, 9.4, 9.4, 'DNP', 'DNP', 'BYE', 8.1, 11.3, 10.4, 13.9, 14.7, 10.9, 10.1, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 6.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 21,
    "avg_fp2": 5.45,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.82,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Silent in Week 17",
    "report": "Smith was not targeted in the team's Week 17 win over the Texans. However, he did rush the ball once for seven yards.",
    "analysis": "Smith was held without a target for a second time this season, producing only seven yards of total offense. However, he was still on the field for 81 percent of the team's offensive snaps, well ahead of both MyCole Pruitt and Anthony Firkser. Smith will likely draw a bigger role in the team's wild-card matchup against New England on Saturday, and he'll look to capitalize on his ability to gain yards after the catch. He'll also have plenty of motivation to produce next season, as he's entering a contract year and could be in line to take over as the team's starting tight end if Delanie Walker (ankle) opts to retire.",
    "timestamp": "2020-01-02 05:43 PM",
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
    "week17": 0.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4, 1.0, 10.4, 14.2, 13.8, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 3.6, 7.7, 'BYE', 5.6, 8.6, 4.5, 6.9, 7.3, 4.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.9, 0.0, 2.5, 2.6, 0.0, 'BYE', 0.1, 0.0, 0.0, 0.6, 0.7, 6.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.5, 6.2, 8.2, 8.2, 4.5, 3.7, 11.0, 11.1, 13.1, 9.6, 'BYE', 3.4, 3.1, 2.8, 8.6, 12.6, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 6.0,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 23,
    "avg_fp2": 5.89,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.95,
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
    "headlineNews": "Pulls disappearing act on MNF",
    "report": "Rudolph secured one of two targets for seven yards in Monday's 23-10 loss to the Packers.",
    "analysis": "Rudolph went dormant along with the rest of Minnesota's offense besides Stefon Diggs, who had 57 yards and the team's lone touchdown. The veteran tight end will be a touchdown-dependent option against the Bears in Week 17, as he's found the end zone six times but has topped 40 yards in a game only four times.",
    "timestamp": "2019-12-23 08:51 PM",
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
    "week14": 2.1,
    "week15": 6.3,
    "week16": 1.2,
    "week17": 0.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4, 15.2, 'BYE', 13.0, 2.1, 6.3, 1.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 9.0, 5.2, 'BYE', 14.9, 12.7, 3.5, 7.8, 7.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 5.8, 2.9, 0.0, 0.8, 0.9, 3.4, 3.1, 2.1, 5.0, 3.0, 'BYE', 4.1, 3.0, 9.2, 1.5, 1.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 15.6, 13.1, 10.5, 7.0, 8.7, 11.5, 10.3, 15.4, 10.8, 13.9, 'BYE', 15.9, 11.1, 15.0, 8.7, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 5.0,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 26,
    "avg_fp2": 4.38,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 10.51,
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
    "headlineNews": "Won't play in Week 17",
    "report": "Knox (coach's decision) is inactive  for Sunday's game against the Jets.",
    "analysis": "As is running back Devin Singletary, as well as wide receivers John Brown and Cole Beasley, with the Bills resting several key players Sunday due to their playoff seeding being locked in.",
    "timestamp": "2019-12-29 08:52 AM",
    "week01": 0.6,
    "week02": 2.3,
    "week03": 15.1,
    "week04": 7.3,
    "week05": 2.2,
    "week06": "BYE",
    "week07": 3.2,
    "week08": 0.0,
    "week09": 2.4,
    "week10": 7.5,
    "week11": 10.2,
    "week12": 2.1,
    "week13": 3.2,
    "week14": 4.2,
    "week15": 1.6,
    "week16": 3.8,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 2.3, 15.1, 7.3, 2.2, 'BYE', 3.2, 0.0, 2.4, 7.5, 10.2, 2.1, 3.2, 4.2, 1.6, 3.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.9, 1.5, 5.0, 9.5, 'BYE', 3.3, 5.9, 0.8, 8.3, 12.0, 5.6, -0.2, 0.3, 4.9, 4.3, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.3, 4.2, 6.1, 5.9, 'BYE', 5.4, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.2, 5.3, 5.6, 6.8, 6.6, 'BYE', 6.3, 7.8, 6.4, 5.7, 6.5, 8.5, 7.4, 8.0, 5.5, 8.5, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 4.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 5.82,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 7.47,
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
    "headlineNews": "Three grabs in Week 16 win",
    "report": "Fells caught all three targets for 27 yards in Saturday's 23-20 win over Tampa Bay in Week 16.",
    "analysis": "One of Fells' targets was a red-zone catch for a 10-yard gain, but he went a third straight week without reaching the end zone. He's second among NFL tight ends with seven touchdowns, behind only the Ravens' Mark Andrews (eight). The three catches, his most since Week 8 against Oakland, gives him 34, three more than fellow tight end Jordan Akins.",
    "timestamp": "2019-12-22 04:51 AM",
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
    "week14": 1.2,
    "week15": 0.7,
    "week16": 4.2,
    "week17": 0.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE', 2.3, 2.9, 9.3, 1.2, 0.7, 4.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.6, 'BYE', 7.2, 4.2, 2.8, 4.0, 5.7, 3.5, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.2, 1.2, 0.0, 0.0, 2.6, 0.3, 0.4, 1.5, 'BYE', 4.1, 0.8, 1.9, 0.1, 0.8, 0.1, 0.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.5, 8.0, 13.7, 7.1, 7.7, 8.0, 5.4, 5.2, 4.2, 'BYE', 12.2, 5.1, 3.3, 7.9, 5.5, 11.8, 3.6]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 7.2,
    "opponent": "Houston Texans",
    "opp_rank_pts": 13,
    "opp_avg_pts": 23.81,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 15.5,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 8.25,
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
    "week14": 3.0,
    "week15": 18.0,
    "week16": 2.0,
    "week17": 8.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0, 10.0, 13.0, 11.0, 3.0, 18.0, 2.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 7.8, 9.1, 7.6, 4.9, 7.5, 7.8, 6.4, 9.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 1.9, 3.1, 3.5, 3.8, 'BYE', 7.1, 3.9, 5.0, 0.6, 2.6, 4.2, 1.0, 0.5, 5.6, 3.0, 4.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 10.5, 9.9, 10.4, 12.2, 'BYE', 18.1, 9.5, 12.0, 7.7, 13.6, 7.2, 8.1, 10.9, 10.5, 11.0, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 7.2,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 23,
    "opp_avg_pts": 19.75,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.5,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 5.12,
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
    "week14": 1.0,
    "week15": 8.0,
    "week16": 18.0,
    "week17": -4.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE', -3.0, 2.0, 5.0, 1.0, 8.0, 18.0, -4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.0, 'BYE', 4.6, 6.6, 5.8, 8.2, 4.6, 6.3, 7.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 3.4, 3.9, 6.5, 4.4, 0.9, 3.4, 1.5, 1.5, 'BYE', 0.0, 3.5, 5.8, 5.3, 5.0, 1.5, 4.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 8.9, 9.3, 10.5, 11.0, 9.3, 8.3, 7.4, 6.5, 'BYE', 9.5, 7.1, 10.4, 10.3, 8.0, 5.7, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 7.1,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 25.12,
    "home_away": "",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 13.69,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
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
    "avg_fp2": 11.0,
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
    "week14": 5.0,
    "week15": 14.0,
    "week16": 5.0,
    "week17": 2.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE', 11.0, 6.0, 2.0, 5.0, 14.0, 5.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.3, 'BYE', 8.3, 9.4, 7.0, 8.4, 8.3, 8.8, 8.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 2.0, 6.3, 3.0, 1.4, 10.5, 6.3, 7.5, 3.4, 'BYE', 4.2, 2.9, 3.9, 4.0, 6.5, 3.1, 8.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 11.0, 12.6, 9.2, 13.2, 15.8, 13.8, 15.6, 17.4, 'BYE', 7.9, 9.3, 7.6, 9.8, 13.2, 10.3, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 6.0,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 9,
    "opp_avg_pts": 25.31,
    "home_away": "",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.75,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.06,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.88,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 5.88,
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
    "week14": 3.0,
    "week15": 2.0,
    "week16": 8.0,
    "week17": 9.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE', 2.0, 11.0, 1.0, 3.0, 2.0, 8.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 8.9, 'BYE', 5.4, 7.0, 8.3, 9.7, 9.3, 7.1, 7.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 2.9, 1.9, 8.0, 0.0, 1.4, 4.4, 3.8, 6.9, 'BYE', 3.7, 3.7, 5.3, 6.0, 4.9, 1.5, 4.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 9.8, 11.1, 12.8, 14.8, 8.5, 13.1, 8.3, 9.4, 'BYE', 8.6, 7.6, 13.5, 12.9, 9.5, 7.9, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.0,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 8,
    "opp_avg_pts": 25.44,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.81,
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
    "avg_fp2": 7.56,
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
    "week14": 1.0,
    "week15": 5.0,
    "week16": 6.0,
    "week17": 12.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0, 11.0, 3.0, 16.0, 1.0, 5.0, 6.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2, 6.4, 7.8, 6.0, 5.7, 6.2, 6.6, 7.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.1, 4.7, 0.0, 2.7, 1.7, 3.8, 1.7, 'BYE', 3.5, 4.3, 3.9, 2.8, 1.8, 2.3, 4.4, 1.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 9.7, 9.1, 12.8, 7.0, 6.9, 14.4, 14.1, 'BYE', 11.9, 6.9, 8.5, 12.1, 8.5, 7.3, 6.7, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 5.7,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 12,
    "opp_avg_pts": 24.06,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.06,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 6.56,
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
    "week14": 5.0,
    "week15": 7.0,
    "week16": 6.0,
    "week17": 2.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0, 11.0, 'BYE', 19.0, 6.0, 5.0, 7.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 7.1, 7.1, 'BYE', 7.7, 6.9, 8.2, 7.9, 7.0, 6.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 2.1, 3.9, 5.0, 3.0, 4.2, 3.6, 3.5, 1.2, 0.0, 'BYE', 6.7, 2.3, 3.4, 4.6, 5.5, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 16.4, 7.7, 13.0, 6.9, 11.3, 9.4, 11.3, 6.1, 9.0, 'BYE', 11.4, 8.9, 10.1, 12.1, 9.8, 16.5]
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
    "opponent": "New England Patriots",
    "opp_rank_pts": 7,
    "opp_avg_pts": 26.12,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.69,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.06,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.94,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 7.19,
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
    "week17": 7.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0, 16.0, 4.0, 5.0, -1.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.4, 6.2, 'BYE', 7.1, 5.9, 6.9, 5.4, 5.2, 7.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 4.4, 6.6, 4.2, 5.3, 6.7, 6.0, 1.5, 5.7, 0.0, 'BYE', 6.5, 5.6, 4.8, 3.2, 0.6, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 9.0, 9.9, 10.1, 10.3, 9.9, 11.1, 6.7, 10.4, 6.2, 'BYE', 10.3, 9.1, 9.6, 7.3, 5.6, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 4.9,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.12,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.94,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.94,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 8.38,
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
    "week14": 13.0,
    "week15": 21.0,
    "week16": 9.0,
    "week17": 7.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0, 4.0, 'BYE', 2.0, 13.0, 21.0, 9.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.5, 8.0, 'BYE', 5.3, 7.7, 5.5, 7.1, 8.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 5.2, 3.7, 4.3, 6.7, 2.9, 4.4, 4.9, 4.7, 4.1, 5.2, 'BYE', 1.9, 3.6, 4.9, 3.7, 2.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 9.3, 10.2, 9.4, 9.9, 13.7, 9.7, 12.3, 8.1, 7.1, 13.8, 'BYE', 14.5, 10.9, 11.1, 8.3, 10.0]
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