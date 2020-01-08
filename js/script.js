d scvar App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 08 January 2020 11:05 AM (central time)"};
$scope.week = {"nflWeek": "Divisional Round"};

$scope.qbStartSit = {"one": "Patrick Mahomes", "two": "Lamar Jackson", "three": "Aaron Rodgers", "four": "Deshaun Watson", "five": "Russell Wilson", "six": "Ryan Tannehill", "seven": "Kirk Cousins", "eight": "Jimmy Garoppolo", "nine": "Russell Wilson", "ten": "Deshaun Watson"};
$scope.rbStartSit = {"one": "Carlos Hyde", "two": "Damien Williams", "three": "Aaron Jones", "four": "Marshawn Lynch", "five": "Mark Ingram", "six": "Derrick Henry", "seven": "Raheem Mostert", "eight": "Dalvin Cook", "nine": "Mark Ingram", "ten": "Marshawn Lynch"};
$scope.wrStartSit = {"one": "Tyreek Hill", "two": "Davante Adams", "three": "Emmanuel Sanders", "four": "Marquise Brown", "five": "A.J. Brown", "six": "Adam Thielen", "seven": "DeAndre Hopkins", "eight": "A.J. Brown", "nine": "Marquise Brown", "ten": "Emmanuel Sanders"};
$scope.teStartSit = {"one": "Travis Kelce", "two": "Mark Andrews", "three": "Jimmy Graham", "four": "Jacob Hollister", "five": "George Kittle", "six": "Kyle Rudolph", "seven": "Jonnu Smith", "eight": "Darren Fells", "nine": "George Kittle", "ten": "Jacob Hollister"};
$scope.dstStartSit = {"one": "Seattle Seahawks", "two": "Kansas City Chiefs", "three": "San Francisco 49ers", "four": "Baltimore Ravens", "five": "Green Bay Packers", "six": "Tennessee Titans", "seven": "Minnesota Vikings", "eight": "Houston Texans", "nine": "Green Bay Packers", "ten": "Baltimore Ravens"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 25.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 28.16,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.41,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Returns to field",
    "report": "Jackson (illness) returned to practice Thursday, Jamison Hensley of ESPN.com reports.",
    "analysis": "Jackson sat out practice Tuesday, but the QB has moved past a bout with the flu and will resume his preparations for the Ravens' Jan. 11 playoff opener versus an opponent to be determined by the results of this weekend's Wild Card round.",
    "timestamp": "2020-01-02 09:14 AM",
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
    "week14": 20.8,
    "week15": 37.08,
    "week16": 29.82,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62, 33.42, 33.48, 36.26, 22.3, 20.8, 37.08, 29.82, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 26.4, 21.0, 19.8, 20.9, 21.4, 27.8, 30.9, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.8, 7.1, 0.0, 17.8, 20.6, 18.5, 13.1, 'BYE', 11.5, 23.3, 21.4, 23.2, 22.2, 17.6, 21.1, 22.6, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.3, 32.2, 35.6, 22.1, 28.9, 27.5, 25.2, 'BYE', 28.0, 34.6, 25.7, 35.5, 39.5, 38.3, 37.8, 38.0, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 20.4,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 20.86,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.31,
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
    "headlineNews": "So-so in finale",
    "report": "Mahomes completed 16 of 25 passes for 174 yards, a touchdown and an interception during Sunday's 31-21 win over the Chargers. He added 21 yards on seven carries.",
    "analysis": "With the Chiefs scoring on a kick return and a long run, there were a diminished number of opportunities for Mahomes to make plays downfield. In fact, the Chiefs were trailing toward the end of the first half when Mahomes helped the team take the lead with a 24-yard dart to Demarcus Robinson. With a win and New England's loss, the Chiefs own the AFC No. 2 seed. They will play either the Patriots, Texans or Bills in the divisional round. Mahomes completed 60 percent of his passes in two games against the Patriots and Texans this season with 556 passing yards, four touchdowns and two picks. One thing to look for heading into the playoffs is Mahomes' touchdown rate. Mahomes accounted for 2.25 touchdown throws per game in his first eight starts. That's down to 1.3 in his last six starts, though he has run for two touchdowns during that span.",
    "timestamp": "2019-12-29 01:53 PM",
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
    "week17": 12.06
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5, 14.92, 23.7, 25.44, 12.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 24.5, 18.1, 'BYE', 21.5, 18.6, 24.0, 21.2, 20.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [17.7, 16.9, 17.6, 22.8, 18.8, 15.0, 14.1, 'DNP', 'DNP', 4.3, 19.8, 'BYE', 18.9, 6.5, 7.1, 15.3, 8.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [36.1, 23.4, 24.2, 34.0, 36.1, 31.4, 26.6, 'DNP', 'DNP', 29.9, 31.1, 'BYE', 32.6, 26.9, 34.2, 31.9, 33.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 20.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 17.77,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 17.87,
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
    "headlineNews": "Leads Packers to 13th win",
    "report": "Rodgers completed 27 of 55 pass attempts for 323 yards, two touchdowns and one interception in the team's Week 17 victory over Detroit.",
    "analysis": "Rodgers and the Packers got off to a slow start, falling behind the Lions by a score of 17-3. However, the veteran quarterback threw for 233 yards and a pair of touchdowns in the second half to earn a dramatic, last-second win. Though Rodgers appears unlikely to ever replicate his 40-touchdown campaigns, he closed the regular season with a pristine 26:4 TD:INT ratio and surpassed 4,000 passing yards for the third time in his last four seasons. Beyond individual statistics, he also led the Packers to the second seed in the NFC, giving them a bye during wild-card weekend.",
    "timestamp": "2019-12-29 03:45 PM",
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
    "week17": 20.02
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46, 28.12, 11.4, 14.42, 9.34, 20.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.1, 22.1, 'BYE', 12.9, 21.7, 22.5, 23.8, 15.3, 18.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 15.4, 20.3, 11.1, 15.5, 14.7, 16.1, 16.8, 14.6, 14.2, 'BYE', 16.1, 17.2, 13.6, 13.2, 13.7, 19.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.8, 26.8, 29.6, 25.0, 24.1, 24.8, 23.0, 28.7, 25.0, 31.5, 'BYE', 24.2, 31.8, 30.0, 21.1, 22.2, 26.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 19.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 22.3,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.27,
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
    "headlineNews": "Leads Texans to comeback win",
    "report": "Watson completed 20 of 25 passes for 247 yards and a touchdown and rushed for 55 yards and a second score on 14 carries in Saturday's 22-19 overtime win over the Bills.",
    "analysis": "He also ran for one two-point conversion and threw a second to DeAndre Hopkins. After being held scoreless in the first half by a Buffalo defense that ended up sacking him seven times in total, Watson got Houston on the board late in the third quarter with a 20-yard TD scamper before leading the team to two more scoring drives in the fourth. The quarterback saved his best efforts for last, making a miraculous escape on another seemingly certain sack in OT to find Taiwan Jones along the sideline for a 34-yard catch-and-run that set up the game-winning field goal. Watson will try to keep pace with Patrick Mahomes and the Chiefs next Sunday on the road in the AFC divisional round.",
    "timestamp": "2020-01-05 06:53 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 19.6, 'BYE', 18.9, 23.0, 16.5, 15.8, 21.6, 25.4, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 18.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 13,
    "avg_fp2": 16.52,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 14.98,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Nearly perfect in victory",
    "report": "Garoppolo completed 18 of 22 pass attempts for 285 yards with no touchdowns or interceptions in Sunday's 26-21 win over the Seahawks.",
    "analysis": "Garoppolo fared much better against the Seahawks in the teams' second matchup this season as he had more time to stand in the pocket behind a healthier offensive line and pick apart Seattle's defense. The only blemish on his line was the lack of scores, as San Francisco's runners finished off the drives that the aerial attack started. The 28-year-old concludes his first full regular season with a 69.1 percent completion rate, 3,978 passing yards and a 27:13 TD:INT ratio while leading his team to the No. 1 seed in the NFC heading into the playoffs. Garoppolo didn't finish with a gaudy yardage total due to the 49ers' strong rushing attack and defensive unit, but his 8.4 yards per attempt (third behind only Matthew Stafford and Ryan Tannehill) displays his ability to hit big plays without being erratic. He may not have finished as a top fantasy arm -- and may not next year in coach Kyle Shanahan's current power-run scheme -- but Jimmy G certainly delivered on the real football hype in 2019.",
    "timestamp": "2019-12-29 10:54 PM",
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
    "week17": 11.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1, 29.06, 12.6, 12.42, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.0, 18.0, 14.6, 15.6, 10.6, 21.8, 19.4, 16.7, 12.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.8, 3.1, 0.9, 'BYE', 9.3, 12.0, 10.6, 5.9, 5.0, 8.2, 9.1, 9.3, 8.5, 9.1, 7.6, 11.0, 9.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 23.1, 27.4, 'BYE', 14.2, 19.0, 20.3, 22.5, 26.9, 23.3, 17.4, 19.0, 19.7, 17.3, 27.2, 27.3, 17.5]
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
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 14,
    "avg_fp2": 20.98,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 14.35,
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
    "headlineNews": "Throws for 325 yards, advances",
    "report": "Wilson completed 18 of 30 passes for 325 yards and a touchdown in Sunday's 17-9 wild-card playoff win over the Eagles. He also ran eight times for 46 yards.",
    "analysis": "Wilson produced his best passing yardage since Week 9 versus the Buccaneers, and he also led the Seahawks in rushing. The veteran signal-caller connected with DK Metcalf on seven passes for 160 yards and a touchdown, including a 36-yard toss to ice the game. Wilson and the Seahawks will travel to Green Bay for the divisional round next Sunday.",
    "timestamp": "2020-01-05 04:44 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 23.9, 19.5, 'BYE', 15.3, 20.1, 21.1, 19.2, 22.0, 17.2]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 17.2,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 23,
    "avg_fp2": 16.83,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 16.24,
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
    "headlineNews": "Throws winning TD pass",
    "report": "Cousins completed 19 of 31 pass attempts for 242 yards and a touchdown during Sunday's 26-20 wild-card win over the Saints.",
    "analysis": "Cousins struggled in the early going, taking a back seat as the rushing attack carried the team. He was pressed into action in the second half and in overtime, when he led the team down the field before completing the game-winning touchdown to Kyle Rudolph. The veteran primarily connected with Adam Thielen, who broke off several big gains while piling up 129 yards. Although Cousins came out on top in this one, he didn't exactly light up the scoreboard and could be hard-pressed to do so again in next Saturday's divisional-round matchup with the 49ers.",
    "timestamp": "2020-01-05 04:47 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 15.5, 19.5, 11.2, 'BYE', 13.2, 18.6, 19.8, 20.3, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 16.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 21,
    "avg_fp2": 19.18,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 12.83,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Manages team to victory",
    "report": "Tannehill completed eight of 15 pass attempts for 72 yards, a touchdown and an interception in the team's wild-card round win over New England on Saturday. Thanks He added four carries for 11 yards.",
    "analysis": "Tannehill took a backseat to Derrick Henry, attempting just 15 passes as compared to Henry's 34 rush attempts. He also failed to work efficiently, an oddity compared to his other performances this season. Regardless, Tannehill's winning ways continued as he improved his record to 8-3 as the Titans' starting quarterback. He'll look to add at least one more victory to his resume in the team's second-round matchup against the Ravens.",
    "timestamp": "2020-01-04 09:34 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 18.8, 10.8, 19.6, 'BYE', 13.0, 11.9, 13.9, 19.5, 18.3, 15.3]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 20.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 18.14,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
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
    "headlineNews": "Surpasses 1,000 rushing yards",
    "report": "Jones carried the ball 25 times for 100 yards in the team's Week 17 win over Detroit. He added two receptions for 43 yards.",
    "analysis": "Jones gained 10 yards or more on three separate carries, recording at least 100 rushing yards for the fifth time this season. By racking up 439 rushing yards in the last four games of the regular season, Jones also surpassed 1,000 yards on the ground for the first time in his career. Jones will be entering the final year of his rookie contract in 2020 and figures to once again lead the backfield with Jamaal Williams working closely behind him.",
    "timestamp": "2019-12-29 04:12 PM",
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
    "week17": 15.3
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8, 5.1, 28.2, 17.1, 27.0, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 14.8, 17.8, 'BYE', 10.2, 10.3, 11.3, 14.1, 12.2, 20.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.2, 0.0, 0.0, 7.0, 5.6, 0.0, 13.7, 0.0, 18.6, 'BYE', 0.0, 4.4, 1.1, 0.0, 0.0, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 15.0, 20.1, 19.3, 22.7, 27.0, 35.0, 33.6, 16.2, 47.8, 'BYE', 38.9, 18.2, 17.2, 12.3, 18.7, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 16.8,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.2,
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
    "headlineNews": "Runs over Patriots",
    "report": "Henry carried the ball 34 times for 182 yards and a touchdown in the team's wild-card round win over New England. He added one reception for 22 yards.",
    "analysis": "Henry was the dominant force behind the Titans' upset win, accounting for 204 total yards. He had a number of long rushes, but was particularly dominant on the team's final drive before halftime, ripping off runs of 29, 11 and nine yards while also recording his lone reception. He capped off that drive with a one-yard touchdown plunge to give the Titans a lead that they would never relinquish. Henry will look to continue his impressive form at Baltimore in the second round of the playoffs.",
    "timestamp": "2020-01-04 08:48 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.7, 13.0, 'BYE', 16.3, 9.1, 12.1, 18.4, 'DNP', 16.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 16.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 1,
    "avg_fp2": 15.3,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Sits out first postseason practice",
    "report": "Ingram (calf) wasn't present for Tuesday's practice, Jonas Shaffer of The Baltimore Sun reports.",
    "analysis": "Though Ingram's left calf strain kept him sidelined for a meaningless regular-season finale Dec. 29 against the Steelers, coach John Harbaugh expressed optimism the running back would be ready to go coming out of the Ravens' first-round bye in the postseason. According to Ian Rapoport of NFL Network, Ingram was \"essentially full speed\" during the Ravens' unofficial practices last week, but he felt some renewed tightness in his calf in those workouts and will now sit out to begin the current week. Ingram's availability for Saturday's divisional-round matchup with the Titans suddenly appears to be in more peril, though he'll still have two more opportunities to fit in some on-field work before the Ravens make a ruling on his status. If Ingram fails to shake off the injury in time for Saturday, Gus Edwards (21 carries for 130 yards in Week 17) would presumably headline the Ravens' ground attack.",
    "timestamp": "2020-01-07 10:51 AM",
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
    "week14": 9.4,
    "week15": 23.1,
    "week16": 16.1,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4, 9.4, 22.0, 24.3, 7.2, 9.4, 23.1, 16.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.6, 14.6, 10.8, 8.5, 9.7, 16.1, 12.3, 15.9, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 8.5, 6.7, 8.1, 8.8, 10.4, 8.7, 'BYE', 4.6, 13.9, 4.8, 7.9, 8.6, 7.4, 7.8, 9.5, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.4, 26.1, 16.6, 27.7, 20.8, 23.2, 17.9, 'BYE', 13.6, 19.2, 20.0, 15.1, 19.5, 19.4, 20.7, 19.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 14.7,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 23,
    "avg_fp2": 11.4,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.14,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Strikes twice in huge win",
    "report": "Williams ran for 124 yards and two touchdowns on 12 carries during Sunday's 31-21 win over the Chargers. He added 30 yards on four receptions.",
    "analysis": "Williams extended Kansas City's lead to two scores midway through the third quarter when he kept his footing after an attempted group tackle, spun out, and raced down the sideline for a game-changing 84-yard touchdown. He struck again from seven yards out to put the game away in the fourth quarter. Williams has come out of the gate hot after missing several weeks with a rib injury, accounting for 246 total yards and three touchdowns in two games. The Chiefs get a bye next week and will play either the Patriots, Texans or Bills in the divisional round.",
    "timestamp": "2019-12-29 02:04 PM",
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
    "week17": 29.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP', 'DNP', 'DNP', 16.7, 29.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 9.6, 8.7, 13.6, 'BYE', 'DNP', 'DNP', 'DNP', 12.8, 14.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 16.0, 'DNP', 'DNP', 10.9, 6.7, 5.0, 0.9, 0.0, 1.2, 0.7, 'BYE', 'DNP', 'DNP', 'DNP', 4.7, 3.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 22.2, 'DNP', 'DNP', 21.5, 28.9, 19.7, 12.1, 13.6, 8.4, 19.7, 'BYE', 'DNP', 'DNP', 'DNP', 10.0, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10456.png",
    "name": "Marshawn Lynch",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 13.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 4,
    "avg_fp2": 11.92,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 23.01,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Increased workload may be on tap",
    "report": "Coach Pete Carroll feels Lynch is ready for additional touches, Kevin Patra of NFL.com reports. \"I want to see him do more now. He's made it through, again, two games,\" Carroll said. \"I think we can increase his role and allow him to be a little more active part of it.\"",
    "analysis": "Lynch has rushed 18 times for 41 yards and caught two of three targets for 25 yards over his first games back following over a year without playing an NFL snap. Beast Mode signaled that he's feeling good following the game and could absorb a heightened workload. We'll take Carroll's words with a grain of salt. While there's no reason to think Lynch won't be a bigger part of the game plan going forward, Travis Homer has proved to have big-play upside that Lynch doesn't appear to have at 33 years old, so Carroll realistically could ride the hot hand -- whether it be Lynch or Homer -- in the divisional round against the Packers. In essence, Lynch is ready for an increased workload if he earns it. With that said, Lynch has a touchdown in each game since returning and is the Seahawks' clear goal-line back.",
    "timestamp": "2020-01-06 12:16 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 13.6,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 6,
    "avg_fp2": 18.99,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.89,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Scores two TDs in upset win",
    "report": "Cook (shoulder) carried 28 times for 94 yards and two touchdowns Sunday against the Saints. He also caught three of five targets for 36 additional yards in the 26-20 wild-card win.",
    "analysis": "Making his return after recovering from a shoulder injury, Cook managed a meager 3.4 yards per carry against one of the league's best run defenses but nearly reached the 100-yard mark through sheer volume. He scored a five-yard rushing touchdown in the second quarter and added a one-yard score in the third. Cook was also quite effective as a receiver, finishing second on the team in receiving yards and third in targets. He should be instrumental in the gameplan for next Saturday's divisional-round matchup against the 49ers.",
    "timestamp": "2020-01-05 04:13 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 20.1, 11.3, 13.0, 'BYE', 14.3, 17.4, 11.8, 'DNP', 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 12.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 2,
    "avg_fp2": 9.89,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.61,
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
    "headlineNews": "Hits pay dirt twice",
    "report": "Mostert rushed 10 times for 57 yards and two touchdowns while gaining 16 more yards on his lone reception in Sunday's 26-21 win over Seattle.",
    "analysis": "Mostert led the 49ers' backfield trio in touches and production for yet another week, finishing with the only usable stat line from the bunch from a fantasy perspective. Formerly known for his pure speed and special teams contributions, the 27-year-old was able to take advantage of playing time opened up by teammate injuries to establish himself as a big-play back. Mostert racked up 952 total yards and 10 touchdowns this season, most of which came over the final five weeks of the year when he took over as the head of a committee. The speedy back's 5.6 yards per carry would have led the league had he finished with enough carries to qualify, but the gaudy average is impressive nonetheless. All three of San Francisco's backfield options are under team control for 2020, but if the end of the regular season is any indicator, Mostert could find himself as the top option heading into training camp next year.",
    "timestamp": "2019-12-29 10:23 PM",
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
    "week17": 19.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 'DNP', -0.2, 4.0, 3.7, 13.2, 22.4, 23.9, 10.4, 11.3, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 'DNP', 5.7, 2.5, 8.4, 1.8, 2.0, 2.0, 11.4, 13.1, 16.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 4.4, 'BYE', 0.0, 0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 2.0, 4.5, 4.2, 0.0, 8.4, 1.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 8.9, 27.6, 'BYE', 25.7, 17.9, 20.2, 'DNP', 21.0, 9.9, 10.2, 8.4, 14.3, 17.2, 15.8, 16.6, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 11.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 9,
    "avg_fp2": 9.28,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.57,
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
    "headlineNews": "Finds end zone in wild-card win",
    "report": "Hyde carried the ball 16 times for 48 yards and caught his only target for a five-yard touchdown in Saturday's 22-19 overtime win over the Bills.",
    "analysis": "His fourth-quarter TD grab gave the Texans their first lead of the game, but overall, Hyde had trouble making a dent against a tough Bills defense -- his longest run went for only eight yards. He should find more room to operate next Sunday in Kansas City during the AFC divisional round, facing a Chiefs defense that allowed 4.9 yards a carry (28th in the league) and 128.2 rushing yards a game (26th) during the regular season.",
    "timestamp": "2020-01-05 06:59 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 8.1, 'BYE', 10.5, 5.4, 9.5, 8.7, 14.0, 6.5, 10.7]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 9.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 2,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.61,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Just 18 yards in win",
    "report": "Coleman rushed five times for 11 yards and caught one pass for seven yards in Sunday's 26-21 win over Seattle.",
    "analysis": "Raheem Mostert saw the bulk of playing time (54 percent of offensive snaps) and touches (11), leaving Coleman to share scraps with fellow backup Matt Breida. The former Atlanta Falcon began the year as his new team's starter, and while he experienced early success -- 309 rushing yards and five touchdowns in Weeks 5 through 8 -- the veteran saw his role diminish significantly in the second half of the season. Coleman still managed to finish with a respectable mark of 4.0 yards per carry, but his role for next season is uncertain with fellow backs Raheem Mostert and Matt Breida under team control for 2020. Coleman's outlook could change based on how he and the rest of the 49ers' running back unit performs during the playoffs.",
    "timestamp": "2019-12-30 12:51 PM",
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
    "week17": 2.3
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0, 0.6, 4.0, 3.3, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 16.8, 12.8, 12.9, 12.0, 14.6, 9.2, 5.2, 8.3, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 'DNP', 'DNP', 'BYE', 4.3, 4.4, 4.0, 5.5, 6.1, 3.2, 4.0, 4.7, 9.0, 1.8, 10.4, 6.9, 1.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 'DNP', 'DNP', 'BYE', 14.3, 10.0, 12.6, 17.0, 35.6, 19.0, 15.5, 10.2, 14.8, 9.6, 19.9, 13.7, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 8.9,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 9.06,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Practicing Thursday",
    "report": "Williams (shoulder) practiced Thursday, Rob Demovsky of ESPN.com reports.",
    "analysis": "Williams, who was inactive in Week 17, previously relayed via Matt Schneidman of The Athletic that he would have been able to suit up for the Packers' regular-season finale if it had been a playoff game. His presence on the practice field supports that notion, and it looks like Williams will be good to go when his team takes on a yet-to-be-determined opponent Jan. 12.",
    "timestamp": "2020-01-02 09:43 AM",
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
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9, 6.3, 'BYE', 11.5, 8.7, 2.4, 3.8, 6.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 8.8, 10.1, 'BYE', 9.2, 5.4, 6.7, 8.2, 5.1, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 0.0, 5.2, 4.3, 'DNP', 0.7, 0.5, 0.0, 1.2, 6.9, 'BYE', 0.8, 10.1, 6.8, 5.1, 3.1, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 30.2, 21.3, 26.1, 'DNP', 21.2, 6.9, 18.7, 18.3, 16.8, 'BYE', 20.3, 23.9, 24.9, 11.8, 9.1, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 1,
    "avg_fp2": 5.57,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
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
    "headlineNews": "Piles up 132 scrimmage yards",
    "report": "Edwards carried 21 times for 130 yards and caught one of two targets for two additional yards during Sunday's 28-10 win over the Steelers.",
    "analysis": "Edwards thrived as the team's featured back, rumbling for 6.2 yards per carry en route to a new career high in rushing. Perhaps the only gripe for Edwards' fantasy owners in this one was his inability to find the end zone, as backfield mate Justice Hill vultured a red zone touchdown from Edwards in the second quarter. Still, it was an excellent performance from the second-year back, who could play an expanded role in the team's divisional-round game if Mark Ingram (calf) is still limited by his injury.",
    "timestamp": "2019-12-29 05:29 PM",
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
    "week14": 2.0,
    "week15": 3.5,
    "week16": 7.8,
    "week17": 11.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7, 1.7, 17.2, 5.5, 2.7, 2.0, 3.5, 7.8, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 4.9, 7.3, 5.3, 4.5, 5.6, 9.2, 4.3, 6.2, 14.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 1.2, 0.0, 0.0, 0.5, 1.7, 0.5, 'BYE', 0.7, 1.6, 1.9, 1.2, 3.6, 0.8, 0.0, 0.6, 2.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 9.5, 3.3, 8.3, 9.4, 7.0, 4.9, 'BYE', 4.9, 11.5, 5.9, 18.1, 10.2, 10.6, 15.3, 7.4, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 6.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 23,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.14,
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
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE', 10.5, 4.8, 1.6, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 8.2, 'DNP', 6.8, 'BYE', 5.3, 5.0, 7.7, 'DNP', 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.9, 0.0, 10.6, 13.0, 8.5, 2.5, 5.6, 3.8, 'DNP', 2.0, 'BYE', 3.8, 5.9, 7.3, 'DNP', 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 16.0, 20.0, 21.2, 16.9, 9.0, 11.0, 12.0, 'DNP', 10.7, 'BYE', 11.4, 18.4, 10.4, 'DNP', 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 5.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 9,
    "avg_fp2": 8.25,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.57,
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
    "headlineNews": "Makes impact in limited role",
    "report": "Johnson carried the ball three times for 38 yards and caught all three of his targets for 30 yards in Saturday's 22-19 overtime wild-card win over the Bills.",
    "analysis": "While Carlos Hyde struggled in the lead role out of the backfield against a stout Bills front seven -- averaging only 3.0 yards a carry and having his longest run go for only eight yards -- Johnson was able to break free for a couple of splash plays in the second half and ended up out-gaining Hyde on the day despite being out-touched, 17-6. Next Sunday's trip to Kansas City for the AFC divisional round figures to be more favorable for Hyde, as the Chiefs ranked in the bottom seven in the league in yards per carry and rushing yards per game allowed during the regular season, so Johnson -- who hasn't seen double-digit touches in a game since Week 13 -- is likely to have a secondary role in the offense once again.",
    "timestamp": "2020-01-05 07:19 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.5, 'BYE', 7.2, 7.0, 8.1, 6.7, 10.3, 5.4, 6.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361606.png",
    "name": "Darwin Thompson",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.3,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 23,
    "avg_fp2": 2.3,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.14,
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
    "week17": 1.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 0.1, 0.8, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 6.3, 4.4, 'DNP', 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 3.1, 3.3, 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.6, 2.1, 'DNP', 3.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 0.8, 0.6, 1.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 2.2, 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.9, 1.5, 2.0, 2.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.7, 9.7, 'DNP', 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038441.png",
    "name": "Justice Hill",
    "depthchart": "Reserve: RB-3",
    "team": "Baltimore Ravens",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Pos": 1,
    "avg_fp2": 2.84,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.97,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Finds end zone in win over Steelers",
    "report": "Hill carried 10 times for 39 yards and a touchdown Sunday against the Steelers. He also caught one of two targets for 10 additional yards in the 28-10 win.",
    "analysis": "Hill played second fiddle to Gus Edwards, receiving double-digit carries for the first time in his young career. He averaged just 3.9 yards per carry, but he salvaged his day from a fantasy perspective with an eight-yard touchdown run at the end of the second quarter. Hill received extended run with Mark Ingram (calf) inactive for the contest, but the latter should return for the team's postseason run, which should constrain the distribution of backfield touches.",
    "timestamp": "2019-12-29 06:21 PM",
    "week01": 2.7,
    "week02": 1.9,
    "week03": 0.1,
    "week04": 2.7,
    "week05": 0.7,
    "week06": 3.1,
    "week07": 0.0,
    "week08": "BYE",
    "week09": 0.7,
    "week10": 1.1,
    "week11": 3.2,
    "week12": 2.7,
    "week13": 0.3,
    "week14": 0.8,
    "week15": 1.5,
    "week16": 12.6,
    "week17": 11.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 1.9, 0.1, 2.7, 0.7, 3.1, 0.0, 'BYE', 0.7, 1.1, 3.2, 2.7, 0.3, 0.8, 1.5, 12.6, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 3.9, 3.6, 2.7, 2.8, 6.2, 2.1, 'BYE', 1.7, 3.5, 5.3, 1.6, 0.3, 4.0, -0.4, 1.8, 4.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 1.1, 3.5, 2.0, 2.0, 2.6, 0.0, 'BYE', 0.0, 0.4, 0.0, 0.0, 0.0, 0.0, 0.2, 1.4, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.2, 4.9, 4.4, 2.7, 3.0, 3.4, 3.2, 'BYE', 3.2, 3.5, 1.4, 3.0, 3.6, 2.6, 4.1, 3.4, 11.9]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 14.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 21,
    "avg_fp2": 11.94,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.67,
    "fanduelSalary": "$7500",
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
    "week17": 20.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 8.5, 4.2, 'BYE', 10.7, 16.9, 6.9, 11.2, 10.7, 18.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 12.4,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.76,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Goes deep against Chargers",
    "report": "Hill caught four of five targets for 61 yards during Sunday's 31-21 win over the Chargers.",
    "analysis": "Hill was quiet for the bulk of Sunday's game, when, with the Chiefs nursing a three-point lead late in the fourth quarter, he got behind the Chargers' secondary for a 47-yard completion to set up the game-sealing touchdown. The win, coupled with a Patriots loss, means the Chiefs will be the AFC's No. 2 seed and play either New England, the Texans or the Bills in two weeks. In two games against New England and Houston this season, Hill has 11 total receptions for 147 yards and two touchdowns.",
    "timestamp": "2019-12-29 02:27 PM",
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
    "week17": 8.1
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6, 10.0, 21.3, 9.7, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 11.5, 13.5, 14.1, 'BYE', 13.5, 15.7, 17.1, 16.4, 12.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [15.3, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 1.0, 6.6, 12.3, 13.2, 7.8, 'BYE', 7.1, 6.1, 5.0, 10.9, 5.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 'DNP', 'DNP', 'DNP', 'DNP', 15.2, 28.1, 29.4, 16.8, 25.6, 29.1, 'BYE', 20.1, 28.3, 24.6, 26.4, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 12.2,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 10.7,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.33,
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
    "headlineNews": "Ends regular season with score",
    "report": "Adams hauled in seven of his 13 targets for 93 yards and a touchdown in the team's Week 17 win over Detroit.",
    "analysis": "Adams once again served as Aaron Rodgers' primary receiver and benefited by racking up at least 13 targets for the third straight game. Thanks to that tremendous volume, Adams fell just three yards short of his second consecutive 1,000 yard season -- an impressive feat given that he was active for only 12 games. He and the Packers will be in action next in the divisional round of the playoffs, and he should again be at the forefront of the offensive gameplan. Looking to the future, Adams is under contract for two more seasons, though his deal provides an out for the team that would result in $7.2 million of dead cap. However, given his status as an elite receiver in the league and his proven rapport with Aaron Rodgers, it's almost certain he'll be back in Green Bay for the 2020 campaign.",
    "timestamp": "2019-12-29 04:35 PM",
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
    "week17": 18.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 'DNP', 'DNP', 'DNP', 'DNP', 7.6, 15.3, 'BYE', 15.8, 21.4, 6.1, 19.8, 16.1, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 11.0, 13.2, 'BYE', 9.1, 14.3, 13.1, 15.1, 12.6, 17.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 4.1, 8.3, 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 6.0, 5.2, 'BYE', 6.3, 5.2, 10.7, 6.6, 13.5, 10.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 16.3, 19.0, 25.8, 'DNP', 'DNP', 'DNP', 'DNP', 15.0, 17.3, 'BYE', 16.3, 22.9, 23.3, 15.3, 21.2, 22.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 11.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Leading receiver in wild-card win",
    "report": "Hopkins caught six of eight targets for 90 yards in Saturday's 22-19 overtime win over the Bills. He also caught a two-point conversion.",
    "analysis": "The entire Texans offense was stagnant in the first half as the team faced a 13-0 deficit heading into the third quarter, and things didn't seem much better for Houston coming out of halftime after Hopkins lost a fumble on his first catch of the game. He got rolling after that, however, making two big grabs to help set up a Deshaun Watson TD run that got the team on the board, and Hopkins was huge in the fourth quarter and OT as they completed the comeback. The All-Pro ended up leading all players in receiving yards in the game, and he could be in line for another big performance next Sunday in Kansas City in the AFC divisional round -- in five career games against the Chiefs, Hopkins has 32 catches for 394 yards and a remarkable seven touchdowns.",
    "timestamp": "2020-01-05 07:07 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 14.7, 'BYE', 8.8, 17.7, 18.2, 16.3, 11.9, 20.0, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 11.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 13,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
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
    "week17": 4.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1, 30.6, 1.9, 7.6, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 14.7, 13.9, 12.2, 12.9, 6.3, 7.5, 6.0, 8.5, 11.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 9.2, 9.0, 'BYE', 9.1, 5.3, 8.8, 7.6, 7.3, 11.6, 5.1, 3.9, 3.6, 6.5, 2.4, 4.5, 2.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 19.0, 19.8, 'BYE', 14.7, 23.3, 15.3, 19.6, 21.5, 26.4, 16.4, 24.5, 15.8, 11.2, 17.8, 16.6, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 11.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 23,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
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
    "headlineNews": "Contributes 129 receiving yards",
    "report": "Thielen caught seven of nine targets for 129 yards during Sunday's 26-20 wild-card win over the Saints.",
    "analysis": "Thielen averaged an impressive 18.4 yards per catch while gashing the New Orleans secondary for several big plays, including one that set up the winning touchdown in overtime. The veteran had just three catches to his name since October, so this outstanding effort was a tremendous boost to his team's cause en route to the improbable upset. Thielen will be instrumental in next week's divisional-round road matchup with the 49ers, but he'll be facing one of the better defenses in the league.",
    "timestamp": "2020-01-05 04:19 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 10.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 9.9, 11.8, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 9.1,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 13,
    "avg_fp2": 10.73,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
    "fanduelSalary": "$6600",
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
    "week17": 22.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1, 13.4, 4.48, 13.9, 22.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 5.9, 9.2, 7.6, 13.0, 8.6, 8.8, 8.2, 9.5, 9.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 5.4, 8.5, 'BYE', 9.7, 9.3, 'DNP', 5.6, 3.8, 1.8, 3.3, 0.0, 0.0, 3.0, 2.3, 5.7, 3.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.2, 6.1, 9.2, 'BYE', 11.2, 10.4, 'DNP', 6.7, 18.9, 15.4, 13.1, 19.6, 22.0, 20.8, 20.4, 17.6, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 9.0,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 5.33,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.33,
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
    "headlineNews": "Tallies third touchdown",
    "report": "Lazard hauled in four of his eight targets for 69 yards and a touchdown in the team's Week 17 win over Detroit.",
    "analysis": "Lazard provided a few key plays in the team's comeback victory, the biggest coming on a 28-yard leaping touchdown reception that tied the game at 20 late in the fourth quarter. After failing to command targets with a healthy receiving corps throughout the middle of the season, Lazard has emerged as a reliable target for Aaron Rodgers by combining to rack up 17 targets across the team's last two games. That sets him up to make a strong contribution in the team's playoff run, which will begin with a divisional round matchup. Heading into 2020, Lazard will be an exclusive-rights free agent, meaning the Packers will only need to offer a one-year contract at the league minimum to retain his rights. Given his emergence as a reliable target, it's likely that he'll remain in Green Bay.",
    "timestamp": "2019-12-29 04:51 PM",
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
    "week17": 14.9
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.7, 6.7, 'DNP', 'DNP', 'BYE', 'DNP', 17.8, 2.9, 2.4, 7.0, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.0, 3.1, 'DNP', 'DNP', 'BYE', 'DNP', 4.5, 6.8, 5.9, 8.3, 10.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.1, 0.5, 12.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.1, 8.9, 'DNP', 'DNP', 'BYE', 'DNP', 10.3, 5.7, 4.3, 2.8, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 9.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.12,
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
    "headlineNews": "Active, but not expected to play",
    "report": "Brown (illness) is active for Sunday's game against the Steelers but isn't expected to play in the contest, Adam Schefter of ESPN reports.",
    "analysis": "The Ravens have already clinched the AFC's No. 1 seed and are expected to lean heavily on a lineup of backup players in a meaningless regular-season finale, so the team's top wideout won't be in store for any work. Brown likely would have been inactive for the contest if the Ravens hadn't already dedicated all seven of those spots to resting or injured players.",
    "timestamp": "2019-12-29 12:04 PM",
    "week01": "DNP",
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
    "week14": 1.3,
    "week15": 12.5,
    "week16": 1.1,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3, 16.0, 3.3, 18.7, 0.6, 1.3, 12.5, 1.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.5, 8.1, 11.2, 8.3, 12.0, 8.9, 12.7, 5.4, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 10.4, 14.6, 14.4, 12.8, 'DNP', 'DNP', 'BYE', 11.9, 9.3, 9.4, 1.4, 2.2, 11.6, 0.0, 12.0, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 17.2, 18.6, 16.2, 14.5, 'DNP', 'DNP', 'BYE', 13.4, 24.4, 15.7, 14.8, 17.1, 22.8, 27.3, 19.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 8.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 14,
    "avg_fp2": 12.14,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.4,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Generates 62 yards in win",
    "report": "Lockett caught four of eight targets for 62 yards in Sunday's 17-9 wild-card win over the Eagles.",
    "analysis": "DK Metcalf stole the show with seven receptions for 160 yards and a score, but Lockett produced modest production despite not finding the end zone. Three of Lockett's four catches went for first downs, and it was his third time in four games where he mustered 50-plus yards. Lockett and the Seahawks will head to Green Bay for the divisional round and face a Packers defense that allowed 232.6 passing yards per game during the regular season.",
    "timestamp": "2020-01-05 06:16 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 17.1, 10.4, 'BYE', 10.9, 12.7, 11.2, 16.4, 12.7, 14.4]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 7.9,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 23,
    "avg_fp2": 12.03,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Idle Tuesday with illness",
    "report": "Diggs wasn't in attendance for Tuesday's walk-through practice due to an illness, Tom Pelissero of NFL Network reports.",
    "analysis": "After defeating the Saints in overtime Sunday, the Vikings are holding only a light workout to begin the week, as the team faces a quick turnaround for Saturday's divisional-round matchup with the 49ers. So long as Diggs returns to practice in some fashion Wednesday and/or Thursday, he'll likely enter the game without an injury designation.",
    "timestamp": "2020-01-07 02:07 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.0, 9.7, 12.2, 'BYE', 11.4, 21.9, 17.5, 14.3, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 21,
    "avg_fp2": 6.24,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.67,
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
    "headlineNews": "Records four receptions",
    "report": "Davis hauled in four of his five targets for 44 yards in a Week 17 win over the Texans.",
    "analysis": "He finished second on the Titans in receptions, targets and yards, though he was again overshadowed by A.J. Brown. Davis came close to a bigger day but had a touchdown called back after he was ruled down at the one-yard line upon review. Overall, the third-year receiver had a hard time getting on track this season, surpassing five targets in a game on only four occasions. He's been surpassed by Brown as Ryan Tannehill's top receiver, but Davis will almost certainly be back in Tennessee in 2020 with one year still remaining on his rookie deal, plus a potential fifth-year option should the organization pick it up. For now, his focus will be on the team's first-round playoff matchup against New England.",
    "timestamp": "2019-12-30 07:23 AM",
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
    "week13": 2.8,
    "week14": 4.4,
    "week15": 7.2,
    "week16": 5.5,
    "week17": 6.4
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 5.9, 17.6, 3.8, 5.1, 17.0, 1.9, 6.8, 'DNP', 'BYE', 3.9, 2.8, 4.4, 7.2, 5.5, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 3.1, 9.5, 7.3, 9.4, 6.0, 12.3, 5.6, 'DNP', 'BYE', 7.0, 9.1, 2.9, 6.5, 4.2, 8.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.5, 0.7, 0.7, 1.2, 2.4, 3.9, 3.6, 0.0, 'DNP', 'BYE', 1.9, 2.1, 1.8, 6.4, 3.3, 4.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 10.1, 26.9, 9.4, 9.1, 14.0, 7.1, 18.2, 10.7, 'DNP', 'BYE', 10.8, 6.4, 8.7, 9.6, 8.4, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 6.4,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 4.97,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 26.12,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Records four touches in win",
    "report": "Snead caught three of five passes for 22 yards during Sunday's 28-10 win over the Steelers, and failed to gain any yards on his lone carry.",
    "analysis": "It was a quiet day for most of the Ravens' weapons, as Lamar Jackson and other front-line players were rested and Baltimore's defense smothered a depleted Pittsburgh squad. Snead was among the exceptions. His five targets were his most since Week 6 and his four touches and 22 yards were his most since Week 5. That should tell you all that you need to know about his role in this offense. After a bye, the Ravens will play the Texans, Bills or Titans in the divisional round. Snead caught five of seven targets for 26 yards and a touchdown in games against Houston and Buffalo this season.",
    "timestamp": "2019-12-31 03:43 PM",
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
    "week14": 8.8,
    "week15": 2.0,
    "week16": 0.0,
    "week17": 3.7
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2, 2.3, 14.4, 1.7, 8.8, 2.0, 0.0, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 6.4, 5.8, 7.8, 9.4, 4.4, 5.9, 11.0, 5.3, 9.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 0.0, 1.1, 0.0, 2.8, 1.1, 'BYE', 4.1, 0.0, 0.1, 0.0, 0.6, 0.3, 1.7, 1.1, 5.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.3, 14.2, 10.0, 11.8, 13.5, 9.6, 9.1, 'BYE', 10.6, 9.9, 7.5, 9.0, 18.2, 12.6, 12.8, 11.2, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.3,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.76,
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
    "headlineNews": "Targeted twice in win",
    "report": "Watkins caught one of two targets for eight yards during Sunday's 31-21 win over the Chargers.",
    "analysis": "Watkins' two targets marked a season low during a peculiar game in which the Chiefs didn't really get going through the air, but benefited from a long kick return TD and a healthy running game. Despite a monster opener and more targets than he'd had since 2015, Watkins set a career low at 12.9 yards per catch and managed three or fewer touchdowns for the third time in his last four seasons. All three of his touchdowns came in Week 1. After the Chiefs' first-round bye comes a matchup against the Patriots, Texans or Bills. Watkins caught four of eight passes for 50 yards in Week 14's showdown with New England.",
    "timestamp": "2019-12-31 02:50 PM",
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
    "week17": 1.3
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE', 0.0, 7.0, 8.4, 3.8, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 8.5, 7.1, 7.7, 'BYE', 6.0, 9.2, 8.6, 5.3, 6.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 0.0, 2.4, 1.0, 4.0, 'DNP', 'DNP', 1.0, 0.0, 2.8, 0.0, 'BYE', 0.8, 3.8, 2.9, 4.2, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 38.0, 20.4, 16.9, 22.8, 'DNP', 'DNP', 3.5, 18.9, 6.8, 16.2, 'BYE', 12.5, 19.5, 11.7, 9.6, 24.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 13,
    "avg_fp2": 5.18,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.09,
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
    "headlineNews": "Finishes season with five scores",
    "report": "Bourne had 30 receptions for 358 yards and five touchdowns in 16 games this season.",
    "analysis": "Bourne started the year as a reserve, but injuries and improved play by the wideout boosted him to third on the depth chart to finish the season. His production was mainly touchdown-dependent, which kept the 23-year-old out of the fantasy picture for the most part. Bourne will enter the 2020 season as a restricted free agent, and his play during the playoffs could influence whether the club elects to keep him around for a fourth year.",
    "timestamp": "2020-01-02 02:20 PM",
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
    "week17": 0.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 3.7, 5.7, 15.3, 1.6, 3.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 9.0, 4.3, 5.9, 6.1, 5.8, 6.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 0.0, 0.8, 1.9, 0.0, 2.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.9, 'DNP', 'DNP', 'DNP', 'DNP', 9.5, 10.1, 8.6, 11.1, 7.3, 6.3]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 14.9,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 13,
    "avg_fp2": 12.86,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.62,
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
    "headlineNews": "Totals 93 yards in win",
    "report": "Kittle had seven catches for 86 yards and rushed once for seven yards in Sunday's 26-21 win over Seattle.",
    "analysis": "Kittle paced all receiving options for either team by hauling in all seven of the balls thrown his way as the 49ers passed the ball with ease against a banged-up Seattle defense. The 86 yards put the 25-year-old over 1,000 receiving yards for the second consecutive season, and his five scores matched last year's output in two fewer games. Kittle's ankle injury that forced him to miss two games -- and never fully healed -- caused him to finish behind fellow stud tight end Travis Kelce in the fantasy rankings, and both figure to again be the top options at the thin position heading into the 2020 campaign.",
    "timestamp": "2019-12-29 09:56 PM",
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
    "week17": 12.8
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4, 15.7, 19.9, 16.4, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.6, 'DNP', 'DNP', 16.3, 12.5, 8.4, 17.4, 11.6, 12.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 13.6, 'BYE', 4.8, 11.8, 8.2, 7.7, 7.0, 'DNP', 'DNP', 7.5, 8.5, 0.0, 7.8, 3.5, 5.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.6, 15.3, 23.7, 'BYE', 19.1, 20.9, 21.8, 21.8, 20.4, 'DNP', 'DNP', 25.6, 20.5, 15.6, 25.2, 17.3, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 12.4,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 5,
    "avg_fp2": 12.92,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 10.51,
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
    "headlineNews": "Picks up three receptions",
    "report": "Kelce caught three of five targets for 24 yards during Sunday's 31-21 win over the Chargers.",
    "analysis": "Kelce met or fell below season lows across multiple statistical categories Sunday, as a few big plays on special teams and in the run game negated the need for Patrick Mahomes to air it out. The victory still meant that the Chiefs will get a bye this weekend and face either the Patriots, Texans or Bills in the divisional round. In two games against New England and Houston this season, Kelce caught 11 of 15 passes for 124 yards to go along with a four-yard touchdown run.",
    "timestamp": "2019-12-31 02:35 PM",
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
    "week17": 3.9
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5, 14.5, 19.7, 17.4, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 6.8, 10.9, 11.2, 'BYE', 13.8, 10.6, 4.4, 12.3, 14.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 5.5, 1.9, 6.0, 4.6, 7.6, 2.1, 8.4, 6.7, 7.2, 7.4, 'BYE', 8.6, 9.0, 7.4, 9.4, 7.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 23.0, 14.9, 19.2, 21.2, 14.5, 14.5, 13.2, 11.5, 14.4, 14.9, 'BYE', 14.4, 16.1, 17.3, 17.2, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 10.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 27,
    "avg_fp2": 11.68,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.14,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Limited at practice",
    "report": "Andrews (ankle) was a limited participant in Tuesday's practice, Jeff Zrebiec of The Athletic reports.",
    "analysis": "Though his reps were capped in the Ravens' first official practice of the postseason, Andrews looks in no real jeopardy of missing Saturday's divisional-round matchup with the Titans. Andrews was sidelined for the Ravens' Week 17 win over the Steelers with a sore ankle, but his absence had more to do with Baltimore having already clinched the AFC's No. 1 seed rather than any major concern about his health.",
    "timestamp": "2020-01-07 12:59 PM",
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
    "week14": 1.9,
    "week15": 13.2,
    "week16": 24.3,
    "week17": "DNP"
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1, 20.3, 15.5, 5.5, 12.5, 1.9, 13.2, 24.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.6, 9.5, 17.4, 10.0, 9.3, 4.3, 7.0, 14.0, 'DNP']
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 0.0, 6.7, 0.0, 0.3, 1.6, 5.5, 'BYE', 2.7, 1.3, 0.0, 3.1, 0.0, 9.8, 3.0, 1.4, 'DNP']
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 20.2, 19.6, 19.8, 16.5, 19.6, 9.2, 'BYE', 20.9, 21.1, 15.0, 20.9, 18.5, 16.9, 14.5, 15.3, 'DNP']
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 9.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 5.11,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.13,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Most receptions since Week 9",
    "report": "Graham was targeted seven times and caught four passes for 49 yards in Sunday's victory over the Lions.",
    "analysis": "The four receptions were Graham's most in a game since Week 9, and the 49 yards were tied for the fourth most he put up in a game this season. With the Packers' next opponent uncertain, it remains to be seen what type of matchup he will face in Green Bay's first playoff matchup.",
    "timestamp": "2019-12-31 09:45 AM",
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
    "week17": 6.9
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2, 2.1, 6.4, 0.5, 2.1, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.9, 7.4, 'BYE', 5.9, 7.1, 9.8, 8.0, 5.1, 8.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 4.9, 2.0, 4.4, 3.2, 4.1, 4.4, 2.7, 5.0, 1.6, 'BYE', 4.2, 4.7, 2.2, 4.4, 3.8, 2.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 12.1, 11.0, 11.5, 7.5, 9.0, 7.9, 12.0, 10.7, 'BYE', 11.0, 11.1, 7.2, 12.9, 8.2, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 7.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 14,
    "avg_fp2": 6.67,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.68,
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
    "headlineNews": "Musters up 16 yards",
    "report": "Hollister caught two of four targets for 16 yards in Sunday's wild-card win over the Eagles.",
    "analysis": "Hollister produced his lowest yardage total since Week 6 -- his debut with the Seahawks -- despite Russell Wilson racking up 325 passing yards. The Seahawks will travel to Green Bay for the divisional round. The Packers allowed, on average, 4.8 receptions, 54 receiving yards per game and six total touchdowns to tight ends during the regular season.",
    "timestamp": "2020-01-06 07:10 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.2, 8.7, 3.8, 6.4, 'BYE', 4.4, 9.5, 4.6, 5.9, 10.3, 8.1]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 7.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 23,
    "avg_fp2": 5.89,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.58,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Scores winning TD vs. Saints",
    "report": "Rudolph caught four of seven targets for 31 yards and a touchdown during Sunday's 26-20 wild-card win over the Saints.",
    "analysis": "Rudolph, who finished second on the team in targets, was held mostly to short gains as he averaged just 7.8 yards per catch. He came through in a big way in overtime when he rose above a defender to secure the game-winning touchdown. The veteran hasn't had many big yardage games this season, but the touchdown was his seventh of the campaign. He'll remain a primary red-zone target in next Sunday's divisional-round road matchup with the 49ers.",
    "timestamp": "2020-01-05 04:36 PM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 5.1, 7.5, 5.3, 'BYE', 16.5, 9.9, 2.3, 8.6, 7.7]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 6.0,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 21,
    "avg_fp2": 5.45,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 6.33,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 2.6, 3.3, 'BYE', 4.8, 8.0, 5.0, 10.5, 8.4, 5.7]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 4.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 15,
    "avg_fp2": 5.82,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.01,
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
    "headlineNews": "Has four catches in playoff win",
    "report": "Fells caught four of five targets for 37 yards in Houston's 22-19 overtime win over the Bills in their AFC wild-card round playoff game Saturday.",
    "analysis": "Fells filled his usual role as the Texans' lead tight end and had his most catches, targets and yards since Week 8. Three of his receptions came on third down to move the sticks, and he had catches on two separate scoring drives. He might have been remembered in a different light had his third-down drop on Houston's first overtime possession led to a Bills' score. Fells played 66 of 69 snaps (96 percent) while the only other active tight end, Jordan Thomas, played just eight.",
    "timestamp": "2020-01-05 07:53 AM",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 4.5, 'BYE', 6.8, 3.6, 3.5, 3.5, 5.6, 3.8, 5.8]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 7.5,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 25.12,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.25,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 7.31,
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
    "week14": 9.0,
    "week15": 7.0,
    "week16": 3.0,
    "week17": 12.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0, 15.0, 13.0, 7.0, 9.0, 7.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 6.3, 6.9, 7.5, 8.3, 8.6, 6.1, 9.3, 8.1, 9.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.5, 3.7, 5.9, 4.8, 8.1, 4.5, 5.6, 'BYE', 3.8, 3.6, 3.7, 4.0, 4.3, 3.4, 6.2, 4.9, 7.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.1, 11.3, 14.4, 12.7, 10.4, 8.8, 'BYE', 14.7, 8.5, 9.5, 10.1, 9.2, 13.7, 12.0, 10.3, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.8,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 8,
    "opp_avg_pts": 25.44,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.44,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.81,
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
    "avg_fp2": 8.25,
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
    "week17": 1.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0, -2.0, 3.0, 1.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 7.3, 7.1, 7.2, 6.8, 6.3, 5.5, 7.0, 9.1, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 6.0, 6.1, 'BYE', 4.9, 2.2, 2.0, 3.9, 3.1, 7.4, 0.2, 4.0, 3.1, 4.0, 2.1, 3.9, 5.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 9.8, 9.5, 'BYE', 8.4, 6.9, 8.4, 13.5, 12.5, 15.3, 14.7, 10.1, 9.6, 10.9, 12.4, 10.7, 10.7]
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
    "opponent": "Houston Texans",
    "opp_rank_pts": 13,
    "opp_avg_pts": 23.81,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.81,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 8,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 7.94,
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
    "week17": 13.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0, 10.0, 11.0, 10.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 6.5, 5.9, 5.9, 'BYE', 6.9, 5.4, 6.1, 8.2, 7.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 0.0, 1.3, 2.6, 1.6, 0.0, 4.8, 3.8, 2.7, 2.4, 3.6, 'BYE', 4.2, 3.2, 0.2, 6.2, 4.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.6, 17.1, 12.7, 8.7, 7.8, 12.3, 7.3, 10.8, 15.7, 12.1, 'BYE', 10.4, 7.8, 16.5, 10.0, 9.4]
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
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 9,
    "opp_avg_pts": 25.31,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.56,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.88,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 6.88,
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
    "week17": 4.0
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0, 10.0, 7.0, 13.0, 11.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.4, 8.1, 'BYE', 6.4, 8.3, 7.6, 7.6, 5.0, 6.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 2.8, 4.6, 3.5, 1.3, 2.7, 2.5, 2.4, 3.7, 2.4, 'BYE', 2.4, 4.9, 3.2, 3.8, 3.7, 1.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 23.0, 10.9, 9.2, 6.9, 7.8, 7.6, 8.5, 8.9, 12.0, 'BYE', 6.0, 9.9, 14.7, 13.5, 10.7, 15.4]
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
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.94,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4300",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 5.5, 5.6, 8.5, 'BYE', 5.0, 7.4, 6.1, 6.9, 8.0]
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
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 4.9,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 32.62,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.69,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.06,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.25,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.6, 6.4, 'BYE', 8.4, 6.1, 6.5, 4.4, 5.8, 7.7]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 4.7,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.81,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.5,
    "team_ranked_takeaways": 9,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3600",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.2, 'BYE', 3.9, 6.2, 6.0, 7.7, 5.4, 6.4, 7.9]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 4.7,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.06,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.06,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3500",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 19'],
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
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 6.0, 5.9, 'BYE', 9.3, 8.3, 8.9, 7.5, 7.6, 6.7]
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